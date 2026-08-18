import React, { useState } from 'react';
import { Terminal, Dna, Play, RefreshCw, Sparkles, Cpu, Layers, Database, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TechSection() {
  const [sequence, setSequence] = useState('AUG-CCC-GUA-UAC-GGG-AAC-UGA');
  const [affinity, setAffinity] = useState(96.8);
  const [codonScore, setCodonScore] = useState(0.92);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  const sampleSequences = [
    { label: 'CRISPR-Cas13 Target (Oncology)', seq: 'AUG-CCC-GUA-UAC-GGG-AAC-UGA' },
    { label: 'Cardiac mRNA Vector (Repair)', seq: 'AUG-GCG-UAC-CUG-GAA-UCC-UAA' },
    { label: 'Neural Axon Regenerator', seq: 'AUG-UUU-CCA-GAG-AUC-GGG-UGA' },
  ];

  const techStackItems = [
    {
      title: 'Quantum Tensor Folding',
      badge: '0.8 Å Resolution',
      icon: Cpu,
      description: 'Hybrid quantum-classical tensor networks predicting tertiary protein structures in under 4 minutes.'
    },
    {
      title: 'Automated Bio-Foundry',
      badge: '24/7 Robotics',
      icon: Database,
      description: 'Acoustic liquid handling robotics running continuous cell line transfection and passage assays.'
    },
    {
      title: 'Single-Cell Transcriptomics',
      badge: '100k Droplets/Day',
      icon: Layers,
      description: 'Massively parallel droplet sorting analyzing single-cell gene expression at scale.'
    },
    {
      title: 'Neural Codon Optimizer',
      badge: 'AI Gene Synthesis',
      icon: Dna,
      description: 'Deep generative diffusion algorithms synthesizing custom mRNA sequences with zero off-target cleavage.'
    }
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      const calculatedYield = (affinity * codonScore * 0.98).toFixed(1);
      const calculatedEnergy = (-12.5 - (affinity * 0.15)).toFixed(1);

      setSimulationResult({
        yield: `${calculatedYield}%`,
        bindingEnergy: `${calculatedEnergy} kcal/mol`,
        toxicity: '0.00% (Non-Toxic)',
        halfLife: '72.4 hours',
        status: 'SUCCESS — Optimal Translation & Stable Secondary Fold'
      });

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }
    }, 1200);
  };

  return (
    <section id="technology" className="py-32 sm:py-36 px-6 sm:px-8 lg:px-12 bio-grid-bg relative border-t border-[#0B1B3D]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0B1B3D]/15 text-[#00A896] text-xs font-mono tracking-wider font-bold shadow-sm">
            <Cpu size={15} />
            <span>DEEP COMPUTATIONAL TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Quantum Hardware & <br />
            <span className="text-gradient-purple font-heading">Generative Bio-Algorithms</span>
          </h2>
          <p className="text-[#0B1B3D]/80 text-base sm:text-xl leading-relaxed font-normal">
            Our multi-layer technology architecture seamlessly connects quantum simulation engines with high-throughput laboratory robotics.
          </p>
        </div>

        {/* Technology Stack Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bio-card-glass rounded-3xl p-7 border border-[#0B1B3D]/15 bg-[#FFFFFF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#00A896] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#00A896]/10 text-[#00A896]">
                      <IconComp size={24} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#00A896] bg-[#00A896]/10 px-2.5 py-1 rounded-full border border-[#00A896]/30">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#0B1B3D] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#0B1B3D]/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Lab Sandbox Card - id="sandbox" */}
        <div id="sandbox" className="bio-card-glass rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#0B1B3D]/15 grid grid-cols-1 lg:grid-cols-12 gap-12 shadow-xl relative overflow-hidden bg-[#FFFFFF] pt-12">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between border-b border-[#0B1B3D]/15 pb-4">
              <div className="flex items-center space-x-3">
                <Dna className="text-[#00A896]" size={24} />
                <h3 className="font-heading font-bold text-xl text-[#0B1B3D]">Sequence Input & Parameters</h3>
              </div>
              <span className="text-xs font-mono text-[#00A896] bg-[#00A896]/10 px-3 py-1.5 rounded-full border border-[#00A896]/30 font-bold">
                SANDBOX v4.2
              </span>
            </div>

            {/* Sequence Selector Presets */}
            <div className="space-y-3">
              <label className="bio-form-label">Select Target RNA Preset:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sampleSequences.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSequence(preset.seq);
                      setSimulationResult(null);
                    }}
                    className={`p-3.5 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                      sequence === preset.seq
                        ? 'bg-[#0B1B3D] border-[#0B1B3D] text-[#FFFFFF] font-bold shadow-md'
                        : 'bg-[#F8F9FA] border-[#0B1B3D]/15 text-[#0B1B3D] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="space-y-3">
              <label className="bio-form-label">Active Nucleotide Sequence (5' ➔ 3'):</label>
              <div className="relative">
                <input
                  type="text"
                  value={sequence}
                  onChange={(e) => setSequence(e.target.value.toUpperCase())}
                  className="bio-form-input font-mono text-[#00A896] text-base tracking-widest pl-4 pr-16 font-bold"
                  placeholder="AUG-CCC-GUA..."
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                  <span className="text-xs font-mono font-bold text-[#00A896] px-2.5 py-1 rounded-lg bg-[#F8F9FA] border border-[#0B1B3D]/15">
                    RNA
                  </span>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-[#0B1B3D] font-bold">Target Binding Affinity Goal:</span>
                  <span className="text-[#00A896] font-bold text-base">{affinity}%</span>
                </div>
                <input
                  type="range"
                  min="85.0"
                  max="99.9"
                  step="0.1"
                  value={affinity}
                  onChange={(e) => setAffinity(parseFloat(e.target.value))}
                  className="w-full accent-[#00A896] bg-[#F8F9FA] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-[#0B1B3D] font-bold">Codon Frequency Optimization:</span>
                  <span className="text-[#00A896] font-bold text-base">{codonScore}</span>
                </div>
                <input
                  type="range"
                  min="0.50"
                  max="1.00"
                  step="0.01"
                  value={codonScore}
                  onChange={(e) => setCodonScore(parseFloat(e.target.value))}
                  className="w-full accent-[#00A896] bg-[#F8F9FA] cursor-pointer"
                />
              </div>
            </div>

            {/* Simulate Button */}
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="w-full py-4.5 rounded-2xl glow-btn-cyan text-[#FFFFFF] font-heading font-extrabold text-sm sm:text-base flex items-center justify-center space-x-3 shadow-xl cursor-pointer disabled:opacity-50 mt-4"
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="animate-spin" size={20} />
                  <span>Computing Thermodynamic Folding...</span>
                </>
              ) : (
                <>
                  <Play size={20} fill="currentColor" />
                  <span>Execute In-Silico Synthesis Test</span>
                </>
              )}
            </button>
          </div>

          {/* Results Console Output Column - 30% Deep Navy Barrier Box */}
          <div className="lg:col-span-6 bio-card-navy rounded-3xl p-8 border border-[#0B1B3D] flex flex-col justify-between space-y-8 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center space-x-3">
                  <Terminal size={20} className="text-[#39FF14]" />
                  <span className="font-mono text-xs text-white uppercase font-bold tracking-wider">
                    SYNTHESIS SIMULATOR CONSOLE
                  </span>
                </div>
                <span className="w-3 h-3 rounded-full bg-[#39FF14] animate-pulse" />
              </div>

              {/* Console log stream preview */}
              <div className="font-mono text-xs sm:text-sm space-y-3 text-slate-200 bg-[#071229] p-5 rounded-2xl border border-slate-800 max-h-56 overflow-y-auto leading-relaxed">
                <p className="text-slate-400">[SYSTEM]: Initializing Cas13 molecular force field...</p>
                <p className="text-[#00A896] font-bold">[SEQUENCE]: Parsing strand: {sequence}</p>
                <p className="text-slate-300">[PARAMS]: Affinity Target: {affinity}% | Codon Score: {codonScore}</p>
                {isSimulating && (
                  <p className="text-[#39FF14] animate-pulse">[PROCESSING]: Running Monte-Carlo RNA secondary fold ensemble...</p>
                )}
                {simulationResult && (
                  <>
                    <p className="text-[#39FF14] font-bold">[RESULT]: {simulationResult.status}</p>
                    <p className="text-[#39FF14]">[THERMO]: Free Energy (ΔG): {simulationResult.bindingEnergy}</p>
                    <p className="text-[#39FF14]">[EXPRESSION]: Predicted Protein Yield: {simulationResult.yield}</p>
                  </>
                )}
              </div>
            </div>

            {/* Results Grid Box */}
            {simulationResult ? (
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#071229] border border-[#00A896]/30 text-xs">
                <div className="p-4 rounded-xl bg-[#0B1B3D] border border-slate-700">
                  <span className="text-slate-300 font-mono text-xs font-semibold">PREDICTED YIELD</span>
                  <p className="text-xl font-extrabold text-[#39FF14] font-mono mt-1">{simulationResult.yield}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0B1B3D] border border-slate-700">
                  <span className="text-slate-300 font-mono text-xs font-semibold">BINDING ENERGY</span>
                  <p className="text-xl font-extrabold text-[#00A896] font-mono mt-1">{simulationResult.bindingEnergy}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0B1B3D] border border-slate-700">
                  <span className="text-slate-300 font-mono text-xs font-semibold">OFF-TARGET RISK</span>
                  <p className="text-sm font-bold text-white font-mono mt-1">{simulationResult.toxicity}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0B1B3D] border border-slate-700">
                  <span className="text-slate-300 font-mono text-xs font-semibold">CELLULAR HALF-LIFE</span>
                  <p className="text-sm font-bold text-white font-mono mt-1">{simulationResult.halfLife}</p>
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-2xl border border-dashed border-slate-700 text-center text-xs sm:text-sm text-slate-300 space-y-3">
                <Sparkles className="mx-auto text-[#00A896] animate-spin-slow" size={28} />
                <p>Click "Execute In-Silico Synthesis Test" to run the thermodynamic simulation algorithm.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
