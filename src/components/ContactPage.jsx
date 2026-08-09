import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Building, MessageSquare } from 'lucide-react';

export default function ContactPage({ onExploreProperties, onNavigateLandlords }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Tenant Inquiry',
    location: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#090a14] text-white font-montserrat selection:bg-amber-200 selection:text-black relative">
      
      {/* ----------------------------------------------------
          1. HERO SECTION
      ---------------------------------------------------- */}
      <section className="relative w-full h-[70vh] sm:h-[78vh] overflow-hidden bg-black flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/properties/london_mayfair.png"
            alt="Faith & Co Mayfair Office London"
            className="w-full h-full object-cover animate-hero-zoom filter brightness-[0.82]"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a14] via-black/40 to-black/60 pointer-events-none" />

        {/* Top Tag */}
        <div className="relative z-30 px-6 sm:px-12 pt-28 sm:pt-32">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs tracking-[0.25em] font-medium uppercase shadow-lg">
            PRIVATE DESK
          </span>
        </div>

        {/* Center Hero Copy */}
        <div className="relative z-30 px-6 sm:px-12 lg:px-16 pb-16 max-w-5xl space-y-6 animate-fade-up">
          <h1 className="font-montserrat font-light text-4xl sm:text-7xl lg:text-8xl text-white tracking-[0.05em] leading-[1.05] drop-shadow-xl">
            CONNECT WITH<br />OUR PRIVATE DESK.
          </h1>

          <p className="text-white/85 text-sm sm:text-xl font-light tracking-wide max-w-2xl font-montserrat leading-relaxed">
            "Whether you are inquiring about a residence, seeking bespoke landlord management, or scheduling a private viewing, our Mayfair team is at your service."
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. DIRECT CONTACT INFO & OFFICE ADDRESS
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mayfair Office Address */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-200/40 transition-colors shadow-xl">
            <div className="w-10 h-10 rounded-full bg-white/10 text-amber-200 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase block font-montserrat">
              HEAD OFFICE
            </span>
            <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
              MAYFAIR, LONDON
            </h3>
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
              28 Grosvenor Street, Mayfair<br />
              London W1K 4QR, United Kingdom
            </p>
          </div>

          {/* Direct Phone & Email */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-200/40 transition-colors shadow-xl">
            <div className="w-10 h-10 rounded-full bg-white/10 text-amber-200 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase block font-montserrat">
              DIRECT LINES
            </span>
            <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
              TELEPHONE &amp; MAIL
            </h3>
            <div className="space-y-1.5 text-white/70 text-xs sm:text-sm font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-200" />
                <span>+44 (0)20 7946 0880</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-200" />
                <span>enquiries@faithandco.co.uk</span>
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-amber-200/40 transition-colors shadow-xl">
            <div className="w-10 h-10 rounded-full bg-white/10 text-amber-200 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase block font-montserrat">
              OPERATING HOURS
            </span>
            <h3 className="font-montserrat font-light text-2xl text-white tracking-[0.05em]">
              OFFICE HOURS
            </h3>
            <div className="space-y-1 text-white/70 text-xs sm:text-sm font-light">
              <p>Monday – Friday: 08:30 – 18:00</p>
              <p>Saturday: By Private Appointment</p>
              <p className="text-amber-200/80 pt-1 text-[11px] uppercase tracking-wider">24/7 Landlord Emergency Support</p>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          3. ULTRA-PREMIUM PRIVATE INQUIRY FORM
      ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Story */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-200 block">
              PRIVATE CORRESPONDENCE
            </span>
            <h2 className="font-montserrat font-light text-3xl sm:text-5xl text-white leading-tight tracking-[0.05em]">
              SUBMIT A<br />
              <span className="text-amber-100/90 font-light">PRIVATE INQUIRY.</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed font-montserrat">
              "We provide confidential, tailored advice for landlords, tenants, and property investors. Please complete the details and a senior advisor will reach out to you promptly."
            </p>

            <div className="pt-6 space-y-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Strict Confidentiality Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-white/70 font-medium">
                <Clock className="w-4 h-4 text-amber-200 shrink-0" />
                <span>Response Guaranteed Within 2 Working Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column Form Container */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/15 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-montserrat font-light text-3xl text-white tracking-[0.05em]">
                  Private Inquiry Received
                </h3>
                <p className="text-sm font-light text-white/80 leading-relaxed font-montserrat max-w-md mx-auto">
                  Thank you, {formData.name}. Your inquiry regarding "{formData.inquiryType}" has been dispatched directly to our Mayfair private management desk.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs tracking-widest uppercase transition-all cursor-pointer mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Type Radio / Pill Selection */}
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-3 font-montserrat">
                    NATURE OF INQUIRY
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Tenant Inquiry', 'Landlord Management', 'Portfolio Advisory', 'Press & Media'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`px-3 py-2.5 rounded-xl text-[11px] font-medium tracking-wider uppercase transition-all cursor-pointer truncate border ${
                          formData.inquiryType === type
                            ? 'bg-white text-black font-semibold border-white shadow-md'
                            : 'bg-white/[0.04] text-white/60 border-white/10 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-montserrat">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lord / Lady / Mr / Ms"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors font-montserrat"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-montserrat">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors font-montserrat"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-montserrat">
                      TELEPHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7000 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors font-montserrat"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-montserrat">
                      LOCATION / PROPERTY REFERENCE
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chelsea Townhouse / Mayfair"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors font-montserrat"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block mb-1.5 font-montserrat">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Please outline your requirements or property details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-amber-200 transition-colors font-montserrat custom-scrollbar"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white hover:bg-amber-200 text-black font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 mt-4"
                >
                  <span>SEND PRIVATE MESSAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------
          4. FOOTER & COPYRIGHT
      ---------------------------------------------------- */}
      <section className="bg-[#090a14] py-16 text-center border-t border-white/10 px-6 font-montserrat">
        <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider uppercase gap-4">
          <p>© {new Date().getFullYear()} Faith &amp; Co Property Management Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={onExploreProperties}>Browse Residences</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={onNavigateLandlords}>Landlord Services</span>
          </div>
        </div>
      </section>

    </div>
  );
}
