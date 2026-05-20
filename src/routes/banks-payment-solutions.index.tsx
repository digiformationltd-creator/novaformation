import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/site/CategoryIndex";
import { banking } from "@/lib/catalog";

export const Route = createFileRoute("/banks-payment-solutions/")({
  head: () => ({
    meta: [
      { title: "Banking & Payment Solutions — Nova Formation Ltd" },
      { name: "description", content: "Open business accounts and connect global payment gateways — Stripe, PayPal, Wise, Tide, Airwallex and more." },
      { property: "og:title", content: "Banking & Payment Solutions — Nova Formation Ltd" },
    ],
  }),
  component: () => (
    <CategoryIndex
      eyebrow="Banking"
      title={<>Banking & Payment <span className="text-gold-gradient">Solutions</span></>}
      subtitle="Open business accounts and connect global payment gateways — Stripe, PayPal, Wise, Tide, Airwallex and more."
      basePath="/banks-payment-solutions"
      services={banking}
    />
  ),
});
