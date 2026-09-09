import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SkipLink />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}

/* Lets a keyboard user jump past the navigation. Visually hidden until it
   takes focus, which is the first thing Tab reaches on every page. */
function SkipLink() {
  const t = useTranslations("nav");

  return (
    <a href="#main" className="skip-link">
      {t("skip_to_content")}
    </a>
  );
}
