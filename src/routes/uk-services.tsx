import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, FileCheck2, ShieldCheck, FileText, Calendar, Receipt } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";

export const Route = createFileRoute("/uk-services")({
  head: () => ({
    meta: [
      { title: "UK Services — Nova Formation Ltd" },
      { name: "description", content: "UK LTD formation, ID verification, annual filings, UTR, VAT and compliance services." },
      { property: "og:title", content: "UK Services — Nova Formation Ltd" },
      { property: "og:url", content: "/uk-services" },
    ],
    links: [{ rel: "canonical", href: "/uk-services" }],
  }),
  component: UKServices,
});

const items = [
  { icon: Building2, title: "UK LTD Company Formation", desc: "Register your UK Limited Company with Companies House — fast, remote and fully compliant." },
  { icon: ShieldCheck, title: "LTD ID Verification", desc: "DIATF-compliant identity verification for directors and PSCs." },
  { icon: FileCheck2, title: "Confirmation Statement", desc: "Annual confirmation statements filed on time, every time." },
  { icon: FileText, title: "Annual Accounts Filing", desc: "Statutory annual accounts prepared and filed with Companies House." },
  { icon: Receipt, title: "VAT & UTR Registration", desc: "VAT, UTR and PAYE registration handled by our specialists." },
  { icon: Calendar, title: "Company Compliance", desc: "Director changes, address updates, PSC, SIC codes, share allocations and more." },
];

function UKServices() {
  return (
    <PageShell>
      <PageHero
        eyebrow="UK Services"
        title={<>Complete <em className="text-gold-gradient not-italic">UK</em> business setup</>}
        subtitle="From formation to annual filings — everything you need to run a fully compliant UK company."
      />

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl gold-border p-7 shadow-elegant hover:shadow-gold transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4 shadow-gold">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
