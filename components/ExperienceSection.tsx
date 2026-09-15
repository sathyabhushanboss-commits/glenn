import { AnimatedCounter } from "./AnimatedCounter";
import { TextReveal, FadeUp } from "./TextReveal";
import { stats } from "@/lib/data";
import { site } from "@/lib/site";

export function ExperienceSection() {
  return (
    <section className="bg-ink px-6 py-28 text-paper md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <TextReveal
          as="h2"
          className="max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl"
        >
          Crafting spaces since {site.since}.
        </TextReveal>
        <FadeUp delay={0.15} className="mt-8 max-w-xl text-lg text-paper/70">
          For more than two decades, Glenn Interior has been creating
          customised interior solutions for homes, businesses and commercial
          spaces across Bengaluru.
        </FadeUp>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={0.1 * i}>
              <p className="font-display text-4xl font-bold text-brass sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-paper/60">
                {stat.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
