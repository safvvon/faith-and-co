import React, { useEffect } from 'react';
import { RefreshCw, PoundSterling, CheckCircle2, Home, Database, ArrowRight, ShieldCheck, ArrowDown } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

const HEADLINE_CHANGES = [
  {
    id: 'section-21',
    icon: RefreshCw,
    title: 'Section 21 Abolished',
    description: 'No-fault evictions are being removed. Landlords must now use specific grounds for possession, such as selling the property, moving in, or tenant breach of agreement.'
  },
  {
    id: 'tenancy-structure',
    icon: Home,
    title: 'Periodic Tenancies Standard',
    description: 'Fixed-term tenancies are being replaced by periodic tenancies. Tenants can give two months notice at any time, while landlords must have a statutory ground.'
  },
  {
    id: 'rent-increases',
    icon: PoundSterling,
    title: 'Strict Rent Review Process',
    description: 'Rent increases will be limited to once per year via a Section 13 notice. Tenants will have the right to challenge increases at a tribunal if above market rate.'
  },
  {
    id: 'decent-homes',
    icon: CheckCircle2,
    title: 'Decent Homes Standard',
    description: 'The Decent Homes Standard is extended to the private rented sector for the first time, establishing statutory quality and maintenance obligations.'
  },
  {
    id: 'database',
    icon: Database,
    title: 'Landlord Database & Redress',
    description: 'A mandatory private rented sector database and Ombudsman scheme are introduced, requiring registration for all UK landlords.'
  }
];

export default function RentersRightsPage({
  onNavigateHome,
  onNavigateProperties,
  onNavigateLandlords,
  onNavigateRentersRights,
  onNavigateHmoLicensing,
  onNavigateGuideToLetting,
  onNavigateContact,
  onNavigateRegisterLandlord,
  onNavigateLetWithUs,
  onNavigateFreeValuation,
  onBookValuation
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* 1. HERO HEADER AREA (100% FULL WIDTH) */}
      <section className="relative w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-white/10 bg-[#090a14] text-center">
        <div className="w-full relative z-10 space-y-8 animate-fade-up">
          <div>
            <span className="inline-block px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-dm tracking-[0.25em] font-medium uppercase">
              LEGISLATION &amp; REFORM SUMMARY
            </span>
          </div>

          <h1 className="font-cormorant font-light text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08]">
            The Renters' Rights Act <span className="italic text-[#C9A84C] font-normal">2025</span>
          </h1>

          <p className="font-dm text-lg sm:text-xl lg:text-2xl font-light text-white/80 tracking-wide max-w-5xl mx-auto leading-relaxed">
            The biggest reform to the private rented sector in decades. Here is a clear, practical breakdown of the statutory changes and what they mean for landlords.
          </p>

          <div className="pt-4 flex justify-center font-dm">
            <button
              onClick={() => document.getElementById('renters-rights-content')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-sm sm:text-base tracking-[0.25em] font-bold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95 rounded-none font-dm"
            >
              <span>EXPLORE REFORMS</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (100% FULL-WIDTH EDGE-TO-EDGE) */}
      <main id="renters-rights-content" className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-28 space-y-20 font-dm">
        
        {/* INTRO SUMMARY BANNER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 bg-white/[0.02] border border-white/10 rounded-sm animate-fade-up">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block">EXECUTIVE OVERVIEW</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-4xl text-white tracking-tight">
              Navigating statutory shifts with <span className="italic text-[#C9A84C] font-normal">confidence</span>
            </h2>
            <p className="font-dm text-sm sm:text-base font-light text-white/80 leading-relaxed">
              The Renters' Rights Act represents a significant shift in tenancy law. While headlines highlight tenant protections, the practical message for landlords is straightforward: rules require more formal administration, but professionally managed properties will continue to thrive and yield high returns.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 bg-[#C9A84C]/[0.05] border-l-2 border-[#C9A84C] space-y-3">
            <h4 className="font-cormorant text-xl text-white font-light">How Faith &amp; Co Protects Landlords</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Faith &amp; Co keeps every tenancy we manage fully compliant with statutory grounds, handling notices, agreements, and property standards seamlessly.
            </p>
          </div>
        </section>

        {/* HEADLINE REFORMS GRID (5 SPACIOUS CARDS) */}
        <section className="space-y-10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">KEY LEGISLATIVE CHANGES</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              The Headline <span className="italic text-[#C9A84C] font-normal">Reforms</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {HEADLINE_CHANGES.map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.id}
                  className="p-8 bg-white/[0.03] border border-white/10 hover:border-[#C9A84C] hover:-translate-y-1.5 transition-all duration-300 space-y-4 rounded-sm flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 border border-[#C9A84C]/40 bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-all duration-300">
                      <CardIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-cormorant text-2xl font-light text-white tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="p-10 sm:p-16 bg-white/[0.03] border border-[#C9A84C]/40 text-center space-y-6 animate-fade-up">
          <h3 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
            Stay compliant, <span className="italic text-[#C9A84C] font-normal">stress-free</span>
          </h3>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl mx-auto">
            Let us handle the legal complexity of the new regime. Book a free valuation and we will ensure your property and tenancy agreements are fully up to date.
          </p>

          <button
            onClick={onBookValuation || onNavigateLandlords}
            className="inline-flex items-center gap-3 px-10 py-4.5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-dm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-95"
          >
            <span>BOOK FREE VALUATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </main>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateHome={onNavigateHome}
        onNavigateProperties={onNavigateProperties}
        onNavigateLandlords={onNavigateLandlords}
        onNavigateRentersRights={onNavigateRentersRights}
        onNavigateHmoLicensing={onNavigateHmoLicensing}
        onNavigateGuideToLetting={onNavigateGuideToLetting}
        onNavigateContact={onNavigateContact}
        onNavigateRegisterLandlord={onNavigateRegisterLandlord}
        onNavigateLetWithUs={onNavigateLetWithUs}
        onNavigateFreeValuation={onNavigateFreeValuation || onBookValuation}
      />

    </div>
  );
}
