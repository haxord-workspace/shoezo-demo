import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/smart-image";

const panels = [
  {
    title: "New Arrivals",
    subtitle: "Fresh off the last drop",
    cta: "Shop New In",
    href: "/search",
    image: "/images/promo/banner-new-arrivals.jpg",
  },
  {
    title: "Best Sellers",
    subtitle: "The pairs everyone's wearing",
    cta: "Shop Best Sellers",
    href: "/search",
    image: "/images/promo/banner-best-sellers.jpg",
  },
];

export function SplitBanner() {
  return (
    <section className="px-4 py-6 md:mx-auto md:max-w-7xl md:px-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {panels.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl bg-secondary sm:aspect-[5/4]"
          >
            <SmartImage
              src={p.image}
              alt={p.title}
              label={p.title}
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="relative z-10 p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                {p.subtitle}
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                {p.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-foreground transition-transform group-hover:translate-x-1">
                {p.cta}
                <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
