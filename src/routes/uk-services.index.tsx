import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/site/CategoryIndex";
import { ukServices } from "@/lib/catalog";

export const Route = createFileRoute("/uk-services/")({
  head: () => ({
    meta: [
      { title: "UK Business Services — Nova Formation Ltd" },
      { name: "description", content: "UK LTD formation, ID verification, UTR, VAT and registered office services." },
      { property: "og:title", content: "UK Business Services — Nova Formation Ltd" },
    ],
  }),
  component: () => (
    <CategoryIndex
      eyebrow="UK Services"
      title={<>UK Business <span className="text-gold-gradient">Services</span></>}
      subtitle="From company formation to VAT, UTR codes and identity verification — every UK service you need under one roof."
      basePath="/uk-services"
      services={ukServices}
    />
  ),
});
