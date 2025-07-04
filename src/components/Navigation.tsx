import React from 'react';

interface NavigationProps {
  currentSection: 'main' | 'claims' | 'network';
  onSectionChange: (section: 'main' | 'claims') => void;
}

export default function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 sm:py-4 lg:py-5">
        <div className="flex justify-end space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
          <button
            onClick={() => onSectionChange('main')}
            className={`text-sm sm:text-base lg:text-lg xl:text-xl font-medium transition-all duration-300 hover:scale-105 ${
              currentSection === 'main'
                ? 'text-white underline underline-offset-4'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Hauptseite
          </button>
          <button
            onClick={() => onSectionChange('claims')}
            className={`text-sm sm:text-base lg:text-lg xl:text-xl font-medium transition-all duration-300 hover:scale-105 ${
              currentSection === 'claims' || currentSection === 'network'
                ? 'text-white underline underline-offset-4'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Behauptungen
          </button>
        </div>
      </div>
    </nav>
  );
}