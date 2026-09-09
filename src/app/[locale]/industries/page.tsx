import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { industries } from "@/lib/industries";

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
    </>
  );
}

function HubHero() {
  const t = useTranslations("industries_hub");

  return (
    <section className="section-flow-light relative pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-8 py-10 md:px-10 md:py-12">
          <p className="section-label mb-6">{t("badge")}</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
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
    <section className="section-flow-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-8 md:px-8 md:py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <div key={industry.slug} className="h-full">
              <Link
                href={`/industries/${industry.slug}`}
                className="group relative block rounded-xl overflow-hidden hover-lift h-full"
              >
                {/* Image-forward card with gradient vignette */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={industry.thumbnail}
                    alt={t(`ind_detail.${industry.translationKey}.name`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Enhanced vignette with animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500" />
                  
                  {/* Animated accent border */}
                  <div 
                    className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ borderColor: `var(--ind-${industry.slug}-color, #D4A843)` }}
                  />

                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-radial-gradient from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/0 group-hover:to-white/0 transition-all duration-500 rounded-xl" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent group-hover:via-black/60 transition-all duration-500">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:translate-y-[-2px] transition-transform duration-300">
                        {t(`ind_detail.${industry.translationKey}.name`)}
                      </h3>
                      <p className="text-sm text-white/70 mb-2 line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                        {t(`ind_detail.${industry.translationKey}.short_desc`)}
                      </p>
                    </div>
                  </div>
                  <span className="text-accent-gold text-sm font-semibold group-hover:underline group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    {t("industries.learn_more")} 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
