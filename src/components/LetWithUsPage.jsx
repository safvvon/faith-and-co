import React, { useEffect } from 'react';
import { ShieldCheck, Users, FileCheck, UserCheck, Key, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

const STATS_DATA = [
  { value: '32', label: 'London Boroughs' },
  { value: 'Zero', label: 'Voids on Guaranteed Rent' },
  { value: '24hr', label: 'Valuation Response' },
  { value: '92%', label: 'Landlords Who Stay' }
];

const BENEFITS_GRID = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Income',
    desc: 'Choose guaranteed rent and receive a fixed sum every month with no voids, no arrears and no fees deducted, for terms up to five years.'
  },
  {
    icon: Users,
    title: 'Specialist Demand',
    desc: 'We place property with councils, care operators and corporates, audiences most high street agents never reach, creating more demand for your home.'
  },
  {
    icon: FileCheck,
    title: 'Compliance Handled',
    desc: 'Gas Safety, EICR, EPC and HMO licensing managed in-house. We track every deadline so you stay fully protected without the paperwork.'
  },
  {
    icon: UserCheck,
    title: 'One Point of Contact',
    desc: 'A named person who knows you and your property, answers the phone, and makes decisions quickly. No call centres, no being passed around.'
  },
  {
    icon: Key,
    title: 'Quality Tenants',
    desc: 'Thorough referencing, credit checks and Right to Rent verification mean the people in your property are reliable and properly vetted.'
  },
  {
    icon: TrendingUp,
    title: 'Maximised Returns',
    desc: 'From HMO room-by-room letting to whole-block operator deals, we structure lettings to get the most from your asset.'
  }
];

const SERVICE_LEVELS = [
  {
    number: '01',
    title: 'Let Only',
    desc: 'We find and reference a quality tenant. You manage the tenancy from there.'
  },
  {
    number: '02',
    title: 'Rent Collection',
    desc: 'We secure the tenant and collect the rent, chasing any arrears for you.'
  },
  {
    number: '03',
    title: 'Fully Managed',
    desc: 'Completely hands-off. We handle everything from repairs to renewals.'
  },
  {
    number: '04',
    title: 'Guaranteed Rent',
    desc: 'Fixed monthly income, occupied or not. No voids, no fees, no worry.'
  }
];

const GETTING_STARTED_STEPS = [
  {
    step: '01',
    title: 'Free Valuation',
    desc: "Request a free, no-obligation valuation and we'll assess your property's full potential."
  },
  {
    step: '02',
    title: 'Choose Your Service',
    desc: "We'll recommend the right level of service and explain your options clearly."
  },
  {
    step: '03',
    title: 'We Get to Work',
    desc: 'We market, reference and let your property to the right tenant or operator.'
  },
  {
    step: '04',
    title: 'You Receive Income',
    desc: 'Sit back and receive your rent, with as much or as little involvement as you want.'
  }
];

