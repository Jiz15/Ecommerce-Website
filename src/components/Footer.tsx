"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="px-8 pb-12 pt-16 border-t border-gray-150 dark:border-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-icons-outlined text-primary text-2xl">star_outline</span>
            <span className="font-display text-2xl tracking-widest uppercase font-condensed">VESON</span>
          </div>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
            Crafting premium designs and essential garments for modern wardrobes. Rooted in trustworthy craftsmanship, built for high-end aesthetics.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Navigation</h4>
          <ul className="space-y-4 text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#about">About Us</a></li>
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#collection">Collection</a></li>
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Collection</h4>
          <ul className="space-y-4 text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#shop-section">New Arrivals</a></li>
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#shop-section">Men Collection</a></li>
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#shop-section">Women Collection</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Our Company</h4>
          <ul className="space-y-4 text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#contact">Store Locator</a></li>
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#about">About Us</a></li>
            <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#careers">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-150 dark:border-gray-900 pt-8 gap-6 transition-colors duration-300">
        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Copyright @ 2026 Veson, All rights reserved</p>
        <div className="flex flex-wrap justify-center gap-10 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
          <a className="hover:text-black dark:hover:text-white transition-colors" href="#customer-service">Customer Service</a>
          <a className="hover:text-black dark:hover:text-white transition-colors" href="#terms">Terms &amp; Conditions</a>
          <a className="hover:text-black dark:hover:text-white transition-colors" href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
