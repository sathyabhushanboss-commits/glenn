import type { Metadata } from "next";
import { site } from "./site";

const defaultOgImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage ?? defaultOgImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage ?? defaultOgImage],
    },
  };
}

export const baseKeywords = [
  "Interior Designers in Bangalore",
  "Interior Designers in Bengaluru",
  "Residential Interior Designers Bangalore",
  "Commercial Interior Designers Bangalore",
  "Home Interior Designers Bangalore",
  "Villa Interior Designers Bangalore",
  "Apartment Interior Designers Bangalore",
  "Modular Kitchen Designers Bangalore",
  "Wardrobe Designers Bangalore",
  "Office Interior Designers Bangalore",
  "Commercial Interior Designers Bengaluru",
  "Retail Interior Designers Bangalore",
  "Restaurant Interior Designers Bangalore",
  "Hotel Interior Designers Bangalore",
  "Custom Interior Designers Bangalore",
  "Turnkey Interior Designers Bangalore",
];

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    image: defaultOgImage,
    telephone: site.phoneRaw,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "29th, 34th Cross Rd, Purnapragnya Layout, Poornapragna Housing Society Layout",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560061",
      addressCountry: "IN",
    },
    url: site.url,
    areaServed: "Bengaluru",
    foundingDate: "2003",
    description:
      "Residential and commercial interior design, in-house manufacturing, assembly and installation in Bengaluru since 2003.",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.ico`,
    foundingDate: "2003",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneRaw,
      contactType: "customer service",
      areaServed: "IN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
