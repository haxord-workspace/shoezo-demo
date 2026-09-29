import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export function SaleBanner() {
  return (
    <section className="px-4 py-6 md:mx-auto md:max-w-7xl md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left md:px-10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-background/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <Tag className="size-3" />
              Limited time
            </div>
            <h2 className="mt-3 text-3xl font-extrabold leading-none sm:text-4xl">
              Up to 30% Off
            </h2>
            <p className="mt-2 text-sm text-background/70">
              On select running &amp; lifestyle styles. Ends soon.
            </p>
          </div>
          <Link
            href="/search"
            className="flex shrink-0 items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Shop the Sale
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
