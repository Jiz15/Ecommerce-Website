"use client";

import React from "react";

export default function Ticker() {
  return (
    <div className="ticker-wrap bg-black dark:bg-white text-white dark:text-black py-6 mt-12 overflow-hidden transition-colors duration-300">
      <div className="ticker flex gap-12 text-5xl md:text-6xl font-display uppercase items-center font-condensed">
        <span>Elevate Your Wardrobe With Our Unique Designs</span>
        <span className="material-icons-outlined text-4xl text-primary">star</span>
        <span>Elevate Your Wardrobe With Our Unique Designs</span>
        <span className="material-icons-outlined text-4xl text-primary">star</span>
        <span>Elevate Your Wardrobe With Our Unique Designs</span>
        <span className="material-icons-outlined text-4xl text-primary">star</span>
        <span>Elevate Your Wardrobe With Our Unique Designs</span>
        <span className="material-icons-outlined text-4xl text-primary">star</span>
      </div>
    </div>
  );
}
