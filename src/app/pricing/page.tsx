import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing | ElarisLabs — Plans for Teams Scaling AI Creative",
  description:
    "Simple, transparent pricing for the Agentic AI Creative OS. Free, Growth, Scale, and Enterprise — pay only for what you generate, with unlimited seats and brand memory on every plan.",
  keywords: [
    "ElarisLabs pricing",
    "AI creative OS pricing",
    "enterprise AI design plans",
    "automated asset production pricing",
    "AI ad generation cost",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    url: "https://elarislabs.ai/pricing",
    title: "Pricing | ElarisLabs",
    description:
      "Free, Growth, Scale, and Enterprise plans. Pay only for what you generate — unlimited seats and brand memory on every tier.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | ElarisLabs",
    description:
      "Free, Growth, Scale, and Enterprise plans. Pay only for what you generate.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
