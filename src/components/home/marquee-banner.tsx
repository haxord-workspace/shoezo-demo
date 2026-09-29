import { Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Truck, label: "Free shipping over ₹1,999" },
  { icon: Sparkles, label: "New drop: AeroCloud Flow" },
  { icon: RotateCcw, label: "7-day easy returns" },
  { icon: ShieldCheck, label: "100% authentic sneakers" },
];

export function MarqueeBanner() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-2.5">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {[...loop, ...loop].map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 text-xs font-semibold tracking-wide text-background"
          >
            <Icon className="size-3.5" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
