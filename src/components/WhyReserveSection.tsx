import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";

const PILLAR_ICONS = [
  "/icons/icon-phone.png",
  "/icons/icon-instant.png",
  "/icons/icon-configure.png",
  "/icons/icon-launch.png",
];

export default function WhyReserveSection() {
  const t = useTranslations("why");
  const pillars = [1, 2, 3, 4].map((i) => ({
    title: t(`p${i}_title`),
    desc: t(`p${i}_desc`),
  }));

  return (
    <section className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="text-center mb-14">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/14 to-emerald-400/0 opacity-80" />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-white/8 bg-emerald-400/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Image src={PILLAR_ICONS[idx]} alt={pillar.title} width={26} height={26} className="brightness-0 invert opacity-90" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{pillar.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
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
