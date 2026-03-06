"use client";

import Link from "next/link";
import { services, addOns, siteInfo } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bmw-detail.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1628]/60" />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
              Premium Detailing, <span className="text-gradient-accent">Your Way</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Visit our shop in Hamilton or we come to you. Every service uses premium products
              and professional equipment. Prices are starting rates for sedans.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80} direction="up" distance={30}>
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div>
                      <span className="text-accent text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                        {service.title}
                      </h2>
                      <p className="text-accent-light/70 text-sm mt-1 font-[family-name:var(--font-body)]">{service.shortDescription}</p>
                    </div>

                    {/* Price grid */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 shrink-0">
                      {[
                        { label: "Sedan", price: service.price },
                        ...(service.priceSuv ? [{ label: "SUV", price: service.priceSuv }] : []),
                        ...(service.priceTruck ? [{ label: "Truck", price: service.priceTruck }] : []),
                      ].map((tier) => (
                        <div
                          key={tier.label}
                          className="text-center px-4 py-3 rounded-xl bg-accent/5 border border-accent/10"
                        >
                          <span className="text-white/40 text-xs uppercase tracking-wider block font-[family-name:var(--font-body)]">
                            {tier.label}
                          </span>
                          <span className="text-accent font-bold text-lg">{tier.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                    {service.description}
                  </p>

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-white/70 text-xs uppercase tracking-wider mb-3 font-[family-name:var(--font-body)]">
                        What&apos;s Included
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-white/40 text-sm font-[family-name:var(--font-body)]"
                          >
                            <svg
                              className="w-4 h-4 text-accent shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <div className="text-sm text-white/30 text-right font-[family-name:var(--font-body)]">
                        <span className="block">Duration</span>
                        <span className="text-accent font-semibold">{service.duration}</span>
                      </div>
                      <Link
                        href="/book"
                        className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
                      >
                        BOOK THIS SERVICE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add-On Services */}
        <div className="max-w-5xl mx-auto px-6 mt-16">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Extras</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                Add-On <span className="text-gradient-accent">Services</span>
              </h2>
              <p className="text-white/40 text-sm mt-2 font-[family-name:var(--font-body)]">
                Enhance any detail with these additional services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, i) => (
              <ScrollReveal key={addon.title} delay={i * 60} direction="up" distance={20}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold text-sm">{addon.title}</h3>
                    <span className="text-accent font-bold text-sm shrink-0 ml-2">{addon.price}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed font-[family-name:var(--font-body)]">
                    {addon.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
            <p className="text-white/40 text-sm mb-6 font-[family-name:var(--font-body)]">
              Not sure which service is right for you? We&apos;ll help you decide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
              >
                BOOK NOW
              </Link>
              <Link
                href="/quote"
                className="px-10 py-4 border border-accent/30 text-accent-light font-semibold text-sm tracking-wider rounded-full hover:bg-accent/10 transition-all duration-300 cursor-pointer"
              >
                GET A FREE QUOTE
              </Link>
              <a
                href={`tel:${siteInfo.phoneLink}`}
                className="flex items-center gap-2 px-10 py-4 text-silver font-semibold text-sm tracking-wider cursor-pointer hover:text-accent-light transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                CALL US
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
