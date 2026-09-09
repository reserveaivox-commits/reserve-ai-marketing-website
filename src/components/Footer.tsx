import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="section-flow-dark text-white">
      {/* CTA strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="reserve-panel flex flex-col items-start justify-between gap-6 px-5 py-7 sm:px-6 md:flex-row md:items-center md:px-8 md:py-10">
          <h2 className="heading-serif text-2xl text-white md:text-3xl">{t("ready")}</h2>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#D4A843] px-6 py-3 font-semibold text-[#05101b] transition-colors hover:bg-[#E3C27A] sm:w-auto sm:px-8"
          >
            {t("btn")}
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <BrandLogo className="mb-2" />
            <p className="text-zinc-400 text-sm">{t("tagline")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-zinc-300">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("nav_services")}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  {t("nav_industries")}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  {t("nav_pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-zinc-300">
              {t("nav_contact")}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("nav_contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-zinc-300">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="hover:text-white transition-colors">
                  {t("imprint")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
