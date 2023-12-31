"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

interface ContextProps {
  cartCount: number;
  setCartCount: (_newCartCount: number) => void;
}

const defaultContextValue: ContextProps = {
  cartCount: 0,
  setCartCount: (_newCartCount: number) => {},
};

export const ShopContext = createContext<ContextProps>(defaultContextValue);

export function useShop() {
  return useContext(ShopContext);
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function ShopProvider({ children }: ProviderProps) {
  const [cartCount, setCartCount] = useState(99);

  const memoizedValue = useMemo(
    () => ({ cartCount, setCartCount }),
    [cartCount],
  );
  return (
    <ShopContext.Provider value={memoizedValue}>
      {children}
    </ShopContext.Provider>
  );
}
