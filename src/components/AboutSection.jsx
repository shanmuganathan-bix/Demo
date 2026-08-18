import React, { useState } from 'react';
import { Dna, Zap, Layers, Cpu, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'crispr',
      title: 'CRISPR-Cas13 Precision Editing',
      subtitle: 'Zero Off-Target RNA Base Cleavage',
      icon: Dna,
      description: 'Our proprietary Cas13 nucleases combine machine learning guide RNA design with ultra-high target affinity, eliminating non-specific cleavage across complex human transcriptomes.',
      metrics: [
        { label: 'Off-Target Rate', value: '< 0.001%' },
        { label: 'Cleavage Speed', value: '1.4ms / strand' },
        { label: 'Delivery Vector', value: 'LNP Nanoparticle' },
      ],
      features: [
        'Real-time single-molecule imaging feed',
        'Multi-locus concurrent RNA base editing',
        'Self-inactivating vector protection'
      ]
    },
    {
      id: 'folding',
      title: 'Quantum Protein Folding',
      subtitle: 'Atomic-Scale Structure Prediction in Minutes',
      icon: Cpu,
      description: 'Integrating quantum tensor simulation with 3D structural AI to map intricate 3D tertiary protein conformations and allosteric binding pockets at sub-angstrom resolution.',
      metrics: [
        { label: 'Resolution', value: '0.8 Ångström' },
        { label: 'Fold Time', value: '3.2 mins' },
        { label: 'Library Size', value: '450M proteins' },
      ],
      features: [
        'De-novo de-risk ligand binding screening',
        'Allosteric site dynamics modeling',
        'Conformational stability scoring'
      ]
    },
    {
      id: 'delivery',
      title: 'Targeted mRNA Nanoparticle Delivery',
      subtitle: 'Cell-Type Specific Tropism & Zero Toxicity',
      icon: Layers,
      description: 'Engineered ionizable lipid nanoparticles designed for tissue-specific cellular uptake, guaranteeing high translation efficiency in cardiomyocytes, neurons, and hepatocytes.',
      metrics: [
        { label: 'Uptake Efficiency', value: '98.6%' },
        { label: 'Half-Life Expansion', value: '4.2x extended' },
        { label: 'Organ Tropism', value: 'Selective liver/lung' },
      ],
      features: [
        'Tissue-specific cell membrane targeting',
        'Low immune activation lipid envelope',
        'High payload capacity for multi-cistron mRNA'
      ]
    },
    {
      id: 'organoid',
      title: 'In-Silico Organoid Screening',
      subtitle: 'Digital Twin Clinical Trial Simulation',
      icon: Compass,
      description: 'High-fidelity cellular digital twins simulating thousands of patient genomic profiles in parallel to predict therapeutic efficacy and toxicity before clinical phase I trials.',
      metrics: [
        { label: 'Virtual Cohort', value: '100,000 twins' },
        { label: 'Predictive Accuracy', value: '94.2%' },
        { label: 'Trial Acceleration', value: '85% faster' },
      ],
      features: [
        'Multi-ethnic patient genomic stratification',
        'Cardiotoxicity and hepatotoxicity early warning',
        'Automated IND regulatory dossier output'
      ]
    }
  ];

  const currentPillar = pillars[activePillar];

  return (
    <section id="about" className="py-32 sm:py-36 px-6 sm:px-8 lg:px-12 bio-grid-bg relative border-t border-[#0B1B3D]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0B1B3D]/15 text-[#00A896] text-xs font-mono tracking-wider font-bold shadow-sm">
            <span>// ABOUT & SCIENTIFIC PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Pioneering the Next Era of <br />
            <span className="text-gradient-cyan">Cell & Molecular Synthetics</span>
          </h2>
          <p className="text-[#0B1B3D]/80 text-base sm:text-xl leading-relaxed font-normal">
            We bridge computational biology, robotics, and synthetic genetics to decode cellular programming and manufacture curative medicines.
          </p>
        </div>

        {/* Interactive Pillar Selector 4 Cards Grid - 60% White / 30% Navy / 10% Teal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const isSelected = activePillar === idx;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-7 sm:p-8 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[240px] sm:min-h-[260px] ${
                  isSelected
                    ? 'bg-[#0B1B3D] text-[#FFFFFF] border-[#0B1B3D] shadow-2xl scale-[1.03]'
                    : 'bg-[#FFFFFF] text-[#0B1B3D] hover:bg-[#F8F9FA] border-[#0B1B3D]/15 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl ${
                    isSelected ? 'bg-[#00A896] text-[#FFFFFF] shadow-md' : 'bg-[#0B1B3D]/10 text-[#00A896]'
                  }`}>
                    <IconComponent size={24} />
                  </div>
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#00A896]' : 'text-[#0B1B3D]/50'}`}>
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2 mt-auto">
                  <h3 className={`font-heading font-bold text-base sm:text-lg leading-snug tracking-tight ${isSelected ? 'text-white' : 'text-[#0B1B3D]'}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-[#0B1B3D]/70'}`}>
                    {pillar.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Pillar Showcase Card - 60% White Card / 30% Navy Sidebar */}
        <div className="bio-card-glass rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#0B1B3D]/15 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch shadow-xl">
          
          {/* Left info */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between py-2">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#00A896]/10 border border-[#00A896]/20 text-[#00A896] font-mono text-xs font-bold">
                <span>PILLAR SHOWCASE 0{activePillar + 1}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] leading-tight">
                {currentPillar.title}
              </h3>
              <p className="text-[#0B1B3D]/80 text-base sm:text-lg leading-relaxed pt-2">
                {currentPillar.description}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-4 pt-6 border-t border-[#0B1B3D]/15">
              <p className="text-xs font-mono text-[#0B1B3D] uppercase tracking-widest font-bold">Key Advantages & Innovation:</p>
              <div className="space-y-3.5">
                {currentPillar.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-4 text-base text-[#0B1B3D]">
                    <CheckCircle2 size={22} className="text-[#00A896] shrink-0" />
                    <span className="font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Benchmark Metrics Box - 30% Secondary Deep Navy Barrier */}
          <div className="lg:col-span-5 bio-card-navy rounded-3xl p-8 sm:p-10 border border-[#0B1B3D] space-y-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-5">
                <span className="text-xs font-mono text-[#00A896] uppercase tracking-widest font-bold">
                  BENCHMARK METRICS
                </span>
                <Zap size={18} className="text-[#39FF14] animate-bounce" />
              </div>

              {/* Even Padding for Metric Rows */}
              <div className="space-y-4">
                {currentPillar.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-[#071229] border border-slate-700/60 shadow-sm">
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">{metric.label}</span>
                    <span className="text-base font-bold font-mono text-[#39FF14]">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Banner */}
            <div className="p-6 rounded-2xl bg-[#071229] border border-[#00A896]/30 text-xs text-slate-300 space-y-2 mt-4">
              <p className="font-bold text-[#00A896] font-mono tracking-wider text-sm flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse" />
                <span>STATUS: OPERATIONAL</span>
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Validated across 12 therapeutic programs with zero off-target genomic toxicity reported.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
