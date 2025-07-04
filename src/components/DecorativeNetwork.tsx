import React, { useState, useRef, useEffect } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number; // velocity x
  vy: number; // velocity y
  isDragging?: boolean;
}

interface Connection {
  from: number;
  to: number;
}

export default function DecorativeNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();
  const [nodes, setNodes] = useState<Node[]>([
    { id: 1, x: 150, y: 100, size: 16, vx: 0.5, vy: 0.3 },
    { id: 2, x: 300, y: 80, size: 12, vx: -0.3, vy: 0.4 },
    { id: 3, x: 450, y: 120, size: 20, vx: 0.4, vy: -0.2 },
    { id: 4, x: 600, y: 90, size: 14, vx: -0.2, vy: 0.5 },
    { id: 5, x: 750, y: 110, size: 18, vx: 0.3, vy: 0.3 },
    { id: 6, x: 900, y: 85, size: 12, vx: -0.4, vy: -0.3 },
    
    { id: 7, x: 200, y: 200, size: 14, vx: 0.2, vy: -0.4 },
    { id: 8, x: 350, y: 220, size: 18, vx: -0.5, vy: 0.2 },
    { id: 9, x: 500, y: 180, size: 12, vx: 0.3, vy: 0.4 },
    { id: 10, x: 650, y: 210, size: 16, vx: -0.3, vy: -0.2 },
    { id: 11, x: 800, y: 190, size: 14, vx: 0.4, vy: 0.3 },
    
    { id: 12, x: 120, y: 300, size: 12, vx: 0.5, vy: -0.3 },
    { id: 13, x: 280, y: 320, size: 16, vx: -0.2, vy: 0.4 },
    { id: 14, x: 430, y: 280, size: 14, vx: 0.3, vy: 0.2 },
    { id: 15, x: 580, y: 310, size: 18, vx: -0.4, vy: -0.3 },
    { id: 16, x: 730, y: 290, size: 12, vx: 0.2, vy: 0.5 },
    { id: 17, x: 880, y: 320, size: 16, vx: -0.3, vy: -0.2 },
    
    { id: 18, x: 180, y: 400, size: 14, vx: 0.4, vy: 0.3 },
    { id: 19, x: 340, y: 420, size: 12, vx: -0.5, vy: -0.4 },
    { id: 20, x: 490, y: 380, size: 18, vx: 0.3, vy: 0.2 },
    { id: 21, x: 640, y: 410, size: 16, vx: -0.2, vy: 0.4 },
    { id: 22, x: 790, y: 390, size: 14, vx: 0.5, vy: -0.3 },
  ]);

  const [draggedNode, setDraggedNode] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Define connections between nodes
  const connections: Connection[] = [
    // Horizontal connections
    { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 },
    { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 },
    { from: 12, to: 13 }, { from: 13, to: 14 }, { from: 14, to: 15 }, { from: 15, to: 16 }, { from: 16, to: 17 },
    { from: 18, to: 19 }, { from: 19, to: 20 }, { from: 20, to: 21 }, { from: 21, to: 22 },
    
    // Vertical connections
    { from: 1, to: 7 }, { from: 2, to: 8 }, { from: 3, to: 9 }, { from: 4, to: 10 }, { from: 5, to: 11 },
    { from: 7, to: 12 }, { from: 8, to: 13 }, { from: 9, to: 14 }, { from: 10, to: 15 }, { from: 11, to: 16 },
    { from: 12, to: 18 }, { from: 13, to: 19 }, { from: 14, to: 20 }, { from: 15, to: 21 }, { from: 16, to: 22 },
    
    // Diagonal connections
    { from: 1, to: 8 }, { from: 3, to: 10 }, { from: 5, to: 11 },
    { from: 7, to: 14 }, { from: 9, to: 16 }, { from: 11, to: 17 },
    { from: 12, to: 19 }, { from: 14, to: 21 }, { from: 16, to: 22 },
  ];

  const getSVGCoordinates = (clientX: number, clientY: number) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    
    const rect = svgRef.current.getBoundingClientRect();
    const viewBox = svgRef.current.viewBox.baseVal;
    
    const scaleX = viewBox.width / rect.width;
    const scaleY = viewBox.height / rect.height;
    
    return {
      x: (clientX - rect.left) * scaleX + viewBox.x,
      y: (clientY - rect.top) * scaleY + viewBox.y
    };
  };

  const handleMouseDown = (e: React.MouseEvent, nodeId: number) => {
    e.preventDefault();
    e.stopPropagation();
    const svgCoords = getSVGCoordinates(e.clientX, e.clientY);
    const node = nodes.find(n => n.id === nodeId);
    
    if (node) {
      setDraggedNode(nodeId);
      setDragOffset({
        x: svgCoords.x - node.x,
        y: svgCoords.y - node.y
      });
      
      // Stop the node's automatic movement while dragging
      setNodes(prevNodes =>
        prevNodes.map(n =>
          n.id === nodeId ? { ...n, vx: 0, vy: 0, isDragging: true } : n
        )
      );
    }
  };

  // Animation loop for automatic movement
  useEffect(() => {
    const animate = () => {
      setNodes(prevNodes =>
        prevNodes.map(node => {
          if (node.isDragging) return node;
          
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;
          
          // Bounce off walls
          if (newX <= node.size || newX >= 1200 - node.size) {
            newVx = -newVx;
            newX = Math.max(node.size, Math.min(1200 - node.size, newX));
          }
          if (newY <= node.size || newY >= 500 - node.size) {
            newVy = -newVy;
            newY = Math.max(node.size, Math.min(500 - node.size, newY));
          }
          
          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Global mouse event listeners for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (draggedNode !== null) {
        const svgCoords = getSVGCoordinates(e.clientX, e.clientY);
        
        setNodes(prevNodes =>
          prevNodes.map(node =>
            node.id === draggedNode
              ? {
                  ...node,
                  x: Math.max(node.size, Math.min(1200 - node.size, svgCoords.x - dragOffset.x)),
                  y: Math.max(node.size, Math.min(500 - node.size, svgCoords.y - dragOffset.y))
                }
              : node
          )
        );
      }
    };

    const handleGlobalMouseUp = () => {
      if (draggedNode !== null) {
        // Resume automatic movement with random velocity
        setNodes(prevNodes =>
          prevNodes.map(node =>
            node.id === draggedNode
              ? {
                  ...node,
                  vx: (Math.random() - 0.5) * 1,
                  vy: (Math.random() - 0.5) * 1,
                  isDragging: false
                }
              : node
          )
        );
        setDraggedNode(null);
        setDragOffset({ x: 0, y: 0 });
      }
    };

    if (draggedNode !== null) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [draggedNode, dragOffset]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-2/3 overflow-hidden pointer-events-none">
      <svg
        ref={svgRef}
        className="absolute bottom-0 w-full h-full opacity-80 pointer-events-auto"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.4" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Render connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={`connection-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              opacity="0.6"
            />
          );
        })}
        
        {/* Render nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size + 4}
              fill="rgba(139, 92, 246, 0.3)"
              filter="url(#glow)"
              className={draggedNode === node.id ? "opacity-90" : "opacity-70"}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="url(#nodeGradient)"
              className={`transition-all duration-200 cursor-grab ${
                draggedNode === node.id 
                  ? "cursor-grabbing scale-110" 
                  : "hover:scale-110"
              }`}
              onMouseDown={(e) => handleMouseDown(e, node.id)}
              style={{ pointerEvents: 'all' }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.4}
              fill="#FFFFFF"
              opacity="0.7"
              className="pointer-events-none"
            />
          </g>
        ))}
        
        {/* Additional animated particles */}
        <g opacity="0.5">
          <circle cx="50" cy="150" r="4" fill="#A855F7">
            <animate attributeName="cy" values="150;130;150" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1150" cy="250" r="3" fill="#8B5CF6">
            <animate attributeName="cy" values="250;270;250" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="50" r="5" fill="#C084FC">
            <animate attributeName="cy" values="50;30;50" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.7;0" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}