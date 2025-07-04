import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MainSection from './components/MainSection';
import ClaimsSection from './components/ClaimsSection';
import NetworkSection from './components/NetworkSection';

export type SectionType = 'main' | 'claims' | 'network';

function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>('main');
  const [selectedClaimId, setSelectedClaimId] = useState<number | null>(null);

  const handleSectionChange = (section: SectionType) => {
    setCurrentSection(section);
    if (section !== 'network') {
      setSelectedClaimId(null);
    }
  };

  const handleNavigateToCards = () => {
    setCurrentSection('claims');
    setSelectedClaimId(null);
  };

  const handleBackToMain = () => {
    setCurrentSection('main');
  };

  const handleShowNetwork = (claimId: number) => {
    setSelectedClaimId(claimId);
    setCurrentSection('network');
  };

  const handleBackToClaims = () => {
    setCurrentSection('claims');
  };

  return (
    <div className="min-h-screen">
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      <div className="transition-all duration-500 ease-in-out">
        {currentSection === 'main' && (
          <MainSection onNavigateToCards={handleNavigateToCards} />
        )}
        {currentSection === 'claims' && (
          <ClaimsSection 
            onBack={handleBackToMain} 
            onShowNetwork={handleShowNetwork}
            selectedClaimId={selectedClaimId}
          />
        )}
        {currentSection === 'network' && (
          <NetworkSection 
            claimId={selectedClaimId} 
            onBack={handleBackToClaims} 
          />
        )}
      </div>
    </div>
  );
}

export default App;