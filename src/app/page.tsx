"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WinterSale from "../components/WinterSale";
import ExclusiveCollab from "../components/ExclusiveCollab";
import BestSellers from "../components/BestSellers";
import Ticker from "../components/Ticker";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import LayoutCustomizer from "../components/LayoutCustomizer";

// Static mapping of section IDs to components
const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  hero: Hero,
  winterSale: WinterSale,
  exclusiveCollab: ExclusiveCollab,
  bestSellers: BestSellers,
  ticker: Ticker,
  newsletter: Newsletter,
};

const DEFAULT_ORDER = ["hero", "winterSale", "exclusiveCollab", "bestSellers", "ticker", "newsletter"];

export default function Home() {
  const [order, setOrder] = useState<string[]>(DEFAULT_ORDER);
  const [visibility, setVisibility] = useState<Record<string, boolean>>({
    hero: true,
    winterSale: true,
    exclusiveCollab: true,
    bestSellers: true,
    ticker: true,
    newsletter: true,
  });

  // Load customized layout configuration on client mount
  useEffect(() => {
    const savedOrder = localStorage.getItem("veson_layout_order");
    const savedVisibility = localStorage.getItem("veson_layout_visibility");

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch (e) {
        console.error("Failed to parse saved layout order", e);
      }
    }
    if (savedVisibility) {
      try {
        setVisibility(JSON.parse(savedVisibility));
      } catch (e) {
        console.error("Failed to parse saved layout visibility", e);
      }
    }
  }, []);

  const handleOrderChange = (newOrder: string[]) => {
    setOrder(newOrder);
    localStorage.setItem("veson_layout_order", JSON.stringify(newOrder));
  };

  const handleVisibilityChange = (newVisibility: Record<string, boolean>) => {
    setVisibility(newVisibility);
    localStorage.setItem("veson_layout_visibility", JSON.stringify(newVisibility));
  };

  const handleReset = () => {
    const defaultVis = {
      hero: true,
      winterSale: true,
      exclusiveCollab: true,
      bestSellers: true,
      ticker: true,
      newsletter: true,
    };
    setOrder(DEFAULT_ORDER);
    setVisibility(defaultVis);
    localStorage.removeItem("veson_layout_order");
    localStorage.removeItem("veson_layout_visibility");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {order.map((id) => {
          // If section is toggled off, skip rendering
          if (visibility[id] === false) return null;

          const Component = SECTION_COMPONENTS[id];
          if (!Component) return null;

          return <Component key={id} />;
        })}
      </main>

      {/* Dynamic Atelier Customizer Drawer */}
      <LayoutCustomizer
        order={order}
        visibility={visibility}
        onOrderChange={handleOrderChange}
        onVisibilityChange={handleVisibilityChange}
        onReset={handleReset}
      />

      {/* Styled Foot Navigation Links */}
      <Footer />
    </div>
  );
}
