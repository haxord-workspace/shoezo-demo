/**
 * GitHub Pages serves this app from a subpath (/shoezo-demo/), set via
 * NEXT_PUBLIC_BASE_PATH at build time (see next.config.ts + the Pages
 * workflow). next/image and next/link handle this automatically, but plain
 * <img src="/..."> tags (SmartImage, the coverflow carousel) don't — this
 * prepends it for any path that starts with "/". Leaves external URLs and
 * data: URIs untouched, and is a no-op locally / on non-Pages hosting.
 */
export function withBasePath(src: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath || !src.startsWith("/") || src.startsWith("//")) return src;
  return `${basePath}${src}`;
}
