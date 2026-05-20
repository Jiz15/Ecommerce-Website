"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "Jackets", "Coats", "Shoes", "Accessories"];

const PRODUCTS = [
  {
    id: "w1",
    name: "Jacket Black Mamba",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    category: "Jackets",
  },
  {
    id: "w2",
    name: "Veson Tech Parka",
    price: 145.0,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600&auto=format&fit=crop",
    category: "Jackets",
  },
  {
    id: "w3",
    name: "Atelier Camel Overcoat",
    price: 195.0,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    category: "Coats",
  },
  {
    id: "w4",
    name: "Rinja Woolen Coat",
    price: 180.0,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
    category: "Coats",
  },
  {
    id: "w5",
    name: "Urban Chelsea Boots",
    price: 160.0,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=600&auto=format&fit=crop",
    category: "Shoes",
  },
  {
    id: "w6",
    name: "Classic Suede Sneakers",
    price: 110.0,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
    category: "Shoes",
  },
  {
    id: "w7",
    name: "Atelier Premium Pack",
    price: 85.0,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    category: "Accessories",
  },
  {
    id: "w8",
    name: "Veson Saffiano Cardholder",
    price: 45.0,
    image: "https://images.unsplash.com/photo-1627124224423-82def543633f?q=80&w=600&auto=format&fit=crop",
    category: "Accessories",
  },
];

export default function WinterSale() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="shop-section" className="px-8 py-16 transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display uppercase italic mb-6 font-condensed">
            Winter Sale 2023
          </h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all-custom cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-102"
                    : "border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-black dark:hover:text-white hover:bg-veson-gray dark:hover:bg-veson-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-veson-gray dark:bg-veson-dark hover:scale-103 transition-transform rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-transparent dark:border-gray-800">
            <img
              alt="Thumb"
              className="w-5 h-5 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQDmsWjQNolwVeYjtpTq_JVYDsoQTnJGEQ6iGEA-XHb1oXmgrTc5qC2kbV1kDNZ3kKS1uuTabX0D9D1pf3FvzEUODAQFjRdHGT62BsaVHWIgBT40xKJ8TcC583hrrcKmWocMG9l3zfeetQgJoMOh0IRdk_e9v05LSKYcshhk_PmX1F_frqJFvv_HWIkpWBUGCi_f7HvZ1e7ChmyTrulr7HKQNgnGrEI8UHOrl20hHJ-zq5baS5Fcb7PFN72c1XEGHkEEs2Prybazyk"
            />
            All Collection
          </button>
          <button className="px-4 py-2 border border-gray-200 dark:border-gray-800 hover:scale-103 transition-transform rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
            <img
              alt="Thumb"
              className="w-5 h-5 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPvaYx1LSnKcRgj-LVgFu6x2_imBEEIW5U5wqIU-qivSWhJLrRbl--upVcRGcAk0snyaBPGm1J-LzKFY6eeQA0CVHKIPpXcIFhmtIaxppcwsSkRI0wNPqRPwl8ySaJyGfpMPx-hjxjPtoFUsfOE9a-f4cst09CSV_fWBQHLs1kSzuQXyObLMVKLJYLrbhA5NUXqPC8tGidO-qkQSPoITKdbXpg8qdOv6iT4wPELKUWgjgWFeFg3wFwyJTbK0gAbqDAHODrd9N4evlR"
            />
            New Arrivals
          </button>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card group relative flex flex-col justify-between">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-veson-gray dark:bg-veson-dark relative mb-4">
              <img
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                src={product.image}
              />
              {/* Card Hover Action Drawer */}
              <div className="hover-overlay absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-[10px] uppercase mb-2 hover:scale-105 transition-transform cursor-pointer shadow-lg"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-white font-bold text-[10px] uppercase underline cursor-pointer"
                >
                  Size Guide
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start px-1 mt-auto">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-tight text-gray-800 dark:text-gray-200">
                  {product.name}
                </h3>
                <p className="font-display text-lg font-condensed mt-1">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => setSelectedProduct(product)}
                className="border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-colors"
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer">
          See More
        </button>
      </div>

      {/* Details/Size Guide Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-veson-dark rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 dark:border-gray-850">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-6 top-6 text-gray-400 hover:text-black dark:hover:text-white"
            >
              <span className="material-icons-outlined">close</span>
            </button>
            <h3 className="font-display text-2xl font-condensed mb-2">{selectedProduct.name}</h3>
            <p className="text-xs uppercase font-bold tracking-widest text-primary mb-6">
              ${selectedProduct.price.toFixed(2)}
            </p>

            <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
              Standard Sizing
            </h4>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {["S", "M", "L", "XL"].map((sz) => (
                <button
                  key={sz}
                  className="py-3.5 border border-gray-250 dark:border-gray-800 rounded-xl text-xs font-bold hover:border-black dark:hover:border-white hover:bg-veson-gray dark:hover:bg-background-dark transition-all"
                >
                  {sz}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                addToCart({
                  id: selectedProduct.id,
                  name: selectedProduct.name,
                  price: selectedProduct.price,
                  image: selectedProduct.image,
                });
                setSelectedProduct(null);
              }}
              className="w-full bg-primary text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10"
            >
              Confirm and Add
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
