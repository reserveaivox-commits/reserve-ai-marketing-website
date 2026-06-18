import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import FaqAccordion from "@/components/FaqAccordion";
import ServicesCarousel from "@/components/ServicesCarousel";
import HeroDemoGate from "@/components/HeroDemoGate";
import CaseStudyDashboard from "@/components/CaseStudyDashboard";
import WhyReserveSection from "@/components/WhyReserveSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="reserve-shell">
      <HeroSection />
      <ProblemSection />
      <ServicesHubSection />
      <HowItWorksSection />
      <WhyReserveSection />
      <CaseStudySection />
      <PricingSection />
      <IndustriesSection />
      <FaqSection />
      <ClosingSection />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO — Updated for multi-service platform
   ═══════════════════════════════════════════════ */
function HeroSection() {
  const t = useTranslations("hero");
  const samplePrompts = [
    t("panel_card1_title"),
    t("panel_card2_title"),
    t("panel_card3_title"),
  ];

  return (
    <section className="section-flow-light relative overflow-hidden px-3 pt-22 pb-10 md:px-6 md:pt-36 md:pb-24">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(79,253,142,0.16),_rgba(255,255,255,0)_55%)]" />
      <div className="absolute top-24 left-0 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="reserve-panel max-w-7xl mx-auto relative z-10 w-full px-4 py-6 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10 lg:gap-12">
          <div className="mb-1 flex flex-wrap justify-center gap-2 sm:gap-3">
            {samplePrompts.map((item, idx) => (
              <span key={item} className="reserve-chip text-[0.72rem] sm:text-[0.8rem]">
                <span className={`h-2.5 w-2.5 rounded-full ${idx === 0 ? "bg-emerald-500" : idx === 1 ? "bg-cyan-400" : "bg-white"}`} />
                {item}
              </span>
            ))}
          </div>

          <div className="max-w-5xl">
            <p className="section-label mb-5">{t("badge")}</p>
            <h1 className="heading-serif mb-5 w-full text-[1.95rem] leading-[0.95] tracking-[-0.05em] text-white sm:text-[2.7rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.15rem] 2xl:text-[6.6rem]">
              {t("title")}
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-[0.95rem] leading-relaxed text-zinc-300 sm:mb-8 sm:text-lg md:text-xl">
              {t("subtitle")}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full rounded-full bg-[#8effa8] px-6 py-3.5 font-semibold text-[#05101b] shadow-[0_18px_40px_rgba(81,255,154,0.16)] sm:w-auto sm:px-8"
              >
                {t("cta_primary")}
              </Link>
              <a
                href="#demo"
                className="w-full rounded-full border border-white/12 px-6 py-3.5 font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:w-auto sm:px-8"
              >
                {t("cta_secondary")}
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-5xl">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-[radial-gradient(circle_at_center,_rgba(142,255,168,0.12),_transparent_38%)] blur-2xl" />
            <HeroDemoGate compact />
          </div>

          <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="reserve-stat-card px-5 py-5 text-center">
                    <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                      {t(`stat${i}_num`)}
                    </div>
                <div className="text-sm text-zinc-400 mt-2">
                  {t(`stat${i}_text`)}
                </div>
              </div>
            ))}
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
      key: "bots",
      href: "/services/ai-bots",
      image: "/images/services/bots.png",
      variant: "service-card--bots",
      textColor: "text-service-bots",
      title: t("bots_title"),
      desc: t("bots_desc"),
      learnMore: t("learn_more"),
    },
  ];

  return (
    <section id="services" className="section-flow-light py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-end mb-12">
              <div>
                <p className="section-label mb-4">{t("badge")}</p>
                <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                  {t("title")}
                </h2>
              </div>
              <p className="text-zinc-300 text-lg max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
          </ScrollAnimator>

          <div className="w-full relative mt-4">
            <ServicesCarousel services={services} />
          </div>
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
    {
      title: t("point1_title"),
      desc: t("point1_desc"),
      icon: "/icons/icon-phone.png",
      accent: "from-emerald-400/18 to-emerald-400/0",
      tint: "bg-emerald-400/10",
    },
    {
      title: t("point2_title"),
      desc: t("point2_desc"),
      icon: "/icons/icon-instant.png",
      accent: "from-cyan-400/18 to-cyan-400/0",
      tint: "bg-cyan-400/10",
    },
    {
      title: t("point3_title"),
      desc: t("point3_desc"),
      icon: "/icons/icon-lost-revenue.png",
      accent: "from-amber-300/18 to-amber-300/0",
      tint: "bg-amber-300/10",
    },
  ];

  return (
    <section className="section-flow-dark py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
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
              <ScrollAnimator key={idx} delay={idx * 0.24}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-6 py-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${point.accent} opacity-80`} />
                  <div className="relative flex h-full flex-col items-center">
                    <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/8 ${point.tint} shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
                      <Image src={point.icon} alt={point.title} width={30} height={30} className="brightness-0 invert opacity-90" />
                    </div>
                    <div className="mb-4 h-px w-12 bg-white/10" />
                    <h3 className="text-lg font-semibold text-white mb-2 min-h-[3.5rem] flex items-center justify-center">
                      {point.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          <ScrollAnimator>
            <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-accent-gold/30 bg-accent-gold/5 px-4 py-5 text-center sm:px-8">
              <p className="font-semibold text-accent-gold">
                ✓ {t("solution")}
              </p>
            </div>
          </ScrollAnimator>
        </div>
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
    <section id="how-it-works" className="section-flow-dark py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl mb-4">
                {t("title")}
              </h2>
            </div>
          </ScrollAnimator>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, idx) => (
                <ScrollAnimator key={idx} delay={idx * 0.15}>
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] px-6 py-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/14 to-emerald-400/0 opacity-80" />
                    <div className="relative flex h-full flex-col items-center">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/8 bg-emerald-400/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <Image src={stepIcons[idx]} alt={step.title} width={30} height={30} className="brightness-0 invert opacity-90" />
                      </div>
                      <div className="mb-4 flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Step {idx + 1}
                      </div>
                      <div className="mb-3 font-serif text-5xl font-bold text-white/8 md:text-6xl">{idx + 1}</div>
                      <h3 className="mb-3 flex min-h-[auto] items-center justify-center text-lg font-bold text-white md:min-h-[3.5rem]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
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
  const beforeMetrics = [1, 2, 3].map((i) => ({
    label: t(`before_m${i}`),
    value: t(`before_v${i}`),
  }));
  const afterMetrics = [1, 2, 3].map((i) => ({
    label: t(`after_m${i}`),
    value: t(`after_v${i}`),
  }));

  return (
    <section className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="max-w-2xl mb-16">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-zinc-300">{t("subtitle")}</p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <CaseStudyDashboard
              beforeTitle={t("before_title")}
              afterTitle={t("after_title")}
              beforeMetrics={beforeMetrics}
              afterMetrics={afterMetrics}
            />
          </ScrollAnimator>
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
    <section id="pricing" className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto">{t("subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.12}>
                <div
                  className={`relative flex h-full flex-col rounded-[2rem] p-6 sm:p-8 transition-shadow ${
                    plan.popular
                      ? "bg-[#8effa8] text-[#06101c] shadow-[0_24px_60px_rgba(81,255,154,0.12)]"
                      : "bg-white/3 border border-white/8 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                  }`}
                >
                  {plan.popular && plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#04101b] text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${plan.popular ? "text-[#04101b]/60" : "text-zinc-500"}`}>
                    {plan.name}
                  </div>
                  <div className="mb-1">
                    <span className={`text-3xl font-bold sm:text-4xl ${plan.popular ? "text-[#04101b]" : "text-white"}`}>{plan.price}</span>
                    <span className={plan.popular ? "text-[#04101b]/60" : "text-zinc-500"}>{plan.period}</span>
                  </div>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-[#04101b]/72" : "text-zinc-400"}`}>{plan.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 ${plan.popular ? "text-[#04101b]" : "text-[#8effa8]"}`}>—</span>
                        <span className={plan.popular ? "text-[#04101b]/82" : "text-zinc-300"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`btn-primary block rounded-full py-3 text-center font-semibold transition-colors ${
                      plan.popular
                        ? "bg-[#04101b] text-white hover:bg-black"
                        : "bg-[#8effa8] text-[#04101b] hover:bg-[#76f494]"
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
              <p className="text-sm text-zinc-400">{t("setup_fee")}</p>
              <p className="text-xs text-zinc-500">{t("terms")}</p>
            </div>
          </ScrollAnimator>
        </div>
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
    <section className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-4 py-8 sm:px-6 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="max-w-2xl mb-10 sm:mb-14">
              <p className="section-label mb-4">{t("title")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("subtitle")}
              </h2>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:hidden">
              {items.slice(0, 4).map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="group relative block overflow-hidden rounded-[1.25rem] hover-lift"
                >
                  <div className="relative aspect-[0.88]">
                    <Image
                      src={item.img}
                      alt={t(item.key)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-xs font-semibold leading-tight text-white">{t(item.key)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="industries-marquee mb-10 hidden sm:block">
              <div className="industries-track">
                {[...items, ...items].map((item, idx) => (
                  <Link
                    key={`${item.slug}-${idx}`}
                    href={`/industries/${item.slug}`}
                    className="industries-card group relative block overflow-hidden rounded-[1.75rem] hover-lift"
                  >
                    <div className="relative aspect-square">
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="text-center">
              <Link
                href="/industries"
                className="inline-block text-[#8effa8] font-semibold hover:underline"
              >
                {t("view_all")} →
              </Link>
            </div>
          </ScrollAnimator>
        </div>
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
    <section className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-4xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-zinc-300">{t("subtitle")}</p>
            </div>
          </ScrollAnimator>

          <FaqAccordion />

          <ScrollAnimator>
            <div className="mt-12 rounded-[1.75rem] border border-white/8 bg-white/4 p-5 sm:p-8">
              <h3 className="font-bold text-white mb-2">{t("still_questions")}</h3>
              <p className="text-sm text-zinc-300 mb-4">{t("contact_text")}</p>
              <Link
                href="/contact"
                className="btn-primary inline-block rounded-full bg-[#8effa8] px-6 py-2.5 text-sm font-semibold text-[#04101b]"
              >
                {t("cta_contact")}
              </Link>
            </div>
          </ScrollAnimator>
        </div>
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
    <section className="section-flow-dark py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="heading-serif mb-6 text-3xl md:text-5xl">{t("title")}</h2>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                {t("text")}
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/contact"
                className="btn-primary inline-flex w-full items-center justify-center rounded-full bg-[#8effa8] px-8 py-4 text-base font-semibold text-[#04101b] transition-colors hover:bg-[#76f494] sm:w-auto sm:px-10 sm:text-lg"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
