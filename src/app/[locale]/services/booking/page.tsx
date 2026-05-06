import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import AnimatedCustomization from "@/components/AnimatedCustomization";

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
      <BookingStats />
      <BookingSubServices />
      <BookingCustomization />
      <BookingROI />
      <BookingIntegrations />
      <BookingPricing />
    </>
  );
}

function BookingHero() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-booking/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-booking/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-booking)" }}>
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
              className="btn-primary rounded-lg bg-service-booking px-6 py-3.5 text-center font-semibold text-white sm:px-8"
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

function BookingStats() {
  return (
    <section className="section-flow-dark py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ScrollAnimator delay={0}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-booking/20">
              <div className="text-2xl md:text-3xl font-bold text-service-booking mb-2">99%</div>
              <p className="text-xs md:text-sm text-zinc-300">Uptime guarantee</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.05}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-booking/20">
              <div className="text-2xl md:text-3xl font-bold text-service-booking mb-2">10k+</div>
              <p className="text-xs md:text-sm text-zinc-300">Bookings daily</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.1}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-booking/20">
              <div className="text-2xl md:text-3xl font-bold text-service-booking mb-2">40%</div>
              <p className="text-xs md:text-sm text-zinc-300">No-show reduction</p>
            </div>
          </ScrollAnimator>
          <ScrollAnimator delay={0.15}>
            <div className="reserve-stat-card px-4 py-6 text-center border border-service-booking/20">
              <div className="text-2xl md:text-3xl font-bold text-service-booking mb-2">8+</div>
              <p className="text-xs md:text-sm text-zinc-300">Platform integrations</p>
            </div>
          </ScrollAnimator>
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
    <section id="sub-services" className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-booking)" }}>
              {t("sub_badge")}
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
              3 powerful booking integrations
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("sub_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {subServices.map((svc, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="sub-service-card hover:border-service-booking/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-service-booking/10 text-service-booking flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {svc.titleKey ? t(svc.titleKey) : (svc.title ?? "")}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {svc.descKey ? t(svc.descKey) : (svc.desc ?? "")}
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

function BookingCustomization() {
  const t = useTranslations("svc_booking");

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
      accentColor="var(--color-service-booking)"
      borderColor="rgba(var(--color-service-booking-rgb), 0.2)"
    />
  );
}

function BookingROI() {
  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <p className="section-label mb-4" style={{ color: "var(--color-service-booking)" }}>
                IMPACT
              </p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
                Real results for booking businesses
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">See what's possible with seamless booking integration</p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimator delay={0}>
              <div className="relative overflow-hidden rounded-2xl border border-service-booking/20 p-6 md:p-8 bg-gradient-to-br from-service-booking/5 to-transparent">
                <div className="text-4xl md:text-5xl font-bold text-service-booking mb-2">40%</div>
                <h3 className="text-lg font-semibold text-white mb-3">No-show Reduction</h3>
                <p className="text-sm text-zinc-300">Automated reminders and confirmations cut missed appointments</p>
              </div>
            </ScrollAnimator>

            <ScrollAnimator delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-service-booking/20 p-6 md:p-8 bg-gradient-to-br from-service-booking/5 to-transparent">
                <div className="text-4xl md:text-5xl font-bold text-service-booking mb-2">60%</div>
                <h3 className="text-lg font-semibold text-white mb-3">Booking Increase</h3>
                <p className="text-sm text-zinc-300">24/7 availability means more conversions, more revenue</p>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingPricing() {
  return (
    <section className="section-flow-light py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-booking)" }}>
              PRICING
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              Transparent, scalable pricing
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">Pay only for what you use, no long-term contracts</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "€249", bookings: "Up to 50/mo", badge: "", features: ["Basic calendar sync", "Email reminders", "Mobile responsive", "Email support"] },
            { name: "Professional", price: "€599", bookings: "Up to 500/mo", badge: "RECOMMENDED", features: ["All integrations", "SMS reminders", "Custom branding", "Analytics", "Priority support"] },
            { name: "Enterprise", price: "Custom", unit: "", badge: "", isEnterprise: true, description: "Built for teams that need unlimited scale, total control, and white-glove support.", features: ["All features included", "API access", "Custom integrations", "Dedicated success", "24/7 support"], cta: "Contact Sales" },
          ].map((plan, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              {plan.isEnterprise ? (
                <div className="rounded-2xl p-8 md:p-10 border border-service-booking/30 bg-gradient-to-br from-service-booking/5 via-transparent to-service-booking/10 relative overflow-hidden group">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-service-booking/0 via-service-booking/5 to-service-booking/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Header with accent line */}
                    <div className="flex items-start justify-between mb-6 pb-4 border-b border-service-booking/20">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-service-booking font-semibold mb-2">Premium Tier</p>
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
                          <div className="w-5 h-5 rounded-full bg-service-booking/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-service-booking/40 transition">
                            <span className="text-service-booking text-xs font-bold">✓</span>
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
                      className="w-full block py-3 px-4 rounded-lg font-semibold text-center transition transform hover:scale-105 active:scale-95 bg-gradient-to-r from-service-booking via-service-booking to-service-booking/80 text-white shadow-lg shadow-service-booking/30 hover:shadow-service-booking/50"
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={`rounded-2xl p-6 md:p-8 border transition-all ${
                  plan.badge
                    ? "border-service-booking/50 bg-gradient-to-br from-service-booking/10 to-transparent ring-2 ring-service-booking/20"
                    : "border-white/10 bg-white/4"
                }`}>
                  {plan.badge && (
                    <div className="inline-block px-3 py-1 rounded-full bg-service-booking/20 text-service-booking text-xs font-semibold mb-4">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-service-booking">{plan.price}</div>
                    <p className="text-sm text-zinc-400 mt-1">{plan.bookings}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-service-booking mt-1">✓</span>
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full block py-2.5 px-4 rounded-lg font-semibold text-center transition ${
                      plan.badge
                        ? "bg-service-booking text-white hover:bg-service-booking/90"
                        : "border border-service-booking/30 text-service-booking hover:bg-service-booking/10"
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
function BookingIntegrations() {
  const t = useTranslations("svc_booking");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              {t("integrations_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("integrations_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
            <ScrollAnimator key={i} delay={idx * 0.06}>
              <div className="rounded-xl border border-white/8 bg-white/4 p-4 text-center hover-lift sm:p-6">
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
