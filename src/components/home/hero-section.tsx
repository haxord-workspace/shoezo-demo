import { HeroBanner } from "@/components/home/hero-banner";
import { getHeroBannerImages } from "@/lib/hero-images";

export function HeroSection() {
  const images = getHeroBannerImages();
  return <HeroBanner images={images} />;
}
