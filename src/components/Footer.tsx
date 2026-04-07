import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA strip */}
      <div className="bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="heading-serif text-2xl md:text-3xl">{t("ready")}</h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-navy font-semibold px-8 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
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
            <h3 className="text-xl font-bold mb-2">
              Re<span className="text-accent-purple">.</span>Serve
            </h3>
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
                <span className="hover:text-white transition-colors cursor-pointer">
                  {t("privacy")}
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  {t("imprint")}
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  {t("terms")}
                </span>
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
