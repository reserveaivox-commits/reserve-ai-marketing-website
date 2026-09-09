import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { industries, getIndustryBySlug } from "@/lib/industries";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import BenefitShowcase from "@/components/BenefitShowcase";
import HeroDemoGate from "@/components/HeroDemoGate";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <DetailHero translationKey={industry.translationKey} image={industry.image} />
      <ProblemSection translationKey={industry.translationKey} />
      <BenefitsSection translationKey={industry.translationKey} />
      <InteractiveDemoSection />
      <ROISection translationKey={industry.translationKey} />
    </>
  );
}

function DetailHero({
  translationKey,
  image,
}: {
  translationKey: string;
  image: string;
}) {
  const t = useTranslations(`ind_detail.${translationKey}`);

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel grid items-center gap-8 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label mb-6">{t("name")}</p>
            <h1 className="heading-serif mb-6 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {t("hero_title")}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {t("hero_desc")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="btn-primary rounded-lg bg-accent-purple px-6 py-3.5 text-center font-semibold text-white sm:px-8"
              >
                {t("cta")}
              </Link>
              <a
                href="#benefits"
                className="rounded-lg border border-white/12 px-6 py-3.5 text-center font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:px-8"
              >
                {t("learn_cta")}
              </a>
            </div>
          </div>

          <Image
            src={image}
            alt={t("name")}
            width={560}
            height={400}
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

function ProblemSection({ translationKey }: { translationKey: string }) {
  const t = useTranslations(`ind_detail.${translationKey}`);

  const points = [1, 2, 3].map((i) => ({
    title: t(`problem_p${i}_title`),
    desc: t(`problem_p${i}_desc`),
    icon: ["/icons/icon-missed-calls.png", "/icons/icon-wasted-time.png", "/icons/icon-lost-revenue.png"][i - 1],
  }));

  return (
    <section className="section-dark py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="heading-serif mb-4 text-3xl md:text-4xl">
            {t("problem_title")}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t("problem_desc")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="text-center group cursor-default"
            >
              <div className="mb-5 inline-flex group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={point.icon}
                  alt={point.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain brightness-0 invert opacity-90"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{point.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ translationKey }: { translationKey: string }) {
  const t = useTranslations(`ind_detail.${translationKey}`);

  const benefits = [1, 2, 3, 4].map((i) => ({
    title: t(`benefit_b${i}_title`),
    description: t(`benefit_b${i}_desc`),
    icon: ["/icons/icon-verified.png", "/icons/icon-growth.png", "/icons/icon-partnership.png", "/icons/icon-efficiency.png"][i - 1],
    highlight: t.has(`benefit_b${i}_highlight`) ? t(`benefit_b${i}_highlight`) : undefined,
  }));

  return (
    <BenefitShowcase
      title={t("benefits_title")}
      benefits={benefits}
      accentColor="#D4A843"
      backgroundColor="from-white/5 to-white/2"
    />
  );
}

function InteractiveDemoSection() {
  const t = useTranslations("industry_demo");

  return (
    <section className="section-flow-dark py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <div className="mb-12 max-w-2xl">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl">{t("subtitle")}</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-6 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,_rgba(212,168,67,0.10),_transparent_42%)] blur-3xl" />
            <HeroDemoGate compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function ROISection({ translationKey }: { translationKey: string }) {
  const t = useTranslations(`ind_detail.${translationKey}`);

  const roiData = [
    { num: 85, suffix: "%", label: t("roi_s1_label") },
    { num: 30, suffix: "+", label: t("roi_s2_label") },
    { num: 95, suffix: "%+", label: t("roi_s3_label") },
  ];

  return (
    <section className="section-flow-dark py-14 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark rounded-2xl p-5 text-center sm:p-8 md:p-12 border border-white/8 bg-gradient-to-br from-white/5 to-white/2">
          <h2 className="heading-serif mb-4 text-2xl text-white md:text-3xl">
            {t("roi_title")}
          </h2>
          <p className="text-zinc-400 mb-12">{t("roi_desc")}</p>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {roiData.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/8 to-white/4 rounded-xl p-4 md:p-6 border border-white/10 group hover:border-white/20 hover:from-white/12 hover:to-white/8 transition-all duration-500 cursor-default"
              >
                <div className="text-xl md:text-2xl font-bold text-accent-gold mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  <AnimatedCounter
                    value={item.num}
                    suffix={item.suffix}
                    duration={2}
                    className="text-xl md:text-2xl font-bold"
                  />
                </div>
                <div className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
