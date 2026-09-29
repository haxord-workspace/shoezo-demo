"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-4 py-10 md:mx-auto md:max-w-3xl md:px-6">
      <div className="rounded-3xl border border-border bg-card p-6 text-center">
        <h2 className="text-lg font-bold text-foreground">
          Get Early Access to New Drops
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          No spam — just restocks, launches and Shoezo Club offers.
        </p>
        {submitted ? (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
            <CheckCircle2 className="size-4" />
            You&apos;re on the list!
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubmitted(true);
            }}
            className="mx-auto mt-4 flex max-w-sm items-center gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none ring-ring focus-visible:ring-2"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-[var(--brand-ink-dark)]"
            >
              <Send className="size-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
