"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm";

const SESSION_KEY = "glenn-interior-lead-popup-shown";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      // sessionStorage unavailable — fall back to showing once per page load only
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // ignore storage failures
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Get a free consultation"
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.button
            aria-label="Close"
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-paper p-8 md:p-10"
          >
            <button
              aria-label="Close popup"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 text-2xl leading-none text-ink hover:text-ink"
            >
              ×
            </button>

            <Image
              src="/logo-dark.png"
              alt="Glenn Interior"
              width={1384}
              height={627}
              className="h-14 w-auto"
            />

            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.25em] text-ember">
              Let&apos;s Talk
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-ink">
              Let&apos;s design your dream space.
            </h3>
            <p className="mt-3 text-ink">
              Share your details and our team will get in touch with you.
            </p>

            <div className="mt-8">
              <ContactForm compact />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
