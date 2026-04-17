"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-coal/60 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <svg width="26" height="26" viewBox="0 0 32 32" className="transition-transform group-hover:rotate-90 duration-700">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="16" cy="16" r="14" opacity="0.25" />
              <circle cx="16" cy="16" r="10" opacity="0.5" />
              <circle cx="16" cy="16" r="6" />
              <circle cx="16" cy="16" r="2" fill="var(--halo)" stroke="none" />
            </g>
          </svg>
          <div className="flex items-baseline gap-1.5">
            <span className="text-display text-lg sm:text-xl font-semibold tracking-[0.14em] text-bone uppercase">
              ElarisLabs
            </span>
            <span className="text-display text-lg sm:text-xl font-semibold tracking-[0.14em] shine-plasma uppercase">
              AI
            </span>
          </div>
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 text-sm glass rounded-full px-1 py-1"
        >
          <a
            href="/#products"
            className="px-4 py-1.5 rounded-full text-chrome hover:text-bone hover:bg-white/5 transition-all"
          >
            Products
          </a>
          <a
            href="/pricing"
            className="px-4 py-1.5 rounded-full text-chrome hover:text-bone hover:bg-white/5 transition-all"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm text-chrome hover:text-bone transition-colors">
            Sign in
          </button>
          <button className="bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-5 py-2 rounded-full border border-white/20 shadow-[0_0_25px_-5px_rgba(168,205,239,0.55)] hover:shadow-[0_0_45px_-5px_rgba(168,205,239,0.85)] hover:brightness-110 transition-all">
            Start free
          </button>
        </div>
      </div>
    </header>
  );
}
