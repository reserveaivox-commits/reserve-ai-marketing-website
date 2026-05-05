"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function HeroDemoGate({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("hero");
  const [unlocked, setUnlocked] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const featurePlanets = [
    {
      key: "response",
      title: t("panel_card1_title"),
      text: t("panel_card1_text"),
      orbit: "demo-orbit-reverse",
      size: compact ? "h-64 w-64" : "h-72 w-72 md:h-[18rem] md:w-[18rem]",
      button: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
      label: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      labelInner: "demo-orbit-counter-reverse",
    },
    {
      key: "booking",
      title: t("panel_card2_title"),
      text: t("panel_card2_text"),
      orbit: "demo-orbit",
      size: compact ? "h-80 w-80" : "h-[22rem] w-[22rem] md:h-[24rem] md:w-[24rem]",
      button: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
      label: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      labelInner: "demo-orbit-counter",
    },
    {
      key: "relief",
      title: t("panel_card3_title"),
      text: t("panel_card3_text"),
      orbit: "demo-orbit-slow",
      size: compact ? "h-[22rem] w-[22rem]" : "h-[26rem] w-[26rem] md:h-[30rem] md:w-[30rem]",
      button: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
      label: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      labelInner: "demo-orbit-counter-slow",
    },
  ] as const;
  const activeFeature = featurePlanets.find((planet) => planet.key === selectedFeature) ?? null;

  useEffect(() => {
    if (!unlocked) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [unlocked]);

  return (
    <>
      {unlocked ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#030712]/88 p-4 backdrop-blur-md md:p-6">
          <button
            type="button"
            onClick={() => setUnlocked(false)}
            className="absolute inset-0 cursor-default"
            aria-label="Close live demo overlay"
          />
          <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-[#050914] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[linear-gradient(180deg,rgba(12,20,35,0.96),rgba(8,13,24,0.98))] px-4 py-3 md:px-5 md:py-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  {t("demo_center_label")}
                </p>
                <p className="mt-1 text-sm font-semibold text-white md:text-base">
                  {t("demo_center_cta")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setUnlocked(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close live demo"
              >
                x
              </button>
            </div>
            <div className="h-[72vh] min-h-[420px] sm:min-h-[480px] md:h-[78vh] md:min-h-[560px] w-full bg-[#06050c]">
              <iframe
                src="https://voiceui-production.up.railway.app/"
                title="Reserve AI live demo"
                className="h-full w-full border-0 bg-[#06050c]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="microphone; autoplay; clipboard-read; clipboard-write"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className={`relative isolate overflow-hidden border border-white/10 bg-[#050914] shadow-[0_28px_70px_rgba(0,0,0,0.32)] ${compact ? "rounded-[1.5rem] md:rounded-[2rem]" : "rounded-[1.6rem] md:rounded-[2.4rem]"}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,255,168,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(77,180,255,0.12),_transparent_26%)]" />
      {
        <div className={`relative bg-[linear-gradient(180deg,_rgba(11,17,31,0.98),_rgba(5,9,20,1))] ${compact ? "p-3 md:p-4" : "p-4 md:p-5 lg:p-6"}`}>
          <div className="grid gap-4">
            <div className={`relative overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(14,24,41,0.98),rgba(9,16,30,0.98))] ${compact ? "rounded-[1.6rem] p-4 md:p-5" : "rounded-[2rem] p-6 md:p-8"}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(142,255,168,0.05),_transparent_22%),radial-gradient(circle_at_center,_rgba(77,180,255,0.04),_transparent_40%)]" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#8effa8]" />
                      {t("demo_badge_flow")}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      {t("demo_badge_automation")}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-white/50">
                    {t("demo_hint")}
                  </p>
                </div>

                <div className={`relative mt-5 md:mt-8 ${compact ? "min-h-[18.5rem] sm:min-h-[24rem] md:min-h-[26rem]" : "min-h-[24rem] sm:min-h-[30rem] md:min-h-[38rem]"}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(142,255,168,0.12),_transparent_12%)] opacity-90" />

                  <div className="absolute left-1/2 top-[44%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8effa8]/10 blur-3xl sm:h-24 sm:w-24 md:h-40 md:w-40" />
                  <div className="absolute left-1/2 top-[44%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/18 sm:h-48 sm:w-48 md:h-[18rem] md:w-[18rem]" />
                  <div className="absolute left-1/2 top-[44%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8effa8]/16 sm:h-72 sm:w-72 md:h-[24rem] md:w-[24rem]" />
                  <div className="absolute left-1/2 top-[44%] h-[16.5rem] w-[16.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[24rem] sm:w-[24rem] md:h-[30rem] md:w-[30rem]" />

                  {featurePlanets.map((planet) => {
                    const isSelected = selectedFeature === planet.key;

                    return (
                      <div
                        key={planet.key}
                        className={`pointer-events-none absolute left-1/2 top-[44%] z-40 -translate-x-1/2 -translate-y-1/2 ${planet.orbit} ${planet.size}`}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedFeature((current) => (current === planet.key ? null : planet.key))}
                          className={`pointer-events-auto absolute z-40 transition-all duration-500 ${planet.button} ${isSelected ? "scale-110" : "scale-100 hover:scale-105"}`}
                          aria-label={planet.title}
                        >
                          <span className={`pointer-events-none absolute ${planet.label}`}>
                            <span className={`block max-w-[8rem] whitespace-normal text-center sm:max-w-none sm:whitespace-nowrap rounded-full border px-3 py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-all duration-500 ${planet.labelInner} ${isSelected ? "border-white/18 bg-[#0d1829]/96 text-white" : "border-white/10 bg-[#0b1422]/88 text-white/78"}`}>
                              {planet.title}
                            </span>
                          </span>
                        </button>
                      </div>
                    );
                  })}

                  <div className="absolute left-1/2 top-[44%] z-20 -translate-x-1/2 -translate-y-1/2">
                    <button
                      type="button"
                      onClick={() => setUnlocked(true)}
                      className={`group relative isolate overflow-hidden rounded-full border border-[#8effa8]/24 bg-[radial-gradient(circle_at_30%_24%,rgba(31,47,72,0.98),rgba(12,18,31,0.99)_58%,rgba(5,9,18,1))] text-center shadow-[0_30px_120px_rgba(0,0,0,0.5),0_0_60px_rgba(142,255,168,0.10)] transition duration-300 hover:scale-[1.02] hover:border-[#8effa8]/45 ${compact ? "h-28 w-28 p-3 sm:h-40 sm:w-40 sm:p-5 md:h-44 md:w-44" : "h-36 w-36 p-4 sm:h-48 sm:w-48 sm:p-5 md:h-64 md:w-64 md:p-7"}`}
                    >
                      <div className="absolute inset-[8%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(17,27,44,0.95),rgba(9,14,24,0.98)_72%)]" />
                      <div className="absolute inset-[16%] rounded-full border border-white/7" />
                      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,_rgba(142,255,168,0.12),_transparent_70%)] blur-xl transition duration-300 group-hover:scale-110" />
                      <div className={`relative z-10 flex h-full flex-col items-center justify-center ${compact ? "gap-3" : "gap-4"}`}>
                        <div className="mx-auto max-w-[5.5rem] text-center sm:max-w-[8rem] md:max-w-[10rem]">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50 md:text-[11px]">
                            {t("demo_center_label")}
                          </p>
                          <p className="mt-1.5 text-[0.92rem] leading-tight font-semibold text-white sm:text-base md:text-[1.15rem]">
                            {t("demo_center_cta")}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className={`pointer-events-none absolute left-1/2 top-[76%] sm:top-[69%] z-30 w-full max-w-[18rem] -translate-x-1/2 -translate-y-1/2 px-3 transition-all duration-500 md:max-w-[20rem] ${activeFeature ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                    {activeFeature ? (
                      <div className="pointer-events-auto relative rounded-[1.35rem] border border-white/12 bg-[linear-gradient(180deg,rgba(12,20,35,0.92),rgba(8,13,24,0.97))] px-4 py-4 text-center shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-md">
                        <button
                          type="button"
                          onClick={() => setSelectedFeature(null)}
                          className="absolute right-3 top-3 h-7 w-7 rounded-full border border-white/10 bg-white/5 text-xs text-white/55 transition-colors hover:bg-white/10 hover:text-white"
                          aria-label="Close orbit detail"
                        >
                          x
                        </button>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                          {t("demo_orbit_detail")}
                        </p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/82 md:text-sm">
                          {activeFeature.title}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-white/68 md:text-sm">
                          {activeFeature.text}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      </div>
    </>
  );
}
