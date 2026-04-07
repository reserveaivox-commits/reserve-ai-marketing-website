import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { industries } from "@/lib/industries";
import ScrollAnimator from "@/components/ScrollAnimator";

export default async function IndustriesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HubHero />
      <IndustryGrid />
      <HubCTA />
    </>
  );
}

function HubHero() {
  const t = useTranslations("industries_hub");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-surface overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="section-label mb-6">{t("badge")}</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-brand-dark mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

function IndustryGrid() {
  const t = useTranslations();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, idx) => (
            <ScrollAnimator key={industry.slug} delay={idx * 0.06}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group relative block rounded-xl overflow-hidden hover-lift"
              >
                {/* Image-forward card with gradient vignette */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={industry.thumbnail}
                    alt={t(`ind_detail.${industry.translationKey}.name`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {t(`ind_detail.${industry.translationKey}.name`)}
                  </h3>
                  <p className="text-sm text-white/70 mb-2 line-clamp-2">
                    {t(`ind_detail.${industry.translationKey}.short_desc`)}
                  </p>
                  <span className="text-accent-gold text-sm font-semibold group-hover:underline">
                    {t("industries.learn_more")} →
                  </span>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function HubCTA() {
  const t = useTranslations("closing");

  return (
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl mb-6">{t("title")}</h2>
            <p className="text-lg text-zinc-400">{t("text")}</p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="btn-primary inline-block bg-white text-brand-navy font-semibold px-10 py-4 rounded-lg text-lg hover:bg-zinc-100 transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
