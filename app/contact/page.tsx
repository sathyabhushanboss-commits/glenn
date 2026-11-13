import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TextReveal, FadeUp } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { buildMetadata, baseKeywords, breadcrumbJsonLd } from "@/lib/seo";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Glenn Interior | Interior Designers in Bangalore",
  description:
    "Get in touch with Glenn Interior for residential interior design in Bengaluru. Call, WhatsApp, or request a free consultation.",
  path: "/contact",
  keywords: baseKeywords,
});

const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.full
)}&output=embed`;

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="bg-ink px-6 pb-20 pt-40 text-paper md:px-10 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brass">
            Contact
          </p>
          <TextReveal
            as="h1"
            className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] sm:text-6xl"
          >
            Let&apos;s build your space.
          </TextReveal>
          <FadeUp delay={0.15} className="mt-6 max-w-xl text-lg text-paper/70">
            {site.name} — {site.tagline}. Tell us about your project and
            we&apos;ll get back to you shortly.
          </FadeUp>

          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticButton href={site.phoneHref} variant="solid">
              <span className="inline-flex items-center gap-2">
                <Phone size={14} /> Call Us
              </span>
            </MagneticButton>
            <MagneticButton href={whatsappHref()} variant="outline">
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={14} /> WhatsApp
              </span>
            </MagneticButton>
            <MagneticButton href={site.mapsDirectionsUrl} variant="outline">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> Get Directions
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
              Request a Consultation
            </p>
            <h2 className="font-display text-3xl font-bold uppercase text-ink sm:text-4xl">
              Get in touch
            </h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
              Visit Us
            </p>
            <h2 className="font-display text-2xl font-bold uppercase text-ink sm:text-3xl">
              {site.name}
            </h2>
            <address className="mt-4 not-italic text-ink/70">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <a
              href={site.phoneHref}
              className="mt-4 block text-ink/70 hover:text-ink"
            >
              {site.phone}
            </a>

            <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-ink/10">
              <iframe
                title="Glenn Interior location on Google Maps"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6">
              <MagneticButton href={site.mapsDirectionsUrl} variant="ghost">
                Get Directions
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
