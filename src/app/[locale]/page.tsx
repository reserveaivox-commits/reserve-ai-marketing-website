import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import ServicesCarousel from "@/components/ServicesCarousel";

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
      <RoutingSection />
      <ServicesHubSection />
      <HowItWorksSection />
      <WhySection />
      <CaseStudySection />
      <PricingSection />
      <IndustriesSection />
      <TeamSection />
      <ClosingSection />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO — the lost booking, no single channel named
   ═══════════════════════════════════════════════ */
function HeroSection() {
  const t = useTranslations("hero");
  const channels = [
    t("channel1"),
    t("channel2"),
    t("channel3"),
    t("channel4"),
    t("channel5"),
  ];

  return (
    <section className="section-flow-light relative overflow-hidden px-3 pt-22 pb-10 md:px-6 md:pt-36 md:pb-24">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(212,168,67,0.16),_rgba(255,255,255,0)_55%)]" />
      <div className="absolute top-24 left-0 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-[#E3C27A]/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="reserve-panel max-w-7xl mx-auto relative z-10 w-full px-4 py-6 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10 lg:gap-12">
          <div className="max-w-5xl">
            <p className="section-label mb-5">{t("badge")}</p>
            <h1 className="heading-serif mb-5 w-full text-[1.95rem] leading-[0.95] tracking-[-0.05em] text-white sm:text-[2.7rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.15rem] 2xl:text-[6.6rem]">
              {t("title_lead")}{" "}
              <span className="text-[#D4A843]">{t("title_accent")}</span>
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-[0.95rem] leading-relaxed text-zinc-300 sm:mb-8 sm:text-lg md:text-xl">
              {t("subtitle")}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full rounded-full bg-[#D4A843] px-6 py-3.5 font-semibold text-[#05101b] shadow-[0_18px_40px_rgba(212,168,67,0.16)] sm:w-auto sm:px-8"
              >
                {t("cta_primary")}
              </Link>
              <a
                href="#wo-starte-ich"
                className="w-full rounded-full border border-white/12 px-6 py-3.5 font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:w-auto sm:px-8"
              >
                {t("cta_secondary")}
              </a>
            </div>
          </div>

          {/* Channel strip. Carries the scope of the company in the first
              screen, so it stays in the hero panel rather than below it. */}
          <div className="channel-strip w-full max-w-4xl">
            {channels.map((channel) => (
              <span key={channel}>{channel}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PROBLEM — a loss log, not prose
   ═══════════════════════════════════════════════ */
function ProblemSection() {
  const t = useTranslations("problem");

  // Rows 2 and 3 are things a customer wrote, so they are set as quotes.
  const rows = [1, 2, 3, 4, 5].map((i) => ({
    time: t(`r${i}_time`),
    channel: t(`r${i}_channel`),
    what: t(`r${i}_what`),
    result: t(`r${i}_result`),
    quoted: i === 2 || i === 3,
  }));

  return (
    <section className="section-flow-dark py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 max-w-3xl">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-zinc-400 italic">{t("lede")}</p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="loss-log mb-12">
              <div className="loss-row loss-header-row">
                <div className="loss-head">{t("col_time")}</div>
                <div className="loss-head">{t("col_channel")}</div>
                <div className="loss-head">{t("col_what")}</div>
                <div className="loss-head">{t("col_result")}</div>
              </div>
              {rows.map((row) => (
                <div key={row.time} className="loss-row">
                  <div className="loss-time">{row.time}</div>
                  <div className="loss-channel">{row.channel}</div>
                  <div className={`loss-what${row.quoted ? " italic" : ""}`}>{row.what}</div>
                  <div className="loss-result">{row.result}</div>
                </div>
              ))}
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <p className="heading-serif max-w-3xl text-2xl leading-snug text-white md:text-4xl">
              {t("close_lead")}{" "}
              <span className="text-[#D4A843]">{t("close_accent")}</span>
            </p>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ROUTING FORK — which entry product the visitor needs
   ═══════════════════════════════════════════════ */
function RoutingSection() {
  const t = useTranslations("routing");

  const columns = [
    {
      title: t("left_title"),
      list: t("left_list"),
      product: t("left_product"),
      desc: t("left_product_desc"),
    },
    {
      title: t("right_title"),
      list: t("right_list"),
      product: t("right_product"),
      desc: t("right_product_desc"),
    },
  ];

  return (
    <section id="wo-starte-ich" className="section-flow-light py-20 md:py-28 px-4 md:px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 max-w-3xl">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-zinc-400 italic">{t("lede")}</p>
            </div>
          </ScrollAnimator>

          <div className="routing-fork">
            <ScrollAnimator>
              <div className="routing-col h-full">
                <h3 className="heading-serif mb-4 text-2xl text-white md:text-3xl">{columns[0].title}</h3>
                <p className="mb-8 leading-relaxed text-zinc-400">{columns[0].list}</p>
                <div className="routing-entry">
                  <p className="mb-2 text-lg font-semibold text-[#D4A843]">{columns[0].product}</p>
                  <p className="text-sm leading-relaxed text-zinc-400 italic">{columns[0].desc}</p>
                </div>
              </div>
            </ScrollAnimator>

            <div className="routing-rule" aria-hidden="true" />

            <ScrollAnimator delay={0.12}>
              <div className="routing-col h-full">
                <h3 className="heading-serif mb-4 text-2xl text-white md:text-3xl">{columns[1].title}</h3>
                <p className="mb-8 leading-relaxed text-zinc-400">{columns[1].list}</p>
                <div className="routing-entry">
                  <p className="mb-2 text-lg font-semibold text-[#D4A843]">{columns[1].product}</p>
                  <p className="text-sm leading-relaxed text-zinc-400 italic">{columns[1].desc}</p>
                </div>
              </div>
            </ScrollAnimator>
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
      image: "/images/services/websites.jpg",
      variant: "service-card--websites",
      textColor: "text-service-websites",
      title: t("websites_title"),
      desc: t("websites_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "pos",
      href: "/services/pos-system",
      image: "/images/services/pos-system.jpg",
      variant: "service-card--pos",
      textColor: "text-service-pos",
      title: t("pos_title"),
      desc: t("pos_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "agents",
      href: "/services/ai-agents",
      image: "/images/services/ai-agents.jpg",
      variant: "service-card--agents",
      textColor: "text-service-agents",
      title: t("agents_title"),
      desc: t("agents_desc"),
      learnMore: t("learn_more"),
    },
    {
      key: "bots",
      href: "/services/ai-bots",
      image: "/images/services/bots.jpg",
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
        <div className="reserve-panel reserve-panel--framed px-6 py-10 md:px-10 md:py-12">
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
   ABLAUF — three real steps
   ═══════════════════════════════════════════════ */
function HowItWorksSection() {
  const t = useTranslations("how");

  const steps = [1, 2, 3].map((i) => ({
    num: `0${i}`,
    title: t(`step${i}_title`),
    desc: t(`step${i}_desc`),
  }));

  return (
    <section id="how-it-works" className="section-flow-light py-20 md:py-28 px-4 md:px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 max-w-3xl">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white">
                {t("title")}
              </h2>
            </div>
          </ScrollAnimator>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, idx) => (
              <ScrollAnimator key={step.num} delay={idx * 0.16}>
                <div className="h-full border-t border-[#D4A843]/22 pt-6">
                  <p className="heading-serif mb-4 text-4xl text-[#D4A843] md:text-5xl">{step.num}</p>
                  <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{step.desc}</p>
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
   WARUM RESERVE AI — four points
   ═══════════════════════════════════════════════ */
function WhySection() {
  const t = useTranslations("why");

  const points = [1, 2, 3, 4].map((i) => ({
    title: t(`p${i}_title`),
    desc: t(`p${i}_desc`),
  }));

  return (
    <section className="section-flow-dark py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 max-w-3xl">
              <p className="section-label mb-4">{t("badge")}</p>
              <h2 className="heading-serif text-3xl md:text-5xl text-white">
                {t("title")}
              </h2>
            </div>
          </ScrollAnimator>

          <div className="grid gap-8 sm:grid-cols-2">
            {points.map((point, idx) => (
              <ScrollAnimator key={point.title} delay={(idx % 2) * 0.12}>
                <div className="h-full border-t border-[#D4A843]/22 pt-6">
                  <h3 className="mb-3 text-lg font-semibold text-white">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{point.desc}</p>
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
   AUS DER PRAXIS — pull quote and two figures
   ═══════════════════════════════════════════════ */
function CaseStudySection() {
  const t = useTranslations("case");

  return (
    <section className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif mb-10 text-3xl md:text-5xl text-white">
              {t("title")}
            </h2>
          </ScrollAnimator>

          <div className="grid items-center gap-10 md:grid-cols-[1.6fr_1fr]">
            <ScrollAnimator>
              <blockquote className="heading-serif text-2xl leading-snug text-white md:text-3xl">
                {t("quote")}
              </blockquote>
            </ScrollAnimator>

            <ScrollAnimator delay={0.12}>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
                {[1, 2].map((i) => (
                  <div key={i} className="border-t border-[#D4A843]/22 pt-5">
                    <p className="heading-serif text-4xl text-[#D4A843] md:text-5xl">
                      {t(`fig${i}_value`)}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">{t(`fig${i}_label`)}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimator>
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

          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <ScrollAnimator key={idx} delay={idx * 0.12}>
                <div
                  className={`relative flex h-full flex-col rounded-[2rem] p-6 sm:p-8 transition-shadow ${
                    plan.popular
                      ? "bg-[#D4A843] text-[#06101c] shadow-[0_24px_60px_rgba(212,168,67,0.12)]"
                      : "bg-white/3 border border-white/8 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                  }`}
                >
                  {plan.popular && plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#0B1424] text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${plan.popular ? "text-[#0B1424]/60" : "text-zinc-500"}`}>
                    {plan.name}
                  </div>
                  <div className="mb-1">
                    <span className={`text-3xl font-bold sm:text-4xl ${plan.popular ? "text-[#0B1424]" : "text-white"}`}>{plan.price}</span>
                    <span className={plan.popular ? "text-[#0B1424]/60" : "text-zinc-500"}>{plan.period}</span>
                  </div>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-[#0B1424]/72" : "text-zinc-400"}`}>{plan.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 ${plan.popular ? "text-[#0B1424]" : "text-[#D4A843]"}`}>&bull;</span>
                        <span className={plan.popular ? "text-[#0B1424]/82" : "text-zinc-300"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`btn-primary block rounded-full py-3 text-center font-semibold transition-colors ${
                      plan.popular
                        ? "bg-[#0B1424] text-white hover:bg-black"
                        : "bg-[#D4A843] text-[#0B1424] hover:bg-[#C29A38]"
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
              <p className="text-xs text-zinc-500">{t("vat")}</p>
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
    { key: "item5", slug: "restaurants", img: "/images/industry-thumb-restaurants.jpg" },
    { key: "item1", slug: "salons", img: "/images/industry-thumb-salons.jpg" },
    { key: "item7", slug: "barbershops", img: "/images/industry-thumb-barbershops.jpg" },
    { key: "item3", slug: "tattoo-studios", img: "/images/industry-thumb-tattoo.jpg" },
    { key: "item2", slug: "nagelstudios", img: "/images/industry-thumb-nails.jpg" },
    { key: "item6", slug: "spas", img: "/images/industry-thumb-spas.jpg" },
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
            <div className="relative mb-10 aspect-[25/16] w-full overflow-hidden rounded-[1.75rem] border border-white/8 sm:mb-14">
              <Image
                src="/images/scene-guest-booking.jpg"
                alt={t("subtitle")}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,36,0)_55%,rgba(11,20,36,0.55)_100%)]" />
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
                className="inline-block text-[#D4A843] font-semibold hover:underline"
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
   TEAM — Named people, real portraits
   ═══════════════════════════════════════════════ */
function TeamSection() {
  const t = useTranslations("team");

  const members = [
    { photo: "/team/sarvesh.jpg", name: t("m1_name"), role: t("m1_role") },
    { photo: "/team/suji.jpg", name: t("m2_name"), role: t("m2_role") },
    { photo: "/team/daanish.jpg", name: t("m3_name"), role: t("m3_role") },
    { photo: "/team/dylen.jpg", name: t("m4_name"), role: t("m4_role") },
  ];

  return (
    <section id="team" className="section-flow-light py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-14 max-w-3xl">
            <p className="section-label mb-4">{t("badge")}</p>
            <h2 className="heading-serif mb-5 text-3xl md:text-5xl">{t("title")}</h2>
            <p className="mb-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t("subtitle")}
            </p>
            <p className="mb-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t("story")}
            </p>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t("goal")}
            </p>
            <Link
              href="/story"
              className="mt-5 inline-block font-semibold text-[#D4A843] hover:underline"
            >
              {t("read_story")} →
            </Link>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {members.map((m, idx) => (
            <ScrollAnimator key={m.name} delay={idx * 0.1}>
              <figure className="group">
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/4">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-base font-semibold text-white">{m.name}</p>
                  <p className="mt-0.5 text-sm text-[#D4A843]">{m.role}</p>
                </figcaption>
              </figure>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator>
          <p className="mt-12 text-base text-zinc-400">
            {t("contact_line")}{" "}
            <a
              href="mailto:contact@re-serveai.com"
              className="font-medium text-[#D4A843] underline-offset-4 hover:underline"
            >
              contact@re-serveai.com
            </a>
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CLOSING — final CTA
   ═══════════════════════════════════════════════ */
function ClosingSection() {
  const t = useTranslations("closing");

  return (
    <section className="section-flow-dark py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-14 text-center md:px-10 md:py-20">
          <ScrollAnimator>
            <h2 className="heading-serif mx-auto mb-5 max-w-3xl text-3xl text-white md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-zinc-400 italic">
              {t("text")}
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-block rounded-full bg-[#D4A843] px-8 py-3.5 font-semibold text-[#05101b] shadow-[0_18px_40px_rgba(212,168,67,0.16)]"
            >
              {t("cta")}
            </Link>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}
