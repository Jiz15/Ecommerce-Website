"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ onOpenCustomizer }: { onOpenCustomizer?: () => void } = {}) {
  const { cartCount, setIsCartOpen } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync theme with HTML class list on mount
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-6 sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-45 border-b border-gray-50/50 dark:border-gray-900/50 transition-colors duration-300">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-display flex items-center gap-1 font-condensed">
            <span className="material-icons-outlined text-black dark:text-white">star_outline</span>
            <span>VESON</span>
          </div>
          <div className="hidden md:flex gap-6 text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#about">About Us</a>
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#collection">Collection</a>
            <a className="hover:text-black dark:hover:text-white transition-colors" href="#contact">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-icons-outlined text-sm">search</span>
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Light/Dark Toggle Switch */}
          <button
            onClick={toggleTheme}
            className="w-11 h-6 bg-gray-100 dark:bg-white/10 rounded-full relative p-1 transition-colors duration-300 cursor-pointer flex items-center focus:outline-none border border-gray-200/20"
            title="Toggle Theme"
          >
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ${
                darkMode ? "translate-x-5 bg-primary text-black" : "translate-x-0 bg-black text-white"
              }`}
            >
              <span className="material-icons-outlined text-[10px] select-none">
                {darkMode ? "dark_mode" : "light_mode"}
              </span>
            </div>
          </button>

          {/* Layout Settings Button */}
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="hover:text-black dark:hover:text-white transition-colors relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
              title="Customize Layout"
            >
              <span className="material-icons-outlined text-sm">tune</span>
            </button>
          )}

          {/* Cart Icon-Only Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="hover:text-black dark:hover:text-white transition-colors relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
            title="Shopping Cart"
          >
            <span className="material-icons-outlined text-sm">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-black text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center border border-white dark:border-background-dark shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center text-black dark:text-white"
          >
            <span className="material-icons-outlined text-lg">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[76px] bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 z-40 transition-all duration-300">
          <div className="flex flex-col px-8 py-6 space-y-4 text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white transition-colors"
              href="#about"
            >
              About Us
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white transition-colors"
              href="#collection"
            >
              Collection
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-black dark:hover:text-white transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="relative bg-white dark:bg-veson-dark rounded-3xl p-8 max-w-lg w-full shadow-2xl z-10 border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Search Catalog
              </h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-black dark:hover:text-white"
              >
                <span className="material-icons-outlined text-sm">close</span>
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jackets, shirts, custom designs..."
                className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-full py-4 px-6 text-xs text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                autoFocus
              />
              <span className="material-icons-outlined absolute right-6 top-3 text-gray-400">
                search
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
