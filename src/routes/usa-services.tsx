import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, FileCheck2, Receipt, ShieldCheck, Briefcase, Globe2 } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";

export const Route = createFileRoute("/usa-services")({
  head: () => ({
    meta: [
      { title: "USA Services — Nova Formation Ltd" },
      { name: "description", content: "US LLC formation, EIN, ITIN, registered agent and BOI reporting for global founders." },
      { property: "og:title", content: "USA Services — Nova Formation Ltd" },
      { property: "og:url", content: "/usa-services" },
    ],
    links: [{ rel: "canonical", href: "/usa-services" }],
  }),
  component: USAServices,
});

const items = [
  { icon: Building2, title: "US LLC Formation", desc: "Register a US LLC in any state — Delaware, Wyoming, New Mexico and more." },
  { icon: Receipt, title: "EIN Registration", desc: "Employer Identification Number from the IRS — required for US banking and tax." },
  { icon: ShieldCheck, title: "ITIN Application", desc: "Individual Taxpayer Identification Number for non-US residents." },
  { icon: Briefcase, title: "Registered Agent", desc: "Compliant registered agent service in your state of formation." },
  { icon: FileCheck2, title: "BOI Reporting", desc: "Beneficial Ownership Information reports filed with FinCEN." },
  { icon: Globe2, title: "US Market Access", desc: "Stripe, PayPal, Amazon Seller and full US market access for your business." },
];

function USAServices() {
  return (
    <PageShell>
      <PageHero
        eyebrow="USA Services"
        title={<>Launch in the <em className="text-gold-gradient not-italic">United States</em></>}
        subtitle="Start a US LLC remotely. Access Stripe, PayPal, Amazon and the world's largest market — without leaving home."
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
