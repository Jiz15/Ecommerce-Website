"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on client mount
  useEffect(() => {
    const savedCart = localStorage.getItem("veson_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error loading cart from localStorage", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem("veson_cart", JSON.stringify(items));
  };

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    const existingIndex = cartItems.findIndex((item) => item.id === newItem.id);

    if (existingIndex > -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingIndex].quantity += 1;
      saveCart(updatedItems);
    } else {
      saveCart([...cartItems, { ...newItem, quantity: 1 }]);
    }
    
    // Automatically open the cart drawer when item is added
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    saveCart(updatedItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
