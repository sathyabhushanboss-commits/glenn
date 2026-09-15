"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Glenn Interior on WhatsApp"
      data-cursor="button"
      className="fixed bottom-24 right-5 z-40 md:bottom-8 md:right-8"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-paper shadow-lg shadow-ink/20">
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <MessageCircle size={26} className="relative" fill="currentColor" />
      </span>
    </a>
  );
}
