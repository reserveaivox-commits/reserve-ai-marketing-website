"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export type CarouselCard = {
  key: string;
  href: string;
  image: string;
  variant: string;
  textColor: string;
  title: string;
  desc: string;
  learnMore: string;
};

export default function ServicesCarousel({ services }: { services: CarouselCard[] }) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check right away
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // If the user drags left (x < 0) over a threshold, go next
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      if (activeIndex < services.length - 1) setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > swipeThreshold) {
      if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-[600px] md:h-[650px] flex items-center justify-center overflow-x-clip px-4">
      <AnimatePresence initial={false}>
        {services.map((svc, i) => {
          const relativeIndex = i - activeIndex;
          
          // Physics/Math for the Fan Arc
          const zIndex = 20 - Math.abs(relativeIndex);
          const scale = i === activeIndex ? 1.05 : 1 - Math.abs(relativeIndex) * 0.15;
          const rotateZ = relativeIndex * (isMobile ? 5 : 8); // Spread degrees
          const xOffset = isMobile ? 80 : 180;
          const x = relativeIndex * xOffset;
          const y = Math.abs(relativeIndex) * (isMobile ? 15 : 25); // Arc drop
          
          // Hide elements that are too far away
          const opacity = Math.abs(relativeIndex) >= 3 ? 0 : 1;
          const pointerEvents = opacity === 0 ? "none" : "auto";
          const isActive = i === activeIndex;

          const cardContent = (
            <>
              <div className="relative w-full h-[220px] md:h-[240px] overflow-hidden bg-zinc-100 border-b border-zinc-100/50">
                <div className="absolute inset-0 animate-image-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  <Image src={svc.image} alt={svc.title} fill className="service-card-image" />
                </div>
                <div className="service-card-overlay" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1 pointer-events-none">
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2 md:mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-zinc-500 line-clamp-3 mb-6 md:mb-8 leading-relaxed">
                  {svc.desc}
                </p>
                
                <div className={`mt-auto overflow-hidden inline-flex items-center font-bold ${svc.textColor}`}>
                  <div className="relative overflow-hidden inline-flex">
                    <span className="inline-block transition-transform duration-500 group-hover:-translate-y-[120%]">
                      {svc.learnMore}
                    </span>
                    <span className="absolute top-full left-0 text-brand-dark transition-transform duration-500 group-hover:-translate-y-full">
                      {svc.learnMore}
                    </span>
                  </div>
                  <span className="ml-2 font-black transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </>
          );

          return (
            <motion.div
              key={svc.key}
              className={`absolute w-full max-w-[320px] md:max-w-sm h-full max-h-[460px] md:max-h-[500px] rounded-[24px] overflow-hidden bg-white 
                          border border-zinc-100 shadow-2xl service-card-v2 ${svc.variant}
                          ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
              initial={false}
              animate={{ opacity, scale, x, y, rotateZ, zIndex }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={isActive ? handleDragEnd : undefined}
              onClick={() => {
                if (!isActive) setActiveIndex(i);
              }}
              style={{ 
                pointerEvents: pointerEvents as "auto" | "none",
                filter: isActive ? "brightness(1)" : "brightness(0.85) saturate(0.8)"
              }}
            >
              {isActive ? (
                <Link href={svc.href} className="group block h-full flex-col flex" draggable="false">
                  {cardContent}
                </Link>
              ) : (
                <div className="group block h-full flex-col flex pointer-events-none">
                  {cardContent}
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Pagination Indicators Container underneath (optional but good for UX) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {services.map((svc, i) => (
          <button 
            key={i} 
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex ? 'w-8 h-2.5 bg-brand-dark' : 'w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400'
            }`}
            aria-label={`Go to slide ${i+1}`}
          />
        ))}
      </div>
    </div>
  );
}
