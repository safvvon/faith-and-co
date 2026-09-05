import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

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

  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('reset-map-zoom'));
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {/* Persistent Floating Glass Header Navbar */}
      <header className="fixed top-4 sm:top-6 left-3 right-3 sm:left-6 sm:right-6 z-50 rounded-full border border-white/30 backdrop-blur-2xl bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-4 sm:px-10 py-3.5 flex items-center justify-between transition-all duration-300">
        
        {/* Left Side: Back Icon (Perfectly Sized & Positioned) */}
        <div className="w-16 sm:w-24 flex items-center justify-start">
          <button
            onClick={handleBackClick}
            aria-label="Go Back"
            className="p-2 -ml-1 text-white hover:text-[#C9A84C] transition-colors cursor-pointer bg-transparent border-none focus:outline-none group active:scale-95 flex items-center justify-center rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 text-white group-hover:text-[#C9A84C]" />
          </button>
        </div>

        {/* Center Logo (Mathematically Centered) */}
        <div className="flex-1 text-center flex items-center justify-center">
          <h1 
            onClick={handleHomeClick}
            className="font-cormorant font-light text-lg sm:text-xl md:text-2xl text-white tracking-[0.2em] uppercase leading-none drop-shadow-md cursor-pointer hover:text-[#C9A84C] transition-colors"
          >
            Faith &amp; Co
          </h1>
        </div>

        {/* Right Side: Hamburger Menu Button */}
        <div className="w-16 sm:w-24 flex items-center justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Toggle Navigation Menu"
            className="w-10 h-10 -mr-1 flex flex-col justify-center items-center gap-[6px] cursor-pointer bg-transparent border-none p-0 focus:outline-none transition-transform duration-300"
          >
            {/* Top Line */}
            <span 
              className={`w-7 h-[2px] bg-white transition-all duration-300 ease-out origin-center ${
                isMenuOpen 
                  ? 'rotate-45 translate-y-[8px]' 
                  : isHovered 
                  ? 'scale-x-75 translate-y-[1px]' 
                  : 'scale-x-100'
              }`}
            />
            {/* Middle Line */}
            <span 
              className={`w-7 h-[2px] bg-white transition-all duration-300 ease-out ${
                isMenuOpen 
                  ? 'opacity-0 scale-x-0' 
                  : isHovered 
                  ? 'scale-x-110' 
                  : 'scale-x-100'
              }`}
            />
            {/* Bottom Line */}
            <span 
              className={`w-7 h-[2px] bg-white transition-all duration-300 ease-out origin-center ${
                isMenuOpen 
                  ? '-rotate-45 -translate-y-[8px]' 
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
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs transition-opacity duration-500 animate-fade-in"
        />
      )}

      {/* Right-Side Slide-Over Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[500px] md:w-[560px] bg-[#090a14] text-white border-l border-white/20 p-8 sm:p-12 flex flex-col justify-between shadow-2xl overflow-y-auto max-h-screen no-scrollbar transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-dm ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Header Row inside Panel */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 shrink-0">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A84C] font-dm">
            NAVIGATION DIRECTORY
          </span>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categorized Editorial Navigation Groups */}
        <nav className="py-6 space-y-6 my-auto overflow-y-auto no-scrollbar">
          {NAV_GROUPS.map((group, groupIdx) => (
            <div key={group.category} className="space-y-2">
              <div className="text-xs font-bold tracking-[0.25em] text-[#C9A84C] uppercase font-dm px-1">
                {group.category}
              </div>
              <div className="space-y-1">
                {group.items.map((item, itemIdx) => {
                  const globalIdx = groupIdx * 3 + itemIdx;
                  return (
                    <div
                      key={item.label}
                      onClick={item.action}
                      className={`group relative cursor-pointer py-2.5 border-b border-white/5 transition-all duration-300 ease-out ${
                        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${isMenuOpen ? 80 + globalIdx * 45 : 0}ms` }}
                    >
                      <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300 ease-out">
                        <div className="flex items-center gap-3">
                          <span className="font-cormorant font-light text-lg sm:text-xl lg:text-2xl tracking-wide text-white group-hover:text-[#C9A84C] transition-colors duration-300">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className="text-[10px] font-montserrat tracking-widest uppercase bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] px-2 py-0.5 rounded-none font-semibold">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Extra Detail & Editorial Footer */}
        <div className="pt-6 border-t border-white/15 space-y-5 shrink-0 mt-2 font-dm">
          
          {/* For Landlords Callout */}
          <div className="space-y-2 bg-white/[0.04] p-5 rounded-xl border border-white/15">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A84C] block font-dm">
              FOR LANDLORDS
            </span>
            <p className="text-sm font-light text-white/80 leading-relaxed font-dm">
              Professional property management for your investment.
            </p>
            <button
              onClick={handleFreeValuationClick}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-[#C9A84C] transition-colors pt-1 cursor-pointer group"
            >
              <span>REQUEST FREE VALUATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C9A84C]" />
            </button>
          </div>

          {/* Minimalist Editorial Footer */}
          <div className="flex justify-between items-center text-white/50 text-xs font-dm tracking-[0.2em] uppercase pt-1">
            <span className="text-white/90 font-medium">LONDON · UK</span>
            <span>PROPERTY MANAGEMENT</span>
          </div>

        </div>
      </div>
    </>
  );
}
