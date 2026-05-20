export type USState = { name: string; abbr: string; starter: number };

// State-level pricing (USD). Source: digiformation.uk/usa-services/us-llc-formation/choose-state
// Silver = Starter + $70 · Gold = Starter + $200
export const US_STATES: USState[] = [
  { name: "Alabama", abbr: "AL", starter: 330 },
  { name: "Alaska", abbr: "AK", starter: 380 },
  { name: "Arizona", abbr: "AZ", starter: 180 },
  { name: "Arkansas", abbr: "AR", starter: 175 },
  { name: "California", abbr: "CA", starter: 200 },
  { name: "Colorado", abbr: "CO", starter: 180 },
  { name: "Connecticut", abbr: "CT", starter: 250 },
  { name: "Delaware", abbr: "DE", starter: 240 },
  { name: "Florida", abbr: "FL", starter: 255 },
  { name: "Georgia", abbr: "GA", starter: 230 },
  { name: "Hawaii", abbr: "HI", starter: 180 },
  { name: "Idaho", abbr: "ID", starter: 230 },
  { name: "Illinois", abbr: "IL", starter: 280 },
  { name: "Indiana", abbr: "IN", starter: 225 },
  { name: "Iowa", abbr: "IA", starter: 180 },
  { name: "Kansas", abbr: "KS", starter: 290 },
  { name: "Kentucky", abbr: "KY", starter: 170 },
  { name: "Louisiana", abbr: "LA", starter: 230 },
  { name: "Maine", abbr: "ME", starter: 305 },
  { name: "Maryland", abbr: "MD", starter: 230 },
  { name: "Massachusetts", abbr: "MA", starter: 630 },
  { name: "Michigan", abbr: "MI", starter: 180 },
  { name: "Minnesota", abbr: "MN", starter: 285 },
  { name: "Mississippi", abbr: "MS", starter: 180 },
  { name: "Missouri", abbr: "MO", starter: 180 },
  { name: "Montana", abbr: "MT", starter: 165 },
  { name: "Nebraska", abbr: "NE", starter: 230 },
  { name: "Nevada", abbr: "NV", starter: 555 },
  { name: "New Hampshire", abbr: "NH", starter: 230 },
  { name: "New Jersey", abbr: "NJ", starter: 255 },
  { name: "New Mexico", abbr: "NM", starter: 180 },
  { name: "New York", abbr: "NY", starter: 330 },
  { name: "North Carolina", abbr: "NC", starter: 255 },
  { name: "North Dakota", abbr: "ND", starter: 265 },
  { name: "Ohio", abbr: "OH", starter: 229 },
  { name: "Oklahoma", abbr: "OK", starter: 230 },
  { name: "Oregon", abbr: "OR", starter: 230 },
  { name: "Pennsylvania", abbr: "PA", starter: 255 },
  { name: "Rhode Island", abbr: "RI", starter: 280 },
  { name: "South Carolina", abbr: "SC", starter: 240 },
  { name: "South Dakota", abbr: "SD", starter: 280 },
  { name: "Tennessee", abbr: "TN", starter: 430 },
  { name: "Texas", abbr: "TX", starter: 430 },
  { name: "Utah", abbr: "UT", starter: 184 },
  { name: "Vermont", abbr: "VT", starter: 255 },
  { name: "Virginia", abbr: "VA", starter: 230 },
  { name: "Washington", abbr: "WA", starter: 330 },
  { name: "West Virginia", abbr: "WV", starter: 230 },
  { name: "Wisconsin", abbr: "WI", starter: 260 },
  { name: "Wyoming", abbr: "WY", starter: 230 },
];

export const POPULAR_STATE_ABBRS = ["WY", "DE", "FL", "TX", "NM", "MT"] as const;

export const pricingFor = (starter: number) => ({
  starter,
  silver: starter + 70,
  gold: starter + 200,
});

export const findState = (abbr: string) =>
  US_STATES.find((s) => s.abbr.toLowerCase() === abbr.toLowerCase());
