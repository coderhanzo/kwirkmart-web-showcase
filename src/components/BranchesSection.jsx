import { MapPin, Clock, Phone, Navigation, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const BranchesSection = () => {
  const branches = [
    {
      name: "Kwikmart Tseaddo",
      address: "Tseaddo, Accra",
      hours: "8:00 AM - 10:00 PM",
      phone: "+233 53 884 6558",
      image: "🌅",
      directions: "https://maps.app.goo.gl/xVda4Y7dzu2Sd5kk7",
      rating: 4.9
    },
    {
      name: "Kwikmart Dzorwulu",
      address: "Dzorwulu, Accra",
      hours: "8:00 AM - 10:00 PM",
      phone: "+233 24 892 6993",
      image: "🌆",
      directions: "https://maps.app.goo.gl/zZxvnReypEifnDwF6",
      rating: 4.8
    }
  ];

  return (
    <section id="branches" className="py-16 md:py-20 px-4 bg-background-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="gradient-text-primary">Branches</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Find a Kwikmart location near you. Each branch is designed to serve your community
            with fresh products and exceptional service.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => (
            <Card key={index} className="glass-card hover-lift group overflow-hidden border border-glass-border hover:border-primary/20 transition-all duration-300 w-full">
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 md:space-x-4 flex-1 min-w-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-xl md:text-2xl">{branch.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors truncate">
                        {branch.name}
                      </h3>
                      <div className="flex items-center space-x-1 md:space-x-2 mt-1 flex-wrap">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-current" />
                          <span className="text-xs md:text-sm font-medium">{branch.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs md:text-sm text-muted-foreground">Supermarket</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm md:text-base text-muted-foreground break-words">{branch.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-3">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">{branch.hours}</span>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-3">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground break-all">WhatsApp: {branch.phone}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-3 md:pt-4">
                  <Button 
                    className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-primary transition-all duration-300 text-sm md:text-base py-2 md:py-3"
                    onClick={() => window.open(`https://wa.me/${branch.phone.replace(/\D/g, '')}`, '_blank')}
                  >
                    <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Order Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 glass-button border-glass-border text-sm md:text-base py-2 md:py-3"
                    onClick={() => window.open(branch.directions, '_blank')}
                  >
                    <Navigation className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Directions
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="glass-card inline-block p-6 md:p-8 max-w-2xl w-full mx-4">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Want Kwikmart closer to you?</h3>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base max-w-md mx-auto">
              We're mapping out future communities now. Share your neighborhood and help us choose the next opening.
            </p>
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-primary transition-all duration-300 text-sm md:text-base px-6 md:px-8 py-2 md:py-3">
              Request a Location ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;