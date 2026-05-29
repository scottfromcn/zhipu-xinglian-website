import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import BusinessCards from '@/sections/BusinessCards';
import TACSection from '@/sections/TACSection';
import CapabilitiesSection from '@/sections/CapabilitiesSection';
import ClientLogos from '@/sections/ClientLogos';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <HeroSection />
        <BusinessCards />
        <TACSection />
        <CapabilitiesSection />
        <ClientLogos />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
