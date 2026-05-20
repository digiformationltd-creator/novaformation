import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";

export const Route = createFileRoute("/banking")({
  head: () => ({
    meta: [
      { title: "Business Banking & Payments — Nova Formation Ltd" },
      { name: "description", content: "Open Tide, Wise, Airwallex, Payoneer, Stripe, PayPal, WorldFirst and more business accounts." },
      { property: "og:title", content: "Business Banking & Payments" },
      { property: "og:url", content: "/banking" },
    ],
    links: [{ rel: "canonical", href: "/banking" }],
  }),
  component: Banking,
});

const banks = ["Tide", "Wise", "Airwallex", "Payoneer", "Stripe", "PayPal", "WorldFirst", "Sunrate", "Zyla", "Mollie", "Wallester", "Revolut"];

function Banking() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Banking & Payments"
        title={<>Multi-currency <em className="text-gold-gradient not-italic">business accounts</em></>}
        subtitle="Get your UK or US business banking activated — fully verified and ready to accept payments worldwide."
      />
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {banks.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl gold-border p-6 text-center"
            >
              <div className="text-lg font-display text-silver-gradient">{b}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTABanner />
    </PageShell>
  );
}
