// context/OrderModalContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type OrderModalContextType = {
  isOpen: boolean;
  product: string | null;
  openModal: (product?: string) => void;
  closeModal: () => void;
};

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<string | null>(null);

  const openModal = (product?: string) => {
    if (product) setProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct(null);
  };

  return (
    <OrderModalContext.Provider value={{ isOpen, product, openModal, closeModal }}>
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error("useOrderModal debe usarse dentro de OrderModalProvider");
  return ctx;
}
