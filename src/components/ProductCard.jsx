import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ImageWithLoader from "./ImageWithLoader";
import { formatPrice, getEffectivePrice } from "@/lib/api";

const WHATSAPP_NUMBER = "233248926993";
const APP_STORE_URL = "https://apps.apple.com/gb/app/kwirkmart/id6752880752";

const buildOrderLink = (product) => {
  const text = `Hi Kwikmart! I'd like to order: ${product.name} (SKU: ${product.product_sku || product.id}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const AppleIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const ProductCard = ({ product }) => {
  const { price, original, hasDiscount } = getEffectivePrice(product);
  const inStock = product.is_available && (product.available_stock ?? product.stock ?? 0) > 0;

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="relative">
        <ImageWithLoader
          src={product.product_image}
          alt={product.name}
          aspect="aspect-square"
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />
        {hasDiscount && (
          <Badge className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white shadow">
            Sale
          </Badge>
        )}
        {!inStock && (
          <Badge className="absolute right-2 top-2 rounded-full bg-foreground/80 px-2 py-0.5 text-xs font-semibold text-background">
            Out of stock
          </Badge>
        )}
        {product.is_seasonal && product.season_label && (
          <Badge className="absolute bottom-2 left-2 rounded-full bg-primary/95 px-2 py-0.5 text-xs font-semibold text-primary-foreground shadow">
            {product.season_label}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3
          className="line-clamp-2 h-10 text-sm font-semibold leading-5 text-foreground sm:h-11 sm:text-base sm:leading-[1.375rem]"
          title={product.name}
        >
          {product.name}
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
          <span className="text-base font-bold text-foreground sm:text-lg">
            {formatPrice(price)}
          </span>
          {hasDiscount && original && (
            <span className="text-xs text-muted-foreground line-through sm:text-sm">
              {formatPrice(original)}
            </span>
          )}
        </div>

        <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
          Get it on
        </p>

        <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(APP_STORE_URL, "_blank", "noopener")}
            className="h-9 rounded-xl border-foreground/80 bg-foreground px-2 text-background hover:bg-foreground/90 hover:text-background"
            aria-label="Get the Kwikmart app on the App Store"
          >
            <AppleIcon className="h-4 w-4 shrink-0 sm:mr-1.5" />
            <span className="hidden text-xs font-medium sm:inline">App</span>
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(buildOrderLink(product), "_blank", "noopener")}
            className="h-9 rounded-xl bg-[#25D366] px-2 text-white hover:bg-[#1ebe5a]"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 sm:mr-1.5" />
            <span className="hidden text-xs font-medium sm:inline">WhatsApp</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
