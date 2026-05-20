import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { UK_JURISDICTIONS, US_STATES } from "./jurisdictions";
import { ukServices, usaServices } from "./catalog";

const InputSchema = z.object({
  region: z.enum(["UK", "USA"]),
  code: z.string().min(1).max(8),
});

// Parses "£140" -> 140
function parsePrice(p: string): number {
  const m = p.match(/(\d+)/);
  return m ? Number(m[1]) : 0;
}

export const getJurisdictionPricing = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const list = data.region === "UK" ? UK_JURISDICTIONS : US_STATES;
    const jurisdiction = list.find((j) => j.code === data.code);
    if (!jurisdiction) {
      return { error: "Invalid jurisdiction", packages: [], jurisdiction: null };
    }

    const source =
      data.region === "UK"
        ? ukServices.find((s) => s.slug === "uk-ltd-formation")
        : usaServices.find((s) => s.slug === "us-llc-formation");

    if (!source) {
      return { error: "Service not found", packages: [], jurisdiction: null };
    }

    const packages = source.packages.map((p) => {
      const base = parsePrice(p.price);
      const total = base + jurisdiction.surcharge;
      return {
        name: p.name,
        basePrice: p.price,
        finalPrice: `£${total}`,
        popular: !!p.popular,
        features: p.features,
        surcharge: jurisdiction.surcharge,
      };
    });

    return {
      error: null,
      jurisdiction: {
        code: jurisdiction.code,
        label: jurisdiction.label,
        region: jurisdiction.region,
        surcharge: jurisdiction.surcharge,
        note: jurisdiction.note,
      },
      packages,
      serviceSlug: source.slug,
      categoryPath: data.region === "UK" ? "/uk-services" : "/usa-services",
    };
  });
