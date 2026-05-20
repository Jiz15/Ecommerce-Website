import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WinterSale from "../components/WinterSale";
import ExclusiveCollab from "../components/ExclusiveCollab";
import BestSellers from "../components/BestSellers";
import Ticker from "../components/Ticker";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Parallax Hero Landing Section */}
        <Hero />

        {/* Dynamic Winter Sale Showcase */}
        <WinterSale />

        {/* Interactive Exclusive Collab with Live Ticking Countdown */}
        <ExclusiveCollab />

        {/* Best Sellers Slider */}
        <BestSellers />

        {/* CSS Animation Infinitely Moving Ticker Marquee */}
        <Ticker />

        {/* Stateful Newsletter Signups */}
        <Newsletter />
      </main>

      {/* Styled Foot Navigation Links */}
      <Footer />
    </div>
  );
}
