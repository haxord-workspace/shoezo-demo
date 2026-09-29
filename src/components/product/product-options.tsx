"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function ProductOptions({ product }: { product: Product }) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  function handleAdd(goToCart = false) {
    if (size == null) {
      setSizeError(true);
      return;
    }
    addItem({ productId: product.slug, size, color }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    if (goToCart) router.push("/cart");
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-semibold text-foreground">
          Color — {color}
        </p>
        <div className="flex gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              aria-pressed={color === c.name}
              className={cn(
                "flex size-9 items-center justify-center rounded-full border-2 transition-colors",
                color === c.name ? "border-primary" : "border-border",
              )}
              style={{ backgroundColor: c.hex }}
            >
              {color === c.name && (
                <Check
                  className="size-4"
                  color={c.hex === "#f5f5f0" ? "#111318" : "#fff"}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <p className="text-sm font-semibold text-foreground">
            Size (UK) {size ? `— ${size}` : ""}
          </p>
          <span className="text-xs text-primary">Size guide</span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setSize(s);
                setSizeError(false);
              }}
              aria-pressed={size === s}
              className={cn(
                "rounded-xl border py-2 text-sm font-semibold transition-colors",
                size === s
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        {sizeError && (
          <p className="mt-1.5 text-xs font-medium text-destructive">
            Please select a size
          </p>
        )}
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-foreground">Quantity</p>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-2 py-1.5 w-fit">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex size-7 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
          >
            <Minus className="size-3.5" />
          </button>
          <span className="w-5 text-center text-sm font-semibold">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            aria-label="Increase quantity"
            className="flex size-7 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
          >
            <Plus className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={() => handleAdd(false)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent"
        >
          <ShoppingBag className="size-4" />
          {added ? "Added!" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={() => handleAdd(true)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-[var(--brand-ink-dark)]"
        >
          <Zap className="size-4" />
          Buy Now
        </button>
      </div>
    </div>
  );
}
