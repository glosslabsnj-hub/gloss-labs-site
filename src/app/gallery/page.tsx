"use client";

import Link from "next/link";
import { useState } from "react";

const galleryItems = [
  { id: 1, src: "/gallery/IMG_1768.JPG", title: "Premium Exterior Detail", category: "Full Detail" },
  { id: 2, src: "/gallery/IMG_1942.JPG", title: "Interior Deep Clean", category: "Interior Detail" },
  { id: 3, src: "/gallery/IMG_2771.JPG", title: "Paint Correction Results", category: "Paint Correction" },
  { id: 4, src: "/gallery/IMG_2804.JPG", title: "Ceramic Coating Finish", category: "Ceramic Coating" },
  { id: 5, src: "/gallery/IMG_2944.JPG", title: "Showroom Shine", category: "Full Detail" },
  { id: 6, src: "/gallery/IMG_2945.JPG", title: "Flawless Finish", category: "Ceramic Coating" },
  { id: 7, src: "/gallery/IMG_3237.JPG", title: "Mirror-Like Results", category: "Paint Correction" },
];

const categories = ["All", "Full Detail", "Interior Detail", "Ceramic Coating", "Paint Correction"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <>
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            The <span className="text-gradient-accent">Gallery</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Results speak louder than words. Real work, no filters.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer font-[family-name:var(--font-body)] ${
                  cat === activeCategory
                    ? "bg-accent text-white font-semibold"
                    : "border border-white/10 text-white/40 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-accent/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                    <span className="text-accent text-xs tracking-wider font-[family-name:var(--font-body)]">VIEW FULL SIZE</span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-accent/60 text-xs tracking-wider uppercase font-[family-name:var(--font-body)]">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-16 glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">See More on Instagram</h3>
            <p className="text-white/40 text-sm mb-4 font-[family-name:var(--font-body)]">
              Follow us for the latest work, behind-the-scenes content, and detailing tips.
            </p>
            <a
              href="https://instagram.com/glosslabsnj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm tracking-wider hover:text-accent-light transition-colors duration-300 cursor-pointer font-[family-name:var(--font-body)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              FOLLOW @GLOSSLABSNJ
            </a>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/book"
              className="inline-flex px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
            >
              BOOK YOUR DETAIL
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[85vh]">
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{filtered[lightboxIndex].title}</p>
              <p className="text-accent/60 text-sm font-[family-name:var(--font-body)]">{filtered[lightboxIndex].category}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
