
import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Mail, Twitter, Linkedin, Youtube, Instagram, ChevronUp, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'ABOUT US', view: 'about' as const },
    { label: 'WHAT WE DO', view: 'what-we-do' as const },
    { label: 'PROJECTS', view: 'projects' as const },
    { label: 'NEWS & MEDIA', view: 'news-media' as const },
    { label: 'CONTACT US', view: 'contact-us' as const },
  ];

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-accent selection:text-white">
      {/* TOP UTILITY BAR - Global */}
      <div className="h-10 bg-brand-dark/95 backdrop-blur-md fixed top-0 w-full z-[60] border-b border-white/5 flex items-center justify-between px-6 md:px-16 text-white/70 text-[11px] font-medium tracking-wide">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <span className="cursor-pointer hover:text-brand-accent transition-colors">العربية</span>
            <span>|</span>
            <span className="text-white">English</span>
          </div>
        </div>
        <div className="flex items-center">
          <a href="mailto:info@kumzar.net" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
            <Mail size={14} className="text-brand-accent" />
            <span className="text-white hidden sm:inline">info@kumzar.net</span>
          </a>
        </div>
      </div>

      {/* MAIN NAVIGATION HEADER - Global */}
      <header className={`fixed top-10 w-full z-50 h-20 px-6 md:px-16 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white shadow-lg top-0 h-16 text-brand-dark border-b border-slate-100' : 'bg-transparent text-white'}`}>
        <div className="w-1/4 flex justify-start cursor-pointer z-[70]" onClick={() => navigateTo('home')}>
          <Logo variant={scrolled || mobileMenuOpen ? 'color' : 'white'} />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-end gap-10 pr-12">
          {navLinks.map((link) => (
            <button 
              key={link.view}
              onClick={() => navigateTo(link.view)} 
              className={`text-[11px] font-bold tracking-[0.2em] hover:text-brand-accent transition-all whitespace-nowrap ${currentView === link.view || (link.view === 'projects' && currentView === 'single-project') || (link.view === 'what-we-do' && currentView === 'single-service') ? 'text-brand-accent' : (scrolled ? 'text-brand-dark' : 'text-white')}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-0">
          <Search size={22} className="cursor-pointer hover:text-brand-accent transition-all" />
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-current z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-brand-dark" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`fixed inset-0 bg-white z-[60] flex flex-col pt-32 px-10 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.view}
                onClick={() => navigateTo(link.view)} 
                className={`text-2xl font-light text-left tracking-widest ${currentView === link.view ? 'text-brand-accent' : 'text-brand-dark'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-auto pb-12 space-y-6">
             <div className="h-[1px] bg-slate-100 w-full"></div>
             <p className="text-xs font-bold tracking-widest text-slate-400">CONNECT WITH US</p>
             <div className="flex gap-6">
                {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                  <Icon key={i} size={20} className="text-brand-dark/40 hover:text-brand-accent cursor-pointer" />
                ))}
             </div>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
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
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20 md:opacity-100"
          style={{ 
            backgroundImage: 'url("https://pastel.com.iq/wp-content/uploads/2026/02/pattren@2x.png")',
            backgroundSize: '280px auto',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
            <div className="md:col-span-12 lg:col-span-5">
              <h5 className="text-[11px] font-bold tracking-widest mb-6 md:mb-8 text-white/50 uppercase">ABOUT KUMZAR</h5>
              <p className="text-sm font-light text-white/50 leading-relaxed max-w-md">
                Kumzar is a multidisciplinary industrial leader based in Basra, Iraq. We specialize in civil construction, marine logistics, and strategic procurement, bridging global engineering standards with local execution expertise.
              </p>
              <div className="mt-8 flex gap-4">
                {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/5 hover:border-brand-accent transition-all group">
                    <Icon size={16} className="text-white/40 group-hover:text-brand-accent" />
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-3">
              <h5 className="text-[11px] font-bold tracking-widest mb-6 md:mb-8 text-white/50 uppercase">RESOURCES</h5>
              <div className="flex flex-col gap-4 text-xs font-medium text-white/50">
                <button onClick={() => navigateTo('about')} className="text-left hover:text-brand-accent transition-colors">Our History</button>
                <button onClick={() => navigateTo('what-we-do')} className="text-left hover:text-brand-accent transition-colors">Capability Statement</button>
                <button onClick={() => navigateTo('projects')} className="text-left hover:text-brand-accent transition-colors">Project Gallery</button>
                <button onClick={() => navigateTo('news-media')} className="text-left hover:text-brand-accent transition-colors">Media Hub</button>
              </div>
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-4">
              <h5 className="text-[11px] font-bold tracking-widest mb-6 md:mb-8 text-white/50 uppercase">COMPLIANCE</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-white/50">
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
          
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
             <div className="flex flex-col items-start gap-8">
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                   © 2025 KUMZAR CIVIL CONSTRUCTION & MARINE SERVICES.<br className="hidden md:block"/>
                   AUTHORIZED AGENT FOR SIKA® PRODUCTS IN IRAQ.
                </div>
                <Logo variant="white" className="opacity-40 hover:opacity-100 transition-opacity" />
             </div>

             <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
               <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Powered By</span>
               <img 
                 src="https://synthir-pharma.com/wp-content/uploads/2026/01/Screenshot_2026-01-29_231958-removebg-preview.png" 
                 alt="Pastel Logo" 
                 className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300"
               />
             </div>
          </div>
        </div>
        
        <div className="fixed bottom-8 right-8 z-40">
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
