"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore, useCartSummary } from "@/lib/store";
import { getProduct } from "@/lib/data/products";
import { SmartImage } from "@/components/smart-image";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const { count, subtotal } = useCartSummary();

  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 149;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
          <ShoppingBag className="size-7" />
        </span>
        <h1 className="mt-4 text-lg font-bold text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Looks like you haven&apos;t added any sneakers yet.
        </p>
        <Link
          href="/"
          className="mt-5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-5 md:px-6">
      <h1 className="text-xl font-extrabold text-foreground">
        Your Cart ({count})
      </h1>

      <div className="mt-4 space-y-3">
        {items.map((line) => {
          const product = getProduct(line.productId);
          if (!product) return null;
          return (
            <div
              key={`${line.productId}-${line.size}-${line.color}`}
              className="flex gap-3 rounded-2xl border border-border bg-card p-3"
            >
              <Link
                href={`/product/${product.slug}`}
                className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-secondary"
              >
                <SmartImage src={product.images[0]} alt={product.name} label={product.name} />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-sm font-semibold text-foreground"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {line.color} · UK {line.size}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(line.productId, line.size, line.color)}
                    aria-label="Remove item"
                    className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-lg border border-border px-1.5 py-1">
                    <button
                      type="button"
                      onClick={() =>
                        setQty(line.productId, line.size, line.color, line.qty - 1)
                      }
                      aria-label="Decrease quantity"
                      className="flex size-6 items-center justify-center rounded-md hover:bg-secondary"
                    >
                      <Minus className="size-3" />
                    </button>
                    <span className="w-4 text-center text-xs font-semibold">
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setQty(line.productId, line.size, line.color, line.qty + 1)
                      }
                      aria-label="Increase quantity"
                      className="flex size-6 items-center justify-center rounded-md hover:bg-secondary"
                    >
                      <Plus className="size-3" />
                    </button>
                  </div>
                  <p className="text-sm font-bold text-foreground">
                    ₹{(product.price * line.qty).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 space-y-2 rounded-2xl border border-border bg-secondary/40 p-4 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span className="text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Shipping</span>
          <span className="text-foreground">
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>
        <div className="flex justify-between border-t border-border pt-2 text-base font-bold text-foreground">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-[var(--brand-ink-dark)]"
      >
        Proceed to Checkout
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
