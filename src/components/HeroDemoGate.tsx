"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function HeroDemoGate({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("hero");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const flowItems = [
    { label: t("bubble_customer_label"), value: t("bubble_customer_text") },
    { label: t("panel_card1_title"), value: t("panel_card1_text") },
    { label: t("panel_card2_title"), value: t("panel_card2_text") },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("submitting");

    try {
      const response = await fetch("/api/demo-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Lead capture failed");
      }

      setUnlocked(true);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div className={`relative isolate overflow-hidden border border-white/10 bg-[#050914] shadow-[0_28px_70px_rgba(0,0,0,0.32)] ${compact ? "rounded-[2rem]" : "rounded-[2.4rem]"}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,255,168,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(77,180,255,0.12),_transparent_26%)]" />
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-white/3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            {t("embed_label")}
          </p>
          <p className="text-sm font-semibold text-white mt-1">
            {unlocked ? t("embed_prompt_unlocked") : t("embed_prompt")}
          </p>
        </div>
        <a
          href="https://voiceui-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-[#8effa8] hover:text-white transition-colors"
        >
          {t("embed_action")}
        </a>
      </div>

      {unlocked ? (
        <div className="aspect-[0.86] w-full">
          <iframe
            src="https://voiceui-production.up.railway.app/"
            title="Re.Serve live demo"
            className="h-full w-full border-0 bg-[#06050c]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <div className={`relative bg-[linear-gradient(180deg,_rgba(11,17,31,0.98),_rgba(5,9,20,1))] ${compact ? "p-3 md:p-4" : "p-4 md:p-5 lg:p-6"}`}>
          <div className={`grid gap-4 ${compact ? "xl:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)]" : "lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]"}`}>
            <div className={`relative overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(14,24,41,0.98),rgba(9,16,30,0.98))] ${compact ? "rounded-[1.6rem] p-4 md:p-5" : "rounded-[2rem] p-6 md:p-8"}`}>
              <div className="demo-grid absolute inset-0 opacity-35" />
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(142,255,168,0.18),_transparent_65%)]" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#8effa8]" />
                    AI Flow
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    Live Automation
                  </span>
                </div>

                <div className={`relative mt-8 flex items-center justify-center ${compact ? "min-h-[14rem] md:min-h-[18rem]" : "min-h-[18rem] md:min-h-[23rem]"}`}>
                  <div className={`demo-pulse absolute rounded-full border border-[#8effa8]/18 bg-[#8effa8]/6 blur-[2px] ${compact ? "h-44 w-44 md:h-56 md:w-56" : "h-56 w-56 md:h-72 md:w-72"}`} />
                  <div className={`absolute rounded-full border border-white/8 ${compact ? "h-56 w-56 md:h-72 md:w-72" : "h-72 w-72 md:h-[22rem] md:w-[22rem]"}`} />
                  <div className={`demo-orbit absolute ${compact ? "h-56 w-56 md:h-72 md:w-72" : "h-72 w-72 md:h-[22rem] md:w-[22rem]"}`}>
                    <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#8effa8] shadow-[0_0_30px_rgba(142,255,168,0.8)]" />
                    <div className="absolute bottom-10 right-4 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(77,180,255,0.75)]" />
                  </div>
                  <div className={`demo-orbit-reverse absolute ${compact ? "h-44 w-44 md:h-60 md:w-60" : "h-60 w-60 md:h-80 md:w-80"}`}>
                    <div className="absolute left-4 top-16 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.5)]" />
                    <div className="absolute bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#8effa8]/90 shadow-[0_0_24px_rgba(142,255,168,0.6)]" />
                  </div>

                  <div className={`relative z-10 flex flex-col items-center justify-center border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,48,0.96),rgba(9,14,24,0.96))] text-center shadow-[0_24px_70px_rgba(0,0,0,0.36)] ${compact ? "h-28 w-28 rounded-[1.5rem] md:h-36 md:w-36" : "h-36 w-36 rounded-[2rem] md:h-44 md:w-44"}`}>
                    <div className={`mb-2 flex items-center justify-center rounded-2xl bg-[#8effa8]/12 text-[#8effa8] ${compact ? "h-10 w-10" : "h-12 w-12"}`}>
                      <span className="text-lg font-bold">AI</span>
                    </div>
                    <p className="text-sm font-semibold text-white">Reserve AI</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">
                      Booking Engine
                    </p>
                  </div>

                  <div className={`demo-drift absolute hidden rounded-[1.25rem] border border-white/8 bg-[#0f1728]/94 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.32)] md:block ${compact ? "left-0 top-4 max-w-[11rem]" : "left-0 top-6 max-w-[13rem]"}`}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8effa8]">
                      {flowItems[0].label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/82">
                      {flowItems[0].value}
                    </p>
                  </div>

                  <div className={`demo-drift absolute hidden rounded-[1.25rem] border border-white/8 bg-[#0f1728]/94 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.32)] [animation-delay:1.2s] md:block ${compact ? "right-0 top-8 max-w-[11rem]" : "right-0 top-12 max-w-[13rem]"}`}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      {flowItems[1].label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      {flowItems[1].value}
                    </p>
                  </div>

                  <div className={`demo-drift absolute hidden rounded-[1.25rem] border border-white/8 bg-[#0f1728]/94 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.32)] [animation-delay:2.1s] md:block ${compact ? "bottom-0 right-8 max-w-[10rem]" : "bottom-2 right-12 max-w-[12rem]"}`}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8effa8]">
                      {flowItems[2].label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      {flowItems[2].value}
                    </p>
                  </div>
                </div>

                <div className={`mt-6 grid gap-3 sm:grid-cols-3 ${compact ? "hidden xl:grid" : ""}`}>
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/4 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">{t("panel_card1_title")}</p>
                    <p className="mt-2 text-sm text-white/78">{t("panel_card1_text")}</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/4 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">{t("panel_card2_title")}</p>
                    <p className="mt-2 text-sm text-white/78">{t("panel_card2_text")}</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/4 p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">{t("panel_card3_title")}</p>
                    <p className="mt-2 text-sm text-white/78">{t("panel_card3_text")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`border border-white/8 bg-[linear-gradient(180deg,rgba(13,18,31,0.94),rgba(10,15,26,0.98))] ${compact ? "rounded-[1.6rem] p-4 md:p-5" : "rounded-[2rem] p-6 md:p-7"}`}>
              <h3 className="text-2xl md:text-[2rem] leading-tight font-semibold text-white max-w-sm">
                {t("lead_title")}
              </h3>
              <p className="text-sm md:text-base text-white/68 mt-3 max-w-md leading-relaxed">
                {t("lead_subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/55 mb-2">
                    {t("lead_name_label")}
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("lead_name_placeholder")}
                    required
                    className="w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[#8effa8] focus:ring-2 focus:ring-[#8effa8]/20"
                  />
                </div>

                <div>
                  <label htmlFor="hero-email" className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/55 mb-2">
                    {t("lead_email_label")}
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("lead_email_placeholder")}
                    required
                    className="w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[#8effa8] focus:ring-2 focus:ring-[#8effa8]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full rounded-xl bg-[#8effa8] px-4 py-3.5 text-[#04101b] font-semibold shadow-[0_18px_40px_rgba(81,255,154,0.16)] hover:bg-[#76f494] disabled:opacity-70 transition-colors"
                >
                  {submitState === "submitting" ? t("lead_button_loading") : t("lead_button")}
                </button>

                <p className="text-xs text-white/45 leading-relaxed">
                  {submitState === "error" ? t("lead_error") : t("lead_privacy")}
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
