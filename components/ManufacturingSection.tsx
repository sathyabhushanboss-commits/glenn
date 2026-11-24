"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FitImage } from "./FitImage";
import { useRef } from "react";
import { TextReveal, FadeUp } from "./TextReveal";
import { SectionBg } from "./SectionBg";

const shots = [
  {
    label: "Material",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Craftsmanship",
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Assembly",
    image:
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Finishing",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ManufacturingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-42%"]);

  return (
    <section className="relative isolate overflow-hidden bg-warm py-28 md:py-36">
      <SectionBg photo="1504148455328-c376907d081c" />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="mb-6 text-sm font-extrabold uppercase tracking-[0.25em] text-ember">
          In-House Manufacturing
        </p>
        <TextReveal
          as="h2"
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl md:text-6xl"
        >
          Made in-house. Built for you.
        </TextReveal>
        <FadeUp delay={0.15} className="mt-6 max-w-xl text-lg text-ink font-medium">
          Our in-house manufacturing approach gives us greater control over
          quality, customisation, finishing, timelines and cost.
        </FadeUp>
      </div>

      <div ref={ref} className="mt-16 overflow-hidden">
        <motion.div style={{ x }} className="flex w-max gap-4 px-6 md:px-10">
          {shots.map((shot) => (
            <div
              key={shot.label}
              className="relative h-[52vh] w-[70vw] shrink-0 overflow-hidden sm:w-[46vw] md:w-[30vw] lg:w-[24vw]"
            >
              <FitImage
                src={shot.image}
                alt={`${shot.label} at Glenn Interior's in-house facility`}
                sizes="30vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-[0.25em] text-[#e8c547]">
                {shot.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
