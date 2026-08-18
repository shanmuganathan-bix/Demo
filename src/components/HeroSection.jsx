import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Dna, Activity, Flame, Atom } from 'lucide-react';
import DnaCanvas from './DnaCanvas';

export default function HeroSection({ onOpenLabModal, onExploreResearch }) {
  return (
    <section className="relative min-h-screen pt-36 pb-28 sm:pt-44 sm:pb-36 px-6 sm:px-8 lg:px-12 bio-grid-bg overflow-hidden flex items-center">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#00A896]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#0B1B3D]/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        {/* Left Column: Headline, Copy & CTAs */}
        <div className="lg:col-span-7 space-y-10 text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0B1B3D]/15 text-[#0B1B3D] text-xs font-mono shadow-sm font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A896] animate-ping" />
            <Sparkles size={14} className="text-[#00A896]" />
            <span className="tracking-wide text-[#0B1B3D]">CRISPR 3.0 & SYNTHETIC BIOLOGY ENGINE</span>
          </div>

          {/* Main Title - Deep Navy Blue (30% Secondary) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0B1B3D] leading-[1.12]">
            Engineering <br />
            <span className="text-gradient-cyan">Bio-Intelligence</span> <br />
            <span className="text-[#0B1B3D]">At Atomic Scale.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-[#0B1B3D]/80 text-base sm:text-xl max-w-2xl leading-relaxed font-normal">
            AURA GENOMICS unifies quantum molecular modeling, deep protein folding AI, and automated cellular synthesis to engineer targeted mRNA therapeutics and precision genomic medicines in hours—not years.
          </p>

          {/* Dual CTAs - 10% Accent (#00A896) */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button
              onClick={onOpenLabModal}
              className="glow-btn-cyan text-[#FFFFFF] font-heading font-extrabold text-sm sm:text-base px-8 py-4.5 rounded-2xl flex items-center space-x-3 cursor-pointer shadow-xl"
            >
              <Sparkles size={20} />
              <span>Launch BioLab Sandbox</span>
              <ArrowRight size={20} />
            </button>

            <button
              onClick={onExploreResearch}
              className="px-7 py-4.5 rounded-2xl bg-[#FFFFFF] hover:bg-[#F8F9FA] text-[#0B1B3D] hover:text-[#00A896] border border-[#0B1B3D]/20 transition-all font-heading font-semibold text-sm sm:text-base flex items-center space-x-3 shadow-sm cursor-pointer"
            >
              <Atom size={20} className="text-[#00A896]" />
              <span>Explore Research & Papers</span>
            </button>
          </div>

          {/* Hero Feature Badges */}
          <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#0B1B3D]/15 max-w-2xl">
            <div className="flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-[#00A896]/10 border border-[#00A896]/30 text-[#00A896]">
                <Dna size={20} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#0B1B3D] font-mono">99.98%</p>
                <p className="text-xs text-[#0B1B3D]/70 font-medium">Synthesis Fidelity</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-[#00A896]/10 border border-[#00A896]/30 text-[#00A896]">
                <Cpu size={20} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#0B1B3D] font-mono">10x Speed</p>
                <p className="text-xs text-[#0B1B3D]/70 font-medium">In-Silico Folding</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-[#00A896]/10 border border-[#00A896]/30 text-[#00A896]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#0B1B3D] font-mono">FDA Approved</p>
                <p className="text-xs text-[#0B1B3D]/70 font-medium">Safety Protocols</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive DNA Canvas */}
        <div className="lg:col-span-5 relative h-[560px] sm:h-[620px] w-full flex items-center justify-center z-10">
          <DnaCanvas speed={1.2} showControls={true} />

          {/* Floating Diagnostic Card 1 */}
          <div className="absolute top-8 -left-6 bio-card-glass p-4 rounded-2xl border border-[#00A896]/40 text-xs hidden sm:flex items-center space-x-4 shadow-xl animate-float-slow pointer-events-none">
            <div className="w-10 h-10 rounded-xl bg-[#00A896]/15 border border-[#00A896]/40 flex items-center justify-center text-[#00A896]">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-[11px] text-[#0B1B3D]/70 font-mono uppercase tracking-wider font-bold">Sequence Matching</p>
              <p className="text-sm font-bold text-[#00A896] font-mono">Target Binding: 99.4%</p>
            </div>
          </div>

          {/* Floating Diagnostic Card 2 */}
          <div className="absolute bottom-20 -right-6 bio-card-glass p-4 rounded-2xl border border-[#00A896]/40 text-xs hidden sm:flex items-center space-x-4 shadow-xl animate-float-slow pointer-events-none" style={{ animationDelay: '2.5s' }}>
            <div className="w-10 h-10 rounded-xl bg-[#00A896]/15 border border-[#00A896]/40 flex items-center justify-center text-[#00A896]">
              <Flame size={20} />
            </div>
            <div>
              <p className="text-[11px] text-[#0B1B3D]/70 font-mono uppercase tracking-wider font-bold">Thermodynamic Stability</p>
              <p className="text-sm font-bold text-[#00A896] font-mono">ΔG = -14.2 kcal/mol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
