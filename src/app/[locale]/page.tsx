import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import FaqAccordion from "@/components/FaqAccordion";
import ServicesCarousel from "@/components/ServicesCarousel";
import HeroDemoGate from "@/components/HeroDemoGate";

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
      <DemoSection />
      <ServicesHubSection />
      <ProblemSection />
      <HowItWorksSection />
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
    <section className="section-flow-light relative overflow-hidden px-4 pt-28 pb-12 md:px-6 md:pt-36 md:pb-24">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(79,253,142,0.16),_rgba(255,255,255,0)_55%)]" />
      <div className="absolute top-24 left-0 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="reserve-panel max-w-7xl mx-auto relative z-10 w-full px-6 py-12 sm:px-8 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col items-center text-center gap-10 lg:gap-12">
          <div className="flex flex-wrap justify-center gap-3 mb-1">
            {samplePrompts.map((item, idx) => (
              <span key={item} className="reserve-chip">
                <span className={`h-2.5 w-2.5 rounded-full ${idx === 0 ? "bg-emerald-500" : idx === 1 ? "bg-cyan-400" : "bg-white"}`} />
                {item}
              </span>
            ))}
          </div>

          <div className="max-w-5xl">
            <p className="section-label mb-5">{t("badge")}</p>
            <h1 className="heading-serif w-full text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.15rem] 2xl:text-[6.6rem] leading-[0.92] tracking-[-0.04em] text-white mb-6">
              {t("title")}
            </h1>
            <p className="mx-auto text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary bg-[#8effa8] text-[#05101b] font-semibold px-8 py-3.5 rounded-full shadow-[0_18px_40px_rgba(81,255,154,0.16)]"
              >
                {t("cta_primary")}
              </Link>
              <a
                href="#demo"
                className="border border-white/12 text-zinc-200 font-semibold px-8 py-3.5 rounded-full hover:bg-white/6 transition-colors"
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
                <div className="text-2xl md:text-3xl font-bold text-white">
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

function DemoSection() {
  const t = useTranslations("hero");

  return (
    <section id="demo" className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="max-w-3xl mb-12 md:mb-14">
              <p className="section-label mb-4">{t("embed_label")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                Test our demo
              </h2>
              <p className="text-zinc-300 text-lg max-w-2xl">
                {t("embed_title")}
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={0.08}>
            <div className="relative max-w-4xl">
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/12 via-white/0 to-cyan-400/10 blur-3xl" />
              <HeroDemoGate />
            </div>
          </ScrollAnimator>
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
    { title: t("point1_title"), desc: t("point1_desc"), icon: "/icons/icon-missed-calls.png" },
    { title: t("point2_title"), desc: t("point2_desc"), icon: "/icons/icon-wasted-time.png" },
    { title: t("point3_title"), desc: t("point3_desc"), icon: "/icons/icon-lost-revenue.png" },
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
              <ScrollAnimator key={idx} delay={idx * 0.12}>
                <div className="text-center rounded-[2rem] border border-white/8 bg-white/4 px-6 py-8">
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
            <div className="border border-accent-gold/30 rounded-[1.75rem] p-5 text-center max-w-xl mx-auto bg-accent-gold/5">
              <p className="text-accent-gold font-semibold">
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
              <p className="text-zinc-400 max-w-2xl mx-auto">{t("subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[16.666%] right-[16.666%] h-px bg-zinc-700" />

            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, idx) => (
                <ScrollAnimator key={idx} delay={idx * 0.15}>
                  <div className="text-center relative rounded-[2rem] border border-white/8 bg-white/4 px-6 py-8">
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

          <div className="bg-brand-navy rounded-[2rem] overflow-hidden">
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

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {plans.map((plan, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.12}>
                <div
                  className={`relative rounded-[2rem] p-8 h-full flex flex-col transition-shadow ${
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
                    <span className={`text-4xl font-bold ${plan.popular ? "text-[#04101b]" : "text-white"}`}>{plan.price}</span>
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
                    className={`btn-primary block text-center font-semibold py-3 rounded-full transition-colors ${
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
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="max-w-2xl mb-14">
              <p className="section-label mb-4">{t("title")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("subtitle")}
              </h2>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {items.map((item, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.06}>
                <Link
                  href={`/industries/${item.slug}`}
                  className="group relative block rounded-[1.75rem] overflow-hidden hover-lift aspect-square"
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
            <div className="mt-12 bg-white/4 border border-white/8 rounded-[1.75rem] p-8">
              <h3 className="font-bold text-white mb-2">{t("still_questions")}</h3>
              <p className="text-sm text-zinc-300 mb-4">{t("contact_text")}</p>
              <Link
                href="/contact"
                className="btn-primary inline-block bg-[#8effa8] text-[#04101b] font-semibold px-6 py-2.5 rounded-full text-sm"
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
                className="btn-primary inline-block bg-[#8effa8] text-[#04101b] font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#76f494] transition-colors"
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
