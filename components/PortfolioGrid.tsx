"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FitImage } from "./FitImage";
import {
  portfolioFilters,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/lib/data";
import { PortfolioModal } from "./PortfolioModal";

const spanClasses: Record<string, string> = {
  wide: "md:col-span-2 aspect-[16/10] md:aspect-auto",
  landscape: "aspect-[4/3] md:aspect-auto",
  portrait: "aspect-[3/4] md:aspect-auto md:row-span-2",
  square: "aspect-square md:aspect-auto",
};

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"ALL" | PortfolioCategory>("ALL");
  const [active, setActive] = useState<PortfolioProject | null>(null);

  const filtered = useMemo(() => {
    if (filter === "ALL") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {portfolioFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
              filter === f
                ? "border-ember bg-ember text-paper"
                : "border-ink/15 text-ink hover:border-ink/40 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[300px] md:grid-flow-dense"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(project)}
              data-cursor="view"
              className={`group relative block overflow-hidden text-left ${spanClasses[project.size]}`}
            >
              <FitImage
                src={project.image}
                alt={project.title}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-linear-to-t from-ink/85 via-ink/10 to-transparent p-6">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#e8c547]">
                  {project.category[0]}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-paper">
                  {project.title}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <PortfolioModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
