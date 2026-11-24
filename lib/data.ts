// Centralised content so imagery and copy can be swapped without touching components.
// Replace the `image` URLs below with real project photography whenever it's ready —
// every component reads from this file only.

export type PortfolioCategory =
  | "Residential"
  | "Kitchen"
  | "Living Room"
  | "Bedroom"
  | "Wardrobe"
  | "Villa"
  | "Office"
  | "Custom";

export type PortfolioProject = {
  id: string;
  title: string;
  category: PortfolioCategory[];
  location: string;
  image: string;
  size: "portrait" | "landscape" | "square" | "wide";
  description: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "contemporary-bengaluru-residence",
    title: "Contemporary Bengaluru Residence",
    category: ["Residential", "Living Room"],
    location: "Jayanagar, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
    description:
      "A full-home interior for a family of four, built around warm oak tones, quiet storage and a living room designed for slow evenings.",
  },
  {
    id: "warm-minimal-kitchen",
    title: "Warm Minimal Kitchen",
    category: ["Residential", "Kitchen"],
    location: "Indiranagar, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "An L-shaped modular kitchen in matte laminate with a breakfast island, engineered for a family that cooks together.",
  },
  {
    id: "modern-urban-apartment",
    title: "Modern Urban Apartment",
    category: ["Residential"],
    location: "HSR Layout, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A 3BHK apartment reworked with an open living-dining flow, custom joinery and a restrained material palette.",
  },
  {
    id: "luxe-master-bedroom",
    title: "Luxe Master Bedroom",
    category: ["Residential", "Bedroom"],
    location: "Whitefield, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "A master suite with an upholstered bed-back panel, cove lighting and a walk-in wardrobe finished in walnut veneer.",
  },
  {
    id: "contemporary-villa",
    title: "Contemporary Villa",
    category: ["Residential", "Villa"],
    location: "Sarjapur Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
    description:
      "A four-bedroom villa designed end-to-end, from the entrance foyer to the terrace, in a single cohesive material language.",
  },
  {
    id: "premium-family-residence",
    title: "Premium Family Residence",
    category: ["Residential", "Living Room"],
    location: "Koramangala, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A generous living and dining layout with custom seating, a feature wall in fluted panelling and layered lighting.",
  },
  {
    id: "minimalist-home",
    title: "Minimalist Home",
    category: ["Residential"],
    location: "JP Nagar, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    size: "square",
    description:
      "A pared-back 2BHK where every surface, handle and edge is carefully considered, with nothing added just to fill space.",
  },
  {
    id: "luxury-wardrobe-project",
    title: "Luxury Wardrobe Project",
    category: ["Residential", "Wardrobe"],
    location: "Malleshwaram, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "A walk-in wardrobe with soft-close shutters, internal lighting and a dedicated vanity nook.",
  },
  {
    id: "modern-living-room",
    title: "Modern Living Room",
    category: ["Residential", "Living Room"],
    location: "Yelahanka, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A double-height living room anchored by a full-wall TV unit in fluted wood and stone-effect laminate.",
  },
  {
    id: "corporate-workspace",
    title: "Corporate Workspace",
    category: ["Office"],
    location: "Electronic City, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
    description:
      "A 12,000 sq. ft. corporate floor combining collaborative zones, quiet cabins and a staff cafeteria.",
  },
  {
    id: "contemporary-duplex",
    title: "Contemporary Duplex",
    category: ["Residential", "Villa"],
    location: "Hebbal, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
    description:
      "A duplex interior linking two floors with a shared material language and a statement staircase.",
  },
  {
    id: "modern-kids-room",
    title: "Modern Kids' Room",
    category: ["Residential", "Bedroom"],
    location: "Bellandur, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "A room built to grow with your child, with a study zone, loft storage and a bed with hidden drawers.",
  },
  {
    id: "luxury-kitchen",
    title: "Luxury Kitchen",
    category: ["Residential", "Kitchen"],
    location: "Rajajinagar, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A parallel kitchen with an island, quartz worktops and integrated appliances finished in a single continuous run.",
  },
  {
    id: "complete-home-transformation",
    title: "Complete Home Transformation",
    category: ["Residential", "Custom"],
    location: "Basavanagudi, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    size: "square",
    description:
      "A full renovation of a 20-year-old apartment: new layout, new services and new interiors at the same address.",
  },
];

