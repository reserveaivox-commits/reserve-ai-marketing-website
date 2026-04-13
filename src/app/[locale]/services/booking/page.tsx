import { useTranslations } from "next-intl";
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
      <BookingHero />
      <BookingSubServices />
      <BookingIntegrations />
    </>
  );
}

function BookingHero() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-light relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-booking/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-booking/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-8 py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-booking)" }}>
            {t("badge")}
          </p>
          <h1 className="heading-serif text-4xl md:text-6xl text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mb-10">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary bg-service-booking text-white font-semibold px-8 py-3.5 rounded-lg"
            >
              {t("cta")}
            </Link>
            <a
              href="#sub-services"
              className="border border-white/12 text-zinc-200 font-semibold px-8 py-3.5 rounded-lg hover:bg-white/6 transition-colors"
            >
              {t("learn_more")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingSubServices() {
  const t = useTranslations("svc_booking");

  const subServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
        </svg>
      ),
      titleKey: "sub1_title",
      descKey: "sub1_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      ),
      titleKey: "sub2_title",
      descKey: "sub2_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16v10H4z" />
          <path d="M8 17v3" />
          <path d="M16 17v3" />
          <path d="M7 11h4" />
          <path d="M14 11h3" />
        </svg>
      ),
      title: "POS System Integration",
      desc: "Sync in-store purchases, reservations, and customer data with your point-of-sale workflow.",
    },
  ];

  return (
    <section id="sub-services" className="section-flow-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-booking)" }}>
              {t("sub_badge")}
            </p>
            <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
              3 powerful booking integrations
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("sub_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6">
          {subServices.map((svc, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="sub-service-card hover:border-service-booking/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-service-booking/10 text-service-booking flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {"titleKey" in svc ? t(svc.titleKey) : svc.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {"descKey" in svc ? t(svc.descKey) : svc.desc}
                </p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function BookingIntegrations() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl md:text-4xl text-white mb-4">
              {t("integrations_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("integrations_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
            <ScrollAnimator key={i} delay={idx * 0.06}>
              <div className="rounded-xl border border-white/8 bg-white/4 p-6 text-center hover-lift">
                <p className="text-sm font-medium text-zinc-200">{t(`integration${i}`)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
