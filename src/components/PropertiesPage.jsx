import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, RotateCcw, ChevronDown, ArrowRight, ShieldCheck, X } from 'lucide-react';
import {
  propertiesData,
  LOCATIONS_LIST,
  PROPERTY_TYPES,
  BEDROOM_OPTIONS,
  PRICE_RANGES,
  AVAILABILITY_OPTIONS
} from '../data/propertiesData';
import PropertyDetailsModal from './PropertyDetailsModal';

export default function PropertiesPage({ onSelectProperty }) {
  // Filter States
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBeds, setSelectedBeds] = useState(0);
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(0);
  const [selectedAvailability, setSelectedAvailability] = useState('Any');
  const [sortBy, setSortBy] = useState('Featured');
  
  // Applied filters state for smooth application
  const [appliedFilters, setAppliedFilters] = useState({
    location: 'All Locations',
    type: 'All Types',
    beds: 0,
    priceIdx: 0,
    availability: 'Any'
  });

  // UI States
  const [isFiltering, setIsFiltering] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedPropertyModal, setSelectedPropertyModal] = useState(null);

  // Apply filters trigger
  const handleApplyFilters = () => {
    setIsFiltering(true);
    setTimeout(() => {
      setAppliedFilters({
        location: selectedLocation,
        type: selectedType,
        beds: selectedBeds,
        priceIdx: selectedPriceIdx,
        availability: selectedAvailability
      });
      setVisibleCount(12);
      setIsFiltering(false);
      setIsMobileFilterOpen(false);
    }, 300);
  };

  // Reset filters trigger
  const handleResetFilters = () => {
    setIsFiltering(true);
    setTimeout(() => {
      setSelectedLocation('All Locations');
      setSelectedType('All Types');
      setSelectedBeds(0);
      setSelectedPriceIdx(0);
      setSelectedAvailability('Any');
      setAppliedFilters({
        location: 'All Locations',
        type: 'All Types',
        beds: 0,
        priceIdx: 0,
        availability: 'Any'
      });
      setVisibleCount(12);
      setIsFiltering(false);
      setIsMobileFilterOpen(false);
    }, 300);
  };

  // Filter & Sort Logic
  const filteredAndSortedProperties = useMemo(() => {
    let result = propertiesData.filter((property) => {
      // Location filter
      if (appliedFilters.location !== 'All Locations' && property.city.toLowerCase() !== appliedFilters.location.toLowerCase()) {
        return false;
      }
      // Property type filter
      if (appliedFilters.type !== 'All Types' && property.type.toLowerCase() !== appliedFilters.type.toLowerCase()) {
        return false;
      }
      // Bedrooms filter
      if (property.beds < appliedFilters.beds) {
        return false;
      }
      // Price range filter
      const priceConfig = PRICE_RANGES[appliedFilters.priceIdx];
      if (property.priceValue < priceConfig.min || property.priceValue > priceConfig.max) {
        return false;
      }
      // Availability filter
      if (appliedFilters.availability !== 'Any' && property.availability !== appliedFilters.availability) {
        return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'Newest') {
      result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.priceValue - a.priceValue);
    }

    return result;
  }, [appliedFilters, sortBy]);

  const displayedProperties = filteredAndSortedProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedProperties.length;

  const handleCardClick = (property) => {
    if (onSelectProperty) {
      onSelectProperty(property);
    } else {
      setSelectedPropertyModal(property);
    }
  };

  return (
    <div id="explore-properties" className="w-full min-h-screen bg-[#090a14] text-white font-montserrat select-none">
      
      {/* ----------------------------------------------------
          1. HERO HEADER AREA
      ---------------------------------------------------- */}
      <section className="w-full bg-gradient-to-b from-[#17172D] to-[#242438] pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-16 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-200 block font-montserrat">
            MANAGED PORTFOLIO
          </span>

          <h1 className="font-montserrat font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight">
            EXPLORE PROPERTIES
          </h1>

          <p className="text-white/80 text-sm sm:text-lg font-light tracking-wide max-w-2xl mx-auto font-montserrat leading-relaxed">
            Discover thoughtfully managed homes across some of the UK's most desirable locations.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. PROPERTY SEARCH / FILTER AREA (DESKTOP & MOBILE)
      ---------------------------------------------------- */}
      <section className="w-full bg-[#121324] border-b border-white/10 sticky top-0 z-30 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          
          {/* Desktop Filter Bar */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            
            {/* Filter Dropdowns Row */}
            <div className="flex items-center gap-3 flex-1 flex-wrap">
              
              {/* Location */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-semibold">LOCATION</label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="appearance-none bg-[#1c1d33] border border-white/15 rounded-md px-3.5 py-2 pr-8 text-xs text-white focus:outline-none focus:border-amber-200 cursor-pointer transition-colors"
                  >
                    {LOCATIONS_LIST.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#17172D] text-white">{loc}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-semibold">TYPE</label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none bg-[#1c1d33] border border-white/15 rounded-md px-3.5 py-2 pr-8 text-xs text-white focus:outline-none focus:border-amber-200 cursor-pointer transition-colors"
                  >
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#17172D] text-white">{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Bedrooms */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-semibold">BEDROOMS</label>
                <div className="relative">
                  <select
                    value={selectedBeds}
                    onChange={(e) => setSelectedBeds(Number(e.target.value))}
                    className="appearance-none bg-[#1c1d33] border border-white/15 rounded-md px-3.5 py-2 pr-8 text-xs text-white focus:outline-none focus:border-amber-200 cursor-pointer transition-colors"
                  >
                    {BEDROOM_OPTIONS.map((bed) => (
                      <option key={bed.label} value={bed.value} className="bg-[#17172D] text-white">{bed.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Price Range */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-semibold">PRICE RANGE</label>
                <div className="relative">
                  <select
                    value={selectedPriceIdx}
                    onChange={(e) => setSelectedPriceIdx(Number(e.target.value))}
                    className="appearance-none bg-[#1c1d33] border border-white/15 rounded-md px-3.5 py-2 pr-8 text-xs text-white focus:outline-none focus:border-amber-200 cursor-pointer transition-colors"
                  >
                    {PRICE_RANGES.map((range, idx) => (
                      <option key={range.label} value={idx} className="bg-[#17172D] text-white">{range.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Availability */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-semibold">AVAILABILITY</label>
                <div className="relative">
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="appearance-none bg-[#1c1d33] border border-white/15 rounded-md px-3.5 py-2 pr-8 text-xs text-white focus:outline-none focus:border-amber-200 cursor-pointer transition-colors"
                  >
                    {AVAILABILITY_OPTIONS.map((avail) => (
                      <option key={avail} value={avail} className="bg-[#17172D] text-white">{avail}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Filter Action Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={handleApplyFilters}
                className="px-5 py-2.5 rounded-md bg-white hover:bg-amber-200 text-black text-xs tracking-[1.5px] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                APPLY FILTERS
              </button>

              <button
                onClick={handleResetFilters}
                className="p-2.5 rounded-md bg-[#1c1d33] hover:bg-white/10 border border-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#1c1d33] border border-white/20 text-xs tracking-widest font-semibold uppercase text-white cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-200" />
              <span>FILTER PROPERTIES</span>
            </button>

            <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
              {filteredAndSortedProperties.length} HOMES
            </span>
          </div>

        </div>
      </section>

      {/* Mobile Bottom-Sheet Filter Panel */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in lg:hidden">
          <div 
            className="absolute inset-0"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="relative w-full max-w-md bg-[#121324] border-l border-white/15 h-full p-6 flex flex-col justify-between z-10 overflow-y-auto">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                  FILTER PROPERTIES
                </span>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Inputs */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[1.5px] text-white/60">LOCATION</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-[#1c1d33] border border-white/15 rounded-md p-3 text-xs text-white"
                  >
                    {LOCATIONS_LIST.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[1.5px] text-white/60">PROPERTY TYPE</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-[#1c1d33] border border-white/15 rounded-md p-3 text-xs text-white"
                  >
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[1.5px] text-white/60">BEDROOMS</label>
                  <select
                    value={selectedBeds}
                    onChange={(e) => setSelectedBeds(Number(e.target.value))}
                    className="w-full bg-[#1c1d33] border border-white/15 rounded-md p-3 text-xs text-white"
                  >
                    {BEDROOM_OPTIONS.map((bed) => (
                      <option key={bed.label} value={bed.value}>{bed.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[1.5px] text-white/60">PRICE RANGE</label>
                  <select
                    value={selectedPriceIdx}
                    onChange={(e) => setSelectedPriceIdx(Number(e.target.value))}
                    className="w-full bg-[#1c1d33] border border-white/15 rounded-md p-3 text-xs text-white"
                  >
                    {PRICE_RANGES.map((range, idx) => (
                      <option key={range.label} value={idx}>{range.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[1.5px] text-white/60">AVAILABILITY</label>
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="w-full bg-[#1c1d33] border border-white/15 rounded-md p-3 text-xs text-white"
                  >
                    {AVAILABILITY_OPTIONS.map((avail) => (
                      <option key={avail} value={avail}>{avail}</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={handleApplyFilters}
                className="w-full py-3.5 rounded-md bg-white hover:bg-amber-200 text-black text-xs tracking-widest font-semibold uppercase transition-all"
              >
                APPLY FILTERS
              </button>
              <button
                onClick={handleResetFilters}
                className="w-full py-3 rounded-md bg-[#1c1d33] text-white/70 hover:text-white text-xs tracking-widest uppercase transition-all"
              >
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------
          3. RESULTS HEADER & SORTING
      ---------------------------------------------------- */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-12 pb-6 flex items-center justify-between border-b border-white/10 text-xs">
        
        {/* Left Count */}
        <div className="space-y-0.5">
          <h2 className="font-montserrat font-light text-lg sm:text-xl text-white tracking-[0.05em] uppercase">
            AVAILABLE HOMES
          </h2>
          <span className="text-white/50 text-[11px] font-mono tracking-wider uppercase block">
            {filteredAndSortedProperties.length} {filteredAndSortedProperties.length === 1 ? 'PROPERTY' : 'PROPERTIES'}
          </span>
        </div>

        {/* Right Sorting Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-white/50 text-[10px] uppercase tracking-[1.5px] font-semibold hidden sm:inline-block">
            SORT BY:
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#1c1d33] border border-white/15 rounded-md px-3.5 py-1.5 pr-8 text-xs text-white focus:outline-none focus:border-amber-200 cursor-pointer transition-colors"
            >
              <option value="Featured" className="bg-[#17172D] text-white">Featured</option>
              <option value="Newest" className="bg-[#17172D] text-white">Newest</option>
              <option value="Price: Low to High" className="bg-[#17172D] text-white">Price: Low to High</option>
              <option value="Price: High to Low" className="bg-[#17172D] text-white">Price: High to Low</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-white/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </section>

      {/* ----------------------------------------------------
          4. PROPERTY CATALOGUE 4-COLUMN GRID
      ---------------------------------------------------- */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        
        {filteredAndSortedProperties.length === 0 ? (
          /* Empty Filter State */
          <div className="py-24 text-center space-y-4 max-w-md mx-auto animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 text-amber-200 flex items-center justify-center mx-auto">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
              NO PROPERTIES FOUND
            </h3>
            <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed font-montserrat">
              Try adjusting your search criteria to discover more available homes.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 rounded-md bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-md"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          /* 4-Column Tall Editorial Grid (~3:5 ratio) */
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${
            isFiltering ? 'opacity-30' : 'opacity-100'
          }`}>
            {displayedProperties.map((property) => (
              <article
                key={property.id}
                onClick={() => handleCardClick(property)}
                className="group relative w-full aspect-[3/5] overflow-hidden bg-[#101124] rounded-sm cursor-pointer flex flex-col justify-between shadow-2xl transition-all duration-500 border border-white/5 hover:border-amber-200/40"
              >
                {/* Full Bleed High Quality Photography */}
                <img
                  src={property.image}
                  alt={property.fullName || property.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a14]/95 via-black/30 to-black/20 transition-opacity duration-500" />

                {/* Top Status Tag */}
                <div className="relative z-10 p-5 flex justify-between items-start">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase backdrop-blur-md border ${
                    property.availability === 'Available Now'
                      ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-950/70 border-amber-500/40 text-amber-200'
                  }`}>
                    {property.availability}
                  </span>
                </div>

                {/* Centered Editorial Typography Over Image */}
                <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center justify-end w-full transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-amber-200/90 uppercase block mb-1">
                    {property.title}
                  </span>

                  <h3 className="font-montserrat font-light text-2xl sm:text-3xl text-white drop-shadow-md mb-2 tracking-[0.05em] leading-tight">
                    {property.fullName}
                  </h3>

                  <div className="text-xs uppercase tracking-[1.5px] font-sans font-medium text-white/85 mb-1">
                    {property.specs}
                  </div>

                  <div className="text-sm sm:text-base font-semibold tracking-[1.5px] font-sans text-white">
                    {property.pcm}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="pt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs tracking-[0.2em] font-semibold uppercase backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
            >
              <span>LOAD MORE PROPERTIES</span>
              <ChevronDown className="w-4 h-4 text-amber-200" />
            </button>
          </div>
        )}

      </section>

      {/* Property Details Modal Fallback */}
      {selectedPropertyModal && (
        <PropertyDetailsModal
          property={selectedPropertyModal}
          onClose={() => setSelectedPropertyModal(null)}
        />
      )}

    </div>
  );
}
