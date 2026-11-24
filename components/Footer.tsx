import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceAreas, site, whatsappHref } from "@/lib/site";
import { MagneticButton } from "./MagneticButton";

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-28 pt-20 text-paper md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${site.name} home`} className="inline-block">
              <Image
                src="/logo-light.png"
                alt={site.name}
                width={1384}
                height={627}
                className="h-20 w-auto sm:h-24"
              />
            </Link>
            <p className="mt-4 text-sm uppercase tracking-[0.15em] text-paper/90">
              Residential Interiors
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.15em] text-brass">
              Design • Manufacture • Install
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/90">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/90 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/90">
              Contact
            </h3>
            <p className="mt-5 text-sm text-paper/90">{site.city}, Karnataka</p>
            <a
              href={site.phoneHref}
              className="mt-1 block text-sm text-paper/90 hover:text-paper"
            >
              {site.phone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-paper/90 hover:text-paper"
            >
              WhatsApp Us
            </a>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-paper/90">
              Start a Project
            </p>
            <div className="mt-3">
              <MagneticButton href="/contact" variant="outline">
                Get a Consultation
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-paper/10 pt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/90">
            Interior Designers Across Bengaluru
          </h3>
          <p className="mt-3 max-w-3xl text-sm text-paper/90">
            {site.name} designs, manufactures and installs home interiors, modular
            kitchens and wardrobes across Bengaluru, including:
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2 text-xs text-paper/90">
            {serviceAreas.map((area, i) => (
              <li key={area}>
                {area}
                {i < serviceAreas.length - 1 && (
                  <span aria-hidden="true" className="ml-2 text-paper/20">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p>{site.address.full}</p>
        </div>

        <p className="mt-6 text-center text-xs text-paper/90 sm:text-left">
          Designed, developed and maintained by{" "}
          <span className="font-semibold text-brass">Sathya Enterprises</span>
        </p>
      </div>
    </footer>
  );
}
