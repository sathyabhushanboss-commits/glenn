"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { TextReveal } from "./TextReveal";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-ink px-6 py-28 text-paper md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <TextReveal
          as="h2"
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl"
        >
          From idea to installation.
        </TextReveal>

        <div ref={ref} className="relative mt-20 max-w-3xl">
          <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-paper/10 md:left-[19px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-ember md:left-[19px]"
          />

          <ul className="space-y-12">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-6 pl-10 md:gap-10 md:pl-14"
              >
                <span className="absolute left-0 top-0 h-3 w-3 -translate-x-[5px] rounded-full bg-brass md:h-[13px] md:w-[13px]" />
                <span className="font-display text-sm text-brass">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-paper/60">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
