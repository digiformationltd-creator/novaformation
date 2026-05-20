import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero, CTABanner } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nova Formation Ltd" },
      { name: "description", content: "Nova Formation Ltd — building solutions and creating value for global founders." },
      { property: "og:title", content: "About Nova Formation Ltd" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title={<>About <em className="text-gold-gradient not-italic">Nova Formation Ltd</em></>}
        subtitle={BRAND.tagline}
      />
      <section className="px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl gold-border p-8 sm:p-12 text-foreground/90 leading-relaxed space-y-5"
        >
          <p>
            Nova Formation Ltd is a UK-based company formation and compliance specialist. We help founders worldwide
            launch UK Limited Companies and US LLCs — fast, transparently, and with the right banking and payment
            setup from day one.
          </p>
          <p>
            From <span className="text-gold-gradient font-semibold">{BRAND.startingPrice}</span> LTD formation to
            multi-currency banking, annual filings and premium web development — every service is handled by
            specialists who treat each client like their only client.
          </p>
          <p>
            We exist to make global business setup genuinely accessible. No jargon, no hidden fees, no ticket
            queues — just real humans, fast responses, and the work done right the first time.
          </p>
        </motion.div>
      </section>
      <CTABanner />
    </PageShell>
  );
}
