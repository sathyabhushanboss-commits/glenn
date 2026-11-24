"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-paper/10 bg-ink/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            data-cursor="link"
            className="block"
          >
            <Image
            src="/logo-light.png"
            alt={site.name}
            width={1384}
            height={627}
            priority
            className="h-10 w-auto md:h-12"
          />
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="link"
                  className={`relative text-xs font-medium uppercase tracking-[0.15em] text-paper/90 transition-colors hover:text-paper ${
                    pathname === link.href ? "text-paper" : ""
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-ember" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contact"
              data-cursor="button"
              className="rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-[#d95c17]"
            >
              Get a Consultation
            </Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className="h-px w-7 bg-paper" />
            <span className="h-px w-5 self-end bg-paper" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
