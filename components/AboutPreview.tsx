import { ImageReveal } from "./ImageReveal";
import { MagneticButton } from "./MagneticButton";
import { TextReveal, FadeUp } from "./TextReveal";

export function AboutPreview() {
  return (
    <section className="bg-warm px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            About Glenn Interior
          </p>
          <TextReveal
            as="h2"
            className="font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl"
          >
            Designed. Manufactured. Installed.
          </TextReveal>
          <FadeUp delay={0.15} className="mt-8 max-w-lg text-lg text-ink/70">
            We bring design, manufacturing and installation together under
            one roof to create customised interior solutions with better
            control over quality, finishing, functionality and cost.
          </FadeUp>
          <FadeUp delay={0.25} className="mt-10">
            <MagneticButton href="/about" variant="ghost">
              Discover Glenn Interior
            </MagneticButton>
          </FadeUp>
        </div>

        <ImageReveal
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
          alt="Custom-manufactured living room joinery by Glenn Interior"
          className="aspect-[4/5] w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
