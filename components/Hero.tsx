
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES } from '../constants';
import { OutlinedArrow } from './Icons';

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const autoPlayRef = useRef<number | null>(null);

  const switchSlide = useCallback((index: number) => {
    if (index === current) return;
    
    setTextVisible(false);
    
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => {
        setTextVisible(true);
      }, 300);
    }, 500);
  }, [current]);

  const nextSlide = useCallback(() => {
    switchSlide((current + 1) % SLIDES.length);
  }, [current, switchSlide]);

  useEffect(() => {
    autoPlayRef.current = window.setInterval(nextSlide, 7000);
    return () => {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current);
    };
  }, [nextSlide]);

  const handleTabClick = (idx: number) => {
    if (autoPlayRef.current) window.clearInterval(autoPlayRef.current);
    switchSlide(idx);
    autoPlayRef.current = window.setInterval(nextSlide, 7000);
  };

  const slide = SLIDES[current];

  return (
    <div className="relative w-full h-[100vh] bg-brand-dark overflow-hidden flex items-center">
      {/* 1. Background Slides with Ken Burns */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent z-10" />
          
          <img
            src={s.image}
            alt="Hero background"
            className={`w-full h-full object-cover grayscale brightness-50 transition-transform duration-[8000ms] ease-out ${idx === current ? 'scale-110' : 'scale-100'}`}
          />
        </div>
      ))}

      {/* 2. REQUESTED PATTERN LAYER - Positioned Right, No Repeat */}
      <div 
        className="absolute inset-0 z-[15] pointer-events-none opacity-30 md:opacity-100"
        style={{ 
          backgroundImage: 'url("https://pastel.com.iq/wp-content/uploads/2026/02/pattren@2x.png")',
          backgroundSize: '60% auto',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* 3. Main Content Container */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-16 flex items-center justify-between h-full pt-20">
        
        {/* Left Side: Main Text */}
        <div 
          className={`w-full lg:w-1/2 transition-all duration-700 ease-out transform
            ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p className="text-white/60 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">
            {slide.label}
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-8 md:mb-12">
            {slide.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <button className="flex items-center gap-4 text-white font-bold text-xs tracking-widest uppercase hover:text-brand-accent transition-all group">
            Discover how
            <OutlinedArrow className="group-hover:border-brand-accent group-hover:text-brand-accent transition-colors" />
          </button>
        </div>

        {/* Right Side: Floating Card - Hidden on mobile */}
        <div 
          className={`hidden lg:block w-[340px] bg-white/5 backdrop-blur-3xl p-7 rounded-sm shadow-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-all duration-700
            ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
          `}
        >
          <p className="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-5 opacity-80 group-hover:opacity-100 transition-opacity">LATEST PROJECT UPDATE</p>
          <div className="aspect-video bg-brand-dark/40 rounded-sm mb-6 overflow-hidden border border-white/5">
             <img src="https://picsum.photos/id/110/400/250?grayscale" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105" alt="Al-Faw Project" />
          </div>
          <h3 className="text-white text-[16px] font-light mb-6 leading-relaxed tracking-wide">
            Kumzar accelerates technical supply for the <span className="text-brand-accent font-medium">Al-Faw Immersed Tunnel</span> project.
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors">
              Read technical brief
            </span>
            <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-brand-accent/30 transition-colors"></div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Tabs Navigation - Responsive scrolling */}
      <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/5 bg-brand-dark/20 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto flex overflow-x-auto no-scrollbar scroll-smooth">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleTabClick(idx)}
              className={`flex-1 min-w-[120px] py-6 md:py-8 text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-center transition-all relative uppercase ${idx === current ? 'text-brand-accent' : 'text-white/40 hover:text-white/80'}`}
            >
              {s.tabLabel}
              {idx === current && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-accent transition-all duration-500 shadow-[0_-2px_10px_rgba(243,164,77,0.4)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
