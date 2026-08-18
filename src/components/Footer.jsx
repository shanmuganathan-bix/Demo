import React from 'react';
import { Dna } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1B3D] text-[#FFFFFF] text-xs py-16 px-6 sm:px-8 lg:px-12 border-t border-[#0B1B3D]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00A896] to-[#39FF14] p-[1px]">
              <div className="w-full h-full bg-[#0B1B3D] rounded-[11px] flex items-center justify-center">
                <Dna className="w-5 h-5 text-[#39FF14]" />
              </div>
            </div>
            <span className="font-heading font-extrabold text-lg text-white tracking-wider">
              AURA<span className="text-[#00A896]">.GENOMICS</span>
            </span>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-sm">
            Architecting the future of synthetic biology, quantum molecular simulation, and automated mRNA synthesis to engineer life-saving therapeutics.
          </p>

          <div className="flex items-center space-x-3 pt-2 font-mono text-[11px] text-slate-300">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#071229] border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              <span className="text-[#39FF14] font-bold">SYSTEMS ONLINE</span>
            </div>
            <span>v4.2.0-STABLE</span>
          </div>
        </div>

        {/* Quick Links Column 1 */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider">Platforms & Tools</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#sandbox" className="hover:text-[#00A896] transition-colors">CRISPR 3.0 Sandbox</a></li>
            <li><a href="#about" className="hover:text-[#00A896] transition-colors">Quantum Protein Folding</a></li>
            <li><a href="#capabilities" className="hover:text-[#00A896] transition-colors">mRNA LNP Delivery</a></li>
            <li><a href="#impact" className="hover:text-[#00A896] transition-colors">Global Bio-Foundry Nodes</a></li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider">Research & Data</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#" className="hover:text-[#00A896] transition-colors">Whitepaper Publications</a></li>
            <li><a href="#" className="hover:text-[#00A896] transition-colors">Single-Cell Benchmarks</a></li>
            <li><a href="#" className="hover:text-[#00A896] transition-colors">Open Genomic API</a></li>
            <li><a href="#" className="hover:text-[#00A896] transition-colors">Therapeutic Pipeline</a></li>
          </ul>
        </div>

        {/* Compliance Column */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider">Security & Compliance</h4>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            ISO 27001 Certified, SOC 2 Type II Audited, FDA 21 CFR Part 11 Compliant, HIPAA Data Privacy Encrypted.
          </p>
          <div className="pt-2 text-[#00A896] text-[11px] font-mono font-bold">
            <span>© {new Date().getFullYear()} AURA GENOMICS INC. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
