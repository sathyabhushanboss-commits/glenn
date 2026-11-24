import { portfolioProjects } from "@/lib/data";
import { ImageReveal } from "./ImageReveal";
import { MagneticButton } from "./MagneticButton";
import { TextReveal, FadeUp } from "./TextReveal";
import Link from "next/link";
import { SectionBg } from "./SectionBg";

const spanClasses: Record<string, string> = {
  wide: "md:col-span-2 aspect-[16/10] md:aspect-auto",
  landscape: "aspect-[4/3] md:aspect-auto",
  portrait: "aspect-[3/4] md:aspect-auto md:row-span-2",
  square: "aspect-square md:aspect-auto",
};

export function PortfolioPreview() {
  const featured = portfolioProjects.slice(0, 6);

  return (
    <section className="relative isolate overflow-hidden bg-warm px-6 py-28 md:px-10 md:py-36">
      <SectionBg photo="1600210491892-03d54c0aaf87" />
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <TextReveal
              as="h2"
              className="max-w-2xl font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl"
            >
              Spaces that speak for themselves.
            </TextReveal>
            <FadeUp delay={0.15} className="mt-6 max-w-lg text-lg text-ink font-medium">
              A selection of homes designed around the people who live in
              them.
            </FadeUp>
          </div>
          <MagneticButton href="/portfolio" variant="ghost">
            Full Portfolio
          </MagneticButton>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[300px] md:grid-flow-dense">
          {featured.map((project) => (
            <Link
              key={project.id}
              href="/portfolio"
              data-cursor="view"
              className={`group relative block overflow-hidden ${spanClasses[project.size]}`}
            >
              <ImageReveal
                src={project.image}
                alt={project.title}
                className="h-full w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-linear-to-t from-ink/85 via-ink/10 to-transparent p-6">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">
                  {project.category[0]}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-paper">
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
