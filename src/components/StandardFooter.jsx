import React from 'react';

export default function StandardFooter({
  onNavigateHome,
  onNavigateProperties,
  onNavigateLandlords,
  onNavigateRentersRights,
  onNavigateHmoLicensing,
  onNavigateGuideToLetting,
  onNavigateContact,
  onNavigateRegisterLandlord,
  onNavigateLetWithUs,
  onNavigateFreeValuation
}) {
  return (
    <footer className="w-full bg-[#090a14] border-t border-white/10 py-16 sm:py-20 px-6 sm:px-12 lg:px-16 font-dm">
      <div className="max-w-[1450px] mx-auto space-y-12">
        
        {/* TWO-SIDE SPLIT FOOTER LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE — BRAND & CONTACT (~45% width) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span 
                onClick={onNavigateHome}
                className="font-montserrat font-light text-2xl sm:text-3xl tracking-[0.25em] text-white uppercase cursor-pointer hover:text-[#C9A84C] transition-colors"
              >
                FAITH <span className="text-[#C9A84C] font-normal">&amp;</span> CO
              </span>
              <p className="text-[#C9A84C] text-[11px] tracking-[0.25em] font-medium uppercase font-dm mt-1">
                SPECIALIST PROPERTY MANAGEMENT
              </p>
            </div>

            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-md font-dm">
              Providing modern, transparent, high-yield property management across Greater London and the Home Counties. Dedicated to protecting your residential asset.
            </p>

            <div className="space-y-1.5 text-xs text-white/60 font-light font-dm pt-2">
              <p className="text-white font-medium">Head Office &amp; Operations</p>
              <p>Greater London &amp; Home Counties, United Kingdom</p>
              <p className="pt-1">
                <span className="text-white/40">Tel:</span>{' '}
                <a href="tel:02085741700" className="text-white/80 hover:text-[#C9A84C] transition-colors">020 8574 1700</a>
                <span className="mx-2 text-white/20">|</span>
                <span className="text-white/40">Email:</span>{' '}
                <a href="mailto:info@faithandco.co.uk" className="text-white/80 hover:text-[#C9A84C] transition-colors">info@faithandco.co.uk</a>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — NAVIGATION LINKS GRID (~55% width) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            
            {/* Column 1: Portfolio & Lettings */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] font-dm">
                Residences
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-light font-dm">
                {onNavigateProperties && (
                  <li>
                    <span onClick={onNavigateProperties} className="hover:text-white cursor-pointer transition-colors">
                      Explore Properties
                    </span>
                  </li>
                )}
                {onNavigateFreeValuation && (
                  <li>
                    <span onClick={onNavigateFreeValuation} className="hover:text-white cursor-pointer transition-colors">
                      Free Valuation
                    </span>
                  </li>
                )}
                {onNavigateContact && (
                  <li>
                    <span onClick={onNavigateContact} className="hover:text-white cursor-pointer transition-colors">
                      Enquire / Contact
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 2: Landlord Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] font-dm">
                Landlords
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-light font-dm">
                {onNavigateLandlords && (
                  <li>
                    <span onClick={onNavigateLandlords} className="hover:text-white cursor-pointer transition-colors">
                      Landlord Services
                    </span>
                  </li>
                )}
                {onNavigateRegisterLandlord && (
                  <li>
                    <span onClick={onNavigateRegisterLandlord} className="hover:text-white cursor-pointer transition-colors">
                      Register as Landlord
                    </span>
                  </li>
                )}
                {onNavigateLetWithUs && (
                  <li>
                    <span onClick={onNavigateLetWithUs} className="hover:text-white cursor-pointer transition-colors">
                      Let With Us
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 3: Regulation & Guides */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] font-dm">
                Regulations
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-light font-dm">
                {onNavigateRentersRights && (
                  <li>
                    <span onClick={onNavigateRentersRights} className="hover:text-white cursor-pointer transition-colors">
                      Renters' Rights Act
                    </span>
                  </li>
                )}
                {onNavigateHmoLicensing && (
                  <li>
                    <span onClick={onNavigateHmoLicensing} className="hover:text-white cursor-pointer transition-colors">
                      HMO Licensing
                    </span>
                  </li>
                )}
                {onNavigateGuideToLetting && (
                  <li>
                    <span onClick={onNavigateGuideToLetting} className="hover:text-white cursor-pointer transition-colors">
                      Guide to Letting
                    </span>
                  </li>
                )}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
