import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SmartImage } from "@/components/smart-image";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <div className="pb-8">
      <div className="relative h-36 overflow-hidden sm:h-48">
        <SmartImage src={category.cover} alt={category.name} label={category.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-[#0a0a0a]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 py-4 md:px-6">
          <h1 className="text-2xl font-extrabold text-white">{category.name}</h1>
          <p className="text-sm text-white/80">{category.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={
                c.slug === slug
                  ? "rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground"
                  : "rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground hover:border-primary hover:text-primary"
              }
            >
              {c.name}
            </Link>
          ))}
        </div>

        <p className="mb-3 text-xs text-muted-foreground">
          {items.length} {items.length === 1 ? "product" : "products"}
        </p>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
            New styles landing soon in {category.name}.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
