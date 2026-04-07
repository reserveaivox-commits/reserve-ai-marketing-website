import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
      <BookingSection />
      <ContactCTA />
    </>
  );
}

function ContactHero() {
  const t = useTranslations("contact_page");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-surface overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="section-label mb-6">{t("badge")}</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-brand-dark mb-6">
            {t("title")}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
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
      value: "info@reserve-ai.com",
      href: "mailto:info@reserve-ai.com",
    },
    {
      icon: "/icons/icon-location.png",
      title: t("location_title"),
      subtitle: t("location_subtitle"),
      value: "München, Deutschland",
      href: undefined,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="bg-surface rounded-xl p-6 text-center hover-lift">
                <div className="mb-3 flex justify-center">
                  <Image src={card.icon} alt={card.title} width={36} height={36} />
                </div>
                <h3 className="font-bold text-brand-dark">{card.title}</h3>
                <p className="text-sm text-zinc-500 mb-2">{card.subtitle}</p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-accent-purple font-semibold hover:underline"
                  >
                    {card.value}
                  </a>
                ) : (
                  <span className="text-accent-purple font-semibold">
                    {card.value}
                  </span>
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollAnimator direction="left">
            <div>
              <h2 className="heading-serif text-2xl md:text-3xl text-brand-dark mb-2">
                {t("form_title")}
              </h2>
              <p className="text-zinc-500 mb-8">{t("form_subtitle")}</p>
              <ContactForm />
            </div>
          </ScrollAnimator>

          {/* Business Hours */}
          <ScrollAnimator direction="right">
            <div className="bg-surface rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-6">
                {t("hours_title")}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                  <span className="text-zinc-600">{t("hours_weekdays")}</span>
                  <span className="font-semibold text-brand-dark">
                    09:00 – 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                  <span className="text-zinc-600">{t("hours_weekend")}</span>
                  <span className="font-semibold text-brand-dark">
                    {t("hours_appointment")}
                  </span>
                </div>
              </div>

              <div className="mt-8 bg-accent-purple/5 rounded-xl p-6">
                <p className="text-sm text-zinc-600">{t("privacy")}</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  const t = useTranslations("contact_page");

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimator>
          <h2 className="heading-serif text-3xl md:text-4xl text-brand-dark mb-4">
            {t("book_title")}
          </h2>
          <p className="text-zinc-600 mb-8">{t("book_subtitle")}</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["book_f1", "book_f2", "book_f3"].map((key) => (
              <div
                key={key}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 text-sm shadow-sm"
              >
                <span className="text-accent-purple font-bold">—</span>
                <span className="text-zinc-600">{t(key as "book_f1")}</span>
              </div>
            ))}
          </div>

          {/* Calendly placeholder */}
          <div className="bg-white rounded-xl p-12 shadow-sm">
            <div className="text-center">
              <Image
                src="/images/booking-calendar.png"
                alt="Booking Calendar"
                width={300}
                height={200}
                className="mx-auto rounded-xl mb-4"
              />
              <p className="font-semibold mb-1">Calendly Embed</p>
              <p className="text-sm text-zinc-400">
                Booking widget will be embedded here
              </p>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

function ContactCTA() {
  const t = useTranslations("contact_page");

  return (
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">{t("cta_title")}</h2>
            <p className="text-lg text-zinc-400">{t("cta_subtitle")}</p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              href="/#pricing"
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