export default function LetWithUsPage({
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
  onBookValuation,
  onContactTeam,
  onBrowseResidences
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-[#FFFFFF] font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* ----------------------------------------------------
          4. HERO SECTION (100% FULL WIDTH)
      ---------------------------------------------------- */}
      <header className="relative w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-[rgba(255,255,255,0.07)] overflow-hidden">
        <div className="w-full relative z-10 space-y-8 animate-fade-up">
          {/* Small Gold Eyebrow */}
          <div>
            <span className="inline-block px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-dm tracking-[0.25em] font-medium uppercase animate-float-slow">
              FOR LANDLORDS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cormorant font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.05]">
            Let your property with <span className="italic text-[#C9A84C] font-normal">confidence</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-dm text-lg sm:text-xl lg:text-2xl font-light text-white/80 leading-relaxed max-w-5xl">
            Faith &amp; Co gives landlords more than a tenant. We give you access to the full breadth of the London market, the certainty of guaranteed income if you want it, and a team that treats your property as if it were our own.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onBookValuation || onContactTeam}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#060E16] font-dm text-sm sm:text-base font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-95"
            >
              <span>REQUEST A VALUATION</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            {onRegisterLandlord && (
              <button
                onClick={onRegisterLandlord}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-dm text-sm sm:text-base font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer rounded-none active:scale-95"
              >
                REGISTER AS LANDLORD
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------
          5. STATISTICS BAR (100% FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full border-b border-[rgba(255,255,255,0.07)] py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#04090F]/50">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-[rgba(255,255,255,0.07)]">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="space-y-2 p-4">
              <span className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-[#C9A84C] font-light block">
                {stat.value}
              </span>
              <span className="font-dm text-xs tracking-[0.2em] text-white/70 uppercase block font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          6. WHY LET WITH US (100% FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-32">
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            More demand, more security, <span className="italic text-[#C9A84C] font-normal">more peace of mind</span>
          </h2>
          <p className="font-dm text-base text-white/70 font-light leading-relaxed">
            Most agents can only offer your property to the standard rental market. We open doors others can't, which means stronger terms, faster lets and longer tenancies for you.
          </p>
        </div>

        {/* 3-Column Grid of Six Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS_GRID.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group border border-[rgba(255,255,255,0.07)] bg-[#04090F]/50 p-8 sm:p-10 transition-all duration-300 hover:border-[#C9A84C]/60 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 border border-[#C9A84C]/30 bg-[#C9A84C]/5 flex items-center justify-center mb-6 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#C9A84C] group-hover:text-[#E8C878] transition-colors duration-300" />
                  </div>

                  <h3 className="font-cormorant text-2xl font-light text-white mb-3 tracking-wide group-hover:text-amber-100 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="font-dm text-sm font-light text-white/60 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------
          7. SERVICE LEVELS SECTION
      ---------------------------------------------------- */}
      <section className="w-full bg-[#081320] border-y border-[rgba(255,255,255,0.07)] py-24 sm:py-32 px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1450px] mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <span className="font-dm text-xs tracking-[0.25em] text-[#C9A84C] font-semibold uppercase block">
            SERVICE OPTIONS
          </span>
          <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
            Choose Your Level of <span className="italic text-[#C9A84C] font-normal">Service</span>
          </h2>
          <p className="font-dm text-sm sm:text-base font-light text-white/60 max-w-xl mx-auto leading-relaxed">
            From finding a tenant to handing over everything, pick the level that suits you.
          </p>
        </div>

        {/* 4 Equal Service Cards */}
        <div className="max-w-[1450px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_LEVELS.map((service) => (
            <div
              key={service.number}
              className="group border border-[rgba(255,255,255,0.08)] bg-[#060E16]/80 p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#C9A84C]/60 hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                <span className="font-cormorant text-2xl text-[#C9A84C] font-light block">
                  {service.number}
                </span>
                <h3 className="font-cormorant text-2xl font-light text-white tracking-wide group-hover:text-amber-100 transition-colors">
                  {service.title}
                </h3>
                <p className="font-dm text-xs text-white/60 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div 
                onClick={onRegisterLandlord || onContactTeam}
                className="inline-flex items-center gap-2 font-dm text-[11px] font-semibold tracking-[0.2em] text-[#C9A84C] group-hover:text-[#E8C878] cursor-pointer transition-colors pt-4 border-t border-[rgba(255,255,255,0.06)]"
              >
                <span>LEARN MORE</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          8. GETTING STARTED
      ---------------------------------------------------- */}
      <section className="w-full max-w-[1300px] mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="font-dm text-xs tracking-[0.25em] text-[#C9A84C] font-semibold uppercase block">
            SIMPLE PROCESS
          </span>
          <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
            Getting Started Is <span className="italic text-[#C9A84C] font-normal">Simple</span>
          </h2>
        </div>

        {/* 4-Step Horizontal Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(255,255,255,0.07)]">
          {GETTING_STARTED_STEPS.map((item, idx) => (
            <div key={item.step} className={`space-y-4 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
              <span className="font-cormorant text-4xl text-[#C9A84C] font-light block">
                {item.step}
              </span>
              <h3 className="font-cormorant text-2xl font-light text-white tracking-wide">
                {item.title}
              </h3>
              <p className="font-dm text-xs font-light text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          9. FINAL CTA
      ---------------------------------------------------- */}
      <section className="relative w-full py-28 sm:py-40 px-6 text-center border-t border-[rgba(255,255,255,0.07)] bg-[#060E16] overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
            Ready to let with <span className="italic text-[#C9A84C] font-normal">Faith &amp; Co?</span>
          </h2>

          <p className="font-dm text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            Book a free, no-obligation valuation today and discover what your property could really achieve.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookValuation || onContactTeam}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#060E16] font-dm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-95"
            >
              <span>BOOK A FREE VALUATION</span>
            </button>

            <button
              onClick={onContactTeam}
              className="px-8 sm:px-10 py-4 sm:py-5 border border-white/30 text-white hover:border-[#C9A84C] hover:text-[#E8C878] font-dm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer rounded-none"
            >
              <span>SPEAK TO THE TEAM</span>
            </button>
          </div>
        </div>
      </section>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateHome={onNavigateHome}
        onNavigateProperties={onNavigateProperties || onBrowseResidences}
        onNavigateLandlords={onNavigateLandlords}
        onNavigateRentersRights={onNavigateRentersRights}
        onNavigateHmoLicensing={onNavigateHmoLicensing}
        onNavigateGuideToLetting={onNavigateGuideToLetting}
        onNavigateContact={onNavigateContact || onContactTeam}
        onNavigateRegisterLandlord={onNavigateRegisterLandlord}
        onNavigateLetWithUs={onNavigateLetWithUs}
        onNavigateFreeValuation={onNavigateFreeValuation || onBookValuation}
      />

    </div>
  );
}
