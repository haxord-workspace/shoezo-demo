"use client";

import { useEffect } from "react";
import { useCartStore, useWishlistStore } from "@/lib/store";

/**
 * Both persisted stores use `skipHydration: true` so their first client
 * render matches the server's empty-state HTML. This triggers the actual
 * localStorage read right after mount, once — renders nothing itself.
 */
export function StoreHydration() {
  useEffect(() => {
    useCartStore.persist.rehydrate();
    useWishlistStore.persist.rehydrate();
  }, []);

  return null;
}
