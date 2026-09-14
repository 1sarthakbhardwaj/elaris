import Footer3 from "@/components/footers/Footer3";
import { Metadata } from "next";
import Hero from "@/components/homes/index-personal-portfolio/Hero";
import ParallaxDividerImage from "@/components/homes/index-personal-portfolio/ParallaxDividerImage";
import ProjectsGrid from "@/components/homes/index-personal-portfolio/ProjectsGrid";
import ParallaxDividerImage2 from "@/components/homes/index-personal-portfolio/ParallaxDividerImage2";
import StatisticsLines from "@/components/homes/index-personal-portfolio/StatisticsLines";
import DividerStickyImages from "@/components/animations/DividerStickyImages";
import MyExpertise from "@/components/homes/index-personal-portfolio/MyExpertise";
import ParallaxDividerImage3 from "@/components/homes/index-personal-portfolio/ParallaxDividerImage3";
import Resume from "@/components/homes/index-personal-portfolio/Resume";
import ParallaxDividerVideo from "@/components/homes/index-personal-portfolio/ParallaxDividerVideo";
import BlogPreview from "@/components/homes/index-personal-portfolio/BlogPreview";
import CTA from "@/components/homes/index-personal-portfolio/CTA";
export const metadata: Metadata = {
  title:
    "Index Personal Portfolio | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function IndexPersonalPortfolioPage() {
  return (
    <>
      <>
        <Hero />
        <ParallaxDividerImage />
        <ProjectsGrid />
        <ParallaxDividerImage2 />
        <StatisticsLines />
        <DividerStickyImages ctaHref="/about-me" ctaLabel="My Approach" />
        <MyExpertise />
        <ParallaxDividerImage3 />
        <Resume />
        <ParallaxDividerVideo />
        <BlogPreview />
        <CTA />
      </>
      <Footer3 name="Walker" />
    </>
  );
}
