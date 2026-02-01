
import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewServices?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onViewServices }) => {
  return (
    <>
      {/* PROJECTS HERO */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/110/1920/1080?grayscale" 
            alt="Global Projects" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
        </div>
        
        {/* REQUESTED PATTERN LAYER - Medium Size, Right Aligned */}
        <div 
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{ 
            backgroundImage: 'url("https://pastel.com.iq/wp-content/uploads/2026/02/pattren@2x.png")',
            backgroundSize: '45% auto',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-16">
          <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">
            <Globe size={12} className="text-brand-accent" />
            <span>&rsaquo; Global Projects</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-8">Engineering scale.<br/>Building value.</h1>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl">
            Our mega projects define the frontier of energy innovation, from vast offshore islands to cutting-edge chemical clusters.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 bg-white">
        <div className="grid grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer border border-slate-100 p-2 hover:border-brand-accent/30 transition-all duration-500"
              onClick={() => onSelectProject(project)}
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100 mb-8">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0" 
                  alt={project.title} 
                />
              </div>
              <div className="px-6 pb-8">
                <span className="text-[10px] font-bold text-brand-accent tracking-[0.2em] uppercase mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-light text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-8 line-clamp-2">
                  {project.summary}
                </p>
                <div className="flex items-center gap-4 text-brand-accent text-[10px] font-bold tracking-widest uppercase group-hover:gap-6 transition-all">
                  Learn more <div className="border border-brand-accent rounded-full p-2"><ArrowRight size={12} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REPLACED CALL TO ACTION: Now aligned with Kumzar Industrial Profile */}
      <section className="h-[450px] bg-brand-dark flex items-center justify-center overflow-hidden relative">
        <img src="https://picsum.photos/id/122/1920/600?grayscale" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" alt="Industrial infrastructure" />
        <div className="relative z-10 text-center max-w-3xl px-8">
           <p className="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6">INTEGRATED INDUSTRIAL SOLUTIONS</p>
           <h2 className="text-5xl font-light text-white mb-10 leading-tight">Engineering the backbone of Iraq's industrial growth</h2>
           <button 
             onClick={onViewServices}
             className="px-12 py-4 border border-brand-accent text-brand-accent font-bold text-xs tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all"
           >
              EXPLORE OUR CAPABILITIES
           </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
