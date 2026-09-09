import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollAnimator from "@/components/ScrollAnimator";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StoryHero />
      <StoryBody />
      <StoryCta />
    </>
  );
}

function StoryHero() {
  const t = useTranslations("founder_story");

  return (
    <section className="section-flow-light px-4 pt-28 pb-10 md:px-6 md:pt-36 md:pb-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollAnimator>
          <p className="section-label mb-4">{t("badge")}</p>
          <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">
            {t("title")}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            {t("lede")}
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}

function StoryBody() {
  const t = useTranslations("founder_story");
  const tTeam = useTranslations("team");

  const chapters = [
    {
      title: t("s1_title"),
      paras: [t("s1_p1"), t("s1_p2")],
      image: {
        src: "/images/story-hackathon-group.jpg",
        alt: t("group_alt"),
        width: 1600,
        height: 1066,
      },
    },
    { title: t("s2_title"), paras: [t("s2_p1"), t("s2_p2")], image: null },
    {
      title: t("s3_title"),
      paras: [t("s3_p1"), t("s3_p2")],
      image: {
        src: "/images/story-hackathon-stage.jpg",
        alt: t("stage_alt"),
        width: 1179,
        height: 627,
      },
    },
    { title: t("s4_title"), paras: [t("s4_p1"), t("s4_p2"), t("s4_p3")], image: null },
  ];

  return (
    <section className="section-flow-light px-4 pb-16 md:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="reserve-panel px-6 py-10 md:px-10 md:py-12">
          {chapters.map((c, idx) => (
            <ScrollAnimator key={c.title} delay={idx * 0.05}>
              <div className={idx === 0 ? "" : "mt-12"}>
                <h2 className="heading-serif mb-4 text-2xl text-white md:text-3xl">
                  {c.title}
                </h2>
                <div className="space-y-4">
                  {c.paras.map((p) => (
                    <p
                      key={p.slice(0, 24)}
                      className="text-base leading-relaxed text-zinc-400 sm:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {c.image ? (
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="mt-7 h-auto w-full rounded-[1.25rem] border border-white/8"
                  />
                ) : null}
              </div>
            </ScrollAnimator>
          ))}

          <ScrollAnimator>
            <div className="mt-12 flex items-center gap-4 border-t border-white/8 pt-8">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10">
                <Image
                  src="/team/sarvesh.jpg"
                  alt={tTeam("m1_name")}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{tTeam("m1_name")}</p>
                <p className="mt-0.5 text-sm text-[#D4A843]">{tTeam("m1_role")}</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

function StoryCta() {
  const t = useTranslations("founder_story");

  return (
    <section className="section-flow-light px-4 pb-20 md:px-6 md:pb-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollAnimator>
          <div className="reserve-panel-dark px-6 py-10 text-center md:px-10 md:py-12">
            <h2 className="heading-serif mb-4 text-2xl text-white md:text-3xl">
              {t("cta_title")}
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t("cta_text")}
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#D4A843] px-7 py-3 font-semibold text-[#0B1424] transition-transform duration-300 hover:scale-[1.03]"
            >
              {t("cta_button")}
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
