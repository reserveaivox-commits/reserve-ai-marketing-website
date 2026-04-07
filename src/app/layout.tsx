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
  title: "Re.Serve – Your Digital Booking Assistant",
  description:
    "Re.Serve answers booking calls automatically so your team can focus on customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans text-zinc-800 antialiased bg-surface`}
      >
        {children}
      </body>
    </html>
  );
}
