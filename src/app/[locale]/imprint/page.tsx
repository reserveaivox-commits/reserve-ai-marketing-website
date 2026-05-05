import { setRequestLocale } from "next-intl/server";

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDe = locale === "de";

  return (
    <section className="section-flow-light px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="reserve-panel-dark px-8 py-10 md:px-10 md:py-12">
          <h1 className="heading-serif mb-6 text-4xl text-white md:text-5xl">
            {isDe ? "Impressum" : "Imprint"}
          </h1>
          <div className="space-y-5 text-sm leading-7 text-zinc-300 md:text-base">
            <p><strong className="text-white">Reserve AI</strong></p>
            <p>
              {isDe ? "Digitale Buchungs- und Automatisierungslösungen" : "Digital booking and automation solutions"}
            </p>
            <p>
              Berlin, Deutschland
              <br />
              reserveaivox@gmail.com
            </p>
            <p>
              {isDe
                ? "Verantwortlich für den Inhalt dieser Website ist der Betreiber von Reserve AI."
                : "The operator of Reserve AI is responsible for the content of this website."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
