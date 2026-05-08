import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Booking Assistant for Salons | Reserve AI",
  description: "Reserve AI handles salon appointments, reschedules, and client questions automatically so your stylists can focus on the chair.",
};

export default async function SalonsPage({
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
           <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">AI Booking Assistant for Salons</h1>
           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300 mb-8">
             Accept appointment bookings while you're serving clients — no call goes unanswered. Reserve AI suggests available time slots and confirms bookings automatically.
           </p>
           <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full bg-[#8effa8] px-8 py-4 font-semibold text-[#04101b]">
             Contact Reserve AI
           </Link>
        </div>
      </section>

      <section className="section-flow-dark py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="heading-serif text-3xl mb-6">Why salons need an AI Booking Assistant</h2>
          <p className="text-zinc-300 mb-6">During a haircut or treatment, you can't pick up the phone. Clients who can't reach you will find another salon. Reserve AI captures every single appointment.</p>
          <ul className="list-disc pl-6 text-zinc-300 mb-12 space-y-3">
             <li><strong>No Empty Slots:</strong> Turn missed calls into confirmed appointments automatically.</li>
             <li><strong>Works with existing tools:</strong> Seamless integration with your salon's calendar software.</li>
             <li><strong>Better Client Experience:</strong> Instant answers to questions about services and pricing.</li>
          </ul>
          
          <h2 className="heading-serif text-3xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="font-bold text-lg text-white">Can it handle specific stylist requests?</h3>
              <p>Absolutely. Reserve AI can check schedules for specific stylists and book accordingly.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">What languages are supported?</h3>
              <p>We support English, German, and can add others upon request to match your clientele.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
