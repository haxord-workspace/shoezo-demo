import type { NextConfig } from "next";
import path from "node:path";

// Set by the deployment workflows only; local dev/builds remain a regular
// Next.js app (e.g. if this ever moves to Vercel/Node hosting).
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isCloudflarePages = process.env.CLOUDFLARE_PAGES === "true";
const isStaticExport = isGithubPages || isCloudflarePages;
const repoName = "shoezo-demo";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isStaticExport
    ? {
        output: "export" as const,
        ...(isGithubPages
          ? {
              basePath: `/${repoName}`,
              assetPrefix: `/${repoName}/`,
            }
          : {}),
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
