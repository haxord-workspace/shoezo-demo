import fs from "node:fs";
import path from "node:path";

const HERO_DIR = path.join(process.cwd(), "public", "images", "hero");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Lists banner images directly inside public/images/hero (non-recursive, so
 * a subfolder like _reference-not-for-site is naturally excluded). Runs at
 * build/request time on the server — new files just need a redeploy/rebuild
 * to show up, no code change.
 */
export function getHeroBannerImages(): string[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(HERO_DIR, { withFileTypes: true });
  } catch {
    return [];
  }

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort()
    .map((name) => `/images/hero/${encodeURIComponent(name)}`);
}
