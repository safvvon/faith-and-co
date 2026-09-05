import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Maximize2, Check, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { id: 'living', title: 'Living Room', src: '/properties/gallery_livingroom.png' },
  { id: 'kitchen', title: 'Kitchen & Dining', src: '/properties/gallery_kitchen.png' },
  { id: 'bedroom', title: 'Master Bedroom', src: '/properties/gallery_bedroom.png' },
  { id: 'bathroom', title: 'Master En Suite', src: '/properties/gallery_bathroom.png' },
  { id: 'garden', title: 'Private Terrace', src: '/properties/gallery_garden.png' },
  { id: 'exterior', title: 'Residence Exterior', src: '/properties/chelsea_hero.png' }
];

const FEATURES_LIST = [
  'Private Garden',
  'Modern Kitchen',
  'Ensuite Master Bedroom',
  'Underfloor Heating',
  'Secure Parking',
  'Floor-to-Ceiling Windows',
  'Smart Home Technology',
  'High-Speed Internet',
  'Excellent Transport Links',
  'Long-Term Let Available'
];

const SIMILAR_PROPERTIES = [
  {
    id: 'kensington-similar',
    location: 'KENSINGTON',
    specs: '2 BED | 2 BATH',
    price: '£3,250 PCM',
    image: '/properties/london_mayfair.png'
  },
  {
    id: 'richmond-similar',
    location: 'RICHMOND',
    specs: '4 BED | 3 BATH',
    price: '£4,100 PCM',
    image: '/properties/brighton_coastal.png'
  },
  {
    id: 'fulham-similar',
    location: 'FULHAM',
    specs: '3 BED | 2 BATH',
    price: '£3,750 PCM',
    image: '/properties/manchester_apartment.png'
  }
];

