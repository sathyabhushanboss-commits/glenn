export const site = {
  name: "Glenn Interior",
  tagline: "Residential & Commercial Interiors",
  descriptor: "Design • Manufacture • Assemble • Install",
  since: 2003,
  phone: "090087 93906",
  phoneRaw: "09008793906",
  phoneHref: "tel:09008793906",
  whatsappNumber: "919008793906",
  whatsappMessage:
    "Hi Glenn Interior, I would like to discuss an interior design project.",
  address: {
    line1: "29th, 34th Cross Rd, Purnapragnya Layout,",
    line2: "Poornapragna Housing Society Layout,",
    line3: "Bengaluru, Karnataka 560061",
    full: "29th, 34th Cross Rd, Purnapragnya Layout, Poornapragna Housing Society Layout, Bengaluru, Karnataka 560061",
  },
  city: "Bengaluru",
  mapsEmbedQuery:
    "29th 34th Cross Rd Purnapragnya Layout Poornapragna Housing Society Layout Bengaluru Karnataka 560061",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "29th, 34th Cross Rd, Purnapragnya Layout, Poornapragna Housing Society Layout, Bengaluru, Karnataka 560061"
    ),
  url: "https://www.glenninterior.in",
} as const;

export function whatsappHref(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
