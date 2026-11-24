import { ImageReveal } from "./ImageReveal";
import { MagneticButton } from "./MagneticButton";
import { TextReveal, FadeUp } from "./TextReveal";
import { SectionBg } from "./SectionBg";

export function AboutPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-warm px-6 py-28 md:px-10 md:py-36">
      <SectionBg photo="1600607687920-4e2a09cf159d" />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-6 inline-block rounded-sm border-l-4 border-ember bg-ember/10 px-4 py-2 text-[16.8px] font-extrabold uppercase tracking-[0.2em] text-ember sm:tracking-[0.3em]">
            About Glenn Interior
          </p>
          <TextReveal
            as="h2"
            className="font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl"
          >
            Designed. Manufactured. Installed.
          </TextReveal>
          <FadeUp
            delay={0.15}
            className="mt-8 max-w-lg rounded-sm border-l-4 border-ember bg-paper/80 px-5 py-4 text-lg font-semibold leading-relaxed text-ink shadow-lg backdrop-blur-md"
          >
            We bring{" "}
            <span className="font-extrabold text-ember">
              design, manufacturing and installation
            </span>{" "}
            together under{" "}
            <span className="font-extrabold text-ember">one roof</span> to
            create customised interior solutions with better control over
            quality, finishing, functionality and cost.
          </FadeUp>
          <FadeUp delay={0.25} className="mt-10">
            <MagneticButton
              href="/about"
              variant="ghost"
              className="border-2! border-ember! bg-paper/85 font-extrabold! text-ember! shadow-[0_0_22px_rgba(242,106,33,0.35)] backdrop-blur-md hover:bg-ember! hover:text-paper!"
            >
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
