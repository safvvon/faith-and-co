import React from 'react';
import LondonBlueprintMap from './LondonBlueprintMap';

export default function BlankLandingHero() {
  return (
    <section className="relative w-full h-screen bg-[#090a14] flex flex-col justify-between items-center overflow-hidden select-none font-dm">
      {/* Background Interactive London Blueprint Map — Clean Full View */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LondonBlueprintMap />
      </div>
    </section>
  );
}
