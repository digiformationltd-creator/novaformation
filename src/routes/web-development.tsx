import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2, Sparkles, ArrowRight, Layout, ShoppingCart, Rocket,
  RefreshCw, LifeBuoy, Compass, PenTool, Palette, Code2, Bug, Globe,
} from "lucide-react";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development — Nova Formation Ltd" },
      { name: "description", content: "Fast, modern websites & Shopify stores. Fixed prices, no hidden fees. From £30." },
      { property: "og:title", content: "Websites that convert — Nova Formation Ltd" },
      { property: "og:description", content: "Shopify stores and custom React websites. Fixed prices, no hidden fees." },
      { property: "og:url", content: "/web-development" },
    ],
    links: [{ rel: "canonical", href: "/web-development" }],
  }),
  component: WebDev,
});

const packages = [
  {
    name: "E-commerce Store",
    price: "£30",
    tag: "Best Value",
    sub: "E-commerce Setup",
    features: [
      "Free domain included",
      "Shopify trial arranged from our end",
      "Full website setup & configuration",
      "Theme installation & customization",
      "Product upload (up to 20 products)",
      "Payment gateway integration",
      "Shipping & tax configuration",
      "Mobile-responsive storefront",
      "Basic SEO setup",
      "Launch support & training",
    ],
  },
  {
    name: "React Basic",
    price: "£40",
    sub: "Website Package",
    features: [
      "4-page React website (Home, About, Services, Contact)",
      "Basic logo design with 1 revision",
      "Mobile-responsive design",
      "Basic contact form",
      "Social media links integration",
      "Free hosting setup (Netlify/Vercel)",
      "14 days post-launch support",
    ],
  },
  {
    name: "React Standard",
    price: "£60",
    tag: "Most Popular",
    popular: true,
    sub: "Website Package",
    features: [
      "6-page React website",
      "Enhanced logo design (2 concepts, 3 revisions)",
      "Professional color scheme and typography",
      "Smooth animations and transitions",
      "Newsletter signup form",
      "Image gallery or portfolio section",
      "Google Analytics integration",
      "Basic SEO optimization with meta tags",
      "Advanced contact form with validation",
      "SSL certificate + Premium hosting setup",
      "30 days post-launch support, minor updates",
    ],
  },
  {
    name: "React Premium",
    price: "£150",
    sub: "Website Package",
    features: [
      "10-page React website",
      "Comprehensive logo package (3 concepts, unlimited revisions)",
      "Complete brand style guide",
      "Advanced animations and interactive elements",
      "CMS integration for easy content updates",
      "Full blog functionality with categories and tags",
      "Booking/appointment system integration",
      "Customer testimonials section with carousel",
      "FAQ section + Social media integration",
      "Third-party integrations (Mailchimp, Maps, social feeds)",
      "Advanced SEO, schema markup and sitemap",
      "Contact form with file upload",
      "Performance optimization + 60 days post-launch support",
    ],
  },
];

const services = [
  { icon: Layout, title: "Custom Website Design & Development", desc: "Bespoke, conversion-focused websites built to reflect your brand and drive measurable results." },
  { icon: ShoppingCart, title: "E-commerce (Shopify)", desc: "Beautiful, high-performance Shopify stores with conversion-optimised product pages and checkout." },
  { icon: Rocket, title: "Landing Page Design & Development", desc: "Standalone landing pages for product launches, lead capture and service-specific offers." },
  { icon: RefreshCw, title: "Website Redesign & Migration", desc: "Modernise an outdated site or migrate to a faster, safer stack with zero SEO loss." },
  { icon: LifeBuoy, title: "Ongoing Maintenance & Support", desc: "Updates, security patches, performance tuning and content edits — all handled for you." },
];

const process = [
  { icon: Compass, label: "Discovery" },
  { icon: PenTool, label: "Wireframing" },
  { icon: Palette, label: "Design" },
  { icon: Code2, label: "Development" },
  { icon: Bug, label: "Testing" },
  { icon: Rocket, label: "Launch" },
  { icon: LifeBuoy, label: "Support" },
];

