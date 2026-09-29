import { getProduct } from "@/lib/data/products";
import type { ProductColor } from "@/lib/types";

/**
 * Data shape consumed by the homepage hero (src/components/home/hero-section.tsx).
 * Deliberately independent from the catalog `Product` shape used by
 * src/lib/data/products.ts — the hero only needs a thin slice of fields,
 * plus a placeholder-fallback `image` path that has nothing to do with a
 * product's real catalog photography (`images[]`).
 */
export type HeroProduct = {
  /** Stable id, also the expected placeholder filename stem (shoe-01..04). */
  id: string;
  /** Real catalog slug — hero CTAs link to `/product/${slug}`. */
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  /** Transparent PNG cutout. Falls back to a branded placeholder if missing. */
  image: string;
  /** Grayscale/near-black accent pulled from the product's own palette. */
  accent: string;
  color: string;
  colors: ProductColor[];
  sizes: string[];
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
};

/**
 * Hero slot -> real catalog product mapping, supplied by the client:
 *   slot 1 (Blue/White)   -> pulse-x       (Pulse X, running)
 *   slot 2 (Cream/Brown)  -> city-flow     (City Flow, lifestyle)
 *   slot 3 (Black/White)  -> court-high    (Court High, basketball)
 *   slot 4 (Red/White)    -> vortex-runner (Vortex Runner, running)
 * Kept as slugs (not duplicated data) so the hero and the shop stay in sync
 * with src/lib/data/products.ts.
 */
const HERO_SLUGS = ["pulse-x", "city-flow", "court-high", "vortex-runner"] as const;

function buildHeroProducts(): HeroProduct[] {
  return HERO_SLUGS.map((slug, i) => {
    const product = getProduct(slug);
    if (!product) {
      throw new Error(
        `Hero product mapping references missing catalog slug "${slug}". Check src/lib/data/products.ts.`,
      );
    }
    const slotNumber = String(i + 1).padStart(2, "0");
    return {
      id: `shoe-${slotNumber}`,
      slug: product.slug,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: `/images/products/shoe-${slotNumber}.png`,
      accent: product.colors[0]?.hex ?? "#111318",
      color: product.colors.map((c) => c.name).join(" / "),
      colors: product.colors,
      sizes: product.sizes.map((s) => String(s)),
      category: product.category,
      description: product.description,
      rating: product.rating,
      reviewCount: product.reviewCount,
    };
  });
}

export const heroProducts: HeroProduct[] = buildHeroProducts();
