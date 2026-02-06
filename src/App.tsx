import { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import TermsAndConditions from './components/pages/TermsAndConditions';
import CameraControl from './components/sections/CameraControl';
import CTASection from './components/sections/CTASection';
import Gallery from './components/sections/Gallery';
import HeroSection from './components/sections/HeroSection';
import IntegratedPipeline from './components/sections/IntegratedPipeline';
import TeamFeatures from './components/sections/TeamFeatures';
import VideoShowcase from './components/sections/VideoShowcase';
import RequestAccessModal from './components/ui/RequestAccessModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Simple routing
  if (currentPath === '/terms') {
    return <TermsAndConditions />;
  }

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

      <Footer onOpenRequestAccess={openModal} />
      <RequestAccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;

