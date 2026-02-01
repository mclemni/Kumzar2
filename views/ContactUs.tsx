
import React from 'react';
import { Globe, ArrowRight, Phone, Mail, MapPin, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { OFFICES } from '../constants';

const ContactUs: React.FC = () => {
  return (
    <>
      {/* CONTACT HERO - Unified Height 60vh */}
      <section className="relative w-full h-[60vh] bg-brand-dark overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/170/1920/1080?grayscale" 
            alt="Global Network" 
            className="w-full h-full object-cover brightness-[0.4]"
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
            <span>&rsaquo; Contact Us</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-8">Global Contacts</h1>
          <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl">
            We are present in every major energy hub. Connect with our regional teams and specialist divisions.
          </p>
        </div>
      </section>

      {/* OFFICE GRID */}
      <section className="py-24 max-w-[1200px] mx-auto px-16 bg-white">
        <h2 className="text-3xl font-light text-brand-dark mb-16">Our Regional Hubs</h2>
        <div className="grid grid-cols-2 gap-12">
          {OFFICES.map((office, idx) => (
            <div key={idx} className="p-10 border border-slate-100 hover:border-brand-accent/30 transition-all group">
               <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase mb-4 block">
                 {office.region}
               </span>
               <h3 className="text-3xl font-light text-brand-dark mb-8">{office.city}</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4 text-slate-500 font-light text-sm">
                     <MapPin size={18} className="text-slate-300 mt-1 shrink-0" />
                     <p>{office.address}</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500 font-light text-sm">
                     <Phone size={18} className="text-slate-300 shrink-0" />
                     <p>{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-4 text-brand-accent font-medium text-sm">
                     <Mail size={18} className="shrink-0" />
                     <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-16">
           <div className="grid grid-cols-12 gap-24">
              <div className="col-span-5">
                 <h2 className="text-4xl font-light text-brand-dark mb-8">Send an inquiry</h2>
                 <p className="text-slate-500 font-light leading-relaxed mb-12">
                    For general inquiries, media requests, or business opportunities, please use the form. Our representative will get back to you within 2-3 business days.
                 </p>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">STAY UPDATED</p>
                    <div className="flex gap-4">
                       {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                         <a key={i} href="#" className="p-3 bg-white border border-slate-200 rounded-full hover:border-brand-accent transition-colors">
                           <Icon size={18} className="text-brand-dark/50" />
                         </a>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="col-span-7">
                 <form className="grid grid-cols-2 gap-8 bg-white p-12 shadow-sm border border-slate-100">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">FULL NAME</label>
                       <input type="text" className="w-full border-b border-slate-200 py-2 focus:border-brand-accent focus:ring-0 transition-colors text-sm font-light" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">EMAIL ADDRESS</label>
                       <input type="email" className="w-full border-b border-slate-200 py-2 focus:border-brand-accent focus:ring-0 transition-colors text-sm font-light" />
                    </div>
                    <div className="col-span-2 space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">INQUIRY TYPE</label>
                       <select className="w-full border-b border-slate-200 py-2 focus:border-brand-accent focus:ring-0 transition-colors text-sm font-light bg-transparent">
                          <option>General Information</option>
                          <option>Media Inquiry</option>
                          <option>Business Partnerships</option>
                          <option>Supplier Inquiries</option>
                       </select>
                    </div>
                    <div className="col-span-2 space-y-2">
                       <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">MESSAGE</label>
                       <textarea rows={4} className="w-full border-b border-slate-200 py-2 focus:border-brand-accent focus:ring-0 transition-colors text-sm font-light resize-none" />
                    </div>
                    <div className="col-span-2 pt-4">
                       <button className="w-full bg-brand-dark text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all" onClick={(e) => e.preventDefault()}>
                          Submit Inquiry
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* UPDATED BUSINESS COLLABORATION SECTION */}
      <section className="py-24 text-center bg-white">
         <h3 className="text-4xl font-light text-brand-dark mb-10">Interested in business collaboration?</h3>
         <div className="flex justify-center gap-12">
            <a href="#" className="flex items-center gap-3 text-brand-accent font-bold text-[11px] tracking-[0.15em] uppercase hover:gap-4 transition-all group">
               Tender Inquiries <div className="p-2 border border-brand-accent rounded-full group-hover:bg-brand-accent group-hover:text-white transition-all"><ArrowRight size={12} /></div>
            </a>
            <span className="text-slate-200 self-center">|</span>
            <a href="#" className="flex items-center gap-3 text-brand-accent font-bold text-[11px] tracking-[0.15em] uppercase hover:gap-4 transition-all group">
               Subcontractor Registration <div className="p-2 border border-brand-accent rounded-full group-hover:bg-brand-accent group-hover:text-white transition-all"><ArrowRight size={12} /></div>
            </a>
            <span className="text-slate-200 self-center">|</span>
            <a href="#" className="flex items-center gap-3 text-brand-accent font-bold text-[11px] tracking-[0.15em] uppercase hover:gap-4 transition-all group">
               Technical Proposals <div className="p-2 border border-brand-accent rounded-full group-hover:bg-brand-accent group-hover:text-white transition-all"><ArrowRight size={12} /></div>
            </a>
         </div>
         <p className="mt-12 text-slate-400 font-light text-sm max-w-xl mx-auto">
            Explore how Kumzar's technical expertise can drive efficiency in your next industrial or infrastructure project.
         </p>
      </section>
    </>
  );
};

export default ContactUs;
