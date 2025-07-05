import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Info } from 'lucide-react';
import { NetworkData, NetworkNode, NetworkConnection } from '../types/network';

interface InteractiveNetworkGraphProps {
  data: NetworkData;
  onBack: () => void;
}

interface D3Node extends NetworkNode {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
  vx?: number;
  vy?: number;
}

interface D3Link extends NetworkConnection {
  source: D3Node;
  target: D3Node;
}

// Funktion zur Überprüfung und Erzwingung der Mindestdistanz
const enforceMinimumDistance = (nodes: D3Node[], minDistance: number = 350) => {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      
      const dx = nodeB.x! - nodeA.x!;
      const dy = nodeB.y! - nodeA.y!;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < minDistance && distance > 0) {
        // Berechne die benötigte Verschiebung
        const overlap = minDistance - distance;
        const moveDistance = overlap / 2 + 10; // Extra Puffer
        
        const moveX = (dx / distance) * moveDistance;
        const moveY = (dy / distance) * moveDistance;
        
        // Bewege beide Nodes auseinander (außer sie sind manuell fixiert)
        if (!nodeA.fx && !nodeA.fy) {
          nodeA.x! -= moveX;
          nodeA.y! -= moveY;
        }
        if (!nodeB.fx && !nodeB.fy) {
          nodeB.x! += moveX;
          nodeB.y! += moveY;
        }
      }
    }
  }
};

// Intelligente Startpositionierung mit garantierter Mindestdistanz
const generateSpacedLayout = (nodes: NetworkNode[], width: number, height: number) => {
  const positions: { [key: string]: { x: number, y: number } } = {};
  const minDistance = 350;
  const placedNodes: { x: number, y: number }[] = [];
  
  // Finde Center-Nodes
  const centerNodes = nodes.filter(node => node.position === 'center');
  const otherNodes = nodes.filter(node => node.position !== 'center');
  
  // GARANTIERTE ZENTRIERUNG für Center-Nodes
  // Platziere Center-Nodes zuerst
  if (centerNodes.length > 0) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    if (centerNodes.length === 1) {
      // Einzelner Center-Node: Exakt in der Mitte
      positions[centerNodes[0].id] = { x: centerX, y: centerY };
      placedNodes.push({ x: centerX, y: centerY });
    } else {
      // Mehrere Center-Nodes: Kreisförmig um die Mitte mit größerem Radius
      const radius = minDistance;
      centerNodes.forEach((node, index) => {
        const angle = (index / centerNodes.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        positions[node.id] = { x, y };
        placedNodes.push({ x, y });
      });
    }
  }
  
  // Platziere andere Nodes mit garantierter Mindestdistanz
  otherNodes.forEach(node => {
    if (node.x && node.y) {
      // Verwende vordefinierte Position, aber prüfe Mindestdistanz
      let x = node.x;
      let y = node.y;
      let attempts = 0;
      
      while (attempts < 100) {
        let tooClose = false;
        
        for (const placed of placedNodes) {
          const distance = Math.sqrt((x - placed.x) ** 2 + (y - placed.y) ** 2);
          if (distance < minDistance) {
            tooClose = true;
            break;
          }
        }
        
        if (!tooClose) {
          positions[node.id] = { x, y };
          placedNodes.push({ x, y });
          break;
        }
        
        // Verschiebe Position leicht
        x += (Math.random() - 0.5) * 100;
        y += (Math.random() - 0.5) * 100;
        
        // Halte in Grenzen
        x = Math.max(150, Math.min(width - 150, x));
        y = Math.max(150, Math.min(height - 150, y));
        
        attempts++;
      }
    } else {
      // Finde eine freie Position
      let attempts = 0;
      let x, y;
      
      do {
        x = 150 + Math.random() * (width - 300);
        y = 150 + Math.random() * (height - 300);
        attempts++;
        
        let validPosition = true;
        for (const placed of placedNodes) {
          const distance = Math.sqrt((x - placed.x) ** 2 + (y - placed.y) ** 2);
          if (distance < minDistance) {
            validPosition = false;
            break;
          }
        }
        
        if (validPosition) {
          positions[node.id] = { x, y };
          placedNodes.push({ x, y });
          break;
        }
      } while (attempts < 200);
    }
  });
  
  return positions;
};

