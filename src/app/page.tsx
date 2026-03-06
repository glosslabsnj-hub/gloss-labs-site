"use client";

import Link from "next/link";
import { HeroParticles } from "@/components/HeroParticles";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatsCounter } from "@/components/StatsCounter";
import { GalleryPreview } from "@/components/GalleryPreview";
import { ScrollReveal } from "@/components/ScrollReveal";
import { services, testimonials, processSteps, stats, siteInfo } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow of premium cars */}
        <HeroSlideshow />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-[#0A1628]/30 to-[#0A1628]" />
        {/* Blue ambient light accents */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.05) 0%, transparent 50%)",
          }}
        />
        <HeroParticles />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="animate-fade-in-up mb-8">
            <img
              src="/logo.svg"
              alt="Gloss Labs - Premium Auto Detailing"
              className="h-16 sm:h-20 md:h-24 mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            />
          </div>

          <div className="animate-fade-in-up animate-delay-100">
            <span className="inline-block px-5 py-2 border border-accent/30 rounded-full text-accent-light text-xs tracking-[0.3em] uppercase backdrop-blur-sm bg-[#0A1628]/30">
              Hamilton, NJ &middot; In-Shop &amp; Mobile Detailing
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-200 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mt-6 mb-5">
            <span className="text-white">We Don&apos;t Just</span>
            <br />
            <span className="text-white">Detail Cars.</span>
            <br />
            <span className="text-gradient-accent">We Elevate Them.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-300 text-white/60 text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-[family-name:var(--font-body)] px-2">
            Visit our shop in Hamilton or we come to you anywhere in New Jersey.
            From express washes to ceramic coatings, your vehicle deserves the Gloss treatment.
          </p>

          <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/book"
              className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10">BOOK YOUR DETAIL</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/quote"
              className="w-full sm:w-auto px-10 py-4 border border-accent/30 text-accent-light font-semibold text-sm tracking-wider rounded-full hover:bg-accent/10 backdrop-blur-sm transition-all duration-300 cursor-pointer text-center"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-400">
          <span className="text-white/20 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative py-10 md:py-12 border-y border-accent/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/water-beading.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1628]/80 backdrop-blur-sm" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100} direction="up" distance={20}>
                <StatsCounter value={stat.value} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-[#080f1e]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 100%, rgba(59,130,246,0.04) 0%, transparent 40%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                Our <span className="text-gradient-accent">Services</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto font-[family-name:var(--font-body)] text-sm md:text-base">
                Every service includes premium products, professional equipment, and
                the kind of attention to detail that turns heads.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80} direction="up" distance={30}>
                <ServiceCard
                  title={service.title}
                  price={service.price}
                  description={service.shortDescription}
                  icon={service.icon}
                  duration={service.duration}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-10 md:mt-12">
              <p className="text-white/30 text-xs md:text-sm mb-4 font-[family-name:var(--font-body)]">
                Prices shown are starting rates for sedans. SUV and truck pricing available on request.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-accent text-sm tracking-wider hover:gap-4 transition-all duration-300 cursor-pointer font-[family-name:var(--font-body)]"
              >
                VIEW ALL SERVICES &amp; PRICING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ GALLERY PREVIEW ═══════════════ */}
      <GalleryPreview />

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/detail-closeup.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1628]/75" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Simple Process</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">
                How It <span className="text-gradient-accent">Works</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 120} direction="up">
                <ProcessStep {...step} isLast={i === processSteps.length - 1} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-porsche-dark.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1628]/75" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.06) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">5-Star Reviews</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
                What Our Clients <span className="text-gradient-accent">Say</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100} direction="up">
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <ScrollReveal delay={400}>
            <div className="text-center mt-10 md:mt-12">
              <div className="inline-flex items-center gap-2 text-accent/60 text-sm font-[family-name:var(--font-body)]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  ))}
                </div>
                5.0 on Google &middot; Read all reviews
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('/images/bmw-detail.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]/70" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal scale={0.95} direction="none">
            <img
              src="/logo-icon.svg"
              alt=""
              className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            />
            <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-6">
              Ready for the <span className="text-gradient-accent">Gloss Treatment?</span>
            </h2>
            <p className="text-white/50 text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Book your appointment today and experience the difference.
              Visit our shop or we come to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/book"
                className="group relative w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-accent to-accent-light text-white font-bold tracking-wider rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
              >
                <span className="relative z-10">BOOK NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href={`tel:${siteInfo.phoneLink}`}
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 text-accent-light font-semibold tracking-wider cursor-pointer hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteInfo.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
