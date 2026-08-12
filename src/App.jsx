import React, { useState } from 'react';
import GlobalNavbar from './components/GlobalNavbar';
import VideoOnlyPlayer from './components/VideoOnlyPlayer';
import HomePropertiesGrid from './components/HomePropertiesGrid';
import PropertiesPage from './components/PropertiesPage';
import AvailablePropertiesPage from './components/AvailablePropertiesPage';
import PropertyViewPage from './components/PropertyViewPage';
import StandardFooter from './components/StandardFooter';
import LandlordServicesPage from './components/LandlordServicesPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import RentersRightsPage from './components/RentersRightsPage';
import HmoLicensingPage from './components/HmoLicensingPage';
import GuideToLettingPage from './components/GuideToLettingPage';
import RegisterLandlordPage from './components/RegisterLandlordPage';
import LetWithUsPage from './components/LetWithUsPage';
import FreeValuationPage from './components/FreeValuationPage';
import HomeFooterCta from './components/HomeFooterCta';
import { videoList } from './data/videoData';

export default function App() {
  const [activeView, setActiveView] = useState('main'); // 'main' | 'properties' | 'propertyView' | 'landlords' | 'about' | 'contact' | 'rentersRights' | 'hmoLicensing' | 'guideToLetting' | 'registerLandlord' | 'letWithUs' | 'freeValuation'
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

  const handleNavigateRentersRights = () => {
    setSelectedPropertyView(null);
    setActiveView('rentersRights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHmoLicensing = () => {
    setSelectedPropertyView(null);
    setActiveView('hmoLicensing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateGuideToLetting = () => {
    setSelectedPropertyView(null);
    setActiveView('guideToLetting');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateRegisterLandlord = () => {
    setSelectedPropertyView(null);
    setActiveView('registerLandlord');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateLetWithUs = () => {
    setSelectedPropertyView(null);
    setActiveView('letWithUs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFreeValuation = () => {
    setSelectedPropertyView(null);
    setActiveView('freeValuation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (property) => {
    setSelectedPropertyView(property);
    setActiveView('propertyView');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="w-full min-h-screen bg-[#090a14] overflow-x-hidden relative">
      {/* Show Global Navbar on ALL views */}
      <GlobalNavbar
        onNavigateHome={handleNavigateHome}
        onNavigateProperties={handleNavigateProperties}
        onNavigateEnquiry={handleNavigateEnquiry}
        onNavigateLandlords={handleNavigateLandlords}
        onNavigateAbout={handleNavigateAbout}
        onNavigateContact={handleNavigateContact}
        onNavigateRentersRights={handleNavigateRentersRights}
        onNavigateHmoLicensing={handleNavigateHmoLicensing}
        onNavigateGuideToLetting={handleNavigateGuideToLetting}
        onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
        onNavigateLetWithUs={handleNavigateLetWithUs}
        onNavigateFreeValuation={handleNavigateFreeValuation}
      />

      {activeView === 'freeValuation' ? (
        <FreeValuationPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateContact={handleNavigateContact}
          onNavigateProperties={handleNavigateProperties}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'letWithUs' ? (
        <LetWithUsPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onBookValuation={handleNavigateFreeValuation}
          onContactTeam={handleNavigateContact}
          onRegisterLandlord={handleNavigateRegisterLandlord}
          onBrowseResidences={handleNavigateProperties}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateContact={handleNavigateContact}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'registerLandlord' ? (
        <RegisterLandlordPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateContact={handleNavigateContact}
          onNavigateProperties={handleNavigateProperties}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'guideToLetting' ? (
        <GuideToLettingPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onBookValuation={handleNavigateFreeValuation}
          onNavigateContact={handleNavigateContact}
          onNavigateProperties={handleNavigateProperties}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'hmoLicensing' ? (
        <HmoLicensingPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateRentersRights={handleNavigateRentersRights}
          onBookConsultation={handleNavigateFreeValuation}
          onNavigateContact={handleNavigateContact}
          onNavigateProperties={handleNavigateProperties}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'rentersRights' ? (
        <RentersRightsPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onBookValuation={handleNavigateFreeValuation}
          onNavigateContact={handleNavigateContact}
          onNavigateProperties={handleNavigateProperties}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'properties' ? (
        <PropertiesPage
          onSelectProperty={handleSelectProperty}
          onNavigateHome={handleNavigateHome}
          onNavigateProperties={handleNavigateProperties}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateContact={handleNavigateContact}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'contact' ? (
        <ContactPage
          onNavigateHome={handleNavigateHome}
          onExploreProperties={handleNavigateProperties}
          onNavigateLandlords={handleNavigateLandlords}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'about' ? (
        <AboutUsPage
          onNavigateHome={handleNavigateHome}
          onNavigateLandlords={handleNavigateLandlords}
          onExploreProperties={handleNavigateProperties}
          onNavigateEnquiry={handleNavigateContact}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
        />
      ) : activeView === 'landlords' ? (
        <LandlordServicesPage
          onNavigateHome={handleNavigateHome}
          onNavigateConsultation={() => document.getElementById('landlord-consultation')?.scrollIntoView({ behavior: 'smooth' })}
          onExploreProperties={handleNavigateProperties}
          onNavigateRentersRights={handleNavigateRentersRights}
          onNavigateHmoLicensing={handleNavigateHmoLicensing}
          onNavigateGuideToLetting={handleNavigateGuideToLetting}
          onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
          onNavigateLetWithUs={handleNavigateLetWithUs}
          onNavigateFreeValuation={handleNavigateFreeValuation}
          onNavigateContact={handleNavigateContact}
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
            onRentersRights={handleNavigateRentersRights}
            onHmoLicensing={handleNavigateHmoLicensing}
            onGuideToLetting={handleNavigateGuideToLetting}
            onRegisterLandlord={handleNavigateRegisterLandlord}
            onLetWithUs={handleNavigateLetWithUs}
          />

          {/* Standard Footer */}
          <StandardFooter
            onNavigateHome={handleNavigateHome}
            onNavigateProperties={handleNavigateProperties}
            onNavigateLandlords={handleNavigateLandlords}
            onNavigateRentersRights={handleNavigateRentersRights}
            onNavigateHmoLicensing={handleNavigateHmoLicensing}
            onNavigateGuideToLetting={handleNavigateGuideToLetting}
            onNavigateContact={handleNavigateContact}
            onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
            onNavigateLetWithUs={handleNavigateLetWithUs}
            onNavigateFreeValuation={handleNavigateFreeValuation}
          />
        </>
      )}
    </main>
  );
}
