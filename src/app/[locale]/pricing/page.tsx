import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve AI Pricing | Flexible Plans for Your Business",
  description: "View Reserve AI pricing. Monthly plans built for serious booking automation. One-time setup starts at €500.",
};

export default async function PricingPage({
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
           <h1 className="heading-serif mb-6 text-4xl text-white md:text-6xl">Reserve AI Pricing</h1>
           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300 mb-8">
             Transparent pricing built for serious booking automation. If your average booking brings €50–€100, recovering just two missed appointments per week could already cover your monthly plan.
           </p>
        </div>
      </section>

      <section className="section-flow-dark py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-zinc-400 mb-2">STARTER</h3>
              <div className="text-4xl font-bold text-white mb-4">€249 <span className="text-lg text-zinc-500 font-normal">/month</span></div>
              <p className="text-zinc-300 mb-6">For smaller businesses starting with AI call handling</p>
              <ul className="space-y-3 text-zinc-300 mb-8">
                <li>— Up to 150 voice minutes / month</li>
                <li>— Automated booking intake</li>
                <li>— Confirmation messages</li>
              </ul>
              <Link href="/contact" className="btn-primary block w-full text-center rounded-full bg-[#8effa8] px-6 py-3 font-semibold text-[#04101b]">Get Started</Link>
            </div>
            
            <div className="bg-[#8effa8] text-[#04101b] rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              <h3 className="text-xl font-bold mb-2">GROWTH</h3>
              <div className="text-4xl font-bold mb-4">€599 <span className="text-lg opacity-70 font-normal">/month</span></div>
              <p className="mb-6 opacity-80">For busy studios and service businesses with real call volume</p>
              <ul className="space-y-3 mb-8 font-medium">
                <li>— Up to 500 voice minutes / month</li>
                <li>— 24/7 booking assistant</li>
                <li>— Calendar or POS integration</li>
                <li>— Admin dashboard</li>
              </ul>
              <Link href="/contact" className="block w-full text-center rounded-full bg-[#04101b] text-white px-6 py-3 font-semibold hover:bg-black">Get Started</Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-zinc-400 mb-2">PRO</h3>
              <div className="text-4xl font-bold text-white mb-4">€1290 <span className="text-lg text-zinc-500 font-normal">/month</span></div>
              <p className="text-zinc-300 mb-6">For high-volume teams that want deeper automation</p>
              <ul className="space-y-3 text-zinc-300 mb-8">
                <li>— Up to 1,500 voice minutes / month</li>
                <li>— Custom AI workflows</li>
                <li>— CRM + advanced integrations</li>
              </ul>
              <Link href="/contact" className="btn-primary block w-full text-center rounded-full bg-[#8effa8] px-6 py-3 font-semibold text-[#04101b]">Get Started</Link>
            </div>
          </div>
          
          <p className="text-center text-zinc-400 mt-12">One-time setup starts at €500 depending on workflow complexity. No long-term contracts. Cancel anytime.</p>
        </div>
      </section>
    </div>
  );
}
