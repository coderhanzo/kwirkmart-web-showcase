import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, PackageSearch } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCategories, useProducts, useSubcategories } from "@/hooks/useCatalog";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

const PAGE_SIZE = 24;

const buildPageList = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < sorted.length; i++) {
    out.push(sorted[i]);
    if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] > 1) out.push("ellipsis");
  }
  return out;
};

const FiltersPanel = ({
  categories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onSelectCategory,
  onSelectSubcategory,
  onClear,
}) => {
  const filteredSubs = useMemo(() => {
    if (!Array.isArray(subcategories)) return [];
    if (!selectedCategory) return subcategories;
    return subcategories.filter((s) => String(s.category) === String(selectedCategory));
  }, [subcategories, selectedCategory]);

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onClear} className="h-8 text-xs">
          Clear all
        </Button>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Categories
        </p>
        <ScrollArea className="h-64 pr-2">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => onSelectCategory(null)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                selectedCategory === null
                  ? "bg-primary/15 font-semibold text-primary"
                  : "hover:bg-muted"
              }`}
            >
              All categories
            </button>
            {(Array.isArray(categories) ? categories : []).map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                  String(selectedCategory) === String(c.id)
                    ? "bg-primary/15 font-semibold text-primary"
                    : "hover:bg-muted"
                }`}
              >
                <span className="truncate">{c.name}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Subcategories
        </p>
        <ScrollArea className="h-56 pr-2">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSelectSubcategory(null)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                selectedSubcategory === null
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              All
            </button>
            {filteredSubs.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectSubcategory(s.id)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  String(selectedSubcategory) === String(s.id)
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {s.name}
              </button>
            ))}
            {filteredSubs.length === 0 && (
              <p className="text-xs text-muted-foreground">No subcategories.</p>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? null;
  const initialSubcategory = searchParams.get("subcategory") ?? null;
  const initialPage = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);

  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebouncedValue(query, 250);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [page, setPage] = useState(initialPage);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const { data: products, isLoading, isError, refetch } = useProducts();
  const { data: categories } = useCategories();
  const { data: subcategories } = useSubcategories();

  const subToCategory = useMemo(() => {
    const map = new Map();
    if (Array.isArray(subcategories)) {
      for (const s of subcategories) map.set(s.id, s.category);
    }
    return map;
  }, [subcategories]);

  const filtered = useMemo(() => {
    if (!Array.isArray(products)) return [];
    const q = debouncedQuery.trim().toLowerCase();
    return products.filter((p) => {
      if (q) {
        const hay = `${p.name ?? ""} ${p.product_sku ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (selectedSubcategory && String(p.sub_category) !== String(selectedSubcategory)) {
        return false;
      }
      if (selectedCategory) {
        const cat = subToCategory.get(p.sub_category);
        if (String(cat) !== String(selectedCategory)) return false;
      }
      return true;
    });
  }, [products, debouncedQuery, selectedCategory, selectedSubcategory, subToCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageStart = (safePage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  // Reset page on filter change
  const filtersKey = `${debouncedQuery}|${selectedCategory ?? ""}|${selectedSubcategory ?? ""}`;
  const lastFiltersKey = useRef(filtersKey);
  useEffect(() => {
    if (lastFiltersKey.current !== filtersKey) {
      lastFiltersKey.current = filtersKey;
      setPage(1);
    }
  }, [filtersKey]);

  // Sync URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery.trim()) params.set("q", debouncedQuery.trim());
    if (selectedCategory) params.set("category", String(selectedCategory));
    if (selectedSubcategory) params.set("subcategory", String(selectedSubcategory));
    if (safePage > 1) params.set("page", String(safePage));
    setSearchParams(params, { replace: true });
  }, [debouncedQuery, selectedCategory, selectedSubcategory, safePage, setSearchParams]);

  // Scroll to top of grid on page change (but not on initial mount)
  const gridRef = useRef(null);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [safePage]);

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) +
    (selectedSubcategory ? 1 : 0) +
    (debouncedQuery.trim() ? 1 : 0);

  const handleClearAll = () => {
    setQuery("");
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setPage(1);
  };

  const activeCategoryName =
    selectedCategory != null
      ? (Array.isArray(categories) ? categories : []).find(
          (c) => String(c.id) === String(selectedCategory)
        )?.name
      : null;
  const activeSubcategoryName =
    selectedSubcategory != null
      ? (Array.isArray(subcategories) ? subcategories : []).find(
          (s) => String(s.id) === String(selectedSubcategory)
        )?.name
      : null;

  const pageList = buildPageList(safePage, totalPages);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 py-12 sm:py-16">
            <div className="max-w-3xl space-y-3">
              <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-primary">
                All products
              </Badge>
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Explore the full <span className="gradient-text-primary">Kwikmart</span> catalogue
              </h1>
              <p className="text-sm text-muted-foreground sm:text-base">
                Search across thousands of products, filter by category, and order what you need on WhatsApp.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for snacks, drinks, brands…"
                  className="h-12 rounded-2xl border-border/60 bg-card pl-11 pr-10 text-base shadow-sm focus-visible:ring-primary"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 rounded-2xl border-border/60 px-5 lg:hidden"
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge className="ml-2 h-5 rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm">
                  <SheetHeader>
                    <SheetTitle>Filter products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FiltersPanel
                      categories={categories}
                      subcategories={subcategories}
                      selectedCategory={selectedCategory}
                      selectedSubcategory={selectedSubcategory}
                      onSelectCategory={(id) => {
                        setSelectedCategory(id);
                        setSelectedSubcategory(null);
                      }}
                      onSelectSubcategory={(id) => setSelectedSubcategory(id)}
                      onClear={handleClearAll}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {debouncedQuery.trim() && (
                  <Badge variant="secondary" className="rounded-full">
                    Search: "{debouncedQuery}"
                    <button
                      onClick={() => setQuery("")}
                      className="ml-1.5 rounded-full hover:bg-background/40"
                      aria-label="Clear search"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {activeCategoryName && (
                  <Badge variant="secondary" className="rounded-full">
                    {activeCategoryName}
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedSubcategory(null);
                      }}
                      className="ml-1.5 rounded-full hover:bg-background/40"
                      aria-label="Clear category"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {activeSubcategoryName && (
                  <Badge variant="secondary" className="rounded-full">
                    {activeSubcategoryName}
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className="ml-1.5 rounded-full hover:bg-background/40"
                      aria-label="Clear subcategory"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={handleClearAll} className="h-7 text-xs">
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="container mx-auto px-4 py-10" ref={gridRef}>
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                <FiltersPanel
                  categories={categories}
                  subcategories={subcategories}
                  selectedCategory={selectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  onSelectCategory={(id) => {
                    setSelectedCategory(id);
                    setSelectedSubcategory(null);
                  }}
                  onSelectSubcategory={(id) => setSelectedSubcategory(id)}
                  onClear={handleClearAll}
                />
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {isLoading
                    ? "Loading products…"
                    : `Showing ${filtered.length === 0 ? 0 : pageStart + 1}–${Math.min(
                        pageStart + PAGE_SIZE,
                        filtered.length
                      )} of ${filtered.length}`}
                </p>
              </div>

              {isError ? (
                <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
                  <p className="text-sm text-destructive">Failed to load products.</p>
                  <Button onClick={() => refetch()} className="mt-3 rounded-xl">
                    Try again
                  </Button>
                </div>
              ) : isLoading ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              ) : pageItems.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
                  <PackageSearch className="mx-auto h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No products found</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try a different search or remove a filter.
                  </p>
                  <Button onClick={handleClearAll} className="mt-4 rounded-xl">
                    Reset filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
                    {pageItems.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <Pagination className="mt-10">
                      <PaginationContent className="flex-wrap">
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={(e) => {
                              e.preventDefault();
                              setPage((p) => Math.max(1, p - 1));
                            }}
                            href="#"
                            aria-disabled={safePage === 1}
                            className={safePage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                        {pageList.map((p, i) =>
                          p === "ellipsis" ? (
                            <PaginationItem key={`e-${i}`}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          ) : (
                            <PaginationItem key={p}>
                              <PaginationLink
                                href="#"
                                isActive={p === safePage}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPage(p);
                                }}
                              >
                                {p}
                              </PaginationLink>
                            </PaginationItem>
                          )
                        )}
                        <PaginationItem>
                          <PaginationNext
                            onClick={(e) => {
                              e.preventDefault();
                              setPage((p) => Math.min(totalPages, p + 1));
                            }}
                            href="#"
                            aria-disabled={safePage === totalPages}
                            className={
                              safePage === totalPages ? "pointer-events-none opacity-50" : ""
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
