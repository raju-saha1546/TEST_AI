import React from 'react';
import { Atom, BookOpen, Cpu, Terminal, Compass, GraduationCap, Github, Mail, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const skills = [
    {
      category: 'Computation & Scientific Programming',
      items: ['Python (NumPy, SciPy, Matplotlib)', 'C / C++', 'Julia', 'LaTeX Typesetting', 'Git & Bash Scripting', 'Numerical PDEs (FD, Spectral)']
    },
    {
      category: 'Laboratory & Instrumentation',
      items: ['Digital Storage Oscilloscopes', 'Lock-in Amplifiers', '4-Wire Kelvin Resistance', 'Optical Alignment & Interferometry', 'Cryogenics & Vacuum Systems', 'Error Propagation & Least-Squares']
    },
    {
      category: 'Electronics & Hardware',
      items: ['Microcontrollers (Arduino, STM32)', 'TTL & CMOS Digital Logic', 'Analog Filters & Op-Amps', 'SPICE Circuit Simulation', 'PCB Layout (KiCad)', 'Breadboard Prototyping']
    },
    {
      category: 'Theoretical & Mathematical Methods',
      items: ['Linear Algebra & Vector Calculus', 'Complex Analysis & Residue Calculus', 'Partial Differential Equations', 'Fourier & Laplace Transforms', 'Lagrangian & Hamiltonian Mechanics', 'Canonical Ensemble Statistics']
    }
  ];

  const timeline = [
    {
      period: '2025 – Present',
      role: 'Undergraduate Physics Researcher & Lab Assistant',
      institution: 'Department of Physics & Astronomy',
      description: 'Investigating numerical algorithms for quantum tunneling through potential barriers, developing custom Python data acquisition pipelines for lab sensors, and tutoring peers in introductory mechanics.'
    },
    {
      period: '2024 – 2025',
      role: 'Core Member, University Physical Sciences Society',
      institution: 'Faculty of Science',
      description: 'Coordinated weekly physics seminars, built interactive demonstrations for university science outreach, and organized hackathons centered around scientific computing.'
    },
    {
      period: '2023 – 2024',
      role: 'Physics & Mathematics Major Matriculation',
      institution: 'University Physics Program',
      description: 'Commenced comprehensive undergraduate studies with foundational honors coursework in Newtonian Mechanics, Special Relativity, Electromagnetism, Multivariable Calculus, and Linear Algebra.'
    }
  ];

  const currentReading = [
    {
      title: 'Introduction to Quantum Mechanics',
      author: 'David J. Griffiths & Darrell F. Schroeter',
      status: 'Reviewing Angular Momentum & Spin'
    },
    {
      title: 'Classical Electrodynamics',
      author: 'John David Jackson',
      status: 'Boundary-Value Problems in Electrostatics'
    },
    {
      title: 'The Art of Electronics (3rd Edition)',
      author: 'Paul Horowitz & Winfield Hill',
      status: 'Precision Low-Noise Transimpedance Op-Amps'
    }
  ];

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Bio Hero Section */}
      <div className="rounded-3xl border border-slate-700/50 bg-slate-900/60 p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              <GraduationCap className="w-4 h-4" />
              Academic Profile & Journey
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold font-display text-slate-100 leading-tight">
              Raju
            </h1>

            <p className="text-base text-cyan-300/90 font-medium">
              University Physics Student • Scientific Programmer • Electronics Enthusiast
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              I am an undergraduate physics student with a deep fascination for the fundamental laws governing matter, fields, and light, combined with the practical craft of numerical computing and laboratory instrumentation.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              My work bridges theoretical physics, experimental data analysis, and software engineering. I build computational models to simulate complex physical systems, design hardware circuits to measure physical phenomena in the laboratory, and document mathematical derivations with academic rigor.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
              <a
                href="mailto:raju.physics.lab@example.com"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Contact / Academic Inquiries
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center">
            {/* Scientific Avatar badge */}
            <div className="w-48 h-48 rounded-2xl border-2 border-cyan-500/40 bg-slate-950/80 p-4 flex flex-col items-center justify-center text-center shadow-xl relative group">
              <div className="w-20 h-20 rounded-full bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center mb-3">
                <Atom className="w-10 h-10 text-cyan-400 animate-spin-slow" />
              </div>
              <span className="font-display font-bold text-slate-200 text-sm">Raju</span>
              <span className="text-[11px] font-mono text-slate-400 mt-0.5">B.Sc. Physics Candidate</span>
              <span className="text-[10px] font-mono text-cyan-400 mt-1">Focus: Quantum & Computation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Intellectual Interests */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md space-y-4">
        <h2 className="text-xl font-bold font-display text-slate-100 flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          Core Intellectual & Research Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h3 className="font-semibold text-slate-200 text-sm">Computational Quantum Physics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Finite-difference time-domain wavepacket evolution, split-operator algorithms, quantum tunneling across semiconductor nanostructures, and numerical diagonalization.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h3 className="font-semibold text-slate-200 text-sm">Laboratory Instrumentation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Low-noise analog signal amplification, phase-sensitive lock-in detection, precision thermometry, automated GPIB/serial data collection, and rigorous uncertainty budgeting.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h3 className="font-semibold text-slate-200 text-sm">Mathematical Physics & Nonlinear Dynamics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Classical mechanics in Hamiltonian and Lagrangian formulations, phase space portraits, deterministic chaos in coupled systems, and Fourier analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md space-y-6">
        <h2 className="text-xl font-bold font-display text-slate-100 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          Technical Competencies & Toolchain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Reading & Learning Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <h2 className="text-base font-bold font-display text-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            Currently Studying & Reading
          </h2>
          <div className="space-y-3">
            {currentReading.map((book, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="font-semibold text-xs text-slate-200">{book.title}</div>
                <div className="text-[11px] text-slate-500 font-serif italic">{book.author}</div>
                <div className="text-[11px] font-mono text-cyan-400 pt-1 border-t border-slate-900">
                  Focus: {book.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <h2 className="text-base font-bold font-display text-slate-100 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            Physics Philosophy & Mission
          </h2>
          <div className="text-xs text-slate-300 leading-relaxed space-y-3">
            <p>
              "Physics is not merely a collection of formulas to memorize, but a systematic mindset for unpacking the fundamental machinery of reality from first principles."
            </p>
            <p className="text-slate-400">
              I believe deeply that true scientific understanding requires active synthesis: calculating analytically on paper, building numerical simulations to test intuition, and constructing physical hardware circuits in the laboratory to confront nature directly.
            </p>
            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 font-mono text-[11px] text-cyan-300">
              💡 Open for undergraduate research collaborations, physics programming inquiries, and scientific discussions.
            </div>
          </div>
        </div>
      </div>

      {/* Academic Timeline */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md space-y-6">
        <h2 className="text-xl font-bold font-display text-slate-100 flex items-center gap-2">
          <Award className="w-5 h-5 text-cyan-400" />
          Academic Trajectory & Milestones
        </h2>

        <div className="space-y-6 border-l-2 border-slate-800 ml-3 pl-6 relative">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative space-y-1.5">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950"></div>

              <div className="text-xs font-mono text-cyan-400 font-semibold">{item.period}</div>
              <h3 className="text-sm font-bold text-slate-100">{item.role}</h3>
              <div className="text-xs text-slate-400 font-medium">{item.institution}</div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
