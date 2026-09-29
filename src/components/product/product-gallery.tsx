"use client";

import { useState } from "react";
import { SmartImage } from "@/components/smart-image";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <SmartImage src={images[active]} alt={name} label={name} />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl border-2 bg-secondary transition-colors",
                active === i ? "border-primary" : "border-transparent",
              )}
            >
              <SmartImage src={src} alt={`${name} ${i + 1}`} label={`View ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
