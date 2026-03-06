import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Free Quote | Gloss Labs Premium Auto Detailing",
  description: "Get a free, no-obligation quote for auto detailing in Hamilton NJ. In-shop or mobile service anywhere in New Jersey.",
};

export default function QuotePage() {
  return (
    <>
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">No Obligation</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Get a <span className="text-gradient-accent">Free Quote</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Tell us about your vehicle and the service you&apos;re interested in. We&apos;ll get back to you within a few hours with an exact price.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
