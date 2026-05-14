import { ShoppingBag } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ImageWithLoader from "./ImageWithLoader";
import { formatPrice, getEffectivePrice } from "@/lib/api";

const WHATSAPP_NUMBER = "233248926993";

const buildOrderLink = (product) => {
  const text = `Hi Kwikmart! I'd like to order: ${product.name} (SKU: ${product.product_sku || product.id}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

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

      <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
        <h3
          className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-foreground sm:text-base"
          title={product.name}
        >
          {product.name}
        </h3>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-base font-bold text-foreground sm:text-lg">
            {formatPrice(price)}
          </span>
          {hasDiscount && original && (
            <span className="text-xs text-muted-foreground line-through sm:text-sm">
              {formatPrice(original)}
            </span>
          )}
        </div>

        <Button
          size="sm"
          disabled={!inStock}
          onClick={() => window.open(buildOrderLink(product), "_blank", "noopener")}
          className="w-full rounded-xl bg-primary text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          {inStock ? "Order on WhatsApp" : "Unavailable"}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
