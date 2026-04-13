import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";

export default async function AIAgentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AgentsHero />
      <AgentsSubServices />
      <AgentsCustomAgent />
      <AgentsUseCases />
    </>
  );
}

function AgentsHero() {
  const t = useTranslations("svc_agents");

  return (
    <section className="section-flow-light relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-agents/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-agents/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-agents)" }}>
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
              className="btn-primary rounded-lg bg-service-agents px-6 py-3.5 text-center font-semibold text-white sm:px-8"
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

function AgentsSubServices() {
  const t = useTranslations("svc_agents");

  const subServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      titleKey: "sub1_title",
      descKey: "sub1_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      titleKey: "sub2_title",
      descKey: "sub2_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      titleKey: "sub3_title",
      descKey: "sub3_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
      ),
      titleKey: "sub4_title",
      descKey: "sub4_desc",
    },
  ];

  return (
    <section id="sub-services" className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-agents)" }}>
              {t("sub_badge")}
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
              {t("sub_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("sub_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {subServices.map((svc, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="sub-service-card hover:border-service-agents/30">
                <div className="w-12 h-12 rounded-xl bg-service-agents/10 text-service-agents flex items-center justify-center mb-4">
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

function AgentsCustomAgent() {
  const t = useTranslations("svc_agents");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <ScrollAnimator direction="left">
            <div>
              <p className="section-label mb-4" style={{ color: "var(--color-service-agents)" }}>
                {t("custom_badge")}
              </p>
              <h2 className="heading-serif mb-6 text-3xl text-white md:text-4xl">
                {t("custom_title")}
              </h2>
              <p className="mb-8 leading-relaxed text-zinc-300">
                {t("custom_desc")}
              </p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-service-agents/10 text-service-agents flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-sm text-zinc-300">{t(`custom_point${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimator>

          <ScrollAnimator direction="right">
            <div className="rounded-2xl bg-brand-navy p-5 sm:p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-gold mb-6">
                {t("demo_title")}
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-zinc-500 mb-1">{t(`demo_industry${i}`)}</p>
                    <p className="text-sm text-white/90 italic">&ldquo;{t(`demo_example${i}`)}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        </div>
        </div>
      </div>
    </section>
  );
}

function AgentsUseCases() {
  const t = useTranslations("svc_agents");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              {t("usecase_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("usecase_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i, idx) => (
            <ScrollAnimator key={i} delay={idx * 0.12}>
              <div className="rounded-xl border border-white/8 bg-white/4 p-6 h-full">
                <div className="text-3xl mb-4">{t(`usecase${i}_emoji`)}</div>
                <h3 className="font-bold text-white mb-2">{t(`usecase${i}_title`)}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{t(`usecase${i}_desc`)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
