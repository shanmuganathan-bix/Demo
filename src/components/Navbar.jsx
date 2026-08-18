import React, { useState, useEffect } from 'react';
import { Dna, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenLabModal, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Innovation', href: '#about' },
    { name: 'Technology Stack', href: '#technology' },
    { name: 'Gene Sandbox', href: '#sandbox' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Impact & Data', href: '#impact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-[#0B1B3D]/10 shadow-lg shadow-[#0B1B3D]/5'
          : 'py-5 bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar at very top */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#00A896] via-[#39FF14] to-[#00C4B4] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3.5 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00A896] to-[#39FF14] p-[1px] shadow-md shadow-[#00A896]/20 transition-all">
            <div className="w-full h-full bg-[#0B1B3D] rounded-[11px] flex items-center justify-center">
              <Dna className="w-5 h-5 text-[#39FF14] group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-wider text-[#0B1B3D] group-hover:text-[#00A896] transition-colors">
              AURA<span className="text-[#00A896]">.GENOMICS</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#0B1B3D]/70 uppercase -mt-1 font-bold">
              SYNTHETIC BIO AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#FFFFFF] p-1.5 rounded-full border border-[#0B1B3D]/15 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeSection === link.href.substring(1)
                  ? 'bg-[#0B1B3D] text-[#FFFFFF] shadow-md'
                  : 'text-[#0B1B3D] hover:text-[#00A896] hover:bg-[#F8F9FA]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 border border-[#0B1B3D]/20 text-[#0B1B3D] text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
            <span>CRISPR 3.0 ONLINE</span>
          </div>

          <button
            onClick={onOpenLabModal}
            className="glow-btn-cyan text-[#FFFFFF] font-heading font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center space-x-2 shadow-md cursor-pointer"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Launch BioLab</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#FFFFFF] border border-[#0B1B3D]/20 text-[#0B1B3D]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#0B1B3D]/20 shadow-2xl space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-bold text-[#0B1B3D] hover:bg-[#00A896]/10 hover:text-[#00A896]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#0B1B3D]/10 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLabModal();
              }}
              className="glow-btn-cyan text-[#FFFFFF] font-heading font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center space-x-2"
            >
              <Sparkles size={14} />
              <span>Launch BioLab</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