export default function InteractiveNetworkGraph({ data, onBack }: InteractiveNetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 700 });

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const width = Math.max(800, rect.width - 32); // Minimum width
        const height = Math.max(500, Math.min(800, window.innerHeight * 0.6)); // Responsive height
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const { width, height } = dimensions;
    const minDistance = 350;

    // Generiere Positionen mit garantierter Mindestdistanz
    const spacedPositions = generateSpacedLayout(data.nodes, width, height);

    // Create nodes and links for D3
    const nodes: D3Node[] = data.nodes.map(node => ({ 
      ...node,
      x: spacedPositions[node.id]?.x || (150 + Math.random() * (width - 300)),
      y: spacedPositions[node.id]?.y || (150 + Math.random() * (height - 300))
    }));
    
    // Create links with validation to prevent "node not found" errors
    const links: D3Link[] = data.connections
      .map(conn => {
        const sourceNode = nodes.find(n => n.id === conn.from);
        const targetNode = nodes.find(n => n.id === conn.to);
        
        // Only create link if both source and target nodes exist
        if (sourceNode && targetNode) {
          return {
            ...conn,
            source: sourceNode,
            target: targetNode
          };
        }
        
        // Log warning for missing nodes
        if (!sourceNode) {
          console.warn(`Node not found for connection source: ${conn.from}`);
        }
        if (!targetNode) {
          console.warn(`Node not found for connection target: ${conn.to}`);
        }
        
        return null;
      })
      .filter((link): link is D3Link => link !== null);

    // Erzwinge Mindestdistanz bei der Initialisierung
    enforceMinimumDistance(nodes, minDistance);

    // Erstelle Simulation mit starken Kräften für Mindestdistanz
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links)
        .id((d: any) => d.id)
        .distance(400)
        .strength(0.4)
      )
      .force("charge", d3.forceManyBody()
        .strength(-5000)
        .distanceMin(minDistance)
        .distanceMax(800)
      )
      .force("collision", d3.forceCollide()
        .radius(minDistance / 2) // Kollisionsradius = halbe Mindestdistanz
        .strength(1.0)
        .iterations(3) // Mehrere Iterationen für bessere Kollisionsvermeidung
      )
      .force("center", d3.forceCenter(width / 2, height / 2).strength(0.1))
      // SPEZIELLE KRAFT: Halte Center-Nodes in der Mitte
      .force("centerNodes", () => {
        data.nodes.forEach((nodeData, i) => {
          if (nodeData.position === 'center') {
            const node = nodes[i];
            if (node) {
              // Starke Kraft zur Mitte für Center-Nodes
              const centerX = width / 2;
              const centerY = height / 2;
              
              if (data.nodes.filter(n => n.position === 'center').length === 1) {
                // Einzelner Center-Node: Exakt zentrieren
                const dx = centerX - node.x!;
                const dy = centerY - node.y!;
                node.vx! += dx * 0.1; // Starke Zentrierung
                node.vy! += dy * 0.1;
              } else {
                // Mehrere Center-Nodes: Kreisförmig um Zentrum
                const centerNodes = data.nodes.filter(n => n.position === 'center');
                const nodeIndex = centerNodes.findIndex(n => n.id === nodeData.id);
                const radius = Math.max(minDistance * 0.8, 180);
                const angle = (nodeIndex / centerNodes.length) * 2 * Math.PI;
                const targetX = centerX + radius * Math.cos(angle);
                const targetY = centerY + radius * Math.sin(angle);
                
                const dx = targetX - node.x!;
                const dy = targetY - node.y!;
                node.vx! += dx * 0.08; // Moderate Kraft zur Zielposition
                node.vy! += dy * 0.08;
              }
            }
          }
        });
      })
      .alpha(0.8)
      .alphaDecay(0.02);

    // Create container groups
    const container = svg.append("g");
    
    // Add zoom behavior - OHNE Beschränkungen
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([window.innerWidth < 640 ? 0.2 : 0.1, 5])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Funktion für automatisches Zoom-to-Fit
    const zoomToFit = () => {
      // Warte bis die Nodes positioniert sind
      setTimeout(() => {
        // Berechne Bounding Box aller Nodes
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        
        nodes.forEach(node => {
          if (node.x !== undefined && node.y !== undefined) {
            minX = Math.min(minX, node.x - 140); // Node-Breite berücksichtigen
            maxX = Math.max(maxX, node.x + 140);
            minY = Math.min(minY, node.y - 80); // Node-Höhe berücksichtigen
            maxY = Math.max(maxY, node.y + 80);
          }
        });
        
        // Füge Padding hinzu
        const padding = 50;
        minX -= padding;
        maxX += padding;
        minY -= padding;
        maxY += padding;
        
        // Berechne erforderliche Transformation
        const contentWidth = maxX - minX;
        const contentHeight = maxY - minY;
        
        const scaleX = width / contentWidth;
        const scaleY = height / contentHeight;
        const scale = Math.min(scaleX, scaleY, 1); // Maximal 100% Zoom
        
        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;
        
        const translateX = width / 2 - centerX * scale;
        const translateY = height / 2 - centerY * scale;
        
        // Animiere zum optimalen Zoom
        svg.transition()
          .duration(1000)
          .call(
            zoom.transform,
            d3.zoomIdentity
              .translate(translateX, translateY)
              .scale(scale)
          );
      }, 500); // Kurze Verzögerung für Node-Positionierung
    };

    // Create arrow markers
    svg.append("defs").selectAll("marker")
      .data(["arrow"])
      .enter().append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 35)
      .attr("refY", 0)
      .attr("markerWidth", 10)
      .attr("markerHeight", 10)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#ffffff")
      .attr("opacity", 0.9);

    // Create links
    const link = container.append("g")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 5)
      .attr("stroke-opacity", 0.9)
      .attr("marker-end", "url(#arrow)")
      .style("filter", "drop-shadow(0 3px 6px rgba(0,0,0,0.4))");

    // Create link labels
    const linkLabels = container.append("g")
      .selectAll("g")
      .data(links)
      .enter().append("g");

    linkLabels.append("rect")
      .attr("fill", "white")
      .attr("stroke", "#e5e7eb")
      .attr("stroke-width", 2)
      .attr("rx", 16)
      .attr("ry", 16)
      .attr("opacity", 0.98)
      .style("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.2))");

    linkLabels.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", "15px")
      .attr("font-weight", "700")
      .attr("fill", "#7c3aed")
      .text(d => d.label);

    // Create node groups
    const nodeGroups = container.append("g")
      .selectAll("g")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node-group")
      .style("cursor", "pointer")
      .call(d3.drag<SVGGElement, D3Node>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          // Freie Bewegung beim Ziehen - KEINE Beschränkungen
          d.fx = event.x;
          d.fy = event.y;
          
          // Erzwinge Mindestdistanz auch beim Ziehen
          const tempNodes = [...nodes];
          const draggedIndex = tempNodes.findIndex(n => n.id === d.id);
          if (draggedIndex !== -1) {
            tempNodes[draggedIndex] = { ...d, x: event.x, y: event.y };
            
            // Prüfe Mindestdistanz zu anderen Nodes
            for (let i = 0; i < tempNodes.length; i++) {
              if (i === draggedIndex) continue;
              
              const other = tempNodes[i];
              const dx = event.x - other.x!;
              const dy = event.y - other.y!;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < minDistance && distance > 0) {
                // Verschiebe den gezogenen Node weg
                const pushDistance = minDistance - distance + 5;
                const pushX = (dx / distance) * pushDistance;
                const pushY = (dy / distance) * pushDistance;
                
                d.fx = other.x! + pushX;
                d.fy = other.y! + pushY;
                break;
              }
            }
          }
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          // Position nach dem Ziehen beibehalten
          d.fx = d.fx;
          d.fy = d.fy;
        }));

    // Add node backgrounds
    const nodeRectWidth = window.innerWidth < 640 ? 180 : window.innerWidth < 1024 ? 220 : 280;
    const nodeRectHeight = window.innerWidth < 640 ? 90 : window.innerWidth < 1024 ? 120 : 160;
    const nodeCircleRadius = window.innerWidth < 640 ? 28 : window.innerWidth < 1024 ? 34 : 40;

    nodeGroups.append("rect")
      .attr("width", nodeRectWidth)
      .attr("height", nodeRectHeight)
      .attr("x", -nodeRectWidth/2)
      .attr("y", -nodeRectHeight/2)
      .attr("rx", 16)
      .attr("ry", 16)
      .attr("fill", "white")
      .attr("stroke", "#e5e7eb")
      .attr("stroke-width", 2)
      .style("filter", "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))");

    // Add profile images, logos, or fallback initials
    nodeGroups.each(function(d) {
      const group = d3.select(this);
      let imgSrc = d.profileImage;
      if (imgSrc && imgSrc.startsWith('images/')) {
        imgSrc = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL)
          ? import.meta.env.BASE_URL + imgSrc
          : imgSrc;
      }
      if (imgSrc) {
        // Add circular profile image for any node with profileImage
        group.append("defs")
          .append("pattern")
          .attr("id", `profile-${d.id}`)
          .attr("patternUnits", "objectBoundingBox")
          .attr("width", 1)
          .attr("height", 1)
          .append("image")
          .attr("href", imgSrc)
          .attr("width", 80)
          .attr("height", 80)
          .attr("preserveAspectRatio", "xMidYMid slice");
        group.append("circle")
          .attr("cx", 0)
          .attr("cy", -30)
          .attr("r", nodeCircleRadius)
          .attr("fill", `url(#profile-${d.id})`)
          .attr("stroke", "white")
          .attr("stroke-width", 5);
      } else if (d.logo) {
        // Add logo background
        group.append("circle")
          .attr("cx", 0)
          .attr("cy", -30)
          .attr("r", nodeCircleRadius)
          .attr("fill", d.logoColor || "#6366f1")
          .attr("stroke", "white")
          .attr("stroke-width", 5);

        // Add logo text
        group.append("text")
          .attr("x", 0)
          .attr("y", -25)
          .attr("text-anchor", "middle")
          .attr("font-size", "16px")
          .attr("font-weight", "bold")
          .attr("fill", "white")
          .text(d.logo);
      } else {
        // Fallback: colored circle with initials
        const initials = d.name
          .split(' ')
          .map(word => word[0])
          .join('')
          .substring(0, 2)
          .toUpperCase();
        group.append("circle")
          .attr("cx", 0)
          .attr("cy", -30)
          .attr("r", nodeCircleRadius)
          .attr("fill", "#a5b4fc") // Lila als Fallback
          .attr("stroke", "white")
          .attr("stroke-width", 5);
        group.append("text")
          .attr("x", 0)
          .attr("y", nodeRectHeight/2 - 55)
          .attr("text-anchor", "middle")
          .attr("font-size", window.innerWidth < 640 ? "14px" : window.innerWidth < 1024 ? "16px" : "18px")
          .attr("font-weight", "bold")
          .attr("fill", "#1f2937")
          .text(initials);
      }
    });

    // Add node names
    nodeGroups.append("text")
      .attr("x", 0)
      .attr("y", nodeRectHeight/2 - 55)
      .attr("text-anchor", "middle")
      .attr("font-size", window.innerWidth < 640 ? "14px" : window.innerWidth < 1024 ? "16px" : "18px")
      .attr("font-weight", "bold")
      .attr("fill", "#1f2937")
      .text(d => d.name.length > 18 ? d.name.substring(0, 18) + "..." : d.name);

    // Add node roles
    nodeGroups.append("text")
      .attr("x", 0)
      .attr("y", nodeRectHeight/2 - 35)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "#6b7280")
      .text(d => d.role.length > 32 ? d.role.substring(0, 32) + "..." : d.role);

    // Add node type indicator
    nodeGroups.append("text")
      .attr("x", 0)
      .attr("y", nodeRectHeight/2 - 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#9ca3af")
      .attr("font-style", "italic")
      .text(d => {
        const typeLabels = {
          person: "Person",
          organization: "Organisation",
          company: "Unternehmen",
          institute: "Institut",
          party: "Partei"
        };
        return typeLabels[d.type] || d.type;
      });

    // Update positions on simulation tick
    simulation.on("tick", () => {
      // SPEZIELLE BEHANDLUNG für Center-Nodes: Fixiere sie näher zur Mitte
      nodes.forEach((node, i) => {
        const nodeData = data.nodes[i];
        if (nodeData && nodeData.position === 'center') {
          const centerX = width / 2;
          const centerY = height / 2;
          
          if (data.nodes.filter(n => n.position === 'center').length === 1) {
            // Einzelner Center-Node: Sehr nah zur Mitte halten
            const maxDeviation = 50; // Maximal 50px Abweichung vom Zentrum
            const dx = node.x! - centerX;
            const dy = node.y! - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > maxDeviation) {
              const factor = maxDeviation / distance;
              node.x = centerX + dx * factor;
              node.y = centerY + dy * factor;
            }
          }
        }
      });
      
      // KRITISCH: Erzwinge Mindestdistanz bei jedem Tick
      enforceMinimumDistance(nodes, minDistance);
      
      // Keine Bounds-Beschränkung - Nodes können überall hin
      // (Nur bei automatischer Simulation, nicht bei manuellem Ziehen)

      link
        .attr("x1", d => d.source.x!)
        .attr("y1", d => d.source.y!)
        .attr("x2", d => d.target.x!)
        .attr("y2", d => d.target.y!);

      linkLabels
        .attr("transform", d => {
          const x = (d.source.x! + d.target.x!) / 2;
          const y = (d.source.y! + d.target.y!) / 2;
          return `translate(${x},${y})`;
        });

      linkLabels.selectAll("rect")
        .attr("width", 120) // Fixed width as fallback
        .attr("height", 28)
        .attr("x", -60) // Center the rect
        .attr("y", -14);

      nodeGroups.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Add hover effects
    nodeGroups
      .on("mouseover", function(event, d) {
        d3.select(this).select("rect")
          .transition()
          .duration(200)
          .style("filter", "drop-shadow(0 16px 32px rgba(0, 0, 0, 0.3))")
          .attr("stroke", "#7c3aed")
          .attr("stroke-width", 4)
          .attr("transform", "scale(1.05)");

        const svgRect = svgRef.current!.getBoundingClientRect();
        const transform = d3.zoomTransform(svg.node()!);
        
        const nodeX = (d.x! * transform.k) + transform.x + svgRect.left;
        const nodeY = (d.y! * transform.k) + transform.y + svgRect.top;
        
        setTooltipPosition({ 
          x: nodeX, 
          y: nodeY - 100
        });
        setHoveredNode(d);
      })
      .on("mouseout", function(event, d) {
        d3.select(this).select("rect")
          .transition()
          .duration(200)
          .style("filter", "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))")
          .attr("stroke", "#e5e7eb")
          .attr("stroke-width", 3)
          .attr("transform", "scale(1)");

        setHoveredNode(null);
      })
      .on("mousemove", function(event, d) {
        const svgRect = svgRef.current!.getBoundingClientRect();
        const transform = d3.zoomTransform(svg.node()!);
        
        const nodeX = (d.x! * transform.k) + transform.x + svgRect.left;
        const nodeY = (d.y! * transform.k) + transform.y + svgRect.top;
        
        setTooltipPosition({ 
          x: nodeX, 
          y: nodeY - 100
        });
      });

    // Stoppe Simulation nach einer Weile
    setTimeout(() => {
      simulation.stop();
      // Führe Auto-Zoom nach Simulation aus
      zoomToFit();
    }, 2000); // 2 Sekunden

    // Führe auch sofortiges Zoom aus für bessere UX
    zoomToFit();

    return () => {
      simulation.stop();
    };
  }, [data, dimensions]);

  return (
    <div ref={containerRef} className="relative w-full bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 rounded-xl sm:rounded-2xl overflow-hidden" style={{ height: `${dimensions.height}px` }}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">{data.title}</h2>
          <button
            onClick={onBack}
            className="bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20 text-purple-900 font-medium hover:bg-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            ← Zurück
          </button>
        </div>
      </div>

      {/* SVG Network */}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="absolute inset-0"
      />

      {/* Node Details Tooltip */}
      {hoveredNode && (
        <div 
          className="fixed z-50 pointer-events-none mt-10"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 shadow-2xl max-w-xs sm:max-w-sm animate-fadeInUp">
            {/* Header mit Bild/Logo */}
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              {hoveredNode.profileImage ? (
                <img 
                  src={hoveredNode.profileImage} 
                  alt={hoveredNode.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 sm:border-4 border-white shadow-md"
                />
              ) : hoveredNode.logo ? (
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg border-2 sm:border-4 border-white shadow-md"
                  style={{ backgroundColor: hoveredNode.logoColor }}
                >
                  {hoveredNode.logo}
                </div>
              ) : (
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-300 border-2 sm:border-4 border-white shadow-md"></div>
              )}
              
              <div className="flex-1">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-tight">{hoveredNode.name}</h3>
                <p className="text-xs sm:text-sm text-purple-600 font-medium">{hoveredNode.role}</p>
              </div>
            </div>
            
            {/* Beschreibung */}
            {hoveredNode.description && (
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {hoveredNode.description}
                </p>
              </div>
            )}
            
            {/* Typ-Badge */}
            <div className="mt-3 sm:mt-4 flex justify-between items-center">
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {(() => {
                  const typeLabels = {
                    person: "👤 Person",
                    organization: "🏢 Organisation", 
                    company: "🏭 Unternehmen",
                    institute: "🎓 Institut",
                    party: "🗳️ Partei"
                  };
                  return typeLabels[hoveredNode.type] || hoveredNode.type;
                })()}
              </span>
            </div>
            
            {/* Kleiner Pfeil nach unten zum Node */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
            </div>
          </div>
        </div>
      )}

      {/* Info Icon mit Hover-Tooltip */}
      <div className="absolute top-16 sm:top-20 right-4 sm:right-6 z-30">
        <div 
          className="relative"
          onMouseEnter={() => setShowInfoTooltip(true)}
          onMouseLeave={() => setShowInfoTooltip(false)}
        >
          <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-white/20 text-purple-600 hover:bg-white hover:text-purple-700 transition-all duration-300 hover:scale-110 shadow-lg cursor-help">
            <Info className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* Hover-Tooltip */}
          {showInfoTooltip && (
            <div className="absolute top-12 sm:top-16 right-0 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 shadow-2xl min-w-[240px] sm:min-w-[280px] animate-fadeInUp">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-purple-900 text-xs sm:text-sm">Hover:</span>
                    <span className="text-purple-700 ml-1 text-xs sm:text-sm">Details anzeigen</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-purple-900 text-xs sm:text-sm">Ziehen:</span>
                    <span className="text-purple-700 ml-1 text-xs sm:text-sm">Position anpassen</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-purple-900 text-xs sm:text-sm">Mausrad:</span>
                    <span className="text-purple-700 ml-1 text-xs sm:text-sm">Zoomen</span>
                  </div>
                </div>
                
        
              </div>
              
              {/* Kleiner Pfeil nach oben zum Icon */}
              <div className="absolute -top-2 right-4 sm:right-6">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white/95"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}