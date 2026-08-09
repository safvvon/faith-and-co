import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus, X, ShieldCheck, CheckCircle2, Phone, Mail, ChevronRight, Clock, Award, Building, UserCheck } from 'lucide-react';

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

export default function LandlordServicesPage({ onNavigateConsultation, onExploreProperties }) {
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
    <div className="w-full min-h-screen bg-[#090a14] text-white font-montserrat selection:bg-amber-200 selection:text-black relative">
      
      {/* ----------------------------------------------------
          1. HERO SECTION
      ---------------------------------------------------- */}
      <section className="relative w-full h-[88vh] sm:h-[92vh] overflow-hidden bg-black flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/properties/cotswolds_estate.png"
            alt="UK Residential Property Management"
            className="w-full h-full object-cover animate-hero-zoom filter brightness-[0.88]"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a14] via-black/40 to-black/60 pointer-events-none" />

        {/* Top Label */}
        <div className="relative z-30 px-6 sm:px-12 pt-28 sm:pt-32">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs tracking-[0.25em] font-medium uppercase shadow-lg">
            FOR LANDLORDS
          </span>
        </div>

        {/* Center/Bottom Hero Content */}
        <div className="relative z-30 px-6 sm:px-12 lg:px-16 pb-16 max-w-5xl space-y-6 animate-fade-up">
          <h1 className="font-montserrat font-light text-4xl sm:text-7xl lg:text-8xl text-white tracking-[0.05em] leading-[1.05] drop-shadow-xl">
            PROPERTY<br />
            MANAGED<br />
            PROPERLY.
          </h1>

          <p className="text-white/85 text-sm sm:text-xl font-light tracking-wide max-w-2xl font-montserrat leading-relaxed">
            "Professional property management for landlords who expect more."
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToConsultation}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white hover:bg-amber-200 text-black text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-2xl active:scale-95"
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md transition-all cursor-pointer"
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. INTRODUCTION
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-200/90 block mb-3">
            OUR APPROACH
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Statement & Image */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white leading-tight tracking-[0.05em]">
                MORE THAN<br />
                <span className="text-amber-100/90 font-light">PROPERTY MANAGEMENT.</span>
              </h2>

              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed font-montserrat">
                "From finding the right tenants to managing maintenance, compliance and day-to-day operations, we take care of the details so you can focus on your investment."
              </p>

              <div className="pt-4 rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="/properties/london_mayfair.png"
                  alt="Architectural London Property"
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Three Pillars */}
            <div className="lg:col-span-6 space-y-8 bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
              <div className="space-y-2 pb-6 border-b border-white/10">
                <span className="text-amber-200 font-mono text-xs tracking-widest block">01</span>
                <h3 className="font-montserrat font-light text-xl sm:text-2xl text-white tracking-[0.05em]">
                  PROTECT YOUR ASSET
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  Rigorous screening, quarterly physical inspections, and proactive maintenance keep your building in peak architectural condition.
                </p>
              </div>

              <div className="space-y-2 pb-6 border-b border-white/10">
                <span className="text-amber-200 font-mono text-xs tracking-widest block">02</span>
                <h3 className="font-montserrat font-light text-xl sm:text-2xl text-white tracking-[0.05em]">
                  SIMPLIFY YOUR DAY
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  A dedicated private account manager handles tenant queries, legal compliance, and contractor coordination on your behalf.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-amber-200 font-mono text-xs tracking-widest block">03</span>
                <h3 className="font-montserrat font-light text-xl sm:text-2xl text-white tracking-[0.05em]">
                  MAXIMISE YOUR RETURN
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  Strategic rental pricing, minimal void periods, and timely rent collection maximize net yields year after year.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. CORE SERVICES
      ---------------------------------------------------- */}
      <section id="core-services" className="max-w-[1500px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
            LANDLORD SERVICES
          </span>
          <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
            EVERYTHING<br />UNDER CONTROL.
          </h2>
        </div>

        {/* 2x3 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_GRID.map((service) => (
            <div
              key={service.number}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-200/50 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm tracking-widest text-amber-200 group-hover:-translate-y-1 transition-transform duration-300">
                  {service.number}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-amber-200 group-hover:border-amber-200 transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-montserrat font-light text-xl text-white tracking-[0.05em] group-hover:text-amber-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-white/10 group-hover:bg-amber-200/40 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          4. HOW IT WORKS
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase block">
              ONBOARDING PROCESS
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
              SIMPLE FOR YOU.<br />THOROUGH FOR US.
            </h2>
          </div>

          {/* 4-Step Process Grid with Connecting Line */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Background Line on Desktop */}
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-[1px] bg-gradient-to-r from-amber-200/60 via-white/20 to-amber-200/60 z-0" />

            {STEPS_LIST.map((step) => (
              <div
                key={step.step}
                className="relative z-10 p-6 rounded-xl bg-[#141428] border border-white/10 space-y-4 shadow-xl hover:border-amber-200/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center font-mono text-sm font-semibold text-amber-200 shadow-md">
                  {step.step}
                </div>

                <h3 className="font-montserrat font-light text-base text-white tracking-[0.05em] leading-snug">
                  {step.title}
                </h3>

                <p className="text-white/60 text-xs font-light leading-relaxed font-montserrat">
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
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Interior Photo */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="/properties/gallery_kitchen.png"
              alt="High Spec Kitchen Management"
              className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Copy & Stat Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
                LANDLORD DEDICATION
              </span>
              <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em] leading-tight">
                YOUR PROPERTY.<br />
                <span className="text-amber-100/90 font-light">OUR RESPONSIBILITY.</span>
              </h2>
              <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed">
                "Your property deserves more than basic administration. Our approach combines responsive management, careful tenant selection and consistent attention to the condition of your investment."
              </p>
            </div>

            {/* Stats Callouts */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="font-montserrat font-light text-3xl sm:text-4xl text-white block">24/7</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase block">EMERGENCY SUPPORT</span>
              </div>

              <div className="space-y-1">
                <span className="font-montserrat font-light text-3xl sm:text-4xl text-white block">100%</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase block">TRANSPARENT REPORTING</span>
              </div>

              <div className="space-y-1">
                <span className="font-montserrat font-light text-xl sm:text-2xl text-amber-200 block">DIRECT</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase block">PROPERTY TEAM</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          6. LANDLORD BENEFITS
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
              THE ADVANTAGE
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
              WHY LANDLORDS<br />CHOOSE US.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {BENEFITS_LIST.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-[#141428] border border-white/10 space-y-3 hover:border-amber-200/40 transition-colors shadow-xl"
              >
                <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
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
      <section className="max-w-[1200px] mx-auto px-6 py-20 sm:py-28 text-center">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/15 space-y-6 shadow-2xl">
          
          <span className="text-6xl text-amber-200/40 font-serif leading-none block">“</span>

          <blockquote className="font-montserrat font-light text-2xl sm:text-4xl text-white leading-relaxed tracking-[0.03em] max-w-3xl mx-auto">
            "Having a professional team manage the property has completely changed the way we approach our investment."
          </blockquote>

          <div className="pt-4 border-t border-white/10 max-w-xs mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
              PRIVATE LANDLORD
            </span>
            <span className="text-[11px] font-light text-white/50 tracking-wider uppercase block mt-0.5">
              MAYFAIR &amp; KENSINGTON PORTFOLIO • LONDON
            </span>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          8. LANDLORD CTA CONSULTATION FORM
      ---------------------------------------------------- */}
      <section id="landlord-consultation" className="relative py-24 sm:py-32 overflow-hidden bg-black flex items-center justify-center border-y border-white/15">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/properties/london_townhouse.png"
            alt="London Townhouse Exterior at Sunset"
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
            MANAGEMENT CONSULTATION
          </span>

          <h2 className="font-montserrat font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight">
            READY TO<br />MANAGE YOUR<br />PROPERTY DIFFERENTLY?
          </h2>

          <p className="text-white/80 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            "Tell us about your property and discover how our management service can work for you."
          </p>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 max-w-md mx-auto space-y-3 backdrop-blur-md animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="font-montserrat font-light text-2xl text-white">Consultation Requested</h3>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Thank you. Our senior property manager will reach out within 2 hours to discuss your property requirements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleConsultationSubmit} className="max-w-xl mx-auto space-y-4 text-left pt-4 bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@address.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7000 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5">
                    PROPERTY LOCATION
                  </label>
                  <input
                    type="text"
                    placeholder="City / Area"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95 mt-4"
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
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase block">
            LANDLORD FREQUENT QUESTIONS
          </span>
          <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
            QUESTIONS,<br />ANSWERED.
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-montserrat font-light text-base sm:text-lg text-white tracking-[0.03em]">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/10 text-white transition-transform duration-300 ${isOpen ? 'rotate-45 text-amber-200' : ''}`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/70 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 font-montserrat animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------
          10. FINAL CTA
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-24 sm:py-32 border-t border-white/10 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-montserrat font-light text-4xl sm:text-6xl text-white tracking-[0.05em] leading-tight">
            YOUR PROPERTY.<br />
            <span className="text-amber-100/90 font-light">OUR PRIORITY.</span>
          </h2>

          <p className="text-white/60 text-xs sm:text-sm tracking-wider uppercase font-light">
            Speak with our property management team today.
          </p>

          <button
            onClick={scrollToConsultation}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white hover:bg-amber-200 text-black text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-[1500px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider uppercase gap-4">
          <p>© {new Date().getFullYear()} Faith &amp; Co Property Management Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer" onClick={onExploreProperties}>Browse Residences</span>
            <span className="hover:text-white cursor-pointer" onClick={scrollToConsultation}>Landlord Portal</span>
          </div>
        </div>
      </section>

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
