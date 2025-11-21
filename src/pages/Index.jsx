import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BranchesSection from "@/components/BranchesSection";
import VisionSection from "@/components/VisionSection";
import MobileAppSection from "@/components/MobileAppSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Index = () => {
    return (<div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BranchesSection />
        <VisionSection />
        <MobileAppSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>);
};
export default Index;
