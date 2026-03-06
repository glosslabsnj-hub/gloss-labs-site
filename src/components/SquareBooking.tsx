"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteInfo } from "@/data/content";

export function SquareBooking() {
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    const container = document.getElementById("square-booking-container");
    if (!container) return;

    const script = document.createElement("script");
    script.src = `https://square.site/appointments/buyer/widget/${siteInfo.squareWidgetId}.js`;
    script.async = true;

    // If widget fails to load or takes too long, show fallback
    const timeout = setTimeout(() => {
      // Check if Square injected any content
      const hasWidget = container.querySelector("iframe, .sq-widget, [class*='square']");
      if (!hasWidget) setLoadFailed(true);
    }, 8000);

    script.onerror = () => {
      clearTimeout(timeout);
      setLoadFailed(true);
    };

    container.appendChild(script);

    return () => {
      clearTimeout(timeout);
      script.remove();
    };
  }, []);

  if (loadFailed) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Book Your Appointment</h3>
        <p className="text-white/40 text-sm mb-8 max-w-md mx-auto font-[family-name:var(--font-body)]">
          Our online booking is temporarily updating. You can still book your detail right now:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          {/* Call */}
          <a
            href={`tel:${siteInfo.phoneLink}`}
            className="glass-card rounded-xl p-5 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer group"
          >
            <svg className="w-7 h-7 mx-auto mb-2 text-accent group-hover:text-accent-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-white font-semibold text-sm">Call Us</p>
            <p className="text-white/40 text-xs mt-1 font-[family-name:var(--font-body)]">{siteInfo.phone}</p>
          </a>

          {/* Text/SMS */}
          <a
            href={`sms:${siteInfo.phoneLink}`}
            className="glass-card rounded-xl p-5 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer group"
          >
            <svg className="w-7 h-7 mx-auto mb-2 text-accent group-hover:text-accent-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <p className="text-white font-semibold text-sm">Text Us</p>
            <p className="text-white/40 text-xs mt-1 font-[family-name:var(--font-body)]">{siteInfo.phone}</p>
          </a>

          {/* Instagram DM */}
          <a
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer group"
          >
            <svg className="w-7 h-7 mx-auto mb-2 text-accent group-hover:text-accent-light transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <p className="text-white font-semibold text-sm">DM Us</p>
            <p className="text-white/40 text-xs mt-1 font-[family-name:var(--font-body)]">{siteInfo.instagram}</p>
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-3 border border-accent/30 text-accent font-semibold text-sm tracking-wider rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            OR GET A FREE QUOTE ONLINE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        id="square-booking-container"
        className="min-h-[600px] flex items-center justify-center"
      >
        {/* Loading state */}
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm font-[family-name:var(--font-body)]">Loading booking calendar...</p>
        </div>
      </div>
    </div>
  );
}
