"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FitImage } from "./FitImage";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { PortfolioProject } from "@/lib/data";

export function PortfolioModal({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.button
            aria-label="Close project details"
            className="absolute inset-0 bg-ink/90 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-y-auto bg-paper md:grid-cols-2"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-ink/70 p-2 text-paper backdrop-blur"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[420px]">
              <FitImage
                src={project.image}
                alt={project.title}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-ember">
                {project.category.join(" • ")}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-6 text-lg font-medium leading-relaxed text-ink">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
