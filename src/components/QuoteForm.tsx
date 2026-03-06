"use client";

import { useState } from "react";

const vehicleTypes = ["Sedan", "SUV / Crossover", "Truck / Van", "Sports Car", "Other"];
const serviceOptions = [
  "Express Wash",
  "Interior Detail",
  "Full Detail",
  "Ceramic Coating",
  "Paint Correction",
  "Fleet Services",
  "Not sure / Need advice",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = `Quote Request: ${data.get("service")} - ${data.get("vehicle_year")} ${data.get("vehicle_make")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Vehicle: ${data.get("vehicle_year")} ${data.get("vehicle_make")} ${data.get("vehicle_model")}`,
      `Type: ${data.get("vehicle_type")}`,
      `Service: ${data.get("service")}`,
      `Location: ${data.get("location")}`,
      `Notes: ${data.get("notes")}`,
    ].join("\n");

    window.location.href = `mailto:glosslabsnj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quote Request Sent!</h3>
        <p className="text-white/40 font-[family-name:var(--font-body)]">
          We&apos;ll get back to you within a few hours with your personalized quote.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors duration-300 text-sm font-[family-name:var(--font-body)]";
  const labelClass = "block text-white/60 text-sm mb-2 font-[family-name:var(--font-body)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Your Name</label>
          <input id="name" name="name" type="text" required placeholder="John Smith" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input id="phone" name="phone" type="tel" required placeholder="(609) 555-0123" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required placeholder="john@example.com" className={inputClass} />
      </div>

      {/* Vehicle Info */}
      <div className="pt-2">
        <h3 className="text-white/70 text-xs uppercase tracking-wider mb-4 font-[family-name:var(--font-body)]">Vehicle Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="vehicle_year" className={labelClass}>Year</label>
            <input id="vehicle_year" name="vehicle_year" type="text" required placeholder="2024" className={inputClass} />
          </div>
          <div>
            <label htmlFor="vehicle_make" className={labelClass}>Make</label>
            <input id="vehicle_make" name="vehicle_make" type="text" required placeholder="BMW" className={inputClass} />
          </div>
          <div>
            <label htmlFor="vehicle_model" className={labelClass}>Model</label>
            <input id="vehicle_model" name="vehicle_model" type="text" required placeholder="M4" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="vehicle_type" className={labelClass}>Vehicle Type</label>
          <select id="vehicle_type" name="vehicle_type" required className={inputClass}>
            <option value="">Select type...</option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>Service Interested In</label>
        <select id="service" name="service" required className={inputClass}>
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Location preference */}
      <div>
        <label htmlFor="location" className={labelClass}>Preferred Location</label>
        <select id="location" name="location" required className={inputClass}>
          <option value="">Select preference...</option>
          <option value="In-Shop (Hamilton NJ)">In-Shop (18 Yorkshire Rd, Hamilton)</option>
          <option value="Mobile (You come to me)">Mobile (You come to me)</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelClass}>Additional Notes (optional)</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Anything else we should know? Special concerns, vehicle condition, preferred date..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer disabled:opacity-50"
      >
        {sending ? "SENDING..." : "REQUEST FREE QUOTE"}
      </button>

      <p className="text-white/20 text-xs text-center font-[family-name:var(--font-body)]">
        We typically respond within a few hours during business hours (Mon-Sat 8AM-6PM).
      </p>
    </form>
  );
}
