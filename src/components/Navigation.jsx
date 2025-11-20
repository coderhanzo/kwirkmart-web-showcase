import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/kwirkmart.png"
              alt="Kwikmart logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kwikmart
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="/about" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              Contact
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 hover:bg-green-50"
              onClick={() => window.open('https://wa.me/233248926993', '_blank')}
            >
              <Phone className="h-4 w-4" />
              <span>Order Now</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/20 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="/about" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="flex items-center space-x-2 justify-start bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  window.open('https://wa.me/233248926993', '_blank');
                  setIsOpen(false);
                }}
              >
                <Phone className="h-4 w-4" />
                <span>Order via WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
