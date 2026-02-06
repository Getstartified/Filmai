import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import CameraControl from './components/sections/CameraControl';
import CTASection from './components/sections/CTASection';
import Gallery from './components/sections/Gallery';
import HeroSection from './components/sections/HeroSection';
import IntegratedPipeline from './components/sections/IntegratedPipeline';
import TeamFeatures from './components/sections/TeamFeatures';
import VideoShowcase from './components/sections/VideoShowcase';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <main>
        <HeroSection />
        <VideoShowcase />
        <CameraControl />
        <IntegratedPipeline />
        <TeamFeatures />
        <Gallery />
        <CTASection
          title="Inspired by what you see?"
          description="Join the filmmakers, studios, and agencies already using Filmai to create that gets noticed."
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;

