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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">{children}</body>
    </html>
  );
}
