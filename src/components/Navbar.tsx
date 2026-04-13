"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setLangOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".services-dropdown-container")) {
        setServicesOpen(false);
      }
      if (!target.closest(".language-switcher")) {
        setLangOpen(false);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  const switchLocale = (newLocale: "de" | "en") => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  const serviceItems = [
    {
      key: "agents",
      href: "/services/ai-agents",
      color: "bg-service-agents/10 text-service-agents",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
    },
    {
      key: "websites",
      href: "/services/websites",
      color: "bg-service-websites/10 text-service-websites",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      key: "booking",
      href: "/services/booking",
      color: "bg-service-booking/10 text-service-booking",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
    },
    {
      key: "bots",
      href: "/services/ai-bots",
      color: "bg-service-bots/10 text-service-bots",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M9 17h6"/>
        </svg>
      ),
    },
    {
      key: "saas",
      href: "/services/saas-apps",
      color: "bg-service-saas/10 text-service-saas",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M6 9h4v4H6z"/><path d="M14 9h4M14 13h4"/>
          <line x1="6" y1="21" x2="18" y2="21"/><line x1="9" y1="17" x2="15" y2="17"/>
        </svg>
      ),
    },
  ];

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/industries", label: t("industries") },
    { href: "/#pricing", label: t("packages") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 pt-4 md:pt-5 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 rounded-full border border-white/8 bg-[#08101c]/78 px-5 md:px-7 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-white tracking-[-0.04em]">
              Reserve<span className="text-[#8effa8]">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {t("home")}
            </Link>

            {/* Services dropdown */}
            <div className="services-dropdown-container relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
              >
                {t("services")}
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`services-mega-menu ${servicesOpen ? "active" : ""}`}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className="mega-menu-item"
                  >
                    <div className={`mega-menu-icon ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4>{t(`svc_${item.key}`)}</h4>
                      <p>{t(`svc_${item.key}_desc`)}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="mega-menu-item col-span-2 border-t border-zinc-100 mt-2 pt-2"
                >
                  <div className="mega-menu-icon bg-[#8effa8]/10 text-[#8effa8]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
                    </svg>
                  </div>
                  <div>
                    <h4>{t("view_all_services")}</h4>
                    <p>{t("view_all_services_desc")}</p>
                  </div>
                </Link>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${link.href === "/contact" ? "rounded-full bg-[#8effa8] px-4 py-2 text-[#04101b] hover:bg-[#76f494]" : "text-zinc-300 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language switcher */}
            <div className="language-switcher">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/6 transition-colors text-sm font-medium text-zinc-300"
              >
                {locale === "de" ? "🇩🇪 DE" : "🇬🇧 EN"}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`language-dropdown ${langOpen ? "active" : ""}`}>
                <button
                  onClick={() => switchLocale("de")}
                  className={`language-option w-full ${
                    locale === "de" ? "active" : ""
                  }`}
                >
                  🇩🇪 Deutsch
                </button>
                <button
                  onClick={() => switchLocale("en")}
                  className={`language-option w-full ${
                    locale === "en" ? "active" : ""
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/6 text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-[2rem] bg-[#08101c] border border-white/8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-zinc-300 hover:bg-white/6 hover:text-white font-medium transition-colors"
            >
              {t("home")}
            </Link>

            {/* Services section in mobile */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                {t("services")}
              </p>
              <div className="space-y-1 pl-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-300 hover:bg-white/6 hover:text-white transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{t(`svc_${item.key}`)}</span>
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${link.href === "/contact" ? "bg-[#8effa8] text-[#04101b]" : "text-zinc-300 hover:bg-white/6 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-white/8 mt-2">
              <button
                onClick={() => {
                  switchLocale("de");
                  setMobileOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  locale === "de"
                    ? "bg-white/10 text-white"
                    : "bg-white/4 text-zinc-300"
                }`}
              >
                🇩🇪 Deutsch
              </button>
              <button
                onClick={() => {
                  switchLocale("en");
                  setMobileOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  locale === "en"
                    ? "bg-white/10 text-white"
                    : "bg-white/4 text-zinc-300"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
