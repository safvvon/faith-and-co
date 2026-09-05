import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import StandardFooter from './StandardFooter';
import HomeFooterCta from './HomeFooterCta';

export default function ContactPage({
  onNavigateHome,
  onNavigateProperties,
  onNavigateLandlords,
  onNavigateRentersRights,
  onNavigateHmoLicensing,
  onNavigateGuideToLetting,
  onNavigateContact,
  onNavigateRegisterLandlord,
  onNavigateLetWithUs,
  onNavigateFreeValuation,
  onExploreProperties
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userRole: '',
    message: ''
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
    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Please enter your message';
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
        userRole: '',
        message: ''
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-[#FFFFFF] font-dm selection:bg-[#C9A84C] selection:text-[#090a14] relative overflow-x-hidden pt-24 sm:pt-28">
      
      {/* ----------------------------------------------------
          4. HERO SECTION
      ---------------------------------------------------- */}
      <header className="relative w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-12 text-center border-b border-[rgba(255,255,255,0.07)] overflow-hidden">
        <div className="w-full relative z-10 space-y-8 animate-fade-up">
          {/* Small Gold Eyebrow */}
          <div>
            <span className="inline-block px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-dm tracking-[0.25em] font-medium uppercase animate-float-slow">
              GET IN TOUCH
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-cormorant font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.05]">
            Let's talk about <span className="italic text-[#C9A84C] font-normal">your property</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-dm text-lg sm:text-xl lg:text-2xl font-light text-white/80 leading-relaxed max-w-5xl mx-auto">
            Whether you're a landlord, an operator, a council, or looking to rent, we're here to help. Reach out and a member of our team will get back to you quickly.
          </p>
        </div>
      </header>

      {/* ----------------------------------------------------
          5. MAIN CONTACT SECTION (100% FULL-WIDTH EDGE-TO-EDGE)
      ---------------------------------------------------- */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left — Contact Details */}
          <div className="lg:col-span-5 space-y-10 animate-fade-up font-dm">
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-[#C9A84C] block font-dm animate-float-slow">
                DIRECT CHANNELS
              </span>
              <h2 className="font-cormorant font-light text-4xl sm:text-6xl text-white tracking-tight">
                Contact <span className="italic text-[#C9A84C] font-normal">details</span>
              </h2>
              <p className="font-dm text-base sm:text-lg lg:text-xl text-white/80 font-light leading-relaxed">
                Speak to us directly, or send a message and we'll respond the same working day wherever possible.
              </p>
            </div>

            {/* Simple Horizontal Contact Rows */}
            <div className="space-y-4 font-dm border-t border-[rgba(255,255,255,0.07)] pt-4">
              
              {/* Phone */}
              <div className="py-4 border-b border-[rgba(255,255,255,0.04)] flex items-start gap-4 group hover:pl-2 transition-all duration-300">
                <div className="w-10 h-10 border border-[#C9A84C]/40 bg-[#C9A84C]/5 flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 block mb-0.5">PHONE</span>
                  <a href="tel:02085741700" className="text-lg font-medium text-white hover:text-[#C9A84C] transition-colors block">
                    020 8574 1700
                  </a>
                  <span className="text-xs sm:text-sm text-white/50 font-light block mt-0.5">Mon–Fri, 9:00 – 18:30</span>
                </div>
              </div>

              {/* Email */}
              <div className="py-4 border-b border-[rgba(255,255,255,0.04)] flex items-start gap-4 group hover:pl-2 transition-all duration-300">
                <div className="w-10 h-10 border border-[#C9A84C]/40 bg-[#C9A84C]/5 flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 block mb-0.5">EMAIL</span>
                  <a href="mailto:info@faithandco.co.uk" className="text-lg font-medium text-white hover:text-[#C9A84C] transition-colors block">
                    info@faithandco.co.uk
                  </a>
                  <span className="text-xs sm:text-sm text-white/50 font-light block mt-0.5">We aim to reply within one working day</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="py-4 border-b border-[rgba(255,255,255,0.04)] flex items-start gap-4 group hover:pl-2 transition-all duration-300">
                <div className="w-10 h-10 border border-[#C9A84C]/40 bg-[#C9A84C]/5 flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 block mb-0.5">WHATSAPP</span>
                  <a href="https://wa.me/442085741700" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-[#C9A84C] transition-colors block">
                    Message us on WhatsApp
                  </a>
                  <span className="text-xs sm:text-sm text-white/50 font-light block mt-0.5">Quick questions answered fast</span>
                </div>
              </div>

              {/* Area Covered */}
              <div className="py-4 flex items-start gap-4 group hover:pl-2 transition-all duration-300">
                <div className="w-10 h-10 border border-[#C9A84C]/40 bg-[#C9A84C]/5 flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5 group-hover:bg-[#C9A84C] group-hover:text-[#090a14] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 block mb-0.5">AREA COVERED</span>
                  <span className="text-lg font-medium text-white block">All 32 London Boroughs</span>
                  <span className="text-xs sm:text-sm text-white/50 font-light block mt-0.5">Greater London &amp; the Home Counties</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right — Contact Form Panel */}
          <div className="lg:col-span-7 bg-[#0d0f1f]/90 border border-white/20 p-8 sm:p-12 lg:p-14 shadow-2xl relative rounded-xl backdrop-blur-xl animate-fade-up font-dm">
            
            {/* Header */}
            <div className="mb-8 space-y-2">
              <h2 className="font-cormorant font-light text-4xl sm:text-5xl text-white tracking-tight">
                Send us a <span className="italic text-[#C9A84C] font-normal">message</span>
              </h2>
              <p className="font-dm text-sm sm:text-base text-white/70 font-light">
                Tell us a little about what you need and we'll point you to the right person.
              </p>
            </div>

            {/* Inline Submission Success Message */}
            {isSubmitted ? (
              <div className="p-8 border border-[#C9A84C]/50 bg-[#C9A84C]/[0.06] text-center space-y-4 animate-fade-in my-6 font-dm">
                <CheckCircle2 className="w-10 h-10 text-[#C9A84C] mx-auto" />
                <h3 className="font-cormorant font-light text-2xl text-white tracking-tight">Message Sent</h3>
                <p className="font-dm text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  Thank you — your message has been sent. We will be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-dm tracking-widest text-[#C9A84C] hover:underline uppercase"
                >
                  Send another message
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
                      placeholder="e.g. Victoria"
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
                      placeholder="e.g. Sterling"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white font-dm placeholder-white/20 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. victoria@domain.co.uk"
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
                      Phone
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

                {/* Dropdown: I am a... */}
                <div>
                  <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                    I am a...
                  </label>
                  <select
                    name="userRole"
                    value={formData.userRole}
                    onChange={handleChange}
                    className="w-full bg-[#090a14] border border-white/10 px-4 py-3.5 text-sm text-white font-dm focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none"
                  >
                    <option value="">Please select</option>
                    <option value="Landlord">Landlord</option>
                    <option value="Care / Supported Housing Operator">Care / Supported Housing Operator</option>
                    <option value="Council / Local Authority">Council / Local Authority</option>
                    <option value="Investor">Investor</option>
                    <option value="Tenant">Tenant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block font-dm text-[11px] uppercase tracking-[0.15em] text-white/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full bg-white/[0.03] border ${
                      errors.message ? 'border-rose-500' : 'border-white/15'
                    } px-5 py-4 text-base text-white font-dm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none resize-none`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 font-dm text-sm mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Primary Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-5 bg-[#C9A84C] hover:bg-[#E8C878] text-[#090a14] font-dm text-sm sm:text-base font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-xl rounded-none active:scale-98"
                  >
                    SEND MESSAGE
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="font-dm text-[11px] text-white/40 font-light text-center leading-relaxed pt-2">
                  By submitting this form you agree to our Privacy Policy. We'll only use your details to respond to your enquiry.
                </p>

              </form>
            )}

          </div>

        </div>
      </main>

      {/* ----------------------------------------------------
          6. LOCATION SECTION (Wide Minimalist Strip)
      ---------------------------------------------------- */}
      <section className="w-full border-t border-[rgba(255,255,255,0.07)] py-16 sm:py-20 px-6 text-center bg-[#090a14] font-dm">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="w-10 h-10 border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] rounded-full mx-auto mb-4">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-cormorant font-light text-2xl sm:text-3xl text-white tracking-tight">
            Serving All of London
          </h3>
          <p className="font-dm text-xs text-white/50 tracking-widest uppercase font-light">
            Greater London &amp; the Home Counties
          </p>
        </div>
      </section>

      {/* STANDARD FOOTER */}
      <StandardFooter
        onNavigateHome={onNavigateHome}
        onNavigateProperties={onNavigateProperties || onExploreProperties}
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
