import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";

export default async function AIBotsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BotsHero />
      <BotsSubServices />
      <BotsFeatures />
    </>
  );
}

function BotsHero() {
  const t = useTranslations("svc_bots");

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-bots/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-bots/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-bots)" }}>
            {t("badge")}
          </p>
          <h1 className="heading-serif mb-6 text-3xl text-white sm:text-4xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:mb-10 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="btn-primary rounded-lg bg-service-bots px-6 py-3.5 text-center font-semibold text-white sm:px-8"
            >
              {t("cta")}
            </Link>
            <a
              href="#sub-services"
              className="rounded-lg border border-white/12 px-6 py-3.5 text-center font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:px-8"
            >
              {t("learn_more")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BotsSubServices() {
  const t = useTranslations("svc_bots");

  const subServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/>
          <rect x="4" y="8" width="16" height="12" rx="2"/>
          <circle cx="9" cy="13" r="1"/>
          <circle cx="15" cy="13" r="1"/>
          <path d="M9 17h6"/>
        </svg>
      ),
      titleKey: "sub1_title",
      descKey: "sub1_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      titleKey: "sub2_title",
      descKey: "sub2_desc",
    },
  ];

  return (
    <section id="sub-services" className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-bots)" }}>
              {t("sub_badge")}
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
              {t("sub_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("sub_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 md:gap-6">
          {subServices.map((svc, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="sub-service-card hover:border-service-bots/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-service-bots/10 text-service-bots flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(svc.titleKey)}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{t(svc.descKey)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function BotsFeatures() {
  const t = useTranslations("svc_bots");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              {t("features_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("features_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i, idx) => (
            <ScrollAnimator key={i} delay={idx * 0.08}>
              <div className="rounded-xl border border-white/8 bg-white/4 p-6 hover-lift h-full">
                <div className="text-2xl mb-3">{t(`feature${i}_emoji`)}</div>
                <h3 className="font-bold text-white mb-2">{t(`feature${i}_title`)}</h3>
                <p className="text-sm text-zinc-300">{t(`feature${i}_desc`)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
