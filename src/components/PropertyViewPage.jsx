import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Maximize2, Check, MapPin, Calendar, Clock, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

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

  const scrollToEnquiry = () => {
    document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Property data fallbacks
  const displayTitle = property?.fullName || property?.title || 'The Chelsea Residence';
  const displayCity = property?.city || 'LONDON, UK';
  const displayPcm = property?.pcm || '£4,250 PCM';
  const displaySpecs = property?.specs || '3 BED  |  2 BATH  |  1,850 SQ FT';
  const heroSrc = property?.image || '/properties/chelsea_hero.png';

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-montserrat selection:bg-amber-200 selection:text-black relative">
      
      {/* ----------------------------------------------------
          1. HERO — CINEMATIC PROPERTY GALLERY
      ---------------------------------------------------- */}
      <section className="relative w-full h-[75vh] sm:h-[82vh] overflow-hidden bg-black flex flex-col justify-between">
        {/* Animated Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroSrc}
            alt={displayTitle}
            className="w-full h-full object-cover animate-hero-zoom filter brightness-[0.95]"
          />
        </div>

        {/* Gradient Overlays for Maximum Editorial Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a14] via-black/25 to-black/60 pointer-events-none" />

        {/* Top Floating Header & Back Navigation */}
        <div className="relative z-30 px-6 lg:px-12 pt-8 sm:pt-10 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 hover:bg-white/20 border border-white/20 text-white text-xs tracking-[0.2em] font-medium uppercase backdrop-blur-md transition-all duration-300 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO PROPERTIES</span>
          </button>

          <span className="font-montserrat font-light text-lg sm:text-xl text-white/90 tracking-widest uppercase">
            Faith &amp; Co
          </span>
        </div>

        {/* Bottom Left Hero Overlay */}
        <div className="relative z-30 px-6 sm:px-10 lg:px-16 pb-12 max-w-4xl space-y-3 animate-fade-up">
          <p className="text-amber-200/90 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
            {displayCity}
          </p>

          <h1 className="font-montserrat font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight drop-shadow-lg">
            {displayTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <span className="text-lg sm:text-2xl font-semibold tracking-wider text-white">
              {displayPcm}
            </span>
            <span className="text-white/40 font-light">•</span>
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-white/90">
              {displaySpecs}
            </span>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. PROPERTY GALLERY
      ---------------------------------------------------- */}
      <section className="w-full bg-[#090a14] py-8 border-b border-white/10 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900 cursor-pointer transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white font-medium uppercase tracking-wider">
                  <span className="truncate">{img.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-amber-200 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
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
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-sm shadow-2xl transition-all duration-300"
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
          <div className="text-center text-white/50 text-xs tracking-widest uppercase pb-2">
            Faith &amp; Co Luxury Property View
          </div>
        </div>
      )}

      {/* ----------------------------------------------------
          3. PROPERTY INTRODUCTION
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Intro Quote */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-200/90 block">
              PROPERTY OVERVIEW
            </span>
            <blockquote className="font-montserrat font-light text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed tracking-[0.03em]">
              "An exceptional contemporary residence in one of London's most desirable neighbourhoods."
            </blockquote>
          </div>

          {/* Right Specifications Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
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
              <span className="font-montserrat font-light text-4xl sm:text-5xl text-white block">2026</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">AVAILABLE</span>
            </div>

            <div className="space-y-1 pt-4 border-t border-white/10">
              <span className="font-montserrat font-light text-2xl sm:text-3xl text-amber-200 block">LONG TERM</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase block">LEASE TYPE</span>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          4. DESCRIPTION
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white leading-tight tracking-[0.05em]">
                DESIGNED FOR<br />
                <span className="text-amber-100/90 font-light">MODERN LIVING.</span>
              </h2>

              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed font-montserrat max-w-xl">
                Set within a sought-after London neighbourhood, this beautifully appointed residence combines refined interiors, generous proportions and effortless modern living. Carefully considered finishes, abundant natural light and seamless indoor-outdoor spaces create a home designed for comfort and longevity.
              </p>

              <div className="pt-4 flex items-center gap-3 text-xs tracking-[0.2em] text-amber-200 uppercase font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Managed Directly by Faith &amp; Co</span>
              </div>
            </div>

            {/* Editorial Image Beside Text */}
            <div className="lg:col-span-6 overflow-hidden rounded-xl border border-white/15 shadow-2xl">
              <img
                src="/properties/gallery_livingroom.png"
                alt="Interior Design Living Space"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. KEY FEATURES
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase block mb-2">
            SPECIFICATION &amp; AMENITIES
          </span>
          <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em]">
            PROPERTY FEATURES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {FEATURES_LIST.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-200/50 transition-all duration-300 flex flex-col justify-between gap-4 group"
            >
              <div className="w-2 h-2 rounded-full bg-amber-200 group-hover:scale-150 transition-transform" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-white/90">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          6. FLOOR PLAN
      ---------------------------------------------------- */}
      <section className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-200/90 uppercase block mb-3">
            ARCHITECTURAL LAYOUT
          </span>
          <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white tracking-[0.05em] mb-8">
            EXPLORE THE SPACE
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
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-black/40 border border-white/15 shadow-2xl relative overflow-hidden group">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-auto text-white stroke-current fill-none transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ strokeWidth: 1.5 }}
            >
              {/* Outer Walls */}
              <rect x="50" y="50" width="700" height="400" rx="4" className="stroke-white/80" strokeWidth="2.5" />
              
              {activeFloor === 'ground' ? (
                <>
                  {/* Ground Floor Layout Rooms */}
                  {/* Living Room */}
                  <rect x="50" y="50" width="380" height="250" className="stroke-white/40" />
                  <text x="240" y="160" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    GRAND RECEPTION / LIVING ROOM (28' x 18')
                  </text>

                  {/* Kitchen & Dining */}
                  <rect x="430" y="50" width="320" height="250" className="stroke-white/40" />
                  <text x="590" y="160" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    CHEF KITCHEN &amp; DINING (22' x 14')
                  </text>

                  {/* Entrance Hall & Staircase */}
                  <rect x="50" y="300" width="450" height="150" className="stroke-white/40" />
                  <text x="275" y="380" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    ENTRANCE FOYER &amp; GALLERY
                  </text>

                  {/* Garden Terrace */}
                  <rect x="500" y="300" width="250" height="150" className="stroke-amber-200/50" strokeDasharray="4 4" />
                  <text x="625" y="380" textAnchor="middle" className="fill-amber-200 font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    SOUTH TERRACE GARDEN
                  </text>
                </>
              ) : (
                <>
                  {/* First Floor Layout Rooms */}
                  {/* Master Bedroom */}
                  <rect x="50" y="50" width="400" height="230" className="stroke-white/40" />
                  <text x="250" y="165" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    MASTER SUITE (20' x 16')
                  </text>

                  {/* En Suite Bathroom */}
                  <rect x="450" y="50" width="300" height="230" className="stroke-white/40" />
                  <text x="600" y="165" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    MARBLE EN SUITE BATHROOM
                  </text>

                  {/* Bedroom 2 */}
                  <rect x="50" y="280" width="350" height="170" className="stroke-white/40" />
                  <text x="225" y="370" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    BEDROOM 2 (16' x 12')
                  </text>

                  {/* Bedroom 3 */}
                  <rect x="400" y="280" width="350" height="170" className="stroke-white/40" />
                  <text x="575" y="370" textAnchor="middle" className="fill-white font-sans text-xs uppercase tracking-widest font-semibold" stroke="none">
                    BEDROOM 3 / GUEST SUITE
                  </text>
                </>
              )}
            </svg>

            <p className="mt-6 text-xs text-white/50 tracking-widest uppercase font-montserrat">
              Architectural Drawing Scale 1:50 • Dimensions approximate
            </p>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          7. LOCATION
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-200/90 block">
              LOCATION &amp; CONNECTIVITY
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white leading-tight tracking-[0.05em]">
              LIFE, WELL<br />CONNECTED.
            </h2>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Situated in the heart of Chelsea, London SW3, enjoying immediate proximity to King's Road, world-class cultural institutions, fine dining, and seamless transport connections.
            </p>

            {/* Travel Times Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">UNDERGROUND</span>
                <span className="font-montserrat font-light text-2xl text-white">5 MIN</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">SCHOOLS</span>
                <span className="font-montserrat font-light text-2xl text-white">8 MIN</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">CITY CENTRE</span>
                <span className="font-montserrat font-light text-2xl text-white">15 MIN</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">AIRPORT</span>
                <span className="font-montserrat font-light text-2xl text-white">35 MIN</span>
              </div>
            </div>
          </div>

          {/* Minimalist Monochrome Map Visual */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl flex items-center justify-center p-8">
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
                <div className="w-12 h-12 rounded-full bg-amber-200/20 border border-amber-200 animate-ping absolute inset-0" />
                <div className="w-12 h-12 rounded-full bg-amber-200/40 border border-amber-300 flex items-center justify-center shadow-[0_0_20px_rgba(253,230,138,0.8)]">
                  <MapPin className="w-6 h-6 text-amber-200" />
                </div>
              </div>

              <div className="mt-4 px-4 py-2 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-xs tracking-widest font-semibold uppercase text-white shadow-xl">
                The Chelsea Residence • London SW3
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          8. AVAILABILITY / ENQUIRY
      ---------------------------------------------------- */}
      <section id="enquiry-section" className="bg-[#17172D] py-20 sm:py-28 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-200 uppercase block">
            PRIVATE VIEWING &amp; LEASING
          </span>

          <h2 className="font-montserrat font-light text-4xl sm:text-6xl text-white tracking-[0.05em] leading-tight">
            MAKE THIS<br />YOUR NEXT HOME.
          </h2>

          <p className="text-white/75 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Interested in this property? Arrange a private viewing with our dedicated property management team.
          </p>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 max-w-md mx-auto space-y-3 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat font-light text-2xl text-white">Inquiry Confirmed</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Thank you. A senior representative from Faith &amp; Co will contact you directly within 2 hours to coordinate your viewing of {displayTitle}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto space-y-4 text-left pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 block mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr / Ms"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 block mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 block mb-1.5">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7000 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 block mb-1.5">
                    PREFERRED DATE
                  </label>
                  <input
                    type="text"
                    placeholder="Target Move / Viewing Date"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95 mt-4"
              >
                <span>ARRANGE A VIEWING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>
      </section>

      {/* ----------------------------------------------------
          9. SIMILAR PROPERTIES
      ---------------------------------------------------- */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-10 py-20 sm:py-28">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase block mb-2">
            CURATED PORTFOLIO
          </span>
          <h2 className="font-montserrat font-light text-3xl sm:text-4xl text-white tracking-[0.05em]">
            YOU MAY ALSO LIKE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {SIMILAR_PROPERTIES.map((simProp) => (
            <article
              key={simProp.id}
              onClick={onBack}
              className="group relative w-full aspect-[3/4.2] overflow-hidden bg-[#101124] cursor-pointer flex flex-col justify-end shadow-2xl transition-all duration-500"
            >
              <img
                src={simProp.image}
                alt={simProp.location}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16]/95 via-[#0a0a16]/40 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 pb-8 px-4 text-center flex flex-col items-center justify-end w-full transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <h3 className="font-montserrat font-light text-3xl text-white drop-shadow-md mb-2 tracking-[0.05em]">
                  {simProp.location}
                </h3>
                <div className="text-xs uppercase tracking-[1.5px] font-sans font-medium text-white/90 mb-1.5">
                  {simProp.specs}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-[1.5px] font-sans font-semibold text-white">
                  {simProp.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------
          10. FINAL CTA & FOOTER
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-20 sm:py-28 border-t border-white/10 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-montserrat font-light text-4xl sm:text-6xl text-white tracking-[0.05em] leading-tight">
            YOUR NEXT<br />
            <span className="text-amber-100/90 font-light">ADDRESS AWAITS.</span>
          </h2>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white hover:bg-amber-200 text-black text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95"
          >
            <span>EXPLORE ALL PROPERTIES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-[1500px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider uppercase gap-4">
          <p>© {new Date().getFullYear()} Faith &amp; Co Property Management Ltd.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer" onClick={onBack}>Browse Residences</span>
            <span className="hover:text-white cursor-pointer" onClick={scrollToEnquiry}>Private Viewing</span>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          11. STICKY MOBILE CTA BAR
      ---------------------------------------------------- */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-black/90 backdrop-blur-lg border-t border-white/15 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase text-white/60 tracking-wider block">RENTAL PRICE</span>
          <span className="text-sm font-semibold text-white">{displayPcm}</span>
        </div>
        <button
          onClick={scrollToEnquiry}
          className="px-6 py-3 rounded-full bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-lg active:scale-95"
        >
          ARRANGE A VIEWING →
        </button>
      </div>

    </div>
  );
}
