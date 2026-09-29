import {
  User,
  Package,
  MapPin,
  CreditCard,
  Bell,
  Ruler,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons";

const menu = [
  { icon: Package, label: "My Orders", sub: "Track, return or buy again" },
  { icon: MapPin, label: "Saved Addresses", sub: "Manage delivery addresses" },
  { icon: CreditCard, label: "Payment Methods", sub: "Cards and UPI" },
  { icon: Ruler, label: "Size Guide", sub: "Find your perfect fit" },
  { icon: Bell, label: "Notifications", sub: "Drops, offers and order updates" },
  { icon: HelpCircle, label: "Help & Support", sub: "FAQs and contact us" },
];

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 md:px-6">
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
          <User className="size-6" />
        </span>
        <div>
          <p className="text-base font-bold text-foreground">Guest Stepper</p>
          <p className="text-sm text-muted-foreground">
            Sign in to sync your orders &amp; wishlist
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-[var(--brand-ink-dark)]"
      >
        Sign In / Create Account
      </button>

      <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {menu.map(({ icon: Icon, label, sub }) => (
          <button
            key={label}
            type="button"
            className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-secondary"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
              <Icon className="size-4" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-foreground">
                {label}
              </span>
              <span className="block text-xs text-muted-foreground">{sub}</span>
            </span>
            <ChevronRight className="size-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <a
        href="https://www.instagram.com/shoezo.in"
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-border bg-card py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <InstagramIcon className="size-4" />
        Follow @shoezo.in
      </a>

      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
      >
        <LogOut className="size-4" />
        Sign Out
      </button>
    </div>
  );
}
