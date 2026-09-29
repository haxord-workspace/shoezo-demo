"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, ShoppingBag, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartSummary, useWishlistStore } from "@/lib/store";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/category/running", label: "Shop", icon: LayoutGrid },
  { href: "/cart", label: "Cart", icon: ShoppingBag },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const { count } = useCartSummary();
  const wishlistCount = useWishlistStore((s) => s.productIds.length);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Primary"
    >
      <ul className="flex items-stretch justify-between px-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          const badge =
            href === "/cart" ? count : href === "/wishlist" ? wishlistCount : 0;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={cn(
                  "flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <span className="relative">
                  <Icon
                    className="size-5"
                    strokeWidth={active ? 2.4 : 2}
                    fill={active && href === "/wishlist" ? "currentColor" : "none"}
                  />
                  {badge > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-semibold text-primary-foreground">
                      {badge > 9 ? "9+" : badge}
                    </span>
                  )}
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
