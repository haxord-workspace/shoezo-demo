import Link from "next/link";
import { Search, LayoutGrid } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { SmartImage } from "@/components/smart-image";
import { SectionHeading } from "@/components/section-heading";

export function QuickSearchBar() {
  return (
    <div className="px-4 py-4 md:mx-auto md:max-w-7xl md:px-6">
      <Link
        href="/search"
        className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground shadow-sm transition-shadow hover:shadow-md"
      >
        <Search className="size-4" />
        Search by model, brand or category…
      </Link>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground"
          >
            {c.name}
          </Link>
        ))}
        <Link
          href="/search"
          className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground"
        >
          <LayoutGrid className="size-3.5" />
          All
        </Link>
      </div>
    </div>
  );
}

export function CategoryGrid() {
  return (
    <section className="px-4 py-6 md:mx-auto md:max-w-7xl md:px-6">
      <SectionHeading
        eyebrow="Collections"
        title="Shop by Category"
        viewAllHref="/search"
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <SmartImage
              src={c.cover}
              alt={c.name}
              label={c.name}
              imgClassName="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity group-hover:from-black/90" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-sm font-bold text-white">{c.name}</p>
              <p className="text-[11px] text-white/75">{c.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
