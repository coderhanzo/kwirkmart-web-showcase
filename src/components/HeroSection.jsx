import { ArrowRight, Sparkles, Truck, Shield, Star } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/kwikmart-hero.jpg";

const HeroSection = () => {
  const features = [
    { icon: Truck, text: "Free Delivery", color: "text-primary" },
    { icon: Star, text: "Fresh Quality", color: "text-yellow-500" },
    { icon: Shield, text: "Safe Shopping", color: "text-green-500" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 md:pt-24 lg:pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-glass-border">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Modern Grocery Experience</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Modern
                <span className="block gradient-text-primary">
                  Shopping
                </span>
                <span className="block">Experience</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Discover fresh groceries, quality products, and exceptional service at Kwikmart.
              Where convenience meets innovation.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-muted-foreground">
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground rounded-2xl px-8 py-4 text-lg hover-lift group shadow-primary hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Stores
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button text-lg px-8 py-4 border-primary/20 hover:border-primary/40 hover:shadow-primary transition-all duration-300"
                onClick={() => document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Download App
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="glass-card p-4 animate-float">
              <img 
                src={heroImage} 
                alt="Kwikmart modern supermarket storefront" 
                className="w-full h-auto rounded-2xl shadow-glass"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass-card p-3 animate-glow">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary fill-current" />
                <span className="text-sm font-bold text-primary">4.9</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4">
              <div className="text-sm font-medium text-foreground">Fresh Daily</div>
              <div className="text-xs text-muted-foreground">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;