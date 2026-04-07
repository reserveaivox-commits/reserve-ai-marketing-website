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
          className={`faq-item bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-md ${
            openIndex === idx ? "open shadow-md" : ""
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-brand-dark pr-4">
              {item.question}
            </span>
            <svg
              className="faq-icon w-5 h-5 text-accent-purple flex-shrink-0"
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
            <div className="px-6 pb-5 text-zinc-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
