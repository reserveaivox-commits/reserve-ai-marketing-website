import { setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({
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
            {isDe ? "Datenschutz" : "Privacy Policy"}
          </h1>
          <div className="space-y-6 text-sm leading-7 text-zinc-300 md:text-base">
            <p>
              {isDe
                ? "Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Website, die Beantwortung von Anfragen und die Vorbereitung unserer Leistungen erforderlich ist."
                : "We process personal data only to the extent necessary to operate this website, respond to enquiries, and prepare our services."}
            </p>
            <p>
              {isDe
                ? "Wenn Sie uns über das Kontaktformular schreiben, speichern wir die von Ihnen angegebenen Angaben, damit wir Ihre Anfrage bearbeiten können. Diese Daten werden nicht ohne Ihre Zustimmung an Dritte weitergegeben."
                : "If you contact us through the contact form, we store the information you provide so we can handle your request. This data is not shared with third parties without your consent."}
            </p>
            <p>
              {isDe
                ? "Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen sowie deren Berichtigung oder Löschung anfragen. Für datenschutzbezogene Anliegen erreichen Sie uns unter contact@re-serveai.com."
                : "You may request information about your stored data at any time and ask for correction or deletion. For privacy-related matters, contact us at contact@re-serveai.com."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
