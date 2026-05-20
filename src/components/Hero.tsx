"use client";

import React from "react";

export default function Hero() {
  const handleScrollToShop = (e: React.MouseEvent) => {
    e.preventDefault();
    const shopSection = document.getElementById("shop-section");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-8 mb-12">
      <div className="relative rounded-[3rem] overflow-hidden min-h-[600px] flex items-center shadow-lg border border-gray-100/10">
        <img
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="/veson_hero_banner.png"
        />
        <div className="relative z-10 p-12 md:p-20 max-w-2xl text-white">
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-6 drop-shadow-2xl font-condensed">
            Fashion for All,<br />Every Day
          </h1>
          <p className="text-gray-200 text-sm max-w-sm mb-8 leading-relaxed font-medium">
            Discover your personal style and make a statement with every outfit. Shop with us to elevate your wardrobe and bring your fashion game to the next level.
          </p>
          <button
            onClick={handleScrollToShop}
            className="bg-primary text-black px-8 py-4 rounded-full flex items-center gap-4 hover:scale-105 transition-all shadow-xl hover:shadow-primary/20 cursor-pointer"
          >
            <span className="font-bold text-xs uppercase tracking-widest">Shop Now</span>
            <span className="material-icons-outlined text-sm">north_east</span>
          </button>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between text-[11px] font-medium tracking-tight border-t border-gray-100 dark:border-gray-900 pt-6 transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-400 uppercase tracking-widest max-w-xl">
          Browse through our carefully curated collection of high-quality clothing and accessories — featuring the latest trends and styles{" "}
          <span className="material-icons-outlined text-xs align-middle text-primary">star</span>
        </p>
      </div>
    </section>
  );
}
