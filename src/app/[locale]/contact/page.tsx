import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
    </>
  );
}

function ContactHero() {
  const t = useTranslations("contact_page");

  return (
    <section className="section-flow-light relative overflow-hidden px-4 pt-28 pb-10 md:px-6 md:pt-36 md:pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reserve-panel-dark relative overflow-hidden px-8 py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,rgba(142,255,168,0.14),transparent_58%)]" />
          <div className="relative z-10 max-w-3xl">
            <p className="section-label mb-6">{t("badge")}</p>
            <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">
              {t("title")}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const t = useTranslations("contact_page");

  const cards = [
    {
      icon: "/icons/icon-phone.png",
      title: t("phone_title"),
      subtitle: t("phone_subtitle"),
      value: "+49 176 123 456 78",
      href: "tel:+4917612345678",
    },
    {
      icon: "/icons/icon-email.png",
      title: t("email_title"),
      subtitle: t("email_subtitle"),
      value: "reserveaivox@gmail.com",
      href: "mailto:reserveaivox@gmail.com",
    },
    {
      icon: "/icons/icon-location.png",
      title: t("location_title"),
      subtitle: t("location_subtitle"),
      value: "Berlin, Deutschland",
      href: undefined,
    },
  ];

  return (
    <section className="px-4 py-6 md:px-6 md:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="reserve-stat-card rounded-[28px] p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Image src={card.icon} alt={card.title} width={36} height={36} />
                  </div>
                </div>
                <h3 className="font-bold text-white">{card.title}</h3>
                <p className="mb-2 text-sm text-zinc-400">{card.subtitle}</p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="font-semibold text-[#8effa8] transition-colors hover:text-white"
                  >
                    {card.value}
                  </a>
                ) : (
                  <span className="font-semibold text-[#8effa8]">{card.value}</span>
                )}
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const t = useTranslations("contact_page");

  return (
    <section className="px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollAnimator direction="left">
            <div className="reserve-panel rounded-[32px] p-8 md:p-10">
              <h2 className="heading-serif mb-2 text-2xl text-white md:text-3xl">
                {t("form_title")}
              </h2>
              <p className="mb-8 text-zinc-400">{t("form_subtitle")}</p>
              <ContactForm />
            </div>
          </ScrollAnimator>

          <ScrollAnimator direction="right">
            <div className="reserve-panel-dark rounded-[32px] p-8 md:p-10">
              <h3 className="mb-6 text-xl font-bold text-white">
                {t("hours_title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 py-3">
                  <span className="text-zinc-300">{t("hours_weekdays")}</span>
                  <span className="font-semibold text-white">
                    09:00 – 18:00
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/8 py-3">
                  <span className="text-zinc-300">{t("hours_weekend")}</span>
                  <span className="font-semibold text-white">
                    {t("hours_appointment")}
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-[24px] border border-[#8effa8]/10 bg-white/5 p-6">
                <p className="text-sm leading-relaxed text-zinc-300">{t("privacy")}</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}
