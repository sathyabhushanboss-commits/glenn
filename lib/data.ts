// Centralised content so imagery and copy can be swapped without touching components.
// Replace the `image` URLs below with real project photography whenever it's ready —
// every component reads from this file only.

export type PortfolioCategory =
  | "Residential"
  | "Commercial"
  | "Kitchen"
  | "Living Room"
  | "Bedroom"
  | "Wardrobe"
  | "Villa"
  | "Office"
  | "Retail"
  | "Restaurant"
  | "Hospitality"
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
      "A master suite with a upholstered bed-back panel, cove lighting and a walk-in wardrobe finished in walnut veneer.",
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
    id: "modern-executive-office",
    title: "Modern Executive Office",
    category: ["Commercial", "Office"],
    location: "Outer Ring Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "An executive floor with private cabins, a boardroom and open workstations built for a fast-growing technology team.",
  },
  {
    id: "boutique-retail-space",
    title: "Boutique Retail Space",
    category: ["Commercial", "Retail"],
    location: "Church Street, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "A fashion boutique fit-out with modular display fixtures, a fitting suite and a facade designed to draw footfall.",
  },
  {
    id: "contemporary-showroom",
    title: "Contemporary Showroom",
    category: ["Commercial", "Retail"],
    location: "Bannerghatta Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1631048500138-f4a01c37e17f?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A product showroom built around flexible display walls, brand signage and a customer lounge.",
  },
  {
    id: "modern-restaurant",
    title: "Modern Restaurant",
    category: ["Commercial", "Restaurant"],
    location: "Indiranagar, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
    description:
      "A 60-cover restaurant with a show kitchen, custom banquette seating and acoustic ceiling treatment.",
  },
  {
    id: "premium-hospitality-space",
    title: "Premium Hospitality Space",
    category: ["Commercial", "Hospitality"],
    location: "MG Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A boutique hotel lobby and reception designed to set the tone for the guest experience that follows.",
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
      "A pared-back 2BHK where every surface, handle and edge was considered, and nothing was left to fill space.",
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
    category: ["Commercial", "Office"],
    location: "Electronic City, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    size: "wide",
    description:
      "A 12,000 sq. ft. corporate floor combining collaborative zones, quiet cabins and a staff cafeteria.",
  },
  {
    id: "premium-commercial-interior",
    title: "Premium Commercial Interior",
    category: ["Commercial"],
    location: "Domlur, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
    size: "landscape",
    description:
      "A meeting-room-led fit-out for a consulting firm, finished in brushed brass and dark walnut.",
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
    title: "Modern Kids Room",
    category: ["Residential", "Bedroom"],
    location: "Bellandur, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "A room built to grow with the child — a study zone, loft storage and a bed with hidden drawers.",
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
      "A full renovation of a 20-year-old apartment — new layout, new services, new interiors, same address.",
  },
  {
    id: "salon-interior-project",
    title: "Contemporary Salon Interior",
    category: ["Commercial", "Retail"],
    location: "Koramangala, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop",
    size: "portrait",
    description:
      "A salon and spa fit-out with a calm material palette, private treatment rooms and a considered reception sequence.",
  },
];

export const portfolioFilters: ("ALL" | PortfolioCategory)[] = [
  "ALL",
  "Residential",
  "Commercial",
  "Kitchen",
  "Living Room",
  "Bedroom",
  "Wardrobe",
  "Villa",
  "Office",
  "Retail",
  "Restaurant",
  "Hospitality",
  "Custom",
];

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
};

