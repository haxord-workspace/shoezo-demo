export type CategorySlug =
  | "running"
  | "basketball"
  | "training"
  | "lifestyle"
  | "sandals"
  | "formal";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  cover: string;
};

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  sizes: number[];
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  description: string;
  features: string[];
};
