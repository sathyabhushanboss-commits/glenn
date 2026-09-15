import Link from "next/link";
import { navLinks, site, whatsappHref } from "@/lib/site";
import { MagneticButton } from "./MagneticButton";

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-28 pt-20 text-paper md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-[0.05em] sm:text-4xl">
              {site.name}
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.15em] text-paper/50">
              Residential + Commercial Interiors
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.15em] text-brass">
              Design • Manufacture • Install
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/80 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/50">
              Contact
            </h3>
            <p className="mt-5 text-sm text-paper/80">{site.city}, Karnataka</p>
            <a
              href={site.phoneHref}
              className="mt-1 block text-sm text-paper/80 hover:text-paper"
            >
              {site.phone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-paper/80 hover:text-paper"
            >
              WhatsApp Us
            </a>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-paper/50">
              Start a Project
            </p>
            <div className="mt-3">
              <MagneticButton href="/contact" variant="outline">
                Get Consultation
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p>{site.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
