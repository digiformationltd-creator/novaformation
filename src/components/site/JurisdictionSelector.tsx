import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { UK_JURISDICTIONS, US_STATES } from "@/lib/jurisdictions";
import { getJurisdictionPricing } from "@/lib/pricing.functions";
import { BRAND } from "@/lib/brand";

type PricingResult = Awaited<ReturnType<typeof getJurisdictionPricing>>;

export function JurisdictionSelector() {
  const [region, setRegion] = useState<"UK" | "USA">("UK");
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PricingResult | null>(null);

  const fetchPricing = useServerFn(getJurisdictionPricing);
  const list = region === "UK" ? UK_JURISDICTIONS : US_STATES;

  async function load(nextCode: string) {
    if (!nextCode) return;
    setCode(nextCode);
    setLoading(true);
    try {
      const data = await fetchPricing({ data: { region, code: nextCode } });
      setResult(data);
    } catch (e) {
      console.error(e);
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  function switchRegion(r: "UK" | "USA") {
    setRegion(r);
    setCode("");
    setResult(null);
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-card/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Quick Start</div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Launch your company in <span className="text-gold-gradient">minutes</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Pick your region and jurisdiction — package pricing updates instantly with the official filing fees included.
          </p>
        </motion.div>

        {/* Region toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-full border border-silver/20 bg-background/60 backdrop-blur">
            {(["UK", "USA"] as const).map((r) => (
              <button
                key={r}
                onClick={() => switchRegion(r)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  region === r
                    ? "bg-gold-gradient text-primary-foreground shadow-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r === "UK" ? "UK Ltd" : "USA LLC"}
              </button>
            ))}
          </div>
        </div>

        {/* Jurisdiction selector */}
        <div className="max-w-2xl mx-auto">
          <label className="block text-sm text-muted-foreground mb-2 text-center">
            {region === "UK" ? "Choose your UK jurisdiction" : "Choose your US state"}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {list.map((j) => (
              <button
                key={j.code}
                onClick={() => load(j.code)}
                className={`px-3 py-3 rounded-xl text-sm border transition-all ${
                  code === j.code
                    ? "border-gold bg-gold/10 text-foreground shadow-gold"
                    : "border-silver/15 bg-card/40 text-muted-foreground hover:border-gold/40 hover:text-foreground"
                }`}
              >
                <div className="font-medium">{j.label}</div>
                {j.note && <div className="text-[10px] text-gold mt-0.5">{j.note}</div>}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
            <Loader2 size={18} className="animate-spin text-gold" />
            <span className="text-sm">Calculating pricing…</span>
          </div>
        )}

        {/* Result */}
        <AnimatePresence mode="wait">
          {result && result.jurisdiction && !loading && (
            <motion.div
              key={result.jurisdiction.code}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-12"
            >
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Pricing for
                </span>
                <h3 className="text-2xl font-bold text-gold-gradient">
                  {result.jurisdiction.label}
                </h3>
                {result.jurisdiction.surcharge > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Includes £{result.jurisdiction.surcharge} state filing fee
                  </p>
                )}
              </div>

              <div
                className={`grid gap-5 ${
                  result.packages.length === 3
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {result.packages.map((p, i) => {
                  const waMsg = encodeURIComponent(
                    `Hello ${BRAND.short}, I want to register a ${region === "UK" ? "UK Ltd" : "US LLC"} in ${result.jurisdiction!.label} with the ${p.name} package (${p.finalPrice}).`,
                  );
                  return (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`relative rounded-2xl p-6 shadow-elegant ${
                        p.popular
                          ? "gold-border bg-card"
                          : "border border-silver/15 bg-card/60"
                      }`}
                    >
                      {p.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold flex items-center gap-1">
                          <Sparkles size={12} /> Most Popular
                        </div>
                      )}
                      <h4 className="text-lg font-bold">{p.name}</h4>
                      <div className="mt-2 text-4xl font-extrabold text-gold-gradient">
                        {p.finalPrice}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        All fees included
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm">
                        {p.features.slice(0, 6).map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-gold mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                        {p.features.length > 6 && (
                          <li className="text-xs text-gold pl-5">
                            +{p.features.length - 6} more features
                          </li>
                        )}
                      </ul>
                      <a
                        href={`${BRAND.whatsapp}?text=${waMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold ${
                          p.popular
                            ? "bg-gold-gradient text-primary-foreground shadow-gold"
                            : "border border-silver/30 hover:border-gold/50"
                        }`}
                      >
                        Get Started <ArrowRight size={14} />
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
