import React, { useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import GlobalNavbar from './components/GlobalNavbar';
import BlankLandingHero from './components/BlankLandingHero';
import HomePropertiesGrid from './components/HomePropertiesGrid';
import PropertiesPage from './components/PropertiesPage';
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
import { propertiesData } from './data/propertiesData';

// Component wrapper to handle property view parameters from route
function PropertyViewRoute({ onNavigateProperties, onSelectProperty }) {
  const { propertyId } = useParams();
  const selectedProp = propertiesData.find(p => p.id === propertyId) || propertiesData[0];

  return (
    <PropertyViewPage
      property={selectedProp}
      onBack={onNavigateProperties}
      onSelectProperty={onSelectProperty}
    />
  );
}

// Home View Layout
function HomeView({ onSelectProperty, handleNavigateContact, handleNavigateProperties, handleNavigateLandlords, handleNavigateRentersRights, handleNavigateHmoLicensing, handleNavigateGuideToLetting, handleNavigateRegisterLandlord, handleNavigateLetWithUs, handleNavigateFreeValuation, handleNavigateHome }) {
  return (
    <>
      <BlankLandingHero
        onExploreResidences={handleNavigateProperties}
        onContactUs={handleNavigateContact}
        onSelectProperty={onSelectProperty}
      />
      <HomePropertiesGrid
        onSelectProperty={onSelectProperty}
      />
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
  );
}

export default function App() {
  const navigate = useNavigate();
  const [, setSelectedPropertyView] = useState(null);

  const handleNavigateHome = () => navigate('/');
  const handleNavigateProperties = () => navigate('/properties');
  const handleNavigateLandlords = () => navigate('/landlord-services');
  const handleNavigateAbout = () => navigate('/about');
  const handleNavigateContact = () => navigate('/contact');
  const handleNavigateRentersRights = () => navigate('/renters-rights');
  const handleNavigateHmoLicensing = () => navigate('/hmo-licensing');
  const handleNavigateGuideToLetting = () => navigate('/guide-to-letting');
  const handleNavigateRegisterLandlord = () => navigate('/register-landlord');
  const handleNavigateLetWithUs = () => navigate('/let-with-us');
  const handleNavigateFreeValuation = () => navigate('/free-valuation');

  const handleNavigateEnquiry = () => navigate('/contact');

  const handleSelectProperty = (property) => {
    setSelectedPropertyView(property);
    const slug = property?.id || 'kensington';
    navigate(`/properties/${slug}`);
  };

  return (
    <main className="w-full min-h-screen bg-[#090a14] overflow-x-hidden relative font-dm">
      <ScrollToTop />
      
      {/* Global Navigation Bar rendered across all routes */}
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

      {/* Official React Router DOM Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomeView 
              onSelectProperty={handleSelectProperty}
              handleNavigateHome={handleNavigateHome}
              handleNavigateContact={handleNavigateContact}
              handleNavigateProperties={handleNavigateProperties}
              handleNavigateLandlords={handleNavigateLandlords}
              handleNavigateRentersRights={handleNavigateRentersRights}
              handleNavigateHmoLicensing={handleNavigateHmoLicensing}
              handleNavigateGuideToLetting={handleNavigateGuideToLetting}
              handleNavigateRegisterLandlord={handleNavigateRegisterLandlord}
              handleNavigateLetWithUs={handleNavigateLetWithUs}
              handleNavigateFreeValuation={handleNavigateFreeValuation}
            />
          } 
        />
        <Route 
          path="/properties" 
          element={
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
          } 
        />
        <Route 
          path="/properties/:propertyId" 
          element={
            <PropertyViewRoute 
              onNavigateProperties={handleNavigateProperties}
              onSelectProperty={handleSelectProperty}
            />
          } 
        />
        <Route 
          path="/landlord-services" 
          element={
            <LandlordServicesPage
              onNavigateHome={handleNavigateHome}
              onNavigateConsultation={handleNavigateFreeValuation}
              onExploreProperties={handleNavigateProperties}
              onNavigateRentersRights={handleNavigateRentersRights}
              onNavigateHmoLicensing={handleNavigateHmoLicensing}
              onNavigateGuideToLetting={handleNavigateGuideToLetting}
              onNavigateRegisterLandlord={handleNavigateRegisterLandlord}
              onNavigateLetWithUs={handleNavigateLetWithUs}
              onNavigateFreeValuation={handleNavigateFreeValuation}
              onNavigateContact={handleNavigateContact}
            />
          } 
        />
        <Route 
          path="/about" 
          element={
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
          } 
        />
        <Route 
          path="/contact" 
          element={
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
          } 
        />
        <Route 
          path="/renters-rights" 
          element={
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
          } 
        />
        <Route 
          path="/hmo-licensing" 
          element={
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
          } 
        />
        <Route 
          path="/guide-to-letting" 
          element={
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
          } 
        />
        <Route 
          path="/register-landlord" 
          element={
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
          } 
        />
        <Route 
          path="/let-with-us" 
          element={
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
          } 
        />
        <Route 
          path="/free-valuation" 
          element={
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
          } 
        />
        {/* Fallback route for unknown URLs */}
        <Route 
          path="*" 
          element={
            <HomeView 
              onSelectProperty={handleSelectProperty}
              handleNavigateHome={handleNavigateHome}
              handleNavigateContact={handleNavigateContact}
              handleNavigateProperties={handleNavigateProperties}
              handleNavigateLandlords={handleNavigateLandlords}
              handleNavigateRentersRights={handleNavigateRentersRights}
              handleNavigateHmoLicensing={handleNavigateHmoLicensing}
              handleNavigateGuideToLetting={handleNavigateGuideToLetting}
              handleNavigateRegisterLandlord={handleNavigateRegisterLandlord}
              handleNavigateLetWithUs={handleNavigateLetWithUs}
              handleNavigateFreeValuation={handleNavigateFreeValuation}
            />
          } 
        />
      </Routes>
    </main>
  );
}
