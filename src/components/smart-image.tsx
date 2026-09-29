"use client";

import { useState } from "react";
import { Footprints, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
  icon?: "shoe" | "image";
  fill?: boolean;
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
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop();

  if (failed) {
    const Icon = icon === "shoe" ? Footprints : ImageIcon;
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent to-secondary text-center",
          fill && "absolute inset-0",
          className,
        )}
      >
        <Icon className="size-8 text-primary/40" strokeWidth={1.5} />
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
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn(
        fill && "absolute inset-0 h-full w-full object-cover",
        imgClassName,
        className,
      )}
      loading="lazy"
    />
  );
}
