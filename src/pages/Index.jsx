import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BranchesSection from "@/components/BranchesSection";
import VisionSection from "@/components/VisionSection";
import MobileAppSection from "@/components/MobileAppSection";
import ContactSection from "@/components/ContactSection";
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
      
      {/* Footer */}
      <footer className="bg-gradient-glass backdrop-blur-lg border-t border-glass-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Kwikmart</h3>
              <p className="text-muted-foreground text-sm">
                Your modern shopping experience, reimagined for the digital age.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#home" className="block hover:text-primary transition-colors">Home</a>
                <a href="#branches" className="block hover:text-primary transition-colors">Branches</a>
                <a href="#vision" className="block hover:text-primary transition-colors">Vision</a>
                <a href="#app" className="block hover:text-primary transition-colors">Mobile App</a>
                <a href="#contact" className="block hover:text-primary transition-colors">Get in Touch</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#contact" className="block hover:text-primary transition-colors">Contact Us</a>
                <a href="/under-construction" className="block hover:text-primary transition-colors">Help Center</a>
                <a href="/under-construction" className="block hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/under-construction" className="block hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="/under-construction" className="block hover:text-primary transition-colors">Newsletter</a>
                <a href="/under-construction" className="block hover:text-primary transition-colors">Social Media</a>
                <a href="/under-construction" className="block hover:text-primary transition-colors">Careers</a>
                <a href="/under-construction" className="block hover:text-primary transition-colors">Press</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-glass-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Kwikmart. All rights reserved. Built with modern technology for a better shopping experience.
            </p>
          </div>
        </div>
      </footer>
    </div>);
};
export default Index;
