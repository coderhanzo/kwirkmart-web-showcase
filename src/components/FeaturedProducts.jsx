import { useMemo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useProducts } from "@/hooks/useCatalog";

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useProducts();

  const featured = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return [];
    const withImages = data.filter(
      (p) =>
        p.product_image &&
        p.is_available &&
        (p.available_stock ?? p.stock ?? 0) > 0
    );
    const promoted = withImages.filter(
      (p) => p.is_discounted_feature || p.discount_price
    );
    const pool = promoted.length >= 12 ? promoted : withImages;
    return pool.slice(0, 16);
  }, [data]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, featured.length]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(id);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section
      id="featured"
      className="relative px-4 py-16 sm:py-20"
    >
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Featured this week
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Fresh picks from{" "}
              <span className="gradient-text-primary">Kwikmart</span>
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              A handpicked selection of pantry favourites, snacks, and
              everyday essentials — all in stock and ready to go.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous"
              onClick={scrollPrev}
              className="hidden h-10 w-10 rounded-full border-border/60 sm:inline-flex"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next"
              onClick={scrollNext}
              className="hidden h-10 w-10 rounded-full border-border/60 sm:inline-flex"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/products">
                Shop all products
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {isError ? (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center text-sm text-destructive">
            We couldn't load products right now. Please refresh in a moment.
          </div>
        ) : isLoading || featured.length === 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-3 sm:-ml-4">
                {featured.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-0 shrink-0 grow-0 basis-1/2 pl-3 sm:basis-1/3 sm:pl-4 lg:basis-1/4 xl:basis-1/5"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-1.5">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selectedIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
