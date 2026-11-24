"use client";

import { motion } from "framer-motion";
import { FitImage } from "./FitImage";

export function ImageReveal({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(8% 8% 8% 8%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <FitImage src={src} alt={alt} sizes={sizes} priority={priority} />
      </motion.div>
    </motion.div>
  );
}
