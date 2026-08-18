import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, Zap } from 'lucide-react';

export default function DnaCanvas({ speed = 1.2, showControls = true }) {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [helixSpeed, setHelixSpeed] = useState(speed);
  const [strandColorMode, setStrandColorMode] = useState('cyan-green');

  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isPlayingRef = useRef(isPlaying);
  const speedRef = useRef(helixSpeed);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    speedRef.current = helixSpeed;
  }, [helixSpeed]);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- THREE.JS SETUP ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 24);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00A896, 4, 50); // Vibrant Cyan/Teal
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x39FF14, 4, 50); // Bio-Luminescent Green
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x0B1B3D, 2, 50); // Deep Navy
    pointLight3.position.set(0, 15, -10);
    scene.add(pointLight3);

    // --- DNA GROUP ---
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // 60-30-10 Color Mode Palette
    const getColors = (mode) => {
      switch (mode) {
        case 'bio-green':
          return { strand1: 0x39FF14, strand2: 0x00A896, rungs: [0x39FF14, 0x00A896, 0x0B1B3D, 0xFFFFFF] };
        case 'navy-teal':
          return { strand1: 0x0B1B3D, strand2: 0x00A896, rungs: [0x00A896, 0x39FF14, 0x0B1B3D, 0x00C4B4] };
        default: // cyan-green
          return { strand1: 0x00A896, strand2: 0x39FF14, rungs: [0x00A896, 0x39FF14, 0x0B1B3D, 0xFFFFFF] };
      }
    };

    const palette = getColors(strandColorMode);

    // Geometries & Materials
    const sphereGeo = new THREE.SphereGeometry(0.34, 16, 16);
    const cylinderGeo = new THREE.CylinderGeometry(0.09, 0.09, 1, 8);

    const matStrand1 = new THREE.MeshPhongMaterial({
      color: palette.strand1,
      emissive: palette.strand1,
      emissiveIntensity: 0.4,
      shininess: 90
    });

    const matStrand2 = new THREE.MeshPhongMaterial({
      color: palette.strand2,
      emissive: palette.strand2,
      emissiveIntensity: 0.4,
      shininess: 90
    });

    // Build DNA Helix
    const numPairs = 36;
    const helixRadius = 3.2;
    const helixHeight = 18;
    const twistAngle = 0.38;

    for (let i = 0; i < numPairs; i++) {
      const y = (i / numPairs) * helixHeight - helixHeight / 2;
      const angle = i * twistAngle;

      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;

      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;

      // Node 1
      const sphere1 = new THREE.Mesh(sphereGeo, matStrand1);
      sphere1.position.set(x1, y, z1);
      dnaGroup.add(sphere1);

      // Node 2
      const sphere2 = new THREE.Mesh(sphereGeo, matStrand2);
      sphere2.position.set(x2, y, z2);
      dnaGroup.add(sphere2);

      // Connecting Base Pair Rung
      const rungColor = palette.rungs[i % palette.rungs.length];
      const matRung = new THREE.MeshPhongMaterial({
        color: rungColor,
        emissive: rungColor,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.95
      });

      const rung = new THREE.Mesh(cylinderGeo, matRung);
      rung.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
      
      const direction = new THREE.Vector3(x2 - x1, 0, z2 - z1);
      const length = direction.length();
      rung.scale.set(1, length, 1);
      rung.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());

      dnaGroup.add(rung);
    }

    // Floating Background Molecular Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 140;
    const posArray = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      posArray[p] = (Math.random() - 0.5) * 35;
      posArray[p + 1] = (Math.random() - 0.5) * 35;
      posArray[p + 2] = (Math.random() - 0.5) * 35;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.22,
      color: 0x00A896,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // --- INTERACTION & MOUSE ROTATION ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX = x * 2;
      mouseY = y * 2;
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP ---
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (isPlayingRef.current) {
        dnaGroup.rotation.y += 0.012 * speedRef.current;
        dnaGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1;
      }

      targetRotationY = mouseX * 0.6;
      targetRotationX = mouseY * 0.4;

      dnaGroup.rotation.x += (targetRotationX - dnaGroup.rotation.x) * 0.05;
      dnaGroup.rotation.y += (targetRotationY * 0.02);

      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [strandColorMode]);

  return (
    <div className="relative w-full h-full min-h-[460px] flex flex-col items-center justify-center rounded-3xl overflow-hidden bg-[#0B1B3D] border border-[#00A896]/40 shadow-2xl group">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00A896]/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#39FF14]/15 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" />

      {/* WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Status Pill Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-3 px-4 py-2 rounded-full bg-[#0B1B3D]/90 border border-[#00A896]/40 text-xs text-white pointer-events-none backdrop-blur-md shadow-md">
        <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping" />
        <span className="font-mono text-[#39FF14] font-bold uppercase tracking-wider">
          LIVE 3D HELIX MODEL v4.2
        </span>
      </div>

      {/* Interactive Controls Overlay */}
      {showControls && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#0B1B3D]/90 backdrop-blur-md border border-[#00A896]/30 text-xs shadow-lg text-white">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-[#00A896] hover:bg-[#008f80] text-white border border-[#00A896]/40 transition-all flex items-center space-x-1.5 cursor-pointer font-bold"
              title={isPlaying ? "Pause Rotation" : "Play Rotation"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Rotate'}</span>
            </button>

            <div className="flex items-center space-x-1 bg-[#071229] p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setStrandColorMode('cyan-green')}
                className={`px-2.5 py-1 rounded-lg transition-all text-xs font-bold ${
                  strandColorMode === 'cyan-green'
                    ? 'bg-[#00A896] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Teal-Green
              </button>
              <button
                onClick={() => setStrandColorMode('bio-green')}
                className={`px-2.5 py-1 rounded-lg transition-all text-xs font-bold ${
                  strandColorMode === 'bio-green'
                    ? 'bg-[#39FF14] text-[#0B1B3D]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Bio-Green
              </button>
              <button
                onClick={() => setStrandColorMode('navy-teal')}
                className={`px-2.5 py-1 rounded-lg transition-all text-xs font-bold ${
                  strandColorMode === 'navy-teal'
                    ? 'bg-white text-[#0B1B3D]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Navy
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Zap size={14} className="text-[#39FF14]" />
            <span className="text-slate-200 font-mono font-bold">Speed: {helixSpeed.toFixed(1)}x</span>
            <input
              type="range"
              min="0.2"
              max="3.0"
              step="0.1"
              value={helixSpeed}
              onChange={(e) => setHelixSpeed(parseFloat(e.target.value))}
              className="w-20 accent-[#00A896] cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
