import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
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
    </>
  );
}

function ServicesHero() {
  const t = useTranslations("services_hub");

  return (
    <section className="section-flow-light relative px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-20">
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-accent-purple/5 blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-8 py-10 md:px-10 md:py-12">
          <p className="section-label mb-6">{t("page_badge")}</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-white mb-6">
            {t("page_title")}
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
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
  ];

  return (
    <section className="section-flow-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-6 py-8 md:px-8 md:py-10">
          <ServicesCarousel services={services} />
        </div>
      </div>
    </section>
  );
}
