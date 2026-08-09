import React, { useState } from 'react';
import { propertiesData, CATEGORIES } from '../data/propertiesData';
import PropertyDetailsModal from './PropertyDetailsModal';

export default function HomePropertiesGrid({ onSelectProperty }) {
  const [activeCategory, setActiveCategory] = useState('FEATURED HOMES');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setIsFiltering(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsFiltering(false);
    }, 200);
  };

  const handleCardClick = (property) => {
    if (onSelectProperty) {
      onSelectProperty(property);
    } else {
      setSelectedProperty(property);
    }
  };

  // Filter properties by category
  const filteredProperties = propertiesData.filter((property) =>
    property.categories.includes(activeCategory)
  );

  return (
    <section 
      id="explore-properties"
      className="w-full min-h-screen bg-[#090a14] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-10 relative font-montserrat select-none"
    >
      {/* Top Vertical White Line matching reference image */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-[1px] h-12 bg-white/40 mb-6" />

        {/* Category Navigation */}
        <nav className="w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex items-center justify-center min-w-max gap-8 sm:gap-12 px-4 border-b border-white/10 pb-4">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-xs sm:text-sm uppercase tracking-[2px] font-medium transition-all duration-300 py-1 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold shadow-[0_2px_0_0_#ffffff]'
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Property Showcase 4-Column Grid */}
      <div className="max-w-[1500px] mx-auto">
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 transition-opacity duration-300 ${
            isFiltering ? 'opacity-30' : 'opacity-100'
          }`}
        >
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              onClick={() => handleCardClick(property)}
              className="group relative w-full aspect-[3/4.3] overflow-hidden bg-[#101124] cursor-pointer flex flex-col justify-end shadow-2xl transition-all duration-500"
            >
              {/* Full Bleed High Quality Photography */}
              <img
                src={property.image}
                alt={property.fullName || property.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
                loading="lazy"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16]/95 via-[#0a0a16]/40 to-transparent transition-opacity duration-500" />

              {/* Centered Typography matching reference layout */}
              <div className="relative z-10 pb-8 sm:pb-10 px-4 text-center flex flex-col items-center justify-end w-full transition-transform duration-500 ease-out group-hover:-translate-y-2">
                {/* Large Title using Montserrat font-light */}
                <h3 className="font-montserrat font-light text-3xl sm:text-3xl lg:text-[34px] text-white drop-shadow-md mb-2 tracking-[0.05em] leading-tight">
                  {property.title}
                </h3>

                {/* Specs Line */}
                <div className="text-xs uppercase tracking-[1.5px] font-sans font-medium text-white/90 mb-1.5">
                  {property.specs}
                </div>

                {/* Rental Price */}
                <div className="text-xs sm:text-sm uppercase tracking-[1.5px] font-sans font-semibold text-white">
                  {property.pcm}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}
