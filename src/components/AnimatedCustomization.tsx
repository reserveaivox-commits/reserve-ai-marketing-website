"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";

interface CustomizationExample {
  industry: string;
  example: string;
}

interface AnimatedCustomizationProps {
  badge: string;
  title: string;
  description: string;
  points: string[];
  examples: CustomizationExample[];
  accentColor: string;
  borderColor: string;
}

export default function AnimatedCustomization({
  badge,
  title,
  description,
  points,
  examples,
  accentColor,
  borderColor,
}: AnimatedCustomizationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Typewriter effect for examples
  useEffect(() => {
    const currentExample = examples[activeIndex]?.example || "";
    if (displayedText.length < currentExample.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentExample.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayedText, activeIndex, examples]);

  // Auto-rotate examples every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % examples.length);
      setDisplayedText("");
    }, 5000);
    return () => clearInterval(interval);
  }, [examples.length]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setDisplayedText("");
  };

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
            {/* Left Side - Features */}
            <ScrollAnimator direction="left">
              <div>
                <p className="section-label mb-4" style={{ color: accentColor }}>
                  {badge}
                </p>
                <h2 className="heading-serif mb-6 text-3xl text-white md:text-4xl">
                  {title}
                </h2>
                <p className="mb-8 leading-relaxed text-zinc-300">
                  {description}
                </p>

                {/* Animated Points */}
                <ul className="space-y-4">
                  {points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{
                          border: `2px solid ${accentColor}`,
                          color: accentColor,
                        }}
                      >
                        ✓
                      </motion.span>
                      <span className="text-sm text-zinc-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollAnimator>

            {/* Right Side - Interactive Examples */}
            <ScrollAnimator direction="right">
              <div className="rounded-2xl bg-brand-navy p-5 sm:p-8 md:p-10 border" style={{ borderColor }}>
                {/* Header */}
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: accentColor }}>
                  Industry Examples
                </h3>

                {/* Interactive Tabs */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {examples.map((example, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleTabClick(i)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeIndex === i
                          ? "text-white"
                          : "text-zinc-400 hover:text-zinc-300"
                      }`}
                      style={{
                        backgroundColor: activeIndex === i ? accentColor : "transparent",
                        border: `1px solid ${activeIndex === i ? accentColor : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      {example.industry}
                    </motion.button>
                  ))}
                </div>

                {/* Animated Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="min-h-[120px]"
                  >
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      {/* Typing Cursor Animation */}
                      <div className="flex items-start gap-2">
                        <span className="text-xl mt-1">💬</span>
                        <div className="flex-1">
                          <p className="text-sm text-white/90 leading-relaxed">
                            &ldquo;
                            <motion.span
                              key={`text-${activeIndex}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {displayedText}
                            </motion.span>
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                              className="inline-block w-1 h-4 bg-white ml-1"
                            />
                            &rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicator */}
                <div className="flex gap-1 mt-6">
                  {examples.map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeIndex === i ? 1 : 0.3 }}
                      transition={{ duration: 0.3 }}
                      className="h-1 flex-1 rounded-full"
                      style={{
                        backgroundColor:
                          activeIndex === i ? accentColor : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </div>
    </section>
  );
}
