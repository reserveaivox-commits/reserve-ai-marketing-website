import { useTranslations } from "next-intl";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import AnimatedCustomization from "@/components/AnimatedCustomization";

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
      <SaasTrust />
      <SaasSubServices />
      <SaasCustomization />
      <SaasFeatures />
      <SaasROI />
      <SaasPricing />
    </>
  );
}

function SaasHero() {
  const t = useTranslations("svc_saas");

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-saas/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-saas/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-saas)" }}>
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
              className="btn-primary rounded-lg bg-service-saas px-6 py-3.5 text-center font-semibold text-white sm:px-8"
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

function SaasSubServices() {
  const t = useTranslations("svc_saas");

  const subServices = [
    {
      icon: <Image src="/icons/icon-dashboard.png" alt="icon" width={48} height={48} className="w-8 h-8 object-contain brightness-0 invert opacity-90" />,
      titleKey: "sub1_title",
      descKey: "sub1_desc",
    },
    {
      icon: <Image src="/icons/icon-analytics.png" alt="icon" width={48} height={48} className="w-8 h-8 object-contain brightness-0 invert opacity-90" />,
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
            <p className="section-label mb-4" style={{ color: "var(--color-service-saas)" }}>
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
              <div className="sub-service-card hover:border-service-saas/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-service-saas/10 text-service-saas flex items-center justify-center mb-4">
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

function SaasTrust() {
  return (
    <section className="section-flow-dark py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ScrollAnimator delay={0}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-saas/20">
              <div className="text-2xl md:text-3xl font-bold text-service-saas mb-2">50+</div>
              <p className="text-xs md:text-sm text-zinc-300">Custom applications</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.05}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-saas/20">
              <div className="text-2xl md:text-3xl font-bold text-service-saas mb-2">8-12w</div>
              <p className="text-xs md:text-sm text-zinc-300">Typical deployment</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.1}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-saas/20">
              <div className="text-2xl md:text-3xl font-bold text-service-saas mb-2">99.9%</div>
              <p className="text-xs md:text-sm text-zinc-300">Platform uptime</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.15}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-saas/20">
              <div className="text-2xl md:text-3xl font-bold text-service-saas mb-2">10+</div>
              <p className="text-xs md:text-sm text-zinc-300">Tech integrations</p>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function SaasFeatures() {
  const t = useTranslations("svc_saas");

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
              <div className="rounded-xl border border-white/8 bg-white/4 p-6 shadow-sm hover-lift h-full">
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

function SaasROI() {
  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-saas)" }}>
              ROI & IMPACT
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              Build faster, scale smarter
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">Reduce development cycles and operational costs with custom SaaS solutions</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ScrollAnimator delay={0}>
            <div className="rounded-xl border border-service-saas/20 bg-gradient-to-br from-service-saas/10 to-transparent p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-2">60% faster development</h3>
              <p className="text-sm text-zinc-300">Compared to traditional in-house development cycles</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.1}>
            <div className="rounded-xl border border-service-saas/20 bg-gradient-to-br from-service-saas/10 to-transparent p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-2">50% cost reduction</h3>
              <p className="text-sm text-zinc-300">Infrastructure and maintenance compared to scaled teams</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <div className="rounded-xl border border-service-saas/20 bg-gradient-to-br from-service-saas/10 to-transparent p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-2">Infinite scalability</h3>
              <p className="text-sm text-zinc-300">Grow from 100 to 100k users without architecture changes</p>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function SaasPricing() {
  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-saas)" }}>
              PRICING
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              Flexible packages for every stage
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">Transparent pricing with no hidden costs</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Startup", price: "€3k-5k", time: "8-10 weeks", badge: "", features: ["Custom UI/UX", "Basic integrations", "Hosting setup", "3 months support"] },
            { name: "Growth", price: "€8k-12k", time: "10-12 weeks", badge: "MOST POPULAR", features: ["Advanced features", "Multiple integrations", "Analytics dashboard", "Performance optimization", "6 months support"] },
            { name: "Enterprise", price: "€15k+", time: "12-16 weeks", badge: "", features: ["White-label solution", "Advanced security", "Unlimited integrations", "Custom compliance", "12+ months support"] },
          ].map((plan, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className={`rounded-2xl p-6 md:p-8 border transition-all ${
                plan.badge
                  ? "border-service-saas/50 bg-gradient-to-br from-service-saas/10 to-transparent ring-2 ring-service-saas/20"
                  : "border-white/10 bg-white/4"
              }`}>
                {plan.badge && (
                  <div className="inline-block px-3 py-1 rounded-full bg-service-saas/20 text-service-saas text-xs font-semibold mb-4">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-service-saas">{plan.price}</div>
                  <p className="text-sm text-zinc-400 mt-1">{plan.time}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-service-saas mt-1">✓</span>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full block py-2.5 px-4 rounded-lg font-semibold text-center transition ${
                    plan.badge
                      ? "bg-service-saas text-white hover:bg-service-saas/90"
                      : "border border-service-saas/30 text-service-saas hover:bg-service-saas/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function SaasCustomization() {
  const t = useTranslations("svc_saas");

  const examples = [
    {
      industry: t("demo_industry1"),
      example: t("demo_example1"),
    },
    {
      industry: t("demo_industry2"),
      example: t("demo_example2"),
    },
    {
      industry: t("demo_industry3"),
      example: t("demo_example3"),
    },
  ];

  const points = [
    t("custom_point1"),
    t("custom_point2"),
    t("custom_point3"),
    t("custom_point4"),
  ];

  return (
    <AnimatedCustomization
      badge={t("custom_badge")}
      title={t("custom_title")}
      description={t("custom_desc")}
      points={points}
      examples={examples}
      accentColor="var(--color-service-saas)"
      borderColor="rgba(var(--color-service-saas-rgb), 0.2)"
    />
  );
}
