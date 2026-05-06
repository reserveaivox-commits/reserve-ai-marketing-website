import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import AnimatedCustomization from "@/components/AnimatedCustomization";

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
      <AgentsTrustProof />
      <AgentsSubServices />
      <AgentsROI />
      <AgentsCustomAgent />
      <AgentsUseCases />
      <AgentsPricing />
      <AgentsImplementation />
    </>
  );
}

function AgentsHero() {
  const t = useTranslations("svc_agents");

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
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

function AgentsTrustProof() {
  const t = useTranslations("svc_agents");

  return (
    <section className="section-flow-dark py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ScrollAnimator delay={0}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-agents/20">
              <div className="text-2xl md:text-3xl font-bold text-service-agents mb-2">24/7</div>
              <p className="text-xs md:text-sm text-zinc-300">Call coverage, always on</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.05}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-agents/20">
              <div className="text-2xl md:text-3xl font-bold text-service-agents mb-2">48h</div>
              <p className="text-xs md:text-sm text-zinc-300">Setup to live</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.1}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-agents/20">
              <div className="text-2xl md:text-3xl font-bold text-service-agents mb-2">+30</div>
              <p className="text-xs md:text-sm text-zinc-300">Bookings/month avg gained</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.15}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-agents/20">
              <div className="text-2xl md:text-3xl font-bold text-service-agents mb-2">DE/EN</div>
              <p className="text-xs md:text-sm text-zinc-300">Native language support</p>
            </div>
          </ScrollAnimator>
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
      comingSoon: true,
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
              <div className={`sub-service-card hover:border-service-agents/30 ${svc.comingSoon ? 'relative' : ''}`}>
                {svc.comingSoon && (
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-service-agents/20 text-service-agents text-xs font-semibold">
                    Coming Soon
                  </div>
                )}
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

