import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Phone Assistant for Restaurants | Reserve AI",
  description: "Stop missing reservations. Reserve AI answers calls, books tables, and manages your restaurant's schedule automatically.",
};

export default async function RestaurantsPage({
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
           <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">AI Phone Assistant for Restaurants</h1>
           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300 mb-8">
             Never miss a reservation again. While your team is busy serving guests, Reserve AI handles incoming calls, suggests available tables, and confirms bookings automatically.
           </p>
           <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full bg-[#8effa8] px-8 py-4 font-semibold text-[#04101b]">
             Contact Reserve AI
           </Link>
        </div>
      </section>

      <section className="section-flow-dark py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="heading-serif text-3xl mb-6">Why restaurants need an AI Phone Assistant</h2>
          <p className="text-zinc-300 mb-6">During rush hours, the phone goes unanswered. Callers hang up and book elsewhere. Reserve AI ensures every guest gets an instant response, 24/7.</p>
          <ul className="list-disc pl-6 text-zinc-300 mb-12 space-y-3">
             <li><strong>24/7 Availability:</strong> Answer questions and take bookings instantly, even when closed.</li>
             <li><strong>Syncs with your POS/Calendar:</strong> Real-time integration means no double bookings.</li>
             <li><strong>Reduces interruptions:</strong> Focus on your guests while the AI manages the phone.</li>
          </ul>
          
          <h2 className="heading-serif text-3xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="font-bold text-lg text-white">How fast is the setup?</h3>
              <p>Setup takes less than 48 hours for your restaurant.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Does it sound human?</h3>
              <p>Yes, we tailor the tone specifically for your restaurant so callers feel comfortable and welcomed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
