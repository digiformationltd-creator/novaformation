import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nova Formation Ltd" },
      { name: "description", content: "Transparent UK & US company formation pricing. Silver LTD package from £160." },
      { property: "og:title", content: "Pricing — Nova Formation Ltd" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const packages = [
  {
    name: "Starter",
    price: "£99",
    tag: "Basic",
    features: [
      "UK LTD Registration",
      "Companies House Fee Included",
      "Digital Incorporation Certificate",
      "Digital Memorandum & Articles",
      "Authentication Code",
    ],
  },
  {
    name: "Silver",
    price: BRAND.startingPrice,
    tag: "Most Popular",
    highlight: true,
    features: [
      "UK LTD (Company) Registration",
      "Companies House Fee Included",
      "Registered Office Address",
      "Company Authentication Code",
      "Company UTR Number",
      "Digital Incorporation Certificate",
      "Digital Memorandum & Articles",
      "Digital Shares Certificate",
      "Includes ID Verification",
      "Printed Certificate of Incorporation",
    ],
  },
  {
    name: "Gold",
    price: "£299",
    tag: "Complete",
    features: [
      "Everything in Silver",
      "Business Bank Account Setup",
      "VAT Registration",
      "PAYE Registration",
      "12 months Registered Office",
      "Confirmation Statement Filing",
      "Dedicated Account Manager",
    ],
  },
];

function Pricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title={<>Transparent <em className="text-gold-gradient not-italic">pricing</em>, zero surprises</>}
        subtitle="Pick the package that fits — every plan includes complete formation, no hidden fees."
      />

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 shadow-elegant ${p.highlight ? "gold-border bg-card scale-[1.02]" : "border border-border bg-card/50"}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-bold tracking-wider">
                  {p.tag}
                </div>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{p.name}</div>
              <div className={`mt-3 text-5xl font-bold ${p.highlight ? "text-gold-gradient" : "text-silver-gradient"}`}>
                {p.price}
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold transition-transform hover:scale-[1.03] ${p.highlight ? "bg-gold-gradient text-primary-foreground shadow-gold" : "border border-silver/30"}`}
              >
                Choose {p.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
