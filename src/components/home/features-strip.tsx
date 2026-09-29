import { Wind, Move3d, Grip, Waves, ShieldHalf, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { icon: Wind, name: "AirCloud Sole", desc: "Featherlight cushioning" },
  { icon: Move3d, name: "FlexKnit Upper", desc: "Moves with your foot" },
  { icon: Grip, name: "GripTrack", desc: "Traction on any surface" },
  { icon: Waves, name: "Breath Mesh", desc: "Stays cool, all day" },
  { icon: ShieldHalf, name: "Heel Lock", desc: "Stability where it matters" },
  { icon: Leaf, name: "Eco Materials", desc: "Kinder to the planet" },
];

export function FeaturesStrip() {
  return (
    <section className="border-y border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Engineering" title="Technology Built Into Every Pair" align="center" />
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {features.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon className="size-5" />
              </span>
              <p className="mt-2 text-[11px] font-bold text-foreground">
                {name}
              </p>
              <p className="text-[10px] text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
