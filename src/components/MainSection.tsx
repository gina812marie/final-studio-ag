import React from 'react';
import { ChevronRight, Shield, Eye, Target } from 'lucide-react';
import DecorativeNetwork from './DecorativeNetwork';

interface MainSectionProps {
  onNavigateToCards: () => void;
}

export default function MainSection({ onNavigateToCards }: MainSectionProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 overflow-hidden">
      {/* Interactive Network Background */}
      <DecorativeNetwork />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Hero Badge */}
        
          
          {/* Main Hero Title */}
          <div className="mb-8 mt-10 py-10 sm:mb-10 lg:mb-12 xl:mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6 lg:mb-8">
              GEFANGEN IM NETZ
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              DER FOSSILFUEL-LOBBY
              </span>
            </h1>
            
            <div className="w-16 sm:w-20 lg:w-24 xl:w-32 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"></div>
          </div>
          
          {/* Hero Subtitle */}
          <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/95 mb-4 sm:mb-6 lg:mb-8 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              Wir bringen die Lügen der Fossilfuel-Lobby ans Licht!
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              Die Global Climate Coalition wurde 1989 gegründet, um eine koordinierte Desinformationskampagne zur Klimakrise zu führen. Auch nach ihrer Auflösung Anfang der 2000er-Jahre wirken ihre Narrative bis heute nach. Unsere interaktiven Karten zeigen diese Zusammenhänge auf und stellen ihnen wissenschaftlich fundierte Fakten gegenüber.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-10 lg:mb-12 xl:mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3">Aufdecken</h3>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                Irreführende Behauptungen identifizieren und analysieren
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3">Einordnen</h3>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                Netzwerke und Verbindungen sichtbar machen
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3">Aufklären</h3>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                Wissenschaftliche Fakten verständlich vermitteln
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6  mb-5 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={onNavigateToCards}
              className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl"
            >
              <span>Behauptungen erkunden</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}