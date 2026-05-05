"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MeltingPanelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function MeltingPanel({ children, className = "", id }: MeltingPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track the panel's vertical scroll progress in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  // Map scroll progress to Opacity (0.3 -> 1 -> 0.3)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.3, 1, 1, 0.3]
  );

  // Map scroll progress to Blur value in pixels (12px -> 0px -> 12px)
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [12, 0, 0, 12]
  );
  
  // Apply blur to filter
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Map scroll progress to Scale (0.96 -> 1 -> 0.96)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.96, 1, 1, 0.96]
  );

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ opacity, filter, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
