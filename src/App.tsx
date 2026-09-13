import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/common/CommandPalette';
import HomePage from './components/home/HomePage';
import LabDashboard from './components/tools/LabDashboard';
import SimulationsPlatform from './components/simulations/SimulationsPlatform';
import NotesReader from './components/notes/NotesReader';
import LabNotebookViewer from './components/lab/LabNotebookViewer';
import ProjectsShowcase from './components/projects/ProjectsShowcase';
import AboutPage from './components/about/AboutPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeToolSubId, setActiveToolSubId] = useState<string | undefined>(undefined);
  const [activeSimSubId, setActiveSimSubId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleNavigate = (tab: string, subId?: string) => {
    setActiveTab(tab);
    if (tab === 'lab' && subId) {
      setActiveToolSubId(subId);
    } else if (tab === 'simulations' && subId) {
      setActiveSimSubId(subId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Global Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {activeTab === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activeTab === 'lab' && <LabDashboard key={activeToolSubId} initialToolId={activeToolSubId || 'resistor'} />}
        {activeTab === 'simulations' && <SimulationsPlatform key={activeSimSubId} initialSimId={activeSimSubId || 'projectile'} />}
        {activeTab === 'notes' && <NotesReader onOpenSimulation={id => handleNavigate('simulations', id)} />}
        {activeTab === 'experiments' && <LabNotebookViewer />}
        {activeTab === 'projects' && <ProjectsShowcase />}
        {activeTab === 'about' && <AboutPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Command Palette Search Modal */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
