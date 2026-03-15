"use client";

import Link from "next/link";
import { membershipPlans, membershipTerms, siteInfo } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function MembershipPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/luxury-detail.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0A1628]/60" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">
              Membership Plans
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
              Stay <span className="text-gradient-accent">Showroom Fresh</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Recurring maintenance detailing so your vehicle always looks its
              best. Lock in a plan, pick your schedule, and never worry about
              your car&apos;s appearance again.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {membershipPlans.map((plan, i) => (
              <ScrollReveal
                key={plan.name}
                delay={i * 120}
                direction="up"
                distance={30}
              >
                <div
                  className={`glass-card rounded-2xl overflow-hidden h-full flex flex-col ${
                    plan.highlight ? "ring-2 ring-accent/40" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="bg-gradient-to-r from-accent to-accent-light text-white text-center text-xs tracking-[0.2em] uppercase py-2 font-semibold font-[family-name:var(--font-body)]">
                      Best Value
                    </div>
                  )}

                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    {/* Plan name + frequency */}
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {plan.name}
                      </h2>
                      <p className="text-accent/70 text-sm mt-1 font-[family-name:var(--font-body)]">
                        {plan.frequency}
                      </p>
                    </div>

                    {/* Price grid */}
                    <div className="flex gap-3 mb-6">
                      {[
                        { label: "Sedan", price: plan.priceCar },
                        { label: "SUV", price: plan.priceSuv },
                        { label: "Truck", price: plan.priceTruck },
                      ].map((tier) => (
                        <div
                          key={tier.label}
                          className="flex-1 text-center px-3 py-3 rounded-xl bg-accent/5 border border-accent/10"
                        >
                          <span className="text-white/40 text-xs uppercase tracking-wider block font-[family-name:var(--font-body)]">
                            {tier.label}
                          </span>
                          <span className="text-accent font-bold text-lg">
                            {tier.price}
                          </span>
                          <span className="text-white/30 text-xs block font-[family-name:var(--font-body)]">
                            /mo
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                      {plan.description}
                    </p>

                    {/* Includes */}
                    <div className="flex-1">
                      <h3 className="text-white/70 text-xs uppercase tracking-wider mb-3 font-[family-name:var(--font-body)]">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-2">
                        {plan.includes.map((item) => (
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

                    {/* CTA */}
                    <div className="mt-8">
                      <a
                        href={`tel:${siteInfo.phoneLink}`}
                        className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                          plan.highlight
                            ? "bg-gradient-to-r from-accent to-accent-light text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                            : "border border-accent/30 text-accent-light hover:bg-accent/10"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        CALL TO ENROLL
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">
                How It Works
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                Simple, Consistent,{" "}
                <span className="text-gradient-accent">Effortless</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Choose Your Plan",
                description:
                  "Pick Monthly or Bi-Monthly based on how often you want your vehicle detailed. Call or email us to enroll.",
              },
              {
                step: "02",
                title: "Set Your Schedule",
                description:
                  "We lock in your preferred day and time. Visit our shop or we come to you. Same day, same quality, every time.",
              },
              {
                step: "03",
                title: "Stay Showroom Fresh",
                description:
                  "Your vehicle stays pristine year-round. Add on services anytime at your member discount.",
              },
            ].map((item, i) => (
              <ScrollReveal
                key={item.step}
                delay={i * 100}
                direction="up"
                distance={20}
              >
                <div className="glass-card rounded-2xl p-8 text-center h-full">
                  <span className="text-accent/30 text-4xl font-bold">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-[family-name:var(--font-body)]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Terms + FAQ */}
      <section className="pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-white mb-6">
                Membership Details
              </h3>
              <div className="space-y-4 text-white/50 text-sm font-[family-name:var(--font-body)]">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold shrink-0">Term:</span>
                  <span>{membershipTerms.commitment}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold shrink-0">
                    Minimum:
                  </span>
                  <span>{membershipTerms.minimum}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold shrink-0">
                    Billing:
                  </span>
                  <span>{membershipTerms.billing}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold shrink-0">Tax:</span>
                  <span>{membershipTerms.taxNote}</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-white/40 text-sm font-[family-name:var(--font-body)]">
                  {membershipTerms.enrollCta}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a
                    href={`tel:${siteInfo.phoneLink}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    CALL {siteInfo.phone}
                  </a>
                  <a
                    href={`mailto:${siteInfo.email}?subject=Membership%20Inquiry`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-accent/30 text-accent-light font-semibold text-sm tracking-wider rounded-full hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                  >
                    EMAIL US
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 bg-background">
        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">
              Not ready for a plan?{" "}
              <span className="text-gradient-accent">No problem.</span>
            </h2>
            <p className="text-white/40 text-sm mb-6 font-[family-name:var(--font-body)]">
              Book a single service anytime. You can always upgrade to a
              membership later.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
              >
                BOOK A SINGLE SERVICE
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-accent/30 text-accent-light font-semibold text-sm tracking-wider rounded-full hover:bg-accent/10 transition-all duration-300 cursor-pointer"
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
