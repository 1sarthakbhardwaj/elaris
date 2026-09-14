import type { EnterprisePlan, PricingPlan } from "@/types/pricing";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    nameAccent: "start",
    description:
      "For individuals getting started. Ideal for testing and early experimentation.",
    monthly: 0,
    annualMonthly: 0,
    credits: 200,
    breakdown: "20 images, 1 video, 200 texts",
    features: ["200 credits per month", "Unlimited seats", "Team workspace"],
    cta: "Get Started Free",
  },
  {
    id: "growth",
    name: "Growth",
    nameAccent: "team",
    description:
      "For small creative teams developing ideas and producing focused deliverables.",
    monthly: 29,
    annualMonthly: 23,
    credits: 500,
    breakdown: "50 images, 2 videos, 500 texts",
    features: [
      "500 credits per month",
      "Unlimited seats",
      "Team workspace",
      "100 credits = $5.80",
    ],
    cta: "Start Growth",
  },
  {
    id: "scale",
    name: "Scale",
    nameAccent: "volume",
    description:
      "For creative teams producing high-volume final assets with full control over every detail.",
    monthly: 199,
    annualMonthly: 159,
    credits: 5000,
    breakdown: "500 images, 20 videos, 5,000 texts",
    features: [
      "5,000 credits per month",
      "Unlimited seats",
      "Team workspace",
      "100 credits = $3.98",
    ],
    cta: "Start Scaling",
    badge: "Most Popular",
    badgeAccent: true,
  },
];

export const ENTERPRISE_PLAN: EnterprisePlan = {
  heading: "Built for teams operating at global scale.",
  body: "Unlimited credits, white-glove onboarding, and a dedicated team to help your org ship at agency-level velocity, with the security, control, and procurement your legal team expects.",
  features: [
    "SSO & SAML",
    "Dedicated CSM",
    "99.9% Uptime SLA",
    "Custom contracts",
    "Volume pricing",
    "On-prem deployment",
  ],
  cta: "Talk to Sales",
};
