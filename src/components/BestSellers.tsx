"use client";

import React, { useRef } from "react";
import { useCart } from "../context/CartContext";

const BEST_SELLERS = [
  {
    id: "b1",
    name: "Denim Sherpa Jacket",
    price: 115.0,
    rating: 216,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "b2",
    name: "Oversized Street Hoodie",
    price: 85.0,
    rating: 120,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "b3",
    name: "Crisp Linen Vacation Shirt",
    price: 75.0,
    rating: 96,
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "b4",
    name: "Sleek Silk Vacation Shirt",
    price: 95.0,
    rating: 145,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "b5",
    name: "Signature Urban Trench",
    price: 245.0,
    rating: 188,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
  },
];

export default function BestSellers() {
  const { addToCart } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollOffset = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-8 py-16 transition-colors duration-300">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-display uppercase leading-none font-condensed">
            Best Seller Our Veson
          </h2>
          <span className="text-2xl font-display text-gray-300 dark:text-gray-700 font-condensed">/22</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 cursor-pointer transition-all duration-300"
          >
            <span className="material-icons-outlined text-sm">west</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 cursor-pointer transition-all duration-300"
          >
            <span className="material-icons-outlined text-sm">east</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 hide-scrollbar pb-8 snap-x snap-mandatory"
      >
        {BEST_SELLERS.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] flex-shrink-0 group snap-start"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-veson-gray dark:bg-veson-dark mb-4">
              <img
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={product.image}
              />
              <button
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                className="absolute bottom-4 right-4 bg-white/95 dark:bg-background-dark/95 text-black dark:text-white backdrop-blur-sm p-3.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all-custom cursor-pointer hover:scale-110"
              >
                <span className="material-icons-outlined text-sm">shopping_bag</span>
              </button>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-tight mb-1 text-gray-800 dark:text-gray-200">
              {product.name}
            </h4>
            <div className="flex justify-between items-center">
              <p className="font-display text-xl font-condensed">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-1">
                <span className="material-icons-outlined text-primary text-[10px]">star</span>
                <span className="text-[10px] text-gray-400 font-bold">({product.rating})</span>
              </div>
            </div>
          </div>
        ))}

        {/* Dash border See All button */}
        <div className="min-w-[280px] flex-shrink-0 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl p-8 snap-start">
          <button className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-veson-gray dark:bg-veson-dark flex items-center justify-center group-hover:bg-primary transition-all duration-300">
              <span className="material-icons-outlined text-black dark:text-white group-hover:text-black">
                east
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              See All Best Sellers
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
