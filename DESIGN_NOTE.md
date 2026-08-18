# 🧬 Project Design & Animation Approach — AURA GENOMICS

## 📌 Executive Overview
This document provides a concise explanation of the visual design strategy, color system rationale, micro-interactions, and 3D WebGL animation approach developed for **AURA GENOMICS**, a biotechnology landing page.

---

## 🎨 Visual Design System & 60-30-10 Color Rule

The user interface adheres strictly to the **60-30-10 Rule of Visual Hierarchy** to deliver high readability, professional medical aesthetic, and clear visual focus:

### 1. Dominant Base (60%) — Pure White & Soft Light Gray (`#FFFFFF` / `#F8F9FA`)
- **Purpose**: Provides clean, open, low-fatigue background space.
- **Application**: Landing page body background, card containers, section wrappers, and form backdrops.
- **Benefit**: Ensures high contrast against typography and gives components visual breathing room.

### 2. Secondary Structure (30%) — Deep Navy Blue (`#0B1B3D`)
- **Purpose**: Establishes structural hierarchy, legibility, and grounding.
- **Application**: H1–H6 section titles, body copy, active navigation items, structural console barriers, and dark cards.
- **Benefit**: Projects scientific authority and deep-tech trustworthiness.

### 3. High-Priority Accent (10%) — Vibrant Cyan/Teal (`#00A896`) & Bio-Luminescent Green (`#39FF14`)
- **Purpose**: Directs user attention immediately to actionable elements and live status indicators.
- **Application**: Call-to-action buttons (`.glow-btn-cyan`), 3D DNA helix strands, sequence highlights, status dots, and focus rings.
- **Benefit**: Drives high conversion and interactive feedback without visual clutter.

---

## 🎬 Animation & Interaction Approach

### 1. 3D WebGL Double Helix Simulation (`DnaCanvas.jsx`)
- **Technology**: **Three.js** WebGL renderer operating at a smooth 60 FPS.
- **Geometry**: 36 nucleotide base pairs connected by cylindrical rungs, surrounded by a 140-node floating molecular particle field.
- **Interactivity**:
  - **Inertia Mouse Tracking**: The DNA helix tilts dynamically based on cursor movement across the hero canvas.
  - **Live Parameter Controls**: Users can adjust rotation speed ($0.2\times$ to $3.0\times$), toggle rotation state, and switch between color modes (*Teal-Green*, *Bio-Green*, *Navy*).

### 2. Micro-Interactions & Scroll Animations
- **Scroll Progress Line**: Header progress bar tracking viewport scroll position from 0% to 100%.
- **Active Navigation Watcher**: Automatically highlights active menu links based on viewport scroll position.
- **Card Hover Physics**: Smooth elevation (`translateY(-4px)`) and subtle teal drop shadows (`shadow-[#00A896]/18`) on card hover.
- **Modal Drawer Animations**: Smooth backdrop blur and scale-in transitions for protocol details and peer-reviewed whitepaper downloads.

### 3. Interactive In-Silico Gene Sandbox (`TechSection.jsx`)
- **Real-Time Simulation**: Allows users to select or type RNA nucleotide sequences, adjust Target Binding Affinity and Codon Optimization sliders, and compute predicted protein yield and thermodynamic energy ($\Delta G$).
- **Celebration Feedback**: Triggers particle confetti (`canvas-confetti`) on successful simulation tests to reinforce user delight.

### 4. Live Global Telemetry Stream (`ImpactSection.jsx`)
- **Node Telemetry Switcher**: Allows users to inspect international bio-foundry clusters (Boston, Cambridge, Zurich, Tokyo) with real-time latency and sequencing capacity updates.
- **Waveform Stream Animation**: Animated 60 FPS equalizer bars simulating live synthesis data throughput.

---

## ⚡ Performance & Optimization Standards

- **Asset Efficiency**: Vector SVG icons (`Lucide React`) and mathematical 3D canvas primitives reduce asset payload size.
- **Resource Management**: Three.js WebGL animation frames, event listeners, and scene geometries are cleanly disposed on component unmount to eliminate memory leaks.
- **Fast Build Times**: Vite bundler builds production output in $< 1.0\text{ second}$.

---

## 🛠️ Summary Stack
- **Framework**: React 18 (JavaScript)
- **Build Tool**: Vite 8
- **3D Graphics**: Three.js WebGL
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React
- **Celebration Feedback**: Canvas Confetti
