# Hero product images

This folder is where the homepage's 3D "product jump" hero
(`src/components/hero/ShoeHero.tsx`) looks for its product cutouts.

## Expected files

| Filename          | Hero slot | Real catalog product (`src/lib/data/products.ts`) |
| ------------------ | --------- | --------------------------------------------------- |
| `shoe-01.png`       | 1         | Pulse X (`pulse-x`)                                  |
| `shoe-02.png`       | 2         | City Flow (`city-flow`)                              |
| `shoe-03.png`       | 3         | Court High (`court-high`)                            |
| `shoe-04.png`       | 4         | Vortex Runner (`vortex-runner`)                      |

`.webp` also works — the hero data file (`src/lib/data/hero-products.ts`)
currently points at the `.png` path for each slot; if you supply `.webp`
instead, update the `image` field there to match.

## Requirements

- **Transparent background.** PNG or WebP with a real alpha channel — no
  baked-in gradient, studio floor, or drop shadow behind the shoe. The hero
  draws its own animated contact shadow underneath.
- **Recommended resolution:** 1600×1600px (square canvas), shoe centered.
- **Consistent 3/4 hero angle** across all four photos — same camera angle,
  same side of the shoe, same lighting direction. Mixing angles reads as
  glitchy once the jump animation is playing.
- **Consistent scale and crop.** The shoe should occupy roughly the same
  proportion of the canvas in all four images (leave similar margin on every
  side). If one shoe is photographed larger/smaller than the others, it will
  visibly "pop" in size during the jump/land animation between products.

## Placeholders until then

Until these files exist, each slot falls back to a branded placeholder
(icon + the expected filename) via the site's existing `SmartImage`
component (`src/components/smart-image.tsx`, `variant="floating"`) — the
hero will not break or show a broken-image icon. Drop a correctly named
file in here and it swaps in automatically on the next load, no code
changes required.

Note: three competitor product photos (an Adidas Samba, two Nike Air Force
1 shots) were supplied as reference during development. They were
deliberately **not** used — they carry visible third-party branding and
aren't transparent cutouts — so this folder is currently placeholder-only,
waiting on real Shoezo product photography.
