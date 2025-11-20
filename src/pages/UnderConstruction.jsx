import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Construction, Clock, Smartphone, Store } from "lucide-react";
import { Card } from "@/components/ui/card";

const UnderConstruction = () => {
  useEffect(() => {
    document.title = "Kwikmart | Fresh Grocery Shopping Coming Soon";
    const description = document.querySelector("meta[name='description']");
    const descriptionContent =
      "Kwikmart is preparing a modern shopping hub with grocery shopping essentials, fresh fruits, fresh vegetables, and pantry favorites.";
    if (description) {
      description.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  const features = [
    {
      icon: Store,
      title: "New Store Features",
      description: "Enhanced shopping experience with better layouts and more products"
    },
    {
      icon: Smartphone,
      title: "Mobile App Updates",
      description: "Faster ordering, better recommendations, and seamless payments"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "More flexible shopping hours to fit your schedule"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Navigation />
      <main
        className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-16"
        role="main"
      >
        <div className="max-w-4xl w-full space-y-8">
          <article className="glass-card text-center space-y-8 p-12" aria-labelledby="under-construction-heading">
            {/* Header */}
            <div className="flex items-center justify-center">
              <div className="glass-button p-4 rounded-2xl animate-pulse" aria-hidden="true">
                <Construction className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 id="under-construction-heading" className="text-4xl md:text-5xl font-bold">
                Page Under Construction
              </h1>
              <p className="text-muted-foreground text-lg">
                We're crafting a vibrant digital marketplace to elevate your shopping journey with seamless grocery shopping,
                curated deals, and community-driven features.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card hover-lift p-6 text-center group transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Info List */}
            <div className="glass-card p-6 text-left">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Discover:</strong> Personalized recommendations for shopping essentials and gourmet treats.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Plan:</strong> Smart grocery shopping tools to keep your pantry filled with what you love most.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Enjoy:</strong> Fresh fruits, vegetables, and ready-to-cook options prepared for speedy delivery.
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                className="bg-gradient-primary text-primary-foreground rounded-2xl px-8 py-4 text-lg hover-lift shadow-primary hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/")}
              >
                Go to Homepage
              </Button>
              <Button
                variant="outline"
                className="glass-button text-lg px-8 py-4 border-primary/20 hover:border-primary/40 transition-all duration-300"
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </article>

          {/* Progress Indicator */}
          <Card className="glass-card p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-primary">65%</span>
              </div>
              <div className="w-full bg-glass-border rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '65%' }}
                />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                We're working hard to bring you an amazing experience
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default UnderConstruction;