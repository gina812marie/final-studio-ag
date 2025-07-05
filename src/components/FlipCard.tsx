import React, { useState } from 'react';
import { RotateCcw, Network } from 'lucide-react';

interface FlipCardProps {
  id: string;
  frontContent: {
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    source?: string;
  };
  backContent: {
    title: string;
    content: string;
    source?: string;
  };
  onShowNetwork: () => void;
}

export default function FlipCard({ id, frontContent, backContent, onShowNetwork }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group perspective-1000 w-full h-[600px] sm:h-[700px] md:h-[1000px] lg:h-[900px] xl:h-[950px] 2xl:h-[1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl sm:rounded-2xl shadow-2xl border border-purple-400/20 overflow-hidden hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
            <div className="p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col h-full object-contain">
              {/* Image section - optimized for full visibility */}
              <div className="flex-shrink-0 mb-4 sm:mb-6 lg:mb-8">
                {frontContent.image ? (
                  <div className="w-full h-auto  bg-white/10 rounded-xl sm:rounded-2xl p-2 overflow-hidden">
                    <img 
                      src={frontContent.image} 
                      alt={frontContent.title}
                      className="w-full h-full rounded-2xls sm:rounded-xl object-contain"
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-gradient-to-br from-purple-300/20 to-purple-400/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-purple-400/30">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/30 rounded-lg"></div>
                      </div>
                      <p className="text-white/60 text-xs sm:text-sm lg:text-base">Bild Platzhalter</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content section - flexible space, jetzt explizit scrollbar */}
              <div className="flex-1 min-h-0 flex flex-col space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex-1 min-h-0 overflow-y-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                    {frontContent.title}
                  </h3>
                  {frontContent.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 italic leading-relaxed">
                      {frontContent.subtitle}
                    </p>
                  )}
                  <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mt-2">
                    {frontContent.description}
                  </p>
                  {/* Source on front */}
                  {frontContent.source && (
                    <div className="pt-3 sm:pt-4 lg:pt-6 border-t border-white/20 flex-shrink-0 mt-2">
                      <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                        <span className="font-semibold">Quelle:</span> {frontContent.source}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action buttons - always at bottom */}
              <div className="flex-shrink-0 pt-4 sm:pt-6 lg:pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-6">
                  <button
                    onClick={handleFlip}
                    className="w-full sm:flex-1 bg-white/20 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">Faktencheck</span>
                  </button>
                  
                  <button
                    onClick={onShowNetwork}
                    className="w-full sm:flex-1 bg-purple-500/30 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Network className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">Netzwerk</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl sm:rounded-2xl shadow-2xl border border-purple-400/20 overflow-hidden hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
            <div className="p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col h-full">
              {/* Header - always visible */}
              <div className="flex-shrink-0 mb-4 sm:mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                  {backContent.title}
                </h3>
              </div>
              
              {/* Scrollable content area */}
              <div className="flex-1 min-h-0 overflow-y-auto mb-4 sm:mb-6 lg:mb-8">
                <div className="prose prose-invert max-w-none">
                  <div className="text-white/90 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-pre-line">
                    {backContent.content}
                  </div>
                </div>
                
                {backContent.source && (
                  <div className="pt-3 sm:pt-4 lg:pt-6 border-t border-white/20 mt-4 sm:mt-6">
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                      <span className="font-semibold">Quelle:</span> {backContent.source}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Action buttons - always at bottom and visible */}
              <div className="flex-shrink-0">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-6">
                  <button
                    onClick={handleFlip}
                    className="w-full sm:flex-1 bg-white/20 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">Zurück</span>
                  </button>
                  
                  <button
                    onClick={onShowNetwork}
                    className="w-full sm:flex-1 bg-purple-500/30 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Network className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium">Netzwerk</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}