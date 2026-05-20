import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageParts";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nova Formation Ltd" },
      { name: "description", content: "Get in touch with Nova Formation Ltd — UK company formation specialists." },
      { property: "og:title", content: "Contact — Nova Formation Ltd" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(1000),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    const text = `Hi Nova Formation,%0A%0AName: ${parsed.data.name}%0AEmail: ${parsed.data.email}%0APhone: ${parsed.data.phone || "-"}%0AService: ${parsed.data.service || "-"}%0A%0A${parsed.data.message}`;
    window.open(`${BRAND.whatsapp}?text=${text}`, "_blank");
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <em className="text-gold-gradient not-italic">get started</em></>}
        subtitle="Tell us about your business. We respond within hours, not days."
      />

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactCard icon={Phone} label="Phone / WhatsApp" value={BRAND.phone} href={`tel:${BRAND.phoneIntl}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with us now" href={BRAND.whatsapp} external />
            <ContactCard icon={Mail} label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 rounded-2xl gold-border p-7 sm:p-9 space-y-4 shadow-elegant"
          >
            <Field name="name" label="Full Name" error={errors.name} />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="email" label="Email" type="email" error={errors.email} />
              <Field name="phone" label="Phone (optional)" error={errors.phone} />
            </div>
            <Field name="service" label="Service Interested In (optional)" />
            <div>
              <label className="block text-sm mb-1.5 text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition-transform">
              Send Message <Send size={16} />
            </button>
            {status === "ok" && <p className="text-sm text-gold text-center">Opening WhatsApp with your message…</p>}
          </motion.form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm mb-1.5 text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href, external }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className="flex items-center gap-4 rounded-xl gold-border p-5 hover:shadow-gold transition-shadow"
    >
      <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </a>
  );
}
