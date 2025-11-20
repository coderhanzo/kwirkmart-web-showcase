import { ArrowLeft, Users, Target, Award, Heart, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building strong relationships with our customers and supporting local communities through quality service and fresh products.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Every product in our stores is carefully selected to meet the highest standards of freshness, taste, and nutritional value.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from customer service to product selection and store experience.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Heart,
      title: "Care & Passion",
      description: "Our team is passionate about providing exceptional service and creating a shopping experience that feels like home.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const milestones = [
    { year: "2017", event: "First Store Opening", description: "Started our journey in Tseaddo" },
    { year: "2020", event: "Digital Transformation", description: "Launched online ordering" },
    { year: "2022", event: "Second Location", description: "Expanded to Dzorwulu" },
    { year: "2024", event: "Mobile App Launch", description: "Revolutionized shopping experience" }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-8 glass-button border-glass-border hover:border-primary/20 group transition-all duration-300"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform"/>
          Back to Home
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="block gradient-text-primary">
                Kwikmart
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to revolutionize the grocery shopping experience, Kwikmart combines
              traditional values with modern convenience to serve neighborhoods across Accra.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Kwikmart began as a small family business with a simple mission: to provide fresh,
              quality groceries to our local community. We've grown thoughtfully into Tseaddo and
              Dzorwulu, keeping our focus on neighborhood relationships and reliable essentials.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We believe that shopping for groceries should be more than just a chore – it should
              be an experience that brings families together and supports local businesses. That's
              why we invest in welcoming store environments and digital conveniences that make
              shopping seamless without losing the personal touch.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-float">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-primary">2</div>
                <div className="text-sm text-muted-foreground">Accra Branches</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Serving</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-primary">7 Days</div>
                <div className="text-sm text-muted-foreground">Weekly Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="glass-card hover-lift p-6 text-center group transition-all duration-300">
                <div className="text-2xl font-bold gradient-text-primary mb-2">
                  {milestone.year}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {milestone.event}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These core principles guide everything we do and shape the Kwikmart experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover-lift group p-6 text-center cursor-pointer transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="glass-card text-center p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full translate-x-16 translate-y-16 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To create exceptional grocery shopping experiences that connect communities, 
              support local suppliers, and make fresh, quality food accessible to everyone 
              through innovative technology and genuine care.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Kwikmart?</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Visit one of our locations or download our app to start shopping today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-primary text-primary-foreground rounded-2xl px-8 py-4 hover-lift shadow-primary hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/#branches'}
            >
              Find Stores
            </Button>
            <Button 
              variant="outline" 
              className="glass-button border-primary/20 hover:border-primary/40 px-8 py-4"
              onClick={() => window.location.href = '/#app'}
            >
              Download App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;