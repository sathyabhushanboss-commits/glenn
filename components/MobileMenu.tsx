"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { navLinks, site, whatsappHref } from "@/lib/site";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-6 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-bold uppercase tracking-[0.15em] text-paper">
          {site.name}
        </span>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="rounded-full border border-paper/20 p-2 text-paper"
        >
          <X size={20} />
        </button>
      </div>

      <ul className="mt-16 flex flex-1 flex-col justify-center gap-2">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="block border-b border-paper/10 py-4 font-display text-4xl font-bold uppercase text-paper"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <a
          href={site.phoneHref}
          className="text-center text-sm uppercase tracking-[0.15em] text-paper/70"
        >
          Call {site.phone}
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="rounded-full bg-ember py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-paper"
        >
          Get Consultation
        </a>
      </motion.div>
    </motion.div>
  );
}
