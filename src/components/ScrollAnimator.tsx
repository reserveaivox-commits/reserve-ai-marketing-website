"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function ScrollAnimator({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.unobserve(el);
        }
      },
      { rootMargin: "-50px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass =
    direction === "left"
      ? "scroll-animate-left"
      : direction === "right"
      ? "scroll-animate-right"
      : "scroll-animate";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
