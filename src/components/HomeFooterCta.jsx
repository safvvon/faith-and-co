import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HomeFooterCta({ onStartConversation, onBrowseResidences, onLandlordPortal }) {
  return (
    <section className="w-full bg-[#090a14] py-24 sm:py-32 border-t border-white/10 text-center px-6 font-montserrat">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="font-montserrat font-light text-4xl sm:text-6xl text-white tracking-[0.05em] leading-tight">
          YOUR PROPERTY.<br />
          <span className="text-amber-100/90 font-light">OUR PRIORITY.</span>
        </h2>

        <p className="text-white/60 text-xs sm:text-sm tracking-wider uppercase font-light font-montserrat">
          SPEAK WITH OUR PROPERTY MANAGEMENT TEAM TODAY.
        </p>

        <button
          onClick={onStartConversation}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white hover:bg-amber-200 text-black text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95"
        >
          <span>START A CONVERSATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-[1500px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider uppercase gap-4 font-montserrat">
        <p>© {new Date().getFullYear()} FAITH &amp; CO PROPERTY MANAGEMENT LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span 
            className="hover:text-white cursor-pointer transition-colors" 
            onClick={onBrowseResidences}
          >
            BROWSE RESIDENCES
          </span>
          <span 
            className="hover:text-white cursor-pointer transition-colors" 
            onClick={onLandlordPortal}
          >
            LANDLORD PORTAL
          </span>
        </div>
      </div>
    </section>
  );
}
