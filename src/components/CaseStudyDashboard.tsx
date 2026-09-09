"use client";

import { motion } from "framer-motion";

type Metric = {
  label: string;
  value: string;
};

type CaseStudyDashboardProps = {
  beforeTitle: string;
  afterTitle: string;
  beforeMetrics: Metric[];
  afterMetrics: Metric[];
};

const missedCallsBefore = [22, 21, 24, 20, 23, 22];
const reservations = [10, 14, 18, 24, 31, 38];
const weekLabels = ["W1", "W2", "W3", "W4", "W5", "W6"];

function buildPath(data: number[], width: number, height: number, maxValue: number) {
  return data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

export default function CaseStudyDashboard({
  beforeTitle,
  afterTitle,
  beforeMetrics,
  afterMetrics,
}: CaseStudyDashboardProps) {
  const lineWidth = 320;
  const lineHeight = 120;
  const maxMissedCalls = 26;
  const lineBefore = buildPath(missedCallsBefore, lineWidth, lineHeight, maxMissedCalls);
  const maxReservations = 40;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#09101d]">
      <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-2 md:p-8">
        <div className="rounded-[1.5rem] border border-red-400/10 bg-[linear-gradient(180deg,rgba(59,12,22,0.38),rgba(15,12,20,0.72))] p-5">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-300/85">
                {beforeTitle}
              </p>
              <p className="mt-2 text-sm text-zinc-400">Missed calls per week</p>
            </div>
            <div className="shrink-0 rounded-full border border-red-400/14 bg-red-400/8 px-3 py-1 text-sm font-semibold text-red-300">
              20+
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-white/6 bg-black/10 p-4">
            <svg viewBox={`0 0 ${lineWidth} ${lineHeight}`} className="h-28 w-full overflow-visible sm:h-36">
              <path d={lineBefore} fill="none" stroke="rgba(248,113,113,0.22)" strokeWidth="10" strokeLinecap="round" />
              <motion.path
                d={lineBefore}
                fill="none"
                stroke="rgba(248,113,113,0.92)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.55 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0.55, 1, 1] }}
                transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity, repeatDelay: 1.4 }}
              />
              {missedCallsBefore.map((value, index) => {
                const x = (index / (missedCallsBefore.length - 1)) * lineWidth;
                const y = lineHeight - (value / maxMissedCalls) * lineHeight;

                return (
                  <motion.circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4.5"
                    fill="#f87171"
                    initial={{ scale: 0.75, opacity: 0.55 }}
                    animate={{ scale: [0.75, 1.25, 0.75], opacity: [0.55, 1, 0.55] }}
                    transition={{ delay: 0.18 * index, duration: 2.2, repeat: Infinity, repeatDelay: 1.2 }}
                  />
                );
              })}
            </svg>

            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:text-[11px] sm:tracking-[0.18em]">
              {weekLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[#D4A843]/14 bg-[linear-gradient(180deg,rgba(22,35,61,0.55),rgba(11,20,36,0.78))] p-5">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E3C27A]/90">
                {afterTitle}
              </p>
              <p className="mt-2 text-sm text-zinc-400">Confirmed reservations / month</p>
            </div>
            <div className="shrink-0 rounded-full border border-[#D4A843]/20 bg-[#D4A843]/10 px-3 py-1 text-sm font-semibold text-[#E3C27A]">
              +30
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-white/6 bg-black/10 p-4">
            <div className="flex h-28 items-end justify-between gap-2 sm:h-36">
              {reservations.map((value, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-end gap-3">
                  <div className="flex h-28 w-full items-end">
                    <motion.div
                      className="w-full rounded-t-[1rem] bg-[linear-gradient(180deg,#D4A843,#C29A38)] shadow-[0_10px_30px_rgba(212,168,67,0.15)]"
                      initial={{ height: 8, opacity: 0.55 }}
                      animate={{
                        height: [8, (value / maxReservations) * 112, (value / maxReservations) * 112, 8],
                        opacity: [0.55, 1, 1, 0.55],
                      }}
                      transition={{
                        delay: 0.14 * index,
                        duration: 2.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1.2,
                      }}
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {weekLabels[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-0 border-t border-white/6 md:grid-cols-2">
        <div className="border-b border-white/6 p-4 sm:p-6 md:border-b-0 md:border-r">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-300/85">
            {beforeTitle}
          </div>
          <div className="space-y-4">
            {beforeMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between gap-4">
                <span className="text-sm text-zinc-400">{metric.label}</span>
                <span className="text-xl font-bold text-red-400 sm:text-2xl">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E3C27A]/90">
            {afterTitle}
          </div>
          <div className="space-y-4">
            {afterMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between gap-4">
                <span className="text-sm text-zinc-400">{metric.label}</span>
                <span className="text-xl font-bold text-[#D4A843] sm:text-2xl">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
