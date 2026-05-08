import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Booking Assistant Germany | Reserve AI",
  description: "The leading AI phone assistant for service businesses in Germany. Reserve AI handles calls in fluent German and integrates with local POS systems.",
};

export default async function GermanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="reserve-shell">
      <section className="section-flow-light relative px-4 pt-28 pb-10 md:px-6 md:pt-36 md:pb-14">
        <div className="mx-auto max-w-7xl text-center">
           <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">AI Booking Assistant Germany</h1>
           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300 mb-8">
             Designed for German service businesses. Reserve AI answers calls in perfect German, integrates with your local calendar, and respects strict European data privacy standards.
           </p>
           <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full bg-[#8effa8] px-8 py-4 font-semibold text-[#04101b]">
             Contact Reserve AI
           </Link>
        </div>
      </section>

      <section className="section-flow-dark py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="heading-serif text-3xl mb-6">Why use Reserve AI in Germany?</h2>
          <p className="text-zinc-300 mb-6">Staff shortages in the German service sector mean you need automated help more than ever. Reserve AI steps in as your reliable digital assistant.</p>
          <ul className="list-disc pl-6 text-zinc-300 mb-12 space-y-3">
             <li><strong>Fluent German AI:</strong> Natural, polite, and culturally appropriate voice responses.</li>
             <li><strong>DSGVO / GDPR Compliant:</strong> Fully secure and compliant with German and EU data protection laws.</li>
             <li><strong>Local Support:</strong> We understand the German market and work with your existing tools.</li>
          </ul>
          
          <h2 className="heading-serif text-3xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="font-bold text-lg text-white">Does the AI understand different dialects?</h3>
              <p>The AI is highly advanced and understands standard German perfectly, as well as many regional dialects.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Where is the data stored?</h3>
              <p>All data is processed securely to meet strict German data privacy requirements (DSGVO).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
