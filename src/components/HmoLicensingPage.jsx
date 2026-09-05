import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, AlertTriangle, Building, Check, ArrowDown } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

const TOC_ITEMS = [
  { id: 'what-is-an-hmo', label: '1. What Is an HMO?' },
  { id: 'licensing-types', label: '2. Licensing Types' },
  { id: 'london-borough-rules', label: '3. Borough Schemes' },
  { id: 'landlord-duties', label: '4. Landlord Duties' },
  { id: 'how-faith-and-co-helps', label: '5. How We Help' }
];

const LICENSING_TYPES = [
  {
    title: 'Mandatory Licensing',
    subtitle: 'National UK Standard',
    desc: 'Required for any property let to 5 or more people forming 2 or more separate households sharing amenities (like kitchen or bathroom).'
  },
  {
    title: 'Additional Licensing',
    subtitle: 'Discretionary Borough Powers',
    desc: 'Introduced by individual London councils to cover smaller HMOs (e.g. 3 or 4 occupants from 2+ households).'
  },
  {
    title: 'Selective Licensing',
    subtitle: 'Area-Wide Designations',
    desc: 'Applies to ALL private rented properties in designated wards or council areas regardless of property size or occupant relationships.'
  }
];

const DUTIES_LIST = [
  { title: 'Minimum Room Sizes', desc: 'Strict statutory floor area standards for single and double occupant rooms.' },
  { title: 'Fire Safety Standards', desc: 'Mains-powered interconnected fire alarms, fire doors, and emergency exit routes.' },
  { title: 'Amenity Ratios', desc: 'Adequate kitchen space, cooking facilities, toilets, and bathrooms for occupant count.' },
  { title: 'Waste Management', desc: 'Provision of appropriate refuse bins and organized rubbish disposal arrangements.' },
  { title: 'Fit & Proper Person', desc: 'License holder declaration and background checks by local authorities.' },
  { title: 'Annual Safety Checks', desc: 'Gas safety, electrical installation (EICR), and fire equipment logs.' }
];

