"use client";

import { useState } from "react";
import { Footprints, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

export type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
  icon?: "shoe" | "image";
  fill?: boolean;
  /**
   * "boxed" (default) is the original card-style placeholder: a filled
   * gradient box with a centered icon, meant to occupy a fixed aspect-ratio
   * slot (product cards, banners, etc).
   * "floating" drops the background box entirely — just an outlined icon
   * silhouette + filename over whatever sits behind it — for a large,
   * non-cropped product cutout (e.g. the hero's floating shoe stage) where
   * a solid box would look like a broken image rather than "shoe pending".
   */
  variant?: "boxed" | "floating";
  /** Eager-loads instead of `loading="lazy"` — use for above-the-fold hero art. */
  priority?: boolean;
};

/**
 * Renders the real photo once it exists at `src`. Until the client uploads
 * a file at that exact path, falls back to a branded placeholder that names
 * the expected filename, so drop-in replacement needs zero code changes.
 */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  label,
  icon = "shoe",
  fill = true,
  variant = "boxed",
  priority = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop();

  if (failed) {
    const Icon = icon === "shoe" ? Footprints : ImageIcon;
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 text-center",
          variant === "boxed"
            ? "bg-gradient-to-br from-accent to-secondary"
            : "rounded-full border border-dashed border-border/70",
          fill && "absolute inset-0",
          className,
        )}
      >
        <Icon
          className={cn(
            "text-primary/40",
            variant === "boxed" ? "size-8" : "size-16 sm:size-20",
          )}
          strokeWidth={1.25}
        />
        <div className="px-3">
          <p className="text-[11px] font-medium text-muted-foreground">
            {label ?? "Photo coming soon"}
          </p>
          <p className="mt-0.5 font-mono text-[9px] text-muted-foreground/60">
            {filename}
          </p>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={withBasePath(src)}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn(
        fill && "absolute inset-0 h-full w-full object-cover",
        imgClassName,
        className,
      )}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
