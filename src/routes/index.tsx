import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Building2, ShieldCheck, Landmark, Globe2, Code2, FileCheck2,
  ArrowRight, Sparkles, Star,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { JurisdictionSelector } from "@/components/site/JurisdictionSelector";
import { BRAND } from "@/lib/brand";
import londonHero from "@/assets/hero-london.jpg";


const ROTATING_HEADLINES = [
  "Register your UK Limited Company in days.",
  "Launch your US LLC from anywhere in the world.",
  "Open a UK business bank account remotely.",
  "Open a US business bank account remotely.",
  "Get your Stripe & PayPal account approved.",
  "Apply for your EIN with the IRS, hassle-free.",
  "Get your ITIN as a non-resident founder.",
  "Complete Companies House ID verification.",
  "Register for UTR & VAT with HMRC.",
  "Get a prestigious London registered office.",
  "Appoint your US registered agent in any state.",
  "File your BOI report on time and stay compliant.",
  "File your confirmation statement every year.",
  "File your annual company accounts with HMRC.",
  "Update directors and shareholders in minutes.",
  "Open a Wise or Payoneer multi-currency account.",
  "Open an Airwallex or Tide business account.",
  "Open a WorldFirst or Sunrate global account.",
  "Start selling on Amazon in the UK, US & EU.",
  "Launch your Shopify or eBay store today.",
  "Build a premium website with SEO included.",
  "Get custom branding and a professional logo.",
  "Set up a payment gateway for your store.",
  "Stay fully compliant as a global founder.",
];

function TypewriterHeadline() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const full = ROTATING_HEADLINES[i];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < full.length) {
        timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(full.slice(0, text.length - 1)), 20);
      } else {
        setI((p) => (p + 1) % ROTATING_HEADLINES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, i]);

  return (
    <span className="block text-gold-gradient gold-shimmer leading-tight px-2 min-h-[2.6em] sm:min-h-[1.3em]">
      {text}
      <span className="inline-block w-[2px] sm:w-[3px] h-[0.9em] -mb-[0.1em] ml-1 bg-gold align-middle animate-pulse" />
    </span>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Formation Ltd — UK & US Company Formation, Banking & Compliance" },
      { name: "description", content: "Form your UK Limited Company or US LLC remotely. Banking, compliance, EIN, ITIN and global founder support — all in one place." },
      { property: "og:title", content: "Nova Formation Ltd — UK & US Company Formation" },
      { property: "og:description", content: "Launch your UK Ltd or US LLC in days. Banking, compliance and global founder support." },
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
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mb-8 h-px w-24 bg-gold-gradient origin-center"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold leading-[1.15]"
        >
          <span className="block text-2xl sm:text-4xl lg:text-5xl text-silver-gradient mb-5">
            With Nova Formation, you can
          </span>
          <span className="block text-xl sm:text-3xl lg:text-4xl font-semibold">
            <TypewriterHeadline />
          </span>
          <span className="block text-sm sm:text-lg mt-6 font-normal text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for company formation, banking, compliance and growth across the{" "}
            <span className="text-gold-gradient font-semibold">UK, USA</span> and beyond — with{" "}
            <span className="text-gold-gradient font-semibold">Nova Formation Ltd</span>.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#quick-start"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.04] transition-transform"
          >
            Start Your Company
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
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

function Packages() {
  return (
    <div id="quick-start">
      <JurisdictionSelector />
    </div>
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
