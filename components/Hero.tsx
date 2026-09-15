"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2400&auto=format&fit=crop"
          alt="A sunlit contemporary living room designed by Glenn Interior in Bengaluru"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-ink"
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.8, delay: 0.4 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-brass"
        >
          {site.name}
        </motion.p>

        <div className="max-w-4xl overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 1.05, duration: 1, ease }}
            className="font-display text-[13vw] font-bold uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Spaces designed
            <br />
            around you.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease }}
          className="mt-8 max-w-xl text-lg text-paper/80"
        >
          Residential &amp; Commercial Interiors. Custom design, in-house
          manufacturing and professional installation, since {site.since}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/portfolio" variant="solid">
            Explore Our Work
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Get a Free Consultation
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex items-center justify-between border-t border-paper/15 pt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-paper/60"
        >
          <span>Bengaluru • India</span>
          <span className="hidden sm:inline">
            Design • Manufacture • Install
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2"
          >
            Scroll to Explore ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
