"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteInfo } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1628]/90 backdrop-blur-xl border-b border-accent/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - SVG */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <img
            src="/logo-icon.svg"
            alt="Gloss Labs"
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <span className="text-xl font-bold tracking-[0.15em] text-gradient-accent">
              GLOSS LABS
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-accent/50 uppercase font-[family-name:var(--font-body)]">
              It&apos;s Not Clean Until It&apos;s Glossed
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider uppercase text-white/70 hover:text-accent transition-colors duration-300 animated-underline cursor-pointer font-[family-name:var(--font-body)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteInfo.phoneLink}`}
            className="hidden lg:flex items-center gap-2 text-accent/70 hover:text-accent text-sm transition-colors duration-300 cursor-pointer font-[family-name:var(--font-body)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteInfo.phone}
          </a>
          <Link
            href="/book"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
          >
            BOOK NOW
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-6 h-0.5 bg-accent transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-accent transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-accent transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 bg-[#0A1628]/95 backdrop-blur-xl border-t border-accent/10 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-wider uppercase text-white/70 hover:text-accent transition-colors duration-300 cursor-pointer font-[family-name:var(--font-body)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteInfo.phoneLink}`}
            className="flex items-center gap-2 text-accent/70 text-sm cursor-pointer font-[family-name:var(--font-body)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteInfo.phone}
          </a>
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm tracking-wider rounded-full cursor-pointer"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </header>
  );
}
