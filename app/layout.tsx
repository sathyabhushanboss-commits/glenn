import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";
import { LeadPopup } from "@/components/LeadPopup";
import { site } from "@/lib/site";
import {
  baseKeywords,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Glenn Interior | Residential & Commercial Interior Designers in Bangalore",
    template: `%s | ${site.name}`,
  },
  description:
    "Glenn Interior designs, manufactures and installs residential and commercial interiors in Bengaluru. In-house manufacturing, custom design, since 2003.",
  keywords: baseKeywords,
  authors: [{ name: site.name }],
  openGraph: {
    title: "Glenn Interior — Residential & Commercial Interiors",
    description:
      "Custom interior design, in-house manufacturing and professional installation in Bengaluru.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glenn Interior — Residential & Commercial Interiors",
    description:
      "Custom interior design, in-house manufacturing and professional installation in Bengaluru.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [localBusinessJsonLd(), organizationJsonLd(), websiteJsonLd()];

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} font-body`}>
        {jsonLd.map((entry, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
          />
        ))}

        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomCTA />
        <LeadPopup />
      </body>
    </html>
  );
}
