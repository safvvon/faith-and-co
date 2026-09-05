import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HomeFooterCta({ onStartConversation, onBrowseResidences, onLandlordPortal, onRentersRights, onHmoLicensing, onGuideToLetting, onRegisterLandlord }) {
  return (
    <section className="w-full bg-[#090a14] py-24 sm:py-32 border-t border-white/10 text-center px-6 font-dm">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
        <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight leading-tight">
          Your property. <span className="italic text-[#C9A84C] font-normal">Our priority.</span>
        </h2>

        <p className="text-white/60 text-xs sm:text-sm tracking-wider uppercase font-light font-dm">
          Speak with our property management team today.
        </p>

        <button
          onClick={onStartConversation}
          className="inline-flex items-center gap-3 px-10 py-4.5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95 rounded-none font-dm"
        >
          <span>START A CONVERSATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
