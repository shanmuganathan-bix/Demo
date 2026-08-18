import React, { useState } from 'react';
import { Globe, ShieldCheck, Database, Award, TrendingUp } from 'lucide-react';

export default function ImpactSection() {
  const [selectedNode, setSelectedNode] = useState('boston');

  const nodes = [
    { id: 'boston', name: 'Boston BioHub Alpha', location: 'USA', status: 'Active (100% Load)', speed: '1.2ms', sequences: '4.8M / day' },
    { id: 'cambridge', name: 'Cambridge Synthetic Lab', location: 'UK', status: 'Active (88% Load)', speed: '1.4ms', sequences: '3.2M / day' },
    { id: 'zurich', name: 'Zurich Quantum Folding', location: 'Switzerland', status: 'Active (94% Load)', speed: '0.9ms', sequences: '2.9M / day' },
    { id: 'tokyo', name: 'Tokyo Microfluidics Center', location: 'Japan', status: 'Active (91% Load)', speed: '1.1ms', sequences: '3.3M / day' },
  ];

  const metrics = [
    { label: 'Therapeutic Value Unlocked', value: '$4.8B+', change: '+42% YoY', icon: TrendingUp },
    { label: 'Synthesis Base Pair Fidelity', value: '99.98%', change: 'Zero Off-Target', icon: ShieldCheck },
    { label: 'Sequences Processed Daily', value: '14.2M', change: '10x Fast', icon: Database },
    { label: 'Active Clinical Partnerships', value: '18+', change: 'Top 10 Pharma', icon: Award },
  ];

  const activeNodeData = nodes.find(n => n.id === selectedNode);

  return (
    <section id="impact" className="py-32 sm:py-36 px-6 sm:px-8 lg:px-12 bio-grid-bg relative border-t border-[#0B1B3D]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0B1B3D]/15 text-[#00A896] text-xs font-mono tracking-wider font-bold shadow-sm">
            <Globe size={15} />
            <span>GLOBAL IMPACT & SCIENTIFIC BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
            Accelerating Discovery <br />
            <span className="text-gradient-cyan font-heading">Across Global Bio-Foundries</span>
          </h2>
          <p className="text-[#0B1B3D]/80 text-base sm:text-xl leading-relaxed font-normal">
            Real-time throughput metrics across our international network of automated synthesis hubs and quantum compute clusters.
          </p>
        </div>

        {/* Animated Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => {
            const IconComponent = m.icon;
            return (
              <div
                key={i}
                className="bio-card-glass rounded-3xl p-8 border border-[#0B1B3D]/15 hover:border-[#00A896] transition-all flex flex-col justify-between space-y-6 bg-[#FFFFFF] shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#00A896]/10 border border-[#00A896]/30 text-[#00A896]">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/30">
                    {m.change}
                  </span>
                </div>
                <div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B3D] font-mono tracking-tight mb-2">{m.value}</h3>
                  <p className="text-xs sm:text-sm text-[#0B1B3D]/70 font-medium leading-normal">{m.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Network Map Simulation Card */}
        <div className="bio-card-glass rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#0B1B3D]/15 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-xl bg-[#FFFFFF]">
          
          {/* Node Selector Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#00A896] uppercase tracking-widest font-bold">// SYNTHESIS NODES</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">Automated Bio-Foundry Clusters</h3>
              <p className="text-sm text-[#0B1B3D]/80 leading-relaxed">
                Select a global bio-foundry node to view real-time sequencing load, latency, and daily output telemetry.
              </p>
            </div>

            <div className="space-y-4">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    selectedNode === node.id
                      ? 'bg-[#0B1B3D] text-[#FFFFFF] border-[#0B1B3D] shadow-xl'
                      : 'bg-[#F8F9FA] border-[#0B1B3D]/15 text-[#0B1B3D] hover:bg-[#FFFFFF]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`w-3 h-3 rounded-full ${selectedNode === node.id ? 'bg-[#39FF14] animate-ping' : 'bg-[#0B1B3D]/40'}`} />
                    <div>
                      <h4 className="font-heading font-bold text-base">{node.name}</h4>
                      <p className={`text-xs font-mono ${selectedNode === node.id ? 'text-[#00A896]' : 'text-[#0B1B3D]/60'}`}>{node.location}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono font-bold ${selectedNode === node.id ? 'text-[#39FF14]' : 'text-[#00A896]'}`}>{node.speed}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Node Telemetry Display Box - 30% Secondary Deep Navy Barrier */}
          <div className="lg:col-span-7 bio-card-navy rounded-3xl p-8 sm:p-10 border border-[#0B1B3D] space-y-8 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-5">
              <div>
                <span className="text-xs font-mono text-[#00A896] uppercase font-bold tracking-wider">NODE TELEMETRY METRICS</span>
                <h4 className="text-2xl font-bold text-white font-heading mt-1">{activeNodeData.name}</h4>
              </div>
              <span className="text-xs font-mono text-[#39FF14] bg-[#071229] px-3.5 py-1.5 rounded-full border border-[#00A896]/30 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse" />
                <span>{activeNodeData.status}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#071229] border border-slate-700/60 space-y-2">
                <span className="text-xs text-slate-300 font-mono font-semibold">DAILY CAPACITY</span>
                <p className="text-2xl font-bold text-[#00A896] font-mono">{activeNodeData.sequences}</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#071229] border border-slate-700/60 space-y-2">
                <span className="text-xs text-slate-300 font-mono font-semibold">NODE LATENCY</span>
                <p className="text-2xl font-bold text-[#39FF14] font-mono">{activeNodeData.speed}</p>
              </div>
            </div>

            {/* Network Waveform Visualizer simulation */}
            <div className="p-5 rounded-2xl bg-[#071229] border border-slate-700/60 space-y-3">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>SYNTHESIS WAVEFORM STREAM</span>
                <span className="text-[#39FF14] font-bold">60 FPS REAL-TIME</span>
              </div>
              <div className="h-20 flex items-end justify-between space-x-1.5 pt-3">
                {[65, 80, 45, 90, 75, 60, 95, 85, 70, 100, 80, 90, 55, 85, 95, 70, 88, 92, 78, 85].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-gradient-to-t from-[#00A896] to-[#39FF14] rounded-t transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
