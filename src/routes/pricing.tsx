import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";
import { ukServices, ukCompliance, usaServices, banking, type Service } from "@/lib/catalog";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nova Formation Ltd" },
      { name: "description", content: "Transparent UK & US company formation, compliance and banking pricing — all packages, no hidden fees." },
      { property: "og:title", content: "Pricing — Nova Formation Ltd" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function PackageCard({ name, price, note, popular, features }: Service["packages"][number]) {
  const waMsg = encodeURIComponent(`Hello ${BRAND.short}, I'm interested in the ${name} package.`);
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-elegant ${
        popular ? "gold-border bg-card" : "border border-silver/15 bg-card/60"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold flex items-center gap-1">
          <Sparkles size={12} /> Most Popular
        </div>
      )}
      <h4 className="text-lg font-bold">{name}</h4>
      <div className="mt-2 text-3xl font-extrabold text-gold-gradient">{price}</div>
      {note && <p className="text-xs text-muted-foreground mt-1">{note}</p>}
      <ul className="mt-4 space-y-1.5 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 size={13} className="text-gold mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={`${BRAND.whatsapp}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-semibold ${
          popular ? "bg-gold-gradient text-primary-foreground shadow-gold" : "border border-silver/30"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function Section({ eyebrow, title, services, cols = 4 }: { eyebrow: string; title: string; services: Service[]; cols?: 3 | 4 }) {
  return (
    <section className="px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        </motion.div>
        {services.map((svc) => (
          <div key={svc.slug} className="mb-10">
            <h3 className="text-xl font-semibold mb-1">{svc.short}</h3>
            <p className="text-sm text-muted-foreground mb-4">{svc.intro}</p>
            <div
              className={`grid gap-5 ${
                svc.packages.length === 1
                  ? "max-w-sm"
                  : svc.packages.length === 2
                    ? "sm:grid-cols-2 max-w-3xl"
                    : svc.packages.length === 3
                      ? "sm:grid-cols-2 lg:grid-cols-3"
                      : `sm:grid-cols-2 lg:grid-cols-${cols}`
              }`}
            >
              {svc.packages.map((p) => (
                <PackageCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Packages"
        title={<>Our <span className="text-gold-gradient">Packages</span></>}
        subtitle="Fixed fees, no hidden add-ons. Same trusted pricing across every service."
      />
      <Section eyebrow="UK Formation" title="UK Company Formation" services={ukServices.filter((s) => s.slug === "uk-ltd-formation")} />
      <Section eyebrow="UK Address" title="UK Address Services" services={ukServices.filter((s) => s.slug === "registered-office-address")} cols={3} />
      <Section eyebrow="USA Formation" title="USA LLC Formation" services={usaServices.filter((s) => s.slug === "us-llc-formation")} cols={3} />
      <Section eyebrow="UK Services" title="UK Add-on Services" services={ukServices.filter((s) => !["uk-ltd-formation", "registered-office-address"].includes(s.slug))} cols={3} />
      <Section eyebrow="USA Services" title="USA Add-on Services" services={usaServices.filter((s) => s.slug !== "us-llc-formation")} cols={3} />
      <Section eyebrow="Compliance" title="UK Compliance Services" services={ukCompliance} cols={3} />
      <Section eyebrow="Banking & Payments" title="Banking & Payment Solutions" services={banking} cols={3} />
      <CTABanner />
    </PageShell>
  );
}
