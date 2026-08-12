import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, ShieldCheck, CheckCircle, Award, Users, Building2, ChevronRight } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

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

export default function AboutUsPage({
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
  onExploreProperties,
  onNavigateEnquiry
}) {
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
    <div className="w-full min-h-screen bg-[#090a14] text-white font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* ----------------------------------------------------
          1. HERO HEADER AREA
      ---------------------------------------------------- */}
      <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-b border-[rgba(255,255,255,0.07)] bg-[#090a14] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6 animate-fade-up">
          <div>
            <span className="inline-block px-3.5 py-1.5 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-dm tracking-[0.25em] font-medium uppercase">
              ABOUT FAITH &amp; CO
            </span>
          </div>

          <h1 className="font-cormorant font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            Property with <span className="italic text-[#C9A84C] font-normal">purpose &amp; integrity</span>
          </h1>

          <p className="font-dm text-sm sm:text-base lg:text-lg font-light text-white/70 tracking-wide max-w-2xl mx-auto leading-relaxed">
            We believe exceptional property management starts with treating every home, landlord, and tenant with white-glove diligence and genuine transparency.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={scrollToStory}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-xl rounded-none font-dm"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. OUR STORY
      ---------------------------------------------------- */}
      <section id="our-story-section" className="bg-[#090a14] py-20 sm:py-28 border-b border-white/10 font-dm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] block mb-3 font-dm">
            OUR STORY
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Architectural Image */}
            <div className="lg:col-span-6 overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/properties/chelsea_hero.png"
                alt="London Chelsea Residence Story"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-8">
              <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white leading-tight tracking-tight">
                Built around <span className="italic text-[#C9A84C] font-normal">better management</span>
              </h2>

              <div className="space-y-4 text-white/80 text-sm sm:text-base font-light leading-relaxed font-dm max-w-xl">
                <p>
                  We began with a simple idea: property management should be more personal, transparent, and proactive.
                </p>
                <p>
                  Today, we work with landlords and property owners who want their investments managed with the exact same attention they would give them personally.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] font-dm block">
                  PEOPLE · PROPERTY · TRUST
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. OUR PHILOSOPHY
      ---------------------------------------------------- */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 py-20 sm:py-28 font-dm">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
            The way <span className="italic text-[#C9A84C] font-normal">we think</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_LIST.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-white/[0.03] border border-white/10 space-y-4 hover:border-[#C9A84C] hover:-translate-y-2 transition-all duration-300 shadow-xl group rounded-sm"
            >
              <span className="font-mono text-[#C9A84C] text-xs font-semibold tracking-widest block animate-pulse">
                {item.number}
              </span>
              <h3 className="font-cormorant text-2xl font-light text-white tracking-wide group-hover:text-[#C9A84C] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed font-dm">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          4. OUR PEOPLE
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-20 sm:py-28 border-y border-white/10 font-dm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              THE TEAM
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
              The people <span className="italic text-[#C9A84C] font-normal">behind the property</span>
            </h2>
          </div>

          {/* Rectangular Editorial Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden bg-[#090a14] border border-white/15 flex flex-col justify-end aspect-[3/4] cursor-pointer shadow-2xl transition-all duration-500 hover:border-[#C9A84C]/50"
              >
                {/* Team Portrait Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a14]/95 via-black/30 to-transparent transition-opacity duration-500" />

                {/* Name & Role Overlay */}
                <div className="relative z-10 p-6 text-center space-y-1.5 transition-transform duration-500 ease-out group-hover:-translate-y-2 font-dm">
                  <h3 className="font-cormorant font-light text-2xl text-white tracking-tight group-hover:text-[#C9A84C] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 font-dm">
                    {member.role}
                  </p>
                  
                  <div className="pt-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-[#C9A84C] transform group-hover:translate-x-1 transition-transform" />
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
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28 font-dm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              OUR DEDICATION
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              People first, <span className="italic text-[#C9A84C] font-normal">property always</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed font-dm">
              "We understand that every property represents something different to its owner. An investment, a family home, a long-term plan, or a source of income. Our role is to protect that value while making ownership simpler."
            </p>
          </div>

          <div className="lg:col-span-6 overflow-hidden border border-white/15 shadow-2xl">
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
      <section className="bg-[#090a14] py-20 sm:py-28 border-y border-white/10 font-dm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              CORE PRINCIPLES
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
              What we <span className="italic text-[#C9A84C] font-normal">stand for</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_LIST.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#C9A84C]/40 transition-colors shadow-xl"
              >
                <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">
                  {val.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed font-dm">
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
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28 font-dm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/[0.03] border border-white/10 p-8 sm:p-12 text-center">
          
          <div className="space-y-2">
            <span className="font-cormorant font-light text-4xl sm:text-6xl text-white block">
              {counts.properties}+
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase block font-dm">
              PROPERTIES
            </span>
          </div>

          <div className="space-y-2 border-l border-white/10">
            <span className="font-cormorant font-light text-4xl sm:text-6xl text-white block">
              {counts.landlords}+
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase block font-dm">
              LANDLORDS
            </span>
          </div>

          <div className="space-y-2 sm:border-l border-white/10 pt-4 sm:pt-0">
            <span className="font-cormorant font-light text-4xl sm:text-6xl text-[#C9A84C] block">
              24/7
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase block font-dm">
              SUPPORT
            </span>
          </div>

          <div className="space-y-2 border-l border-white/10 pt-4 sm:pt-0">
            <span className="font-cormorant font-light text-4xl sm:text-6xl text-white block">
              {counts.years}+
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase block font-dm">
              YEARS EXPERIENCE
            </span>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          8. A CLOSER LOOK (HORIZONTAL GALLERY)
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-20 sm:py-28 border-y border-white/10 overflow-hidden font-dm">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 mb-8 flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              BEHIND THE SCENES
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-5xl text-white tracking-tight">
              A closer <span className="italic text-[#C9A84C] font-normal">look</span>
            </h2>
          </div>
          <span className="text-xs tracking-widest text-white/40 uppercase hidden sm:block font-dm">
            SWIPE / SCROLL HORIZONTALLY →
          </span>
        </div>

        {/* Horizontal Editorial Gallery */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 lg:px-12 pb-6 scroll-smooth">
          {BEHIND_THE_SCENES_GALLERY.map((img, idx) => (
            <div
              key={idx}
              className="group relative shrink-0 w-[300px] sm:w-[420px] aspect-[4/3] overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.2em] text-white uppercase font-dm">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          9. FINAL BRAND STATEMENT
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-24 sm:py-36 text-center px-6 border-b border-white/10 font-dm">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-cormorant font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            We don't just manage homes. <span className="italic text-[#C9A84C] font-normal">We build long-term trust.</span>
          </h2>

          <p className="text-white/60 text-xs sm:text-sm font-light tracking-[0.2em] uppercase font-dm">
            "Property management, considered differently."
          </p>
        </div>
      </section>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateHome={onNavigateHome}
        onNavigateProperties={onNavigateProperties || onExploreProperties}
        onNavigateLandlords={onNavigateLandlords}
        onNavigateRentersRights={onNavigateRentersRights}
        onNavigateHmoLicensing={onNavigateHmoLicensing}
        onNavigateGuideToLetting={onNavigateGuideToLetting}
        onNavigateContact={onNavigateContact || onNavigateEnquiry}
        onNavigateRegisterLandlord={onNavigateRegisterLandlord}
        onNavigateLetWithUs={onNavigateLetWithUs}
        onNavigateFreeValuation={onNavigateFreeValuation}
      />

    </div>
  );
}
