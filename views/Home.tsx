
import React from 'react';
import { Hero } from '../components/Hero';
import { ArrowRight, ShieldCheck, Building2, Anchor, Truck } from 'lucide-react';
import { NEWS, PROJECTS } from '../constants';
import { Project } from '../types';

interface HomeProps {
  onSelectProject: (project: Project) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectProject }) => {
  const handlePartnerClick = (projectId: string) => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) {
      onSelectProject(project);
    }
  };

  return (
    <>
      <Hero />

      {/* INTRODUCTION */}
      <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-16 bg-white">
        <p className="text-xs font-bold tracking-widest text-brand-accent mb-6 md:mb-8">QUALITY THAT LASTS</p>
        <h2 className="text-2xl md:text-4xl font-light text-brand-dark leading-snug max-w-4xl">
          Headquartered in Basra, Kumzar is a multidisciplinary company providing integrated solutions across Civil Construction, Marine Services, General Trading, and Oil & Gas Support.
        </h2>
      </section>

      {/* CORE PORTFOLIO CARDS */}
      <section className="pb-16 md:pb-24 max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
        {[
          { title: "CIVIL ENGINEERING", icon: Building2, text: "Comprehensive construction for oil & gas sites", img: "https://picsum.photos/id/110/400/500?grayscale" },
          { title: "MARINE SERVICES", icon: Anchor, text: "Offshore support and port logistics", img: "https://picsum.photos/id/111/400/500?grayscale" },
          { title: "PROCUREMENT", icon: Truck, text: "Global sourcing of critical oilfield materials", img: "https://picsum.photos/id/112/400/500?grayscale" },
          { title: "PROJECT SUPPORT", icon: ShieldCheck, text: "Integrated facility and manpower solutions", img: "https://picsum.photos/id/113/400/500?grayscale" }
        ].map((card, i) => (
          <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-brand-dark cursor-pointer">
            <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent p-6 flex flex-col justify-end">
              <card.icon size={24} className="text-brand-accent mb-4" />
              <span className="text-[10px] font-bold tracking-widest text-brand-accent mb-2 uppercase">{card.title}</span>
              <p className="text-white text-lg font-light leading-tight group-hover:underline">{card.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* HSEQ SECTION */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
           <div className="md:col-span-12 lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-6 md:mb-8">Uncompromising commitment to safety</h2>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                Our operations are conducted in accordance with internationally recognized management system standards to ensure compliance and reliability.
              </p>
              <div className="flex flex-wrap gap-3">
                 {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2015'].map(cert => (
                   <span key={cert} className="px-4 py-2 bg-white border border-slate-200 text-[10px] font-bold tracking-widest text-brand-dark rounded-full">
                      {cert}
                   </span>
                 ))}
              </div>
           </div>
           <div className="md:col-span-12 lg:col-span-7 aspect-video overflow-hidden border-4 md:border-8 border-white shadow-xl">
              <img src="https://picsum.photos/id/115/800/450?grayscale" className="w-full h-full object-cover brightness-90" alt="Safety First" />
           </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIPS */}
      <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-16">
         <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-brand-dark">Our Strategic Partners</h2>
            <p className="text-slate-400 mt-4">Working together with global leaders to build Iraq's infrastructure.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div 
              className="p-8 md:p-12 border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-brand-accent transition-all"
              onClick={() => handlePartnerClick('al-faw-tunnel')}
            >
               <div>
                  <h3 className="text-2xl md:text-3xl font-light text-brand-dark mb-2">Sika®</h3>
                  <p className="text-xs md:text-sm text-slate-400 font-light">Authorized Agent & Representative</p>
               </div>
               <ArrowRight size={24} className="text-brand-accent group-hover:translate-x-2 transition-transform" />
            </div>
            <div 
              className="p-8 md:p-12 border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-brand-accent transition-all"
              onClick={() => handlePartnerClick('ardh-al-multaqa-collab')}
            >
               <div>
                  <h3 className="text-2xl md:text-3xl font-light text-brand-dark mb-2">Ardh Al-Multaqa</h3>
                  <p className="text-xs md:text-sm text-slate-400 font-light">Contracting & Logistics Partner</p>
               </div>
               <ArrowRight size={24} className="text-brand-accent group-hover:translate-x-2 transition-transform" />
            </div>
         </div>
      </section>

      {/* RECENT NEWS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-light text-brand-dark">Latest Updates</h2>
            <a href="#" className="flex items-center gap-2 text-brand-accent font-bold text-xs tracking-widest hover:underline transition-all">
              View all news <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {NEWS.map((item) => (
              <div key={item.id} className="bg-white border border-slate-100 p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 hover:shadow-lg transition-all cursor-pointer group">
                <div className="w-full sm:w-1/3 aspect-video sm:aspect-square overflow-hidden shrink-0">
                   <img src={item.image} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-accent block mb-2">{item.date}</span>
                  <h4 className="text-xl font-light text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="h-[400px] relative overflow-hidden flex items-center justify-center">
        <img src="https://picsum.photos/id/118/1920/600?grayscale" className="absolute inset-0 w-full h-full object-cover brightness-[0.25]" />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">ENGINEERING THE FUTURE</p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">Building Iraq's Industrial<br/><span className="italic">Excellence</span></h2>
          <button className="px-10 md:px-12 py-4 border border-brand-accent text-brand-accent font-bold text-xs tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
             Partner with us
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
