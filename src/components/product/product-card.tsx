"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Star, Plus, Check } from "lucide-react";
import { SmartImage } from "@/components/smart-image";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const wishlisted = useWishlistStore((s) => s.has(product.id));
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group block w-full shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <SmartImage
          src={product.images[0]}
          alt={product.name}
          label={product.name}
          imgClassName="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
              NEW
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-bold text-background">
              -{discount}%
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label="Toggle wishlist"
          aria-pressed={wishlisted}
          className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-colors hover:text-primary"
        >
          <Heart
            className="size-4"
            fill={wishlisted ? "currentColor" : "none"}
            color={wishlisted ? "var(--primary)" : "currentColor"}
          />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addItem({
              productId: product.slug,
              size: product.sizes[0],
              color: product.colors[0].name,
            });
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          aria-label="Quick add to cart"
          className="absolute bottom-2 right-2 flex size-8 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-all duration-200 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          {added ? <Check className="size-4" /> : <Plus className="size-4" />}
        </button>
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-semibold text-foreground">
          {product.name}
        </p>
        <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3 fill-primary text-primary" />
          <span>{product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>
        <div className="mt-1.5 flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
