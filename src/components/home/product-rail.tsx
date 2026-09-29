import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/section-heading";
import type { Product } from "@/lib/types";

export function ProductRail({
  eyebrow,
  title,
  viewAllHref,
  products,
}: {
  eyebrow?: string;
  title: string;
  viewAllHref: string;
  products: Product[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} viewAllHref={viewAllHref} />
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] md:grid md:grid-cols-4 md:gap-4 md:overflow-visible lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} className="w-[46%] shrink-0 sm:w-[30%] md:w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
