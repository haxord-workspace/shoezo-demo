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

Cloudflare Workers deploys this Next.js app through OpenNext. In the Cloudflare
Workers build settings, use `npm run cf:build` as the build command and
`npm run cf:deploy` as the deploy command. Set the build environment to Node.js
22 or newer (Node.js 24 is used by the current Cloudflare build image). The
committed `wrangler.jsonc` keeps the Worker name and `WORKER_SELF_REFERENCE`
service binding aligned as `shoezo-demo`, avoiding Cloudflare's generated name
mismatch. The incremental cache uses the existing `shoezo-opennext-cache` R2
bucket.

To deploy locally, authenticate Wrangler with `npx wrangler login` and run
`npm run deploy`. Use `npm run preview` to test the Worker runtime locally.
