"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { SectionHeading } from "@/components/section-heading";
import { getBestSellers } from "@/lib/data/products";

export function BestSellers() {
  const bestSellers = getBestSellers();
  const [selected, setSelected] = useState(0);
  const active = bestSellers[selected];

  const slides = bestSellers.map((p) => ({
    src: p.images[0],
    alt: p.name,
    title: p.name,
    subtitle: `₹${p.price.toLocaleString("en-IN")}`,
    meta: [
      { label: "Rating", value: `${p.rating} ★` },
      { label: "Category", value: p.category },
      { label: "Reviews", value: String(p.reviewCount) },
    ],
  }));

  return (
    <section className="bg-secondary/40 py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Fan favourites"
          title="Best Sellers"
          subtitle="Drag or tap a sneaker to explore it"
          viewAllHref="/search"
        />
        <CoverflowCarousel
          slides={slides}
          showCaption
          showPagination
          label="Shoezo best sellers"
          onSelect={setSelected}
        />
        {active && (
          <div className="mt-3 flex justify-center">
            <Link
              href={`/product/${active.slug}`}
              className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--brand-ink-dark)]"
            >
              View {active.name}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
