import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";
import {
  getFeaturedWebsiteShowcaseItems,
  getWebsiteShowcaseItemsByCategory,
  websiteShowcaseCategories,
  websiteShowcaseItems,
  type WebsiteShowcaseItem,
} from "@/lib/websiteShowcase";

export default async function WebsiteShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const groupedItems = websiteShowcaseCategories.map((category) => ({
    ...category,
    items: getWebsiteShowcaseItemsByCategory(category.id),
  }));

  return (
    <>
      <WebsiteShowcaseHero />
      <section className="section-flow-dark py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryNav />
          <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
            {groupedItems.map((category) => (
              <WebsiteShowcaseCategorySection
                key={category.id}
                id={category.id}
                label={category.label}
                description={category.description}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>
      <WebsiteShowcaseCta />
    </>
  );
}

function WebsiteShowcaseHero() {
  const t = useTranslations("website_showcase");
  const featuredItems = getFeaturedWebsiteShowcaseItems().slice(0, 3);

  return (
    <section className="section-flow-light relative pt-24 pb-14 md:pt-36 md:pb-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/services/websites"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
        >
          <span aria-hidden="true">&larr;</span>
          {t("back")}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-5 text-[#8effa8]">{t("eyebrow")}</p>
            <h1 className="heading-serif max-w-4xl text-4xl text-white sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#8effa8] px-6 py-3.5 font-semibold text-[#04101b] transition-colors hover:bg-[#79f69c]"
              >
                {t("primary_cta")}
              </Link>
              <a
                href="#landing-pages"
                className="inline-flex items-center justify-center rounded-lg border border-white/12 px-6 py-3.5 font-semibold text-zinc-200 transition-colors hover:bg-white/6"
              >
                {t("secondary_cta")}
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {featuredItems.map((item, index) => (
              <div
                key={item.slug}
                className={`overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] ${
                  index === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div className="relative aspect-[4/5] bg-black/40">
                  <Image
                    src={item.image}
                    alt={t("image_alt", { name: item.name })}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 md:mt-16">
          <Stat value={`${websiteShowcaseItems.length}`} label={t("stats_examples_label")} />
          <Stat value={`${websiteShowcaseCategories.length}`} label={t("stats_types_label")} />
          <Stat value={t("stats_source_value")} label={t("stats_source_label")} />
        </div>
      </div>
    </section>
  );
}

function CategoryNav() {
  const t = useTranslations("website_showcase");

  return (
    <nav aria-label={t("categories_label")} className="flex flex-wrap gap-2">
      {websiteShowcaseCategories.map((category) => (
        <a
          key={category.id}
          href={`#${category.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-[#8effa8]/40 hover:bg-[#8effa8]/10 hover:text-white"
        >
          {category.label}
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-zinc-300">
            {getWebsiteShowcaseItemsByCategory(category.id).length}
          </span>
        </a>
      ))}
    </nav>
  );
}

function WebsiteShowcaseCategorySection({
  id,
  label,
  description,
  items,
}: {
  id: string;
  label: string;
  description: string;
  items: WebsiteShowcaseItem[];
}) {
  const t = useTranslations("website_showcase");

  return (
    <section id={id} className="scroll-mt-28">
      <ScrollAnimator>
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="heading-serif text-3xl text-white md:text-4xl">{label}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {description}
            </p>
          </div>
          <p className="text-sm font-semibold text-zinc-400">
            {t("examples_count", { count: items.length })}
          </p>
        </div>
      </ScrollAnimator>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <ScrollAnimator key={item.slug} delay={Math.min(index * 0.04, 0.2)}>
            <WebsiteShowcaseCard item={item} />
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}

function WebsiteShowcaseCard({ item }: { item: WebsiteShowcaseItem }) {
  const t = useTranslations("website_showcase");

  return (
    <article className="group h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045] shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-colors hover:border-[#8effa8]/35">
      <div className="relative aspect-[16/10] bg-black/40">
        <Image
          src={item.image}
          alt={t("image_alt", { name: item.name })}
          fill
          sizes="(min-width: 1280px) 31vw, (min-width: 640px) 48vw, 92vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-h-52 flex-col p-5">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function WebsiteShowcaseCta() {
  const t = useTranslations("website_showcase");

  return (
    <section className="section-flow-dark pb-16 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-[#8effa8]/20 bg-[#8effa8]/10 px-5 py-8 sm:px-8 md:px-10 md:py-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="section-label mb-3 text-[#8effa8]">{t("cta_badge")}</p>
              <h2 className="heading-serif text-3xl text-white md:text-4xl">{t("cta_title")}</h2>
              <p className="mt-3 max-w-2xl text-zinc-300">{t("cta_subtitle")}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#8effa8] px-6 py-3.5 font-semibold text-[#04101b] transition-colors hover:bg-[#79f69c] sm:w-auto"
            >
              {t("cta_button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-5 py-5">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
