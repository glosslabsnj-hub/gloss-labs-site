import Link from "next/link";
import { HeroParticles } from "@/components/HeroParticles";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatsCounter } from "@/components/StatsCounter";

const services = [
  {
    title: "Express Wash",
    price: "$75",
    description:
      "Hand wash, wheel cleaning, tire dressing, and window cleaning. Quick turnaround, stunning results.",
    icon: "droplets" as const,
    duration: "45 min",
  },
  {
    title: "Interior Detail",
    price: "$175",
    description:
      "Deep vacuum, steam clean, leather conditioning, dashboard detail, and premium air freshener.",
    icon: "sparkles" as const,
    duration: "2 hours",
  },
  {
    title: "Full Detail",
    price: "$275",
    description:
      "Complete interior and exterior transformation. Clay bar, polish, wax, and sealant included.",
    icon: "star" as const,
    duration: "3-4 hours",
  },
  {
    title: "Ceramic Coating",
    price: "$499",
    description:
      "Professional-grade ceramic protection with 2+ year durability. Hydrophobic, UV-resistant finish.",
    icon: "shield" as const,
    duration: "Full day",
  },
  {
    title: "Paint Correction",
    price: "$350",
    description:
      "Multi-stage machine polish to remove swirl marks, scratches, and oxidation. Mirror finish guaranteed.",
    icon: "gem" as const,
    duration: "5-6 hours",
  },
  {
    title: "Fleet Services",
    price: "$50",
    description:
      "Monthly fleet maintenance for businesses. We come to your lot. Volume pricing for 3+ vehicles.",
    icon: "truck" as const,
    duration: "Per vehicle",
  },
];

const testimonials = [
  {
    name: "Mike R.",
    vehicle: "BMW M4",
    text: "My M4 has never looked this good, not even when I drove it off the lot. The ceramic coating is insane. Water literally jumps off the paint.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    vehicle: "Mercedes GLC",
    text: "Jack came to my office parking lot and detailed my car while I worked. Came out to a car that looked brand new. Already booked my next appointment.",
    rating: 5,
  },
  {
    name: "David L.",
    vehicle: "Porsche 911",
    text: "I don't trust anyone with my 911. But after seeing their work on my buddy's car, I gave them a shot. Best decision I've made. These guys are artists.",
    rating: 5,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description: "Choose your service and pick a time that works for you.",
  },
  {
    step: "02",
    title: "We Come to You",
    description: "Our team arrives at your location with everything we need.",
  },
  {
    step: "03",
    title: "The Transformation",
    description: "We work our magic while you go about your day.",
  },
  {
    step: "04",
    title: "Jaw Drop",
    description: "Come back to a vehicle that looks better than showroom new.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-charcoal" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.1) 0%, transparent 40%)",
          }}
        />
        <HeroParticles />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 border border-gold/30 rounded-full text-gold text-xs tracking-[0.3em] uppercase mb-8">
              Hamilton, NJ &middot; Mobile Detailing
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="text-white">We Don&apos;t Just</span>
            <br />
            <span className="text-white">Detail Cars.</span>
            <br />
            <span className="text-gradient-gold">We Elevate Them.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium mobile detailing that comes to your door. From express washes
            to ceramic coatings, your vehicle gets the treatment it deserves.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="group relative px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-bold text-sm tracking-wider rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              <span className="relative z-10">BOOK YOUR DETAIL</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/quote"
              className="px-10 py-4 border border-gold/30 text-gold font-semibold text-sm tracking-wider rounded-full hover:bg-gold/10 transition-all duration-300 cursor-pointer"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-400">
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative py-12 bg-charcoal border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value="500+" label="Cars Detailed" />
            <StatsCounter value="5.0" label="Google Rating" />
            <StatsCounter value="12K" label="Instagram Followers" />
            <StatsCounter value="25mi" label="Service Radius" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Every service includes premium products, professional equipment, and
              the kind of attention to detail that turns heads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/30 text-sm mb-4">
              Prices shown are starting rates for sedans. SUV and truck pricing available on request.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-wider hover:gap-4 transition-all duration-300 cursor-pointer"
            >
              VIEW ALL SERVICES
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.step} {...step} isLast={i === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              What Our Clients <span className="text-gradient-gold">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-dark/20 via-black to-black" />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(201,168,76,0.12) 0%, transparent 60%)",
        }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for the <span className="text-gradient-gold">Gloss Treatment?</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the difference that
            premium, professional detailing makes. We come to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="group relative px-12 py-5 bg-gradient-to-r from-gold to-gold-light text-black font-bold tracking-wider rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.5)]"
            >
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <a
              href="tel:+16097318641"
              className="flex items-center gap-3 px-8 py-5 text-gold font-semibold tracking-wider cursor-pointer hover:text-gold-light transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (609) 731-8641
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
