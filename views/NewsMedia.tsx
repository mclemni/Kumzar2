
import React from 'react';
import { Search, Globe, ArrowRight, Download, Filter } from 'lucide-react';
import { NEWS } from '../constants';

const NewsMedia: React.FC = () => {
  const featured = NEWS[0];
  const others = NEWS.slice(1);

  return (
    <>
      {/* MEDIA HERO - Unified Height 60vh */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/160/1920/1080?grayscale" 
            alt="Media Hub" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/30 to-transparent" />
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
            <span>&rsaquo; News & Media</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-8">Media Center</h1>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl">
            Latest updates, official statements, and corporate assets from the world's leading energy company.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-slate-50 border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-[1200px] mx-auto px-16 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            {['ALL', 'PRESS RELEASES', 'NEWS', 'SPEECHES', 'MULTIMEDIA'].map((cat, i) => (
              <button key={i} className={`text-[10px] font-bold tracking-widest uppercase hover:text-brand-accent transition-colors ${i === 0 ? 'text-brand-accent' : 'text-slate-500'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
             <Search size={16} className="text-slate-400" />
             <input type="text" placeholder="Search news..." className="bg-transparent border-none text-sm font-light focus:ring-0 placeholder-slate-400 w-48" />
             <Filter size={16} className="text-slate-400 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 bg-white">
        <div className="grid grid-cols-12 gap-12 group cursor-pointer">
           <div className="col-span-7 overflow-hidden bg-slate-100">
              <img src={featured.image} className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-1000" alt="Featured" />
           </div>
           <div className="col-span-5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase mb-4">{featured.category}</span>
              <span className="text-xs text-slate-400 font-bold mb-6">{featured.date}</span>
              <h2 className="text-4xl font-light text-brand-dark mb-8 leading-tight group-hover:text-brand-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-500 font-light text-lg mb-12">
                {featured.summary}
              </p>
              <a href="#" className="flex items-center gap-4 text-brand-accent text-[10px] font-bold tracking-widest uppercase group-hover:gap-6 transition-all">
                Read full story <div className="border border-brand-accent rounded-full p-2"><ArrowRight size={14} /></div>
              </a>
           </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16">
          <h2 className="text-2xl font-light text-brand-dark mb-12">Recent Headlines</h2>
          <div className="grid grid-cols-3 gap-8">
            {others.map((item) => (
              <div key={item.id} className="group cursor-pointer bg-white border border-slate-100 hover:shadow-xl transition-all p-2 flex flex-col h-full">
                <div className="aspect-video overflow-hidden bg-slate-100 mb-6">
                   <img src={item.image} className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <div className="px-6 pb-8 flex-grow flex flex-col">
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-brand-accent tracking-widest">{item.category}</span>
                      <span className="text-[10px] text-slate-400 font-bold">{item.date}</span>
                   </div>
                   <h4 className="text-xl font-light text-brand-dark mb-4 leading-snug group-hover:text-brand-accent transition-colors flex-grow">
                     {item.title}
                   </h4>
                   <p className="text-sm text-slate-500 font-light line-clamp-2 mb-8">{item.summary}</p>
                   <ArrowRight size={16} className="text-brand-accent ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA RESOURCES */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 bg-white">
        <h2 className="text-4xl font-light text-brand-dark mb-16">Media Resources</h2>
        <div className="grid grid-cols-3 gap-12">
           <div className="p-8 border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-8 text-brand-accent">
                 <Download size={24} />
              </div>
              <h3 className="text-2xl font-light text-brand-dark mb-4">Aramco Brand Guidelines</h3>
              <p className="text-sm text-slate-500 font-light mb-8">Official logos, typography, and brand usage requirements for partners and press.</p>
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent group-hover:underline">Download kit (12MB)</span>
           </div>
           <div className="p-8 border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-8 text-brand-accent">
                 <Download size={24} />
              </div>
              <h3 className="text-2xl font-light text-brand-dark mb-4">Image Library</h3>
              <p className="text-sm text-slate-500 font-light mb-8">High-resolution photography of our facilities, projects, and leadership teams.</p>
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent group-hover:underline">Browse assets</span>
           </div>
           <div className="p-8 border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-8 text-brand-accent">
                 <Download size={24} />
              </div>
              <h3 className="text-2xl font-light text-brand-dark mb-4">Media Contacts</h3>
              <p className="text-sm text-slate-500 font-light mb-8">Dedicated channels for press inquiries and media relations teams worldwide.</p>
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent group-hover:underline">Get in touch</span>
           </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="h-[400px] bg-brand-dark relative overflow-hidden flex items-center justify-center">
         <img src="https://picsum.photos/id/165/1920/400?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-20" />
         <div className="relative z-10 text-center max-w-xl px-8">
            <h2 className="text-3xl font-light text-white mb-8">Stay informed with the latest from Aramco</h2>
            <div className="flex border-b border-white/30 pb-4">
               <input type="email" placeholder="Your email address" className="bg-transparent border-none text-white font-light focus:ring-0 placeholder-white/40 flex-grow" />
               <button className="text-brand-accent text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors">
                  SUBSCRIBE
               </button>
            </div>
         </div>
      </section>
    </>
  );
};

export default NewsMedia;
