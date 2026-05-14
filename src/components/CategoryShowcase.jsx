import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";
import { useCategories } from "@/hooks/useCatalog";

const CategoryShowcase = () => {
  const { data, isLoading } = useCategories();
  const categories = Array.isArray(data) ? data.slice(0, 10) : [];

  return (
    <section className="relative px-4 py-16 sm:py-20">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shop by <span className="gradient-text-primary">category</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
              From fresh produce to pantry staples — explore everything Kwikmart stocks.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {(isLoading ? Array.from({ length: 10 }) : categories).map((cat, i) => (
            <Link
              key={cat?.id ?? i}
              to={cat ? `/products?category=${cat.id}` : "/products"}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <ImageWithLoader
                src={cat?.category_image}
                alt={cat?.name || "Category"}
                aspect="aspect-square"
                imgClassName="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="line-clamp-2 text-sm font-semibold text-background sm:text-base">
                  {cat?.name ?? "Loading…"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
