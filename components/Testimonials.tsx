"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { SectionBg } from "./SectionBg";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-paper px-6 py-28 md:px-10 md:py-36">
      <SectionBg photo="1615874959474-d609969a20ed" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-10 text-sm font-extrabold uppercase tracking-[0.25em] text-ember">
          What our clients say
        </p>

        <div className="relative min-h-[220px]">
          <span className="font-display text-8xl leading-none text-brass/30">
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="-mt-10 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-4xl"
            >
              {testimonials[index].quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-ember" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
