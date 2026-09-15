"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { residentialServices, commercialServices, type ServiceItem } from "@/lib/data";

function ServiceRow({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 gap-6 border-b border-ink/10 py-10 md:grid-cols-[auto_1fr_1.1fr] md:items-center md:gap-10"
    >
      <span className="font-display text-sm text-brass">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-2 text-ink/60">{service.short}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.1em] text-ink/40">
          {service.benefits.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden md:max-w-md">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

function initialTabFromHash(): "residential" | "commercial" {
  if (typeof window === "undefined") return "residential";
  return window.location.hash === "#commercial" ? "commercial" : "residential";
}

export function ServicesTabs() {
  const [tab, setTab] = useState<"residential" | "commercial">(initialTabFromHash);

  const services = tab === "residential" ? residentialServices : commercialServices;

  return (
    <div>
      <div id="residential" className="absolute -mt-28" aria-hidden="true" />
      <div id="commercial" className="absolute -mt-28" aria-hidden="true" />

      <div className="flex gap-2 border-b border-ink/10">
        {(["residential", "commercial"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`relative px-4 py-4 font-display text-lg font-bold uppercase tracking-[0.05em] transition-colors sm:text-xl ${
              tab === key ? "text-ink" : "text-ink/35 hover:text-ink/60"
            }`}
          >
            {key}
            {tab === key && (
              <motion.span
                layoutId="services-tab-underline"
                className="absolute inset-x-0 -bottom-px h-[2px] bg-ember"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4"
        >
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
