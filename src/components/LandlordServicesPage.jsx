import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus, X, ShieldCheck, CheckCircle2, Phone, Mail, ChevronRight, Clock, Award, Building, UserCheck } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';
import useScrollReveal from '../hooks/useScrollReveal';

const SERVICES_GRID = [
  {
    number: '01',
    title: 'PROPERTY LETTING',
    desc: 'Professional marketing, tenant sourcing and viewings designed to reduce vacancy.'
  },
  {
    number: '02',
    title: 'TENANT MANAGEMENT',
    desc: 'From onboarding to communication, we manage the tenant relationship professionally.'
  },
  {
    number: '03',
    title: 'RENT COLLECTION',
    desc: 'Reliable rent collection and clear financial reporting for complete visibility.'
  },
  {
    number: '04',
    title: 'PROPERTY MAINTENANCE',
    desc: 'Fast coordination of repairs, maintenance and trusted contractors.'
  },
  {
    number: '05',
    title: 'INSPECTIONS',
    desc: 'Regular property inspections help protect the condition and long-term value of your asset.'
  },
  {
    number: '06',
    title: 'COMPLIANCE',
    desc: 'Stay on top of essential property responsibilities and regulatory requirements.'
  }
];

const STEPS_LIST = [
  {
    step: '01',
    title: 'TELL US ABOUT YOUR PROPERTY',
    desc: 'Share your property details and management expectations during a private consultation.'
  },
  {
    step: '02',
    title: 'WE PREPARE & MARKET IT',
    desc: 'Professional photography, tenant vetting and high-visibility marketing to qualified tenants.'
  },
  {
    step: '03',
    title: 'WE MANAGE THE TENANCY',
    desc: 'Comprehensive day-to-day administration, maintenance handling and rent collection.'
  },
  {
    step: '04',
    title: 'YOU ENJOY PEACE OF MIND',
    desc: 'Receive transparent monthly statements while your property asset is expertly preserved.'
  }
];

const BENEFITS_LIST = [
  {
    title: 'PEACE OF MIND',
    desc: 'We handle the everyday responsibilities of property ownership with white-glove diligence.'
  },
  {
    title: 'BETTER TENANTS',
    desc: 'A rigorous professional approach to tenant sourcing, background verification and management.'
  },
  {
    title: 'PROTECTED PROPERTY',
    desc: 'Regular scheduled inspections and preventative maintenance help maintain your asset’s condition.'
  },
  {
    title: 'LESS ADMINISTRATION',
    desc: 'We take care of all technical details, tenant communications, compliance and legal paperwork.'
  }
];

const FAQ_ITEMS = [
  {
    question: 'What properties do you manage?',
    answer: 'We specialise in premium residential properties including townhouses, modern apartments, period villas, and countryside estates across London and key UK metropolitan areas.'
  },
  {
    question: 'Do you manage properties outside London?',
    answer: 'Yes. While our headquarters are in Mayfair, London, we manage high-end residential portfolios in Manchester, Birmingham, Brighton, Surrey, and the Cotswolds.'
  },
  {
    question: 'How do you find and select tenants?',
    answer: 'We employ multi-stage vetting including identity verification, credit checks, employment reference validation, and landlord background checks to ensure reliable, high-quality tenants.'
  },
  {
    question: 'How is rent collected?',
    answer: 'Rent is collected via automated direct debit into protected client accounts, with instant statements generated and funds transferred directly to your designated bank account.'
  },
  {
    question: 'How often will my property be inspected?',
    answer: 'We conduct comprehensive quarterly property inspections complete with photographic reports sent directly to you.'
  },
  {
    question: 'How are maintenance issues handled?',
    answer: 'We operate a 24/7 dedicated maintenance desk with vetted, insured tradespeople. Minor repairs are handled under agreed authorization limits, while major items require your approval.'
  },
  {
    question: 'What does your management service include?',
    answer: 'Our full management service includes tenant sourcing, legal documentation, deposit protection, rent collection, 24/7 maintenance, regular inspections, annual tax summaries, and full statutory compliance.'
  },
  {
    question: 'Can I switch my existing property management company?',
    answer: 'Yes. We offer a seamless management transfer service where we coordinate directly with your existing agent to handle all tenant notices, keys, and documentation without disruption.'
  }
];

