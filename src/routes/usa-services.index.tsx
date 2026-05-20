import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/site/CategoryIndex";
import { usaServices } from "@/lib/catalog";

export const Route = createFileRoute("/usa-services/")({
  head: () => ({
    meta: [
      { title: "USA Business Services — Nova Formation Ltd" },
      { name: "description", content: "Form your US LLC, get EIN/ITIN and stay tax-compliant from anywhere." },
      { property: "og:title", content: "USA Business Services — Nova Formation Ltd" },
    ],
  }),
  component: () => (
    <CategoryIndex
      eyebrow="USA Services"
      title={<>USA Business <span className="text-gold-gradient">Services</span></>}
      subtitle="Form your US LLC remotely, get your EIN and ITIN, and stay tax-compliant from anywhere in the world."
      basePath="/usa-services"
      services={usaServices}
    />
  ),
});
