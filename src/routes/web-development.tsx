import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Layout, ShoppingCart, Search, Smartphone, Zap } from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development — Nova Formation Ltd" },
      { name: "description", content: "Premium websites, landing pages and e-commerce solutions for your global business." },
      { property: "og:title", content: "Web Development — Nova Formation Ltd" },
      { property: "og:url", content: "/web-development" },
    ],
    links: [{ rel: "canonical", href: "/web-development" }],
  }),
  component: WebDev,
});

const items = [
  { icon: Layout, title: "Business Websites", desc: "Premium corporate websites that convert visitors into clients." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Shopify, WooCommerce and custom storefronts ready to scale." },
  { icon: Code2, title: "Landing Pages", desc: "High-converting landing pages for campaigns and product launches." },
  { icon: Search, title: "SEO Ready", desc: "Technical SEO, schema markup and on-page optimisation included." },
  { icon: Smartphone, title: "Mobile First", desc: "Pixel-perfect responsive design across every device." },
  { icon: Zap, title: "Lightning Fast", desc: "Optimised for Core Web Vitals and excellent user experience." },
];

function WebDev() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Technology"
        title={<>Premium <em className="text-gold-gradient not-italic">web development</em></>}
        subtitle="Concept to launch — custom websites and online stores for your UK or US business."
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
              className="rounded-2xl gold-border p-7 shadow-elegant"
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
