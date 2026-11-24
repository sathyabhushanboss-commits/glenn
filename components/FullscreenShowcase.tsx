"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FitImage } from "./FitImage";
import { useRef } from "react";
import { portfolioProjects, type PortfolioProject } from "@/lib/data";

const slides = portfolioProjects.slice(6, 10);

function ShowcaseSlide({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, index === total - 1 ? 1 : 0]
  );
  const scale = useTransform(scrollYProgress, [start, end], [1.08, 1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="absolute inset-0">
        <FitImage src={project.image} alt={project.title} sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent" />

      <div className="relative flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:mx-auto md:px-10 md:pb-24">
        <h3 className="max-w-2xl font-display text-4xl font-bold uppercase leading-[1.05] text-paper [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-6xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-[#e8c547]">
          {project.category.join(" • ")}
        </p>
      </div>
    </motion.div>
  );
}

export function FullscreenShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative bg-ink"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {slides.map((project, i) => (
          <ShowcaseSlide
            key={project.id}
            project={project}
            index={i}
            total={slides.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
