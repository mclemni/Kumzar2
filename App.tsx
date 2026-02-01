
import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Mail, Twitter, Linkedin, Youtube, Instagram, ChevronUp } from 'lucide-react';
import { Logo } from './components/Icons';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import WhatWeDo from './views/WhatWeDo';
import Projects from './views/Projects';
import SingleProject from './views/SingleProject';
import SingleService from './views/SingleService';
import ContactUs from './views/ContactUs';
import NewsMedia from './views/NewsMedia';
import { PROJECTS, SERVICES } from './constants';
import { Project, Service } from './types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'what-we-do' | 'projects' | 'single-project' | 'single-service' | 'news-media' | 'contact-us'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation
  const navigateTo = (view: 'home' | 'about' | 'what-we-do' | 'projects' | 'single-project' | 'single-service' | 'news-media' | 'contact-us', data?: Project | Service) => {
    if (view === 'single-project') setSelectedProject(data as Project);
    if (view === 'single-service') setSelectedService(data as Service);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-accent selection:text-white">
      {/* TOP UTILITY BAR - Global */}
      <div className="h-10 bg-brand-dark/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5 flex items-center justify-between px-16 text-white/70 text-[11px] font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="cursor-pointer hover:text-brand-accent transition-colors">العربية</span>
            <span>|</span>
            <span className="text-white">English</span>
          </div>
        </div>
        <div className="flex items-center">
          <a href="mailto:info@kumzar.net" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
            <Mail size={14} className="text-brand-accent" />
            <span className="text-white">info@kumzar.net</span>
          </a>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER - Global */}
      <header className={`fixed top-10 w-full z-40 h-20 px-16 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white shadow-lg top-0 h-16 text-brand-dark border-b border-slate-100' : 'bg-transparent text-white'}`}>
        <div className="w-1/4 flex justify-start cursor-pointer" onClick={() => navigateTo('home')}>
          <Logo variant={scrolled ? 'color' : 'white'} />
        </div>
        
        <nav className="flex-1 flex justify-end gap-10 pr-12">
          <button 
            onClick={() => navigateTo('about')} 
            className={`text-[11px] font-bold tracking-[0.2em] hover:text-brand-accent transition-all whitespace-nowrap ${currentView === 'about' ? 'text-brand-accent' : (scrolled ? 'text-brand-dark' : 'text-white')}`}
          >
            ABOUT US
          </button>
          <button 
            onClick={() => navigateTo('what-we-do')} 
            className={`text-[11px] font-bold tracking-[0.2em] hover:text-brand-accent transition-all whitespace-nowrap ${currentView === 'what-we-do' || currentView === 'single-service' ? 'text-brand-accent' : (scrolled ? 'text-brand-dark' : 'text-white')}`}
          >
            WHAT WE DO
          </button>
          <button 
            onClick={() => navigateTo('projects')} 
            className={`text-[11px] font-bold tracking-[0.2em] hover:text-brand-accent transition-all whitespace-nowrap ${currentView === 'projects' || currentView === 'single-project' ? 'text-brand-accent' : (scrolled ? 'text-brand-dark' : 'text-white')}`}
          >
            PROJECTS
          </button>
          <button 
            onClick={() => navigateTo('news-media')} 
            className={`text-[11px] font-bold tracking-[0.2em] hover:text-brand-accent transition-all whitespace-nowrap ${currentView === 'news-media' ? 'text-brand-accent' : (scrolled ? 'text-brand-dark' : 'text-white')}`}
          >
            NEWS & MEDIA
          </button>
          <button 
            onClick={() => navigateTo('contact-us')} 
            className={`text-[11px] font-bold tracking-[0.2em] hover:text-brand-accent transition-all whitespace-nowrap ${currentView === 'contact-us' ? 'text-brand-accent' : (scrolled ? 'text-brand-dark' : 'text-white')}`}
          >
            CONTACT US
          </button>
        </nav>

        <div className="w-auto flex justify-end">
          <Search size={22} className="cursor-pointer hover:text-brand-accent transition-all" />
        </div>
      </header>

      <main>
        {currentView === 'home' && <Home onSelectProject={(p) => navigateTo('single-project', p)} />}
        {currentView === 'about' && <AboutUs />}
        {currentView === 'what-we-do' && <WhatWeDo onSelectService={(s) => navigateTo('single-service', s)} />}
        {currentView === 'projects' && <Projects onSelectProject={(p) => navigateTo('single-project', p)} onViewServices={() => navigateTo('what-we-do')} />}
        {currentView === 'single-project' && selectedProject && <SingleProject project={selectedProject} onBack={() => navigateTo('projects')} />}
        {currentView === 'single-service' && selectedService && <SingleService service={selectedService} onBack={() => navigateTo('what-we-do')} />}
        {currentView === 'news-media' && <NewsMedia />}
        {currentView === 'contact-us' && <ContactUs />}
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-dark pt-24 pb-12 text-white relative overflow-hidden">
        {/* FOOTER PATTERN OVERLAY - Smaller, Right-Bottom Positioned */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundImage: 'url("https://pastel.com.iq/wp-content/uploads/2026/02/pattren@2x.png")',
            backgroundSize: '280px auto',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="max-w-[1200px] mx-auto px-16 relative z-10">
          <div className="grid grid-cols-12 gap-16 mb-20">
            {/* COLUMN 1: BRIEF BIO */}
            <div className="col-span-12 lg:col-span-5">
              <h5 className="text-[11px] font-bold tracking-widest mb-8 text-white/50 uppercase">ABOUT KUMZAR</h5>
              <p className="text-sm font-light text-white/50 leading-relaxed max-w-md">
                Kumzar is a multidisciplinary industrial leader based in Basra, Iraq. We specialize in civil construction, marine logistics, and strategic procurement, bridging global engineering standards with local execution expertise to build the backbone of Iraq's future infrastructure.
              </p>
              <div className="mt-8 flex gap-4">
                {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/5 hover:border-brand-accent transition-all group">
                    <Icon size={16} className="text-white/40 group-hover:text-brand-accent" />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2: ESSENTIAL NAVIGATION */}
            <div className="col-span-6 lg:col-span-3">
              <h5 className="text-[11px] font-bold tracking-widest mb-8 text-white/50 uppercase">RESOURCES</h5>
              <div className="flex flex-col gap-4 text-xs font-medium text-white/50">
                <button onClick={() => navigateTo('about')} className="text-left hover:text-brand-accent transition-colors">Our History</button>
                <button onClick={() => navigateTo('what-we-do')} className="text-left hover:text-brand-accent transition-colors">Capability Statement</button>
                <button onClick={() => navigateTo('projects')} className="text-left hover:text-brand-accent transition-colors">Project Gallery</button>
                <button onClick={() => navigateTo('news-media')} className="text-left hover:text-brand-accent transition-colors">Media Hub</button>
                <button onClick={() => navigateTo('contact-us')} className="text-left hover:text-brand-accent transition-colors">Partner With Us</button>
              </div>
            </div>

            {/* COLUMN 3: LEGAL & SUPPORT */}
            <div className="col-span-6 lg:col-span-4">
              <h5 className="text-[11px] font-bold tracking-widest mb-8 text-white/50 uppercase">COMPLIANCE</h5>
              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-white/50">
                {[
                  'Privacy Policy', 'Terms of Use', 
                  'Cookie Notice', 'Regional Reach', 
                  'Sika® License', 'HSEQ Policy', 
                  'Ethics Hotline', 'Sitemap'
                ].map(link => (
                  <a key={link} href="#" className="hover:text-brand-accent transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-12 flex items-center justify-between">
             {/* LEFT SIDE: COPYRIGHT & LOGO */}
             <div className="flex flex-col items-start gap-8">
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                   © 2025 KUMZAR CIVIL CONSTRUCTION & MARINE SERVICES.<br/>
                   AUTHORIZED AGENT FOR SIKA® PRODUCTS IN IRAQ.
                </div>
                <Logo variant="white" className="opacity-40 hover:opacity-100 transition-opacity" />
             </div>

             {/* RIGHT SIDE: POWERED BY */}
             <div className="flex items-center gap-4">
               <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Powered By</span>
               <img 
                 src="https://synthir-pharma.com/wp-content/uploads/2026/01/Screenshot_2026-01-29_231958-removebg-preview.png" 
                 alt="Pastel Logo" 
                 className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
               />
             </div>
          </div>
        </div>
        
        <div className="fixed bottom-8 right-8 z-50">
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="p-3 bg-brand-accent text-brand-dark rounded-full shadow-lg hover:scale-110 transition-transform"
           >
             <ChevronUp size={24} />
           </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
