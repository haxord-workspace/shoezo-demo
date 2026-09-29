"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SmartImage } from "@/components/smart-image";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 40;

export function HeroBanner({ images }: { images: string[] }) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, paused, index]);

  if (count === 0) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-secondary px-6 text-center text-sm text-muted-foreground sm:aspect-[21/9]">
        Add banner photos to <code className="mx-1">public/images/hero</code>{" "}
        to show them here.
      </div>
    );
  }

  return (
    <section
      className="relative w-full touch-pan-y overflow-hidden bg-secondary outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Shoezo banners"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goTo(index - 1);
        if (e.key === "ArrowRight") goTo(index + 1);
      }}
      onPointerDown={(e) => {
        dragX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (dragX.current == null) return;
        const delta = e.clientX - dragX.current;
        dragX.current = null;
        if (delta > SWIPE_THRESHOLD) goTo(index - 1);
        else if (delta < -SWIPE_THRESHOLD) goTo(index + 1);
      }}
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <SmartImage
                src={src}
                alt={`Shoezo banner ${i + 1}`}
                label="Hero banner"
                icon="image"
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous banner"
            className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-transform hover:scale-105"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next banner"
            className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-transform hover:scale-105"
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to banner ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/60",
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
