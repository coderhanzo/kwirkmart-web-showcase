import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const ProductCardSkeleton = () => (
  <Card className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/95">
    <Skeleton className="aspect-square w-full rounded-none" />
    <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-2/5" />
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="mt-auto h-9 w-full rounded-xl" />
    </div>
  </Card>
);

export default ProductCardSkeleton;