export default function HmoLicensingPage({
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
  onBookConsultation
}) {
  const [activeSection, setActiveSection] = useState('what-is-an-hmo');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TOC_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(TOC_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* 1. HERO HEADER AREA (100% FULL WIDTH) */}
      <section className="relative w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-white/10 bg-[#090a14] text-center">
        <div className="w-full relative z-10 space-y-8 animate-fade-up">
          <div>
            <span className="inline-block px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-dm tracking-[0.25em] font-medium uppercase">
              REGULATORY COMPLIANCE GUIDE
            </span>
          </div>

          <h1 className="font-cormorant font-light text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08]">
            Understanding <span className="italic text-[#C9A84C] font-normal">HMO licensing</span>
          </h1>

          <p className="font-dm text-lg sm:text-xl lg:text-2xl font-light text-white/80 tracking-wide max-w-5xl mx-auto leading-relaxed">
            Houses in Multiple Occupation yield strong returns but carry strict statutory compliance rules. Clear guidance on licensing tiers and London borough enforcement.
          </p>

          <div className="pt-4 flex justify-center font-dm">
            <button
              onClick={() => scrollToSection('what-is-an-hmo')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-sm sm:text-base tracking-[0.25em] font-bold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95 rounded-none font-dm"
            >
              <span>EXPLORE GUIDE</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY TOP NAVIGATION BAR */}
      <div className="sticky top-0 z-30 bg-[#090a14]/95 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8 lg:px-12">
        <div className="w-full flex items-center justify-center sm:justify-start gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          {TOC_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-5 py-2.5 text-xs font-dm tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap rounded-sm ${
                activeSection === item.id
                  ? 'bg-[#C9A84C] text-[#090a14] font-semibold shadow-md'
                  : 'bg-white/[0.05] text-white/70 hover:text-white hover:bg-white/10 font-light'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAIN CONTENT (100% FULL-WIDTH EDGE-TO-EDGE) */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-28 space-y-28 font-dm">
        
        {/* SECTION 01 — WHAT IS AN HMO */}
        <section id="what-is-an-hmo" className="scroll-mt-28 space-y-8 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 01</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              What Is a House in <span className="italic text-[#C9A84C] font-normal">Multiple Occupation?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                An HMO is a residential property let to at least 3 tenants forming more than 1 household (unrelated occupants) who share toilet, bathroom, or kitchen facilities.
              </p>
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                When managed professionally, HMOs provide excellent income stability and high rental yields. However, failure to secure the required license can lead to unlimited local council fines and Rent Repayment Orders (RROs).
              </p>
            </div>

            <div className="lg:col-span-6 p-8 bg-[#C9A84C]/[0.05] border-l-2 border-[#C9A84C] space-y-3 animate-pulse-glow">
              <h4 className="font-cormorant text-2xl text-white font-light">Why HMO Regulation Matters in London</h4>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                London local authorities actively enforce HMO licensing to eliminate overcrowded housing and protect tenant safety. Operating without a valid license can result in civil penalty fines of up to £30,000 per offence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 02 — LICENSING TYPES */}
        <section id="licensing-types" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 02</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              The Three Types of <span className="italic text-[#C9A84C] font-normal">HMO Licenses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LICENSING_TYPES.map((type, idx) => (
              <div key={idx} className="p-8 bg-white/[0.03] border border-white/10 hover:border-[#C9A84C] hover:-translate-y-1.5 transition-all duration-300 space-y-4 rounded-sm shadow-xl">
                <span className="font-mono text-xs text-[#C9A84C] animate-float-slow block">TYPE 0{idx + 1}</span>
                <div className="space-y-1">
                  <h3 className="font-cormorant text-2xl text-white font-light">{type.title}</h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">{type.subtitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03 — BOROUGH RULES */}
        <section id="london-borough-rules" className="scroll-mt-28 space-y-8 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 03</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              London Borough <span className="italic text-[#C9A84C] font-normal">Discretionary Schemes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                HMO licensing rules vary significantly across London's 32 boroughs. A property requiring no special license in one borough may require an Additional or Selective license in an adjacent council area.
              </p>
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                Local councils frequently launch 5-year discretionary schemes across specific postcodes. Staying compliant requires continuous local tracking.
              </p>
            </div>
            <div className="lg:col-span-4 p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <h4 className="font-cormorant text-2xl text-[#C9A84C] font-light">Borough Check Service</h4>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Faith &amp; Co audits your property location against current council licensing maps to ensure full legal compliance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 04 — LANDLORD DUTIES */}
        <section id="landlord-duties" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 04</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              HMO Statutory <span className="italic text-[#C9A84C] font-normal">Landlord Duties</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUTIES_LIST.map((duty, idx) => (
              <div key={idx} className="p-6 bg-white/[0.03] border border-white/10 flex items-start gap-4 rounded-sm">
                <div className="w-6 h-6 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-cormorant text-xl text-white font-light">{duty.title}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{duty.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — HOW WE HELP */}
        <section id="how-faith-and-co-helps" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 05</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              How Faith &amp; Co <span className="italic text-[#C9A84C] font-normal">Manages HMO Compliance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <span className="font-mono text-xs text-[#C9A84C]">01</span>
              <h3 className="font-cormorant text-2xl text-white font-light">License Application</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                We prepare floor plans, assemble safety certificates, and submit license applications directly to your local council.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <span className="font-mono text-xs text-[#C9A84C]">02</span>
              <h3 className="font-cormorant text-2xl text-white font-light">Physical Retrofitting</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Coordinating fire doors, emergency lighting, interlinked smoke alarms, and thumb-turn locks to pass council inspections.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <span className="font-mono text-xs text-[#C9A84C]">03</span>
              <h3 className="font-cormorant text-2xl text-white font-light">Continuous Management</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Handling ongoing tenancy inspections, waste management, and mandatory safety renewals without landlord hassle.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM VALUATION / CONSULTATION CTA CARD */}
        <section className="p-10 sm:p-16 bg-white/[0.03] border border-[#C9A84C]/40 text-center space-y-6 animate-fade-up">
          <h3 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
            Need an HMO compliance <span className="italic text-[#C9A84C] font-normal">audit?</span>
          </h3>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl mx-auto">
            Book a free consultation with our property management specialists. We will review your property's licensing status and advise on optimal yield strategies.
          </p>

          <button
            onClick={onBookConsultation || onNavigateLandlords}
            className="inline-flex items-center gap-3 px-10 py-4.5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-dm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-95"
          >
            <span>BOOK FREE CONSULTATION</span>
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
        onNavigateFreeValuation={onNavigateFreeValuation || onBookConsultation}
      />

    </div>
  );
}
