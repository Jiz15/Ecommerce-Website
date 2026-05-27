"use client";

import React, { useState } from "react";

interface LayoutCustomizerProps {
  order: string[];
  visibility: Record<string, boolean>;
  onOrderChange: (newOrder: string[]) => void;
  onVisibilityChange: (newVisibility: Record<string, boolean>) => void;
  onReset: () => void;
}

const SECTION_LABELS: Record<string, string> = {
  hero: "Hero Banner Landing",
  winterSale: "Winter Sale Catalog",
  exclusiveCollab: "Exclusive Countdown Ticker",
  bestSellers: "Best Sellers Showcase",
  ticker: "Moving Text Marquee",
  newsletter: "Premium Newsletter Form",
};

export default function LayoutCustomizer({
  order,
  visibility,
  onOrderChange,
  onVisibilityChange,
  onReset,
}: LayoutCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...order];
    const temp = newOrder[index];
    newOrder[index] = newOrder[index - 1];
    newOrder[index - 1] = temp;
    onOrderChange(newOrder);
  };

  const handleMoveDown = (index: number) => {
    if (index === order.length - 1) return;
    const newOrder = [...order];
    const temp = newOrder[index];
    newOrder[index] = newOrder[index + 1];
    newOrder[index + 1] = temp;
    onOrderChange(newOrder);
  };

  const toggleVisibility = (id: string) => {
    const newVisibility = { ...visibility, [id]: !visibility[id] };
    onVisibilityChange(newVisibility);
  };

  return (
    <>
      {/* Premium Floating Customizer Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-105 hover:bg-primary dark:hover:bg-primary hover:text-black transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border border-white/10 dark:border-black/10 group"
        title="Customize Layout Layout"
      >
        <span className="material-icons-outlined text-lg transition-transform duration-500 group-hover:rotate-45 select-none">
          dashboard_customize
        </span>
      </button>

      {/* Frosted Glass Customizer Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-black/95 dark:bg-background-dark/95 border-l border-white/15 h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 overflow-hidden text-white backdrop-blur-md">
            {/* Header */}
            <div className="px-6 py-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div>
                <h3 className="font-display text-lg font-condensed tracking-wider text-primary">
                  VESON ATELIER
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">
                  Homepage Layout Customizer
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5"
              >
                <span className="material-icons-outlined text-sm">close</span>
              </button>
            </div>

            {/* List of Sections */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
                Arrange & Toggle Homepage Modules
              </p>
              <div className="space-y-3">
                {order.map((id, index) => {
                  const label = SECTION_LABELS[id] || id;
                  const isVisible = visibility[id] !== false;

                  return (
                    <div
                      key={id}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                        isVisible
                          ? "bg-white/5 border-white/10 hover:border-white/20"
                          : "bg-white/2 border-dashed border-white/5 opacity-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-icons-outlined text-gray-500 text-sm select-none">
                          drag_indicator
                        </span>
                        <div>
                          <span className="text-[10px] font-bold tracking-widest uppercase block">
                            {label}
                          </span>
                          <span className="text-[8px] text-gray-400 uppercase mt-0.5 block">
                            Section {index + 1}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Move Up */}
                        <button
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors border ${
                            index === 0
                              ? "text-gray-600 border-white/5 cursor-not-allowed"
                              : "text-gray-300 border-white/10 hover:bg-white/10 hover:text-white cursor-pointer"
                          }`}
                          title="Move Up"
                        >
                          <span className="material-icons-outlined text-base">keyboard_arrow_up</span>
                        </button>

                        {/* Move Down */}
                        <button
                          onClick={() => handleMoveDown(index)}
                          disabled={index === order.length - 1}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors border ${
                            index === order.length - 1
                              ? "text-gray-600 border-white/5 cursor-not-allowed"
                              : "text-gray-300 border-white/10 hover:bg-white/10 hover:text-white cursor-pointer"
                          }`}
                          title="Move Down"
                        >
                          <span className="material-icons-outlined text-base">keyboard_arrow_down</span>
                        </button>

                        {/* Visibility Toggle */}
                        <button
                          onClick={() => toggleVisibility(id)}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors border ${
                            isVisible
                              ? "text-primary border-primary/20 hover:bg-primary/10 cursor-pointer"
                              : "text-gray-400 border-white/10 hover:bg-white/10 cursor-pointer"
                          }`}
                          title={isVisible ? "Hide Section" : "Show Section"}
                        >
                          <span className="material-icons-outlined text-base">
                            {isVisible ? "visibility" : "visibility_off"}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer / Reset Action */}
            <div className="px-6 py-6 border-t border-white/10 bg-white/2 flex gap-4">
              <button
                onClick={onReset}
                className="w-full border border-white/10 hover:border-white/25 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-center transition-all cursor-pointer hover:bg-white/5"
              >
                Reset to Default
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-black hover:bg-primary/95 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-center transition-all cursor-pointer shadow-lg shadow-primary/10"
              >
                Apply Layout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
