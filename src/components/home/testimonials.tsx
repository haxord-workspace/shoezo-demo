import { Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const reviews = [
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    rating: 5,
    text: "The AeroCloud Flow feels like running on clouds. Ordered a second pair within a week.",
  },
  {
    name: "Priya Nair",
    location: "Bengaluru",
    rating: 5,
    text: "Finally a lifestyle sneaker that looks premium and doesn't hurt after a full day out.",
  },
  {
    name: "Rohan Kapoor",
    location: "Delhi",
    rating: 4,
    text: "Court High gave me way more ankle confidence during pickup games. Great grip too.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Testimonials() {
  return (
    <section className="bg-secondary/40 px-4 py-8 md:mx-auto md:max-w-7xl md:px-6">
      <SectionHeading eyebrow="Reviews" title="Loved by 10,000+ Steppers" align="center" />
      <div className="grid gap-3 sm:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="rounded-3xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5"
                  fill={i < r.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-foreground">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                {initials(r.name)}
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  {r.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {r.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
