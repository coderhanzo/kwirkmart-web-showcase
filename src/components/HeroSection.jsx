import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  {
    label: "Products in stock",
    value: "2,700+",
    accent: "Always fresh",
    visual: (
      <div className="flex h-full items-end gap-1">
        {[6, 10, 8, 14, 12, 18, 14, 22].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-primary"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    ),
  },
  {
    label: "Fresh categories",
    value: "20+",
    accent: "From bakery to deli",
    visual: (
      <div className="grid grid-cols-5 gap-1">
        {[
          "bg-rose-400",
          "bg-amber-400",
          "bg-emerald-400",
          "bg-sky-400",
          "bg-violet-400",
          "bg-orange-400",
          "bg-lime-400",
          "bg-fuchsia-400",
          "bg-cyan-400",
          "bg-yellow-400",
        ].map((c, i) => (
          <span key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
        ))}
      </div>
    ),
  },
  {
    label: "Open today",
    value: "8AM – 10PM",
    accent: "Daily, all year",
    visual: (
      <div className="relative h-1.5 w-full rounded-full bg-muted">
        <span className="absolute inset-y-0 left-[18%] right-[8%] rounded-full bg-gradient-to-r from-primary to-primary/40" />
        <span className="absolute -top-1 left-[18%] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
        <span className="absolute -top-1 right-[8%] h-3.5 w-3.5 translate-x-1/2 rounded-full border-2 border-primary bg-background" />
      </div>
    ),
  },
  {
    label: "Customer rating",
    value: "4.4",
    accent: "From regulars",
    visual: (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < 4
                ? "h-3.5 w-3.5 fill-primary text-primary"
                : "h-3.5 w-3.5 fill-primary/30 text-primary/60"
            }
          />
        ))}
      </div>
    ),
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-36 sm:pb-24"
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

        {/* Stat card preview */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-20">
          <div className="absolute -inset-x-6 -top-6 -bottom-6 rounded-[2.5rem] bg-gradient-to-b from-background/0 via-background/40 to-background/0 blur-2xl" />
          <div className="relative rounded-[2rem] border border-border/60 bg-background/85 p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/90 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-[11px]">
                      {s.label}
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none text-foreground sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                      {s.accent}
                    </p>
                  </div>
                  <div className="mt-auto flex h-7 items-end">{s.visual}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
