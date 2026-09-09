import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import AnimatedCustomization from "@/components/AnimatedCustomization";

export default async function POSSystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <POSHero />
      <POSTrust />
      <POSModules />
      <POSROI />
      <POSWorkflows />
      <POSUseCases />
      <POSPricing />
      <POSImplementation />
    </>
  );
}

function POSHero() {
  const t = useTranslations("svc_pos");

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-service-pos/10 blur-3xl animate-blob" />
      <div
        className="absolute bottom-8 left-20 h-56 w-56 rounded-full bg-service-pos/5 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel max-w-4xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-pos)" }}>{t("badge")}</p>
          <h1 className="heading-serif mb-6 text-3xl text-white sm:text-4xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:mb-10 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="btn-primary rounded-lg bg-service-pos px-6 py-3.5 text-center font-semibold text-white sm:px-8"
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

function POSTrust() {
  const t = useTranslations("svc_pos");

  const stats = [
    { value: t("trust1_value"), label: t("trust1_label") },
    { value: t("trust2_value"), label: t("trust2_label") },
    { value: t("trust3_value"), label: t("trust3_label") },
    { value: t("trust4_value"), label: t("trust4_label") },
  ];

  return (
    <section className="section-flow-dark py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimator key={stat.label} delay={index * 0.05}>
              <div className="reserve-stat-card border border-service-pos/20 px-4 py-6 text-center">
                <div className="mb-2 text-2xl font-bold text-service-pos md:text-3xl">{stat.value}</div>
                <p className="text-xs text-zinc-300 md:text-sm">{stat.label}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function POSModules() {
  const t = useTranslations("svc_pos");

  const modules = [
    {
      title: t("module1_title"),
      desc: t("module1_desc"),
      image: t("module1_image"),
    },
    {
      title: t("module2_title"),
      desc: t("module2_desc"),
      image: t("module2_image"),
    },
    {
      title: t("module3_title"),
      desc: t("module3_desc"),
      image: t("module3_image"),
    },
    {
      title: t("module4_title"),
      desc: t("module4_desc"),
      image: t("module4_image"),
    },
  ];

  return (
    <section id="sub-services" className="section-flow-dark py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <p className="section-label mb-4" style={{ color: "var(--color-service-pos)" }}>{t("modules_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">{t("modules_title")}</h2>
              <p className="mx-auto max-w-2xl text-zinc-300">
                {t("modules_subtitle")}
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
            {modules.map((module, idx) => (
              <ScrollAnimator key={module.title} delay={idx * 0.08}>
                <div className="sub-service-card hover:border-service-pos/30 h-full">
                  <div className="mb-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-service-pos/40 bg-white/5 px-4 text-center text-sm text-zinc-300">
                    {module.image}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{module.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-300">{module.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function POSROI() {
  const t = useTranslations("svc_pos");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <p className="section-label mb-4" style={{ color: "var(--color-service-pos)" }}>{t("roi_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">{t("roi_title")}</h2>
              <p className="mx-auto max-w-2xl text-zinc-300">{t("roi_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <ScrollAnimator delay={0}>
              <div className="relative overflow-hidden rounded-2xl border border-service-pos/20 bg-gradient-to-br from-service-pos/8 to-transparent p-6 md:p-8">
                <div className="relative z-10">
                  <div className="mb-2 text-4xl font-bold text-service-pos md:text-5xl">{t("roi_card1_value")}</div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{t("roi_card1_title")}</h3>
                  <p className="text-sm text-zinc-300">{t("roi_card1_desc")}</p>
                </div>
              </div>
            </ScrollAnimator>
            <ScrollAnimator delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-service-pos/20 bg-gradient-to-br from-service-pos/8 to-transparent p-6 md:p-8">
                <div className="relative z-10">
                  <div className="mb-2 text-4xl font-bold text-service-pos md:text-5xl">{t("roi_card2_value")}</div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{t("roi_card2_title")}</h3>
                  <p className="text-sm text-zinc-300">{t("roi_card2_desc")}</p>
                </div>
              </div>
            </ScrollAnimator>
          </div>

          <ScrollAnimator delay={0.2}>
            <div className="mt-8 rounded-2xl border border-service-pos/20 bg-service-pos/5 p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div>
                  <p className="mb-1 text-sm text-zinc-400">{t("roi_meta1_label")}</p>
                  <p className="text-2xl font-bold text-service-pos">{t("roi_meta1_value")}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-zinc-400">{t("roi_meta2_label")}</p>
                  <p className="text-2xl font-bold text-service-pos">{t("roi_meta2_value")}</p>
                </div>
                <div className="hidden md:block">
                  <p className="mb-1 text-sm text-zinc-400">{t("roi_meta3_label")}</p>
                  <p className="text-2xl font-bold text-service-pos">{t("roi_meta3_value")}</p>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function POSWorkflows() {
  const t = useTranslations("svc_pos");

  const points = [
    t("workflow_point1"),
    t("workflow_point2"),
    t("workflow_point3"),
    t("workflow_point4"),
  ];

  const examples = [
    {
      industry: t("workflow_demo1_industry"),
      example: t("workflow_demo1_example"),
    },
    {
      industry: t("workflow_demo2_industry"),
      example: t("workflow_demo2_example"),
    },
    {
      industry: t("workflow_demo3_industry"),
      example: t("workflow_demo3_example"),
    },
  ];

  return (
    <AnimatedCustomization
      badge={t("workflow_badge")}
      title={t("workflow_title")}
      description={t("workflow_desc")}
      points={points}
      examples={examples}
      accentColor="var(--color-service-pos)"
      borderColor="rgba(18, 184, 166, 0.24)"
      examplesTitle={t("workflow_examples_title")}
    />
  );
}

function POSUseCases() {
  const t = useTranslations("svc_pos");

  const useCases = [
    {
      title: t("usecase1_title"),
      desc: t("usecase1_desc"),
      image: t("usecase1_image"),
    },
    {
      title: t("usecase2_title"),
      desc: t("usecase2_desc"),
      image: t("usecase2_image"),
    },
    {
      title: t("usecase3_title"),
      desc: t("usecase3_desc"),
      image: t("usecase3_image"),
    },
  ];

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">{t("usecases_title")}</h2>
              <p className="mx-auto max-w-2xl text-zinc-300">{t("usecases_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item, idx) => (
              <ScrollAnimator key={item.title} delay={idx * 0.12}>
                <div className="h-full rounded-xl border border-white/8 bg-white/4 p-6">
                  <div className="mb-4 flex h-28 items-center justify-center rounded-lg border border-dashed border-service-pos/40 bg-white/5 text-xs text-zinc-300">
                    {item.image}
                  </div>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-300">{item.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function POSPricing() {
  const t = useTranslations("svc_pos");

  const plans = [
    {
      name: t("price_starter_name"),
      price: t("price_starter_price"),
      unit: t("price_unit"),
      features: [
        t("price_starter_f1"),
        t("price_starter_f2"),
        t("price_starter_f3"),
        t("price_starter_f4"),
      ],
      highlight: false,
    },
    {
      name: t("price_growth_name"),
      price: t("price_growth_price"),
      unit: t("price_unit"),
      features: [
        t("price_growth_f1"),
        t("price_growth_f2"),
        t("price_growth_f3"),
        t("price_growth_f4"),
      ],
      highlight: true,
    },
    {
      name: t("price_enterprise_name"),
      price: t("price_enterprise_price"),
      unit: "",
      features: [
        t("price_enterprise_f1"),
        t("price_enterprise_f2"),
        t("price_enterprise_f3"),
        t("price_enterprise_f4"),
      ],
      highlight: false,
    },
  ];

  return (
    <section className="section-flow-light py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-pos)" }}>{t("pricing_badge")}</p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">{t("pricing_title")}</h2>
            <p className="mx-auto max-w-2xl text-zinc-300">{t("pricing_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <ScrollAnimator key={plan.name} delay={idx * 0.1}>
              <div
                className={`rounded-2xl border p-6 md:p-8 ${
                  plan.highlight
                    ? "border-service-pos/50 bg-gradient-to-br from-service-pos/12 to-transparent ring-2 ring-service-pos/20"
                    : "border-white/10 bg-white/4"
                }`}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-block rounded-full bg-service-pos/20 px-3 py-1 text-xs font-semibold text-service-pos">
                    {t("pricing_popular")}
                  </div>
                )}
                <h3 className="mb-1 text-lg font-bold text-white">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-service-pos">
                    {plan.price}
                    <span className="text-lg text-zinc-400">{plan.unit}</span>
                  </div>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 text-service-pos">✓</span>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full rounded-lg py-2.5 px-4 text-center font-semibold transition ${
                    plan.highlight
                      ? "bg-service-pos text-white hover:bg-service-pos/90"
                      : "border border-service-pos/30 text-service-pos hover:bg-service-pos/10"
                  }`}
                >
                  {t("pricing_cta")}
                </Link>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function POSImplementation() {
  const t = useTranslations("svc_pos");

  const steps = [
    { step: "1", title: t("impl1_title"), desc: t("impl1_desc") },
    { step: "2", title: t("impl2_title"), desc: t("impl2_desc") },
    { step: "3", title: t("impl3_title"), desc: t("impl3_desc") },
    { step: "4", title: t("impl4_title"), desc: t("impl4_desc") },
  ];

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
              <p className="section-label mb-4" style={{ color: "var(--color-service-pos)" }}>{t("impl_badge")}</p>
              <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">{t("impl_title")}</h2>
              <p className="mx-auto max-w-2xl text-zinc-300">{t("impl_subtitle")}</p>
            </div>
          </ScrollAnimator>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
            {steps.map((item, idx) => (
              <ScrollAnimator key={item.step} delay={idx * 0.08}>
                <div className="relative">
                  {idx < 3 && (
                    <div className="absolute top-1/4 -right-2 hidden h-0.5 w-4 bg-gradient-to-r from-service-pos/50 to-transparent md:block" />
                  )}
                  <div className="rounded-xl border border-service-pos/20 bg-white/4 p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-service-pos/20 font-bold text-service-pos">
                      {item.step}
                    </div>
                    <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          <ScrollAnimator delay={0.3}>
            <div className="mt-12 text-center">
              <p className="mb-6 text-sm text-zinc-400">{t("closing_text")}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-service-pos px-6 py-3 font-semibold text-white transition hover:bg-service-pos/90"
              >
                {t("closing_cta")}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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