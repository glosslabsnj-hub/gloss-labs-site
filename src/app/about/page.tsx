import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Gloss Labs Premium Auto Detailing",
  description: "Learn about Gloss Labs, Hamilton NJ's premium mobile auto detailing service. Our story, our standards, our promise.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-black relative">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            About <span className="text-gradient-gold">Gloss Labs</span>
          </h1>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          {/* Story */}
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              More Than a Car Wash. It&apos;s a <span className="text-gradient-gold">Standard</span>.
            </h2>
            <div className="space-y-4 text-white/50 text-sm leading-relaxed">
              <p>
                Gloss Labs was born out of a simple frustration: drive-through car washes don&apos;t care about your car. They run it through the same harsh brushes and cheap chemicals as every other vehicle, and call it clean. We knew there had to be a better way.
              </p>
              <p>
                We started Gloss Labs with one goal: give every vehicle the kind of attention and care that only a true enthusiast can deliver. That means hand-washing with pH-balanced products, using professional-grade compounds and coatings, and spending real time on every detail. No shortcuts. No rushing. No compromises.
              </p>
              <p>
                As a fully mobile service, we come to you. Your driveway, your office, wherever your vehicle is. We bring everything we need: water, power, equipment, and premium products. You don&apos;t have to go anywhere or wait in line. Just hand us the keys and go about your day.
              </p>
              <p>
                Based in Hamilton, NJ, we serve the entire central New Jersey area within 25 miles. From daily drivers to weekend exotics, fleet vans to luxury SUVs, every vehicle gets the Gloss Labs treatment.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Quality First",
                description: "We use professional-grade products from CarPro, Gyeon, and Chemical Guys. Every product is chosen for performance, not price.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Your Time Matters",
                description: "We come to you. No drop-offs, no waiting rooms, no wasted time. You keep your day, we make your car shine.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Results That Last",
                description: "Our ceramic coatings last 2+ years. Our details preserve your paint value long-term. This isn't cleaning. It's protection.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to see the <span className="text-gradient-gold">difference</span>?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link
                href="/book"
                className="px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300 cursor-pointer"
              >
                BOOK NOW
              </Link>
              <Link
                href="/gallery"
                className="px-10 py-4 border border-gold/30 text-gold font-semibold text-sm tracking-wider rounded-full hover:bg-gold/10 transition-all duration-300 cursor-pointer"
              >
                SEE OUR WORK
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
