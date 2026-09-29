import { Percent, Zap, Gift, Sparkles } from "lucide-react";
import { SmartImage } from "@/components/smart-image";

const perks = [
  { icon: Percent, label: "5% cashback every order" },
  { icon: Zap, label: "Early access to new drops" },
  { icon: Sparkles, label: "Member-only discounts" },
  { icon: Gift, label: "Birthday surprises" },
];

export function PromoBanner() {
  return (
    <section className="px-4 py-8 md:mx-auto md:max-w-7xl md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 opacity-25">
          <SmartImage
            src="/images/promo/club-banner.jpg"
            alt="Shoezo Club"
            label="Club banner background"
            icon="image"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary">
              JOIN THE CLUB
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">Shoezo Stepz Club</h2>
            <p className="mt-1 max-w-sm text-sm text-white/70">
              Free to join — unlock rewards, early drops and birthday perks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:w-auto">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-1.5">
                <Icon className="size-4 text-primary" />
                <p className="text-[11px] text-white/80">{label}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-[var(--brand-ink-dark)]"
          >
            Become a member
          </button>
        </div>
      </div>
    </section>
  );
}
