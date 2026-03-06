import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Now | Gloss Labs Premium Auto Detailing",
  description: "Schedule your detailing appointment online. Pick a service, choose your time, and you're booked. Hamilton NJ and all of New Jersey.",
};

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-2xl mx-auto px-6">
          <a href="/services" className="inline-flex items-center gap-1 text-accent/60 hover:text-accent text-xs tracking-wider uppercase mb-4 transition-colors duration-300 font-[family-name:var(--font-body)]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            View Services
          </a>
          <div className="text-center">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">Schedule Online</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-3">
              Book Your <span className="text-gradient-accent">Detail</span>
            </h1>
            <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto font-[family-name:var(--font-body)]">
              Pick a service, choose your time, and you&apos;re booked.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
            <BookingForm />
          </div>

          {/* Fallback contact */}
          <div className="mt-8 text-center">
            <p className="text-white/25 text-xs font-[family-name:var(--font-body)] mb-3">
              Questions? Call or text us anytime.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="tel:+16097318641"
                className="flex items-center gap-1.5 text-white/40 hover:text-accent text-sm transition-colors duration-300 cursor-pointer font-[family-name:var(--font-body)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (609) 731-8641
              </a>
              <a
                href="sms:+16097318641"
                className="flex items-center gap-1.5 text-white/40 hover:text-accent text-sm transition-colors duration-300 cursor-pointer font-[family-name:var(--font-body)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                Text us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
