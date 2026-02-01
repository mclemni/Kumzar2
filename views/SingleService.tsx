
import React from 'react';
import { Globe, ArrowRight, ChevronLeft } from 'lucide-react';
import { Service } from '../types';

interface SingleServiceProps {
  service: Service;
  onBack: () => void;
}

const SingleService: React.FC<SingleServiceProps> = ({ service, onBack }) => {
  return (
    <>
      {/* SERVICE HERO */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent" />
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
            <span>Back to What We Do</span>
          </button>
          <div className="flex items-center gap-2 text-brand-accent text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">
            <Globe size={12} />
            <span>&rsaquo; Our Capability</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-4">{service.title}</h1>
        </div>
      </section>

      {/* SERVICE CONTENT */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 bg-white">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-4">
             <h2 className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase mb-8">CAPABILITY OVERVIEW</h2>
             <p className="text-2xl font-light text-brand-dark leading-snug">
                {service.summary}
             </p>
          </div>
          <div className="col-span-8">
             <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg">
                {service.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES / HIGHLIGHTS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16">
          <h2 className="text-3xl font-light text-brand-dark mb-16">Key highlights</h2>
          <div className="grid grid-cols-3 gap-12">
            {service.features.map((feature, idx) => (
              <div key={idx} className="group">
                 <div className="h-1 w-12 bg-brand-accent mb-6"></div>
                 <h4 className="text-xl font-light text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                   {feature.title}
                 </h4>
                 <p className="text-sm text-slate-500 font-light leading-relaxed">
                   {feature.text}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="h-[400px] overflow-hidden">
         <img 
            src={`https://picsum.photos/id/115/1920/400?grayscale`} 
            className="w-full h-full object-cover grayscale brightness-75" 
            alt="Industrial backdrop" 
          />
      </section>

      {/* RELATED ACTION */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 flex justify-between items-center bg-white">
        <div>
          <h3 className="text-4xl font-light text-brand-dark mb-4">Empowering global industry</h3>
          <p className="text-slate-500 font-light">See how our operations support communities around the world.</p>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-brand-accent text-[10px] font-bold tracking-widest uppercase group hover:gap-6 transition-all"
        >
          Explore All Capabilities <div className="border border-brand-accent rounded-full p-2"><ArrowRight size={14} /></div>
        </button>
      </section>
    </>
  );
};

export default SingleService;
