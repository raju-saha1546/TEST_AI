import React, { useState, useMemo } from 'react';
import { FolderGit2, Search, ExternalLink, Github, ArrowRight, X, Cpu, CheckCircle2, Award, Terminal } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { Project } from '../../types';
import MathView from '../common/MathView';

export const ProjectsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Computational Physics', 'Electronics', 'Laboratory Physics', 'Scientific Software'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2">
              <FolderGit2 className="w-4 h-4" />
              Scientific Portfolio & Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-100">
              Physics, Computing & Electronics Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mt-1">
              End-to-end scientific software, numerical differential equation solvers, hardware laboratory instrumentation, and physical simulations developed during undergraduate physics studies.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 font-medium"
              placeholder="Search projects by name, tag..."
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-5 mt-5 border-t border-slate-800 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-cyan-500/5"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-cyan-400 font-semibold">{project.category}</span>
                <span className="text-slate-500">{project.year}</span>
              </div>

              <h3 className="text-base font-bold font-display text-slate-100 group-hover:text-cyan-300 transition line-clamp-2 mb-2">
                {project.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                {project.shortDescription}
              </p>

              {/* Mathematical Equation Teaser */}
              {project.keyFormulas && project.keyFormulas[0] && (
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 mb-4 flex justify-center text-xs text-cyan-300/80 truncate">
                  <MathView math={project.keyFormulas[0]} />
                </div>
              )}
            </div>

            <div>
              {/* Metrics Pills */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-slate-800/80">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="text-[11px] font-mono">
                      <span className="text-slate-500 block truncate">{m.label}</span>
                      <span className="text-slate-200 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                <span>View Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 md:p-8 space-y-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold mb-2">
                <span>{activeProject.category}</span>
                <span>•</span>
                <span>{activeProject.year}</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-slate-100 pr-10">
                {activeProject.title}
              </h2>
            </div>

            {/* Metrics Ribbon */}
            {activeProject.metrics && (
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono">
                {activeProject.metrics.map((m, i) => (
                  <div key={i}>
                    <span className="text-[10px] text-slate-500 block truncate">{m.label}</span>
                    <span className="text-sm font-bold text-cyan-400">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Overview & Motivation */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Overview & Scientific Motivation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProject.overview}</p>
              <p className="text-xs text-slate-400 leading-relaxed italic">{activeProject.motivation}</p>
            </div>

            {/* Governing Theory & Equations */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Physics Theory & Mathematical Formulation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProject.physicsTheory}</p>

              {activeProject.mathematicalModel && (
                <div className="space-y-2 rounded-xl bg-slate-950 p-3.5 border border-slate-800">
                  {activeProject.mathematicalModel.map((eq, i) => (
                    <div key={i} className="flex justify-center overflow-x-auto py-1">
                      <MathView math={eq} display className="text-xs text-cyan-300" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Implementation */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Implementation Architecture
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProject.implementation}</p>
            </div>

            {/* Results & Verification */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Experimental / Numerical Results
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">{activeProject.results}</p>
            </div>

            {/* Lessons Learned */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Engineering Lessons & Physics Insights
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProject.lessonsLearned}</p>
            </div>

            {/* Tags & Action Links */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsShowcase;
