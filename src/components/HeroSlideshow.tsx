"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero-mercedes.jpg",
  "/images/bmw-detail.jpg",
  "/images/matte-black.jpg",
  "/images/sports-car-dark.jpg",
  "/images/hero-car.jpg",
];

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === activeIndex ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            transform: i === activeIndex ? "scale(1.05)" : "scale(1)",
          }}
          aria-hidden={i !== activeIndex}
        />
      ))}
    </>
  );
}
