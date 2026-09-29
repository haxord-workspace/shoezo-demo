"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SmartImage } from "@/components/smart-image";
import { heroProducts } from "@/lib/data/hero-products";
import { cn } from "@/lib/utils";

const SECTION_HEIGHT = "min-h-[80vh] sm:min-h-[75vh] lg:min-h-[88vh]";

/**
 * Full-bleed hero: the product photo covers the entire section as a
 * background, with the content overlaid on top of a white scrim (bottom-up
 * on mobile, left-to-right on larger screens) for legibility. Plain React
 * state + CSS transitions only, no animation library.
 */
export function HeroSection() {
  const [index, setIndex] = useState(0);
  const count = heroProducts.length;
  const product = heroProducts[index];

  const goTo = (next: number) => setIndex(((next % count) + count) % count);

  const discount = product.originalPrice
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : null;

  return (
    <section className={cn("relative w-full overflow-hidden bg-background", SECTION_HEIGHT)}>
      <div key={product.id} className="absolute inset-0 animate-in fade-in duration-700">
        <SmartImage
          src={product.image}
          alt={`${product.name} — ${product.color}`}
          label={`${product.name} photo`}
          icon="shoe"
          priority
          imgClassName="object-cover object-center"
        />
      </div>

      <div className={cn("relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-24 pt-28 sm:justify-center sm:px-6 sm:pb-10", SECTION_HEIGHT)}>
        <div
          key={`content-${product.id}`}
          className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-2 text-left duration-500 [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
            New Collection
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-1.5 text-sm text-white/90">
            <div className="flex items-center gap-0.5 text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4"
                  fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span>
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90">
            {product.description}
          </p>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-white">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-white/70 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-sm font-semibold text-white">
                  {discount}% off
                </span>
              </>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/product/${product.slug}`}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`/category/${product.category}`}
              className="rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white"
            >
              Explore {product.category}
            </Link>
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-4 sm:right-6 sm:left-auto sm:justify-end">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous product"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-foreground"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {heroProducts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show product ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/40",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next product"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-foreground"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </section>
  );
}