function AgentsROI() {
  const t = useTranslations("svc_agents");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <p className="section-label mb-4" style={{ color: "var(--color-service-agents)" }}>
                THE VALUE
              </p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
                Your ROI in real numbers
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">Average results from our customers</p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimator delay={0}>
              <div className="relative overflow-hidden rounded-2xl border border-service-agents/20 p-6 md:p-8 bg-gradient-to-br from-service-agents/5 to-transparent">
                <div className="absolute top-0 right-0 w-32 h-32 bg-service-agents/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-service-agents mb-2">85%</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Call Answer Rate</h3>
                  <p className="text-sm text-zinc-300">Calls that would go unanswered are now being handled 24/7</p>
                </div>
              </div>
            </ScrollAnimator>

            <ScrollAnimator delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-service-agents/20 p-6 md:p-8 bg-gradient-to-br from-service-agents/5 to-transparent">
                <div className="absolute top-0 right-0 w-32 h-32 bg-service-agents/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-service-agents mb-2">+30</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Bookings/Month</h3>
                  <p className="text-sm text-zinc-300">Average new confirmed appointments from recovered calls</p>
                </div>
              </div>
            </ScrollAnimator>
          </div>

          <ScrollAnimator delay={0.2}>
            <div className="mt-8 rounded-2xl border border-service-agents/20 p-6 md:p-8 bg-service-agents/3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Setup Time</p>
                  <p className="text-2xl font-bold text-service-agents">48 hours</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Time to ROI</p>
                  <p className="text-2xl font-bold text-service-agents">4–6 weeks</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm text-zinc-400 mb-1">Customer Satisfaction</p>
                  <p className="text-2xl font-bold text-service-agents">95%+</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-zinc-300 border-t border-service-agents/10 pt-4">
                At just €249–€1,290/month with 30+ new bookings, most customers achieve positive ROI in their first billing cycle. Your exact savings depend on booking value and current call volume.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function AgentsPricing() {
  return (
    <section className="section-flow-light py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-agents)" }}>
              TRANSPARENT PRICING
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              Simple plans that scale with you
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">No surprise fees. Setup starts at €500 depending on complexity.</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "€249", unit: "/month", badge: "", features: ["24/7 answering", "Booking intake", "Email support", "Basic reporting"] },
            { name: "Growth", price: "€599", unit: "/month", badge: "POPULAR", features: ["24/7 assistant", "Calendar sync", "Dashboard", "Priority support", "Advanced analytics"] },
            { name: "Enterprise", price: "Custom", unit: "", badge: "", isEnterprise: true, description: "Built for teams that need unlimited scale, total control, and white-glove support.", features: ["Custom workflows", "CRM integrations", "Lead recovery", "VIP support", "Custom number of workflow executions"], cta: "Contact Sales" },
          ].map((plan, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              {plan.isEnterprise ? (
                <div className="rounded-2xl p-8 md:p-10 border border-service-agents/30 bg-gradient-to-br from-service-agents/5 via-transparent to-service-agents/10 relative overflow-hidden group">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-service-agents/0 via-service-agents/5 to-service-agents/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header with accent line */}
                    <div className="flex items-start justify-between mb-6 pb-4 border-b border-service-agents/20">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-service-agents font-semibold mb-2">Premium Tier</p>
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
                          <div className="w-5 h-5 rounded-full bg-service-agents/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-service-agents/40 transition">
                            <span className="text-service-agents text-xs font-bold">✓</span>
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
                      className="w-full block py-3 px-4 rounded-lg font-semibold text-center transition transform hover:scale-105 active:scale-95 bg-gradient-to-r from-service-agents via-service-agents to-service-agents/80 text-white shadow-lg shadow-service-agents/30 hover:shadow-service-agents/50"
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={`rounded-2xl p-6 md:p-8 border transition-all ${
                  plan.badge
                    ? "border-service-agents/50 bg-gradient-to-br from-service-agents/10 to-transparent ring-2 ring-service-agents/20"
                    : "border-white/10 bg-white/4"
                }`}>
                  {plan.badge && (
                    <div className="inline-block px-3 py-1 rounded-full bg-service-agents/20 text-service-agents text-xs font-semibold mb-4">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-service-agents">{plan.price}<span className="text-lg text-zinc-400">{plan.unit}</span></div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-service-agents mt-1">✓</span>
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full block py-2.5 px-4 rounded-lg font-semibold text-center transition ${
                      plan.badge
                        ? "bg-service-agents text-white hover:bg-service-agents/90"
                        : "border border-service-agents/30 text-service-agents hover:bg-service-agents/10"
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

function AgentsImplementation() {
  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <p className="section-label mb-4" style={{ color: "var(--color-service-agents)" }}>
                IMPLEMENTATION
              </p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
                From setup to live in 48 hours
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">Simple, straightforward process with dedicated support</p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Discovery Call", desc: "15 min to understand your business, hours, and call volume" },
              { step: "2", title: "Configuration", desc: "We set up your phone number, availability, and booking rules" },
              { step: "3", title: "Testing", desc: "We run test calls and make any adjustments needed" },
              { step: "4", title: "Go Live", desc: "Your AI agent starts answering calls — we monitor 24/7" },
            ].map((item, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.08}>
                <div className="relative">
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/4 -right-2 w-4 h-0.5 bg-gradient-to-r from-service-agents/50 to-transparent" />
                  )}
                  <div className="rounded-xl border border-service-agents/20 p-4 bg-white/4">
                    <div className="w-10 h-10 rounded-full bg-service-agents/20 text-service-agents flex items-center justify-center font-bold mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          <ScrollAnimator delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm text-zinc-400 mb-6">Ready to get started?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-service-agents text-white font-semibold hover:bg-service-agents/90 transition"
              >
                Schedule Your Setup Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}
function AgentsCustomAgent() {
  const t = useTranslations("svc_agents");

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
      accentColor="var(--color-service-agents)"
      borderColor="rgba(var(--color-service-agents-rgb), 0.2)"
    />
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
