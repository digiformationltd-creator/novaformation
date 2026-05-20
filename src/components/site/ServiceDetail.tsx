import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, UserCheck, FileText } from "lucide-react";
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

      {service.whoNeedsIt && (
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Who Needs It</div>
              <h2 className="text-3xl sm:text-4xl font-bold">{service.whoNeedsIt.title}</h2>
              {service.whoNeedsIt.subtitle && (
                <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">{service.whoNeedsIt.subtitle}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.whoNeedsIt.roles.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-silver/15 bg-card/60 p-5 hover:border-gold/40 transition-colors"
                >
                  <UserCheck size={20} className="text-gold mb-3" />
                  <h3 className="font-semibold">{r.name}</h3>
                  {r.desc && <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.whatsIncluded && (
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">What's Included</div>
              <h2 className="text-3xl sm:text-4xl font-bold">{service.whatsIncluded.title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {service.whatsIncluded.items.map((it, i) => (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 rounded-xl border border-silver/15 bg-card/40 px-4 py-3 text-sm"
                >
                  <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                  <span>{it}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.requirements && (
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Requirements</div>
              <h2 className="text-3xl sm:text-4xl font-bold">{service.requirements.title ?? "What you'll need"}</h2>
              {service.requirements.subtitle && (
                <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">{service.requirements.subtitle}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.requirements.items.map((it, i) => (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-silver/15 bg-card/40 px-4 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium pt-1">{it}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.howItWorks && (
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Process</div>
              <h2 className="text-3xl sm:text-4xl font-bold">{service.howItWorks.title ?? "How it works"}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.howItWorks.steps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative rounded-2xl border border-silver/15 bg-card/60 p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground text-sm font-bold">
                      {i + 1}
                    </span>
                    <FileText size={16} className="text-gold" />
                  </div>
                  <p className="text-sm">{step}</p>
                </motion.div>
              ))}
            </div>
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
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline">
              Have a custom requirement? Chat on WhatsApp →
            </a>
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
