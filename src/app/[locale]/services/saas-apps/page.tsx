import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";

export default async function SaasAppsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SaasHero />
      <SaasSubServices />
      <SaasFeatures />
      <SaasCTA />
    </>
  );
}

function SaasHero() {
  const t = useTranslations("svc_saas");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 service-hero-saas overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-saas/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-saas/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="section-label mb-6" style={{ color: "var(--color-service-saas)" }}>
            {t("badge")}
          </p>
          <h1 className="heading-serif text-4xl md:text-6xl text-brand-dark mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary bg-service-saas text-white font-semibold px-8 py-3.5 rounded-lg"
            >
              {t("cta")}
            </Link>
            <a
              href="#sub-services"
              className="border border-zinc-300 text-zinc-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-white/50 transition-colors"
            >
              {t("learn_more")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SaasSubServices() {
  const t = useTranslations("svc_saas");

  const subServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M6 9h4v4H6z" opacity="0.7"/>
          <path d="M14 9h4M14 13h4" opacity="0.5"/>
          <line x1="6" y1="21" x2="18" y2="21"/>
          <line x1="9" y1="17" x2="15" y2="17"/>
        </svg>
      ),
      titleKey: "sub1_title",
      descKey: "sub1_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6"/>
        </svg>
      ),
      titleKey: "sub2_title",
      descKey: "sub2_desc",
    },
  ];

  return (
    <section id="sub-services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-saas)" }}>
              {t("sub_badge")}
            </p>
            <h2 className="heading-serif text-3xl md:text-5xl text-brand-dark mb-4">
              {t("sub_title")}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">{t("sub_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {subServices.map((svc, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="sub-service-card hover:border-service-saas/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-service-saas/10 text-service-saas flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{t(svc.titleKey)}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{t(svc.descKey)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function SaasFeatures() {
  const t = useTranslations("svc_saas");

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl md:text-4xl text-brand-dark mb-4">
              {t("features_title")}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">{t("features_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i, idx) => (
            <ScrollAnimator key={i} delay={idx * 0.08}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover-lift h-full">
                <div className="text-2xl mb-3">{t(`feature${i}_emoji`)}</div>
                <h3 className="font-bold text-brand-dark mb-2">{t(`feature${i}_title`)}</h3>
                <p className="text-sm text-zinc-600">{t(`feature${i}_desc`)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function SaasCTA() {
  const t = useTranslations("svc_saas");

  return (
    <section className="section-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">{t("cta_title")}</h2>
            <p className="text-lg text-zinc-400">{t("cta_subtitle")}</p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="btn-primary inline-block bg-white text-brand-navy font-semibold px-10 py-4 rounded-lg text-lg hover:bg-zinc-100 transition-colors"
            >
              {t("cta_btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
