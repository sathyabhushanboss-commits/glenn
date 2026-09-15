import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { TextReveal, FadeUp } from "@/components/TextReveal";
import { buildMetadata, baseKeywords } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design Portfolio | Glenn Interior Bangalore",
  description:
    "Browse residential and commercial interior design projects by Glenn Interior — kitchens, living rooms, villas, offices, retail and hospitality spaces across Bengaluru.",
  path: "/portfolio",
  keywords: baseKeywords,
});

export default function PortfolioPage() {
  return (
    <section className="bg-paper px-6 pb-28 pt-40 md:px-10 md:pb-36 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
          Portfolio
        </p>
        <TextReveal
          as="h1"
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-6xl"
        >
          Spaces that speak for themselves.
        </TextReveal>
        <FadeUp delay={0.15} className="mt-6 max-w-xl text-lg text-ink/60">
          A selection of residential and commercial spaces designed around
          people, purpose and place.
        </FadeUp>

        <div className="mt-16">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}
