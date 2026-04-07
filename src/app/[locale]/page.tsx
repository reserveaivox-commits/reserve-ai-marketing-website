import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import FaqAccordion from "@/components/FaqAccordion";
import ServicesCarousel from "@/components/ServicesCarousel";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesHubSection />
      <ProblemSection />
      <HowItWorksSection />
      <CaseStudySection />
      <PricingSection />
      <IndustriesSection />
      <FaqSection />
      <ClosingSection />
    </>
  );
}

/* ═══════════════════════════════════════════════
   HERO — Updated for multi-service platform
   ═══════════════════════════════════════════════ */
function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center bg-surface overflow-hidden">
      {/* Subtle blobs — low opacity */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-peach/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-service-websites/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: "5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-6">{t("badge")}</p>
            <h1 className="heading-serif text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-lg leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#services"
                className="btn-primary bg-accent-purple text-white font-semibold px-8 py-3.5 rounded-lg"
              >
                {t("cta_primary")}
              </a>
              <Link
                href="/contact"
                className="border border-zinc-300 text-zinc-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-zinc-50 transition-colors"
              >
                {t("cta_secondary")}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-brand-dark">
                    {t(`stat${i}_num`)}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {t(`stat${i}_text`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product screenshot in browser chrome */}
          <div className="relative">
            <div className="browser-frame">
              <div className="browser-dots">
                <span className="bg-red-400/80" />
                <span className="bg-yellow-400/80" />
                <span className="bg-green-400/80" />
              </div>
              <Image
                src="/images/Screenshot_dashboard.png"
                alt="Re.Serve Dashboard"
                width={700}
                height={450}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES HUB — 5 Premium service cards
   ═══════════════════════════════════════════════ */
function ServicesHubSection() {
  const t = useTranslations("services_hub");

  const services = [
    {
      key: "agents",
      href: "/services/ai-agents",
      image: "/images/services/ai-agents.png",
      variant: "service-card--agents",
      textColor: "text-service-agents",
      title: t("agents_title"),
      desc: t("agents_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "websites",
      href: "/services/websites",
      image: "/images/services/websites.png",
      variant: "service-card--websites",
      textColor: "text-service-websites",
      title: t("websites_title"),
      desc: t("websites_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "booking",
      href: "/services/booking",
      image: "/images/services/booking.png",
      variant: "service-card--booking",
      textColor: "text-service-booking",
      title: t("booking_title"),
      desc: t("booking_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "bots",
      href: "/services/ai-bots",
      image: "/images/services/bots.png",
      variant: "service-card--bots",
      textColor: "text-service-bots",
      title: t("bots_title"),
      desc: t("bots_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "saas",
      href: "/services/saas-apps",
      image: "/images/services/saas.png",
      variant: "service-card--saas",
      textColor: "text-service-saas",
      title: t("saas_title"),
      desc: t("saas_desc"),
      learnMore: t("learn_more"),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-brand-dark mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </ScrollAnimator>

        <div className="w-full relative mt-4">
          <ServicesCarousel services={services} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PROBLEM — Dark dramatic section with big stats
   ═══════════════════════════════════════════════ */
function ProblemSection() {
  const t = useTranslations("problem");

  const points = [
    { title: t("point1_title"), desc: t("point1_desc"), icon: "/icons/icon-missed-calls.png" },
    { title: t("point2_title"), desc: t("point2_desc"), icon: "/icons/icon-wasted-time.png" },
    { title: t("point3_title"), desc: t("point3_desc"), icon: "/icons/icon-lost-revenue.png" },
  ];

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-5xl mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {t("text")}
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {points.map((point, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.12}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <Image src={point.icon} alt={point.title} width={32} height={32} className="brightness-0 invert opacity-80" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{point.desc}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator>
          <div className="border border-accent-gold/30 rounded-xl p-5 text-center max-w-xl mx-auto bg-accent-gold/5">
            <p className="text-accent-gold font-semibold">
              ✓ {t("solution")}
            </p>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   HOW IT WORKS — Horizontal stepper with connecting line
   ═══════════════════════════════════════════════ */
function HowItWorksSection() {
  const t = useTranslations("how");

  const steps = [1, 2, 3].map((i) => ({
    title: t(`step${i}_title`),
    desc: t(`step${i}_desc`),
  }));

  const stepIcons = ["/icons/icon-connect.png", "/icons/icon-configure.png", "/icons/icon-launch.png"];

  return (
    <section id="how-it-works" className="section-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-5xl mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[16.666%] right-[16.666%] h-px bg-zinc-700" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.15}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                    <Image src={stepIcons[idx]} alt={step.title} width={36} height={36} className="brightness-0 invert opacity-80" />
                  </div>
                  <div className="text-6xl font-bold text-white/10 mb-2 font-serif">{idx + 1}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CASE STUDY — Full-width, dramatic numbers
   ═══════════════════════════════════════════════ */
function CaseStudySection() {
  const t = useTranslations("case");

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-brand-dark mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-600">{t("subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="bg-brand-navy rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Before */}
            <ScrollAnimator direction="left">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-8">
                  {t("before_title")}
                </h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-zinc-400 text-sm">{t(`before_m${i}`)}</span>
                      <span className="text-2xl font-bold text-red-400">{t(`before_v${i}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            {/* After */}
            <ScrollAnimator direction="right">
              <div className="p-8 md:p-12">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-8">
                  {t("after_title")}
                </h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-zinc-400 text-sm">{t(`after_m${i}`)}</span>
                      <span className="text-2xl font-bold text-emerald-400">{t(`after_v${i}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>
          </div>

          <div className="border-t border-zinc-800 p-6 text-center">
            <p className="text-zinc-400 text-sm">{t("value_line")}</p>
            <p className="text-accent-gold font-semibold mt-1 italic">{t("tagline")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRICING — Clean pricing cards
   ═══════════════════════════════════════════════ */
function PricingSection() {
  const t = useTranslations("pricing");

  const plans = [
    {
      name: t("starter"),
      price: t("starter_price"),
      period: t("starter_period"),
      desc: t("starter_desc"),
      features: [t("starter_f1"), t("starter_f2"), t("starter_f3"), t("starter_f4")],
      btn: t("starter_btn"),
      popular: false,
    },
    {
      name: t("growth"),
      price: t("growth_price"),
      period: t("growth_period"),
      desc: t("growth_desc"),
      features: [t("growth_f1"), t("growth_f2"), t("growth_f3"), t("growth_f4"), t("growth_f5")],
      btn: t("growth_btn"),
      popular: true,
      badge: t("growth_badge"),
    },
    {
      name: t("ultimate"),
      price: t("ultimate_price"),
      period: t("ultimate_period"),
      desc: t("ultimate_desc"),
      features: [t("ultimate_f1"), t("ultimate_f2"), t("ultimate_f3"), t("ultimate_f4"), t("ultimate_f5")],
      btn: t("ultimate_btn"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-brand-dark mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.12}>
              <div
                className={`relative bg-white rounded-xl p-8 h-full flex flex-col transition-shadow ${
                  plan.popular
                    ? "shadow-lg ring-2 ring-accent-purple"
                    : "shadow-sm hover:shadow-md"
                }`}
              >
                {plan.popular && plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
                  {plan.name}
                </div>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-brand-dark">{plan.price}</span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm">
                      <span className="text-accent-purple mt-0.5">—</span>
                      <span className="text-zinc-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn-primary block text-center font-semibold py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? "bg-accent-purple text-white hover:bg-accent-purple-dark"
                      : "bg-zinc-100 text-brand-dark hover:bg-zinc-200"
                  }`}
                >
                  {plan.btn}
                </Link>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator>
          <div className="text-center space-y-1">
            <p className="text-sm text-zinc-500">{t("setup_fee")}</p>
            <p className="text-xs text-zinc-400">{t("terms")}</p>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   INDUSTRIES — Image-forward cards with gradient overlay
   ═══════════════════════════════════════════════ */
function IndustriesSection() {
  const t = useTranslations("industries");

  const items = [
    { key: "item5", slug: "restaurants", img: "/images/industry-thumb-restaurants.png" },
    { key: "item1", slug: "salons", img: "/images/industry-thumb-salons.png" },
    { key: "item7", slug: "barbershops", img: "/images/industry-thumb-barbershops.png" },
    { key: "item3", slug: "tattoo-studios", img: "/images/industry-thumb-tattoo.png" },
    { key: "item2", slug: "nagelstudios", img: "/images/industry-thumb-nails.png" },
    { key: "item4", slug: "wellness-zentren", img: "/images/industry-thumb-wellness.png" },
    { key: "item6", slug: "spas", img: "/images/industry-thumb-spas.png" },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="max-w-2xl mb-14">
            <p className="section-label mb-4">{t("title")}</p>
            <h2 className="heading-serif text-3xl md:text-5xl text-brand-dark mb-4">
              {t("subtitle")}
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {items.map((item, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.06}>
              <Link
                href={`/industries/${item.slug}`}
                className="group relative block rounded-xl overflow-hidden hover-lift aspect-square"
              >
                <Image
                  src={item.img}
                  alt={t(item.key)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-sm font-semibold text-white">{t(item.key)}</div>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator>
          <div className="text-center">
            <Link
              href="/industries"
              className="inline-block text-accent-purple font-semibold hover:underline"
            >
              {t("view_all")} →
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ — Left-aligned, clean
   ═══════════════════════════════════════════════ */
function FaqSection() {
  const t = useTranslations("faq");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif text-3xl md:text-4xl text-brand-dark mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-600">{t("subtitle")}</p>
          </div>
        </ScrollAnimator>

        <FaqAccordion />

        <ScrollAnimator>
          <div className="mt-12 bg-surface rounded-xl p-8">
            <h3 className="font-bold text-brand-dark mb-2">{t("still_questions")}</h3>
            <p className="text-sm text-zinc-600 mb-4">{t("contact_text")}</p>
            <Link
              href="/contact"
              className="btn-primary inline-block bg-accent-purple text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
            >
              {t("cta_contact")}
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CLOSING — Split-screen dark CTA
   ═══════════════════════════════════════════════ */
function ClosingSection() {
  const t = useTranslations("closing");

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-5xl mb-6">{t("title")}</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {t("text")}
            </p>
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
