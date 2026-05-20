import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";
import type { Service } from "@/lib/catalog";

export function CategoryIndex({
  eyebrow,
  title,
  subtitle,
  basePath,
  services,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  basePath: "/uk-services" | "/uk-compliance" | "/usa-services" | "/banks-payment-solutions";
  services: Service[];
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const price = s.packages[0]?.price;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={`${basePath}/$slug`}
                  params={{ slug: s.slug }}
                  className="group block h-full rounded-2xl border border-silver/15 bg-card/60 p-6 hover:border-gold/40 hover:shadow-gold transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{s.short}</h3>
                    {price && (
                      <span className="text-xs px-2 py-1 rounded-full border border-gold/40 text-gold whitespace-nowrap">
                        from {price}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{s.intro}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm text-gold group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
      <CTABanner />
    </PageShell>
  );
}
