"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="px-8 py-20 transition-colors duration-300">
      <div className="relative bg-veson-dark rounded-[3.5rem] overflow-hidden min-h-[600px] flex flex-col justify-center items-center p-12 md:p-20 shadow-xl text-center">
        <img
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover opacity-35 brightness-45"
          src="/veson_news_banner.png"
        />
        <div className="absolute top-12 text-white">
          <div className="flex items-center gap-2 justify-center">
            <span className="material-icons-outlined text-primary">star_outline</span>
            <span className="font-display tracking-widest uppercase font-condensed">VESON</span>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white max-w-4xl w-full mt-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.9] mb-8 uppercase font-condensed text-center max-w-3xl">
            GET AHEAD OF THE <br />
            <span className="text-primary italic">FASHION GAME</span> AND BE <br />
            THE FIRST TO SHOP OUR <br />
            LATEST COLLECTION
          </h2>
          <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] max-w-lg mb-10 leading-relaxed text-center mx-auto">
            Sign up for early access and discover a world of fashion before anyone else. Don't miss out on your chance to elevate your wardrobe with our exclusive designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-md mx-auto">
            {submitted ? (
              <div className="w-full bg-white/10 backdrop-blur-md border border-primary/40 rounded-full py-5 px-8 text-primary font-bold text-xs uppercase tracking-widest text-center shadow-lg">
                🎉 Thank you for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-5 pl-8 pr-16 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-xs text-center sm:text-left"
                  placeholder="Your Email Address"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-white hover:bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:scale-105 cursor-pointer shadow-md"
                >
                  <span className="material-icons-outlined text-sm">north_east</span>
                </button>
              </form>
            )}
            <a
              className="text-white hover:text-primary text-[10px] font-bold uppercase tracking-widest underline decoration-primary underline-offset-8 transition-colors shrink-0 whitespace-nowrap mt-4 sm:mt-0"
              href="#about"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
