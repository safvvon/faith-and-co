import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Calendar, ArrowRight, Bed, Bath, Home, Maximize2, MapPin } from 'lucide-react';

export default function PropertyDetailsModal({ property, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    notes: ''
  });

  if (!property) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#0c0d10] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white my-auto max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Image & Quick Badges */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-[550px] bg-neutral-900">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-black/40" />
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-amber-200 backdrop-blur-md">
              TO LET
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[11px] font-semibold tracking-wider uppercase text-white/90 backdrop-blur-md flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Faith &amp; Co Managed
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-1.5 text-xs text-white/70 tracking-wider uppercase font-montserrat mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{property.location}</span>
            </div>
            <h2 className="font-montserrat font-light text-3xl text-white tracking-[0.05em] drop-shadow-md">
              {property.title}
            </h2>
            <div className="mt-2 text-xl font-light text-amber-200 font-montserrat tracking-wide">
              {property.pcm}
            </div>
          </div>
        </div>

        {/* Right Side: Details & Inquiry Form */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between custom-scrollbar">
          <div>
            {/* Quick Specs Grid */}
            <div className="grid grid-cols-4 gap-2 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-center mb-6">
              <div className="flex flex-col items-center">
                <Bed className="w-4 h-4 text-amber-200 mb-1" />
                <span className="text-[10px] uppercase text-white/60 tracking-wider">Bedrooms</span>
                <span className="text-sm font-semibold text-white">{property.beds}</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/10">
                <Bath className="w-4 h-4 text-amber-200 mb-1" />
                <span className="text-[10px] uppercase text-white/60 tracking-wider">Bathrooms</span>
                <span className="text-sm font-semibold text-white">{property.baths}</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/10">
                <Home className="w-4 h-4 text-amber-200 mb-1" />
                <span className="text-[10px] uppercase text-white/60 tracking-wider">Type</span>
                <span className="text-xs font-semibold text-white truncate max-w-[65px]">{property.type}</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/10">
                <Maximize2 className="w-4 h-4 text-amber-200 mb-1" />
                <span className="text-[10px] uppercase text-white/60 tracking-wider">Area</span>
                <span className="text-[11px] font-semibold text-white truncate max-w-[65px]">{property.sqft}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold tracking-widest text-amber-200/90 uppercase mb-2">
                Property Overview
              </h3>
              <p className="text-sm font-light text-white/80 leading-relaxed font-montserrat">
                {property.description}
              </p>
            </div>

            {/* Highlights */}
            {property.highlights && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold tracking-widest text-amber-200/90 uppercase mb-3">
                  Landlord Direct Features
                </h3>
                <ul className="space-y-2">
                  {property.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-white/85 font-montserrat">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Form / Confirmation */}
          <div className="pt-6 border-t border-white/10">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center animate-fade-in">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-base font-medium text-white mb-1">Inquiry Received</h4>
                <p className="text-xs text-white/70 font-montserrat">
                  Our private management team will reach out directly to arrange your private viewing of {property.title}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h3 className="text-xs font-semibold tracking-widest text-white/90 uppercase flex items-center justify-between">
                  <span>Enquire with Landlord</span>
                  <span className="text-[10px] text-amber-300 font-normal">Direct Management</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-300 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-300 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-300 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Target Move-in Date"
                    value={formData.moveDate}
                    onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-amber-300 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <span>SUBMIT PRIVATE INQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
