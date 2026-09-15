"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "./TextReveal";

const segments = [
  {
    key: "residential",
    label: "Residential",
    tagline: "Spaces shaped around the way you live.",
    items: [
      "Apartments",
      "Villas",
      "Independent Homes",
      "Kitchens",
      "Bedrooms",
      "Living Rooms",
      "Wardrobes",
      "Custom Furniture",
    ],
    href: "/services#residential",
    cta: "Explore Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "commercial",
    label: "Commercial",
    tagline: "Spaces built around the way you work and grow.",
    items: [
      "Offices",
      "Retail",
      "Showrooms",
      "Restaurants",
      "Cafes",
      "Hotels",
      "Salons",
      "Clinics",
    ],
    href: "/services#commercial",
    cta: "Explore Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
];

export function SegmentSplit() {
  return (
    <section className="bg-ink px-6 pb-2 pt-28 text-paper md:px-10 md:pt-36">
      <div className="mx-auto max-w-[1600px]">
        <TextReveal
          as="h2"
          className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl"
        >
          Interiors for every kind of space.
        </TextReveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
        {segments.map((segment) => (
          <Link
            key={segment.key}
            href={segment.href}
            data-cursor="view"
            className="group relative flex h-[75vh] min-h-[520px] flex-col justify-end overflow-hidden border-t border-paper/10 p-8 md:p-12"
          >
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={segment.image}
                alt={`${segment.label} interior design by Glenn Interior`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/60 transition-colors duration-500 group-hover:bg-ink/40" />
            </motion.div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass">
              {segment.label}
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              {segment.tagline}
            </h3>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.1em] text-paper/60">
              {segment.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em]">
              {segment.cta}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
