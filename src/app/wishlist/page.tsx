"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/lib/store";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";

export default function WishlistPage() {
  const productIds = useWishlistStore((s) => s.productIds);
  const items = products.filter((p) => productIds.includes(p.id));

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
          <Heart className="size-7" />
        </span>
        <h1 className="mt-4 text-lg font-bold text-foreground">
          Your wishlist is empty
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Tap the heart on any sneaker to save it here.
        </p>
        <Link
          href="/"
          className="mt-5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Discover Sneakers
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
      <h1 className="text-xl font-extrabold text-foreground">
        Wishlist ({items.length})
      </h1>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
