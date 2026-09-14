export type PricingPlan = {
  id: string;
  name: string;
  nameAccent: string;
  description: string;
  monthly: number;
  annualMonthly: number;
  credits: number;
  breakdown: string;
  features: string[];
  cta: string;
  badge?: string;
  badgeAccent?: boolean;
};

export type EnterprisePlan = {
  heading: string;
  body: string;
  features: string[];
  cta: string;
};
