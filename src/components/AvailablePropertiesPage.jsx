import React, { useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Maximize2, ShieldCheck, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

const PROPERTIES_LIST = [
  {
    id: 1,
    title: 'Three Bedroom Family Home',
    category: 'Residential',
    price: '£2,200 / month',
    location: 'Ealing, West London',
    specs: '3 Beds · 2 Baths · 1,100 ft²',
    status: 'AVAILABLE',
    badge: 'RESIDENTIAL',
    image: '/properties/london_townhouse.png',
    beds: '3 Beds',
    baths: '2 Baths',
    size: '1,100 ft²'
  },
  {
    id: 2,
    title: 'Licensed HMO — Double Rooms',
    category: 'HMO',
    price: '£950 / room',
    location: 'Tower Hamlets, East London',
    specs: '6 Rooms · 3 Baths · Licensed',
    status: 'AVAILABLE',
    badge: 'HMO',
    image: '/properties/gallery_livingroom.png',
    beds: '6 Rooms',
    baths: '3 Baths',
    size: 'Licensed'
  },
  {
    id: 3,
    title: 'C2 Property — Operator Ready',
    category: 'Specialist / C2',
    price: 'POA / enquire',
    location: 'Croydon, South London',
    specs: '5 Beds · C2 Use · 1,800 ft²',
    status: 'TO LET',
    badge: 'SPECIALIST / C2',
    image: '/properties/cotswolds_estate.png',
    beds: '5 Beds',
    baths: 'C2 Use',
    size: '1,800 ft²'
  },
  {
    id: 4,
    title: 'Two Bedroom Apartment',
    category: 'Residential',
    price: '£1,650 / month',
    location: 'Greenwich, South London',
    specs: '2 Beds · 1 Bath · 720 ft²',
    status: 'AVAILABLE',
    badge: 'RESIDENTIAL',
    image: '/properties/london_mayfair.png',
    beds: '2 Beds',
    baths: '1 Bath',
    size: '720 ft²'
  },
  {
    id: 5,
    title: 'Professional House Share',
    category: 'HMO',
    price: '£875 / room',
    location: 'Brent, North West London',
    specs: '5 Rooms · 2 Baths · Licensed',
    status: 'AVAILABLE',
    badge: 'HMO',
    image: '/properties/gallery_kitchen.png',
    beds: '5 Rooms',
    baths: '2 Baths',
    size: 'Licensed'
  },
  {
    id: 6,
    title: 'Studio Block — Operator Let',
    category: 'Specialist / C2',
    price: 'POA / whole block',
    location: 'Newham, East London',
    specs: '12 Units · Block · Single Lease',
    status: 'TO LET',
    badge: 'BLOCK',
    image: '/properties/chelsea_hero.png',
    beds: '12 Units',
    baths: 'Block',
    size: 'Single Lease'
  }
];

const FILTER_CATEGORIES = ['All', 'Residential', 'HMO', 'Specialist / C2'];

export default function AvailablePropertiesPage({ onNavigateHome, onNavigateContact, onSelectProperty }) {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProperties = PROPERTIES_LIST.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-[#FFFFFF] font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden">
      
      {/* ----------------------------------------------------
          1. TOP INFO BAR (Thin, minimal, elegant)
      ---------------------------------------------------- */}
      <div className="w-full bg-[#090a14] border-b border-[rgba(255,255,255,0.06)] py-2 px-6 sm:px-12 flex items-center justify-between text-[11px] font-dm tracking-[0.18em] uppercase text-white/50 z-50 relative">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#C9A84C]" />
          <span>Greater London &amp; Home Counties</span>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Phone className="w-3 h-3 text-[#C9A84C]" />
          <span>020 8574 1700</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="relative w-full py-20 sm:py-28 px-6 sm:px-12 text-center border-b border-[rgba(255,255,255,0.07)] overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6 animate-fade-up">
          {/* Small Gold Eyebrow */}
          <div>
            <span className="inline-block px-3.5 py-1.5 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-montserrat tracking-[0.25em] font-medium uppercase animate-float-slow">
              AVAILABLE NOW
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-montserrat font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-[0.05em] leading-[1.08]">
            Properties <span className="italic text-[#C9A84C] font-normal">to let</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-montserrat text-base sm:text-lg font-light text-white/70 leading-relaxed max-w-3xl mx-auto">
            Browse our current availability across London. From family homes and HMOs to specialist C2 and operator-ready property.
          </p>
        </div>
      </header>

      {/* PROPERTY FILTERS (Sticky Filter Bar) */}
      <section className="sticky top-20 sm:top-24 z-40 w-full bg-[#090a14]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.07)] py-4 px-4 sm:px-8 lg:px-12">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-montserrat">
          
          {/* Category Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 text-xs font-montserrat tracking-wider uppercase transition-all duration-300 cursor-pointer rounded-none border ${
                    isActive
                      ? 'bg-[#C9A84C] text-[#090a14] border-[#C9A84C] font-medium shadow-md'
                      : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-[#C9A84C]/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Dynamic Count */}
          <span className="text-xs text-white/50 tracking-widest uppercase font-light self-end sm:self-auto">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
          </span>

        </div>
      </section>

      {/* ----------------------------------------------------
          6. PROPERTY GRID (100% FULL-WIDTH EDGE-TO-EDGE)
      ---------------------------------------------------- */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-28">
        
        {filteredProperties.length === 0 ? (
          /* Empty Filter State */
          <div className="py-24 text-center space-y-6 border border-[rgba(255,255,255,0.07)] bg-[#090a14] p-12 max-w-xl mx-auto shadow-xl">
            <h3 className="font-montserrat font-light text-2xl sm:text-3xl text-white tracking-[0.05em]">No Matching Properties</h3>
            <p className="font-montserrat text-sm text-white/60 font-light leading-relaxed">
              No properties match this filter right now. Please check back soon or contact us to discuss off-market availability.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="px-6 py-3 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-montserrat text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              SHOW ALL PROPERTIES
            </button>
          </div>
        ) : (
          /* Responsive 3-Column Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                onClick={() => onSelectProperty ? onSelectProperty(property) : onNavigateContact()}
                className="group bg-[#090a14] border border-[rgba(255,255,255,0.07)] flex flex-col justify-between transition-all duration-300 hover:border-[#C9A84C]/60 hover:-translate-y-1 cursor-pointer shadow-xl overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-[240px] overflow-hidden bg-[#090a14]">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92]"
                    />

                    {/* Badges Overlay */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#090a14]/90 backdrop-blur-md border border-white/20 text-[#C9A84C] text-[10px] font-montserrat tracking-widest uppercase font-medium">
                        {property.status}
                      </span>
                      <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-montserrat tracking-widest uppercase font-medium">
                        {property.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Price */}
                    <span className="font-montserrat text-2xl sm:text-3xl text-[#C9A84C] font-light tracking-[0.05em] block">
                      {property.price}
                    </span>

                    {/* Title */}
                    <h3 className="font-montserrat text-2xl font-light text-white tracking-[0.05em] group-hover:text-amber-100 transition-colors leading-snug">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs font-montserrat text-white/60 font-light">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>

                {/* Property Specs Footer */}
                <div className="px-6 sm:px-8 py-4 border-t border-[rgba(255,255,255,0.06)] font-montserrat text-xs text-white/50 tracking-wider flex items-center justify-between font-light">
                  <span>{property.specs}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A84C] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      {/* ----------------------------------------------------
          7. CALL-TO-ACTION SECTION
      ---------------------------------------------------- */}
      <section className="w-full max-w-[1300px] mx-auto px-6 sm:px-12 pb-24 sm:pb-32">
        <div className="p-10 sm:p-14 bg-[#090a14] border border-[#C9A84C]/40 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
              Can’t find <span className="italic text-[#C9A84C] font-normal">what you’re looking for?</span>
            </h2>

            <p className="font-montserrat text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-lg mx-auto">
              Our availability changes constantly, and much of our specialist stock never reaches the open market. Tell us what you need and we’ll source it.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-montserrat text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-95"
              >
                <span>REGISTER YOUR REQUIREMENT</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateProperties={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateLandlords={onNavigateLandlords}
        onNavigateContact={onNavigateContact}
      />

    </div>
  );
}
