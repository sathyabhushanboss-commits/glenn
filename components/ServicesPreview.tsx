"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";

const featured = [
  {
    number: "01",
    title: "Modular Kitchens",
    tagline: "Function meets form.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Living Room Interiors",
    tagline: "Built for how you actually live.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Wardrobes & Storage",
    tagline: "Made to measure, built in-house.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1400&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Office Interiors",
    tagline: "Workspaces designed around your team.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Restaurant & Hospitality",
    tagline: "Spaces engineered for experience.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
  },
];

export function ServicesPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <TextReveal
            as="h2"
            className="max-w-2xl font-display text-4xl font-bold uppercase leading-[1.05] text-ink sm:text-5xl"
          >
            What we design.
          </TextReveal>
          <MagneticButton href="/services" variant="ghost">
            All Services
          </MagneticButton>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr]">
          <ul>
            {featured.map((service, i) => (
              <li
                key={service.number}
                onMouseEnter={() => setActive(i)}
                className="group border-b border-ink/10 py-6 first:border-t"
              >
                <Link
                  href="/services"
                  data-cursor="link"
                  className="flex items-center justify-between gap-6"
                >
                  <span className="font-display text-sm text-brass">
                    {service.number}
                  </span>
                  <span className="flex-1 font-display text-2xl font-semibold uppercase text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                    {service.title}
                  </span>
                  <span className="hidden text-sm text-ink/50 sm:block">
                    {service.tagline}
                  </span>
                  <span className="text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ember">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-[4/5] overflow-hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={featured[active].image}
                  alt={featured[active].title}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
