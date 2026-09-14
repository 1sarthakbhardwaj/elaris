import { Metadata } from "next";
import NotFound from "@/components/other-pages/404/NotFound";
export const metadata: Metadata = {
  title: "404 | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function NotFoundPage() {
  return (
    <>
      <NotFound />
    </>
  );
}
