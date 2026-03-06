"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: string;
  label: string;
}

export function StatsCounter({ value, label }: StatsCounterProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-3xl md:text-4xl font-bold text-gradient-gold">{value}</p>
      <p className="text-white/40 text-sm mt-1 tracking-wider uppercase">{label}</p>
    </div>
  );
}
