"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen, removeFromCart, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        {/* Panel */}
        <div className="w-screen max-w-md bg-white dark:bg-background-dark text-black dark:text-white flex flex-col shadow-2xl transition-all-custom">
          {/* Header */}
          <div className="px-6 py-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="material-icons-outlined">shopping_bag</span>
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-black dark:hover:text-white flex items-center"
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <span className="material-icons-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">
                  shopping_cart_checkout
                </span>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-2">
                  Your cart is empty
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-[10px] font-bold uppercase tracking-widest text-primary underline underline-offset-4 decoration-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-gray-50 dark:border-gray-900"
                  >
                    <div className="w-20 h-24 rounded-lg bg-veson-gray dark:bg-veson-dark overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-tight line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="font-display text-sm mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold">
                        <span>Quantity: {item.quantity}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:underline tracking-widest uppercase text-[9px]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal */}
          {cartItems.length > 0 && (
            <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-veson-dark/50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Subtotal
                </span>
                <span className="font-display text-xl">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 dark:border-gray-700 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Clear Cart
                </button>
                <button className="w-full bg-primary text-black py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-102 transition-transform shadow-lg">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
