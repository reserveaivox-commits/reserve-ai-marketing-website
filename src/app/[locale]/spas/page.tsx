import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Receptionist for Spas | Reserve AI",
  description: "Give your spa clients a calm booking experience from the very first call. Reserve AI handles appointments automatically without disturbing treatments.",
};

export default async function SpasPage({
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
           <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">AI Receptionist for Spas</h1>
           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300 mb-8">
             Maintain a tranquil atmosphere. While your staff is focused on providing relaxing treatments, your AI receptionist handles incoming calls and schedules appointments effortlessly.
           </p>
           <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full bg-[#8effa8] px-8 py-4 font-semibold text-[#04101b]">
             Contact Reserve AI
           </Link>
        </div>
      </section>

      <section className="section-flow-dark py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="heading-serif text-3xl mb-6">Why spas need an AI Receptionist</h2>
          <p className="text-zinc-300 mb-6">A ringing phone disrupts the peaceful environment of your spa. Letting calls go to voicemail loses clients. Reserve AI is the perfect silent partner.</p>
          <ul className="list-disc pl-6 text-zinc-300 mb-12 space-y-3">
             <li><strong>No Disruptions:</strong> Keep the spa quiet while still capturing every single booking.</li>
             <li><strong>Professional Tone:</strong> An AI assistant that speaks with the calm, premium voice your brand deserves.</li>
             <li><strong>Always Available:</strong> Take bookings after hours when clients are unwinding and planning their next visit.</li>
          </ul>
          
          <h2 className="heading-serif text-3xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="font-bold text-lg text-white">Can it explain our treatments?</h3>
              <p>Yes, the AI is trained on your specific services and can answer questions about treatment details.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">How does it sync with our calendar?</h3>
              <p>It integrates directly with your existing spa management software to prevent double bookings.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
