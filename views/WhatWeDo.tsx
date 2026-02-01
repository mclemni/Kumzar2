
import React from 'react';
import { Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHAT_WE_DO_FEATURES, WHAT_WE_DO_SECTION_LINKS, SERVICES } from '../constants';
import { Service } from '../types';

interface WhatWeDoProps {
  onSelectService: (service: Service) => void;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectService }) => {
  const handleSectionClick = (sectionId: string) => {
    const service = SERVICES.find(s => s.id === sectionId);
    if (service) {
      onSelectService(service);
    }
  };

  return (
    <>
      {/* WHAT WE DO HERO - Unified Height 60vh */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/200/1920/1080?grayscale" 
            alt="Operational Excellence" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/20 to-transparent" />
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
            <span>&rsaquo; What we do</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-8">Capabilities & Services</h1>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl mb-12">
            Engineering scale through technical precision and operational discipline across Iraq's industrial sectors.
          </p>
          <div className="flex gap-8">
            <a href="#" className="flex items-center gap-3 text-white text-[10px] font-bold tracking-widest uppercase hover:text-brand-accent transition-colors">
              Our Capability Statement <div className="border border-white/30 rounded-full p-2 group-hover:border-brand-accent"><ArrowRight size={14} /></div>
            </a>
            <a href="#" className="flex items-center gap-3 text-white text-[10px] font-bold tracking-widest uppercase hover:text-brand-accent transition-colors">
              HSEQ Policy <div className="border border-white/30 rounded-full p-2"><ArrowRight size={14} /></div>
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTORY TEXT (3-COLUMN) */}
      <section className="py-24 max-w-[1200px] mx-auto px-16">
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-1">
            <p className="text-sm font-light text-slate-600 leading-relaxed mb-6">
              For several years, Kumzar has been at the forefront of providing critical infrastructure and support services to Iraq’s burgeoning energy and industrial landscapes. Our multidisciplinary approach allows us to deliver complex, high-stakes projects with the reliability and precision required by international operating companies.
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-light text-slate-600 leading-relaxed mb-6">
              We understand that the success of industrial projects depends on the seamless integration of civil works, marine logistics, and procurement. Our operational expertise is built on a foundation of engineering know-how and a deep understanding of the local market challenges and opportunities in Basra and beyond.
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-light text-slate-600 leading-relaxed">
              From supporting the Al-Faw Immersed Tunnel to providing critical oilfield supplies, we utilize a global sourcing network and a highly skilled local workforce. We seek to bring international standards of quality and safety to every engagement, ensuring sustainable value for our clients and the community.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="pb-24 max-w-[1200px] mx-auto px-16">
        <div className="grid grid-cols-5 gap-6">
          {WHAT_WE_DO_FEATURES.map((feature, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-slate-100">
                <img src={feature.img} className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="h-[2px] w-12 bg-brand-accent mb-4"></div>
              <p className="text-xs text-slate-600 leading-snug mb-4 group-hover:text-brand-dark transition-colors">{feature.title}</p>
              <a href="#" className="flex items-center gap-2 text-brand-accent text-[9px] font-bold tracking-widest uppercase group-hover:underline">
                 {feature.label} <ArrowRight size={10} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STRATEGIC OPERATIONS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-light text-brand-dark">Strategic Operations</h2>
            <a href="#" className="flex items-center gap-2 text-brand-accent font-bold text-[10px] tracking-widest uppercase hover:underline">
              View All Divisions <div className="border border-brand-accent rounded-full p-2"><ArrowRight size={12} /></div>
            </a>
          </div>
          
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-5 flex flex-col gap-8">
               <div className="group cursor-pointer">
                  <div className="aspect-video overflow-hidden mb-6">
                    <img src="https://picsum.photos/id/111/600/400?grayscale" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-2xl font-light text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">Port Logistics & Support</h3>
                  <a href="#" className="flex items-center gap-2 text-brand-accent text-[9px] font-bold tracking-widest uppercase">
                    Vessel Chartering & Stevedoring <ArrowRight size={10} />
                  </a>
               </div>
               <div className="group cursor-pointer">
                  <div className="aspect-video overflow-hidden mb-6">
                    <img src="https://picsum.photos/id/112/600/400?grayscale" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-2xl font-light text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">Industrial Procurement</h3>
                  <a href="#" className="flex items-center gap-2 text-brand-accent text-[9px] font-bold tracking-widest uppercase">
                    Global Supply Chain Solutions <ArrowRight size={10} />
                  </a>
               </div>
            </div>
            
            <div className="col-span-7">
               <div className="h-full group cursor-pointer flex flex-col">
                  <div className="flex-grow overflow-hidden mb-6">
                    <img src="https://picsum.photos/id/113/800/1000?grayscale" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[2s]" />
                  </div>
                  <h3 className="text-2xl font-light text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">Civil Infrastructure</h3>
                  <a href="#" className="flex items-center gap-2 text-brand-accent text-[9px] font-bold tracking-widest uppercase">
                    Building the Al-Faw Tunnel <ArrowRight size={10} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN THIS SECTION GRID */}
      <section className="py-24 max-w-[1200px] mx-auto px-16">
        <h2 className="text-4xl font-light text-brand-dark mb-16">Core Business Units</h2>
        <div className="grid grid-cols-3 gap-y-16 gap-x-8">
          {WHAT_WE_DO_SECTION_LINKS.map((link, i) => (
            <div 
              key={i} 
              className="group cursor-pointer"
              onClick={() => handleSectionClick(link.id)}
            >
               <div className="aspect-video overflow-hidden mb-6 bg-slate-100">
                  <img src={link.img} className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h4 className="text-2xl font-light mb-4 group-hover:text-brand-accent transition-colors">{link.title}</h4>
               <p className="text-sm text-slate-500 font-light leading-relaxed mb-6 line-clamp-2">{link.text}</p>
               <a href="#" className="flex items-center gap-2 text-brand-accent text-[10px] font-bold tracking-widest uppercase group-hover:underline">
                  Explore unit <ArrowRight size={12} />
               </a>
            </div>
          ))}
        </div>
      </section>

      {/* REPLACED CALL TO ACTION: HSEQ EXCELLENCE */}
      <section className="h-[350px] bg-brand-dark flex items-center justify-center overflow-hidden relative">
        <img src="https://picsum.photos/id/115/1920/600?grayscale" className="absolute inset-0 w-full h-full object-cover brightness-[0.2]" />
        <div className="relative z-10 text-center max-w-2xl px-8">
           <ShieldCheck size={48} className="text-brand-accent mx-auto mb-6 opacity-80" />
           <h2 className="text-4xl font-light text-white mb-6">HSEQ Excellence</h2>
           <p className="text-white/60 font-light text-sm mb-8">
             Our operations are conducted in strict accordance with ISO 9001, 14001, and 45001 standards to ensure zero-harm and peak performance.
           </p>
           <a href="#" className="flex items-center gap-4 text-brand-accent text-[10px] font-bold tracking-widest uppercase hover:gap-6 transition-all justify-center">
              Our Safety Standards <ArrowRight size={14} />
           </a>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
