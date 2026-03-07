"use client";

import { useState, useEffect, useCallback } from "react";

interface ServiceVariation {
  id: string;
  serviceName: string;
  variationName: string;
  priceCents: number | null;
  durationMinutes: number;
}

interface AddOn {
  id: string;
  name: string;
  variationName: string;
  priceCents: number | null;
  durationMinutes: number;
}

interface TimeSlot {
  start_at: string;
  appointment_segments: { team_member_id: string }[];
}

interface SelectedAddOn {
  addOn: AddOn;
}

// ── Helpers ──

function formatPrice(cents: number | null) {
  if (cents === null) return "Quote";
  return `$${Math.round(cents / 100)}`;
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function getDateRange() {
  const dates: string[] = [];
  const now = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    dates.push(d.toISOString().split("T")[0]);
  }
  return dates;
}

function titleCase(s: string) {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

// Parse Paint Correction variation: "1 STEP (SEDAN)" -> { tier: "1-Step", vehicle: "SEDAN" }
function parsePaintCorrection(name: string) {
  const match = name.match(/^(\d)\s*STEP\s*\((.+)\)$/i);
  if (match) return { tier: `${match[1]}-Step`, vehicle: match[2].trim() };
  return null;
}

// Parse Ceramic Coating variation: "PREP ONLY (1 YEAR)" or "1 STEP + 3 YEAR"
function parseCeramicCoating(name: string) {
  const prepMatch = name.match(/^PREP ONLY\s*\((\d+)\s*YEAR\)$/i);
  if (prepMatch) return { tier: "Prep Only", duration: `${prepMatch[1]} Year` };
  const stepMatch = name.match(/^(\d)\s*STEP\s*\+\s*(\d+)\s*YEAR$/i);
  if (stepMatch) return { tier: `${stepMatch[1]}-Step Correction`, duration: `${stepMatch[2]} Year` };
  return null;
}

// Simple services: just Sedan / SUV / XXL/TRUCK
function isSimpleService(serviceName: string) {
  return !["PAINT CORRECTION", "CERAMIC COATING"].includes(serviceName);
}

// Group simple service variations by vehicle size, ordered: Sedan -> SUV -> XXL/Truck
function orderVehicleSizes(variations: ServiceVariation[]) {
  const order = ["SEDAN", "SUV", "XXL/TRUCK"];
  return [...variations].sort((a, b) => {
    const ai = order.indexOf(a.variationName.toUpperCase());
    const bi = order.indexOf(b.variationName.toUpperCase());
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

// Format phone input as (XXX) XXX-XXXX
function formatPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ── Main ──

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<ServiceVariation[]>([]);
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [loading, setLoading] = useState(true);

  // Step 1: Service selection
  const [selectedService, setSelectedService] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedVariation, setSelectedVariation] = useState<ServiceVariation | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOn[]>([]);

  // Step 2: Date & time
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  // Step 3: Customer info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [locationType, setLocationType] = useState<"BUSINESS_LOCATION" | "CUSTOMER_LOCATION">("BUSINESS_LOCATION");
  const [customerAddress, setCustomerAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [booking, setBooking] = useState(false);
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState("");

  // Load services and auto-select from URL param
  useEffect(() => {
    fetch("/api/availability")
      .then((r) => r.json())
      .then((d) => {
        const svcs = d.services || [];
        setServices(svcs);
        setAddOns(d.addOns || []);
        setLoading(false);

        // Auto-select service from URL ?service=INTERIOR+DETAIL
        const params = new URLSearchParams(window.location.search);
        const preselect = params.get("service");
        if (preselect) {
          const match = svcs.find((s: ServiceVariation) => s.serviceName === preselect);
          if (match) {
            setSelectedService(preselect);
            // For simple services with one variation, auto-select it
            const vars = svcs.filter((s: ServiceVariation) => s.serviceName === preselect);
            if (isSimpleService(preselect) && vars.length === 1) {
              setSelectedVariation(vars[0]);
            }
          }
        }
      })
      .catch(() => setLoading(false));
  }, []);

  // Load availability
  const loadSlots = useCallback(async (variationId: string, date: string) => {
    setSlotsLoading(true);
    setSlots([]);
    setSelectedSlot(null);
    try {
      const res = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceVariationId: variationId, startDate: date, endDate: date }),
      });
      const data = await res.json();
      setSlots(data.availabilities || []);
    } catch {
      setSlots([]);
    }
    setSlotsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedVariation && selectedDate) {
      loadSlots(selectedVariation.id, selectedDate);
    }
  }, [selectedVariation, selectedDate, loadSlots]);

  // ── Derived data ──

  // Group services by name
  const serviceNames = [...new Set(services.map((s) => s.serviceName))];

  // For the selected service, get variations
  const serviceVariations = services.filter((s) => s.serviceName === selectedService);

  // Paint Correction tiers
  const paintTiers = selectedService === "PAINT CORRECTION"
    ? [...new Set(serviceVariations.map((v) => parsePaintCorrection(v.variationName)?.tier).filter(Boolean))] as string[]
    : [];

  // Paint Correction vehicles for selected tier
  const paintVehicles = selectedService === "PAINT CORRECTION" && selectedTier
    ? orderVehicleSizes(serviceVariations.filter((v) => {
        const p = parsePaintCorrection(v.variationName);
        return p && p.tier === selectedTier;
      }))
    : [];

  // Ceramic Coating tiers
  const ceramicTiers = selectedService === "CERAMIC COATING"
    ? [...new Set(serviceVariations.map((v) => parseCeramicCoating(v.variationName)?.tier).filter(Boolean))] as string[]
    : [];

  // Ceramic Coating durations for selected tier
  const ceramicDurations = selectedService === "CERAMIC COATING" && selectedTier
    ? serviceVariations.filter((v) => {
        const c = parseCeramicCoating(v.variationName);
        return c && c.tier === selectedTier;
      }).sort((a, b) => {
        const ca = parseCeramicCoating(a.variationName);
        const cb = parseCeramicCoating(b.variationName);
        return parseInt(ca?.duration || "0") - parseInt(cb?.duration || "0");
      })
    : [];

  // Simple service vehicles
  const simpleVehicles = isSimpleService(selectedService)
    ? orderVehicleSizes(serviceVariations)
    : [];

  // Add-on total
  const addOnTotal = selectedAddOns.reduce((sum, a) => sum + (a.addOn.priceCents || 0), 0);
  const serviceTotal = (selectedVariation?.priceCents || 0) + addOnTotal;

  function toggleAddOn(addOn: AddOn) {
    setSelectedAddOns((prev) => {
      const exists = prev.find((a) => a.addOn.id === addOn.id);
      if (exists) return prev.filter((a) => a.addOn.id !== addOn.id);
      // If same add-on name but different variation, replace
      const filtered = prev.filter((a) => a.addOn.name !== addOn.name);
      return [...filtered, { addOn }];
    });
  }

  function resetService() {
    setSelectedService("");
    setSelectedTier("");
    setSelectedVariation(null);
    setSelectedAddOns([]);
  }

  async function handleBook() {
    if (!selectedVariation || !selectedSlot) return;
    setBooking(true);
    setError("");
    try {
      // Build note with add-ons and location info
      const noteParts: string[] = [];
      if (locationType === "CUSTOMER_LOCATION" && customerAddress) {
        noteParts.push(`Mobile service at: ${customerAddress}`);
      }
      if (selectedAddOns.length > 0) {
        const addOnList = selectedAddOns
          .map((a) => `${a.addOn.name} (${a.addOn.variationName}) - ${formatPrice(a.addOn.priceCents)}`)
          .join(", ");
        noteParts.push(`Add-ons: ${addOnList}`);
      }
      if (notes) noteParts.push(`Notes: ${notes}`);
      const customerNote = noteParts.join(". ");

      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceVariationId: selectedVariation.id,
          teamMemberId: selectedSlot.appointment_segments?.[0]?.team_member_id || "",
          startAt: selectedSlot.start_at,
          customerNote,
          firstName,
          lastName,
          email,
          phone,
          locationType,
        }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setBooked(true);
      }
    } catch {
      setError("Something went wrong. Please try again or call us at (609) 944-9705.");
    }
    setBooking(false);
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors duration-300 text-sm font-[family-name:var(--font-body)]";

  const btnClass = (active: boolean) =>
    `text-left px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${
      active
        ? "border-accent/50 bg-accent/10 text-white"
        : "border-white/[0.06] bg-white/[0.02] text-white/60 hover:border-white/15 hover:text-white"
    }`;

  const vehicleBtnClass = (active: boolean) =>
    `flex-1 px-3 py-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
      active
        ? "border-accent/50 bg-accent/10"
        : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
    }`;

  // ─── SUCCESS ───
  if (booked) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You&apos;re Booked!</h3>
        <p className="text-white/50 font-[family-name:var(--font-body)] mb-1">
          {titleCase(selectedVariation?.serviceName || "")}
        </p>
        <p className="text-accent font-[family-name:var(--font-body)] mb-1">
          {selectedSlot && formatDate(selectedSlot.start_at)} at {selectedSlot && formatTime(selectedSlot.start_at)}
        </p>
        <p className="text-white/40 text-sm font-[family-name:var(--font-body)] mb-1">
          {locationType === "CUSTOMER_LOCATION" ? `Mobile service at: ${customerAddress}` : "At our shop: 18 Yorkshire Rd, Hamilton NJ"}
        </p>
        {selectedAddOns.length > 0 && (
          <p className="text-white/40 text-sm font-[family-name:var(--font-body)] mb-1">
            + {selectedAddOns.map((a) => a.addOn.name).join(", ")}
          </p>
        )}
        <p className="text-white/50 text-lg font-bold mb-4">{formatPrice(serviceTotal)}</p>
        <p className="text-white/30 text-sm font-[family-name:var(--font-body)]">
          A confirmation has been sent to {email}. See you soon!
        </p>
      </div>
    );
  }

  // ─── LOADING ───
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/40 text-sm font-[family-name:var(--font-body)]">Loading services...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <button
              onClick={() => { if (s < step) setStep(s); }}
              disabled={s >= step}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-300 ${
                s < step ? "bg-accent text-white cursor-pointer hover:bg-accent-light" :
                s === step ? "bg-accent text-white" : "bg-white/5 text-white/30"
              }`}
            >
              {step > s ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 3 && <div className={`flex-1 h-px transition-colors duration-300 ${step > s ? "bg-accent/50" : "bg-white/10"}`} />}
          </div>
        ))}
      </div>

      {/* Step labels */}
      <div className="flex mb-8">
        {["Service", "Date & Time", "Your Info"].map((label, i) => (
          <button
            key={label}
            onClick={() => { if (i + 1 < step) setStep(i + 1); }}
            disabled={i + 1 >= step}
            className={`flex-1 text-center cursor-default ${i + 1 < step ? "cursor-pointer" : ""}`}
          >
            <span className={`text-xs tracking-wider font-[family-name:var(--font-body)] ${step >= i + 1 ? "text-accent" : "text-white/20"}`}>
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* ─── STEP 1: SERVICE ─── */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mb-2">Choose Your Service</h3>

          {/* Service buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {serviceNames.map((name) => (
              <button
                key={name}
                onClick={() => {
                  if (selectedService === name) return;
                  setSelectedService(name);
                  setSelectedTier("");
                  setSelectedVariation(null);
                  // Auto-select if simple service with one variation
                  const vars = services.filter((s) => s.serviceName === name);
                  if (isSimpleService(name) && vars.length === 1) setSelectedVariation(vars[0]);
                }}
                className={btnClass(selectedService === name)}
              >
                <span className="text-sm font-semibold">{titleCase(name)}</span>
              </button>
            ))}
          </div>

          {/* ── Simple service: Vehicle size ── */}
          {selectedService && isSimpleService(selectedService) && simpleVehicles.length > 1 && (
            <div className="mt-4 animate-fade-in">
              <p className="text-white/40 text-xs mb-2 font-[family-name:var(--font-body)]">Select your vehicle size:</p>
              <div className="flex gap-2">
                {simpleVehicles.map((v) => (
                  <button key={v.id} onClick={() => setSelectedVariation(v)} className={vehicleBtnClass(selectedVariation?.id === v.id)}>
                    <span className="block text-xs text-white/50 font-[family-name:var(--font-body)]">{titleCase(v.variationName)}</span>
                    <span className="block text-sm font-bold text-accent mt-0.5">{formatPrice(v.priceCents)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Paint Correction: Tier -> Vehicle ── */}
          {selectedService === "PAINT CORRECTION" && (
            <div className="mt-4 animate-fade-in space-y-4">
              <div>
                <p className="text-white/40 text-xs mb-2 font-[family-name:var(--font-body)]">Select correction level:</p>
                <div className="flex gap-2">
                  {paintTiers.map((tier) => (
                    <button
                      key={tier}
                      onClick={() => { setSelectedTier(tier); setSelectedVariation(null); }}
                      className={`flex-1 px-4 py-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        selectedTier === tier
                          ? "border-accent/50 bg-accent/10"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                      }`}
                    >
                      <span className="block text-sm font-bold text-white">{tier}</span>
                      <span className="block text-[10px] text-white/30 mt-1 font-[family-name:var(--font-body)]">
                        {tier === "1-Step" ? "Light swirls & scratches" : "Heavy defects & oxidation"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedTier && paintVehicles.length > 0 && (
                <div className="animate-fade-in">
                  <p className="text-white/40 text-xs mb-2 font-[family-name:var(--font-body)]">Select your vehicle size:</p>
                  <div className="flex gap-2">
                    {paintVehicles.map((v) => {
                      const parsed = parsePaintCorrection(v.variationName);
                      return (
                        <button key={v.id} onClick={() => setSelectedVariation(v)} className={vehicleBtnClass(selectedVariation?.id === v.id)}>
                          <span className="block text-xs text-white/50 font-[family-name:var(--font-body)]">{titleCase(parsed?.vehicle || v.variationName)}</span>
                          <span className="block text-sm font-bold text-accent mt-0.5">{formatPrice(v.priceCents)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Ceramic Coating: Tier -> Duration ── */}
          {selectedService === "CERAMIC COATING" && (
            <div className="mt-4 animate-fade-in space-y-4">
              <div>
                <p className="text-white/40 text-xs mb-2 font-[family-name:var(--font-body)]">Select package:</p>
                <div className="grid grid-cols-1 gap-2">
                  {ceramicTiers.map((tier) => {
                    const tierVariations = serviceVariations.filter((v) => {
                      const c = parseCeramicCoating(v.variationName);
                      return c && c.tier === tier;
                    });
                    const minPrice = Math.min(...tierVariations.map((v) => v.priceCents || 0));
                    return (
                      <button
                        key={tier}
                        onClick={() => { setSelectedTier(tier); setSelectedVariation(null); }}
                        className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          selectedTier === tier
                            ? "border-accent/50 bg-accent/10"
                            : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                        }`}
                      >
                        <span className="block text-sm font-bold text-white">{tier}</span>
                        <span className="block text-[10px] text-white/30 mt-0.5 font-[family-name:var(--font-body)]">
                          {tier === "Prep Only" && "Coating only, no paint correction included"}
                          {tier === "1-Step Correction" && "Light correction + ceramic coating"}
                          {tier === "2-Step Correction" && "Full correction + ceramic coating"}
                        </span>
                        <span className="block text-xs text-accent mt-1 font-[family-name:var(--font-body)]">From {formatPrice(minPrice)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedTier && ceramicDurations.length > 0 && (
                <div className="animate-fade-in">
                  <p className="text-white/40 text-xs mb-2 font-[family-name:var(--font-body)]">Select coating durability:</p>
                  <div className="flex gap-2">
                    {ceramicDurations.map((v) => {
                      const parsed = parseCeramicCoating(v.variationName);
                      return (
                        <button key={v.id} onClick={() => setSelectedVariation(v)} className={vehicleBtnClass(selectedVariation?.id === v.id)}>
                          <span className="block text-xs text-white/50 font-[family-name:var(--font-body)]">{parsed?.duration}</span>
                          <span className="block text-sm font-bold text-accent mt-0.5">{formatPrice(v.priceCents)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Add-ons ── */}
          {selectedVariation && addOns.length > 0 && (
            <div className="mt-6 pt-5 border-t border-white/[0.06] animate-fade-in">
              <p className="text-white/60 text-xs tracking-wider uppercase mb-3 font-[family-name:var(--font-body)]">Optional Add-ons</p>
              <div className="grid grid-cols-1 gap-2">
                {/* Group add-ons by name */}
                {[...new Set(addOns.map((a) => a.name))].map((addOnName) => {
                  const variants = addOns.filter((a) => a.name === addOnName);
                  const isSelected = selectedAddOns.some((a) => a.addOn.name === addOnName);
                  const selectedVariant = selectedAddOns.find((a) => a.addOn.name === addOnName)?.addOn;

                  if (variants.length === 1) {
                    const ao = variants[0];
                    const active = selectedAddOns.some((a) => a.addOn.id === ao.id);
                    return (
                      <button
                        key={ao.id}
                        onClick={() => toggleAddOn(ao)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                          active
                            ? "border-accent/50 bg-accent/10"
                            : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                            active ? "border-accent bg-accent" : "border-white/20"
                          }`}>
                            {active && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-white/80 font-[family-name:var(--font-body)]">{titleCase(ao.name)}</span>
                        </div>
                        <span className="text-sm font-bold text-accent">{formatPrice(ao.priceCents)}</span>
                      </button>
                    );
                  }

                  // Multi-variant add-on (e.g., Pet Hair: Moderate/Heavy)
                  return (
                    <div key={addOnName} className={`rounded-xl border transition-all duration-200 ${
                      isSelected ? "border-accent/50 bg-accent/10" : "border-white/[0.06] bg-white/[0.02]"
                    }`}>
                      <button
                        onClick={() => {
                          if (isSelected) {
                            setSelectedAddOns((prev) => prev.filter((a) => a.addOn.name !== addOnName));
                          } else {
                            toggleAddOn(variants[0]);
                          }
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 cursor-pointer"
                      >
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? "border-accent bg-accent" : "border-white/20"
                        }`}>
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-white/80 font-[family-name:var(--font-body)]">{titleCase(addOnName)}</span>
                      </button>
                      {isSelected && (
                        <div className="flex gap-2 px-4 pb-3">
                          {variants.map((ao) => (
                            <button
                              key={ao.id}
                              onClick={() => toggleAddOn(ao)}
                              className={`flex-1 px-2 py-2 rounded-lg border text-center text-xs transition-all duration-200 cursor-pointer ${
                                selectedVariant?.id === ao.id
                                  ? "border-accent/50 bg-accent/15 text-accent"
                                  : "border-white/10 text-white/50 hover:border-white/20"
                              }`}
                            >
                              <span className="block font-[family-name:var(--font-body)]">{titleCase(ao.variationName)}</span>
                              <span className="block font-bold mt-0.5">{formatPrice(ao.priceCents)}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Continue button */}
          {selectedVariation && (
            <div className="pt-4 animate-fade-in">
              {selectedAddOns.length > 0 && (
                <div className="flex justify-between text-sm mb-3 px-1 font-[family-name:var(--font-body)]">
                  <span className="text-white/40">Estimated total</span>
                  <span className="text-accent font-bold">{formatPrice(serviceTotal)}</span>
                </div>
              )}
              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer"
              >
                CONTINUE
              </button>
            </div>
          )}
        </div>
      )}

      {/* ─── STEP 2: DATE & TIME ─── */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white">Pick a Date &amp; Time</h3>
            <button onClick={() => setStep(1)} className="text-accent text-xs hover:underline cursor-pointer font-[family-name:var(--font-body)]">
              &larr; Change service
            </button>
          </div>

          {/* Selected service summary */}
          <div className="px-4 py-3 rounded-xl bg-accent/5 border border-accent/10">
            <p className="text-sm text-white font-semibold">
              {titleCase(selectedVariation?.serviceName || "")}
              {selectedVariation && (
                <span className="text-white/40 font-normal">
                  {" "}&middot; {(() => {
                    if (selectedService === "PAINT CORRECTION") {
                      const p = parsePaintCorrection(selectedVariation.variationName);
                      return p ? `${p.tier}, ${titleCase(p.vehicle)}` : selectedVariation.variationName;
                    }
                    if (selectedService === "CERAMIC COATING") {
                      const c = parseCeramicCoating(selectedVariation.variationName);
                      return c ? `${c.tier}, ${c.duration}` : selectedVariation.variationName;
                    }
                    return titleCase(selectedVariation.variationName);
                  })()}
                </span>
              )}
            </p>
            <p className="text-accent text-sm font-bold">
              {formatPrice(serviceTotal)}
              {selectedAddOns.length > 0 && (
                <span className="text-white/30 font-normal text-xs"> (incl. {selectedAddOns.length} add-on{selectedAddOns.length > 1 ? "s" : ""})</span>
              )}
            </p>
          </div>

          {/* Date selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
            {getDateRange().map((date) => {
              const d = new Date(date + "T12:00:00");
              const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
              const dayNum = d.getDate();
              return (
                <button
                  key={date}
                  disabled={false}
                  onClick={() => setSelectedDate(date)}
                  className={`shrink-0 w-14 py-3 rounded-xl border text-center transition-all duration-200 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed ${
                    selectedDate === date
                      ? "border-accent/50 bg-accent/10"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                  }`}
                >
                  <span className="block text-[10px] text-white/40 font-[family-name:var(--font-body)]">{dayName}</span>
                  <span className="block text-lg font-bold text-white mt-0.5">{dayNum}</span>
                </button>
              );
            })}
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div>
              {slotsLoading ? (
                <div className="text-center py-8">
                  <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-white/30 text-xs font-[family-name:var(--font-body)]">Checking availability...</p>
                </div>
              ) : slots.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-white/30 text-sm font-[family-name:var(--font-body)]">No availability on this date. Try another day.</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot.start_at}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-2 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                        selectedSlot?.start_at === slot.start_at
                          ? "border-accent/50 bg-accent/10 text-accent"
                          : "border-white/[0.06] bg-white/[0.02] text-white/60 hover:border-white/15 hover:text-white"
                      }`}
                    >
                      {formatTime(slot.start_at)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Next */}
          <div className="pt-2">
            <button
              disabled={!selectedSlot}
              onClick={() => setStep(3)}
              className="w-full py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full disabled:opacity-30 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
            >
              CONTINUE
            </button>
          </div>
        </div>
      )}

      {/* ─── STEP 3: CUSTOMER INFO ─── */}
      {step === 3 && (
        <div className="space-y-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white">Your Information</h3>
            <button onClick={() => setStep(2)} className="text-accent text-xs hover:underline cursor-pointer font-[family-name:var(--font-body)]">
              &larr; Change time
            </button>
          </div>

          {/* Booking summary */}
          <div className="px-4 py-3 rounded-xl bg-accent/5 border border-accent/10 space-y-1">
            <p className="text-sm text-white font-semibold">
              {titleCase(selectedVariation?.serviceName || "")}
            </p>
            <p className="text-white/40 text-xs font-[family-name:var(--font-body)]">
              {(() => {
                if (selectedService === "PAINT CORRECTION") {
                  const p = parsePaintCorrection(selectedVariation?.variationName || "");
                  return p ? `${p.tier}, ${titleCase(p.vehicle)}` : selectedVariation?.variationName;
                }
                if (selectedService === "CERAMIC COATING") {
                  const c = parseCeramicCoating(selectedVariation?.variationName || "");
                  return c ? `${c.tier}, ${c.duration}` : selectedVariation?.variationName;
                }
                return titleCase(selectedVariation?.variationName || "");
              })()}
            </p>
            {selectedAddOns.length > 0 && (
              <p className="text-white/30 text-xs font-[family-name:var(--font-body)]">
                + {selectedAddOns.map((a) => `${titleCase(a.addOn.name)} (${formatPrice(a.addOn.priceCents)})`).join(", ")}
              </p>
            )}
            <p className="text-accent text-sm">
              {selectedSlot && formatDate(selectedSlot.start_at)} at {selectedSlot && formatTime(selectedSlot.start_at)}
              <span className="text-white/30"> &middot; {formatPrice(serviceTotal)}</span>
            </p>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">First Name</label>
              <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" className={inputClass} />
            </div>
            <div>
              <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">Last Name</label>
              <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Smith" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className={inputClass} />
          </div>

          <div>
            <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">Phone</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
              placeholder="(609) 555-0123"
              className={inputClass}
            />
          </div>

          {/* Location Type */}
          <div>
            <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">Service Location</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { setLocationType("BUSINESS_LOCATION"); setCustomerAddress(""); }}
                className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  locationType === "BUSINESS_LOCATION"
                    ? "border-accent/50 bg-accent/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                }`}
              >
                <span className="block text-sm font-semibold text-white">Our Shop</span>
                <span className="block text-[10px] text-white/30 mt-0.5 font-[family-name:var(--font-body)]">18 Yorkshire Rd, Hamilton NJ</span>
              </button>
              <button
                type="button"
                onClick={() => setLocationType("CUSTOMER_LOCATION")}
                className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  locationType === "CUSTOMER_LOCATION"
                    ? "border-accent/50 bg-accent/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                }`}
              >
                <span className="block text-sm font-semibold text-white">Mobile</span>
                <span className="block text-[10px] text-white/30 mt-0.5 font-[family-name:var(--font-body)]">We come to you (+$50 if 25mi+)</span>
              </button>
            </div>
          </div>

          {locationType === "CUSTOMER_LOCATION" && (
            <div className="animate-fade-in">
              <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">Your Address</label>
              <input
                type="text"
                required
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                placeholder="123 Main St, City, NJ 08XXX"
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label className="block text-white/40 text-xs mb-1.5 font-[family-name:var(--font-body)]">Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Anything we should know? Vehicle color, condition, special requests..."
              className={inputClass}
            />
          </div>

          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-[family-name:var(--font-body)]">
              {error}
            </div>
          )}

          <button
            disabled={booking || !firstName || !lastName || !email || !phone || (locationType === "CUSTOMER_LOCATION" && !customerAddress)}
            onClick={handleBook}
            className="w-full py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold text-sm tracking-wider rounded-full disabled:opacity-30 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
          >
            {booking ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                BOOKING...
              </span>
            ) : (
              "CONFIRM BOOKING"
            )}
          </button>

          <p className="text-white/20 text-xs text-center font-[family-name:var(--font-body)]">
            By booking, you agree to our cancellation policy. Cancellations must be made at least 2 hours before your appointment.
          </p>
        </div>
      )}
    </div>
  );
}
