import { useTranslations } from "next-intl";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PosHero />
      <PosOperatingModel />
      <PosCapabilities />
      <PosDifference />
      <PosFlow />
      <PosCTA />
    </>
  );
}

function PosHero() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-light relative px-4 pt-24 pb-12 md:px-6 md:pt-36 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top,_rgba(142,255,168,0.14),_transparent_58%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
        <ScrollAnimator direction="left">
          <div className="reserve-panel px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <p className="section-label mb-6">{t("badge")}</p>
            <h1 className="heading-serif mb-6 text-3xl text-white sm:text-4xl md:text-6xl">
              {t("title")}
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {t("subtitle")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="btn-primary rounded-full bg-[#8effa8] px-6 py-3.5 text-center font-semibold text-[#04101b] sm:px-8"
              >
                {t("cta")}
              </Link>
              <a
                href="#pos-difference"
                className="rounded-full border border-white/12 px-6 py-3.5 text-center font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:px-8"
              >
                {t("learn_more")}
              </a>
            </div>
          </div>
        </ScrollAnimator>

        <ScrollAnimator direction="right">
          <div className="reserve-panel-dark overflow-hidden">
            <div className="relative aspect-[1.2] min-h-[360px]">
              <Image
                src="/images/services/booking.png"
                alt={t("visual_alt")}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101c] via-[#06101c]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                      <div className="mb-1 text-xl font-bold text-[#8effa8]">{t(`hero_stat${i}_num`)}</div>
                      <div className="text-xs leading-snug text-zinc-300">{t(`hero_stat${i}_label`)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

function PosOperatingModel() {
  const t = useTranslations("svc_booking");
  const steps = [1, 2, 3].map((i) => ({
    title: t(`model${i}_title`),
    text: t(`model${i}_text`),
  }));

  return (
    <section className="section-flow-dark px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-10 max-w-3xl">
              <p className="section-label mb-4">{t("model_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
                {t("model_title")}
              </h2>
              <p className="text-zinc-300">{t("model_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.1}>
                <div className="h-full rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8effa8]/10 text-sm font-bold text-[#8effa8]">
                    {idx + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{step.text}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PosCapabilities() {
  const t = useTranslations("svc_booking");
  const icons = [
    "/icons/icon-dashboard.png",
    "/icons/icon-scheduling.png",
    "/icons/icon-customer-care.png",
    "/icons/icon-analytics.png",
    "/icons/icon-verified.png",
    "/icons/icon-connect.png",
  ];

  return (
    <section className="section-flow-light px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center">
              <p className="section-label mb-4">{t("capabilities_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
                {t("capabilities_title")}
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-300">{t("capabilities_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i, idx) => (
              <ScrollAnimator key={i} delay={idx * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8effa8]/15 bg-[#8effa8]/10">
                    <Image src={icons[idx]} alt="" width={28} height={28} className="brightness-0 invert opacity-90" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{t(`cap${i}_title`)}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{t(`cap${i}_text`)}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PosDifference() {
  const t = useTranslations("svc_booking");

  return (
    <section id="pos-difference" className="section-flow-dark px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 max-w-3xl">
              <p className="section-label mb-4">{t("difference_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
                {t("difference_title")}
              </h2>
              <p className="text-zinc-300">{t("difference_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-5 lg:grid-cols-2">
            {[1, 2, 3, 4].map((i, idx) => (
              <ScrollAnimator key={i} delay={idx * 0.08}>
                <div className="grid h-full gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5 sm:grid-cols-2 sm:p-6">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                      {t("generic_label")}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-400">{t(`generic${i}`)}</p>
                  </div>
                  <div className="rounded-2xl border border-[#8effa8]/20 bg-[#8effa8]/8 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8effa8]">
                      {t("reserve_label")}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-100">{t(`reserve${i}`)}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PosFlow() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-light px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center">
              <p className="section-label mb-4">{t("flow_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
                {t("flow_title")}
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-300">{t("flow_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-4 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i, idx) => (
              <ScrollAnimator key={i} delay={idx * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-white/8 bg-[#07111f]/70 p-5">
                  <div className="mb-4 text-sm font-bold text-[#8effa8]">{String(i).padStart(2, "0")}</div>
                  <h3 className="mb-2 text-base font-bold text-white">{t(`flow${i}_title`)}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{t(`flow${i}_text`)}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PosCTA() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-dark px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark grid items-center gap-8 px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="section-label mb-4">{t("cta_badge")}</p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
              {t("cta_title")}
            </h2>
            <p className="max-w-2xl text-zinc-300">{t("cta_subtitle")}</p>
          </div>
          <Link
            href="/contact"
            className="btn-primary inline-flex w-full justify-center rounded-full bg-[#8effa8] px-8 py-4 font-semibold text-[#04101b] sm:w-auto"
          >
            {t("cta_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
