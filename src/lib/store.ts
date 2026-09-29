"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "@/lib/data/products";

export type CartLine = {
  productId: string;
  size: number;
  color: string;
  qty: number;
};

type CartState = {
  items: CartLine[];
  addItem: (line: Omit<CartLine, "qty">, qty?: number) => void;
  removeItem: (productId: string, size: number, color: string) => void;
  setQty: (productId: string, size: number, color: string, qty: number) => void;
  clear: () => void;
};

function sameLine(a: CartLine, b: Omit<CartLine, "qty">) {
  return a.productId === b.productId && a.size === b.size && a.color === b.color;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (line, qty = 1) =>
        set((state) => {
          const existing = state.items.find((i) => sameLine(i, line));
          if (existing) {
            return {
              items: state.items.map((i) =>
                sameLine(i, line) ? { ...i, qty: i.qty + qty } : i,
              ),
            };
          }
          return { items: [...state.items, { ...line, qty }] };
        }),
      removeItem: (productId, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !sameLine(i, { productId, size, color }),
          ),
        })),
      setQty: (productId, size, color, qty) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              sameLine(i, { productId, size, color }) ? { ...i, qty } : i,
            )
            .filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
    }),
    // Rehydrated manually post-mount (see <StoreHydration/>) so the first
    // client render matches the server's empty-state HTML instead of racing
    // ahead of it — avoids a hydration mismatch on every persisted read.
    { name: "shoezo-cart", skipHydration: true },
  ),
);

export function useCartSummary() {
  const items = useCartStore((s) => s.items);
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => {
    const product = getProduct(i.productId);
    return sum + (product?.price ?? 0) * i.qty;
  }, 0);
  return { count, subtotal };
}

type WishlistState = {
  productIds: string[];
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      productIds: [],
      toggle: (productId) =>
        set((state) => ({
          productIds: state.productIds.includes(productId)
            ? state.productIds.filter((id) => id !== productId)
            : [...state.productIds, productId],
        })),
      has: (productId) => get().productIds.includes(productId),
    }),
    { name: "shoezo-wishlist", skipHydration: true },
  ),
);
