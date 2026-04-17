import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElarisLabs — Full-stack AI creative ops for ads",
  description:
    "Build, iterate, and scale ad creative on a visual node canvas. One workspace for every model, every format, every team.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">{children}</body>
    </html>
  );
}
