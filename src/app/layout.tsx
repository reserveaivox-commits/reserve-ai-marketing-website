import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reserve AI | AI Phone Assistant for Bookings",
  description:
    "Reserve AI helps restaurants, salons, spas, and service businesses answer calls, manage bookings, and handle customer questions automatically.",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reserve AI",
  url: "https://re-serveai.com",
  email: "contact@re-serveai.com",
  description: "AI phone assistant for bookings, reservations, and customer enquiries."
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Screen readers pick the voice from this. Without it a German page is read
  // out with an English voice, so it has to track the active locale.
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} site-body font-sans text-zinc-800 antialiased bg-surface`}
      >
        <div className="site-background" aria-hidden="true">
          <div className="site-aurora site-aurora--one" />
        </div>
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
