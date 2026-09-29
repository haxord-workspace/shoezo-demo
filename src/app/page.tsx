import { HeroSection } from "@/components/home/hero-section";
import { MarqueeBanner } from "@/components/home/marquee-banner";
import { QuickSearchBar, CategoryGrid } from "@/components/home/category-section";
import { SplitBanner } from "@/components/home/split-banner";
import { BestSellers } from "@/components/home/best-sellers";
import { SaleBanner } from "@/components/home/sale-banner";
import { FeaturesStrip } from "@/components/home/features-strip";
import { PromoBanner } from "@/components/home/promo-banner";
import { ProductRail } from "@/components/home/product-rail";
import { InstagramBanner } from "@/components/home/instagram-banner";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";
import { Reveal } from "@/components/reveal";
import { getNewArrivals, products } from "@/lib/data/products";

export default function Home() {
  const newArrivals = getNewArrivals();
  const trending = products.filter((p) => p.isTrending);

  return (
    <div>
      <HeroSection />
      <MarqueeBanner />
      <QuickSearchBar />

      <Reveal>
        <SplitBanner />
      </Reveal>

      <Reveal>
        <BestSellers />
      </Reveal>

      <Reveal>
        <CategoryGrid />
      </Reveal>

      <Reveal>
        <SaleBanner />
      </Reveal>

      <Reveal>
        <ProductRail
          eyebrow="Just dropped"
          title="New Arrivals"
          viewAllHref="/search"
          products={newArrivals}
        />
      </Reveal>

      <Reveal>
        <FeaturesStrip />
      </Reveal>

      <Reveal>
        <ProductRail
          eyebrow="Right now"
          title="Trending Now"
          viewAllHref="/search"
          products={trending}
        />
      </Reveal>

      <Reveal>
        <PromoBanner />
      </Reveal>

      <Reveal>
        <InstagramBanner />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <Newsletter />
      </Reveal>
    </div>
  );
}
