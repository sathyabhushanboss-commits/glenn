"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function detectDesktopPointer() {
  if (typeof window === "undefined") return false;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return isFinePointer && !reducedMotion;
}

export function CustomCursor() {
  const [enabled] = useState(detectDesktopPointer);
  const [variant, setVariant] = useState<"default" | "button" | "view" | "link">("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-none-desktop");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='view']")) setVariant("view");
      else if (target.closest("[data-cursor='button']")) setVariant("button");
      else if (target.closest("a, button")) setVariant("link");
      else setVariant("default");
    }

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const sizes: Record<string, number> = { default: 10, button: 56, view: 84, link: 20 };
  const size = sizes[variant];

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ width: size, height: size, backgroundColor: "#FFFFFF" }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {variant === "view" && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink"
          >
            View
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