export default function PropertyViewPage({ property, onBack, onSelectProperty }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeFloor, setActiveFloor] = useState('ground');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Property data fallbacks
  const displayTitle = property?.fullName || property?.name || property?.title || 'The Kensington Manor';
  const displayCity = property?.location || property?.city || 'LONDON, UK';
  const displayPcm = property?.price || property?.pcm || '£4,250 PCM';
  const displaySpecs = property?.specs || '3 BED  |  2 BATH  |  1,850 SQ FT';
  const heroSrc = property?.image || '/properties/chelsea_hero.png';

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-montserrat selection:bg-amber-200 selection:text-black relative select-none">
      
      {/* ----------------------------------------------------
          1. HERO — CINEMATIC FULL-WIDTH PROPERTY GALLERY
      ---------------------------------------------------- */}
      <section className="relative w-full h-[75vh] sm:h-[85vh] overflow-hidden bg-[#090a14] flex flex-col justify-between pt-24">
        {/* Animated Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroSrc}
            alt={displayTitle}
            className="w-full h-full object-cover animate-hero-zoom filter brightness-[0.92]"
          />
        </div>

        {/* Gradient Overlays for Maximum Editorial Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a14] via-[#090a14]/30 to-black/60 pointer-events-none" />

        {/* Top Floating Header & Back Navigation */}
        <div className="relative z-30 px-6 sm:px-12 lg:px-16 pt-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/50 hover:bg-white/20 border border-white/20 text-white text-xs tracking-[0.2em] font-medium uppercase backdrop-blur-md transition-all duration-300 cursor-pointer group shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO RESIDENCES</span>
          </button>
        </div>

        {/* Bottom Left Hero Overlay (Full Width Alignment) */}
        <div className="relative z-30 px-6 sm:px-12 lg:px-16 xl:px-20 pb-12 w-full space-y-3 animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#C9A84C] text-[#090a14] text-[10px] font-bold tracking-[0.2em] uppercase rounded-none">
              FAITH &amp; CO MANAGED
            </span>
            <span className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] uppercase font-dm">
              📍 {displayCity}
            </span>
          </div>

          <h1 className="font-cormorant font-light text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.05] drop-shadow-2xl">
            {displayTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-2">
            <span className="text-2xl sm:text-4xl font-bold tracking-wider text-white font-dm">
              {displayPcm}
            </span>
            <span className="text-white/30 font-light text-xl">•</span>
            <span className="text-xs sm:text-base uppercase tracking-[0.2em] font-medium text-white/90 font-dm">
              {displaySpecs}
            </span>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. EXPANSIVE FULL-WIDTH PROPERTY GALLERY
      ---------------------------------------------------- */}
      <section className="w-full bg-[#090a14] py-10 border-b border-white/10 overflow-hidden">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0d1626] border border-white/10 cursor-pointer transition-all duration-500 hover:border-[#38bdf8]/60 hover:shadow-2xl"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-medium uppercase tracking-wider">
                  <span className="truncate">{img.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white/70 text-xs tracking-widest uppercase">
            <span>
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')} — {GALLERY_IMAGES[lightboxIndex].title}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="relative flex-1 flex items-center justify-center py-6">
            <button
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer z-10"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              className="max-h-[82vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer z-10"
              title="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="text-center text-white/50 text-xs tracking-widest uppercase pb-2 font-dm">
            Faith &amp; Co Luxury Property Showcase
          </div>
        </div>
      )}

      {/* ----------------------------------------------------
          3. PROPERTY OVERVIEW & SPECIFICATIONS GRID (FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 py-20 sm:py-28 font-dm border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Intro Quote */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] block font-dm animate-float-slow">
              ARCHITECTURAL HIGHLIGHTS
            </span>
            <blockquote className="font-cormorant font-light text-3xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              "An exceptional contemporary residence in one of London's most desirable prime locations."
            </blockquote>
          </div>

          {/* Right Specifications Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="font-montserrat font-light text-4xl sm:text-5xl text-white block">3</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">BEDROOMS</span>
            </div>

            <div className="space-y-1">
              <span className="font-montserrat font-light text-4xl sm:text-5xl text-white block">2</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">BATHROOMS</span>
            </div>

            <div className="space-y-1">
              <span className="font-montserrat font-light text-4xl sm:text-5xl text-white block">1,850</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">SQ FT</span>
            </div>

            <div className="space-y-1 pt-4 border-t border-white/10">
              <span className="font-montserrat font-light text-4xl sm:text-5xl text-white block">2</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">PARKING SPACES</span>
            </div>

            <div className="space-y-1 pt-4 border-t border-white/10">
              <span className="font-montserrat font-light text-4xl sm:text-5xl text-white block">7.8%</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#38bdf8] uppercase block">NET YIELD</span>
            </div>

            <div className="space-y-1 pt-4 border-t border-white/10">
              <span className="font-montserrat font-light text-2xl sm:text-3xl text-[#C9A84C] block">LONG TERM</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">LEASE TYPE</span>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          4. DESCRIPTION & INTERIOR SHOWCASE (FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full bg-[#090a14] py-20 sm:py-28 border-b border-white/10 px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white leading-tight tracking-tight">
              DESIGNED FOR<br />
              <span className="text-[#C9A84C] italic font-normal">LUXURY LIVING.</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed font-dm">
              Set within a sought-after London borough, this beautifully appointed residence combines refined interiors, generous proportions, and effortless modern convenience. Carefully considered finishes, abundant natural light, and seamless indoor-outdoor spaces create a home designed for comfort, prestige, and longevity.
            </p>

            <div className="pt-4 flex items-center gap-3 text-xs tracking-[0.2em] text-[#38bdf8] uppercase font-semibold font-dm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Managed Directly by Faith &amp; Co Management</span>
            </div>
          </div>

          {/* Editorial Image Beside Text */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <img
              src="/properties/gallery_livingroom.png"
              alt="Interior Design Living Space"
              className="w-full h-[420px] sm:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          5. KEY FEATURES & SPECIFICATIONS (FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 py-20 sm:py-28 border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 font-dm">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
            SPECIFICATION &amp; AMENITIES
          </span>
          <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
            RESIDENCE AMENITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FEATURES_LIST.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#38bdf8]/60 transition-all duration-300 flex flex-col justify-between gap-4 group hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] group-hover:scale-150 transition-transform" />
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-white/90 font-dm">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          6. FLOOR PLAN ARCHITECTURAL LAYOUT (FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full bg-[#090a14] py-20 sm:py-28 border-b border-white/10 px-6 sm:px-12 lg:px-16 xl:px-20 text-center font-dm">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block mb-3">
          ARCHITECTURAL BLUEPRINT
        </span>
        <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight mb-8">
          EXPLORE THE FLOOR PLAN
        </h2>

        {/* Floor Plan Selector */}
        <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/15 mb-12">
          <button
            onClick={() => setActiveFloor('ground')}
            className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase transition-all cursor-pointer ${
              activeFloor === 'ground'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            GROUND FLOOR
          </button>
          <button
            onClick={() => setActiveFloor('first')}
            className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase transition-all cursor-pointer ${
              activeFloor === 'first'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            FIRST FLOOR
          </button>
        </div>

        {/* Floor Plan Graphic Vector SVG */}
        <div className="w-full max-w-5xl mx-auto p-8 sm:p-12 rounded-2xl bg-[#0d1424] border border-[#38bdf8]/40 shadow-2xl relative overflow-hidden group">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto text-white stroke-current fill-none transition-transform duration-500 group-hover:scale-[1.01]"
            style={{ strokeWidth: 1.5 }}
          >
            {/* Outer Walls */}
            <rect x="50" y="50" width="700" height="400" rx="4" className="stroke-white/80" strokeWidth="2.5" />
            
            {activeFloor === 'ground' ? (
              <>
                {/* Ground Floor Layout Rooms */}
                <rect x="50" y="50" width="380" height="250" className="stroke-white/40" />
                <text x="240" y="160" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  GRAND RECEPTION / LIVING ROOM (28' x 18')
                </text>

                <rect x="430" y="50" width="320" height="250" className="stroke-white/40" />
                <text x="590" y="160" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  CHEF KITCHEN &amp; DINING (22' x 14')
                </text>

                <rect x="50" y="300" width="450" height="150" className="stroke-white/40" />
                <text x="275" y="380" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  ENTRANCE FOYER &amp; GALLERY
                </text>

                <rect x="500" y="300" width="250" height="150" className="stroke-[#38bdf8]/60" strokeDasharray="4 4" />
                <text x="625" y="380" textAnchor="middle" className="fill-[#38bdf8] font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  SOUTH TERRACE GARDEN
                </text>
              </>
            ) : (
              <>
                {/* First Floor Layout Rooms */}
                <rect x="50" y="50" width="400" height="230" className="stroke-white/40" />
                <text x="250" y="165" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  MASTER SUITE (20' x 16')
                </text>

                <rect x="450" y="50" width="300" height="230" className="stroke-white/40" />
                <text x="600" y="165" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  MARBLE EN SUITE BATHROOM
                </text>

                <rect x="50" y="280" width="350" height="170" className="stroke-white/40" />
                <text x="225" y="370" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  BEDROOM 2 (16' x 12')
                </text>

                <rect x="400" y="280" width="350" height="170" className="stroke-white/40" />
                <text x="575" y="370" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                  BEDROOM 3 / GUEST SUITE
                </text>
              </>
            )}
          </svg>

          <p className="mt-6 text-xs text-[#38bdf8]/70 tracking-widest uppercase font-dm font-medium">
            Faith &amp; Co Architectural Scale 1:50 • Dimensions approximate
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------
          7. LOCATION & CONNECTIVITY (FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-dm">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] block">
              LOCATION &amp; CONNECTIVITY
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white leading-tight tracking-tight">
              LIFE, WELL<br />CONNECTED.
            </h2>
            <p className="text-white/70 text-base font-light leading-relaxed">
              Situated in the heart of London, enjoying immediate proximity to high-street boutiques, fine dining, green parks, and seamless Underground transport connections.
            </p>

            {/* Travel Times Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">UNDERGROUND</span>
                <span className="font-montserrat font-light text-2xl sm:text-3xl text-white">5 MIN</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">SCHOOLS</span>
                <span className="font-montserrat font-light text-2xl sm:text-3xl text-white">8 MIN</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">CITY CENTRE</span>
                <span className="font-montserrat font-light text-2xl sm:text-3xl text-white">15 MIN</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">AIRPORT</span>
                <span className="font-montserrat font-light text-2xl sm:text-3xl text-white">35 MIN</span>
              </div>
            </div>
          </div>

          {/* Minimalist Monochrome Map Visual */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden border border-[#38bdf8]/40 bg-[#0d1424] shadow-2xl flex items-center justify-center p-8">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
            
            {/* Map Vector Graphic */}
            <svg viewBox="0 0 600 400" className="w-full h-full text-white/20 stroke-current fill-none">
              <path d="M 50 100 Q 200 150 550 80" strokeWidth="3" />
              <path d="M 100 350 Q 300 200 500 380" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 300 50 L 300 350" strokeWidth="1.5" />
            </svg>

            {/* Glowing Map Pin Location */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-[#38bdf8]/20 border border-[#38bdf8] animate-ping absolute inset-0" />
                <div className="w-14 h-14 rounded-full bg-[#38bdf8]/40 border border-[#38bdf8] flex items-center justify-center shadow-[0_0_30px_#00f0ff]">
                  <MapPin className="w-7 h-7 text-[#ffffff]" />
                </div>
              </div>

              <div className="mt-4 px-5 py-2.5 rounded-full bg-[#090a14]/90 border border-[#38bdf8]/60 backdrop-blur-md text-xs tracking-widest font-semibold uppercase text-white shadow-2xl">
                {displayTitle} • {displayCity}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          8. AVAILABILITY / PRIVATE VIEWING ENQUIRY (FULL-WIDTH 2-COLUMN GRID)
      ---------------------------------------------------- */}
      <section id="enquiry-section" className="w-full bg-[#090a14] py-20 sm:py-28 border-b border-white/10 px-6 sm:px-12 lg:px-16 xl:px-20 font-dm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Header & Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
                PRIVATE VIEWING &amp; LEASING
              </span>
              <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight leading-[1.08]">
                MAKE THIS<br />YOUR NEXT HOME.
              </h2>
            </div>

            <p className="text-white/75 text-base sm:text-lg font-light leading-relaxed">
              Interested in <span className="text-white font-medium">{displayTitle}</span>? Arrange a private viewing or speak directly with our dedicated London property management team.
            </p>

            {/* Direct Contact Badges & Guarantee */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs tracking-widest text-white/80 font-medium uppercase">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#C9A84C]">
                  📍
                </div>
                <span>Location: {displayCity}</span>
              </div>

              <div className="flex items-center gap-3 text-xs tracking-widest text-white/80 font-medium uppercase">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#38bdf8]">
                  ⚡
                </div>
                <span>Response Guarantee: Within 2 Hours</span>
              </div>

              <div className="flex items-center gap-3 text-xs tracking-widest text-white/80 font-medium uppercase">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-emerald-400">
                  🛡️
                </div>
                <span>Faith &amp; Co Direct Portfolio Managed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Expansive Full-Width Glass Form Container */}
          <div className="lg:col-span-7 bg-[#0d1424] border border-[#38bdf8]/40 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            <h3 className="font-cormorant font-light text-2xl sm:text-3xl text-white mb-6">
              Request Private Viewing
            </h3>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-cormorant font-light text-3xl text-white">Inquiry Confirmed</h4>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Thank you. A senior representative from Faith &amp; Co will contact you directly to coordinate your private viewing of {displayTitle}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7000 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-2">
                      TARGET MOVE DATE
                    </label>
                    <input
                      type="text"
                      placeholder="Target Move Date"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 rounded-xl bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-2xl active:scale-95 mt-4"
                >
                  <span>ARRANGE PRIVATE VIEWING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          9. SIMILAR PROPERTIES SHOWCASE (FULL WIDTH)
      ---------------------------------------------------- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 py-20 sm:py-28 font-dm">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
            CURATED PORTFOLIO
          </span>
          <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight">
            YOU MAY ALSO LIKE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {SIMILAR_PROPERTIES.map((simProp) => (
            <article
              key={simProp.id}
              onClick={onBack}
              className="group relative w-full aspect-[3/4.2] overflow-hidden bg-[#090a14] border border-white/15 cursor-pointer flex flex-col justify-end shadow-2xl transition-all duration-500 hover:border-[#38bdf8]"
            >
              <img
                src={simProp.image}
                alt={simProp.location}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a14]/95 via-[#090a14]/40 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 p-6 sm:p-8 space-y-2">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#38bdf8] uppercase block">
                  {simProp.location}
                </span>
                <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">
                  {simProp.specs}
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-white/15">
                  <span className="text-sm font-bold text-white font-dm">{simProp.price}</span>
                  <span className="text-xs font-bold text-[#C9A84C] tracking-widest uppercase font-dm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    VIEW RESIDENCE →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
