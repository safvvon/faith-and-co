import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Key, Calculator, Check, ArrowDown } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

const TOC_ITEMS = [
  { id: 'preparing-to-let', label: '1. Preparing to Let' },
  { id: 'legal-requirements', label: '2. Legal Requirements' },
  { id: 'finding-a-tenant', label: '3. Finding a Tenant' },
  { id: 'the-tenancy', label: '4. The Tenancy' },
  { id: 'managing-the-let', label: '5. Managing the Let' },
  { id: 'tax-and-finance', label: '6. Tax & Finance' }
];

const PREPARATION_STEPS = [
  {
    num: '01',
    title: 'Cleanliness & Maintenance',
    desc: 'Deep clean carpets, appliances, and windows. Resolve minor cosmetic defects prior to viewings to maximize appeal.'
  },
  {
    num: '02',
    title: 'Furnished vs. Unfurnished',
    desc: 'Furnished residences appeal strongly to corporate executives, while unfurnished properties attract long-term occupants.'
  },
  {
    num: '03',
    title: 'Professional Photography',
    desc: 'High-resolution architectural photography and floor plans elevate market visibility and prospective tenant interest.'
  },
  {
    num: '04',
    title: 'Evidence-Based Pricing',
    desc: 'Setting an evidence-based rental price based on current micro-market data prevents initial stagnation.'
  }
];

const LEGAL_CHECKLIST = [
  { title: 'Gas Safety Certificate', desc: 'Annual check carried out by a Gas Safe registered engineer.' },
  { title: 'EICR (Electrical Inspection)', desc: 'Electrical Safety Certificate required every 5 years.' },
  { title: 'Energy Performance (EPC)', desc: 'Must meet minimum EPC rating standards (Band E or above).' },
  { title: 'Smoke & CO Alarms', desc: 'Installed on every storey and tested at tenancy start.' },
  { title: 'Tenancy Deposit Protection', desc: 'Registering deposits in a government-approved scheme within 30 days.' },
  { title: 'Right to Rent Checks', desc: 'Mandatory immigration status checks for all adult occupiers.' },
  { title: 'HMO & Local Licensing', desc: 'Checking borough mandatory, additional, or selective licensing.' }
];

