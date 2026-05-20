import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";
import { US_STATES, POPULAR_STATE_ABBRS, pricingFor, findState } from "@/lib/us-states";

export const Route = createFileRoute("/usa-services/us-llc-formation/choose-state")({
  head: () => ({
    meta: [
      { title: "Choose your US State — US LLC Formation | Nova Formation Ltd" },
      { name: "description", content: "Pick your US state and get instant Starter, Silver and Gold LLC formation pricing tailored to that state's filing fees." },
      { property: "og:title", content: "Choose your state — US LLC Formation" },
    ],
    links: [{ rel: "canonical", href: "/usa-services/us-llc-formation/choose-state" }],
  }),
  component: ChooseState,
});

const FEATURES = {
  starter: [
    "U.S. LLC Registration",
    "Shared Business Address",
    "Articles of Organization",
    "Employer Identification Number (EIN)",
    "Digital Company Documents (PDF)",
    "Certificate of Formation (Digital)",
    "Client Portal Access (document uploads & status updates)",
    "24/7 Support",
  ],
  silver: [
    "U.S. LLC Registration",
    "Unique Business Address (with portal & mail support)",
    "Articles of Organization",
    "Employer Identification Number (EIN)",
    "Digital Company Documents (PDF)",
    "Certificate of Formation (Digital)",
    "Client Portal Access (document uploads & status updates)",
    "24/7 Support",
  ],
  gold: [
    "U.S. LLC Registration",
    "Unique Business Address (with portal & mail support)",
    "Articles of Organization",
    "Employer Identification Number (EIN)",
    "Individual Taxpayer Identification Number (ITIN) included",
    "Digital Company Documents (PDF)",
    "Certificate of Formation (Digital)",
    "Client Portal Access (document uploads & status updates)",
    "Priority 24/7 Support",
  ],
};

function ChooseState() {
  const [abbr, setAbbr] = useState<string>("WY");
  const state = findState(abbr) ?? US_STATES[0];
  const price = useMemo(() => pricingFor(state.starter), [state]);

  const popular = POPULAR_STATE_ABBRS.map((a) => findState(a)!).filter(Boolean);

  return (
    <PageShell>
      <div className="pt-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-xs uppercase tracking-[0.3em] text-gold">
          Step 1 of 3 — Choose State
        </div>
      </div>

      <PageHero
        title={<><span className="text-gold-gradient">Choose your state</span> to register your LLC</>}
        subtitle="Each U.S. state has its own filing fees and rates. Select your state first — your package pricing will be calculated automatically based on it."
      />

      {/* Selector */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="max-w-3xl mx-auto rounded-2xl border border-silver/15 bg-card/60 p-6 sm:p-8 shadow-elegant">
          <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Select your state</label>
          <select
            value={abbr}
            onChange={(e) => setAbbr(e.target.value)}
            className="mt-3 w-full bg-background/80 border border-silver/20 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-gold/50"
          >
            {US_STATES.map((s) => {
              const p = pricingFor(s.starter);
              return (
                <option key={s.abbr} value={s.abbr}>
                  {s.name} ({s.abbr}) — from ${p.starter}
                </option>
              );
            })}
          </select>

          <div className="mt-5">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Popular choices</div>
            <div className="flex flex-wrap gap-2">
              {popular.map((s) => (
                <button
                  key={s.abbr}
                  onClick={() => setAbbr(s.abbr)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors border ${
                    abbr === s.abbr
                      ? "bg-gold-gradient text-primary-foreground border-transparent shadow-gold"
                      : "border-silver/20 hover:border-gold/50"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Pricing for Starter, Silver, and Gold updates automatically based on your selected state's filing fees.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 text-gold text-xs">
              <MapPin size={12} /> {state.name} ({state.abbr})
            </span>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Choose your <span className="text-gold-gradient">package</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Pricing tailored for {state.name}. All amounts in USD.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PackageCard
              tier="Starter"
              price={price.starter}
              features={FEATURES.starter}
              state={state.name}
            />
            <PackageCard
              tier="Silver"
              price={price.silver}
              features={FEATURES.silver}
              state={state.name}
              popular
            />
            <PackageCard
              tier="Gold"
              price={price.gold}
              features={FEATURES.gold}
              state={state.name}
            />
          </div>

          <div className="mt-10 text-center">
            <Link to="/usa-services/$slug" params={{ slug: "us-llc-formation" }} className="text-sm text-gold hover:underline">
              ← Back to US LLC Formation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PackageCard({
  tier, price, features, state, popular,
}: { tier: string; price: number; features: string[]; state: string; popular?: boolean }) {
  const wa = `${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hello ${BRAND.short}, I'd like to register a US LLC in ${state} with the ${tier} package ($${price}).`,
  )}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-6 shadow-elegant ${popular ? "gold-border bg-card" : "border border-silver/15 bg-card/60"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold flex items-center gap-1">
          <Sparkles size={12} /> Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold">{tier}</h3>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">One-time price</p>
      <div className="mt-2 text-4xl font-extrabold text-gold-gradient">${price}</div>
      <ul className="mt-5 space-y-2 text-sm">
        {features.map((f) => (
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
        className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold ${popular ? "bg-gold-gradient text-primary-foreground shadow-gold" : "border border-silver/30 hover:border-gold/50"}`}
      >
        Continue with {tier} <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}