export const portfolioFilters: ("ALL" | PortfolioCategory)[] = [
  "ALL",
  "Residential",
  "Kitchen",
  "Living Room",
  "Bedroom",
  "Wardrobe",
  "Villa",
  "Office",
  "Custom",
];

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
  /** 10 gallery photos shown under the service on /services. */
  gallery: string[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;

export const services: ServiceItem[] = [
  {
    slug: "full-home-interiors",
    title: "Full Home Interiors",
    short: "End-to-end interiors for apartments, villas and independent homes.",
    description:
      "From the first floor plan to the last handle fitted, we design, manufacture and install every element of your home as one seamless project, with no juggling of separate vendors.",
    benefits: [
      "Single point of accountability",
      "Consistent material language across rooms",
      "Predictable timelines and costs",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "1600210492486-724fe5c67fb0",
      "1600210492493-0946911123ea",
      "1600566753086-00f18fb6b3ea",
      "1600573472550-8090b5e0745e",
      "1600607687920-4e2a09cf159d",
      "1502005229762-cf1b2da7c5d6",
      "1617806118233-18e1de247200",
      "1560185007-cde436f6a4d0",
      "1560448204-e02f11c3d0e2",
      "1554995207-c18c203602cb",
    ].map(unsplash),
  },
  {
    slug: "modular-kitchen-living",
    title: "Modular Kitchen & Living Room",
    short: "Modular kitchens in every layout, plus TV units, feature walls and living-room storage.",
    description:
      "The two rooms your family uses most, designed together. Kitchens are manufactured in-house, so shutters, carcass and hardware match perfectly, and living rooms are built to handle everyday life in style.",
    benefits: [
      "In-house manufacturing",
      "Soft-close hardware",
      "Custom layouts",
      "Integrated storage",
      "Considered lighting",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "1600585152220-90363fe7e115",
      "1556912173-3bb406ef7e77",
      "1565538810643-b5bdb714032a",
      "1556909212-d5b604d0c90d",
      "1600489000022-c2086d79f9d4",
      "1613545325278-f24b0cae1224",
      "1600210491892-03d54c0aaf87",
      "1600585154084-4e5fe7c39198",
      "1618219740975-d40978bb7378",
      "1618221195710-dd6b41faaea6",
    ].map(unsplash),
  },
  {
    slug: "bedroom-home-office",
    title: "Bedroom & Home Office",
    short: "Master, kids' and guest bedrooms, wardrobes, and a dedicated space to work from home.",
    description:
      "Restful, storage-rich bedrooms designed around the people who use them, with a quiet, well-organised home office built in wherever you need one.",
    benefits: [
      "Custom bed-back panels",
      "Made-to-measure wardrobes",
      "Ergonomic study and work desks",
      "Ambient lighting",
    ],
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "1505693416388-ac5ce068fe85",
      "1617098900591-3f90928e8c54",
      "1617104678098-de229db51175",
      "1616594039964-ae9021a400a0",
      "1631049307264-da0ec9d70304",
      "1540518614846-7eded433c457",
      "1618221118493-9cfa1a1c00da",
      "1586105251261-72a756497a11",
      "1497366811353-6870744d04b2",
      "1497215728101-856f4ea42174",
    ].map(unsplash),
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    short: "One team from design to handover. You simply move in when it's ready.",
    description:
      "We take the whole project off your hands: design, manufacturing, installation and final finishing, delivered ready to live in.",
    benefits: ["Design to handover", "One point of contact", "Ready-to-move-in finish"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "1613490493576-7fde63acd811",
      "1613977257363-707ba9348227",
      "1600585154340-be6161a56a0c",
      "1600566753376-12c8ab7fb75b",
      "1600585153490-76fb20a32601",
      "1600047509807-ba8f99d2cdde",
      "1600585154526-990dced4db0d",
      "1600607688969-a5bfcd646154",
      "1600047509358-9dc75507daeb",
      "1600566753190-17f0baa2a6c3",
    ].map(unsplash),
  },
];

export const processSteps = [
  { number: "01", title: "Consultation", description: "We understand your space, your needs and your budget." },
  { number: "02", title: "Site Measurement", description: "Precise on-site measurement to remove guesswork from the design." },
  { number: "03", title: "Design", description: "Layouts, materials and finishes developed and finalised with you." },
  { number: "04", title: "Material Selection", description: "You choose from curated, quality-checked material options." },
  { number: "05", title: "Manufacturing", description: "Furniture and fittings built in-house to exact specification." },
  { number: "06", title: "Assembly", description: "Every piece pre-fitted and quality-checked before it leaves our facility." },
  { number: "07", title: "Installation", description: "Careful, coordinated on-site installation by our own teams." },
  { number: "08", title: "Final Handover", description: "A snag-free final walkthrough before we hand the keys back to you." },
] as const;

export const testimonials = [
  {
    id: "t1",
    quote:
      "We are extremely happy with our modular kitchen and wardrobe design.",
  },
  {
    id: "t2",
    quote:
      "The entire process was smooth, professional and well coordinated.",
  },
  {
    id: "t3",
    quote: "One of the best services. Very happy with the work. 💯",
  },
] as const;

export const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "In-House Manufacturing" },
  { value: 2003, suffix: "", label: "Established In" },
] as const;
