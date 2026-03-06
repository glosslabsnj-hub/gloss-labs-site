"use client";

import { useEffect } from "react";

export function SquareBooking() {
  useEffect(() => {
    // Load Square Online booking widget
    const script = document.createElement("script");
    script.src = "https://square.site/appointments/buyer/widget/dvhqf1pkf4hbig/MLX0AATCTSD8M.js";
    script.async = true;
    document.getElementById("square-booking-container")?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <div
        id="square-booking-container"
        className="min-h-[600px] flex items-center justify-center"
      >
        {/* Loading state while Square widget loads */}
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm">Loading booking calendar...</p>
        </div>
      </div>
    </div>
  );
}
