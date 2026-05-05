import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import {
  getFeaturedWebsiteShowcaseItems,
  websiteShowcaseCategories,
  websiteShowcaseItems,
} from "@/lib/websiteShowcase";

export default async function WebsitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <WebsitesHero />
      <WebsitesSubServices />
      <WebsiteShowcasePreview />
      <WebsitesProcess />
    </>
  );
}

function WebsitesHero() {
  const t = useTranslations("svc_websites");

  return (
    <section className="section-flow-light relative pt-24 pb-12 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-10 w-72 h-72 bg-service-websites/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-service-websites/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reserve-panel max-w-4xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <p className="section-label mb-6" style={{ color: "var(--color-service-websites)" }}>
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
              className="btn-primary rounded-lg bg-service-websites px-6 py-3.5 text-center font-semibold text-white sm:px-8"
            >
              {t("cta")}
            </Link>
            <a
              href="#sub-services"
              className="rounded-lg border border-white/12 px-6 py-3.5 text-center font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:px-8"
            >
              {t("learn_more")}
            </a>
            <Link
              href="/services/websites/showcase"
              className="rounded-lg border border-white/12 px-6 py-3.5 text-center font-semibold text-zinc-200 transition-colors hover:bg-white/6 sm:px-8"
            >
              {t("showcase_cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsitesSubServices() {
  const t = useTranslations("svc_websites");

  const subServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      titleKey: "sub1_title",
      descKey: "sub1_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      titleKey: "sub2_title",
      descKey: "sub2_desc",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      titleKey: "sub3_title",
      descKey: "sub3_desc",
    },
  ];

  return (
    <section id="sub-services" className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--color-service-websites)" }}>
              {t("sub_badge")}
            </p>
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-5xl">
              {t("sub_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("sub_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {subServices.map((svc, idx) => (
            <ScrollAnimator key={idx} delay={idx * 0.1}>
              <div className="sub-service-card hover:border-service-websites/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-service-websites/10 text-service-websites flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(svc.titleKey)}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{t(svc.descKey)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteShowcasePreview() {
  const t = useTranslations("svc_websites");
  const featuredItems = getFeaturedWebsiteShowcaseItems().slice(0, 4);

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label mb-4" style={{ color: "var(--color-service-websites)" }}>
                {t("showcase_badge")}
              </p>
              <h2 className="heading-serif max-w-3xl text-3xl text-white md:text-5xl">
                {t("showcase_title")}
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-300">{t("showcase_subtitle")}</p>
            </div>
            <Link
              href="/services/websites/showcase"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#8effa8] px-6 py-3.5 font-semibold text-[#04101b] transition-colors hover:bg-[#79f69c] sm:w-auto"
            >
              {t("showcase_link")}
            </Link>
          </div>
        </ScrollAnimator>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, index) => (
            <ScrollAnimator key={item.slug} delay={index * 0.08}>
              <Link
                href="/services/websites/showcase"
                className="group block h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045] transition-colors hover:border-[#8effa8]/35"
              >
                <div className="relative aspect-[4/5] bg-black/40">
                  <Image
                    src={item.image}
                    alt={t("showcase_image_alt", { name: item.name })}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 92vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-zinc-400">{item.tags.slice(0, 2).join(" / ")}</p>
                </div>
              </Link>
            </ScrollAnimator>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] px-5 py-5">
            <p className="text-3xl font-bold text-white">{websiteShowcaseItems.length}</p>
            <p className="mt-2 text-sm text-zinc-400">{t("showcase_metric1_label")}</p>
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] px-5 py-5">
            <p className="text-3xl font-bold text-white">{websiteShowcaseCategories.length}</p>
            <p className="mt-2 text-sm text-zinc-400">{t("showcase_metric2_label")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsitesProcess() {
  const t = useTranslations("svc_websites");

  return (
    <section className="section-flow-dark py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reserve-panel-dark px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
          <ScrollAnimator>
            <div className="mb-12 text-center md:mb-16">
            <h2 className="heading-serif mb-4 text-3xl text-white md:text-4xl">
              {t("process_title")}
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">{t("process_subtitle")}</p>
          </div>
        </ScrollAnimator>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {[1, 2, 3, 4].map((i, idx) => (
            <ScrollAnimator key={i} delay={idx * 0.12}>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/4 px-5 py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-service-websites/10 text-service-websites flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {i}
                </div>
                <h3 className="font-bold text-white mb-2">{t(`process_step${i}_title`)}</h3>
                <p className="text-sm text-zinc-300">{t(`process_step${i}_desc`)}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
