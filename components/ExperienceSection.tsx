import { AnimatedCounter } from "./AnimatedCounter";
import { TextReveal, FadeUp } from "./TextReveal";
import { stats } from "@/lib/data";
import { site } from "@/lib/site";
import { SectionBg } from "./SectionBg";

export function ExperienceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-6 pb-28 pt-10 text-paper md:px-10 md:pb-36 md:pt-16">
      <SectionBg photo="1600585154526-990dced4db0d" tone="dark" />
      <div className="mx-auto max-w-[1600px]">
        <TextReveal
          as="h2"
          className="max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl"
        >
          Crafting spaces since {site.since}.
        </TextReveal>
        <FadeUp delay={0.15} className="mt-8 max-w-3xl border-l-4 border-brass pl-5 text-[25.2px] font-medium leading-snug text-paper [text-shadow:0_0_18px_rgba(232,197,71,0.25)]">
          For more than <span className="font-bold text-brass">two decades</span>,
          Glenn Interior has been creating customised interior solutions for
          homes across Bengaluru.
        </FadeUp>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={0.1 * i}>
              <p className="font-display text-4xl font-bold text-brass sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-paper/90">
                {stat.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
