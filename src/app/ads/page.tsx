import type { Metadata } from "next";
import Link from "next/link";
import { siteInfo, services, testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Premium Auto Detailing in Hamilton NJ | Gloss Labs",
  description:
    "Hamilton NJ's top-rated auto detailing shop. 5.0 Google stars, 35+ reviews. Ceramic coating, paint correction, interior detailing. Visit our shop at 18 Yorkshire Road. Book today.",
  robots: "noindex, nofollow",
};

export default function AdsLandingPage() {
  const topServices = services.slice(0, 4);
  const topTestimonials = testimonials.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Minimal top bar */}
      <div className="bg-[#0D1B2E] border-b border-white/10 py-3 px-4 text-center">
        <span className="text-white/90 text-sm font-medium tracking-wide">
          Gloss Labs &middot; Hamilton, NJ &middot;{" "}
          <a href={`tel:${siteInfo.phoneLink}`} className="text-blue-400 font-bold hover:underline">
            {siteInfo.phone}
          </a>
        </span>
      </div>

      {/* HERO */}
      <section className="relative py-16 md:py-24 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-white/80 text-sm font-medium">5.0 on Google &middot; 35+ Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-5">
            Hamilton NJ&apos;s Premium{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Auto Detailing
            </span>{" "}
            Shop
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Visit us at 18 Yorkshire Road. Ceramic coating, paint correction,
            interior detailing, and more. No shortcuts, no compromises. Just results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href={siteInfo.squareBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
            >
              Book Your Detail Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href={`tel:${siteInfo.phoneLink}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Or call: {siteInfo.phone}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span>Mon-Sun 8AM-7PM</span>
            <span>18 Yorkshire Rd, Hamilton NJ</span>
            <span>No appointment? No problem.</span>
          </div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section className="py-16 px-6 bg-[#0D1B2E]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-xs tracking-[0.25em] uppercase font-semibold">
              Transparent Pricing
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
              No surprises. No hidden fees.
            </h2>
            <p className="text-white/50 mt-2 text-sm">Sedan pricing shown. SUVs and trucks slightly higher.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topServices.map((svc, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition-colors"
              >
                <h3 className="text-white font-bold text-lg mb-1">{svc.title}</h3>
                <div className="text-blue-400 text-2xl font-bold mb-1">{svc.price}</div>
                <div className="text-white/40 text-xs mb-4">{svc.duration}</div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{svc.shortDescription}</p>
                <a
                  href={siteInfo.squareBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-semibold text-sm py-2.5 rounded-lg transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>

          {/* Premium services callout */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-1">Paint Correction</h3>
              <div className="text-blue-400 text-2xl font-bold">From $500</div>
              <p className="text-white/60 text-sm mt-2">Remove scratches, swirls, and oxidation. 1-step or 2-step correction. Your paint restored to showroom condition.</p>
              <a href={siteInfo.squareBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 font-semibold text-sm hover:underline">Book Paint Correction &rarr;</a>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-1">Ceramic Coating</h3>
              <div className="text-blue-400 text-2xl font-bold">From $600</div>
              <p className="text-white/60 text-sm mt-2">1-year, 3-year, or 5-year protection. Professional-grade coatings from CarPro, Gyeon, and Gtechniq. Includes prep wash and decontamination.</p>
              <a href={siteInfo.squareBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 font-semibold text-sm hover:underline">Book Ceramic Coating &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="text-white font-bold text-xl">5.0</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              35+ Five-Star Google Reviews
            </h2>
            <p className="text-white/50 mt-1 text-sm">Real reviews from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {topTestimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-yellow-400 text-sm mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.vehicle}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href={siteInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm font-semibold hover:underline"
            >
              Read all reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-6 bg-[#0D1B2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Our Work Speaks for Itself
          </h2>
          <p className="text-white/50 text-sm mb-6">
            Real results. No filters. Follow{" "}
            <a href={siteInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {siteInfo.instagram}
            </a>{" "}
            for more.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* LOCATION + CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Visit Our Hamilton NJ Shop
          </h2>
          <p className="text-white/60 text-base mb-2">
            {siteInfo.address.full}
          </p>
          <p className="text-white/40 text-sm mb-8">
            {siteInfo.hours.weekdays} &middot; {siteInfo.hours.weekend}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={siteInfo.squareBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
            >
              Book Your Detail
            </a>
            <a
              href={`tel:${siteInfo.phoneLink}`}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Call {siteInfo.phone}
            </a>
          </div>

          <p className="text-white/30 text-xs">
            Products we use: CarPro, Gyeon, Gtechniq, Ardex &middot; Serving all of New Jersey
          </p>
        </div>
      </section>

      {/* Mini footer */}
      <div className="border-t border-white/10 py-4 px-6 text-center text-white/30 text-xs">
        &copy; 2026 Gloss Labs &middot;{" "}
        <a href={`mailto:${siteInfo.email}`} className="hover:text-white/50">{siteInfo.email}</a>
      </div>
    </div>
  );
}
