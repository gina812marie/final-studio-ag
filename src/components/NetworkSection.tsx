import React from 'react';
import InteractiveNetworkGraph from './InteractiveNetworkGraph';
import { networkDatasets } from '../data/networkData';
import { ArrowLeft } from 'lucide-react';

interface NetworkSectionProps {
  claimId: number | null;
  onBack: () => void;
}

export default function NetworkSection({ claimId, onBack }: NetworkSectionProps) {
  // Get the network data for the specific claim
  const networkData = networkDatasets.find(dataset => dataset.id === claimId) || networkDatasets[0];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-6 sm:mb-8 lg:mb-10"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base lg:text-lg">Zurück zu den Behauptungen</span>
            </button>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              Netzwerk-Analyse
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              Interaktive Visualisierung der Verbindungen und Einflüsse
            </p>
          </div>

          {/* Interactive Network Visualization */}
          <div className="w-full">
            <InteractiveNetworkGraph 
              data={networkData} 
              onBack={onBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
}