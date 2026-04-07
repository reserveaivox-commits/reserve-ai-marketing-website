import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ServicesCarousel from "@/components/ServicesCarousel";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  );
}

function ServicesHero() {
  const t = useTranslations("services_hub");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-surface overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="section-label mb-6">{t("page_badge")}</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-brand-dark mb-6">
            {t("page_title")}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
            {t("page_subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full relative mt-4">
          <ServicesCarousel services={services} />
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  const t = useTranslations("services_hub");

  return (
    <section className="section-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">{t("cta_title")}</h2>
            <p className="text-lg text-zinc-400">{t("cta_subtitle")}</p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="btn-primary inline-block bg-white text-brand-navy font-semibold px-10 py-4 rounded-lg text-lg hover:bg-zinc-100 transition-colors"
            >
              {t("cta_btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
