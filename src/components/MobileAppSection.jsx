import { ShoppingCart, Star, Bell, CreditCard, MapPin, Download, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState, useEffect } from "react";

const MobileAppSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: ShoppingCart,
      title: "Easy Shopping",
      description: "Browse and order groceries with just a few taps",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Exclusive Deals",
      description: "Get app-only discounts and special offers",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Never miss out on sales and fresh arrivals",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with top security",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: MapPin,
      title: "Store Locator",
      description: "Find the nearest Kwikmart with live inventory",
      color: "from-red-500 to-pink-500"
    }
  ];

  const appStores = [
    {
      name: "App Store",
      icon: "🍎",
      url: "https://apps.apple.com/",
      description: "Download on the",
      subtitle: "App Store",
      bg: "bg-black"
    },
    {
      name: "Google Play", 
      icon: "🤖",
      url: "https://play.google.com/",
      description: "Get it on",
      subtitle: "Google Play",
      bg: "bg-green-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="app" className="py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Shop Smarter with Our
            <span className="block gradient-text-primary mt-2">
              Mobile App
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Experience the future of grocery shopping. Order online, skip the lines, 
            and get everything delivered fresh to your doorstep.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* App Demo - Mobile First */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="glass-card p-6 md:p-8 w-full max-w-sm">
              {/* Animated Phone */}
              <div className="relative w-full aspect-[9/16] max-w-[280px] mx-auto mb-6 md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-3xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-3xl p-4 md:p-6 flex flex-col justify-between">
                    {/* App Header */}
                    <div className="text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                        <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">Kwikmart</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">Your Shopping Partner</p>
                    </div>

                    {/* Feature Display */}
                    <div className="text-center space-y-2">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                        <features[currentFeature].icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base">{features[currentFeature].title}</h4>
                      <p className="text-muted-foreground text-xs px-2 md:px-4">
                        {features[currentFeature].description}
                      </p>
                    </div>

                    {/* App Footer */}
                    <div className="flex justify-center space-x-1 md:space-x-2">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentFeature(index)}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                            index === currentFeature
                              ? 'bg-primary scale-125'
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {appStores.map((store, index) => (
                    <Button
                      key={index}
                      className={`${store.bg} text-white rounded-xl md:rounded-2xl p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base`}
                      onClick={() => window.open(store.url, '_blank')}
                    >
                      <div className="text-left w-full">
                        <div className="text-xl md:text-2xl mb-1">{store.icon}</div>
                        <div className="text-xs md:text-sm">{store.description}</div>
                        <div className="text-sm md:text-base font-bold">{store.subtitle}</div>
                      </div>
                    </Button>
                  ))}
                </div>

                {/* QR Code Option */}
                <Card className="glass-card p-3 md:p-4 mt-4 md:mt-6">
                  <div className="flex items-center justify-center space-x-2 md:space-x-3">
                    <QrCode className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span className="text-sm font-medium">Scan to download</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Floating Rating */}
            <div className="hidden md:block absolute -top-4 -right-4 glass-card p-4 animate-float">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary fill-current" />
                <div>
                  <div className="font-bold text-primary">4.9</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <div className="glass-card p-4 md:p-6 mb-4 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Why Choose Our App?</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Everything you need for convenient grocery shopping, right in your pocket.
              </p>
            </div>
            
            <div className="grid gap-4 md:gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`glass-card hover-lift p-4 md:p-6 group cursor-pointer transition-all duration-300 ${
                    index === currentFeature ? 'ring-2 ring-primary/20' : ''
                  }`}
                  onMouseEnter={() => setCurrentFeature(index)}
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors text-sm md:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {index === currentFeature && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0 mt-2" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;