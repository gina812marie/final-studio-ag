import React, { useState, useRef, useEffect } from 'react';
import FlipCard from './FlipCard';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { claimsData } from '../data/claimsData';

interface ClaimsSectionProps {
  onBack: () => void;
  onShowNetwork: (claimId: number) => void;
  selectedClaimId?: number | null;
}

export default function ClaimsSection({ onBack, onShowNetwork, selectedClaimId }: ClaimsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to selected claim when component mounts or selectedClaimId changes
  useEffect(() => {
    if (selectedClaimId && scrollContainerRef.current) {
      const claimIndex = claimsData.findIndex(claim => claim.id === selectedClaimId);
      if (claimIndex !== -1) {
        scrollToCard(claimIndex);
      }
    }
  }, [selectedClaimId]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 640 ? 320 : window.innerWidth < 1024 ? 480 : 520; // Responsive card width
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : claimsData.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < claimsData.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = window.innerWidth < 640 ? 320 : window.innerWidth < 1024 ? 480 : 520;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-8 sm:pb-12 lg:pb-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-6 sm:mb-8 lg:mb-10"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base lg:text-lg">Zurück zur Hauptseite</span>
          </button>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Behauptungen & Fakten
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            Klicken Sie auf die Karten, um die Fakten hinter den Behauptungen zu entdecken.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-4 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 lg:gap-8 xl:gap-10 px-4 sm:px-8 lg:px-16 xl:px-20 py-4 sm:py-6 lg:py-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {claimsData.map((claim) => (
              <div
                key={claim.id}
                className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[450px] lg:w-[480px] xl:w-[520px] 2xl:w-[560px]"
                style={{ scrollSnapAlign: 'center' }}
              >
                <FlipCard
                  id={claim.id.toString()}
                  frontContent={claim.frontContent}
                  backContent={claim.backContent}
                  onShowNetwork={() => onShowNetwork(claim.id)}
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-6 lg:mt-8 xl:mt-10">
            {claimsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Card Counter */}
        <div className="text-center mt-4 sm:mt-6 lg:mt-8 xl:mt-10">
          <span className="text-white/80 text-sm sm:text-base lg:text-lg xl:text-xl">
            {currentIndex + 1} von {claimsData.length}
          </span>
        </div>
      </div>
    </div>
  );
}