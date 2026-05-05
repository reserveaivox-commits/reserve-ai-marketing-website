import type { Metadata } from "next";
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
  title: "Reserve AI - Your Digital Booking Assistant",
  description:
    "Reserve AI answers booking calls automatically so your team can focus on customers.",
  icons: {
    icon: "/brand/reserve-ai-mark.svg",
    shortcut: "/brand/reserve-ai-mark.svg",
    apple: "/icons/icon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${montserrat.variable} ${playfair.variable} site-body font-sans text-zinc-800 antialiased bg-surface`}
      >
        <div className="site-background" aria-hidden="true">
          <div className="site-aurora site-aurora--one" />
          <div className="site-stars site-stars--near" />
        </div>
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
