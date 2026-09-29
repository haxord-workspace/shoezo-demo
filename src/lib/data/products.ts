import type { Product } from "@/lib/types";

const black = { name: "Black", hex: "#111318" };
const white = { name: "White", hex: "#f5f5f0" };
const blue = { name: "Graphite", hex: "#2b2f38" };
const grey = { name: "Grey", hex: "#9aa0a6" };
const beige = { name: "Beige", hex: "#d9cdb8" };
const red = { name: "Red", hex: "#c23b3b" };

const sizesUK = [6, 7, 8, 9, 10, 11];

export const products: Product[] = [
  {
    id: "run-01",
    slug: "aerocloud-flow",
    name: "AeroCloud Flow",
    category: "running",
    price: 3499,
    originalPrice: 4499,
    rating: 4.7,
    reviewCount: 312,
    colors: [blue, black, white],
    sizes: sizesUK,
    images: [
      "/images/products/running/aerocloud-flow-1.jpg",
      "/images/products/running/aerocloud-flow-2.jpg",
    ],
    isBestSeller: true,
    isNew: true,
    description:
      "A featherlight daily trainer with a responsive cloud-foam midsole, built to keep your rhythm going mile after mile.",
    features: ["CloudFoam midsole", "Breathable knit upper", "GripTrack outsole", "220g featherweight"],
  },
  {
    id: "run-02",
    slug: "vortex-runner",
    name: "Vortex Runner",
    category: "running",
    price: 2999,
    rating: 4.5,
    reviewCount: 198,
    colors: [black, grey, red],
    sizes: sizesUK,
    images: [
      "/images/products/running/vortex-runner-1.jpg",
      "/images/products/running/vortex-runner-2.jpg",
    ],
    isTrending: true,
    description:
      "Engineered mesh upper with a snug, sock-like fit for runners who chase their personal best every morning.",
    features: ["Engineered mesh", "Reflective details", "Energy-return sole", "Anti-odor lining"],
  },
  {
    id: "run-03",
    slug: "pulse-x",
    name: "Pulse X",
    category: "running",
    price: 3999,
    originalPrice: 4999,
    rating: 4.8,
    reviewCount: 421,
    colors: [blue, white],
    sizes: sizesUK,
    images: [
      "/images/products/running/pulse-x-1.jpg",
      "/images/products/running/pulse-x-2.jpg",
    ],
    isBestSeller: true,
    description:
      "Race-day propulsion for weekend warriors — a carbon-infused plate paired with plush landing comfort.",
    features: ["Carbon-infused plate", "Dual-density foam", "Lockdown heel cage", "180g race weight"],
  },
  {
    id: "bb-01",
    slug: "court-high",
    name: "Court High",
    category: "basketball",
    price: 4499,
    rating: 4.6,
    reviewCount: 156,
    colors: [black, red],
    sizes: sizesUK,
    images: [
      "/images/products/basketball/court-high-1.jpg",
      "/images/products/basketball/court-high-2.jpg",
    ],
    isBestSeller: true,
    description:
      "High-top ankle support and a herringbone outsole built to lock in every hard cut and explosive first step.",
    features: ["High-top ankle strap", "Herringbone traction", "Impact-guard cushioning", "Reinforced toe box"],
  },
  {
    id: "bb-02",
    slug: "hangtime-pro",
    name: "Hangtime Pro",
    category: "basketball",
    price: 5299,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 267,
    colors: [white, blue],
    sizes: sizesUK,
    images: [
      "/images/products/basketball/hangtime-pro-1.jpg",
      "/images/products/basketball/hangtime-pro-2.jpg",
    ],
    isNew: true,
    description:
      "Explosive cushioning tuned for jump-heavy games — land soft, spring back fast, play the next possession.",
    features: ["Air-spring midsole", "360° traction pattern", "Breathable cage upper", "Court-mapped grip"],
  },
  {
    id: "tr-01",
    slug: "gridlock-trainer",
    name: "Gridlock Trainer",
    category: "training",
    price: 3299,
    rating: 4.4,
    reviewCount: 134,
    colors: [black, grey],
    sizes: sizesUK,
    images: [
      "/images/products/training/gridlock-trainer-1.jpg",
      "/images/products/training/gridlock-trainer-2.jpg",
    ],
    description:
      "A flat, stable base for lifting days and a flexible forefoot for the burpees that follow.",
    features: ["Wide stable base", "Flex-grid forefoot", "Rope-guard midfoot wrap", "Sweat-resistant upper"],
  },
  {
    id: "tr-02",
    slug: "ironflex-2",
    name: "Ironflex 2.0",
    category: "training",
    price: 3599,
    originalPrice: 3999,
    rating: 4.6,
    reviewCount: 189,
    colors: [blue, black],
    sizes: sizesUK,
    images: [
      "/images/products/training/ironflex-2-1.jpg",
      "/images/products/training/ironflex-2-2.jpg",
    ],
    isTrending: true,
    description:
      "From HIIT circuits to the squat rack — Ironflex 2.0 grips, flexes, and holds its shape rep after rep.",
    features: ["Multi-directional traction", "Compression-molded EVA", "Breathable mesh panels", "Heel clip stability"],
  },
  {
    id: "ls-01",
    slug: "city-flow",
    name: "City Flow",
    category: "lifestyle",
    price: 2799,
    rating: 4.7,
    reviewCount: 356,
    colors: [white, beige, black],
    sizes: sizesUK,
    images: [
      "/images/products/lifestyle/city-flow-1.jpg",
      "/images/products/lifestyle/city-flow-2.jpg",
    ],
    isBestSeller: true,
    isNew: true,
    description:
      "Clean lines, all-day comfort — the everyday sneaker that moves easily from commute to coffee run.",
    features: ["Memory-foam insole", "Recycled knit upper", "Minimalist silhouette", "All-day comfort sole"],
  },
  {
    id: "ls-02",
    slug: "retro-90",
    name: "Retro 90",
    category: "lifestyle",
    price: 3199,
    rating: 4.5,
    reviewCount: 210,
    colors: [beige, red, black],
    sizes: sizesUK,
    images: [
      "/images/products/lifestyle/retro-90-1.jpg",
      "/images/products/lifestyle/retro-90-2.jpg",
    ],
    description:
      "A nod to the archives — chunky retro styling with modern-day cushioning underfoot.",
    features: ["Layered suede overlays", "Retro chunky sole", "Padded collar", "Classic lacing"],
  },
  {
    id: "ls-03",
    slug: "drift-slip",
    name: "Drift Slip-On",
    category: "lifestyle",
    price: 2399,
    originalPrice: 2899,
    rating: 4.3,
    reviewCount: 98,
    colors: [grey, blue],
    sizes: sizesUK,
    images: [
      "/images/products/lifestyle/drift-slip-1.jpg",
      "/images/products/lifestyle/drift-slip-2.jpg",
    ],
    isTrending: true,
    description:
      "Laceless and effortless — stretch-knit comfort for quick errands and long travel days alike.",
    features: ["Laceless stretch-knit", "Pull-tab heel", "Lightweight foam sole", "Packable comfort"],
  },
  {
    id: "sd-01",
    slug: "wavebreak-slide",
    name: "Wavebreak Slide",
    category: "sandals",
    price: 1299,
    rating: 4.4,
    reviewCount: 145,
    colors: [black, blue, grey],
    sizes: sizesUK,
    images: [
      "/images/products/sandals/wavebreak-slide-1.jpg",
      "/images/products/sandals/wavebreak-slide-2.jpg",
    ],
    isBestSeller: true,
    description:
      "Contoured footbed slides for recovery days and poolside afternoons.",
    features: ["Contoured footbed", "Quick-dry straps", "Non-slip base", "Lightweight EVA"],
  },
  {
    id: "sd-02",
    slug: "trailback-sandal",
    name: "Trailback Sandal",
    category: "sandals",
    price: 1699,
    rating: 4.2,
    reviewCount: 76,
    colors: [beige, black],
    sizes: sizesUK,
    images: [
      "/images/products/sandals/trailback-sandal-1.jpg",
      "/images/products/sandals/trailback-sandal-2.jpg",
    ],
    description:
      "Adjustable straps and a rugged outsole for outdoor trails and everyday errands.",
    features: ["Adjustable straps", "Rugged grip outsole", "Cushioned strap lining", "Fast-drain design"],
  },
  {
    id: "fm-01",
    slug: "oxford-classic",
    name: "Oxford Classic",
    category: "formal",
    price: 3899,
    rating: 4.6,
    reviewCount: 122,
    colors: [black, beige],
    sizes: sizesUK,
    images: [
      "/images/products/formal/oxford-classic-1.jpg",
      "/images/products/formal/oxford-classic-2.jpg",
    ],
    description:
      "Hand-finished leather uppers with a cushioned sole built for long days in formal wear.",
    features: ["Genuine leather upper", "Cushioned comfort sole", "Stitched welt", "Slip-resistant heel"],
  },
  {
    id: "fm-02",
    slug: "derby-noir",
    name: "Derby Noir",
    category: "formal",
    price: 4199,
    originalPrice: 4699,
    rating: 4.7,
    reviewCount: 143,
    colors: [black],
    sizes: sizesUK,
    images: [
      "/images/products/formal/derby-noir-1.jpg",
      "/images/products/formal/derby-noir-2.jpg",
    ],
    isNew: true,
    description:
      "A sharp derby silhouette in matte black leather — boardroom-ready, evening-ready.",
    features: ["Matte leather finish", "Derby lace-up design", "Padded ankle collar", "Shock-absorb heel"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getBestSellers() {
  return products.filter((p) => p.isBestSeller);
}

export function getNewArrivals() {
  return products.filter((p) => p.isNew);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
