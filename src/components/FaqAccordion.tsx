"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FaqAccordion() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = Array.from({ length: 10 }, (_, i) => ({
    question: t(`q${i + 1}`),
    answer: t(`a${i + 1}`),
  }));

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`faq-item rounded-xl overflow-hidden border border-white/8 bg-white/4 transition-shadow ${
            openIndex === idx ? "open shadow-[0_18px_40px_rgba(0,0,0,0.2)]" : ""
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
            aria-expanded={openIndex === idx}
          >
            <span className="pr-2 font-semibold text-white sm:pr-4">
              {item.question}
            </span>
            <svg
              className="faq-icon w-5 h-5 text-[#8effa8] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="faq-answer">
            <div className="px-4 pb-4 leading-relaxed text-zinc-300 sm:px-6 sm:pb-5">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
