import { SmartImage } from "@/components/smart-image";
import { InstagramIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const tiles = [
  "/images/promo/instagram-1.jpg",
  "/images/promo/instagram-2.jpg",
  "/images/promo/instagram-3.jpg",
  "/images/promo/instagram-4.jpg",
];

export function InstagramBanner() {
  return (
    <section className="px-4 py-8 md:mx-auto md:max-w-7xl md:px-6">
      <SectionHeading
        eyebrow="Community"
        title="Tag @shoezo.in to Get Featured"
        align="center"
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {tiles.map((src, i) => (
          <a
            key={src}
            href="https://www.instagram.com/shoezo.in"
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary"
          >
            <SmartImage
              src={src}
              alt={`Shoezo community photo ${i + 1}`}
              label="Instagram photo"
              icon="image"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <InstagramIcon className="size-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://www.instagram.com/shoezo.in"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-foreground"
      >
        <InstagramIcon className="size-3.5" />
        Follow @shoezo.in
      </a>
    </section>
  );
}
