import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-32 pb-12 sm:pt-36 sm:pb-16"
    >
      {/* Soft radial gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(45 93% 75% / 0.55), transparent 70%), radial-gradient(ellipse 60% 50% at 10% 100%, hsl(28 90% 80% / 0.45), transparent 70%), radial-gradient(ellipse 60% 50% at 100% 100%, hsl(45 93% 85% / 0.5), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Top eyebrow */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Now serving Accra — fresh daily
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          The neighbourhood supermarket,
          <span className="block text-muted-foreground">reimagined for Accra.</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-base text-muted-foreground sm:mt-6 sm:text-lg">
          Shop thousands of everyday essentials, snacks, and pantry staples from
          Kwikmart's Dzorwulu and Tseaddo stores — and order on WhatsApp or in the app.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-primary hover:bg-primary/90"
          >
            <Link to="/products">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 rounded-full px-5 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
          >
            <a href="#branches">
              Find a branch
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
