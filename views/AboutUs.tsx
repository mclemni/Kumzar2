
import React from 'react';
import { Globe, ArrowRight, ShieldCheck, Target, Users, Gem } from 'lucide-react';
import { ABOUT_STATS } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* ABOUT HERO - Unified Height 60vh */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/101/1920/1080?grayscale" 
            alt="Kumzar Headquarters" 
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
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-16">
          <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold tracking-[0.2em] mb-4">
            <Globe size={12} className="text-brand-accent" />
            <span>&rsaquo; About Kumzar</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-8">About Kumzar</h1>
          <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl">
            A multidisciplinary company providing integrated solutions across Civil Construction, Marine Services, General Trading, and Oil & Gas Support.
          </p>
        </div>
      </section>

      {/* INTRODUCTORY TEXT */}
      <section className="py-24 max-w-[1200px] mx-auto px-16">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-4">
             <div className="p-8 bg-brand-accent/10 border-l-4 border-brand-accent">
                <p className="text-2xl font-light text-brand-dark leading-tight">
                   "We are located in Basra, Iraq—the heart of the regional energy sector."
                </p>
             </div>
          </div>
          <div className="col-span-8 space-y-8">
            <p className="text-lg font-light text-slate-600 leading-relaxed">
              Established in 2025, Kumzar was formed to meet the growing operational demands of Iraq’s energy and industrial sectors by aligning local execution capabilities with international standards.
            </p>
            <p className="text-lg font-light text-slate-600 leading-relaxed">
              Our strength lies in the ability to manage and execute complex projects that require technical precision, operational discipline, and strong logistical coordination. We support operating companies (IOCs) and EPC contractors in delivering projects safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16">
          <div className="grid grid-cols-2 gap-24">
             <div className="group">
                <div className="flex items-center gap-4 mb-8">
                   <Target size={32} className="text-brand-accent" />
                   <h2 className="text-4xl font-light text-brand-dark">Our Vision</h2>
                </div>
                <p className="text-slate-500 font-light leading-relaxed text-lg">
                   To be recognized as a trusted regional partner in the oil, gas, marine, and industrial sectors, known for operational excellence, reliability, and consistent value delivery. We aim for sustainable growth by expanding service capabilities and strengthening global partnerships.
                </p>
             </div>
             <div className="group">
                <div className="flex items-center gap-4 mb-8">
                   <ShieldCheck size={32} className="text-brand-accent" />
                   <h2 className="text-4xl font-light text-brand-dark">Our Mission</h2>
                </div>
                <p className="text-slate-500 font-light leading-relaxed text-lg">
                   To deliver high-performance construction, marine, and supply chain solutions that support the successful execution of projects. We are committed to building Iraq’s future infrastructure through efficient execution and uncompromising safety.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 max-w-[1200px] mx-auto px-16">
        <div className="text-center mb-16">
           <p className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase mb-4">GUIDING PRINCIPLES</p>
           <h2 className="text-5xl font-light text-brand-dark">Core Values</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
           {[
             { title: "Integrity", text: "Transparency and ethical business conduct in every engagement.", icon: ShieldCheck },
             { title: "Professionalism", text: "Quality and performance excellence in all our operations.", icon: Gem },
             { title: "Safety", text: "Accountability and disciplined execution to protect life and assets.", icon: ShieldCheck },
             { title: "Reliability", text: "Long-term client trust built through consistent partnership.", icon: Users },
             { title: "Growth", text: "Continuous improvement and capability development.", icon: Target }
           ].map((val, i) => (
             <div key={i} className="p-8 border border-slate-100 hover:border-brand-accent/50 transition-all group">
                <val.icon size={24} className="text-brand-accent mb-6" />
                <h4 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">{val.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{val.text}</p>
             </div>
           ))}
        </div>
      </section>

      {/* COMPETITIVE STRENGTHS */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-16 relative z-10">
           <div className="grid grid-cols-12 gap-16">
              <div className="col-span-5">
                 <h2 className="text-5xl font-light mb-8">Competitive Strengths</h2>
                 <p className="text-white/60 font-light text-lg mb-12">
                   Why leading industrial and energy sector companies choose Kumzar as their primary execution partner.
                 </p>
                 <button className="px-10 py-4 border border-brand-accent text-brand-accent font-bold text-xs tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                    View Portfolio
                 </button>
              </div>
              <div className="col-span-7 grid grid-cols-2 gap-8">
                 {[
                   { num: "01", title: "Global Sourcing", text: "Strong supplier network and cross-border capability." },
                   { num: "02", title: "Fast Mobilization", text: "Rapid deployment and fast-track project execution." },
                   { num: "03", title: "Diversified Exp", text: "Proven track record across energy projects." },
                   { num: "04", title: "Skilled Teams", text: "Highly qualified technical and administrative staff." }
                 ].map((s, idx) => (
                   <div key={idx} className="p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="text-4xl font-light text-brand-accent/50 block mb-4">{s.num}</span>
                      <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{s.text}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* STATS AT A GLANCE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-16">
          <div className="grid grid-cols-3 gap-y-16 gap-x-12">
            {ABOUT_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                 <div className="text-5xl font-light text-brand-dark mb-2">
                   <span className="text-brand-dark">{stat.value}</span>
                 </div>
                 <div className="text-xl font-light mb-4 text-brand-accent">{stat.label}</div>
                 <p className="text-xs text-slate-500 leading-relaxed">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
