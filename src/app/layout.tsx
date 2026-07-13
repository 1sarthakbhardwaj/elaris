import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-MP9WQ3PX";
const GA_ID = "G-1825JCX1MY";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body className="noise" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
