import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutPreview } from "@/components/AboutPreview";
import { SegmentSplit } from "@/components/SegmentSplit";
import { ServicesPreview } from "@/components/ServicesPreview";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { FullscreenShowcase } from "@/components/FullscreenShowcase";
import { ManufacturingSection } from "@/components/ManufacturingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";
import { buildMetadata, baseKeywords } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Glenn Interior | Residential & Commercial Interior Designers in Bangalore",
  description:
    "Glenn Interior designs, manufactures and installs residential and commercial interiors in Bengaluru. Custom design, in-house manufacturing, since 2003.",
  path: "/",
  keywords: baseKeywords,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <AboutPreview />
      <SegmentSplit />
      <Marquee
        items={[
          "Residential",
          "Commercial",
          "Design",
          "Manufacture",
          "Install",
          "Since 2003",
        ]}
      />
      <ServicesPreview />
      <PortfolioPreview />
      <FullscreenShowcase />
      <ManufacturingSection />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
