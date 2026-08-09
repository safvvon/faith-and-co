import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, ShieldCheck, CheckCircle, Award, Users, Building2, ChevronRight } from 'lucide-react';

const PHILOSOPHY_LIST = [
  {
    number: '01',
    title: 'CARE',
    desc: 'Every property deserves attention beyond the basics.'
  },
  {
    number: '02',
    title: 'CLARITY',
    desc: 'Clear communication creates better relationships.'
  },
  {
    number: '03',
    title: 'CONSISTENCY',
    desc: 'Great property management is built through reliable action, every day.'
  }
];

const TEAM_MEMBERS = [
  {
    id: 'james',
    name: 'JAMES ANDERSON',
    role: 'MANAGING DIRECTOR',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'emily',
    name: 'EMILY CARTER',
    role: 'PROPERTY MANAGER',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'daniel',
    name: 'DANIEL THOMAS',
    role: 'CLIENT RELATIONSHIP MANAGER',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  }
];

const VALUES_LIST = [
  {
    title: 'TRUST',
    desc: 'We do what we say.'
  },
  {
    title: 'CARE',
    desc: 'We pay attention to the details.'
  },
  {
    title: 'RESPONSIBILITY',
    desc: 'We take ownership of the work.'
  },
  {
    title: 'PROGRESS',
    desc: 'We continuously improve how property is managed.'
  }
];

const BEHIND_THE_SCENES_GALLERY = [
  { title: 'PROPERTY EXTERIOR', src: '/properties/london_townhouse.png' },
  { title: 'PROPERTY INTERIOR', src: '/properties/gallery_livingroom.png' },
  { title: 'CHEF KITCHEN', src: '/properties/gallery_kitchen.png' },
  { title: 'PROPERTY INSPECTION', src: '/properties/cotswolds_estate.png' },
  { title: 'SEASIDE RESIDENCE', src: '/properties/brighton_coastal.png' },
  { title: 'OFFICE ENVIRONMENT', src: '/properties/london_mayfair.png' }
];

