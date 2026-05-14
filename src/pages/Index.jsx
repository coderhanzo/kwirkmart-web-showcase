import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryShowcase from "@/components/CategoryShowcase";
import BranchesSection from "@/components/BranchesSection";
import VisionSection from "@/components/VisionSection";
import MobileAppSection from "@/components/MobileAppSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoryShowcase />
        <BranchesSection />
        <VisionSection />
        <MobileAppSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
