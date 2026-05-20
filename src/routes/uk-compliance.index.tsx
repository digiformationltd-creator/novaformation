import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/site/CategoryIndex";
import { ukCompliance } from "@/lib/catalog";

export const Route = createFileRoute("/uk-compliance/")({
  head: () => ({
    meta: [
      { title: "UK Company Compliance — Nova Formation Ltd" },
      { name: "description", content: "Director changes, name changes, accounts, confirmation statements and more." },
      { property: "og:title", content: "UK Company Compliance — Nova Formation Ltd" },
    ],
  }),
  component: () => (
    <CategoryIndex
      eyebrow="UK Compliance"
      title={<>UK Company <span className="text-gold-gradient">Compliance</span></>}
      subtitle="Stay fully compliant with Companies House. Director changes, name changes, accounts, statements and more."
      basePath="/uk-compliance"
      services={ukCompliance}
    />
  ),
});
