import React, { useState } from 'react';

interface NetworkVisualizationProps {
  claimId: number | null;
}

interface NetworkNode {
  id: string;
  name: string;
  role: string;
  description: string;
  type: 'person' | 'organization';
  x: number;
  y: number;
  profileImage?: string;
  logo?: string;
  logoColor?: string;
}

interface NetworkConnection {
  from: string;
  to: string;
  label: string;
}

export default function NetworkVisualization({ claimId }: NetworkVisualizationProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Network data matching the image structure exactly
  const nodes: NetworkNode[] = [
    {
      id: 'eike',
      name: 'EIKE',
      role: 'Europäisches Institut für Klima und Energie',
      description: 'Kein Forschungsinstitut und kein offizielles Institut der EU, leugnen ebenfalls den menschengemachten Klimawandel',
      type: 'organization',
      x: 12,
      y: 15,
      logo: 'EIKE',
      logoColor: '#FFD700'
    },
    {
      id: 'limburg',
      name: 'Michael Limburg',
      role: 'Klimawandelleugner',
      description: 'Stellvertretender Vorsitzender des Bundesausschuss Energie',
      type: 'person',
      x: 20,
      y: 65,
      profileImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 'afd',
      name: 'AfD',
      role: 'Rechtsextreme Partei',
      description: '',
      type: 'organization',
      x: 55,
      y: 25,
      logo: 'AfD',
      logoColor: '#0080FF'
    },
    {
      id: 'chrupalla',
      name: 'Tino Chrupalla',
      role: 'Zusammen mit Weidel Vorsitzende der AfD',
      description: '',
      type: 'person',
      x: 55,
      y: 70,
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 'weidel',
      name: 'Alice Weidel',
      role: 'Zusammen mit Chrupalla Vorsitzende der AfD',
      description: '',
      type: 'person',
      x: 75,
      y: 40,
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 'pws',
      name: 'PWS',
      role: 'Pharmagroßhandel International AG',
      description: 'Aktiengesellschaft gegründet in Zürich, handelt mit chemischen und kosmetischen Produkten',
      type: 'organization',
      x: 88,
      y: 15,
      logo: 'PWS',
      logoColor: '#2D5A27'
    }
  ];

  const connections: NetworkConnection[] = [
    {
      from: 'eike',
      to: 'limburg',
      label: 'Vizepräsident'
    },
    {
      from: 'limburg',
      to: 'afd',
      label: 'Stellv. Vorsitzender Energieausschuss'
    },
    {
      from: 'afd',
      to: 'chrupalla',
      label: 'Mitglied'
    },
    {
      from: 'chrupalla',
      to: 'weidel',
      label: 'Mitglied'
    },
    {
      from: 'weidel',
      to: 'pws',
      label: 'Spendenskandal'
    }
  ];

  const getConnectionMidpoint = (from: NetworkNode, to: NetworkNode) => {
    return {
      x: (from.x + to.x) / 2,
      y: (from.y + to.y) / 2
    };
  };

  const calculateArrowEnd = (from: NetworkNode, to: NetworkNode) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const unitX = dx / length;
    const unitY = dy / length;
    
    // Offset by card size (approximately 6% of viewport)
    const offset = 6;
    return {
      x: to.x - unitX * offset,
      y: to.y - unitY * offset
    };
  };

  return (
    <div className="relative w-full h-[700px] bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 rounded-2xl overflow-hidden">
      {/* Back button */}
      <button className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 text-purple-900 font-medium hover:bg-white transition-all duration-300 z-20">
        ← Zurück
      </button>

      {/* SVG for connections - positioned behind cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="3"
            markerHeight="2.5"
            refX="2.5"
            refY="1.25"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon
              points="0 0, 3 1.25, 0 2.5"
              fill="white"
              opacity="0.9"
            />
          </marker>
        </defs>

        {/* Render connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          const arrowEnd = calculateArrowEnd(fromNode, toNode);
          const midpoint = getConnectionMidpoint(fromNode, toNode);
          
          return (
            <g key={`${connection.from}-${connection.to}-${index}`}>
              {/* Connection line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={arrowEnd.x}
                y2={arrowEnd.y}
                stroke="white"
                strokeWidth="0.4"
                opacity="0.9"
                markerEnd="url(#arrowhead)"
              />
              
              {/* Connection label background */}
              <rect
                x={midpoint.x - 8}
                y={midpoint.y - 1.5}
                width="16"
                height="3"
                fill="white"
                opacity="0.95"
                rx="1.5"
              />
              
              {/* Connection label text */}
              <text
                x={midpoint.x}
                y={midpoint.y + 0.5}
                textAnchor="middle"
                className="text-xs font-medium fill-purple-900"
                fontSize="2"
              >
                {connection.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Render nodes - positioned above connections */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`
          }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Node card */}
          <div className={`
            bg-white rounded-xl shadow-lg border border-gray-200 p-4 min-w-48 max-w-56
            transition-all duration-300 cursor-pointer
            ${hoveredNode === node.id ? 'scale-105 shadow-xl' : 'hover:scale-102'}
          `}>
            {/* Logo or Profile Image */}
            <div className="flex items-center justify-center mb-3">
              {node.type === 'organization' && node.logo ? (
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-md"
                  style={{ backgroundColor: node.logoColor }}
                >
                  {node.logo}
                </div>
              ) : node.profileImage ? (
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={node.profileImage} 
                    alt={node.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 border-4 border-white shadow-md"></div>
              )}
            </div>

            {/* Node info */}
            <div className="text-center">
              <h3 className="font-bold text-gray-900 text-sm mb-1">{node.name}</h3>
              <p className="text-xs text-gray-600 mb-2 leading-tight">{node.role}</p>
              {node.description && (
                <p className="text-xs text-gray-500 leading-relaxed">{node.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}