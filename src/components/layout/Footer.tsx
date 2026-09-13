import React from 'react';
import { Atom, Github, Mail, Sparkles, Terminal, BookOpen, Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 mt-20 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Atom className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-slate-100 text-sm">
                Raju • Digital Physics Laboratory
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              An open-source digital physics laboratory, computational notebook, and mathematical simulation platform built by Raju, undergraduate physics student.
            </p>

            <div className="font-serif italic text-slate-400 text-[11px] pt-1 border-l-2 border-slate-700 pl-3">
              "Nullius in verba" — Take nobody's word for it. Calculate, simulate, and measure from first principles.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Laboratory Modules
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <button onClick={() => onNavigate('lab')} className="hover:text-cyan-400 transition">
                  Interactive Calculators & Suite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('simulations')} className="hover:text-cyan-400 transition">
                  Real-Time Physics Simulations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('notes')} className="hover:text-cyan-400 transition">
                  Theoretical Physics Notebook
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experiments')} className="hover:text-cyan-400 transition">
                  Experimental Laboratory Logs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-cyan-400 transition">
                  Scientific Software Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Reference & Academic Standard */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Academic Standards & Stack
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Equations rendered via KaTeX. Numerical integration via 4th-order Runge-Kutta and Euler-Cromer algorithms. Constants referenced from NIST / CODATA 2022 recommended values.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px] text-emerald-400">All numerical engines operational</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Raju. Crafted for scientific education and computational physics.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-200 transition">
              GitHub
            </a>
            <span>•</span>
            <a href="mailto:raju.physics.lab@example.com" className="hover:text-slate-200 transition">
              raju.physics.lab@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
