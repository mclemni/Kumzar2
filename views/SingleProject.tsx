
import React from 'react';
import { Globe, ArrowRight, ChevronLeft } from 'lucide-react';
import { Project } from '../types';

interface SingleProjectProps {
  project: Project;
  onBack: () => void;
}

const SingleProject: React.FC<SingleProjectProps> = ({ project, onBack }) => {
  return (
    <>
      {/* PROJECT HERO - Unified Height 60vh */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
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
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-16 pt-32">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-[0.2em] mb-8 uppercase hover:text-brand-accent transition-colors"
          >
            <ChevronLeft size={14} />
            <span>Back to projects</span>
          </button>
          <div className="flex items-center gap-2 text-brand-accent text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">
            <Globe size={12} />
            <span>&rsaquo; {project.category}</span>
          </div>
          <h1 className="text-7xl font-light text-white mb-4">{project.title}</h1>
        </div>
      </section>

      {/* PROJECT STATS BAR */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16 grid grid-cols-3 divide-x divide-slate-200">
           {project.stats.map((stat, idx) => (
             <div key={idx} className="py-12 px-8 first:pl-0 last:pr-0">
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4">{stat.label}</div>
                <div className="text-4xl font-light text-brand-dark">{stat.value}</div>
             </div>
           ))}
        </div>
      </section>

      {/* PROJECT BRIEF & CONTENT */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 bg-white">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-4">
             <h2 className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase mb-8">PROJECT BRIEF</h2>
             <p className="text-xl font-light text-brand-dark leading-relaxed italic">
                "{project.summary}"
             </p>
          </div>
          <div className="col-span-8">
             <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
             </div>
             
             {/* ADDITIONAL IMAGE CALLOUT */}
             <div className="mt-16 aspect-video overflow-hidden border border-slate-100">
                <img 
                  src={`https://picsum.photos/id/${parseInt(project.id === 'manifa' ? '260' : '261')}/1200/600?grayscale`} 
                  className="w-full h-full object-cover" 
                  alt="Detail" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* RELATED CONTENT / NAVIGATION */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16 flex justify-between items-center">
           <div>
              <h3 className="text-4xl font-light text-brand-dark mb-4">Continuing our journey</h3>
              <p className="text-slate-500 font-light">Explore more about how we are engineering a better future.</p>
           </div>
           <button 
             onClick={onBack}
             className="flex items-center gap-4 text-brand-accent text-[10px] font-bold tracking-widest uppercase group hover:gap-6 transition-all"
           >
              Return to Gallery <div className="border border-brand-accent rounded-full p-2"><ArrowRight size={14} /></div>
           </button>
        </div>
      </section>
    </>
  );
};

export default SingleProject;
