import React, { useState } from 'react';
import GlobalNavbar from './components/GlobalNavbar';
import VideoOnlyPlayer from './components/VideoOnlyPlayer';
import HomePropertiesGrid from './components/HomePropertiesGrid';
import PropertiesPage from './components/PropertiesPage';
import PropertyViewPage from './components/PropertyViewPage';
import LandlordServicesPage from './components/LandlordServicesPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import HomeFooterCta from './components/HomeFooterCta';
import { videoList } from './data/videoData';

export default function App() {
  const [activeView, setActiveView] = useState('main'); // 'main' | 'properties' | 'propertyView' | 'landlords' | 'about' | 'contact'
  const [selectedPropertyView, setSelectedPropertyView] = useState(null);

  const handleNavigateHome = () => {
    setActiveView('main');
    setSelectedPropertyView(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProperties = () => {
    setSelectedPropertyView(null);
    setActiveView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateEnquiry = () => {
    if (activeView === 'propertyView') {
      document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (activeView === 'landlords') {
      document.getElementById('landlord-consultation')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPropertyView(null);
      setActiveView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateLandlords = () => {
    setSelectedPropertyView(null);
    setActiveView('landlords');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setSelectedPropertyView(null);
    setActiveView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    setSelectedPropertyView(null);
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (property) => {
    setSelectedPropertyView(property);
    setActiveView('propertyView');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="w-full min-h-screen bg-[#090a14] overflow-x-hidden relative">
      {/* Persistent Global Navbar with top-right 3-line menu */}
      <GlobalNavbar
        onNavigateHome={handleNavigateHome}
        onNavigateProperties={handleNavigateProperties}
        onNavigateEnquiry={handleNavigateEnquiry}
        onNavigateLandlords={handleNavigateLandlords}
        onNavigateAbout={handleNavigateAbout}
        onNavigateContact={handleNavigateContact}
      />

      {activeView === 'properties' ? (
        <PropertiesPage
          onSelectProperty={handleSelectProperty}
        />
      ) : activeView === 'contact' ? (
        <ContactPage
          onExploreProperties={handleNavigateProperties}
          onNavigateLandlords={handleNavigateLandlords}
        />
      ) : activeView === 'about' ? (
        <AboutUsPage
          onNavigateLandlords={handleNavigateLandlords}
          onExploreProperties={handleNavigateProperties}
          onNavigateEnquiry={handleNavigateContact}
        />
      ) : activeView === 'landlords' ? (
        <LandlordServicesPage
          onNavigateConsultation={() => document.getElementById('landlord-consultation')?.scrollIntoView({ behavior: 'smooth' })}
          onExploreProperties={handleNavigateProperties}
        />
      ) : activeView === 'propertyView' && selectedPropertyView ? (
        <PropertyViewPage
          property={selectedPropertyView}
          onBack={handleNavigateProperties}
          onSelectProperty={handleSelectProperty}
        />
      ) : (
        <>
          {/* Page 1 / Section 1: Video Hero */}
          <VideoOnlyPlayer videoList={videoList} />

          {/* Page 2 / Section 2: Exact Original Home Page Property Showcase Grid */}
          <HomePropertiesGrid
            onSelectProperty={handleSelectProperty}
          />

          {/* Home Page Footer CTA: YOUR PROPERTY. OUR PRIORITY. */}
          <HomeFooterCta
            onStartConversation={handleNavigateContact}
            onBrowseResidences={handleNavigateProperties}
            onLandlordPortal={handleNavigateLandlords}
          />
        </>
      )}
    </main>
  );
}
