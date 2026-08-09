import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function GlobalNavbar({ onNavigateHome, onNavigateProperties, onNavigateEnquiry, onNavigateLandlords, onNavigateAbout, onNavigateContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePropertiesClick = () => {
    setIsMenuOpen(false);
    if (onNavigateProperties) {
      onNavigateProperties();
    } else {
      const section = document.getElementById('explore-properties');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLandlordsClick = () => {
    setIsMenuOpen(false);
    if (onNavigateLandlords) {
      onNavigateLandlords();
    }
  };

  const handleAboutClick = () => {
    setIsMenuOpen(false);
    if (onNavigateAbout) {
      onNavigateAbout();
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (onNavigateContact) {
      onNavigateContact();
    } else if (onNavigateEnquiry) {
      onNavigateEnquiry();
    }
  };

  const NAV_ITEMS = [
    { label: 'HOME', action: handleHomeClick },
    { label: 'ABOUT', action: handleAboutClick },
    { label: 'PROPERTIES', action: handlePropertiesClick },
    { label: 'SERVICES', action: handleLandlordsClick },
    { label: 'WHY US', action: handleLandlordsClick },
    { label: 'CONTACT', action: handleContactClick }
  ];

  return (
    <>
      {/* Persistent Floating Glass Header Navbar */}
      <header className="fixed top-4 sm:top-6 left-3 right-3 sm:left-6 sm:right-6 z-50 rounded-full border border-white/30 backdrop-blur-2xl bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-6 sm:px-10 py-3.5 flex items-center justify-between transition-all duration-300">
        
        {/* Left Side: Empty for balanced logo alignment */}
        <div className="flex-1"></div>

        {/* Center Logo */}
        <h1 
          onClick={handleHomeClick}
          className="font-montserrat font-light text-lg sm:text-xl md:text-2xl text-white tracking-[0.05em] leading-none drop-shadow-md cursor-pointer hover:text-amber-200 transition-colors"
        >
          Faith &amp; Co
        </h1>

        {/* Right Side: Minimalist Architectural 3-Line Hamburger Icon */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Toggle Navigation Menu"
            className="w-9 h-9 flex flex-col justify-center items-center gap-[5px] cursor-pointer bg-transparent border-none p-0 focus:outline-none transition-transform duration-300"
          >
            {/* Top Line */}
            <span 
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-out origin-center ${
                isMenuOpen 
                  ? 'rotate-45 translate-y-[6.5px]' 
                  : isHovered 
                  ? 'scale-x-75 translate-y-[1px]' 
                  : 'scale-x-100'
              }`}
            />
            {/* Middle Line */}
            <span 
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-out ${
                isMenuOpen 
                  ? 'opacity-0 scale-x-0' 
                  : isHovered 
                  ? 'scale-x-110' 
                  : 'scale-x-100'
              }`}
            />
            {/* Bottom Line */}
            <span 
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-out origin-center ${
                isMenuOpen 
                  ? '-rotate-45 -translate-y-[6.5px]' 
                  : isHovered 
                  ? 'scale-x-75 -translate-y-[1px]' 
                  : 'scale-x-100'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Backdrop overlay when side panel is active */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-500 animate-fade-in"
        />
      )}

      {/* Right-Side Slide-Over Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] md:w-[480px] bg-[#090a14] text-white border-l border-white/15 p-8 sm:p-10 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Header Row inside Panel */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90 font-montserrat">
            NAVIGATION DIRECTORY
          </span>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Editorial Navigation Links */}
        <nav className="my-auto py-6 space-y-3">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.label}
              onClick={item.action}
              className={`group relative cursor-pointer py-2 border-b border-white/5 transition-all duration-300 ease-out ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${isMenuOpen ? 100 + index * 60 : 0}ms` }}
            >
              <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300 ease-out">
                <span className="font-montserrat font-light text-xl sm:text-2xl text-white group-hover:text-amber-200 transition-colors duration-300">
                  {item.label}
                </span>

                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-amber-200 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Extra Detail & Editorial Footer */}
        <div className="pt-6 border-t border-white/10 space-y-5">
          
          {/* For Landlords Callout */}
          <div className="space-y-1.5 bg-white/[0.03] p-4 rounded-xl border border-white/10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-200 block font-montserrat">
              FOR LANDLORDS
            </span>
            <p className="text-xs font-light text-white/75 leading-relaxed font-montserrat">
              Professional property management for your investment.
            </p>
            <button
              onClick={handleLandlordsClick}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-amber-200 transition-colors pt-1 cursor-pointer group"
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Minimalist Editorial Footer */}
          <div className="flex justify-between items-center text-white/40 text-[10px] font-montserrat tracking-[0.2em] uppercase pt-1">
            <span className="text-white/80 font-medium">LONDON · UK</span>
            <span>PROPERTY MANAGEMENT</span>
          </div>

        </div>
      </div>
    </>
  );
}
