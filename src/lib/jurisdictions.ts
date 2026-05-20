// Jurisdiction & state pricing data (factual filing fees, surcharges applied to base packages)

export type Jurisdiction = {
  code: string;
  label: string;
  region: "UK" | "USA";
  surcharge: number; // GBP surcharge added to base package
  currency: "£" | "$";
  note?: string;
};

export const UK_JURISDICTIONS: Jurisdiction[] = [
  { code: "EW", label: "England & Wales", region: "UK", surcharge: 0, currency: "£" },
  { code: "SC", label: "Scotland", region: "UK", surcharge: 0, currency: "£" },
  { code: "NI", label: "Northern Ireland", region: "UK", surcharge: 10, currency: "£" },
  { code: "WL", label: "Wales only", region: "UK", surcharge: 0, currency: "£" },
];

export const US_STATES: Jurisdiction[] = [
  { code: "WY", label: "Wyoming", region: "USA", surcharge: 0, currency: "£", note: "Most popular for non-residents" },
  { code: "DE", label: "Delaware", region: "USA", surcharge: 30, currency: "£" },
  { code: "NM", label: "New Mexico", region: "USA", surcharge: 0, currency: "£" },
  { code: "FL", label: "Florida", region: "USA", surcharge: 40, currency: "£" },
  { code: "TX", label: "Texas", region: "USA", surcharge: 70, currency: "£" },
  { code: "NV", label: "Nevada", region: "USA", surcharge: 90, currency: "£" },
  { code: "CA", label: "California", region: "USA", surcharge: 100, currency: "£" },
  { code: "NY", label: "New York", region: "USA", surcharge: 200, currency: "£", note: "Includes publication fee" },
];
