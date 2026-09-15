import type { Metadata } from "next";
import { ServicesTabs } from "@/components/ServicesTabs";
import { TextReveal, FadeUp } from "@/components/TextReveal";
import { buildMetadata, baseKeywords } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Residential & Commercial Interior Design Services | Glenn Interior",
  description:
    "Complete residential and commercial interior design services in Bengaluru — modular kitchens, wardrobes, offices, retail, restaurants and more, designed and manufactured in-house.",
  path: "/services",
  keywords: baseKeywords,
});

export default function ServicesPage() {
  return (
    <section className="relative bg-paper px-6 pb-28 pt-40 md:px-10 md:pb-36 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
          Services
        </p>
        <TextReveal
          as="h1"
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-6xl"
        >
          What we design.
        </TextReveal>
        <FadeUp delay={0.15} className="mt-6 max-w-xl text-lg text-ink/60">
          From a single modular kitchen to a complete commercial fit-out —
          design, manufacturing, assembly and installation, all in-house.
        </FadeUp>

        <div className="relative mt-16">
          <ServicesTabs />
        </div>
      </div>
    </section>
  );
}
