import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Truck, Shield, Star, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/kwikmart-hero.jpg";

const HeroSection = () => {
  const features = [
    { icon: Truck, text: "Free Delivery", color: "text-primary" },
    { icon: Star, text: "Fresh Quality", color: "text-yellow-500" },
    { icon: Shield, text: "Safe Shopping", color: "text-green-600" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-dot-grid opacity-60" />
      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Modern grocery experience
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Everyday essentials,
              <span className="block gradient-text-primary">delivered fresh.</span>
            </h1>

            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Shop thousands of products from Kwikmart's Accra stores. Browse,
              search, and order on WhatsApp — we'll handle the rest.
            </p>

            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground sm:text-base">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <f.icon className={`h-5 w-5 ${f.color}`} />
                  <span className="font-medium">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-primary px-7 text-base text-primary-foreground shadow-primary hover:bg-primary/90"
              >
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border/60 bg-background/60 px-7 text-base backdrop-blur"
                onClick={() =>
                  document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Find a branch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs text-muted-foreground">
              <div>
                <p className="text-2xl font-bold text-foreground">2,700+</p>
                <p>Products</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p>Accra stores</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">8am – 10pm</p>
                <p>Open daily</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card relative z-10 animate-float p-4">
              <img
                src={heroImage}
                alt="Kwikmart modern supermarket storefront"
                className="h-auto w-full rounded-2xl shadow-glass"
              />
            </div>

            <div className="absolute -top-3 right-2 z-20 rounded-2xl border border-border bg-background/95 px-3 py-2 shadow-lg sm:-top-5 sm:-right-5">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <div>
                  <p className="text-sm font-bold leading-none">4.9</p>
                  <p className="text-[10px] text-muted-foreground">Customer rating</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 left-2 z-20 rounded-2xl border border-border bg-background/95 px-3 py-2.5 shadow-lg sm:-bottom-5 sm:-left-5">
              <p className="text-sm font-semibold">Fresh Daily</p>
              <p className="text-[10px] text-muted-foreground">Quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
