import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Building2, ShieldCheck, Landmark, Globe2, Code2, FileCheck2,
  ArrowRight, Sparkles, CheckCircle2, Star,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { BRAND } from "@/lib/brand";
import londonHero from "@/assets/hero-london.jpg";
import logo from "@/assets/nova-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Formation Ltd — Setup Your UK Company from £160" },
      { name: "description", content: "Premium UK & US company formation, banking and compliance. Register your UK LTD from £160 with Nova Formation Ltd." },
      { property: "og:title", content: "Nova Formation Ltd — UK Company Formation" },
      { property: "og:description", content: "Register your UK LTD from £160. Banking, compliance and web services for global founders." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Stats />
      <Services />
      <Packages />
      <WhyUs />
      <Partners />
      <Testimonials />
      <CTA />
    </SiteShell>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden flex items-center justify-center grain">
      <motion.div style={{ scale, y: y1 }} className="absolute inset-0">
        <img src={londonHero} alt="London skyline" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* floating gold orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-silver/5 blur-3xl"
      />

      <motion.div style={{ y: y2, opacity }} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-card/40 backdrop-blur-sm mb-8"
        >
          <Sparkles size={14} className="text-gold" />
          <span className="text-xs tracking-widest uppercase text-silver-gradient">
            UK Company Formation · Banking · Compliance
          </span>
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mx-auto w-24 h-24 mb-6 relative"
        >
          <div className="absolute inset-0 rounded-full bg-gold/30 blur-2xl animate-pulse" />
          <img src={logo} alt="" width={96} height={96} className="relative rounded-full glow-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          <span className="block text-gold-gradient gold-shimmer">Setup Your</span>
          <span className="block text-silver-gradient">UK Company</span>
          <span className="block text-xl sm:text-2xl mt-4 font-normal text-muted-foreground">
            with <span className="text-gold-gradient font-semibold">Nova Formation Ltd</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 inline-flex items-center"
        >
          <div className="relative px-10 py-4 rounded-2xl bg-silver-gradient gold-shimmer shadow-elegant">
            <div className="absolute inset-0 rounded-2xl border-2 border-gold/40" />
            <div className="relative text-primary-foreground font-display text-xl sm:text-2xl tracking-wider">
              IN <span className="text-3xl sm:text-4xl font-bold">{BRAND.startingPrice}</span> ONLY
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            to="/pricing"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.04] transition-transform"
          >
            Register Your UK Company
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-silver/30 text-foreground hover:bg-card transition-colors"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

const stats = [
  { value: "300+", label: "Companies Registered" },
  { value: "24/7", label: "Global Founder Support" },
  { value: "12+", label: "Banking Partners" },
  { value: "98%", label: "Client Retention" },
];

function Stats() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-5xl font-bold text-gold-gradient">{s.value}</div>
            <div className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const services = [
  { icon: Building2, tag: "UK Formation", title: "UK LTD Company Formation", desc: "Register a UK Limited Company with Companies House. Fast, compliant, fully remote." },
  { icon: ShieldCheck, tag: "UK Compliance", title: "LTD ID Verification", desc: "Companies House identity verification for directors and PSCs — DIATF compliant." },
  { icon: FileCheck2, tag: "UK Compliance", title: "Annual Filing & Returns", desc: "Confirmation statements, annual accounts and statutory returns filed on time." },
  { icon: Globe2, tag: "USA Formation", title: "US LLC Formation", desc: "Register a US LLC remotely. Access PayPal, Stripe, Amazon and the US market." },
  { icon: Landmark, tag: "Banking", title: "Banking & Payments", desc: "Tide, Wise, Airwallex, Payoneer, Stripe, PayPal, WorldFirst and more." },
  { icon: Code2, tag: "Technology", title: "Web Development", desc: "Premium websites, landing pages and e-commerce for your global business." },
];

