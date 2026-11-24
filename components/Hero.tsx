"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-end overflow-hidden bg-ink">
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

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-8 pt-32 md:px-10 md:pb-20 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="mb-6 inline-block rounded-sm bg-ink/55 px-3 py-1.5 text-[22.7px] font-extrabold uppercase tracking-[0.25em] text-[#e8c547] backdrop-blur-sm [text-shadow:0_0_22px_rgba(232,197,71,0.75),0_0_6px_rgba(232,197,71,0.5),0_2px_6px_rgba(0,0,0,0.7)] sm:tracking-[0.35em]"
        >
          {site.name}
        </motion.p>

        <div className="max-w-4xl overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 1.05, duration: 1, ease }}
            className="font-display text-[11.5vw] font-bold uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-8xl"
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
          className="mt-8 max-w-xl text-lg text-paper/90 font-medium"
        >
          <span className="font-bold text-[#e8c547]">Custom design</span>,{" "}
          <span className="font-bold text-[#e8c547]">in-house manufacturing</span>{" "}
          and <span className="font-bold text-[#e8c547]">professional installation</span>{" "}
          for homes across Bengaluru since {site.since}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="/portfolio"
            variant="solid"
            className="px-10! py-5! text-[16.8px]! font-bold! shadow-[0_0_28px_rgba(232,96,23,0.55)]"
          >
            Explore Our Work
          </MagneticButton>
          <MagneticButton
            href="/contact"
            variant="outline"
            className="border-2! border-brass! px-10! py-5! text-[16.8px]! font-bold! text-[#e8c547]! bg-ink/40 shadow-[0_0_22px_rgba(232,197,71,0.35)] backdrop-blur-sm"
          >
            Get a Free Consultation
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-brass/40 pt-6 text-[15.4px] font-bold uppercase tracking-[0.15em] text-[#e8c547] [text-shadow:0_0_14px_rgba(232,197,71,0.45),0_2px_4px_rgba(0,0,0,0.6)] sm:tracking-[0.25em]"
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
