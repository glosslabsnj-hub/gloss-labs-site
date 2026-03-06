"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Delay in ms */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** Distance to travel in px */
  distance?: number;
  /** Trigger threshold (0-1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
  /** Scale effect (1 = no scale) */
  scale?: number;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 800,
  distance = 40,
  threshold = 0.15,
  once = true,
  scale = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    const scaleStr = scale !== 1 ? ` scale(${scale})` : "";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)${scaleStr}`;
      case "down":
        return `translate3d(0, -${distance}px, 0)${scaleStr}`;
      case "left":
        return `translate3d(${distance}px, 0, 0)${scaleStr}`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)${scaleStr}`;
      case "none":
        return `translate3d(0, 0, 0)${scaleStr}`;
      default:
        return `translate3d(0, ${distance}px, 0)${scaleStr}`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Stagger children with sequential delays
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  direction = "up" as ScrollRevealProps["direction"],
  baseDelay = 0,
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: ScrollRevealProps["direction"];
  baseDelay?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal key={i} delay={baseDelay + i * staggerDelay} direction={direction}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
