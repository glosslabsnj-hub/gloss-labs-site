"use client";

import Link from "next/link";
import { galleryItems } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

const previewImages = galleryItems.slice(0, 6);

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.08) 0%, transparent 50%)",
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              The <span className="text-gradient-accent">Results</span> Speak
            </h2>
            <p className="text-white/40 max-w-xl mx-auto font-[family-name:var(--font-body)]">
              Real transformations from real clients. No filters, no tricks, just
              the quality you can expect every single time.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-style gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 80} direction="up" distance={20}>
              <Link
                href="/gallery"
                className={`group relative overflow-hidden rounded-xl cursor-pointer block ${
                  i === 0 ? "md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white text-sm font-medium">{img.title}</p>
                    <span className="text-accent text-xs tracking-wider font-[family-name:var(--font-body)]">VIEW GALLERY</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 px-8 py-4 border border-accent/30 text-accent font-semibold text-sm tracking-wider rounded-full hover:bg-accent/10 transition-all duration-300 cursor-pointer"
            >
              VIEW FULL GALLERY
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
