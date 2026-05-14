import { useState, useEffect } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Image with its own skeleton loader. Only the image area shows the
 * shimmer placeholder while loading — surrounding card content stays
 * visible. Falls back to a neutral icon if the image fails.
 */
const ImageWithLoader = ({
  src,
  alt,
  className,
  imgClassName,
  aspect = "aspect-square",
  loading = "lazy",
  decoding = "async",
}) => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
  }, [src]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted/40",
        aspect,
        className
      )}
    >
      {status !== "loaded" && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-muted/60 via-muted/30 to-muted/60",
            status === "loading" && "animate-pulse"
          )}
          aria-hidden="true"
        />
      )}

      {status === "error" || !src ? (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <ImageOff className="h-8 w-8 opacity-60" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            status === "loaded" ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;
