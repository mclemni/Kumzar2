
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'white' }) => {
  const logoUrl = variant === 'color' 
    ? 'https://pastel.com.iq/wp-content/uploads/2026/01/color.png' 
    : 'https://pastel.com.iq/wp-content/uploads/2026/01/white.png';

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="Kumzar Logo" 
        className={`w-auto object-contain transition-all duration-300 ${className?.includes('h-') ? '' : 'h-8'}`}
      />
    </div>
  );
};

export const OutlinedArrow: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`w-10 h-10 border border-white rounded-full flex items-center justify-center ${className}`}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </div>
);
