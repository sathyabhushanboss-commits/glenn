"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ImageReveal } from "@/components/ImageReveal";
import { FitImage } from "@/components/FitImage";
import { TextReveal, FadeUp } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { site } from "@/lib/site";

/* ────────────────────────────────────────────────────────────────────────
   CURSOR CONTEXT
   Global "VIEW" / "OPEN" cursor state, desktop-only. Components opt in by
   calling useCursor().set("VIEW") on mouse enter / useCursor().clear() on
   mouse leave. #125 #126 #127
   ──────────────────────────────────────────────────────────────────────── */

const CursorContext = createContext<{
  set: (label: string) => void;
  clear: () => void;
}>({ set: () => {}, clear: () => {} });

const useCursor = () => useContext(CursorContext);

function CustomCursor({ label }: { label: string | null }) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 500, damping: 40, mass: 0.4 });
  const y = useSpring(0, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduceMotion) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          width: label ? 76 : 10,
          height: label ? 76 : 10,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className="flex items-center justify-center rounded-full border border-paper/70 bg-ink/40 backdrop-blur-sm"
      >
        <AnimatePresence>
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   GLOBAL DECORATIVE PRIMITIVES
   ──────────────────────────────────────────────────────────────────────── */

// #118 shared scroll progress bar (top of viewport)
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-ember"
    />
  );
}

// #glain grain / noise texture, applied once globally, very subtle
function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

// #4/#7/#33 architectural corner brackets
function CornerMarks({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const stroke = tone === "light" ? "border-paper/30" : "border-ink/20";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-4 md:inset-8 ${className}`}>
      <span className={`absolute left-0 top-0 h-4 w-4 border-l border-t ${stroke}`} />
      <span className={`absolute right-0 top-0 h-4 w-4 border-r border-t ${stroke}`} />
      <span className={`absolute bottom-0 left-0 h-4 w-4 border-b border-l ${stroke}`} />
      <span className={`absolute bottom-0 right-0 h-4 w-4 border-b border-r ${stroke}`} />
    </div>
  );
}

// Section eyebrow: number + label, animates in on view (#128 section number reveal)
function SectionEyebrow({
  number,
  label,
  tone = "dark",
  align = "left",
}: {
  number: string;
  label: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`font-display text-xs tabular-nums ${
          tone === "dark" ? "text-ink/80" : "text-paper/80"
        }`}
      >
        {number}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${
          tone === "dark" ? "text-ember" : "text-brass"
        }`}
      >
        {label}
      </motion.span>
    </div>
  );
}

// #24 #57 #78 #86 orange/gold accent line that draws on view
function DrawLine({
  tone = "ember",
  className = "",
}: {
  tone?: "ember" | "brass";
  className?: string;
}) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`block h-px origin-left ${
        tone === "ember" ? "bg-ember" : "bg-brass"
      } ${className}`}
    />
  );
}

// #1 #8 giant watermark typography (2003, section numbers, etc.)
function GiantWatermark({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none select-none font-display font-bold leading-none text-ink/[0.05] ${className}`}
    >
      {children}
    </span>
  );
}

// #25 vertical rotated label (e.g. "OUR STORY", "GLENN INTERIOR")
function VerticalLabel({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none hidden select-none [writing-mode:vertical-rl] text-xs font-semibold uppercase tracking-[0.4em] md:block ${
        tone === "dark" ? "text-ink/25" : "text-paper/25"
      } ${className}`}
    >
      {children}
    </span>
  );
}

