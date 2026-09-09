import { setRequestLocale } from "next-intl/server";

/*
 * Art. 13 GDPR privacy notice.
 *
 * Every {{PLACEHOLDER}} below needs a real value before this goes live. They
 * are listed in "[C] EU Compliance Audit 2026-09-07.md". Deliberately kept as
 * literal text rather than silently guessed: a wrong controller address is
 * worse than an obviously unfilled one.
 *
 * Copy lives in this file rather than messages/*.json because legal text is
 * edited as whole clauses, not as interchangeable keys, and both language
 * versions have to change together.
 */

const COMPANY = "{{LEGAL COMPANY NAME AND FORM}}";
const ADDRESS = "{{STREET AND NUMBER}}, {{POSTCODE}} Berlin, Deutschland";
const REPRESENTATIVE = "{{MANAGING DIRECTOR}}";
const PHONE = "{{PHONE NUMBER}}";
const EMAIL = "contact@re-serveai.com";

type Section = { h: string; body: string[] };

const DE: Section[] = [
  {
    h: "1. Verantwortlicher",
    body: [
      `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${COMPANY}, ${ADDRESS}, vertreten durch ${REPRESENTATIVE}. Sie erreichen uns telefonisch unter ${PHONE} und per E-Mail unter ${EMAIL}.`,
      "Einen Datenschutzbeauftragten haben wir nicht bestellt, da die gesetzlichen Voraussetzungen dafür derzeit nicht vorliegen. Für alle Fragen zum Datenschutz nutzen Sie bitte die oben genannten Kontaktdaten.",
    ],
  },
  {
    h: "2. Aufruf der Website und Server-Logfiles",
    body: [
      "Beim Aufruf unserer Website übermittelt Ihr Browser technisch notwendige Daten an unseren Hosting-Dienstleister. Dazu gehören Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, der verwendete Browser und das Betriebssystem.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt darin, die Website stabil und sicher bereitzustellen. Diese Daten werden nach spätestens 30 Tagen gelöscht und nicht mit anderen Datenquellen zusammengeführt.",
    ],
  },
  {
    h: "3. Cookies",
    body: [
      "Wir setzen genau ein Cookie: NEXT_LOCALE. Es speichert ausschließlich, ob Sie die deutsche oder die englische Fassung der Website ansehen, damit Ihre Sprachwahl beim Weiterklicken erhalten bleibt.",
      "Dieses Cookie ist technisch erforderlich im Sinne des § 25 Abs. 2 Nr. 2 TDDDG und daher nicht einwilligungspflichtig. Ein Cookie-Banner ist deshalb nicht erforderlich.",
      "Wir verwenden kein Google Analytics, keine Werbe-Pixel, kein Tracking und keine Analyse-Dienste. Schriftarten werden lokal von unserem eigenen Server ausgeliefert, es findet keine Verbindung zu Google Fonts statt.",
    ],
  },
  {
    h: "4. Kontaktformular",
    body: [
      "Wenn Sie unser Kontaktformular nutzen, verarbeiten wir Ihren Vor- und Nachnamen, Ihre E-Mail-Adresse sowie, sofern angegeben, Ihre Telefonnummer, Ihre Branche und den Inhalt Ihrer Nachricht.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag abzielt, im Übrigen Art. 6 Abs. 1 lit. a DSGVO auf Grundlage Ihrer Einwilligung, die Sie im Formular erteilen und jederzeit für die Zukunft widerrufen können.",
      "Wir löschen diese Daten, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen, spätestens jedoch nach 24 Monaten. Handels- und steuerrechtliche Aufbewahrungsfristen bleiben unberührt.",
    ],
  },
  {
    h: "5. Live-Demo des Sprachassistenten",
    body: [
      "Auf einzelnen Seiten können Sie eine Live-Demo unseres Sprachassistenten starten. Diese lädt erst, nachdem Sie sie aktiv angeklickt haben, und wird von einem externen Anbieter bereitgestellt.",
      "Mit dem Start der Demo wird Ihre IP-Adresse an diesen Anbieter übermittelt. Die Demo fragt zudem den Zugriff auf Ihr Mikrofon ab; die Sprachaufnahme wird verarbeitet, um die Antwort des Assistenten zu erzeugen. Sie können den Zugriff jederzeit verweigern und die Demo ohne Mikrofon schließen.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Ihre Einwilligung erteilen Sie durch das aktive Starten der Demo.",
    ],
  },
  {
    h: "6. Empfänger und Auftragsverarbeiter",
    body: [
      `Hosting: {{HOSTING PROVIDER, e.g. Netlify, Inc., USA}}. Versand der Kontaktformular-Nachrichten: {{EMAIL PROVIDER}}. E-Mail-Weiterleitung: {{EMAIL ROUTING PROVIDER}}. Bereitstellung der Live-Demo: {{DEMO HOSTING PROVIDER}}.`,
      "Mit allen genannten Dienstleistern haben wir Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen. Darüber hinaus geben wir Ihre Daten nicht an Dritte weiter.",
    ],
  },
  {
    h: "7. Übermittlung in Drittländer",
    body: [
      "Einzelne der oben genannten Dienstleister haben ihren Sitz in den Vereinigten Staaten. Eine Übermittlung erfolgt nur, soweit ein Angemessenheitsbeschluss der Europäischen Kommission besteht, insbesondere im Rahmen des EU-US Data Privacy Framework, oder soweit Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO vereinbart wurden.",
    ],
  },
  {
    h: "8. Ihre Rechte",
    body: [
      "Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).",
      "Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.",
      `Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an ${EMAIL}.`,
    ],
  },
  {
    h: "9. Beschwerderecht bei einer Aufsichtsbehörde",
    body: [
      "Sie haben nach Art. 77 DSGVO das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59-61, 10555 Berlin, mailbox@datenschutz-berlin.de.",
    ],
  },
  {
    h: "10. Bereitstellungspflicht und automatisierte Entscheidungen",
    body: [
      "Sie sind nicht verpflichtet, uns personenbezogene Daten bereitzustellen. Ohne die im Kontaktformular als Pflichtfelder gekennzeichneten Angaben können wir Ihre Anfrage jedoch nicht beantworten.",
      "Eine automatisierte Entscheidungsfindung einschließlich Profiling nach Art. 22 DSGVO findet nicht statt.",
    ],
  },
  {
    h: "11. Stand dieser Erklärung",
    body: [
      "Diese Datenschutzerklärung hat den Stand {{DATE}}. Wir passen sie an, sobald sich unsere Verarbeitung oder die Rechtslage ändert.",
    ],
  },
];

