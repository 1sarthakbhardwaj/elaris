import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://elarislabs.ai";
const SITE_TITLE = "ElarisLabs | The Agentic AI Creative OS for Enterprise";
const SITE_DESCRIPTION =
  "Scale omnichannel asset production from weeks to minutes. ElarisLabs is the node-based AI creative OS guaranteeing 100% brand compliance at infinite scale.";
const SITE_KEYWORDS = [
  "Agentic AI creative OS",
  "enterprise AI design",
  "automated asset production",
  "omnichannel ad scaling",
  "AI brand compliance",
  "multi-agent AI",
  "enterprise AdOps infrastructure",
  "PIM DAM AI integration",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: "ElarisLabs",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "ElarisLabs",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070A",
};

/**
 * JSON-LD structured data — helps Google surface ElarisLabs in
 * knowledge-panel and rich-result formats. Validate changes at
 * https://search.google.com/test/rich-results.
 */
const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ElarisLabs",
    legalName: "Elaris Labs AI",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: SITE_DESCRIPTION,
    sameAs: [
      "https://www.linkedin.com/company/elarislabs",
      "https://x.com/elarislabs",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ElarisLabs",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "ElarisLabs",
      url: SITE_URL,
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </body>
    </html>
  );
}
