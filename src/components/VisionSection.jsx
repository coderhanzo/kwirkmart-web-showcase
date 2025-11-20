import { Target, Heart, Leaf, Users, Sparkles, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const VisionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Leveraging technology to transform the shopping experience with smart solutions and seamless service.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Community Care",
      description: "Building stronger communities by supporting local suppliers and creating meaningful connections.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices, reducing waste, and promoting sustainable living for a better future.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Every decision we make is centered around creating exceptional experiences for our valued customers.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { number: "2", label: "Neighborhoods" },
    { number: "10k+", label: "Happy Customers" },
    { number: "7", label: "Days Support" },
    { number: "99%", label: "Satisfaction" }
  ];

  return (
    <section id="vision" className="py-20 px-4 bg-background-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text-primary">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Kwikmart, we envision a future where shopping is not just a necessity,
            but a delightful experience that brings communities together while respecting our planet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Vision Content */}
          <div className="space-y-8">
            <div className="glass-card p-8 border-l-4 border-l-primary">
              <div className="flex items-start space-x-4">
                <Sparkles className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-xl italic text-foreground mb-4 leading-relaxed">
                    "To revolutionize retail by creating sustainable, technology-driven shopping experiences 
                    that enrich lives and strengthen communities."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">— Kwikmart Mission Statement</cite>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card text-center p-6 hover-lift transition-all duration-300">
                  <div className="text-2xl font-bold gradient-text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover-lift group p-6 cursor-pointer transition-all duration-300">
                <div className="space-y-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full translate-y-16 -translate-x-16 blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Be part of the retail revolution. Experience the difference that innovation, 
                care, and sustainability can make in your daily shopping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl hover-lift group shadow-primary hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  className="glass-button border-primary/20 hover:border-primary/40 px-8 py-4"
                  onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Visit Our Stores
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;