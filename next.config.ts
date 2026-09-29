import type { NextConfig } from "next";
import path from "node:path";

// Set by the GitHub Actions Pages workflow only — local dev/builds are
// unaffected, so `npm run dev` and a normal `npm run build` still work as
// a regular Next.js app (e.g. if this ever moves to Vercel/Node hosting).
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "shoezo-demo";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
