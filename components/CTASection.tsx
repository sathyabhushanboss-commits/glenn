import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";
import { site } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 text-paper md:px-10 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop"
          alt="A finished Glenn Interior residential project"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div className="hairline-gold absolute left-1/2 top-0 w-32 -translate-x-1/2" />

      <div className="relative mx-auto max-w-3xl text-center">
        <TextReveal
          as="h2"
          className="font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl"
        >
          Ready to transform your space?
        </TextReveal>
        <p className="mx-auto mt-6 max-w-lg text-lg text-paper/70">
          Let&apos;s create an interior that feels uniquely yours.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/contact" variant="solid">
            Start Your Project
          </MagneticButton>
          <MagneticButton href={site.phoneHref} variant="outline">
            Call {site.phone}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