const portfolio = [
  { tag: "E-commerce", title: "Shopify storefront — fashion brand", metric: "+212% conversion lift" },
  { tag: "SaaS", title: "Marketing site — fintech startup", metric: "1.2s LCP, 98 Lighthouse" },
  { tag: "Migration", title: "WordPress → Next.js migration", metric: "0% SEO traffic loss" },
];

const stack = ["WordPress", "Shopify", "React", "Next.js", "Figma", "Tailwind CSS", "Vite", "TypeScript"];

const faqs = [
  { q: "How long does a website take?", a: "A standard business website takes 4–6 weeks. E-commerce or custom builds typically take 8–12 weeks depending on scope." },
  { q: "What CMS should I use?", a: "We recommend Shopify for e-commerce, WordPress for content-heavy sites, and custom React/Next.js for premium brands. We'll guide you based on your goals and team." },
  { q: "What about hosting?", a: "Hosting is included in every package. We use Netlify, Vercel or premium managed hosting depending on the package — all with SSL, CDN and global edge delivery." },
  { q: "Will my site be SEO-ready?", a: "Yes. Every site ships with technical SEO foundations — clean semantic HTML, fast Core Web Vitals, meta tags, sitemap and schema markup on Standard and Premium." },
  { q: "Do you offer ongoing support?", a: "Yes. All packages include post-launch support (14–60 days). After that we offer monthly maintenance retainers for updates, edits and security." },
];

function WebDev() {
  const wa = `${BRAND.whatsapp}?text=${encodeURIComponent("Hello Nova Formation, I'd like a free website quote.")}`;

  return (
    <PageShell>
      <PageHero
        eyebrow="Web Design & Development"
        title={<>Websites that <span className="text-gold-gradient">convert</span></>}
        subtitle="Fast, modern websites & Shopify stores. Fixed prices, no hidden fees."
      />

      <section className="px-4 sm:px-6 -mt-6 pb-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 justify-center">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold">
            Request a Free Quote <ArrowRight size={16} />
          </a>
          <a href={`tel:${BRAND.phoneIntl}`} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-silver/30 hover:border-gold/50">
            Call {BRAND.phone}
          </a>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Packages</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Web Development <span className="text-gold-gradient">Packages</span></h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Pick the package that fits — Shopify stores or custom React websites. Fixed prices, no hidden fees.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl p-6 shadow-elegant ${pkg.popular ? "gold-border bg-card" : "border border-silver/15 bg-card/60"}`}
              >
                {pkg.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold flex items-center gap-1 whitespace-nowrap">
                    <Sparkles size={12} /> {pkg.tag}
                  </div>
                )}
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Starting from</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gold-gradient">{pkg.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{pkg.sub}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold ${pkg.popular ? "bg-gold-gradient text-primary-foreground shadow-gold" : "border border-silver/30 hover:border-gold/50"}`}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Services</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our web <span className="text-gold-gradient">services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-silver/15 bg-card/60 p-6 hover:border-gold/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4 shadow-gold">
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Process</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our design <span className="text-gold-gradient">process</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {process.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-silver/15 bg-card/50 p-4 text-center"
              >
                <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                  <p.icon size={18} className="text-primary-foreground" />
                </div>
                <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                <div className="text-sm font-semibold">{p.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Portfolio</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected <span className="text-gold-gradient">work</span></h2>
            <p className="text-muted-foreground mt-3">A glimpse of recent projects. Full case studies available on request.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-silver/15 bg-card/60 p-6 hover:border-gold/40 transition-colors"
              >
                <span className="inline-block text-xs px-2 py-1 rounded-full border border-gold/40 text-gold mb-3">{p.tag}</span>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gold-gradient font-semibold mt-2">{p.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Tech Stack</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Modern, proven <span className="text-gold-gradient">tools</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-silver/20 bg-card/50 text-sm">
                <Globe size={14} className="text-gold" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Web design <span className="text-gold-gradient">FAQ</span></h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-silver/15">
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