export default function LandlordServicesPage({ 
  onNavigateHome, 
  onNavigateProperties,
  onExploreProperties, 
  onNavigateConsultation, 
  onNavigateRentersRights, 
  onNavigateHmoLicensing, 
  onNavigateGuideToLetting, 
  onNavigateRegisterLandlord, 
  onNavigateLetWithUs, 
  onNavigateFreeValuation,
  onNavigateContact 
}) {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', propertyType: '', location: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToConsultation = () => {
    document.getElementById('landlord-consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* ----------------------------------------------------
          1. HERO HEADER AREA (100% FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="relative w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-[rgba(255,255,255,0.07)] bg-[#090a14] overflow-hidden text-center">
        <div className="w-full relative z-10 space-y-8 animate-fade-up">
          <div>
            <span className="inline-block px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-dm tracking-[0.25em] font-medium uppercase animate-float-slow">
              FOR LANDLORDS IN LONDON &amp; HOME COUNTIES
            </span>
          </div>

          <h1 className="font-cormorant font-light text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08]">
            Landlord Services <span className="italic text-[#C9A84C] font-normal">&amp; Property Management</span>
          </h1>

          <p className="font-dm text-lg sm:text-xl lg:text-2xl font-light text-white/80 tracking-wide max-w-5xl mx-auto leading-relaxed">
            Professional, bespoke property letting, tenant management, rent collection, and statutory compliance for property owners who expect absolute peace of mind.
          </p>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 font-dm">
            <button
              onClick={onNavigateRegisterLandlord || scrollToConsultation}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-sm sm:text-base tracking-[0.25em] font-bold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95 rounded-none"
            >
              <span>REGISTER AS LANDLORD</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {onNavigateFreeValuation && (
              <button
                onClick={onNavigateFreeValuation}
                className="px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all cursor-pointer inline-flex items-center gap-2 rounded-none"
              >
                <span>FREE VALUATION</span>
                <ChevronRight className="w-4 h-4 text-[#C9A84C]" />
              </button>
            )}

            <button
              onClick={onNavigateGuideToLetting}
              className="px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all cursor-pointer inline-flex items-center gap-2 rounded-none"
            >
              <span>GUIDE TO LETTING</span>
              <ChevronRight className="w-4 h-4 text-[#C9A84C]" />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. INTRODUCTION (100% FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-20 sm:py-32 border-b border-white/10">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] block mb-3 font-dm">
            OUR APPROACH
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Statement & Image */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white leading-tight tracking-tight">
                More than standard <span className="italic text-[#C9A84C] font-normal">property management</span>
              </h2>

              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed font-dm">
                From finding high-quality tenants to managing maintenance, compliance, and day-to-day operations, we take care of every detail so you can enjoy your investment effortless.
              </p>

              <div className="pt-4 overflow-hidden border border-white/15 shadow-2xl rounded-none">
                <img
                  src="/properties/london_mayfair.png"
                  alt="Architectural London Property"
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Three Pillars */}
            <div className="lg:col-span-6 space-y-8 bg-white/[0.03] border border-white/10 p-8 sm:p-12 font-dm animate-slide-right shadow-2xl">
              <div className="space-y-2 pb-6 border-b border-white/10 group hover:pl-2 transition-all duration-300">
                <span className="text-[#C9A84C] font-mono text-xs tracking-widest block animate-float-slow">01</span>
                <h3 className="font-cormorant font-light text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#C9A84C] transition-colors">
                  Protect Your Asset
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed font-dm">
                  Rigorous screening, quarterly physical inspections, and proactive maintenance keep your building in peak architectural condition.
                </p>
              </div>

              <div className="space-y-2 pb-6 border-b border-white/10 group hover:pl-2 transition-all duration-300">
                <span className="text-[#C9A84C] font-mono text-xs tracking-widest block animate-float-slow">02</span>
                <h3 className="font-cormorant font-light text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#C9A84C] transition-colors">
                  Simplify Your Ownership
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed font-dm">
                  A dedicated private account manager handles tenant queries, legal compliance, and contractor coordination on your behalf.
                </p>
              </div>

              <div className="space-y-2 group hover:pl-2 transition-all duration-300">
                <span className="text-[#C9A84C] font-mono text-xs tracking-widest block animate-float-slow">03</span>
                <h3 className="font-cormorant font-light text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#C9A84C] transition-colors">
                  Maximise Your Yield
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed font-dm">
                  Strategic rental pricing, minimal void periods, and timely rent collection maximize net returns year after year.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. CORE SERVICES
      ---------------------------------------------------- */}
      <section id="core-services" className="max-w-[1500px] mx-auto px-6 lg:px-12 py-20 sm:py-28 font-dm">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
            LANDLORD SERVICES
          </span>
          <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
            Complete property <span className="italic text-[#C9A84C] font-normal">peace of mind</span>
          </h2>
        </div>

        {/* 2x3 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_GRID.map((service) => (
            <div
              key={service.number}
              className="group p-8 bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/50 hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm tracking-widest text-[#C9A84C] group-hover:-translate-y-1 transition-transform duration-300">
                  {service.number}
                </span>
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 group-hover:text-[#C9A84C] group-hover:border-[#C9A84C] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-cormorant font-light text-2xl text-white tracking-tight group-hover:text-[#C9A84C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#C9A84C]/40 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          4. HOW IT WORKS
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-20 sm:py-28 border-y border-white/10 font-dm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              ONBOARDING PROCESS
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
              Simple for you, <span className="italic text-[#C9A84C] font-normal">thorough for us</span>
            </h2>
          </div>

          {/* 4-Step Process Grid with Connecting Line */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Background Line on Desktop */}
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-[1px] bg-gradient-to-r from-[#C9A84C]/60 via-white/20 to-[#C9A84C]/60 z-0" />

            {STEPS_LIST.map((step) => (
              <div
                key={step.step}
                className="relative z-10 p-6 bg-white/[0.03] border border-white/10 space-y-4 shadow-xl hover:border-[#C9A84C]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-black/60 border border-white/20 flex items-center justify-center font-mono text-sm font-semibold text-[#C9A84C] shadow-md">
                  {step.step}
                </div>

                <h3 className="font-cormorant font-light text-xl text-white tracking-tight leading-snug">
                  {step.title}
                </h3>

                <p className="text-white/60 text-xs font-light leading-relaxed font-dm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          5. PROPERTY MANAGEMENT EXPERIENCE
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28 font-dm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Interior Photo */}
          <div className="lg:col-span-6 overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="/properties/gallery_kitchen.png"
              alt="High Spec Kitchen Management"
              className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Copy & Stat Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
                LANDLORD DEDICATION
              </span>
              <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight leading-tight">
                Your property, <span className="italic text-[#C9A84C] font-normal">our priority</span>
              </h2>
              <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed font-dm">
                Your property deserves more than basic administration. Our approach combines responsive management, careful tenant selection, and consistent attention to the condition of your investment.
              </p>
            </div>

            {/* Stats Callouts */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="font-cormorant font-light text-3xl sm:text-4xl text-white block">24/7</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase block font-dm">EMERGENCY SUPPORT</span>
              </div>

              <div className="space-y-1">
                <span className="font-cormorant font-light text-3xl sm:text-4xl text-white block">100%</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase block font-dm">TRANSPARENT REPORTING</span>
              </div>

              <div className="space-y-1">
                <span className="font-cormorant font-light text-2xl sm:text-3xl text-[#C9A84C] block">DIRECT</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase block font-dm">PROPERTY TEAM</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          6. LANDLORD BENEFITS
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-20 sm:py-28 border-y border-white/10 font-dm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              THE ADVANTAGE
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
              Why landlords <span className="italic text-[#C9A84C] font-normal">choose Faith &amp; Co</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {BENEFITS_LIST.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#C9A84C]/40 transition-colors shadow-xl"
              >
                <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed font-dm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          7. PROPERTY OWNER TESTIMONIAL
      ---------------------------------------------------- */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 sm:py-28 text-center font-dm">
        <div className="relative p-10 sm:p-16 bg-white/[0.03] border border-white/15 space-y-6 shadow-2xl">
          
          <span className="text-6xl text-[#C9A84C]/50 font-cormorant leading-none block">“</span>

          <blockquote className="font-cormorant font-light italic text-2xl sm:text-4xl text-white leading-relaxed tracking-tight max-w-3xl mx-auto">
            "Having a professional team manage our portfolio has completely changed our property experience. Outstanding diligence and communication."
          </blockquote>

          <div className="pt-4 border-t border-white/10 max-w-xs mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block font-dm">
              PRIVATE LANDLORD
            </span>
            <span className="text-[11px] font-light text-white/50 tracking-wider uppercase block mt-0.5 font-dm">
              MAYFAIR &amp; KENSINGTON PORTFOLIO · LONDON
            </span>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          8. LANDLORD CTA CONSULTATION FORM
      ---------------------------------------------------- */}
      <section id="landlord-consultation" className="relative py-24 sm:py-32 overflow-hidden bg-black flex items-center justify-center border-y border-white/15 font-dm">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/properties/london_townhouse.png"
            alt="London Townhouse Exterior at Sunset"
            className="w-full h-full object-cover filter brightness-[0.35]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
            MANAGEMENT CONSULTATION
          </span>

          <h2 className="font-cormorant font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            Ready to manage your <span className="italic text-[#C9A84C] font-normal">property differently?</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Tell us about your property and discover how our dedicated management service can work for you.
          </p>

          {formSubmitted ? (
            <div className="p-8 bg-[#090a14] border border-[#C9A84C]/50 max-w-md mx-auto space-y-3 backdrop-blur-md animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-[#C9A84C] mx-auto" />
              <h3 className="font-cormorant font-light text-2xl text-white">Consultation Requested</h3>
              <p className="text-xs text-white/80 font-light leading-relaxed font-dm">
                Thank you. Our senior property manager will reach out within 2 hours to discuss your property requirements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleConsultationSubmit} className="max-w-xl mx-auto space-y-4 text-left pt-4 bg-[#090a14]/90 backdrop-blur-xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-dm">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none font-dm"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-dm">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@address.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none font-dm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-dm">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 20 8574 1700"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none font-dm"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-dm">
                    PROPERTY LOCATION
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kensington / W1"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none font-dm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl rounded-none active:scale-98 mt-4 font-dm"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>
      </section>

      {/* ----------------------------------------------------
          9. FAQ
      ---------------------------------------------------- */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 sm:py-28 font-dm">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
            LANDLORD FREQUENT QUESTIONS
          </span>
          <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
            Frequently asked <span className="italic text-[#C9A84C] font-normal">questions</span>
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300 rounded-none"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-cormorant font-light text-xl sm:text-2xl text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className={`p-1.5 text-white transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#C9A84C]' : ''}`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/70 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 font-dm animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateHome={onNavigateHome}
        onNavigateProperties={onNavigateProperties || onExploreProperties}
        onNavigateLandlords={scrollToConsultation}
        onNavigateRentersRights={onNavigateRentersRights}
        onNavigateHmoLicensing={onNavigateHmoLicensing}
        onNavigateGuideToLetting={onNavigateGuideToLetting}
        onNavigateContact={onNavigateContact}
        onNavigateRegisterLandlord={onNavigateRegisterLandlord}
        onNavigateLetWithUs={onNavigateLetWithUs}
        onNavigateFreeValuation={onNavigateFreeValuation}
      />

      {/* ----------------------------------------------------
          11. STICKY MOBILE CTA BAR
      ---------------------------------------------------- */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-black/90 backdrop-blur-lg border-t border-white/15 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase text-white/60 tracking-wider block">PROPERTY SERVICES</span>
          <span className="text-xs font-semibold text-white">Landlord Direct</span>
        </div>
        <button
          onClick={scrollToConsultation}
          className="px-6 py-3 rounded-full bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-lg active:scale-95"
        >
          BOOK A CONSULTATION →
        </button>
      </div>

    </div>
  );
}