function Services() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Our Services" title={<>Everything Your <em className="text-gold-gradient not-italic">Business Needs</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl gold-border p-6 shadow-elegant hover:shadow-gold transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 shadow-gold">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <div className="text-xs uppercase tracking-wider text-gold mb-2">{s.tag}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const packageFeatures = [
  "UK LTD (Company) Registration",
  "Companies House Incorporation Fee Included",
  "Registered Office Address",
  "Company Authentication Code",
  "Company UTR Number",
  "Digital Company Incorporation Certificate",
  "Digital Memorandum & Articles of Association",
  "Digital Shares Certificate",
  "Includes ID Verification",
  "Printed Certificate of Incorporation",
];

function Packages() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-card/30 border-y border-border/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Featured Package"
          title={<><em className="text-silver-gradient not-italic">Silver</em> LTD Formation Package</>}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 relative rounded-3xl gold-border p-8 sm:p-12 shadow-elegant"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-silver-gradient text-primary-foreground text-xs font-bold tracking-widest">
            MOST POPULAR
          </div>

          <div className="text-center mb-10">
            <div className="text-sm uppercase tracking-widest text-gold-gradient mb-2">UK Company · Nova Formation Ltd</div>
            <div className="text-5xl sm:text-6xl font-bold text-gold-gradient">{BRAND.startingPrice}</div>
            <div className="text-sm text-muted-foreground mt-2">Complete LTD formation with everything included</div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {packageFeatures.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/40"
              >
                <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                <span className="text-sm">{f}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.04] transition-transform"
            >
              Get the Silver Package
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const reasons = [
  { title: "Speed & Efficiency", desc: "Most UK setups completed within 3 to 5 working days." },
  { title: "Transparent Pricing", desc: "No hidden fees. You know exactly what you pay for, every step." },
  { title: "Full Compliance", desc: "UTR, ID verification, annual filings — handled by specialists." },
  { title: "Global Expertise", desc: "Founders supported across multiple jurisdictions worldwide." },
  { title: "Dedicated Support", desc: "Personal account managers — real humans, fast responses." },
  { title: "Proven Track Record", desc: "Hundreds of companies registered with 98% retention." },
];

function WhyUs() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Why Choose Us" title={<>Why founders choose <em className="text-gold-gradient not-italic">Nova Formation</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card p-8"
            >
              <h3 className="text-lg font-semibold mb-2 text-silver-gradient">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const partners = ["Companies House", "HMRC", "IRS", "PayPal", "Stripe", "Wise", "WorldFirst", "Airwallex", "Tide", "Sunrate", "Shopify", "eBay"];

function Partners() {
  return (
    <section className="py-20 px-4 sm:px-6 border-y border-border/50 bg-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Trusted Network" title={<>Trusted Partners & <em className="text-gold-gradient not-italic">Official Integrations</em></>} />
        <div className="mt-12 relative">
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite]">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-5 rounded-xl gold-border whitespace-nowrap text-silver-gradient font-medium">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

const testimonials = [
  { quote: "Excellent service with a strong commitment to quality. Professional, on time, and clear communication. Highly recommended.", name: "Faizan Ahmed", loc: "Pakistan" },
  { quote: "Trusted and satisfied. Quick response and smooth communication throughout the entire process.", name: "Tahir Naveed", loc: "Pakistan" },
  { quote: "Really professional team. They guided me through every step and delivered exactly what was promised.", name: "Taimoor Khan", loc: "Pakistan" },
];

function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Testimonials" title={<>What our <em className="text-gold-gradient not-italic">clients say</em></>} />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl gold-border p-7"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-gold fill-gold" />)}
              </div>
              <p className="text-sm text-foreground/90 italic mb-5">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-silver-gradient">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.loc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto rounded-3xl gold-border p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden"
      >
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <h2 className="relative text-3xl sm:text-5xl font-bold">
          Ready to <em className="text-gold-gradient not-italic">launch your business?</em>
        </h2>
        <p className="relative mt-4 text-muted-foreground max-w-2xl mx-auto">
          Book a free 30-minute consultation. Our formation experts will map the fastest, fully-compliant path to launch your UK LTD or US LLC.
        </p>
        <div className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.04] transition-transform">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
          <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-silver/30 hover:bg-card transition-colors">
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>
      <h2 className="text-3xl sm:text-5xl font-bold leading-tight">{title}</h2>
    </div>
  );
}
