import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Gloss Labs Premium Auto Detailing",
  description:
    "Express wash, interior detail, full detail, ceramic coating, paint correction, and fleet services. In-shop and mobile detailing in Hamilton NJ.",
};

const services = [
  {
    name: "Express Wash",
    tagline: "Quick clean, head-turning results",
    description:
      "Our express exterior hand wash is anything but basic. We use pH-balanced soap, microfiber mitts, and filtered water to safely remove dirt and contaminants without scratching your paint. Includes wheel cleaning, tire dressing, and streak-free window cleaning.",
    sedan: "$75",
    suv: "$85",
    truck: "$100",
    duration: "~45 minutes",
    includes: [
      "Hand wash with pH-balanced soap",
      "Wheel and tire cleaning",
      "Tire dressing",
      "Window cleaning (exterior)",
      "Door jamb wipe-down",
      "Quick dry with microfiber towels",
    ],
  },
  {
    name: "Interior Detail",
    tagline: "Deep clean from headliner to floor mats",
    description:
      "A thorough deep cleaning of your entire interior. We vacuum every surface, steam clean carpets and upholstery, condition leather, detail the dashboard and console, and leave your cabin smelling and feeling brand new.",
    sedan: "$175",
    suv: "$200",
    truck: "$250",
    duration: "~2 hours",
    includes: [
      "Full vacuum (seats, carpets, trunk)",
      "Steam cleaning of all surfaces",
      "Leather cleaning and conditioning",
      "Dashboard and console detail",
      "Air vent cleaning",
      "Glass cleaning (interior)",
      "Premium air freshener",
    ],
  },
  {
    name: "Full Detail",
    tagline: "The complete transformation",
    description:
      "Our signature service combines everything from our Express Wash and Interior Detail, plus paint decontamination with clay bar, machine polish for extra gloss, and a durable wax or sealant. This is the package that makes your car look better than showroom new.",
    sedan: "$275",
    suv: "$350",
    truck: "$425",
    duration: "3-4 hours",
    includes: [
      "Everything in Express Wash",
      "Everything in Interior Detail",
      "Clay bar decontamination",
      "Single-stage machine polish",
      "Wax or paint sealant application",
      "Engine bay cleaning",
      "Exhaust tip polish",
    ],
  },
  {
    name: "Ceramic Coating",
    tagline: "Ultimate paint protection",
    description:
      "Professional-grade ceramic coating that bonds to your paint at the molecular level. Creates a permanent hydrophobic layer that repels water, dirt, UV rays, and chemical contaminants. Your paint stays glossy and protected for 2+ years with minimal maintenance.",
    sedan: "$499",
    suv: "$699",
    truck: "$999",
    duration: "Full day",
    includes: [
      "Full paint decontamination",
      "Clay bar treatment",
      "Single-stage paint correction",
      "IPA wipe-down",
      "Ceramic coating application",
      "24-hour cure time",
      "2+ year durability guarantee",
      "Aftercare instructions and kit",
    ],
  },
  {
    name: "Paint Correction",
    tagline: "Restore your paint to perfection",
    description:
      "Multi-stage machine polishing that removes swirl marks, light scratches, water spots, and oxidation from your paint. We restore clarity and depth to even the most neglected finishes. Recommended before ceramic coating for the best possible result.",
    sedan: "$350+",
    suv: "$450+",
    truck: "$550+",
    duration: "5-6 hours",
    includes: [
      "Paint depth measurement",
      "Multi-stage machine compound",
      "Finishing polish",
      "Paint inspection under LED lights",
      "IPA wipe-down",
      "Sealant or wax application",
    ],
  },
  {
    name: "Fleet Services",
    tagline: "Keep your business looking professional",
    description:
      "Scheduled fleet maintenance for businesses with branded vehicles. We come to your lot on a recurring schedule so your fleet always looks sharp. Volume pricing available for 3+ vehicles. Perfect for HVAC, plumbing, electrical, landscaping, and delivery companies.",
    sedan: "$50+",
    suv: "$60+",
    truck: "$75+",
    duration: "Per vehicle",
    includes: [
      "Scheduled lot visits",
      "Exterior wash and dry",
      "Interior vacuum and wipe-down",
      "Window cleaning",
      "Volume pricing for 3+ vehicles",
      "Monthly invoicing available",
    ],
  },
];

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
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Premium Detailing, <span className="text-gradient-accent">Your Way</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Visit our shop in Hamilton or we come to you. Every service uses premium products
            and professional equipment. Prices are starting rates for sedans.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <span className="text-accent text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                      {service.name}
                    </h2>
                    <p className="text-accent-light/70 text-sm mt-1 font-[family-name:var(--font-body)]">{service.tagline}</p>
                  </div>

                  {/* Price grid */}
                  <div className="flex gap-4 shrink-0">
                    {[
                      { label: "Sedan", price: service.sedan },
                      { label: "SUV", price: service.suv },
                      { label: "Truck", price: service.truck },
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
          ))}
        </div>

        {/* Mobile fee notice */}
        <div className="max-w-5xl mx-auto px-6 mt-8">
          <div className="glass-card rounded-2xl p-6 text-center">
            <p className="text-white/50 text-sm font-[family-name:var(--font-body)]">
              <span className="text-accent font-semibold">Mobile Service Add-On:</span> We come to you anywhere in NJ. $50 service fee applies for locations beyond 25 miles from our Hamilton shop.
            </p>
          </div>
        </div>

        {/* CTA */}
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
              href="tel:+16097318641"
              className="flex items-center gap-2 px-10 py-4 text-silver font-semibold text-sm tracking-wider cursor-pointer hover:text-accent-light transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL US
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
