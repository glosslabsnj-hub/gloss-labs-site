import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Gloss Labs Premium Auto Detailing",
  description: "Visit our shop at 18 Yorkshire Road, Hamilton NJ or call us. In-shop and mobile auto detailing across all of New Jersey.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Contact <span className="text-gradient-accent">Us</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Visit our shop, call us, or send a message. We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:+16097318641"
              className="glass-card rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">Call or Text</h3>
              <p className="text-accent font-[family-name:var(--font-body)]">(609) 731-8641</p>
              <p className="text-white/30 text-xs mt-2 font-[family-name:var(--font-body)]">Mon-Sat 8AM-6PM</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/glosslabsnj"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">Instagram DM</h3>
              <p className="text-accent font-[family-name:var(--font-body)]">@glosslabsnj</p>
              <p className="text-white/30 text-xs mt-2 font-[family-name:var(--font-body)]">12K followers</p>
            </a>

            {/* Email */}
            <a
              href="mailto:glosslabsnj@gmail.com"
              className="glass-card rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">Email</h3>
              <p className="text-accent font-[family-name:var(--font-body)]">glosslabsnj@gmail.com</p>
              <p className="text-white/30 text-xs mt-2 font-[family-name:var(--font-body)]">We reply fast</p>
            </a>
          </div>

          {/* Shop Location + Map */}
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Our <span className="text-gradient-accent">Shop</span>
                </h2>
                <div className="space-y-4 font-[family-name:var(--font-body)]">
                  <div>
                    <h3 className="text-white/70 text-xs uppercase tracking-wider mb-2">Address</h3>
                    <p className="text-white text-lg font-semibold">18 Yorkshire Road</p>
                    <p className="text-white/60">Hamilton, NJ 08610</p>
                  </div>
                  <div>
                    <h3 className="text-white/70 text-xs uppercase tracking-wider mb-2">Service Area</h3>
                    <p className="text-white/50 text-sm">
                      All of New Jersey. $50 service fee for mobile appointments beyond 25 miles from our Hamilton shop.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white/70 text-xs uppercase tracking-wider mb-2">Hours</h3>
                    <div className="space-y-2">
                      {[
                        { day: "Monday - Saturday", hours: "8:00 AM - 6:00 PM" },
                        { day: "Sunday", hours: "Closed" },
                      ].map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between py-1"
                        >
                          <span className="text-white/50 text-sm">{item.day}</span>
                          <span className={`text-sm ${item.hours === "Closed" ? "text-white/20" : "text-accent/70"}`}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.4!2d-74.72!3d40.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7b1a1a1a1a1%3A0x1234567890!2s18+Yorkshire+Rd%2C+Hamilton+Township%2C+NJ+08610!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gloss Labs Location - 18 Yorkshire Road, Hamilton NJ"
                />
              </div>
            </div>
          </div>

          {/* Areas served */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-white mb-6">
              Areas We <span className="text-gradient-accent">Serve</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-white/40 font-[family-name:var(--font-body)]">
              {[
                "Hamilton",
                "Trenton",
                "Princeton",
                "Lawrenceville",
                "Ewing",
                "Bordentown",
                "Robbinsville",
                "East Windsor",
                "West Windsor",
                "Hightstown",
                "Pennington",
                "Hopewell",
                "Cranbury",
                "South Brunswick",
                "Plainsboro",
                "Monroe Township",
              ].map((area) => (
                <span key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {area}
                </span>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-6 font-[family-name:var(--font-body)]">
              Mobile service available anywhere in New Jersey. $50 service fee beyond 25 miles from Hamilton.
            </p>

            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
              >
                BOOK YOUR APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
