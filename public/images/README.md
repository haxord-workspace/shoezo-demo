# Shoezo Image Assets

Every photo slot below is already wired into the site. Until a real file exists
at the exact path listed, that spot shows a clean placeholder (Shoezo-blue
icon + the expected filename) instead of a broken image — so you can drop
photos in over time with zero code changes. Just save your photo with the
**exact filename** shown, into the matching folder, overwriting nothing else.

## Hero (homepage top banner)
`public/images/hero/`
| File | Recommended size | Notes |
|---|---|---|
| `hero-scene.jpg` | 1600×2200 (portrait), JPG | Full-bleed lifestyle/action shot — a person mid-stride, court, or street scene. This is the background. |
| `hero-foreground.png` | ~1600×1600, **transparent PNG** | A cut-out hero sneaker or model shot with no background, placed on top of the scene. |

## Brand
`public/images/brand/`
| File | Notes |
|---|---|
| `shoezo-logo.png` | Already added — this is your real logo from Instagram. Replace it any time with an updated version using the same filename. |

## Categories (2-column grid + category page banner)
`public/images/categories/<category>/cover.jpg` — recommended 900×1125 (4:5 portrait), JPG

| Category | Path |
|---|---|
| Running | `categories/running/cover.jpg` |
| Basketball | `categories/basketball/cover.jpg` |
| Training | `categories/training/cover.jpg` |
| Lifestyle | `categories/lifestyle/cover.jpg` |
| Sandals | `categories/sandals/cover.jpg` |
| Formal | `categories/formal/cover.jpg` |

## Products (product cards + product detail gallery)
`public/images/products/<category>/<slug>-1.jpg` and `-2.jpg` — recommended
1200×1200 square, JPG, plain/light background for the first image.

| Category | Product | Files |
|---|---|---|
| Running | AeroCloud Flow | `running/aerocloud-flow-1.jpg`, `-2.jpg` |
| Running | Vortex Runner | `running/vortex-runner-1.jpg`, `-2.jpg` |
| Running | Pulse X | `running/pulse-x-1.jpg`, `-2.jpg` |
| Basketball | Court High | `basketball/court-high-1.jpg`, `-2.jpg` |
| Basketball | Hangtime Pro | `basketball/hangtime-pro-1.jpg`, `-2.jpg` |
| Training | Gridlock Trainer | `training/gridlock-trainer-1.jpg`, `-2.jpg` |
| Training | Ironflex 2.0 | `training/ironflex-2-1.jpg`, `-2.jpg` |
| Lifestyle | City Flow | `lifestyle/city-flow-1.jpg`, `-2.jpg` |
| Lifestyle | Retro 90 | `lifestyle/retro-90-1.jpg`, `-2.jpg` |
| Lifestyle | Drift Slip-On | `lifestyle/drift-slip-1.jpg`, `-2.jpg` |
| Sandals | Wavebreak Slide | `sandals/wavebreak-slide-1.jpg`, `-2.jpg` |
| Sandals | Trailback Sandal | `sandals/trailback-sandal-1.jpg`, `-2.jpg` |
| Formal | Oxford Classic | `formal/oxford-classic-1.jpg`, `-2.jpg` |
| Formal | Derby Noir | `formal/derby-noir-1.jpg`, `-2.jpg` |

To rename a product or add new ones, edit `src/lib/data/products.ts` — the
`images` array there is the source of truth for these paths.

## Promo banner (Shoezo Stepz Club)
`public/images/promo/club-banner.jpg` — optional background texture, shown at
low opacity behind the membership banner text.

## Split banner (homepage, "New Arrivals" / "Best Sellers" tiles)
`public/images/promo/` — 900×1125 (4:5 portrait) or larger, JPG.
| File | Notes |
|---|---|
| `banner-new-arrivals.jpg` | Left tile — a lifestyle/product shot for the New Arrivals panel. |
| `banner-best-sellers.jpg` | Right tile — a lifestyle/product shot for the Best Sellers panel. |

## Instagram / community banner (homepage)
`public/images/promo/` — 800×800 square, JPG. Ideally 4 real posts from
@shoezo.in for an authentic feed look.
| File |
|---|
| `instagram-1.jpg` |
| `instagram-2.jpg` |
| `instagram-3.jpg` |
| `instagram-4.jpg` |
