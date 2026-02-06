import { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import CameraControl from './components/sections/CameraControl';
import CTASection from './components/sections/CTASection';
import Gallery from './components/sections/Gallery';
import HeroSection from './components/sections/HeroSection';
import IntegratedPipeline from './components/sections/IntegratedPipeline';
import TeamFeatures from './components/sections/TeamFeatures';
import VideoShowcase from './components/sections/VideoShowcase';
import RequestAccessModal from './components/ui/RequestAccessModal';
import TermsModal from './components/ui/TermsModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on load/refresh isn't strictly necessary with window.scrollTo(0, 0) manual calls if needed
    // But good practice for SPAs often involves reset on mount. 
    // Since we're not routing, we can omit the popstate listener.
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openTerms = () => setIsTermsOpen(true);
  const closeTerms = () => setIsTermsOpen(false);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar onOpenRequestAccess={openModal} />

      <main>
        <HeroSection onOpenRequestAccess={openModal} />
        <VideoShowcase />
        <CameraControl />
        <IntegratedPipeline />
        <TeamFeatures onOpenRequestAccess={openModal} />
        <Gallery />
        <CTASection
          title="Inspired by what you see?"
          description="Join the filmmakers, studios, and agencies already using Filmai to create that gets noticed."
          onOpenRequestAccess={openModal}
        />
      </main>

      <Footer onOpenRequestAccess={openModal} onOpenTerms={openTerms} />
      <RequestAccessModal isOpen={isModalOpen} onClose={closeModal} />
      <TermsModal isOpen={isTermsOpen} onClose={closeTerms} />
    </div>
  );
}

export default App;

