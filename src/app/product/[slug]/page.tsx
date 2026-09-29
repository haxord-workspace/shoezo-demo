import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProduct, getRelatedProducts, products } from "@/lib/data/products";
import { getCategory } from "@/lib/data/categories";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductOptions } from "@/components/product/product-options";
import { ProductRail } from "@/components/home/product-rail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="pb-8">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-6">
        <nav className="mb-3 flex items-center gap-1 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="size-3" />
          <Link href={`/category/${product.category}`} className="hover:text-primary">
            {category?.name}
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            {product.isNew && (
              <span className="mb-2 inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                NEW
              </span>
            )}
            <h1 className="text-2xl font-extrabold text-foreground">
              {product.name}
            </h1>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-3.5 fill-primary text-primary" />
              <span className="font-semibold text-foreground">{product.rating}</span>
              <span>({product.reviewCount} reviews)</span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-foreground">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {Math.round(100 - (product.price / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-5 border-t border-border pt-5">
              <ProductOptions product={product} />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="size-4 text-primary" />
                <p className="text-[10px] text-muted-foreground">Free shipping</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="size-4 text-primary" />
                <p className="text-[10px] text-muted-foreground">7-day returns</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="size-4 text-primary" />
                <p className="text-[10px] text-muted-foreground">100% authentic</p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-2 text-sm font-semibold text-foreground">
                Highlights
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ProductRail
        title="You may also like"
        viewAllHref={`/category/${product.category}`}
        products={related}
      />
    </div>
  );
}