export default function AboutUsPage({ onNavigateLandlords, onExploreProperties, onNavigateEnquiry }) {
  const [counts, setCounts] = useState({ properties: 0, landlords: 0, years: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simple smooth count up animation
    const timer = setTimeout(() => {
      setCounts({ properties: 100, landlords: 50, years: 10 });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToStory = () => {
    document.getElementById('our-story-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-montserrat selection:bg-amber-200 selection:text-black relative">
      
      {/* ----------------------------------------------------
          1. HERO
      ---------------------------------------------------- */}
      <section className="relative w-full h-[90vh] sm:h-[95vh] overflow-hidden bg-black flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/properties/london_townhouse.png"
            alt="Faith & Co Property Management"
            className="w-full h-full object-cover animate-hero-zoom filter brightness-[0.88]"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a14] via-black/40 to-black/60 pointer-events-none" />

        {/* Top Label */}
        <div className="relative z-30 px-6 sm:px-12 pt-28 sm:pt-32">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs tracking-[0.25em] font-medium uppercase shadow-lg">
            ABOUT US
          </span>
        </div>

        {/* Center Hero Title */}
        <div className="relative z-30 px-6 sm:px-12 lg:px-16 pb-16 max-w-5xl space-y-6 animate-fade-up">
          <h1 className="font-montserrat font-light text-5xl sm:text-7xl lg:text-8xl text-white tracking-[0.05em] leading-[1.05] drop-shadow-xl">
            PROPERTY<br />
            WITH PURPOSE.
          </h1>

          <p className="text-white/85 text-sm sm:text-xl font-light tracking-wide max-w-2xl font-montserrat leading-relaxed">
            "We believe exceptional property management starts with treating every home, landlord and tenant with genuine care."
          </p>

          <button
            onClick={scrollToStory}
            className="inline-flex items-center gap-2 pt-4 text-xs font-semibold tracking-[0.25em] text-amber-200 hover:text-white uppercase transition-colors cursor-pointer group"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. OUR STORY
      ---------------------------------------------------- */}
      <section id="our-story-section" className="bg-[#17172D] py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-200/90 block mb-3">
            OUR STORY
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Architectural Image */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/properties/chelsea_hero.png"
                alt="London Chelsea Residence Story"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-8">
              <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white leading-tight tracking-[0.05em]">
                BUILT AROUND<br />
                BETTER PROPERTY<br />
                <span className="text-amber-100/90 font-light">MANAGEMENT.</span>
              </h2>

              <div className="space-y-4 text-white/80 text-sm sm:text-base font-light leading-relaxed font-montserrat max-w-xl">
                <p>
                  "We began with a simple idea: property management should be more personal, transparent and proactive."
                </p>
                <p>
                  "Today, we work with landlords and property owners who want their investments managed with the same attention they would give them personally."
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-200 font-montserrat block">
                  PEOPLE. PROPERTY. TRUST.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. OUR PHILOSOPHY
      ---------------------------------------------------- */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase block">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
            THE WAY<br />WE THINK.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_LIST.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6 hover:border-amber-200/40 transition-colors shadow-xl"
            >
              <span className="font-mono text-sm tracking-widest text-amber-200 block">
                {item.number}
              </span>

              <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
                {item.title}
              </h3>

              <div className="w-full h-[1px] bg-white/10" />

              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          4. OUR PEOPLE
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
              THE TEAM
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
              THE PEOPLE<br />BEHIND THE PROPERTY.
            </h2>
          </div>

          {/* Rectangular Editorial Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-xl overflow-hidden bg-[#101124] border border-white/15 flex flex-col justify-end aspect-[3/4] cursor-pointer shadow-2xl transition-all duration-500 hover:border-amber-200/50"
              >
                {/* Team Portrait Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16]/95 via-black/30 to-transparent transition-opacity duration-500" />

                {/* Name & Role Overlay */}
                <div className="relative z-10 p-6 text-center space-y-1.5 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <h3 className="font-montserrat font-light text-xl text-white tracking-[0.05em] group-hover:text-amber-100 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
                    {member.role}
                  </p>
                  
                  <div className="pt-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-amber-200 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          5. OUR APPROACH
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
              OUR DEDICATION
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em] leading-tight">
              PEOPLE FIRST.<br />
              <span className="text-amber-100/90 font-light">PROPERTY ALWAYS.</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed font-montserrat">
              "We understand that every property represents something different to its owner. An investment, a family home, a long-term plan or a source of income. Our role is to protect that value while making ownership simpler."
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="/properties/gallery_livingroom.png"
              alt="Interior Living Space Approach"
              className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          6. OUR VALUES
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase block">
              CORE PRINCIPLES
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
              WHAT WE<br />STAND FOR.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_LIST.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#141428] border border-white/10 space-y-3 hover:border-amber-200/40 transition-colors shadow-xl"
              >
                <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
                  {val.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          7. COMPANY NUMBERS
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
          
          <div className="space-y-2">
            <span className="font-montserrat font-light text-4xl sm:text-6xl text-white block">
              {counts.properties}+
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-200 uppercase block">
              PROPERTIES
            </span>
          </div>

          <div className="space-y-2 border-l border-white/10">
            <span className="font-montserrat font-light text-4xl sm:text-6xl text-white block">
              {counts.landlords}+
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-200 uppercase block">
              LANDLORDS
            </span>
          </div>

          <div className="space-y-2 sm:border-l border-white/10 pt-4 sm:pt-0">
            <span className="font-montserrat font-light text-4xl sm:text-6xl text-amber-200 block">
              24/7
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase block">
              SUPPORT
            </span>
          </div>

          <div className="space-y-2 border-l border-white/10 pt-4 sm:pt-0">
            <span className="font-montserrat font-light text-4xl sm:text-6xl text-white block">
              {counts.years}+
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-200 uppercase block">
              YEARS EXPERIENCE
            </span>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          8. A CLOSER LOOK (HORIZONTAL GALLERY)
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 mb-8 flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
              BEHIND THE SCENES
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-4xl text-white tracking-[0.05em]">
              A CLOSER LOOK.
            </h2>
          </div>
          <span className="text-xs tracking-widest text-white/40 uppercase hidden sm:block">
            SWIPE / SCROLL HORIZONTALLY →
          </span>
        </div>

        {/* Horizontal Editorial Gallery */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 lg:px-12 pb-6 scroll-smooth">
          {BEHIND_THE_SCENES_GALLERY.map((img, idx) => (
            <div
              key={idx}
              className="group relative shrink-0 w-[300px] sm:w-[420px] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.2em] text-white uppercase font-montserrat">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          9. FINAL BRAND STATEMENT
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-24 sm:py-36 text-center px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-montserrat font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight">
            WE DON'T JUST<br />
            MANAGE HOMES.<br />
            <span className="text-amber-100/90 font-light">WE BUILD<br />LONG-TERM TRUST.</span>
          </h2>

          <p className="text-white/60 text-xs sm:text-sm font-light tracking-[0.2em] uppercase font-montserrat">
            "Property management, considered differently."
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------
          10. FINAL CTA & FOOTER
      ---------------------------------------------------- */}
      <section className="bg-[#141428] py-24 sm:py-32 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-montserrat font-light text-4xl sm:text-6xl text-white tracking-[0.05em] leading-tight">
            LET'S TALK<br />PROPERTY.
          </h2>

          <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed font-montserrat max-w-lg mx-auto">
            "Whether you're managing one property or a growing portfolio, our team is ready to help."
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateEnquiry}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white hover:bg-amber-200 text-black text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95"
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateLandlords}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md transition-all cursor-pointer"
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider uppercase gap-4">
          <p>© {new Date().getFullYear()} Faith &amp; Co Property Management Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer" onClick={onExploreProperties}>Browse Residences</span>
            <span className="hover:text-white cursor-pointer" onClick={onNavigateLandlords}>Landlord Services</span>
          </div>
        </div>
      </section>

    </div>
  );
}
