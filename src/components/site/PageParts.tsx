import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>
        )}
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </motion.div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}

export function CTABanner() {
  const wa = `${BRAND.whatsapp}?text=${encodeURIComponent(`Hello ${BRAND.short}, I'd like a free consultation.`)}`;
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto rounded-3xl gold-border p-10 text-center shadow-elegant">
        <h2 className="text-2xl sm:text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-muted-foreground">Talk to our specialists — free consultation, no commitment.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold">
            Chat on WhatsApp <ArrowRight size={16} />
          </a>
          <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-silver/30">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
