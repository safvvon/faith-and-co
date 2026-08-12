import React, { useState, useEffect } from 'react';
import { Check, CheckCircle2, ArrowDown } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

export default function FreeValuationPage({
  onNavigateHome,
  onNavigateProperties,
  onNavigateLandlords,
  onNavigateRentersRights,
  onNavigateHmoLicensing,
  onNavigateGuideToLetting,
  onNavigateContact,
  onNavigateRegisterLandlord,
  onNavigateLetWithUs,
  onNavigateFreeValuation
}) {
  const [formData, setFormData] = useState({
    postcode: '',
    addressLine1: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    bedrooms: '',
    serviceOfInterest: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName || !formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.postcode || !formData.postcode.trim()) {
      newErrors.postcode = 'Property postcode is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({
        postcode: '',
        addressLine1: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        propertyType: '',
        bedrooms: '',
        serviceOfInterest: ''
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* 1. HERO HEADER AREA (Clean Text-Only Landing) */}
      <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-b border-white/10 bg-[#090a14] text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <div>
            <span className="inline-block px-3.5 py-1.5 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-dm tracking-[0.25em] font-medium uppercase">
              FREE &amp; NO OBLIGATION VALUATION
            </span>
          </div>

          <h1 className="font-cormorant font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
            Discover what your <span className="italic text-[#C9A84C] font-normal">property can achieve</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-lg font-light tracking-wide max-w-2xl mx-auto font-dm leading-relaxed">
            Get an honest, expert valuation of your property's rental potential across standard market lettings and specialist high-yield sectors. Takes less than two minutes to request.
          </p>

          <div className="pt-4 flex justify-center font-dm">
            <button
              onClick={() => document.getElementById('valuation-form-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl active:scale-95 rounded-none font-dm"
            >
              <span>REQUEST VALUATION NOW</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN VALUATION SECTION (2-COL SPLIT-SCREEN) */}
      <main id="valuation-form-section" className="w-full max-w-[1350px] mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Benefits & Overview (col-span-5) */}
          <div className="lg:col-span-5 relative space-y-8 animate-slide-left font-dm">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] block font-dm animate-float-slow">
                EXPERT RENTAL AUDIT
              </span>
              <h2 className="font-cormorant font-light text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Tailored insight for <span className="italic text-[#C9A84C] font-normal">maximum return</span>
              </h2>
              <p className="font-dm text-sm sm:text-base font-light text-white/70 leading-relaxed">
                Most estate agents only look at standard open-market lets. At Faith &amp; Co, we also evaluate guaranteed rent, corporate tenants, HMO room rates, and supported care housing options to ensure you achieve peak yield.
              </p>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-start pb-4 border-b border-white/5 group hover:pl-2 transition-all duration-300">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  <strong className="text-white font-medium">Accurate market valuation</strong> — based on real local data and current tenant demand.
                </p>
              </div>

              <div className="flex items-start pb-4 border-b border-white/5 group hover:pl-2 transition-all duration-300">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  <strong className="text-white font-medium">Specialist options explored</strong> — guaranteed rent, care sector, HMO and corporate.
                </p>
              </div>

              <div className="flex items-start pb-4 border-b border-white/5 group hover:pl-2 transition-all duration-300">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  <strong className="text-white font-medium">No obligation, no pressure</strong> — just honest advice you can act on.
                </p>
              </div>

              <div className="flex items-start group hover:pl-2 transition-all duration-300">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  <strong className="text-white font-medium">Fast response</strong> — we aim to come back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Valuation Form (col-span-7) */}
          <div className="lg:col-span-7 bg-[#0d0f1f]/80 border border-white/15 p-8 sm:p-12 shadow-2xl relative rounded-xl backdrop-blur-xl animate-slide-right animate-pulse-glow">
            
            {/* Form Header */}
            <div className="mb-8 space-y-2">
              <h2 className="font-cormorant font-light text-3xl sm:text-4xl text-white tracking-tight">
                Valuation <span className="italic text-[#C9A84C] font-normal">request</span>
              </h2>
              <p className="font-dm text-xs sm:text-sm text-white/60 font-light">
                Tell us about your property and we will prepare a tailored valuation report.
              </p>
            </div>

            {/* Success State */}
            {isSubmitted ? (
              <div className="p-8 border border-[#C9A84C]/50 bg-[#C9A84C]/[0.08] text-center space-y-4 animate-fade-in my-6 rounded-lg">
                <CheckCircle2 className="w-12 h-12 text-[#C9A84C] mx-auto" />
                <h3 className="font-cormorant text-3xl font-light text-white">Valuation Request Received</h3>
                <p className="font-dm text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  Thank you — your property valuation request has been submitted. A specialist will be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-dm tracking-widest text-[#C9A84C] hover:underline uppercase cursor-pointer"
                >
                  Request another valuation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Property Postcode & Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Property Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. SW1X 7XL"
                      className={`w-full bg-white/[0.04] border ${
                        errors.postcode ? 'border-rose-500' : 'border-white/15'
                      } px-4 py-3.5 text-sm text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm`}
                    />
                    {errors.postcode && (
                      <p className="text-rose-400 font-dm text-xs mt-1.5">{errors.postcode}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleChange}
                      placeholder="e.g. 42 Hans Place"
                      className="w-full bg-white/[0.04] border border-white/15 px-4 py-3.5 text-sm text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Harrison"
                      className={`w-full bg-white/[0.04] border ${
                        errors.firstName ? 'border-rose-500' : 'border-white/15'
                      } px-4 py-3.5 text-sm text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm`}
                    />
                    {errors.firstName && (
                      <p className="text-rose-400 font-dm text-xs mt-1.5">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Vance"
                      className="w-full bg-white/[0.04] border border-white/15 px-4 py-3.5 text-sm text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. harrison@domain.co.uk"
                      className={`w-full bg-white/[0.04] border ${
                        errors.email ? 'border-rose-500' : 'border-white/15'
                      } px-4 py-3.5 text-sm text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 font-dm text-xs mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +44 20 8574 1700"
                      className="w-full bg-white/[0.04] border border-white/15 px-4 py-3.5 text-sm text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* Dropdowns: Property Type & Bedrooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full bg-[#090a14] border border-white/15 px-4 py-3.5 text-sm text-white font-dm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                    >
                      <option value="">Select Property Type</option>
                      <option value="Flat / Apartment">Flat / Apartment</option>
                      <option value="House">House</option>
                      <option value="HMO">HMO</option>
                      <option value="Whole Block">Whole Block</option>
                      <option value="C2 / Care Property">C2 / Care Property</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                      Bedrooms
                    </label>
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full bg-[#090a14] border border-white/15 px-4 py-3.5 text-sm text-white font-dm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                    >
                      <option value="">Select Bedrooms</option>
                      <option value="Studio">Studio</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5+">5+ Bedrooms</option>
                    </select>
                  </div>
                </div>

                {/* Service of Interest Dropdown */}
                <div>
                  <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/80 mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    className="w-full bg-[#090a14] border border-white/15 px-4 py-3.5 text-sm text-white font-dm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-sm"
                  >
                    <option value="">Select Service</option>
                    <option value="Let Only">Let Only</option>
                    <option value="Rent Collection">Rent Collection</option>
                    <option value="Fully Managed">Fully Managed</option>
                    <option value="Guaranteed Rent">Guaranteed Rent</option>
                    <option value="HMO Management">HMO Management</option>
                    <option value="Specialist / Care Sector">Specialist / Care Sector</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Full Width Gold CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-dm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-sm active:scale-98"
                  >
                    REQUEST MY FREE VALUATION
                  </button>
                </div>

                {/* Privacy Message */}
                <p className="font-dm text-[11px] text-white/40 font-light text-center leading-relaxed pt-2">
                  By submitting you agree to our Privacy Policy. We'll only use your details to provide your valuation and respond to your enquiry.
                </p>

              </form>
            )}

          </div>

        </div>
      </main>

      {/* 3. HOW OUR VALUATION WORKS (3-STEP PROCESS) */}
      <section className="w-full bg-[#090a14] py-20 sm:py-28 border-t border-white/10 font-dm">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-fade-up">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A84C] uppercase block">
              VALUATION PROCESS
            </span>
            <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
              Three steps to <span className="italic text-[#C9A84C] font-normal">your rental report</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-4 hover:border-[#C9A84C]/40 transition-all duration-300 shadow-xl rounded-sm animate-fade-up">
              <span className="font-mono text-sm tracking-widest text-[#C9A84C] block">01</span>
              <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">
                Submit Property Details
              </h3>
              <p className="font-dm text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Provide your property details and contact information in under two minutes.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-4 hover:border-[#C9A84C]/40 transition-all duration-300 shadow-xl rounded-sm animate-fade-up">
              <span className="font-mono text-sm tracking-widest text-[#C9A84C] block">02</span>
              <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">
                Deep Data &amp; Yield Audit
              </h3>
              <p className="font-dm text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                We analyze local comparables, active council frameworks, and specialist demand to calculate optimal rent.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 space-y-4 hover:border-[#C9A84C]/40 transition-all duration-300 shadow-xl rounded-sm animate-fade-up">
              <span className="font-mono text-sm tracking-widest text-[#C9A84C] block">03</span>
              <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">
                Tailored Valuation Report
              </h3>
              <p className="font-dm text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Receive a clear report presenting open-market, guaranteed rent, and specialist options with zero obligation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateHome={onNavigateHome}
        onNavigateProperties={onNavigateProperties}
        onNavigateLandlords={onNavigateLandlords}
        onNavigateRentersRights={onNavigateRentersRights}
        onNavigateHmoLicensing={onNavigateHmoLicensing}
        onNavigateGuideToLetting={onNavigateGuideToLetting}
        onNavigateContact={onNavigateContact}
        onNavigateRegisterLandlord={onNavigateRegisterLandlord}
        onNavigateLetWithUs={onNavigateLetWithUs}
        onNavigateFreeValuation={onNavigateFreeValuation}
      />

    </div>
  );
}
