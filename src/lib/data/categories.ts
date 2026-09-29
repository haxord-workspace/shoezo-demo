import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "running",
    name: "Running",
    tagline: "Speed meets cushioning",
    cover: "/images/categories/running/cover.jpg",
  },
  {
    slug: "basketball",
    name: "Basketball",
    tagline: "Grip. Lift. Dominate.",
    cover: "/images/categories/basketball/cover.jpg",
  },
  {
    slug: "training",
    name: "Training",
    tagline: "Built for every rep",
    cover: "/images/categories/training/cover.jpg",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    tagline: "Street-ready comfort",
    cover: "/images/categories/lifestyle/cover.jpg",
  },
  {
    slug: "sandals",
    name: "Sandals",
    tagline: "Easy, breezy stepz",
    cover: "/images/categories/sandals/cover.jpg",
  },
  {
    slug: "formal",
    name: "Formal",
    tagline: "Sharp for every occasion",
    cover: "/images/categories/formal/cover.jpg",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
