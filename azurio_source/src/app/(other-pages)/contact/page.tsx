import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/contact/InnerHeadline";
import Socials from "@/components/other-pages/contact/Socials";
import ParallaxDividerImage from "@/components/other-pages/contact/ParallaxDividerImage";
import SectionTitle from "@/components/other-pages/contact/SectionTitle";
import CTAWithMarquee from "@/components/other-pages/contact/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Contact | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function ContactPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Socials />
        <ParallaxDividerImage />
        <SectionTitle />
        <CTAWithMarquee />
      </div>
    </>
  );
}
