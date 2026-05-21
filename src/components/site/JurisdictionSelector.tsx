import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Loader2, Cloud } from "lucide-react";
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
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden border-y border-white/5">
      {/* Sky / cloud background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(120,160,220,0.18),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.10),_transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        {/* Floating cloud orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[6%] w-72 h-72 rounded-full bg-sky-400/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[8%] w-96 h-96 rounded-full bg-gold/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-56 h-56 rounded-full bg-white/5 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <Cloud size={12} className="text-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-silver-gradient">Quick Start</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Launch your company in <span className="text-gold-gradient">minutes</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Pick your region and jurisdiction — package pricing updates instantly with the official filing fees included.
          </p>
        </motion.div>

        {/* Glass container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] p-6 sm:p-8"
        >
          {/* Region toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl">
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
          <div className="max-w-3xl mx-auto">
            <label className="block text-sm text-muted-foreground mb-3 text-center">
              {region === "UK" ? "Choose your UK jurisdiction" : "Choose your US state"}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {list.map((j) => {
                const active = code === j.code;
                return (
                  <motion.button
                    key={j.code}
                    onClick={() => load(j.code)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative px-3 py-3 rounded-xl text-sm border backdrop-blur-xl transition-all ${
                      active
                        ? "border-gold/60 bg-gradient-to-br from-gold/20 to-white/5 text-foreground shadow-gold"
                        : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/25 hover:bg-white/[0.07] hover:text-foreground"
                    }`}
                  >
                    <div className="font-medium">{j.label}</div>
                    {j.note && <div className="text-[10px] text-gold mt-0.5">{j.note}</div>}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
            <Loader2 size={18} className="animate-spin text-gold" />
            <span className="text-sm">Calculating pricing…</span>
          </div>
        )}

        {/* Result — glass cards */}
        <AnimatePresence mode="wait">
          {result && result.jurisdiction && !loading && (
            <motion.div
              key={result.jurisdiction.code}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-14"
            >
              <div className="text-center mb-8">
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
                      whileHover={{ y: -6 }}
                      className={`group relative rounded-2xl p-6 backdrop-blur-2xl border overflow-hidden transition-all ${
                        p.popular
                          ? "border-gold/40 bg-gradient-to-br from-gold/15 via-white/[0.06] to-white/[0.02] shadow-gold"
                          : "border-white/10 bg-white/[0.04] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:border-white/25"
                      }`}
                    >
                      {/* Glass highlight */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      {p.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold flex items-center gap-1 shadow-gold">
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
                      <ul className="mt-4 space-y-1.5 text-sm relative">
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
                        className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                          p.popular
                            ? "bg-gold-gradient text-primary-foreground shadow-gold hover:scale-[1.02]"
                            : "border border-white/20 bg-white/5 backdrop-blur hover:border-gold/50 hover:bg-white/10"
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
