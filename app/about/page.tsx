import type { Metadata } from "next";
import { buildMetadata, baseKeywords } from "@/lib/seo";
import { AboutExperience } from "./about-client";
 
// NOTE: `metadata` can only be exported from a Server Component. Everything
// below the imports that needs scroll-linked / interactive animation lives in
// "./about-client" (a "use client" component) so this file can stay a plain
// server component and keep the site's existing SEO setup intact.
export const metadata: Metadata = buildMetadata({
  title: "About Glenn Interior | Interior Design Company in Bangalore",
  description:
    "Since 2003, Glenn Interior has designed, manufactured and installed home interiors across Bengaluru — all under one roof.",
  path: "/about",
  keywords: baseKeywords,
});
 
export default function AboutPage() {
  return <AboutExperience />;
}
 