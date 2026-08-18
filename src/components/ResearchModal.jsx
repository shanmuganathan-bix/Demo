import React from 'react';
import { X, Download, Atom } from 'lucide-react';

export default function ResearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const papers = [
    {
      title: 'Sub-Angstrom De-Novo Protein Design via Quantum Tensor Networks',
      journal: 'Nature Biotechnology 2026',
      authors: 'Vance, E. et al., AURA Genomics Computation Lab',
      pdf: 'Download PDF (4.2 MB)',
      abstract: 'We present a quantum-classical hybrid tensor architecture capable of folding complex 3D allosteric protein binding pockets with 0.8 Å precision in under 4 minutes.'
    },
    {
      title: 'Targeted In-Vivo mRNA Nanoparticles for Cardiomyocyte Repair',
      journal: 'Cell Molecular Therapeutics 2025',
      authors: 'Chen, L., Kowalski, M., AURA Research Suite',
      pdf: 'Download PDF (3.8 MB)',
      abstract: 'Engineering ionizable lipid nanoparticles with synthetic peptide tags for 98.6% selective cardiac uptake without systemic liver bio-accumulation.'
    },
    {
      title: 'CRISPR-Cas13 Off-Target Suppression via Guide RNA Structural Tuning',
      journal: 'Science Genomics 2025',
      authors: 'Genomics Consortium & AURA Bio-Foundry',
      pdf: 'Download PDF (5.1 MB)',
      abstract: 'Demonstrating zero transcriptomic off-target cleavage across 45 million human RNA reads using secondary hairpins in Cas13 guide RNA.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1B3D]/80 backdrop-blur-md animate-fadeIn">
      <div className="bio-card-glass max-w-3xl w-full rounded-3xl p-6 sm:p-10 border border-[#00A896]/40 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto bg-[#FFFFFF]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#F8F9FA] border border-[#0B1B3D]/20 text-[#0B1B3D] hover:text-[#00A896]"
        >
          <X size={20} />
        </button>

        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-[#00A896]/15 text-[#00A896] border border-[#00A896]/30">
            <Atom size={28} />
          </div>
          <div>
            <span className="text-xs font-mono text-[#00A896] uppercase font-bold">// PEER-REVIEWED PUBLICATIONS</span>
            <h3 className="text-2xl font-extrabold text-[#0B1B3D]">Scientific Research Library</h3>
          </div>
        </div>

        <p className="text-[#0B1B3D]/80 text-sm">
          Access full open-access whitepapers, benchmark data, and experimental protocols produced by AURA GENOMICS research scientists.
        </p>

        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#0B1B3D]/15 space-y-3 hover:border-[#00A896] transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#00A896] bg-[#00A896]/10 px-2 py-0.5 rounded border border-[#00A896]/30 font-bold">
                    {paper.journal}
                  </span>
                  <h4 className="font-heading font-bold text-base text-[#0B1B3D] mt-1.5">{paper.title}</h4>
                  <p className="text-xs text-[#0B1B3D]/70 font-mono mt-0.5">{paper.authors}</p>
                </div>
              </div>
              <p className="text-xs text-[#0B1B3D]/80 leading-relaxed">{paper.abstract}</p>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => alert(`Downloading paper: ${paper.title}`)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-mono flex items-center space-x-2 transition-all cursor-pointer font-bold shadow-sm"
                >
                  <Download size={14} />
                  <span>{paper.pdf}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#0B1B3D]/15 flex justify-end">
          <button
            onClick={onClose}
            className="glow-btn-cyan text-[#FFFFFF] font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
          >
            Close Research Library
          </button>
        </div>
      </div>
    </div>
  );
}
