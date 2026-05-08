import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Booking Assistant Mauritius | Reserve AI",
  description: "Get a custom AI receptionist service in Mauritius. Reserve AI handles calls, bookings, and customer enquiries for your local business.",
};

export default async function MauritiusPage({
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
           <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">AI Booking Assistant Mauritius</h1>
           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300 mb-8">
             Local businesses in Mauritius can now automate their bookings with Reserve AI. Let our smart AI receptionist handle your calls and secure reservations while you focus on operations.
           </p>
           <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full bg-[#8effa8] px-8 py-4 font-semibold text-[#04101b]">
             Contact Reserve AI
           </Link>
        </div>
      </section>

      <section className="section-flow-dark py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="heading-serif text-3xl mb-6">Why use an AI Receptionist Service in Mauritius?</h2>
          <p className="text-zinc-300 mb-6">Tourism and local services demand high availability. Don't let missed calls cost you valuable bookings.</p>
          <ul className="list-disc pl-6 text-zinc-300 mb-12 space-y-3">
             <li><strong>Multilingual Support:</strong> Perfect for handling international tourists and local clients alike.</li>
             <li><strong>24/7 Availability:</strong> Answer questions and take bookings instantly across different time zones.</li>
             <li><strong>Local Expertise:</strong> Set up specifically for your Mauritius-based business workflow.</li>
          </ul>
          
          <h2 className="heading-serif text-3xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="font-bold text-lg text-white">How does it integrate with my local number?</h3>
              <p>We connect Reserve AI to your existing business line. If you can forward calls, you can use Reserve AI.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