const EN: Section[] = [
  {
    h: "1. Controller",
    body: [
      `The controller for data processing on this website is ${COMPANY}, ${ADDRESS}, represented by ${REPRESENTATIVE}. You can reach us by phone on ${PHONE} and by email at ${EMAIL}.`,
      "We have not appointed a data protection officer, as the statutory thresholds for doing so do not currently apply. For any privacy matter, please use the contact details above.",
    ],
  },
  {
    h: "2. Visiting the site and server log files",
    body: [
      "When you open our website, your browser sends technically necessary data to our hosting provider. This includes your IP address, the date and time of access, the page requested, and your browser and operating system.",
      "The legal basis is Art. 6(1)(f) GDPR. Our legitimate interest is keeping the site available and secure. This data is deleted after 30 days at the latest and is not combined with any other source.",
    ],
  },
  {
    h: "3. Cookies",
    body: [
      "We set exactly one cookie: NEXT_LOCALE. It records only whether you are viewing the German or the English version of the site, so your language choice survives as you navigate.",
      "This cookie is strictly necessary within the meaning of § 25(2)(2) TDDDG and therefore does not require consent. That is why you see no cookie banner.",
      "We use no Google Analytics, no advertising pixels, no tracking and no analytics services. Fonts are served locally from our own server, so no connection to Google Fonts is made.",
    ],
  },
  {
    h: "4. Contact form",
    body: [
      "If you use our contact form, we process your first and last name, your email address and, where you provide them, your phone number, your line of business and the content of your message.",
      "The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to a contract, and otherwise Art. 6(1)(a) GDPR on the basis of the consent you give in the form, which you may withdraw at any time with future effect.",
      "We delete this data once your enquiry has been dealt with and no statutory retention obligation applies, and after 24 months at the latest. Commercial and tax retention periods remain unaffected.",
    ],
  },
  {
    h: "5. Live demo of the voice assistant",
    body: [
      "On some pages you can start a live demo of our voice assistant. It loads only after you actively click it, and it is provided by an external supplier.",
      "Starting the demo transmits your IP address to that supplier. The demo also asks for access to your microphone; the audio is processed in order to generate the assistant's reply. You can refuse access at any time and close the demo without using a microphone.",
      "The legal basis is Art. 6(1)(a) GDPR. You give your consent by actively starting the demo.",
    ],
  },
  {
    h: "6. Recipients and processors",
    body: [
      `Hosting: {{HOSTING PROVIDER, e.g. Netlify, Inc., USA}}. Delivery of contact form messages: {{EMAIL PROVIDER}}. Email routing: {{EMAIL ROUTING PROVIDER}}. Live demo hosting: {{DEMO HOSTING PROVIDER}}.`,
      "We have concluded data processing agreements under Art. 28 GDPR with all of the providers named above. Beyond this we do not pass your data to third parties.",
    ],
  },
  {
    h: "7. Transfers to third countries",
    body: [
      "Some of the providers named above are established in the United States. A transfer takes place only where an adequacy decision of the European Commission applies, in particular under the EU-US Data Privacy Framework, or where standard contractual clauses under Art. 46(2)(c) GDPR have been agreed.",
    ],
  },
  {
    h: "8. Your rights",
    body: [
      "You have the right of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection to processing (Art. 21 GDPR).",
      "Where processing is based on your consent, you may withdraw it at any time with future effect. This does not affect the lawfulness of processing carried out before the withdrawal.",
      `An informal message to ${EMAIL} is enough to exercise any of these rights.`,
    ],
  },
  {
    h: "9. Right to complain to a supervisory authority",
    body: [
      "Under Art. 77 GDPR you have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for us is the Berlin Commissioner for Data Protection and Freedom of Information, Alt-Moabit 59-61, 10555 Berlin, mailbox@datenschutz-berlin.de.",
    ],
  },
  {
    h: "10. Obligation to provide data and automated decisions",
    body: [
      "You are under no obligation to provide us with personal data. Without the fields marked as required in the contact form, however, we cannot answer your enquiry.",
      "No automated decision-making, including profiling, within the meaning of Art. 22 GDPR takes place.",
    ],
  },
  {
    h: "11. Version of this notice",
    body: [
      "This privacy notice is dated {{DATE}}. We update it whenever our processing or the legal position changes.",
    ],
  },
];

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDe = locale === "de";
  const sections = isDe ? DE : EN;

  return (
    <section className="section-flow-light px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="reserve-panel-dark px-8 py-10 md:px-10 md:py-12">
          <h1 className="heading-serif mb-8 text-4xl text-white md:text-5xl">
            {isDe ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>

          <div className="space-y-9 text-sm leading-7 text-zinc-300 md:text-base">
            {sections.map((section) => (
              <div key={section.h}>
                <h2 className="mb-3 text-lg font-semibold text-white">
                  {section.h}
                </h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
