"use client";

import Image from "next/image";

interface BenefitShowcaseProps {
  title: string;
  subtitle?: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
    highlight?: string;
  }>;
  accentColor: string;
  backgroundColor?: string;
}

export default function BenefitShowcase({
  title,
  subtitle,
  benefits,
  accentColor,
  backgroundColor = "from-white/5 to-white/2",
}: BenefitShowcaseProps) {
  return (
    <section className="section-flow-light py-16 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="section-label mb-4" style={{ color: accentColor }}>
            WHY CHOOSE US
          </p>
          <h2 className="heading-serif mb-6 text-3xl text-white md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="h-full">
              <div
                className={`group relative rounded-2xl border border-white/10 p-6 md:p-8 h-full transition-all duration-500 hover:border-white/30 cursor-default overflow-hidden bg-gradient-to-br ${backgroundColor}`}
              >
                {/* Hover background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-5 inline-flex">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg text-2xl"
                      style={{
                        background: `${accentColor}20`,
                        borderColor: `${accentColor}40`,
                        border: "1px solid",
                      }}
                    >
                      {/* Check if icon is an emoji or an image path */}
                      {benefit.icon.startsWith("/") ? (
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={28}
                          height={28}
                          className="brightness-0 invert opacity-90"
                        />
                      ) : (
                        <span>{benefit.icon}</span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:opacity-100">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4 group-hover:text-zinc-200 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Highlight Badge */}
                  {benefit.highlight && (
                    <div className="inline-flex items-center gap-2 pt-4 border-t border-white/10">
                      <span>✨</span>
                      <span
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: accentColor }}
                      >
                        {benefit.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 20px ${accentColor}40`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
