import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechSection from './components/TechSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ImpactSection from './components/ImpactSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ResearchModal from './components/ResearchModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'technology', 'sandbox', 'capabilities', 'impact', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLabModal = () => {
    const sandboxEl = document.getElementById('sandbox');
    if (sandboxEl) {
      sandboxEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Animated Scanline Effect */}
      <div className="scanline-overlay" />

      {/* Navigation Bar */}
      <Navbar
        onOpenLabModal={handleOpenLabModal}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onOpenLabModal={handleOpenLabModal}
          onExploreResearch={() => setIsResearchModalOpen(true)}
        />
        <AboutSection />
        <TechSection />
        <CapabilitiesSection />
        <ImpactSection />
        <CtaSection onRequestDemo={handleOpenLabModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Research Whitepaper Modal */}
      <ResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />
    </div>
  );
}
