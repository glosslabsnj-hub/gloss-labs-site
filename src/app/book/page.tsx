import type { Metadata } from "next";
import Link from "next/link";
import { SquareBooking } from "@/components/SquareBooking";

export const metadata: Metadata = {
  title: "Book Now | Gloss Labs Premium Auto Detailing",
  description: "Schedule your detailing appointment online. Visit our Hamilton NJ shop or book a mobile appointment anywhere in New Jersey.",
};

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Schedule Online</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Book Your <span className="text-gradient-accent">Detail</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Visit our shop at 18 Yorkshire Road, Hamilton NJ or book a mobile appointment. Pick a service and choose your time.
          </p>
        </div>
      </section>

      {/* Square Booking Widget */}
      <section className="pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-6 md:p-10">
            <SquareBooking />
          </div>

          {/* Alternative contact */}
          <div className="mt-12 text-center">
            <p className="text-white/30 text-sm mb-4 font-[family-name:var(--font-body)]">
              Prefer to book by phone or have questions?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+16097318641"
                className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (609) 731-8641
              </a>
              <a
                href="https://instagram.com/glosslabsnj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @glosslabsnj
              </a>
              <Link
                href="/quote"
                className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
