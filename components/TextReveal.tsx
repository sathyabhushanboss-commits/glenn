"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function TextReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const Comp = motion[as as "div"];
  return (
    <motion.div
      className="overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Comp
        className={className}
        variants={{
          hidden: { y: "110%", opacity: 0 },
          visible: { y: "0%", opacity: 1 },
        }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
