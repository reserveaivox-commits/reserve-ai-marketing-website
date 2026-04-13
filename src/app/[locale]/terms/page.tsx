import { setRequestLocale } from "next-intl/server";

export default async function TermsPage({
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
            {isDe ? "AGB" : "Terms"}
          </h1>
          <div className="space-y-6 text-sm leading-7 text-zinc-300 md:text-base">
            <p>
              {isDe
                ? "Unsere Leistungen richten sich an Unternehmen. Der genaue Leistungsumfang, Preise und Projektbedingungen werden individuell im Angebot oder Vertrag festgelegt."
                : "Our services are intended for businesses. The exact scope of work, pricing, and project conditions are defined individually in the relevant proposal or contract."}
            </p>
            <p>
              {isDe
                ? "Vor Beginn eines Projekts erhalten Sie eine klare Leistungsbeschreibung. Änderungen, Zusatzleistungen oder individuelle Integrationen können gesondert berechnet werden."
                : "Before a project begins, you receive a clear description of services. Changes, additional work, or custom integrations may be billed separately."}
            </p>
            <p>
              {isDe
                ? "Bei Fragen zu Verträgen, Angeboten oder Laufzeiten kontaktieren Sie uns bitte direkt unter reserveaivox@gmail.com."
                : "For questions about contracts, offers, or service terms, please contact us directly at reserveaivox@gmail.com."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
