import React, { useState } from 'react';
import { propertiesData, CATEGORIES } from '../data/propertiesData';
import PropertyDetailsModal from './PropertyDetailsModal';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePropertiesGrid({ onSelectProperty }) {
  useScrollReveal();

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
      className="w-full min-h-screen bg-[#090a14] text-white pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 relative font-montserrat select-none"
    >
      {/* Category Navigation */}
      <div className="flex flex-col items-center justify-center mb-8 reveal-on-scroll">

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
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-opacity duration-300 ${
            isFiltering ? 'opacity-30' : 'opacity-100'
          }`}
        >
          {filteredProperties.map((property, idx) => (
            <article
              key={property.id}
              onClick={() => handleCardClick(property)}
              className={`group relative w-full aspect-[3/4.8] overflow-hidden bg-[#101124] cursor-pointer flex flex-col justify-end shadow-2xl transition-all duration-500 border border-white/10 hover-glow-card rounded-sm reveal-on-scroll stagger-${(idx % 4) + 1}`}
            >
              {/* Glass Shine Beam on Hover */}
              <div className="glass-shine-beam" />

              {/* Full Bleed High Quality Photography */}
              <img
                src={property.image}
                alt={property.fullName || property.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.08]"
                loading="lazy"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a14] via-[#090a14]/60 to-black/30 transition-opacity duration-500" />

              {/* Centered Typography matching reference layout */}
              <div className="relative z-10 pb-8 sm:pb-12 px-6 text-center flex flex-col items-center justify-end w-full transition-transform duration-500 ease-out font-dm group-hover:-translate-y-1">
                {/* Large Title using Cormorant font */}
                <h3 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-[38px] text-white drop-shadow-md mb-2 tracking-tight leading-tight group-hover:text-[#C9A84C] transition-colors">
                  {property.title}
                </h3>

                {/* Specs Line */}
                <div className="text-xs sm:text-sm uppercase tracking-[2px] font-dm font-light text-white/90 mb-2">
                  {property.specs}
                </div>

                {/* Rental Price */}
                <div className="text-sm sm:text-base lg:text-lg uppercase tracking-[2px] font-dm font-semibold text-[#C9A84C]">
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