// #6 #9 blueprint / architectural grid, very subtle
function BlueprintGrid({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 [background-size:64px_64px] ${
        tone === "dark"
          ? "opacity-[0.035] [background-image:linear-gradient(to_right,#050505_1px,transparent_1px),linear-gradient(to_bottom,#050505_1px,transparent_1px)]"
          : "opacity-[0.05] [background-image:linear-gradient(to_right,#F7F5F0_1px,transparent_1px),linear-gradient(to_bottom,#F7F5F0_1px,transparent_1px)]"
      }`}
    />
  );
}

/* ────────────────────────────────────────────────────────────────────────
   01 — CINEMATIC HERO
   ──────────────────────────────────────────────────────────────────────── */

function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const reduceMotion = useReducedMotion();

  const imgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.12, 1.28]);
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "18%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -80]);
  const bigYearX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 140]);
  const bigYearOpacity = useTransform(scrollYProgress, [0, 0.6], [0.14, 0]);
  const bigYearScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.85]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] items-end overflow-hidden bg-ink"
    >
      {/* #01 #02 #16 background image scale + reveal + parallax */}
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2200&auto=format&fit=crop"
            alt="Warm, minimal living room designed and installed by Glenn Interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* #03 dark overlay fade-in */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10"
      />

      {/* #05 #08 #09 #10 #11 giant 2003 behind heading */}
      <motion.div
        style={{ x: bigYearX, opacity: bigYearOpacity, scale: bigYearScale }}
        className="pointer-events-none absolute right-[-4%] top-[8%] select-none font-display text-[28vw] font-bold leading-none text-paper md:top-[4%]"
        aria-hidden
      >
        {site.since ?? "2003"}
      </motion.div>

      {/* grain + grid + corner marks (#26 #4 #6) */}
      <BlueprintGrid tone="light" />
      <CornerMarks tone="light" />

      {/* coordinate-style decorative text */}
      <div className="pointer-events-none absolute right-6 top-6 hidden text-right text-[10px] uppercase tracking-[0.3em] text-paper/80 md:block md:right-10 md:top-10">
        <p>12.9716° N</p>
        <p>77.5946° E</p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-5 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.25em] text-brass"
        >
          <span className="h-px w-8 bg-brass" />
          About Glenn Interior
        </motion.p>

        <motion.div style={{ y: headingY }}>
          {/* #06 #04 clip-path line-by-line heading reveal */}
          <TextReveal
            as="h1"
            className="max-w-4xl font-display text-[13vw] font-bold uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-[6.4rem]"
          >
            More than interiors. Spaces with purpose.
          </TextReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-4 text-paper/90 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="text-base font-medium sm:text-lg">
            Residential Interiors
          </p>
          <span className="hidden h-4 w-px bg-paper/30 sm:block" />
          <p className="text-xs uppercase tracking-[0.25em] text-paper/90">
            Design · Manufacture · Assemble · Install
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-6 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-paper/90"
        >
          <span>Bengaluru / India</span>
          <span className="h-1 w-1 rounded-full bg-brass" />
          <span>Since {site.since ?? "2003"}</span>
        </motion.div>
      </div>

      {/* #14 #15 scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-3 md:right-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/90">
          Scroll to explore
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-paper/20">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-1/2 w-full bg-brass"
          />
        </span>
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   02 — OUR STORY
   ──────────────────────────────────────────────────────────────────────── */

function OurStory() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper px-6 py-24 md:px-10 md:py-32">
      <GiantWatermark className="absolute -bottom-10 left-4 text-[18vw] md:left-8">
        02
      </GiantWatermark>
      <VerticalLabel className="absolute left-1 top-1/2 -translate-y-1/2 md:left-3">
        Our Story
      </VerticalLabel>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <div className="md:pl-10">
          <SectionEyebrow number="02" label="Our Story" />
          <TextReveal
            as="h2"
            className="mt-6 font-display text-3xl font-bold uppercase leading-[1.1] text-ink sm:text-4xl md:text-5xl"
          >
            Design, manufacturing and installation, under one roof.
          </TextReveal>
          <FadeUp delay={0.15} className="mt-6 max-w-xl text-lg text-ink font-medium">
            We have been providing{" "}
            <span className="font-bold text-ember">
              design, manufacturing, assembly and installation
            </span>{" "}
            services for homes since {site.since ?? "2003"}. Every project
            follows a customised, quality-first and cost-effective approach,
            backed by our in-house manufacturing capability.
          </FadeUp>
          <DrawLine tone="ember" className="mt-10 w-24" />
        </div>

        <div className="relative">
          <motion.div style={{ y: imgY }} className="relative">
            <ImageReveal
              src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1600&auto=format&fit=crop"
              alt="Glenn Interior's in-house manufacturing team shaping cabinetry"
              className="aspect-[4/5] w-full transition-transform duration-700 ease-out hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* #25 image frame revealed after image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pointer-events-none absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-brass/50 md:block"
            />
          </motion.div>
          <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/80">
            <span>Fig. 01</span>
            <span className="h-px flex-1 bg-ink/10" />
            <span>In-house craftsmanship</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   03 — WHAT WE DESIGN
   ──────────────────────────────────────────────────────────────────────── */

const residentialServices = [
  "Full Home Interiors",
  "Modular Kitchen & Living Room",
  "Bedroom & Home Office",
  "Turnkey Projects",
];

function SplitPanel({
  index,
  title,
  subtitle,
  services,
  image,
  alt,
  ctaLabel,
  active,
  onActivate,
}: {
  index: string;
  title: string;
  subtitle: string;
  services: string[];
  image: string;
  alt: string;
  ctaLabel: string;
  active: boolean;
  onActivate: () => void;
}) {
  const cursor = useCursor();
  return (
    <motion.div
      onMouseEnter={() => {
        onActivate();
        cursor.set("Open");
      }}
      onMouseLeave={() => cursor.clear()}
      animate={{ flexGrow: active ? 1.65 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[420px] flex-1 basis-0 cursor-pointer overflow-hidden md:min-h-[640px]"
    >
      <motion.div
        animate={{ scale: active ? 1.05 : 1, opacity: active ? 1 : 0.45 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <FitImage
          src={image}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
      </motion.div>

      <CornerMarks tone="light" />

      <div className="relative z-10 flex w-full flex-col justify-end p-8 md:p-12">
        <motion.span
          animate={{ scale: active ? 1.1 : 1 }}
          className="mb-4 font-display text-sm text-brass"
        >
          {index}
        </motion.span>
        <motion.h3
          animate={{ y: active ? 0 : 6 }}
          className="font-display text-4xl font-bold uppercase leading-[0.95] text-paper sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-xs text-sm text-paper/90"
        >
          {subtitle}
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
          }}
          className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2"
        >
          {services.map((service) => (
            <motion.li
              key={service}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="text-xs uppercase tracking-[0.15em] text-paper/90"
            >
              {service}
            </motion.li>
          ))}
        </motion.ul>

        <DrawLine tone="brass" className="mt-8 w-16" />

        <div className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-paper">
          {ctaLabel}
          <motion.span
            animate={{ x: active ? 4 : 0 }}
            transition={{ duration: 0.4 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

function WhatWeDesign() {

  return (
    <section className="relative overflow-hidden bg-ink px-0 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionEyebrow number="03" label="What We Design" tone="light" />
        <TextReveal
          as="h2"
          className="mt-6 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.1] text-paper sm:text-4xl md:text-5xl"
        >
          Interiors shaped around the way you live.
        </TextReveal>
      </div>

      <div className="mt-14 flex flex-col md:mt-16 md:flex-row md:px-0">
        <SplitPanel
          index="01"
          title="Residential"
          subtitle="Spaces shaped around the way you live."
          services={residentialServices}
          image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
          alt="Warmly lit modern residential living room"
          ctaLabel="Explore Residential"
          active
          onActivate={() => {}}
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   04 — DESIGN → MANUFACTURE → INSTALL
   ──────────────────────────────────────────────────────────────────────── */

const processStages = [
  {
    label: "Design",
    number: "01",
    text: "We plan every layout, material and finish around how the space will actually be used.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    alt: "Interior design planning and material selection",
  },
  {
    label: "Manufacture",
    number: "02",
    text: "Furniture and fittings are built in our own facility and quality-checked before they leave.",
    image:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1600&auto=format&fit=crop",
    alt: "In-house manufacturing workshop crafting furniture",
  },
  {
    label: "Install",
    number: "03",
    text: "Our own team assembles and installs on site, so the finish matches the design.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    alt: "Final interior installation in a finished home",
  },
];

function ProcessSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      processStages.length - 1,
      Math.floor(v * processStages.length),
    );
    setActive(idx);
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative bg-ink text-paper" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden px-6 py-20 md:px-10 md:py-24">
        <BlueprintGrid tone="light" />
        <SectionEyebrow number="04" label="Our Process" tone="light" />
        <TextReveal
          as="h2"
          className="mt-6 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:text-5xl"
        >
          From idea to installation.
        </TextReveal>

        <div className="relative mt-10 flex flex-1 items-center">
          {/* background image crossfade per active stage (#48 #49) */}
          <div className="absolute inset-0 -z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 0.28, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={processStages[active].image}
                  alt={processStages[active].alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            {processStages.map((stage, i) => (
              <div key={stage.label} className="relative">
                <motion.p
                  animate={{
                    opacity: active === i ? 1 : 0.3,
                  }}
                  className="font-display text-xs tabular-nums text-brass"
                >
                  {stage.number}
                </motion.p>
                <motion.h3
                  animate={{
                    opacity: active === i ? 1 : 0.25,
                    y: active === i ? 0 : 8,
                    filter: active === i ? "brightness(1)" : "brightness(0.6)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 font-display text-4xl font-bold uppercase leading-none sm:text-5xl"
                >
                  {stage.label}
                </motion.h3>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 max-w-xs text-sm text-paper/90"
                    >
                      {stage.text}
                    </motion.p>
                  )}
                </AnimatePresence>
                <span
                  aria-hidden
                  className={`mt-6 block h-px w-full origin-left bg-brass transition-transform duration-500 ${
                    active === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* connecting progress line (#45 #46) */}
        <div className="relative mt-10 h-px w-full bg-paper/15">
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute inset-y-0 left-0 h-px w-full origin-left bg-ember"
          />
          <div className="absolute inset-0 flex items-center justify-between">
            {processStages.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 -translate-y-1/2 rounded-full transition-colors duration-300 ${
                  i <= active ? "bg-ember" : "bg-paper/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   05 — IN-HOUSE MANUFACTURING
   ──────────────────────────────────────────────────────────────────────── */

function Manufacturing() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const labels = ["Custom", "Controlled", "Crafted"];

  return (
    <section ref={ref} className="relative overflow-hidden bg-warm px-6 py-24 md:px-10 md:py-32">
      <GiantWatermark className="absolute -top-10 right-4 text-[16vw] md:right-10">
        05
      </GiantWatermark>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative order-2 md:order-1">
          <motion.div style={{ y: imgY }}>
            <ImageReveal
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
              alt="Craftsman finishing custom furniture in Glenn Interior's workshop"
              className="aspect-[5/6] w-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <CornerMarks tone="dark" className="inset-2" />
          <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/80">
            <span>Material · Finish · Hardware</span>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <SectionEyebrow number="05" label="Manufacturing" />
          <TextReveal
            as="h2"
            className="mt-6 font-display text-3xl font-bold uppercase leading-[1.05] text-ink sm:text-4xl md:text-5xl"
          >
            Made in-house. Built for you.
          </TextReveal>
          <FadeUp delay={0.15} className="mt-6 max-w-md text-lg text-ink font-medium">
            Our in-house manufacturing approach gives us greater control over
            customisation, quality, finishing, timelines and cost.
          </FadeUp>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {labels.map((l) => (
              <motion.span
                key={l}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
              >
                {l}
              </motion.span>
            ))}
          </motion.div>

          <DrawLine tone="ember" className="mt-10 w-24" />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   06 — 2003 → TODAY TIMELINE
   ──────────────────────────────────────────────────────────────────────── */

const timeline = [
  {
    year: "2003",
    text: "Glenn Interior is founded, offering design and installation for homes in Bengaluru.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
  },
  {
    year: "2010",
    text: "In-house manufacturing becomes a core part of the business, bringing greater control over quality and cost.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    year: "Today",
    text: "A full-service residential interior studio, still hands-on with every project.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop",
  },
];

function Timeline() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(timeline.length - 1, Math.floor(v * timeline.length));
    setActive(idx);
  });

  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative bg-warm" style={{ height: `${timeline.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6 py-16 md:px-10">
        <BlueprintGrid tone="dark" />
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
          <div className="relative">
            <SectionEyebrow number="06" label="Since 2003" />
            <div className="mt-8 flex items-start gap-8">
              {/* vertical progress line + node (#59 #60 #70) */}
              <div className="relative mt-2 hidden h-64 w-px bg-ink/10 md:block">
                <motion.div
                  style={{ scaleY: lineScale }}
                  className="absolute left-0 top-0 h-full w-px origin-top bg-ember"
                />
                <motion.div
                  style={{ top: dotY }}
                  className="absolute -left-[5px] h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-ember shadow-[0_0_0_4px_rgba(242,106,33,0.15)]"
                />
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={timeline[active].year}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="font-display text-6xl font-bold uppercase leading-none text-ember sm:text-7xl"
                  >
                    {timeline[active].year}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={timeline[active].text}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="mt-6 max-w-sm text-lg text-ink font-medium"
                  >
                    {timeline[active].text}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-8 flex gap-2">
                  {timeline.map((t, i) => (
                    <span
                      key={t.year}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === active ? "w-8 bg-ember" : "w-3 bg-ink/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeline[active].image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <FitImage
                  src={timeline[active].image}
                  alt={`Glenn Interior in ${timeline[active].year}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
            <CornerMarks tone="light" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   07 — EDITORIAL STATEMENT
   ──────────────────────────────────────────────────────────────────────── */

function StaggerWords({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-bottom">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function WipeLine({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  );
}

function EditorialStatement() {
  return (
    <section className="relative overflow-hidden bg-paper px-6 py-28 text-center md:px-10 md:py-40">
      <SectionEyebrow number="07" label="Our Approach" align="center" />
      <div className="mx-auto mt-8 max-w-4xl">
        <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl">
          <StaggerWords
            text="We don't just design rooms."
            className="text-ink/80"
          />
          <WipeLine className="mt-2 text-ink" delay={0.5}>
            We design how they feel.
          </WipeLine>
        </h2>
        <DrawLine tone="brass" className="mx-auto mt-10 w-24" />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   08 — DESIGN PHILOSOPHY
   ──────────────────────────────────────────────────────────────────────── */

const philosophy = [
  {
    number: "01",
    title: "Function First",
    text: "Spaces designed around how people actually live.",
  },
  {
    number: "02",
    title: "Made For You",
    text: "Custom solutions created around individual needs.",
  },
  {
    number: "03",
    title: "Built To Last",
    text: "Materials, finishes and craftsmanship selected for everyday life.",
  },
  {
    number: "04",
    title: "Cost Effective",
    text: "Considered choices that respect your budget without cutting corners.",
  },
];

// #ball a small circle that travels between points along a horizontal rail,
// synced to the active philosophy card. One dot per point; the rail lights
// up behind the ball as it passes.
function PhilosophyRail({ active, total }: { active: number; total: number }) {
  const leftPercent = ((active + 0.5) / total) * 100;
  return (
    <div className="relative mx-auto mt-10 hidden h-6 max-w-[1600px] md:block">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper/15" />
      <motion.div
        animate={{ width: `${leftPercent}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        className="absolute inset-y-0 left-0 top-1/2 h-px -translate-y-1/2 bg-ember/50"
      />
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                i <= active ? "bg-brass" : "bg-paper/20"
              }`}
            />
          </div>
        ))}
      </div>
      <motion.span
        animate={{ left: `${leftPercent}%` }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember shadow-[0_0_0_5px_rgba(242,106,33,0.15)]"
      />
    </div>
  );
}

function DesignPhilosophy() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % philosophy.length);
    }, 2600);
    return () => clearInterval(t);
  }, [reduceMotion]);

  return (
    <section className="relative bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <BlueprintGrid tone="light" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionEyebrow number="08" label="Design Philosophy" tone="light" />
        <PhilosophyRail active={active} total={philosophy.length} />
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-16 md:grid-cols-4">
          {philosophy.map((item, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                className="relative pt-8"
              >
                {/* base rule + animated ember rule that draws in when this card is active */}
                <span className="absolute left-0 top-0 h-px w-full bg-paper/15" />
                <motion.span
                  aria-hidden
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-px w-full origin-left bg-ember"
                />

                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.15,
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`inline-block font-display text-5xl font-bold origin-left transition-colors duration-500 ${
                    isActive ? "text-brass" : "text-paper/10"
                  }`}
                >
                  {item.number}
                </motion.span>

                <motion.h3
                  animate={{ x: isActive ? 6 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`mt-4 font-display text-2xl font-bold uppercase leading-tight transition-colors duration-500 ${
                    isActive ? "text-paper" : "text-paper/90"
                  }`}
                >
                  {item.title}
                </motion.h3>

                <p
                  className={`mt-4 max-w-xs text-sm transition-colors duration-500 ${
                    isActive ? "text-paper/90" : "text-paper/35"
                  }`}
                >
                  {item.text}
                </p>

                <motion.span
                  animate={{ width: isActive ? "3.5rem" : "2.5rem" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`mt-6 block h-px transition-colors duration-500 ${
                    isActive ? "bg-brass" : "bg-paper/20"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   09 — EXPERIENCE / STATISTICS
   ──────────────────────────────────────────────────────────────────────── */

function Statistics() {
  return (
    <section className="relative bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <SectionEyebrow number="09" label="Experience" tone="light" />
        <TextReveal
          as="h2"
          className="mt-6 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:text-5xl"
        >
          Built on experience.
        </TextReveal>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-paper/10 pt-16 md:grid-cols-4">
          {[
            { value: 20, suffix: "+", label: "Years of Practice" },
            { value: 2003, suffix: "", label: "Established" },
            { value: 5000, suffix: "+", label: "Projects Delivered" },
            { value: 1, suffix: "", label: "Integrated Process" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <p className="font-display text-4xl font-bold text-brass md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-paper/90">
                {stat.label}
              </p>
              <span className="mt-4 block h-px w-8 bg-paper/15" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   10 — TESTIMONIALS
   ──────────────────────────────────────────────────────────────────────── */

const testimonials = [
  "We are extremely happy with our modular kitchen and wardrobe design.",
  "The entire process was smooth, professional and well coordinated.",
  "One of the best services. Very happy with the work. 💯",
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-warm px-6 py-24 text-center md:px-10 md:py-32">
      <SectionEyebrow number="10" label="Client Voices" align="center" />
      <TextReveal
        as="h2"
        className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.1] text-ink sm:text-4xl md:text-5xl"
      >
        What our clients say.
      </TextReveal>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-8xl text-ink/10"
        >
          &ldquo;
        </span>
        <div className="relative min-h-[140px] md:min-h-[110px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="px-4 text-xl font-medium text-ink md:text-2xl"
            >
              {testimonials[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="font-display text-xs tabular-nums text-ink/80">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <div className="relative h-px w-24 bg-ink/10">
            <motion.div
              key={index}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute inset-y-0 left-0 h-px w-full origin-left bg-ember"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-ember" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   11 — PORTFOLIO PREVIEW
   ──────────────────────────────────────────────────────────────────────── */

const portfolioItems = [
  {
    title: "Living Room",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    title: "Modular Kitchen & Living",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Home Office",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Custom Wardrobe",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Master Bedroom",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

function PortfolioTile({
  item,
  index,
}: {
  item: (typeof portfolioItems)[number];
  index: number;
}) {
  const cursor = useCursor();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      onMouseEnter={() => cursor.set("View")}
      onMouseLeave={() => cursor.clear()}
      className={`group relative overflow-hidden ${item.span} ${item.aspect}`}
    >
      <FitImage
        src={item.image}
        alt={item.title}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-paper/90">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{item.category}</span>
        </div>
        <div className="flex items-end justify-between">
          <p className="max-w-[70%] font-display text-lg font-bold uppercase leading-tight text-paper">
            {item.title}
          </p>
          <span className="text-paper">→</span>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-3 border border-paper/0 transition-colors duration-500 group-hover:border-paper/40" />
    </motion.div>
  );
}

function PortfolioPreview() {
  return (
    <section className="relative bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow number="11" label="Portfolio" />
            <TextReveal
              as="h2"
              className="mt-6 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.1] text-ink sm:text-4xl md:text-5xl"
            >
              A glimpse of what we create.
            </TextReveal>
          </div>
          <MagneticButton href="/portfolio" variant="outline">
            View Full Portfolio →
          </MagneticButton>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {portfolioItems.map((item, i) => (
            <PortfolioTile key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   12 — FINAL CTA
   ──────────────────────────────────────────────────────────────────────── */

function FinalCTA() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink"
    >
      <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2200&auto=format&fit=crop"
          alt="Finished luxury interior installed by Glenn Interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/70" />
      <CornerMarks tone="light" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-24 text-center md:px-10">
        <TextReveal
          as="h2"
          className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] text-paper sm:text-6xl md:text-7xl"
        >
          Your space. Your way.
        </TextReveal>
        <FadeUp delay={0.2} className="mx-auto mt-6 max-w-md text-paper/90">
          Home interiors designed around your needs.
        </FadeUp>
        <DrawLine tone="brass" className="mx-auto mt-8 w-16" />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="/contact" variant="solid">
            Get a Free Consultation
          </MagneticButton>
          <MagneticButton href="/portfolio" variant="outline">
            Explore Portfolio →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
   ROOT EXPORT
   ──────────────────────────────────────────────────────────────────────── */

export function AboutExperience() {
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  return (
    <CursorContext.Provider
      value={{
        set: (label: string) => setCursorLabel(label),
        clear: () => setCursorLabel(null),
      }}
    >
      <ScrollProgressBar />
      <GrainOverlay />
      <CustomCursor label={cursorLabel} />

      <Hero />
      <OurStory />
      <WhatWeDesign />
      <ProcessSection />
      <Manufacturing />
      <Timeline />
      <EditorialStatement />
      <DesignPhilosophy />
      <Statistics />
      <Testimonials />
      <PortfolioPreview />
      <FinalCTA />
    </CursorContext.Provider>
  );
}