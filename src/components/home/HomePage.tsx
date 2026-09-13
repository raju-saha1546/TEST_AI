import React, { useRef, useEffect } from 'react';
import {
  Atom,
  Wrench,
  Sparkles,
  BookOpen,
  ClipboardList,
  FolderGit2,
  ArrowRight,
  Cpu,
  Waves,
  Zap,
  Activity,
  Compass,
  CheckCircle2,
  Flame
} from 'lucide-react';
import MathView from '../common/MathView';

interface HomePageProps {
  onNavigate: (tab: string, subId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Dynamic interactive particle gravitational background for Hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; alpha: number }> = [];
    const numParticles = 45;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles with delicate scientific field lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render points
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Background interactive particle canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 z-0" />

        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Scientific Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Raju • Undergraduate Physics Student</span>
            <span className="text-cyan-600">|</span>
            <span className="text-cyan-400 font-semibold">B.Sc. Candidate</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display text-slate-100 tracking-tight leading-[1.1]">
            A Modern Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Physics Laboratory
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
            Documenting my journey through theoretical physics, applied mathematics, scientific programming, electronic instrumentation, and computational simulation.
          </p>

          {/* Quick Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('lab')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 group"
            >
              <Wrench className="w-4 h-4" />
              <span>Launch Physics Lab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('simulations')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Run Physics Simulations</span>
            </button>

            <button
              onClick={() => onNavigate('notes')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 font-medium text-xs sm:text-sm transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Derivations</span>
            </button>
          </div>

          {/* Key Fundamental Formulation Ribbon */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Action Principle:</span>
              <MathView math="\delta S = \delta \int L\, dt = 0" className="text-cyan-300" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Wavefunction:</span>
              <MathView math="i\hbar \partial_t \Psi = \hat{H}\Psi" className="text-cyan-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Laboratory Live Metric Stats Banner */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Interactive Lab Tools', value: '8', desc: 'Calculators, Plotters & Circuit Solvers', icon: Wrench, tab: 'lab' },
          { label: 'Real-Time Simulations', value: '5', desc: 'Runge-Kutta & Optical Wavefronts', icon: Sparkles, tab: 'simulations' },
          { label: 'Physics Manuscripts', value: '6', desc: 'Step-by-step LaTeX Derivations', icon: BookOpen, tab: 'notes' },
          { label: 'Laboratory Journals', value: '4', desc: 'Empirical Logs & Least-Squares Fits', icon: ClipboardList, tab: 'experiments' }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              onClick={() => onNavigate(stat.tab)}
              className="group p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/90 hover:border-cyan-500/40 transition-all cursor-pointer shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-cyan-400" />
                <span className="text-2xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition">
                  {stat.value}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">{stat.label}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{stat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Featured Bento Grid Highlights */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Featured Laboratory Highlights
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select interactive simulations and theoretical manuscripts ready to run in-browser
            </p>
          </div>
          <button
            onClick={() => onNavigate('simulations')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>All Simulations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Wave Superposition */}
          <div
            onClick={() => onNavigate('simulations', 'waves')}
            className="md:col-span-7 group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-cyan-500/50 p-6 md:p-8 flex flex-col justify-between cursor-pointer transition shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                <span className="flex items-center gap-1.5"><Waves className="w-4 h-4" /> Wave Optics Engine</span>
                <span className="text-slate-500">Simulation</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-100 group-hover:text-cyan-300 transition mb-2">
                Double-Slit Wave Superposition & Diffraction
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-lg mb-4">
                Explore Fraunhofer & Fresnel interference with dynamic visible-light wavelength spectrum rendering (380–750 nm), 2D wave crest superposition field, and analytical intensity envelopes.
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-center text-xs">
                <MathView math="I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2 \cos^2\alpha" display className="text-cyan-300" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-800 text-xs font-semibold text-cyan-400">
              <span>Interactive Laser Bench</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Resistor Color Code & Electronics */}
          <div
            onClick={() => onNavigate('lab', 'resistor')}
            className="md:col-span-5 group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-cyan-500/50 p-6 md:p-8 flex flex-col justify-between cursor-pointer transition shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4" /> Hardware Instrumentation</span>
                <span className="text-slate-500">Calculator</span>
              </div>
              <h3 className="text-lg font-bold font-display text-slate-100 group-hover:text-cyan-300 transition mb-2">
                Resistor Color Code & Standard E-Series Decoder
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Interactive 4 & 5-band color visualizer with realistic axial body graphics, nearest standard E12/E24/E96 values, and reverse value-to-color decoder.
              </p>
              <div className="flex gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">4-Band</span>
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">5-Band</span>
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">E24 Series</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-800 text-xs font-semibold text-cyan-400">
              <span>Decode Color Bands</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Chaotic Double Pendulum */}
          <div
            onClick={() => onNavigate('simulations', 'double-pendulum')}
            className="md:col-span-6 group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-cyan-500/50 p-6 flex flex-col justify-between cursor-pointer transition shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                <span className="flex items-center gap-1.5"><Activity className="w-4 h-4" /> Nonlinear Dynamics</span>
                <span className="text-slate-500">Chaos Engine</span>
              </div>
              <h3 className="text-lg font-bold font-display text-slate-100 group-hover:text-cyan-300 transition mb-2">
                Double Pendulum & Deterministic Chaos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Runge-Kutta 4th-order integration of coupled Euler-Lagrange nonlinear differential equations. Features dual-pendulum mode demonstrating exponential sensitivity to initial conditions (Lyapunov exponent).
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-semibold text-cyan-400">
              <span>Run Chaos Simulator</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Blackbody Radiation & Planck Manuscript */}
          <div
            onClick={() => onNavigate('notes', 'blackbody-radiation')}
            className="md:col-span-6 group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-cyan-500/50 p-6 flex flex-col justify-between cursor-pointer transition shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Quantum Mechanics</span>
                <span className="text-slate-500">Derivation</span>
              </div>
              <h3 className="text-lg font-bold font-display text-slate-100 group-hover:text-cyan-300 transition mb-2">
                Black-Body Radiation & Planck's Quantum Hypothesis
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                The classical ultraviolet catastrophe of Rayleigh-Jeans electrodynamics, the canonical partition function sum, and Max Planck's revolutionary harmonic oscillator quantization.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-semibold text-cyan-400">
              <span>Study Derivation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Physics Methodology Triad */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-12 backdrop-blur-md">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Scientific Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-100">
            The Three Pillars of Physics Mastery
          </h2>
          <p className="text-xs text-slate-400">
            How theory, computation, and experimentation reinforce one another in this digital laboratory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-slate-100">Rigorous Theory</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formulating physical laws from first principles, writing clean Lagrangian densities, and deriving analytical limits step-by-step with KaTeX mathematical typesetting.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-slate-100">Numerical Simulation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When non-linear equations defy closed-form analytical solutions, numerical ODE/PDE algorithms (RK4, Crank-Nicolson) reveal real-time phase portraits and chaotic attractors.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-slate-100">Empirical Measurement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Confronting theoretical hypotheses with physical breadboard circuits, temperature-dependent sensors, digital storage oscilloscopes, and least-squares regression fits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
