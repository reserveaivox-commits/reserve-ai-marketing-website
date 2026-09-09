"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  hoverScale?: number;
}

export default function AnimatedCard({
  children,
  delay = 0,
  direction = "up",
  className = "",
  hoverScale = 1.02,
}: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
