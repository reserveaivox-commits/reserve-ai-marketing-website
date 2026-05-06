"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  animation?: "bounce" | "pulse" | "rotate" | "shake";
  className?: string;
  delay?: number;
}

export default function AnimatedIcon({
  children,
  animation = "bounce",
  className = "",
  delay = 0,
}: AnimatedIconProps) {
  const getAnimation = () => {
    switch (animation) {
      case "bounce":
        return {
          y: [0, -8, 0],
          transition: { duration: 0.6, delay, repeat: Infinity, ease: "easeInOut" as const },
        };
      case "pulse":
        return {
          scale: [1, 1.15, 1],
          opacity: [1, 0.7, 1],
          transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" as const },
        };
      case "rotate":
        return {
          rotate: [0, 360],
          transition: { duration: 3, delay, repeat: Infinity, ease: "linear" as const },
        };
      case "shake":
        return {
          x: [0, -4, 4, -4, 4, 0],
          transition: { duration: 0.5, delay, repeat: Infinity, ease: "easeInOut" as const },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div className={className} animate={getAnimation()}>
      {children}
    </motion.div>
  );
}