export default function GuideToLettingPage({
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
  const [activeSection, setActiveSection] = useState('preparing-to-let');

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
      
      {/* 1. HERO HEADER AREA (SPACIOUS FULL WIDTH) */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-b border-white/10 bg-[#090a14] text-center">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-up">
          <div>
            <span className="inline-block px-3.5 py-1.5 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-dm tracking-[0.25em] font-medium uppercase">
              LANDLORD REFERENCE GUIDE
            </span>
          </div>

          <h1 className="font-cormorant font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
            A landlord’s guide to <span className="italic text-[#C9A84C] font-normal">letting in London</span>
          </h1>

          <p className="font-dm text-sm sm:text-lg font-light text-white/70 tracking-wide max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about preparing your property, meeting statutory legal requirements, selecting high-caliber tenants, and maximizing yield.
          </p>

          <div className="pt-4 flex justify-center font-dm">
            <button
              onClick={() => scrollToSection('preparing-to-let')}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95 rounded-none font-dm"
            >
              <span>EXPLORE GUIDE</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY TOP NAVIGATION BAR */}
      <div className="sticky top-0 z-30 bg-[#090a14]/95 backdrop-blur-md border-b border-white/10 py-4 px-6">
        <div className="max-w-[1450px] mx-auto flex items-center justify-center sm:justify-start gap-3 overflow-x-auto no-scrollbar scroll-smooth">
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

      {/* 3. MAIN GUIDE CONTENT (SPACIOUS WIDE LAYOUT — NO SIDE CONGESTION) */}
      <main className="w-full max-w-[1450px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24 space-y-24 font-dm">
        
        {/* SECTION 01 — PREPARING TO LET */}
        <section id="preparing-to-let" className="scroll-mt-28 space-y-10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 01</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              Preparing Your Property to <span className="italic text-[#C9A84C] font-normal">Let</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left intro & quote (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                First impressions set the standard for the entire tenancy. Preparing your residential property effectively ensures attracting high-caliber occupants, securing optimal rental yields, and minimizing potential void periods.
              </p>
              
              <div className="p-6 bg-[#C9A84C]/[0.05] border-l-2 border-[#C9A84C] space-y-2">
                <p className="font-cormorant italic text-lg sm:text-xl text-white/90 font-light leading-relaxed">
                  "A property priced correctly from the outset typically lets faster and achieves a higher overall annual return than one that starts overpriced and sits vacant."
                </p>
              </div>
            </div>

            {/* Right 4 preparation cards (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PREPARATION_STEPS.map((step, idx) => (
                <div key={idx} className="p-6 bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-300 space-y-3 rounded-sm">
                  <span className="font-mono text-xs text-[#C9A84C] block">{step.num}</span>
                  <h3 className="font-cormorant text-2xl text-white font-light">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 02 — LEGAL REQUIREMENTS */}
        <section id="legal-requirements" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 02</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              Mandatory Legal &amp; Safety <span className="italic text-[#C9A84C] font-normal">Requirements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left intro & banner (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                Landlords in the UK operate within a strict regulatory framework. Ensuring continuous statutory compliance protects tenant safety and guards you against severe financial penalties.
              </p>
              
              <div className="p-6 bg-[#0d0f22] border border-[#C9A84C]/30 space-y-4">
                <h4 className="font-cormorant text-xl text-white font-light">Compliance Peace of Mind</h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Faith &amp; Co tracks mandatory safety certificates and renewal deadlines on behalf of landlords, managing continuous legal administration.
                </p>
                <button
                  onClick={onNavigateHmoLicensing || onBookValuation}
                  className="inline-flex items-center gap-2 text-xs font-dm font-semibold text-[#C9A84C] tracking-wider uppercase hover:underline"
                >
                  <span>HMO &amp; Licensing Guide</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right legal cards (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEGAL_CHECKLIST.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.03] border border-white/10 flex items-start gap-4 rounded-sm hover:border-white/20 transition-colors">
                  <div className="w-6 h-6 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-cormorant text-xl text-white font-light">{item.title}</h4>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 03 — FINDING A TENANT */}
        <section id="finding-a-tenant" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 03</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              Finding &amp; Vetting <span className="italic text-[#C9A84C] font-normal">Tenants</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3 rounded-sm hover:border-[#C9A84C]/40 transition-colors">
              <span className="font-mono text-xs text-[#C9A84C] block">STEP 01</span>
              <h3 className="font-cormorant text-2xl text-white font-light">Targeted Marketing</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Listing across major UK portals, social channels, and direct corporate relocation networks to attract high-grade occupants.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3 rounded-sm hover:border-[#C9A84C]/40 transition-colors">
              <span className="font-mono text-xs text-[#C9A84C] block">STEP 02</span>
              <h3 className="font-cormorant text-2xl text-white font-light">Rigorous Vetting</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Comprehensive credit checks, employer income verification, identity validation, and direct references from previous landlords.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3 rounded-sm hover:border-[#C9A84C]/40 transition-colors">
              <span className="font-mono text-xs text-[#C9A84C] block">STEP 03</span>
              <h3 className="font-cormorant text-2xl text-white font-light">Right to Rent</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Verifying legal immigration status for all adult occupiers prior to granting tenancy in accordance with Home Office guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 04 — THE TENANCY */}
        <section id="the-tenancy" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 04</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              Tenancy Agreements &amp; <span className="italic text-[#C9A84C] font-normal">Inventories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <h3 className="font-cormorant text-2xl text-white font-light">1. Legally Sound Contracts</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Drafting tailored agreements clearly defining tenant obligations, rent payment schedules, notice periods, and maintenance expectations.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <h3 className="font-cormorant text-2xl text-white font-light">2. Photographic Inventory</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                A thorough check-in inventory with high-resolution photos documents property condition before move-in, preventing end-of-tenancy deposit disputes.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-3">
              <h3 className="font-cormorant text-2xl text-white font-light">3. Legislative Protection</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Staying fully compliant with statutory shifts, including periodic tenancies and possession grounds under recent acts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 05 — MANAGING THE LET */}
        <section id="managing-the-let" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 05</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              Choosing the Right <span className="italic text-[#C9A84C] font-normal">Management Level</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-4 rounded-sm">
              <h3 className="font-cormorant text-3xl text-[#C9A84C] font-light">Let Only</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Ideal for hands-on landlords. We handle marketing, viewings, tenant vetting, and contract execution.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-4 rounded-sm">
              <h3 className="font-cormorant text-3xl text-[#C9A84C] font-light">Rent Collection</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Letting service plus automated monthly rent processing, arrears chasing, and financial statements.
              </p>
            </div>

            <div className="p-8 bg-white/[0.04] border border-[#C9A84C]/60 space-y-4 rounded-sm relative shadow-2xl">
              <span className="text-[9px] font-mono text-[#090a14] bg-[#C9A84C] px-2.5 py-1 uppercase tracking-widest font-semibold absolute top-4 right-4">RECOMMENDED</span>
              <h3 className="font-cormorant text-3xl text-[#C9A84C] font-light">Fully Managed</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Complete hands-off peace of mind. Includes 24/7 emergency repairs, property inspections, compliance tracking, and dedicated account management.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06 — TAX & FINANCE */}
        <section id="tax-and-finance" className="scroll-mt-28 space-y-10 pt-10 border-t border-white/10 animate-fade-up">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">SECTION 06</span>
            <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
              Tax &amp; Financial <span className="italic text-[#C9A84C] font-normal">Planning</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                Rental income from UK property is subject to income tax or corporation tax depending on your ownership structure. Maintaining organized records and keeping receipts for allowable expenses (management fees, repairs, safety checks) is essential for financial efficiency.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 bg-[#C9A84C]/[0.04] border border-[#C9A84C]/30 text-center">
              <p className="text-xs text-white/75 font-light leading-relaxed">
                <strong className="text-[#C9A84C] font-medium block mb-1">Tax Disclaimer</strong>
                This guide is provided for general informational purposes. Always consult a qualified tax accountant for advice tailored to your property portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM VALUATION CTA CARD */}
        <section className="p-10 sm:p-16 bg-white/[0.03] border border-[#C9A84C]/40 text-center space-y-6 animate-fade-up">
          <h3 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
            Ready to let with <span className="italic text-[#C9A84C] font-normal">confidence?</span>
          </h3>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl mx-auto">
            Book a free, no-obligation valuation today. Our specialist team will analyze your property and guide you through every step of the letting process.
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
