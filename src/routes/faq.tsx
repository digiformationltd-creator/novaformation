import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nova Formation Ltd" },
      { name: "description", content: "Frequently asked questions about UK & US company formation, compliance and banking." },
      { property: "og:title", content: "FAQ — Nova Formation Ltd" },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How long does UK LTD formation take?", a: "Most UK Limited Companies are incorporated within 3–5 business days once we receive your documents and ID verification." },
  { q: "Can I form a UK company as a non-resident?", a: "Yes. You don't need to be a UK resident to register a UK Limited Company. We handle the entire process remotely, including registered office address and director ID verification." },
  { q: "Which US state is best for a non-resident LLC?", a: "Wyoming and Delaware are the most popular for non-residents thanks to low fees, privacy and business-friendly laws. We help you pick the right state for your business model." },
  { q: "What is included in the EIN service?", a: "We handle the full IRS application and deliver your EIN with the official confirmation letter, ready to use for banking and tax filings." },
  { q: "Do you help open Stripe / Wise / PayPal accounts?", a: "Yes — we offer guided account opening for Stripe, Wise, Payoneer, PayPal, Tide and 10+ other providers, paired with your UK LTD or US LLC." },
  { q: "What happens after I order?", a: "You'll get a WhatsApp confirmation, a document checklist, and a dedicated specialist who manages your filing end-to-end." },
  { q: "Are your prices fixed?", a: "Yes — every package has a fixed fee with no hidden add-ons. Optional add-ons are clearly listed when relevant." },
  { q: "What payment methods do you accept?", a: "Bank transfer, debit/credit card, PayPal and Wise. We'll share payment options after you confirm your package." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHero
        eyebrow="Support"
        title={<>Frequently Asked <span className="text-gold-gradient">Questions</span></>}
        subtitle="Everything you need to know before getting started with Nova Formation."
      />
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-2xl border border-silver/15 bg-card/60"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <Plus
                  size={18}
                  className={`text-gold shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}
                />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </motion.div>
          ))}
        </div>
      </section>
      <CTABanner />
    </PageShell>
  );
}
