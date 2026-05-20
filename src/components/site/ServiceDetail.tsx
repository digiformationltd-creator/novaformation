import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";
import type { Service } from "@/lib/catalog";

export function ServiceDetail({ service }: { service: Service }) {
  const waMsg = encodeURIComponent(`Hello ${BRAND.short}, I'd like to know more about: ${service.short}.`);
  const waLink = `${BRAND.whatsapp}?text=${waMsg}`;

  return (
    <PageShell>
      <PageHero
        eyebrow={categoryLabel(service.category)}
        title={<>{service.title.replace(/_/g, "")}</>}
        subtitle={service.intro}
      />

      {service.highlights && (
        <section className="px-4 sm:px-6 pb-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 rounded-xl border border-silver/15 bg-card/40 px-4 py-3 text-sm"
              >
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                <span>{h}</span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section id="packages" className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Packages</div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Choose your <span className="text-gold-gradient">package</span>
            </h2>
            <p className="text-muted-foreground mt-3">Transparent pricing — no hidden add-ons.</p>
          </div>

          <div
            className={`grid gap-6 ${
              service.packages.length === 1
                ? "max-w-md mx-auto"
                : service.packages.length === 2
                  ? "sm:grid-cols-2 max-w-4xl mx-auto"
                  : service.packages.length === 3
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {service.packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl p-6 shadow-elegant ${
                  pkg.popular ? "gold-border bg-card" : "border border-silver/15 bg-card/60"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold flex items-center gap-1">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gold-gradient">{pkg.price}</span>
                </div>
                {pkg.note && <p className="text-xs text-muted-foreground mt-1">{pkg.note}</p>}
                <ul className="mt-5 space-y-2 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold ${
                    pkg.popular
                      ? "bg-gold-gradient text-primary-foreground shadow-gold"
                      : "border border-silver/30 hover:border-gold/50"
                  }`}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="text-sm text-gold hover:underline">
              Have a custom requirement? Contact us →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}

function categoryLabel(c: Service["category"]) {
  switch (c) {
    case "uk-services":
      return "UK Services";
    case "uk-compliance":
      return "UK Compliance";
    case "usa-services":
      return "USA Services";
    case "banks-payment-solutions":
      return "Banking & Payments";
  }
}
