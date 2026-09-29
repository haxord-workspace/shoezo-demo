import Link from "next/link";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { InstagramIcon } from "@/components/icons";
import { withBasePath } from "@/lib/base-path";

const trustBadges = [
  { icon: Truck, label: "Free shipping", sub: "On orders above ₹1,999" },
  { icon: RotateCcw, label: "Easy returns", sub: "7-day return window" },
  { icon: ShieldCheck, label: "100% authentic", sub: "Genuine products only" },
  { icon: Headphones, label: "Support 24/7", sub: "We're always here" },
];

export function SiteFooter() {
  return (
    <footer className="mb-14 border-t border-border bg-secondary/40 md:mb-0">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 md:px-6">
        {trustBadges.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 border-t border-border px-5 py-10 md:grid-cols-5 md:px-6">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={withBasePath("/images/brand/shoezo-logo.png")}
              alt="Shoezo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              SHOEZO
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Premium sneakers for every stride — running, basketball, training
            and everyday lifestyle. Update your stepz with Shoezo.
          </p>
          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <a
              href="https://www.instagram.com/shoezo.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 transition-colors hover:bg-accent hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Help</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/cart" className="transition-colors hover:text-primary">Track order</Link></li>
            <li><Link href="/account" className="transition-colors hover:text-primary">Shipping &amp; returns</Link></li>
            <li><Link href="/account" className="transition-colors hover:text-primary">Size guide</Link></li>
            <li><Link href="/account" className="transition-colors hover:text-primary">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><span className="transition-colors">About Shoezo</span></li>
            <li><span className="transition-colors">Careers</span></li>
            <li>
              <a
                href="https://www.instagram.com/shoezo.in"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-4 text-center text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} Shoezo. All rights reserved. Update Your
        Stepz.
      </div>
    </footer>
  );
}
