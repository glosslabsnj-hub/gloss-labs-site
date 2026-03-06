"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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
          ? "bg-black/80 backdrop-blur-xl border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-black font-bold text-lg">G</span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider text-gradient-gold">
              GLOSS LABS
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-muted uppercase">
              Premium Mobile Detailing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider uppercase text-white/70 hover:text-gold transition-colors duration-300 animated-underline cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-light text-black font-semibold text-sm tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 cursor-pointer"
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
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
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
        <div className="px-6 py-6 bg-black/95 backdrop-blur-xl border-t border-gold/10 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-wider uppercase text-white/70 hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-black font-semibold text-sm tracking-wider rounded-full cursor-pointer"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </header>
  );
}
