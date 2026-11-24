"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FitImage } from "./FitImage";
import { services, type ServiceItem } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

// Bento-style spans for the 10-image gallery (desktop: 4 columns).
const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "",
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
];

function Lightbox({
  service,
  index,
  onClose,
  onIndex,
}: {
  service: ServiceItem;
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const total = service.gallery.length;
  const prev = useCallback(() => onIndex((index - 1 + total) % total), [index, total, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % total), [index, total, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} gallery`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.3em] text-paper/90">
        {service.title} — {String(index + 1).padStart(2, "0")} / {total}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-6 top-4 text-3xl text-paper/90 transition-colors hover:text-paper"
      >
        ×
      </button>

      <motion.div
        key={service.gallery[index]}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="relative h-[75vh] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={service.gallery[index]}
          alt={`${service.title} — premium interior ${index + 1}`}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </motion.div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 px-4 py-6 text-3xl text-paper/90 transition-colors hover:text-brass md:left-6"
      >
        ←
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-6 text-3xl text-paper/90 transition-colors hover:text-brass md:right-6"
      >
        →
      </button>
    </motion.div>
  );
}

function ServiceGallery({ service }: { service: ServiceItem }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {service.gallery.map((src, i) => (
          <motion.button
            type="button"
            key={src}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease }}
            className={`group/img relative overflow-hidden bg-ink/5 ${spans[i] ?? ""}`}
            aria-label={`Open ${service.title} image ${i + 1}`}
          >
            <FitImage
              src={src}
              alt={`${service.title} — premium interior ${i + 1}`}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="transition-transform duration-[1200ms] ease-out group-hover/img:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
            <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-paper opacity-0 transition-opacity duration-500 group-hover/img:opacity-100">
              View
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox service={service} index={open} onClose={close} onIndex={setOpen} />
        )}
      </AnimatePresence>
    </>
  );
}

function ServiceRow({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <div className="border-b border-ink/10 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease }}
        className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_1fr] md:items-end md:gap-10"
      >
        <span className="font-display text-sm text-brass">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-ink sm:text-4xl">
            {service.title}
          </h3>
          <p className="mt-2 text-ink">{service.short}</p>
        </div>
        <div>
          <p className="text-sm text-ink">{service.description}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.1em] text-ink/80">
            {service.benefits.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <ServiceGallery service={service} />
    </div>
  );
}

export function ServicesList() {
  return (
    <div className="border-t border-ink/10">
      {services.map((service, i) => (
        <ServiceRow key={service.slug} service={service} index={i} />
      ))}
    </div>
  );
}