export const residentialServices: ServiceItem[] = [
  {
    slug: "complete-home-interiors",
    title: "Complete Home Interiors",
    short: "End-to-end design for apartments, villas and independent homes.",
    description:
      "From the first floor plan to the last handle fitted, we design, manufacture and install every element of your home as one continuous project — not a series of separate vendors.",
    benefits: [
      "Single point of accountability",
      "Consistent material language across rooms",
      "Predictable timelines and costs",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "apartment-interiors",
    title: "Apartment Interiors",
    short: "1BHK, 2BHK, 3BHK, 4BHK and premium apartments.",
    description:
      "Apartment layouts come with fixed constraints — we work with them, not against them, to make every square foot count.",
    benefits: ["Space-efficient layouts", "Storage-first planning", "Fast turnaround"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "villa-interiors",
    title: "Villa Interiors",
    short: "Luxury villas, duplexes and independent residences.",
    description:
      "Larger homes need a stronger design thread running through them. We build that thread from the entrance to the last room.",
    benefits: ["Whole-home design coherence", "Premium material sourcing", "Dedicated project lead"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    short: "L-shaped, U-shaped, straight, parallel, island and open kitchens.",
    description:
      "Manufactured in-house, so the shutters, carcass and hardware are matched from day one and built to fit your kitchen exactly.",
    benefits: ["In-house manufacturing", "Soft-close hardware", "Custom layouts"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    short: "Sliding, hinged, walk-in, loft storage and custom wardrobes.",
    description:
      "Wardrobes designed around what you actually own, with internal organisers built to match.",
    benefits: ["Made-to-measure fit", "Internal organisers", "Soft-close shutters"],
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    short: "TV units, entertainment walls, display units, feature walls and storage.",
    description:
      "The room your household spends the most time in, designed to hold up to daily life.",
    benefits: ["Durable finishes", "Integrated storage", "Considered lighting"],
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom Interiors",
    short: "Master, kids and guest bedrooms, bed-back panels, side tables and storage.",
    description:
      "Restful, storage-rich bedrooms designed room by room, person by person.",
    benefits: ["Custom bed-back panels", "Ambient lighting", "Room-specific storage"],
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "dining-interiors",
    title: "Dining Interiors",
    short: "Dining units, crockery units and display cabinets.",
    description:
      "Dining spaces built to host, with storage that keeps the table itself clear.",
    benefits: ["Crockery and display storage", "Space-matched dining units"],
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "pooja-room-interiors",
    title: "Pooja Room Interiors",
    short: "Traditional and contemporary customised pooja spaces.",
    description:
      "A dedicated pooja space designed with the right materials, orientation and detailing.",
    benefits: ["Traditional and modern styles", "Considered lighting and finishes"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "kids-room-interiors",
    title: "Kids Room Interiors",
    short: "Beds, study areas, storage and wardrobes.",
    description:
      "Rooms designed to be safe today and adaptable as your child grows.",
    benefits: ["Growth-adaptable furniture", "Study and storage zones"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "home-office-interiors",
    title: "Home Office Interiors",
    short: "Workstations, study units, bookshelves and storage.",
    description:
      "A proper workspace at home — not a desk pushed into a corner.",
    benefits: ["Dedicated work zones", "Cable-managed workstations"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "bathroom-interiors",
    title: "Bathroom Interiors",
    short: "Vanity units, mirrors and storage.",
    description:
      "Vanity and storage solutions built to handle daily moisture without compromising on finish.",
    benefits: ["Moisture-resistant materials", "Custom vanity units"],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "false-ceiling-lighting",
    title: "False Ceiling & Lighting",
    short: "Cove lighting, profile lighting, decorative ceilings and ambient lighting.",
    description:
      "Lighting layered in three tiers — ambient, task and accent — designed alongside the ceiling, not after it.",
    benefits: ["Layered lighting design", "Decorative ceiling treatments"],
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    short: "Beds, sofas, tables, TV units, storage and custom pieces.",
    description:
      "Furniture manufactured in-house to match your interior exactly — no compromise pieces bought off a showroom floor.",
    benefits: ["In-house manufacturing", "Exact-fit furniture"],
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "home-renovation",
    title: "Home Renovation",
    short: "Complete or partial renovation and transformation.",
    description:
      "Whether it's one room or the whole home, we plan renovation work to minimise disruption to your daily life.",
    benefits: ["Phased execution options", "Minimal-disruption planning"],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  },
];

export const commercialServices: ServiceItem[] = [
  {
    slug: "office-interiors",
    title: "Office Interiors",
    short: "Corporate offices, startup offices, executive cabins, meeting rooms, reception and workstations.",
    description:
      "Workspaces designed around how your team actually works, from the reception to the last cabin.",
    benefits: ["Workflow-based planning", "Fast execution timelines"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "corporate-interiors",
    title: "Corporate Interiors",
    short: "Workstations, conference rooms, executive spaces and collaboration zones.",
    description:
      "Interiors that hold up to daily corporate use while still making an impression on visiting clients.",
    benefits: ["Durable, low-maintenance finishes", "Brand-aligned detailing"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "retail-interiors",
    title: "Retail Interiors",
    short: "Shops, boutiques, fashion stores, electronics stores and lifestyle stores.",
    description:
      "Retail fit-outs built to move footfall through the store and hold up to daily handling.",
    benefits: ["Modular display systems", "Fast, low-disruption fit-out"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "showroom-interiors",
    title: "Showroom Interiors",
    short: "Product displays, counters, storage, customer areas and brand experience.",
    description:
      "Showrooms designed to let the product lead, with the interior working quietly around it.",
    benefits: ["Flexible display systems", "Brand-led material choices"],
    image:
      "https://images.unsplash.com/photo-1631048500138-f4a01c37e17f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "restaurant-cafe-interiors",
    title: "Restaurant & Cafe Interiors",
    short: "Restaurants, cafes, bakeries, dining spaces and service counters.",
    description:
      "Interiors built for turnover, service flow and comfort in equal measure.",
    benefits: ["Service-flow planning", "Acoustic and material comfort"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "hotel-hospitality-interiors",
    title: "Hotel & Hospitality Interiors",
    short: "Hotel rooms, lobby, reception, guest areas and restaurants.",
    description:
      "Hospitality interiors designed to set a tone from the first minute and hold it through the stay.",
    benefits: ["Guest-experience-led design", "Durable hospitality-grade finishes"],
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "salon-spa-interiors",
    title: "Salon & Spa Interiors",
    short: "Reception, styling areas, treatment rooms, storage and waiting areas.",
    description:
      "Calm, considered interiors built around client comfort and staff workflow.",
    benefits: ["Moisture-resistant materials", "Private treatment zones"],
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "clinic-healthcare-interiors",
    title: "Clinic & Healthcare Interiors",
    short: "Clinics, dental clinics, consultation rooms, reception and waiting areas.",
    description:
      "Clean, calm and easy-to-maintain interiors that put patients at ease.",
    benefits: ["Hygienic, low-maintenance surfaces", "Calm, reassuring material palette"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "educational-interiors",
    title: "Educational Interiors",
    short: "Schools, training centres, coaching centres, classrooms and libraries.",
    description:
      "Durable, focused learning spaces designed for daily heavy use.",
    benefits: ["Impact-resistant materials", "Focus-oriented layouts"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "studio-interiors",
    title: "Studio Interiors",
    short: "Photography studios, creative studios, content studios and production spaces.",
    description:
      "Flexible, controllable environments built for creative production work.",
    benefits: ["Acoustic and lighting control", "Flexible modular layouts"],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "co-working-spaces",
    title: "Co-working Spaces",
    short: "Workstations, cabins, meeting rooms, reception and common spaces.",
    description:
      "Shared workspaces designed to feel considered for every member, not just the operator.",
    benefits: ["Density-efficient planning", "Shared-amenity design"],
    image:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "commercial-renovation",
    title: "Commercial Renovation",
    short: "Complete commercial transformation and renovation.",
    description:
      "Renovation work planned to keep your business running while the space is rebuilt around it.",
    benefits: ["Phased, low-downtime execution", "Full commercial transformation"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
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
  { number: "08", title: "Final Handover", description: "A final walkthrough, snag-free, before the keys are handed back to you." },
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
      "The entire process was smooth, professional, and well-coordinated.",
  },
  {
    id: "t3",
    quote: "One of the best service 💯 happy with the service.",
  },
] as const;

export const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "In-House Manufacturing" },
  { value: 2, suffix: "", label: "Segments — Residential + Commercial" },
] as const;
