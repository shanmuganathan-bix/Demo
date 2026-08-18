import React, { useState } from 'react';
import { Microscope, Layers, Dna, Cpu, ShieldCheck, Database, ArrowUpRight, X, Check } from 'lucide-react';

export default function CapabilitiesSection() {
  const [selectedCapability, setSelectedCapability] = useState(null);

  const capabilities = [
    {
      id: 'screening',
      title: 'High-Throughput Genomic Screening',
      category: 'PARALLEL ASSAYS',
      icon: Microscope,
      badge: '100k samples/day',
      shortDesc: 'Automated single-cell droplet sorting and next-gen transcriptomic sequencing at unmatched scale.',
      fullDetails: {
        overview: 'Our microfluidic chip platforms enable massively parallel screening of over 100,000 cell-variant interactions per day, drastically reducing lead candidate discovery timelines.',
        techSpecs: ['Single-cell RNA-seq resolution', 'Microfluidic picoliter droplets', 'Automated fluorescent cell sorting (FACS)'],
        applications: ['Oncology target discovery', 'Antibody screening', 'CRISPR knockout libraries']
      }
    },
    {
      id: 'mrna',
      title: 'Custom mRNA & Lipid Nanoparticles',
      category: 'DELIVERY SYSTEM',
      icon: Dna,
      badge: '98.5% Tropism',
      shortDesc: 'Optimized 5’ UTR/3’ UTR codon design coupled with cell-targeted lipid nanoparticle formulation.',
      fullDetails: {
        overview: 'We synthesize modified mRNA sequences featuring pseudo-uridine incorporation to minimize innate immune detection while maximizing intracellular protein translation.',
        techSpecs: ['Modified nucleoside synthesis', 'Targeted LNP surface functionalization', 'Microfluidic mixing assembly'],
        applications: ['Cancer vaccines', 'Rare genetic disease replacement', 'Cardiovascular tissue repair']
      }
    },
    {
      id: 'enzyme',
      title: 'De-Novo Enzyme & Protein Engineering',
      category: 'BIOCATALYSIS',
      icon: Cpu,
      badge: 'Sub-Angstrom',
      shortDesc: 'Designing custom biocatalysts with enhanced thermal stability and precise substrate specificity.',
      fullDetails: {
        overview: 'Using deep generative protein backbone models, we engineer synthetic enzymes capable of performing non-natural chemical reactions with extreme catalytic efficiency.',
        techSpecs: ['Generative protein diffusion model', 'Thermal tolerance up to 95°C', 'Enantioselective active site synthesis'],
        applications: ['Green chemistry biocatalysis', 'Bioremediation', 'Metabolic pathway optimization']
      }
    },
    {
      id: 'twins',
      title: 'Cellular Digital Twins & Organoids',
      category: 'IN-SILICO MODELS',
      icon: Layers,
      badge: '94% Correlation',
      shortDesc: 'Simulating complex human tissue organoid dynamics to predict drug safety and efficacy.',
      fullDetails: {
        overview: 'Our multi-scale physiological digital twin models emulate liver, heart, and brain organoids, giving pharmaceutical partners early toxicity signals before animal studies.',
        techSpecs: ['Multi-organoid microphysiological systems', 'Real-time electrophysiology recording', 'Machine learning PK/PD modeling'],
        applications: ['Early cardiotoxicity de-risking', 'Blood-brain barrier permeability', 'Pharmacokinetics prediction']
      }
    },
    {
      id: 'foundry',
      title: 'Robotic Cell Line Bio-Foundry',
      category: 'AUTOMATION',
      icon: Database,
      badge: '24/7 Unattended',
      shortDesc: 'Fully automated liquid handling robotics for continuous cell culture, transfection, and assay execution.',
      fullDetails: {
        overview: 'High-density robotic workcells operate around the clock to perform high-precision cell passaging, transfection, and automated microscopy with zero human error.',
        techSpecs: ['High-speed acoustic liquid dispensing', 'Integrated robotic incubators', 'Automated confocal imaging stack'],
        applications: ['Stable cell line generation', 'High-throughput transfection', 'Compound library storage']
      }
    },
    {
      id: 'stratification',
      title: 'Biomarker Cohort Stratification',
      category: 'CLINICAL AI',
      icon: ShieldCheck,
      badge: 'FDA Validated',
      shortDesc: 'AI algorithms matching patient multi-omic signatures to optimal therapeutic clinical trial cohorts.',
      fullDetails: {
        overview: 'By analyzing whole-genome sequencing, transcriptomics, and spatial proteomics, our platform identifies patient subgroups with the highest probability of therapeutic response.',
        techSpecs: ['Multi-omic data fusion models', 'Spatial transcriptomics integration', 'HIPAA-compliant genomic storage'],
        applications: ['Precision oncology trial design', 'Companion diagnostics development', 'Responder vs non-responder prediction']
      }
    }
  ];

  return (
    <section id="capabilities" className="py-32 sm:py-36 px-6 sm:px-8 lg:px-12 bio-grid-bg relative border-t border-[#0B1B3D]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0B1B3D]/15 text-[#00A896] text-xs font-mono tracking-wider font-bold shadow-sm">
            <span>// CORE BIOTECH CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            End-to-End <span className="text-gradient-emerald font-heading">Synthetic Bio Platform</span>
          </h2>
          <p className="text-[#0B1B3D]/80 text-base sm:text-xl leading-relaxed font-normal">
            From computational target discovery to automated robotic manufacturing, explore our integrated biotechnology suites.
          </p>
        </div>

        {/* Capability Cards Grid - 60% White / 30% Navy / 10% Teal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;

            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(cap)}
                className="bio-card-glass rounded-3xl p-8 sm:p-9 border border-[#0B1B3D]/15 hover:border-[#00A896] transition-all cursor-pointer flex flex-col justify-between space-y-8 group bg-[#FFFFFF] shadow-md"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-[#0B1B3D] font-bold uppercase bg-[#F8F9FA] px-3 py-1.5 rounded-full border border-[#0B1B3D]/15">
                      {cap.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#00A896] bg-[#00A896]/10 px-3 py-1.5 rounded-full border border-[#00A896]/30">
                      {cap.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#00A896]/10 border border-[#00A896]/30 flex items-center justify-center text-[#00A896] group-hover:scale-110 group-hover:bg-[#00A896] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-md">
                    <IconComp size={28} />
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-2xl text-[#0B1B3D] group-hover:text-[#00A896] transition-colors mb-3 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#0B1B3D]/70 leading-relaxed">
                      {cap.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#0B1B3D]/15 flex items-center justify-between text-xs font-mono font-bold text-[#00A896] group-hover:text-[#008f80] tracking-wider">
                  <span>VIEW FULL PROTOCOL</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Capability Details Modal */}
      {selectedCapability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1B3D]/80 backdrop-blur-lg animate-fadeIn">
          <div className="bio-card-glass max-w-2xl w-full rounded-3xl p-8 sm:p-12 border border-[#00A896]/40 space-y-8 shadow-2xl relative bg-[#FFFFFF]">
            <button
              onClick={() => setSelectedCapability(null)}
              className="absolute top-8 right-8 p-2.5 rounded-xl bg-[#F8F9FA] border border-[#0B1B3D]/20 text-[#0B1B3D] hover:text-[#00A896]"
            >
              <X size={20} />
            </button>

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-[#00A896]/15 text-[#00A896] border border-[#00A896]/30 shadow-md">
                <selectedCapability.icon size={32} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00A896] uppercase tracking-wider font-bold">{selectedCapability.category}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">{selectedCapability.title}</h3>
              </div>
            </div>

            <p className="text-[#0B1B3D]/80 text-base leading-relaxed">
              {selectedCapability.fullDetails.overview}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-[#0B1B3D] uppercase tracking-wider font-bold">Technical Specifications:</h4>
              {selectedCapability.fullDetails.techSpecs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm text-[#0B1B3D]">
                  <Check size={16} className="text-[#00A896]" />
                  <span className="font-medium">{spec}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-[#0B1B3D] uppercase tracking-wider font-bold">Target Applications:</h4>
              <div className="flex flex-wrap gap-2.5">
                {selectedCapability.fullDetails.applications.map((app, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full bg-[#F8F9FA] border border-[#0B1B3D]/15 text-xs font-mono text-[#00A896] font-bold">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#0B1B3D]/15 flex justify-end">
              <button
                onClick={() => setSelectedCapability(null)}
                className="glow-btn-cyan text-[#FFFFFF] font-bold text-xs px-7 py-3 rounded-xl cursor-pointer"
              >
                Close Protocol
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
