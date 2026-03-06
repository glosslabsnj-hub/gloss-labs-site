import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Gloss Labs Premium Auto Detailing",
  description:
    "Express wash, interior detail, full detail, ceramic coating, paint correction, and fleet services. Mobile detailing in Hamilton NJ.",
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
      <section className="pt-32 pb-16 bg-black relative">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Premium Detailing, <span className="text-gradient-gold">Your Way</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            From a quick refresh to a full transformation, we have the service
            your vehicle needs. All prices are starting rates for sedans.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <span className="text-gold text-xs tracking-[0.2em] uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                      {service.name}
                    </h2>
                    <p className="text-gold/70 text-sm mt-1">{service.tagline}</p>
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
                        className="text-center px-4 py-3 rounded-xl bg-gold/5 border border-gold/10"
                      >
                        <span className="text-white/40 text-xs uppercase tracking-wider block">
                          {tier.label}
                        </span>
                        <span className="text-gold font-bold text-lg">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-white/70 text-xs uppercase tracking-wider mb-3">
                      What&apos;s Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-white/40 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-gold shrink-0 mt-0.5"
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

                  <div className="text-sm text-white/30 md:text-right shrink-0">
                    <span className="block">Duration</span>
                    <span className="text-gold font-semibold">{service.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
          <p className="text-white/40 text-sm mb-6">
            Not sure which service is right for you? We&apos;ll help you decide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-300 cursor-pointer"
            >
              BOOK NOW
            </Link>
            <Link
              href="/quote"
              className="px-10 py-4 border border-gold/30 text-gold font-semibold text-sm tracking-wider rounded-full hover:bg-gold/10 transition-all duration-300 cursor-pointer"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
