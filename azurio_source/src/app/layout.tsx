import "@/styles/template.css";
import { JetBrains_Mono, Manrope } from "next/font/google";
import Header1 from "@/components/headers/Header1";
import TemplateRuntimeProvider from "@/components/common/TemplateRuntimeProvider";
import MenuRuntimeShell from "@/components/headers/MenuRuntimeShell";
import { Metadata } from "next";
import { cookies } from "next/headers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "ElarisLabs AI - The Agentic Business OS to Build & Grow",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("template.theme")?.value;
  const initialTheme = cookieTheme === "dark" ? "dark" : "light";

  return (
    <html
      lang="en"
      className="no-touch"
      color-scheme={initialTheme}
      suppressHydrationWarning
    >
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable}`}
        style={
          {
            "--_font-default": "var(--font-manrope)",
            "--_font-accent": "var(--font-jetbrains-mono)",
          } as React.CSSProperties
        }
      >
        <TemplateRuntimeProvider>
          <Header1 initialTheme={initialTheme} />
          <MenuRuntimeShell />
          {children}
        </TemplateRuntimeProvider>
      </body>
    </html>
  );
}
