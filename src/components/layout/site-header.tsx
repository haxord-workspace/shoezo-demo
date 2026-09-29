"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, User } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { useCartSummary, useWishlistStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function CountBadge({ value }: { value: number }) {
  if (value <= 0) return null;
  return (
    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-semibold text-background ring-2 ring-background">
      {value > 9 ? "9+" : value}
    </span>
  );
}

export function SiteHeader() {
  const { count } = useCartSummary();
  const wishlistCount = useWishlistStore((s) => s.productIds.length);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4",
        // Only the homepage has a hero image to show through, so only there
        // does the header float over the page instead of pushing it down.
        isHome ? "fixed" : "sticky",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl rounded-2xl border transition-all duration-300",
          scrolled
            ? "border-border bg-background/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none",
        )}
      >
        {/* Mobile compact bar */}
        <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/brand/shoezo-logo.png"
              alt="Shoezo"
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
            <span className="text-base font-extrabold tracking-tight text-foreground">
              SHOEZO
            </span>
          </Link>
          <div className="flex items-center gap-0.5">
            <Link
              href="/search"
              aria-label="Search"
              className="rounded-full p-2 text-foreground transition-colors active:bg-secondary"
            >
              <Search className="size-5" />
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative rounded-full p-2 text-foreground transition-colors active:bg-secondary"
            >
              <ShoppingBag className="size-5" />
              <CountBadge value={count} />
            </Link>
          </div>
        </div>

        {/* Desktop full header */}
        <div className="hidden w-full items-center gap-5 px-5 py-2.5 md:flex">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/images/brand/shoezo-logo.png"
              alt="Shoezo"
              width={38}
              height={38}
              className="rounded-full"
              priority
            />
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight text-foreground">
                SHOEZO
              </p>
              <p className="text-[9px] font-medium tracking-[0.2em] text-muted-foreground">
                UPDATE YOUR STEPZ
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-1">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="group relative rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              >
                {c.name}
                <span className="absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-foreground transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <Link
            href="/search"
            className="ml-auto flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            <Search className="size-4" />
            Search sneakers…
          </Link>

          <div className="flex items-center gap-0.5">
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative rounded-full p-2.5 text-foreground transition-colors hover:bg-secondary"
            >
              <Heart className="size-5" />
              <CountBadge value={wishlistCount} />
            </Link>
            <Link
              href="/account"
              aria-label="Account"
              className="rounded-full p-2.5 text-foreground transition-colors hover:bg-secondary"
            >
              <User className="size-5" />
            </Link>
            <Link
              href="/cart"
              className="relative ml-1 flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="size-4" />
              Cart
              {count > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-background px-1 text-[10px] font-bold text-foreground">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
