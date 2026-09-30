# Shoezo — Demo

A mobile-first e-commerce mockup for **Shoezo** ("Update Your Stepz"), built with
Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

**Live demo:** https://haxord-workspace.github.io/shoezo-demo/

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 + shadcn/ui
- Zustand (cart / wishlist, persisted to `localStorage`)
- Radio Canada (Google Font)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding real product photos

This project ships with placeholder images (a friendly icon + the expected
filename) wherever a real photo hasn't been uploaded yet — drop a file in with
the exact filename and it replaces the placeholder automatically, no code
changes needed. See `public/images/README.md` and
`public/images/products/README.md` for the exact folders/filenames expected.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via
`.github/workflows/deploy.yml` (static export, base path `/shoezo-demo`).

Cloudflare Pages deploys from `.github/workflows/deploy-cloudflare.yml`. Create
a Cloudflare Pages project named `shoezo`, then add the GitHub repository
secrets `CLOUDFLARE_API_TOKEN` (with Cloudflare Pages edit permission) and
`CLOUDFLARE_ACCOUNT_ID`. Pushes to `main` and manual workflow runs build the
site as a static export at the domain root and deploy it to that project. The
Cloudflare workflow and GitHub Pages workflow can run independently.
