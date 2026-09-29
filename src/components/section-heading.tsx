import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  viewAllHref,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mb-5 flex flex-col items-center text-center"
          : "mb-5 flex items-end justify-between gap-4"
      }
    >
      <div>
        {eyebrow && (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {viewAllHref && align === "left" && (
        <Link
          href={viewAllHref}
          className="flex shrink-0 items-center gap-1 text-xs font-semibold text-foreground transition-colors hover:text-muted-foreground"
        >
          View all
          <ArrowRight className="size-3.5" />
        </Link>
      )}
    </div>
  );
}
