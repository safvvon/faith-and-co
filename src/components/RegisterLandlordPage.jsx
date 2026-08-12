import React, { useState, useEffect } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

export default function RegisterLandlordPage({
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    numberOfProperties: '',
    propertyType: '',
    notes: ''
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        postcode: '',
        numberOfProperties: '',
        propertyType: '',
        notes: ''
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-[#FFFFFF] font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* ----------------------------------------------------
          4. MAIN REGISTRATION LAYOUT (2-COL SPLIT-SCREEN)
      ---------------------------------------------------- */}
      <main className="w-full max-w-[1350px] mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT — Brand / Introduction (~45% width) */}
          <div className="lg:col-span-5 relative space-y-8 animate-fade-up">
            <div className="relative z-10 space-y-6">
              {/* Small Uppercase Gold Eyebrow */}
              <div>
                <span className="inline-block px-3.5 py-1.5 border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-dm tracking-[0.25em] font-medium uppercase">
                  LANDLORD REGISTRATION
                </span>
              </div>

              {/* Large Elegant Serif Headline */}
              <h1 className="font-cormorant font-light text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
                Register your interest <span className="italic text-[#C9A84C] font-normal">with us</span>
              </h1>

              {/* Supporting Copy */}
              <p className="font-dm text-sm sm:text-base font-light text-white/70 leading-relaxed max-w-md">
                Tell us about yourself and your property, and we'll be in touch to discuss how Faith &amp; Co can help you let it well. Registering takes just a moment and commits you to nothing.
              </p>
            </div>

            {/* Vertically Stacked Benefit Points */}
            <div className="relative z-10 space-y-5 pt-4 border-t border-[rgba(255,255,255,0.07)]">
              <div className="flex items-start pb-4 border-b border-[rgba(255,255,255,0.04)]">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  Priority access to tenants, operators and council demand.
                </p>
              </div>

              <div className="flex items-start pb-4 border-b border-[rgba(255,255,255,0.04)]">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  A tailored recommendation on the right service for your property.
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] mr-3.5 mt-0.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="font-dm text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  No obligation — registering simply opens the conversation.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Interactive Form Panel */}
          <div className="lg:col-span-7 bg-[#090a14] border border-[rgba(255,255,255,0.08)] p-8 sm:p-12 shadow-2xl relative">
            
            {/* Form Header */}
            <div className="mb-8 space-y-2">
              <h2 className="font-cormorant font-light text-3xl sm:text-4xl text-white tracking-tight">
                Landlord <span className="italic text-[#C9A84C] font-normal">registration</span>
              </h2>
              <p className="font-dm text-xs sm:text-sm text-white/60 font-light">
                Fill in your details below and a member of our property team will contact you.
              </p>
            </div>

            {/* Inline Submission Success Message */}
            {isSubmitted ? (
              <div className="p-8 border border-[#C9A84C]/50 bg-[#C9A84C]/[0.06] text-center space-y-4 animate-fade-in my-6">
                <CheckCircle2 className="w-10 h-10 text-[#C9A84C] mx-auto" />
                <h3 className="font-cormorant text-2xl font-light text-white">Registration Received</h3>
                <p className="font-dm text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  Thank you — your landlord registration details have been submitted. We will be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-dm tracking-widest text-[#C9A84C] hover:underline uppercase"
                >
                  Register another property
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander"
                      className={`w-full bg-white/[0.03] border ${
                        errors.firstName ? 'border-rose-500' : 'border-white/10'
                      } px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none`}
                    />
                    {errors.firstName && (
                      <p className="text-rose-400 font-dm text-xs mt-1.5">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Kensington"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alexander@domain.co.uk"
                      className={`w-full bg-white/[0.03] border ${
                        errors.email ? 'border-rose-500' : 'border-white/10'
                      } px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 font-dm text-xs mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +44 20 8574 1700"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Property Postcode */}
                <div>
                  <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                    Property Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="e.g. W1K 2HP"
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                  />
                </div>

                {/* Dropdowns: Number of Properties & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Number of Properties
                    </label>
                    <select
                      name="numberOfProperties"
                      value={formData.numberOfProperties}
                      onChange={handleChange}
                      className="w-full bg-[#090a14] border border-white/10 px-4 py-3.5 text-sm text-white font-dm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                    >
                      <option value="">Please select</option>
                      <option value="1">1 Property</option>
                      <option value="2-4">2 – 4 Properties</option>
                      <option value="5-10">5 – 10 Properties</option>
                      <option value="10+">10+ Properties (Portfolio)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full bg-[#090a14] border border-white/10 px-4 py-3.5 text-sm text-white font-dm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                    >
                      <option value="">Please select</option>
                      <option value="Single Buy-to-Let">Single Buy-to-Let</option>
                      <option value="HMO">HMO (House in Multiple Occupation)</option>
                      <option value="Block of Flats">Block of Flats</option>
                      <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
                      <option value="Specialist / C2">Specialist / C2</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                    Additional Notes / Requirements
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your property goals or current status..."
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-dm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-98"
                  >
                    SUBMIT REGISTRATION
                  </button>
                </div>

                {/* Legal Privacy Disclaimer */}
                <p className="font-dm text-[11px] text-white/40 font-light text-center leading-relaxed pt-2">
                  By submitting this form you agree to our Privacy Policy. We will handle your details confidentially.
                </p>

              </form>
            )}

          </div>

        </div>
      </main>

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
