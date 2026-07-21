export type PackageBadge = "recommend" | "best-deal" | null;
export type PackageDuration = "Half Day" | "Full Day";

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: PackageDuration;
  description: string;
  badge: PackageBadge;
  includes: string[];
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "adventure-starter",
    name: "Adventure Starter",
    price: 1500,
    currency: "SAR",
    duration: "Half Day",
    description: "Perfect for first-time visitors",
    badge: null,
    includes: [
      "Tour of 3 island in jet ski",
      "Lunch on board + refreshments",
      "Snorkeling",
      "Relaxion et swim stops",
    ],
  },
  {
    id: "family-fun-package",
    name: "Family Fun Package",
    price: 1800,
    currency: "SAR",
    duration: "Full Day",
    description: "Memories for the whole family",
    badge: "recommend",
    includes: [
      "Guided dive to explore underwater life",
      "All equipment provided",
      "Professional instructor guidance",
      "Private yacht tour",
    ],
  },
  {
    id: "vip-experience",
    name: "VIP Experience",
    price: 2100,
    currency: "SAR",
    duration: "Full Day",
    description: "Exclusive luxury on the water",
    badge: "best-deal",
    includes: [
      "High-speed jet ski tour",
      "Beach BBQ dinner",
      "Kayaking expedition",
      "Scenic sunset cruise",
    ],
  },
  {
    id: "couples-escape",
    name: "Couples Escape",
    price: 800,
    currency: "SAR",
    duration: "Half Day",
    description: "Adventure and relaxation for two",
    badge: null,
    includes: [
      "Private yacht tour",
      "Candlelit dinner on board",
      "Couples massage",
      "Stargazing experience",
    ],
  },
  {
    id: "adventure-starter",
    name: "Adventure Starter",
    price: 1500,
    currency: "SAR",
    duration: "Half Day",
    description: "Perfect for first-time visitors",
    badge: null,
    includes: [
      "Tour of 3 island in jet ski",
      "Lunch on board + refreshments",
      "Snorkeling",
      "Relaxion et swim stops",
    ],
  },
  {
    id: "family-fun-package",
    name: "Family Fun Package",
    price: 1800,
    currency: "SAR",
    duration: "Full Day",
    description: "Memories for the whole family",
    badge: "recommend",
    includes: [
      "Guided dive to explore underwater life",
      "All equipment provided",
      "Professional instructor guidance",
      "Private yacht tour",
    ],
  },
  {
    id: "vip-experience",
    name: "VIP Experience",
    price: 2100,
    currency: "SAR",
    duration: "Full Day",
    description: "Exclusive luxury on the water",
    badge: "best-deal",
    includes: [
      "High-speed jet ski tour",
      "Beach BBQ dinner",
      "Kayaking expedition",
      "Scenic sunset cruise",
    ],
  },

];