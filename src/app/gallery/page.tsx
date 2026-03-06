import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Gloss Labs Premium Auto Detailing",
  description: "See our work. Before and after photos of our premium mobile detailing services in Hamilton NJ.",
};

// Placeholder gallery items - will be replaced with real photos from Jack's Drive folder
const galleryItems = [
  { id: 1, title: "BMW M4 Ceramic Coating", category: "Ceramic Coating", placeholder: "BMW M4 - Full ceramic coating with paint correction" },
  { id: 2, title: "Mercedes GLC Interior", category: "Interior Detail", placeholder: "Mercedes GLC - Deep interior cleaning and conditioning" },
  { id: 3, title: "Porsche 911 Paint Correction", category: "Paint Correction", placeholder: "Porsche 911 - Multi-stage paint correction" },
  { id: 4, title: "Audi Q7 Full Detail", category: "Full Detail", placeholder: "Audi Q7 - Complete interior and exterior detail" },
  { id: 5, title: "Tesla Model 3 Express Wash", category: "Express Wash", placeholder: "Tesla Model 3 - Express exterior hand wash" },
  { id: 6, title: "Range Rover Ceramic Coating", category: "Ceramic Coating", placeholder: "Range Rover - Ceramic coating with hydrophobic finish" },
  { id: 7, title: "Chevrolet Silverado Fleet Wash", category: "Fleet Services", placeholder: "Silverado fleet vehicle - Monthly maintenance wash" },
  { id: 8, title: "Lexus IS Interior", category: "Interior Detail", placeholder: "Lexus IS - Leather conditioning and steam clean" },
  { id: 9, title: "Ford Mustang Paint Correction", category: "Paint Correction", placeholder: "Ford Mustang GT - Swirl mark removal and polish" },
];

const categories = ["All", "Ceramic Coating", "Paint Correction", "Full Detail", "Interior Detail", "Express Wash", "Fleet Services"];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-black relative">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            The <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Results speak louder than words. Here&apos;s what premium detailing looks like.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  cat === "All"
                    ? "bg-gold text-black font-semibold"
                    : "border border-white/10 text-white/40 hover:border-gold/30 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-gold/30 transition-all duration-500"
              >
                {/* Placeholder image area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-charcoal to-slate relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                      </div>
                      <p className="text-white/20 text-xs">{item.placeholder}</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-5">
                  <span className="text-gold/60 text-xs tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="text-center mt-16 glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">More Photos Coming Soon</h3>
            <p className="text-white/40 text-sm mb-4">
              We&apos;re building out our gallery with real before-and-after photos from our latest jobs. Follow us on Instagram to see our work in real time.
            </p>
            <a
              href="https://instagram.com/glosslabsnj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-wider hover:text-gold-light transition-colors duration-300 cursor-pointer"
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
              className="inline-flex px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300 cursor-pointer"
            >
              BOOK YOUR DETAIL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
