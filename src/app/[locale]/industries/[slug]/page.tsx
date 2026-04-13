import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { industries, getIndustryBySlug } from "@/lib/industries";
import ScrollAnimator from "@/components/ScrollAnimator";
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
    <section className="section-flow-light relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel px-8 py-10 md:px-10 md:py-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="section-label mb-6">{t("name")}</p>
            <h1 className="heading-serif text-4xl md:text-5xl text-white leading-tight mb-6">
              {t("hero_title")}
            </h1>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              {t("hero_desc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary bg-accent-purple text-white font-semibold px-8 py-3.5 rounded-lg"
              >
                {t("cta")}
              </Link>
              <a
                href="#benefits"
                className="border border-white/12 text-zinc-200 font-semibold px-8 py-3.5 rounded-lg hover:bg-white/6 transition-colors"
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
            className="rounded-xl w-full h-auto"
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
  }));

  const icons = ["/icons/icon-missed-calls.png", "/icons/icon-wasted-time.png", "/icons/icon-lost-revenue.png"];

  return (
    <section className="section-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">
              {t("problem_title")}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {t("problem_desc")}
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.12}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <Image src={icons[idx]} alt={point.title} width={32} height={32} className="brightness-0 invert opacity-80" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{point.desc}</p>
              </div>
            </ScrollAnimator>
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
    desc: t(`benefit_b${i}_desc`),
  }));

  const icons = ["/icons/icon-verified.png", "/icons/icon-growth.png", "/icons/icon-partnership.png", "/icons/icon-efficiency.png"];

  return (
    <section id="benefits" className="section-flow-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">{t("benefits_title")}</p>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              {t("benefits_title")}
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="rounded-xl border border-white/8 bg-white/4 p-6 shadow-sm hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={icons[idx]} alt={b.title} width={32} height={32} />
                  <h3 className="text-lg font-bold text-white">{b.title}</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{b.desc}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveDemoSection() {
  const t = useTranslations("industry_demo");

  return (
    <section className="section-flow-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-4xl text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl">{t("subtitle")}</p>
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={0.08}>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-6 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,_rgba(142,255,168,0.10),_transparent_42%)] blur-3xl" />
            <HeroDemoGate compact />
          </div>
        </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function ROISection({ translationKey }: { translationKey: string }) {
  const t = useTranslations(`ind_detail.${translationKey}`);

  return (
    <section className="section-flow-dark py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="reserve-panel-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="heading-serif text-2xl md:text-3xl text-white mb-4">
              {t("roi_title")}
            </h2>
            <p className="text-zinc-400 mb-8">{t("roi_desc")}</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-accent-gold">
                    {t(`roi_s${i}_num`)}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{t(`roi_s${i}_label`)}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
