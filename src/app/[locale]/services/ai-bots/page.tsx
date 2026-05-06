import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import AnimatedCustomization from "@/components/AnimatedCustomization";

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
      <BotsTrust />
      <BotsSubServices />
      <BotsCustomization />
      <BotsFeatures />
      <BotsPricing />
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

function BotsTrust() {
  return (
    <section className="section-flow-dark py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ScrollAnimator delay={0}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-bots/20">
              <div className="text-2xl md:text-3xl font-bold text-service-bots mb-2">25k+</div>
              <p className="text-xs md:text-sm text-zinc-300">Conversations/month</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.05}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-bots/20">
              <div className="text-2xl md:text-3xl font-bold text-service-bots mb-2">92%</div>
              <p className="text-xs md:text-sm text-zinc-300">Query resolution</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.1}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-bots/20">
              <div className="text-2xl md:text-3xl font-bold text-service-bots mb-2">30%</div>
              <p className="text-xs md:text-sm text-zinc-300">Lead conversion boost</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.15}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-bots/20">
              <div className="text-2xl md:text-3xl font-bold text-service-bots mb-2">4+</div>
              <p className="text-xs md:text-sm text-zinc-300">Languages supported</p>
            </div>
          </ScrollAnimator>
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

function BotsPricing() {
  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-bots)" }}>
              PRICING
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              Chatbots that fit your budget
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">Simple pricing for powerful AI customer engagement</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "€249", users: "Up to 1,000", badge: "", features: ["Basic FAQ bot", "Website widget", "Email support", "Monthly reports"] },
            { name: "Business", price: "€599", users: "Up to 10k", badge: "POPULAR", features: ["Custom training", "Lead qualification", "CRM integration", "Analytics", "Priority support"] },
            { name: "Enterprise", price: "Custom", unit: "", badge: "", isEnterprise: true, description: "Built for teams that need unlimited scale, total control, and white-glove support.", features: ["Everything included", "Advanced automation", "API access", "Dedicated support", "Custom training"], cta: "Contact Sales" },
          ].map((plan, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              {plan.isEnterprise ? (
                <div className="rounded-2xl p-8 md:p-10 border border-service-bots/30 bg-gradient-to-br from-service-bots/5 via-transparent to-service-bots/10 relative overflow-hidden group">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-service-bots/0 via-service-bots/5 to-service-bots/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header with accent line */}
                    <div className="flex items-start justify-between mb-6 pb-4 border-b border-service-bots/20">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-service-bots font-semibold mb-2">Premium Tier</p>
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      </div>
                      <div className="text-3xl">👑</div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 mb-6 leading-relaxed">{plan.description}</p>

                    {/* Features with icons */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-service-bots/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-service-bots/40 transition">
                            <span className="text-service-bots text-xs font-bold">✓</span>
                          </div>
                          <span className="text-sm text-zinc-200 group-hover/item:text-white transition">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing info */}
                    <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/10">
                      <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Custom Pricing</p>
                      <p className="text-lg font-bold text-white">Built for scale</p>
                      <p className="text-xs text-zinc-400 mt-2">Dedicated setup, training, and ongoing support included</p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="w-full block py-3 px-4 rounded-lg font-semibold text-center transition transform hover:scale-105 active:scale-95 bg-gradient-to-r from-service-bots via-service-bots to-service-bots/80 text-white shadow-lg shadow-service-bots/30 hover:shadow-service-bots/50"
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={`rounded-2xl p-6 md:p-8 border transition-all ${
                  plan.badge
                    ? "border-service-bots/50 bg-gradient-to-br from-service-bots/10 to-transparent ring-2 ring-service-bots/20"
                    : "border-white/10 bg-white/4"
                }`}>
                  {plan.badge && (
                    <div className="inline-block px-3 py-1 rounded-full bg-service-bots/20 text-service-bots text-xs font-semibold mb-4">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-service-bots">{plan.price}</div>
                    <p className="text-sm text-zinc-400 mt-1">{plan.users}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-service-bots mt-1">✓</span>
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full block py-2.5 px-4 rounded-lg font-semibold text-center transition ${
                      plan.badge
                        ? "bg-service-bots text-white hover:bg-service-bots/90"
                        : "border border-service-bots/30 text-service-bots hover:bg-service-bots/10"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function BotsCustomization() {
  const t = useTranslations("svc_bots");

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
      accentColor="var(--color-service-bots)"
      borderColor="rgba(var(--color-service-bots-rgb), 0.2)"
    />
  );
}
