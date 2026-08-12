import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function GlobalNavbar({ onNavigateHome, onNavigateProperties, onNavigateEnquiry, onNavigateLandlords, onNavigateAbout, onNavigateContact, onNavigateRentersRights, onNavigateHmoLicensing, onNavigateGuideToLetting, onNavigateRegisterLandlord, onNavigateLetWithUs, onNavigateFreeValuation }) {
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

  const handleRentersRightsClick = () => {
    setIsMenuOpen(false);
    if (onNavigateRentersRights) {
      onNavigateRentersRights();
    }
  };

  const handleHmoLicensingClick = () => {
    setIsMenuOpen(false);
    if (onNavigateHmoLicensing) {
      onNavigateHmoLicensing();
    }
  };

  const handleGuideToLettingClick = () => {
    setIsMenuOpen(false);
    if (onNavigateGuideToLetting) {
      onNavigateGuideToLetting();
    }
  };

  const handleRegisterLandlordClick = () => {
    setIsMenuOpen(false);
    if (onNavigateRegisterLandlord) {
      onNavigateRegisterLandlord();
    }
  };

  const handleLetWithUsClick = () => {
    setIsMenuOpen(false);
    if (onNavigateLetWithUs) {
      onNavigateLetWithUs();
    }
  };

  const handleFreeValuationClick = () => {
    setIsMenuOpen(false);
    if (onNavigateFreeValuation) {
      onNavigateFreeValuation();
    }
  };

  const NAV_GROUPS = [
    {
      category: 'MAIN',
      items: [
        { label: 'HOME', action: handleHomeClick },
        { label: 'PROPERTIES', action: handlePropertiesClick },
        { label: 'SERVICES', action: handleLandlordsClick },
        { label: 'ABOUT US', action: handleAboutClick },
      ]
    },
    {
      category: 'LANDLORD SERVICES',
      items: [
        { label: 'FREE VALUATION', action: handleFreeValuationClick, badge: 'POPULAR' },
        { label: 'REGISTER AS LANDLORD', action: handleRegisterLandlordClick },
        { label: 'LET WITH FAITH & CO', action: handleLetWithUsClick },
      ]
    },
    {
      category: 'GUIDES & COMPLIANCE',
      items: [
        { label: 'GUIDE TO LETTING', action: handleGuideToLettingClick },
        { label: 'RENTERS\' RIGHTS ACT 2025', action: handleRentersRightsClick },
        { label: 'HMO LICENSING GUIDE', action: handleHmoLicensingClick },
      ]
    },
    {
      category: 'CONNECT',
      items: [
        { label: 'CONTACT US', action: handleContactClick }
      ]
    }
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
          className="font-cormorant font-light text-2xl sm:text-3xl text-white tracking-wide leading-none drop-shadow-md cursor-pointer hover:text-[#C9A84C] transition-colors"
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
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] md:w-[480px] bg-[#090a14] text-white border-l border-white/15 p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-y-auto max-h-screen no-scrollbar transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-dm ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Header Row inside Panel */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A84C] font-dm">
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

        {/* Categorized Editorial Navigation Groups */}
        <nav className="py-5 space-y-5 my-auto overflow-y-auto no-scrollbar">
          {NAV_GROUPS.map((group, groupIdx) => (
            <div key={group.category} className="space-y-1.5">
              <div className="text-[10px] font-semibold tracking-[0.25em] text-[#C9A84C]/80 uppercase font-dm px-1">
                {group.category}
              </div>
              <div className="space-y-0.5">
                {group.items.map((item, itemIdx) => {
                  const globalIdx = groupIdx * 3 + itemIdx;
                  return (
                    <div
                      key={item.label}
                      onClick={item.action}
                      className={`group relative cursor-pointer py-1.5 border-b border-white/5 transition-all duration-300 ease-out ${
                        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${isMenuOpen ? 80 + globalIdx * 45 : 0}ms` }}
                    >
                      <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300 ease-out">
                        <div className="flex items-center gap-2">
                          <span className="font-cormorant font-light text-sm sm:text-base tracking-wide text-white group-hover:text-[#C9A84C] transition-colors duration-300">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="text-[8px] font-montserrat tracking-widest uppercase bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] px-1.5 py-0.2 rounded-none font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-amber-200 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Extra Detail & Editorial Footer */}
        <div className="pt-5 border-t border-white/10 space-y-4 shrink-0 mt-2 font-dm">
          
          {/* For Landlords Callout */}
          <div className="space-y-1.5 bg-white/[0.03] p-4 rounded-xl border border-white/10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A84C] block font-dm">
              FOR LANDLORDS
            </span>
            <p className="text-xs font-light text-white/75 leading-relaxed font-dm">
              Professional property management for your investment.
            </p>
            <button
              onClick={handleFreeValuationClick}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-[#C9A84C] transition-colors pt-1 cursor-pointer group"
            >
              <span>REQUEST FREE VALUATION</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C9A84C]" />
            </button>
          </div>

          {/* Minimalist Editorial Footer */}
          <div className="flex justify-between items-center text-white/40 text-[10px] font-dm tracking-[0.2em] uppercase pt-1">
            <span className="text-white/80 font-medium">LONDON · UK</span>
            <span>PROPERTY MANAGEMENT</span>
          </div>

        </div>
      </div>
    </>
  );
}
