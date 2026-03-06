import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Free Quote | Gloss Labs Premium Auto Detailing",
  description: "Get a free, no-obligation quote for mobile auto detailing in Hamilton NJ. Tell us about your vehicle and we'll get back to you fast.",
};

export default function QuotePage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-black relative">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase">No Obligation</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Get a <span className="text-gradient-gold">Free Quote</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Tell us about your vehicle and the service you&apos;re interested in. We&apos;ll get back to you within a few hours with an exact price.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-2xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
