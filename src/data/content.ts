/**
 * GLOSS LABS — Central Content File
 *
 * Edit this file to update ALL website content.
 * Services, gallery, testimonials, stats, process steps, and site info.
 * After editing, push to GitHub and the site auto-deploys.
 */

// ─── SITE INFO ───────────────────────────────────────────────────────────────

export const siteInfo = {
  name: "Gloss Labs",
  tagline: "It's Not Clean Until It's Glossed",
  phone: "(609) 731-8641",
  phoneLink: "+16097318641",
  email: "glosslabsnj@gmail.com",
  instagram: "@glosslabsnj",
  instagramUrl: "https://instagram.com/glosslabsnj",
  address: {
    street: "18 Yorkshire Road",
    city: "Hamilton",
    state: "NJ",
    zip: "08610",
    full: "18 Yorkshire Road, Hamilton, NJ 08610",
  },
  website: "https://glosslabsauto.com",
  hours: {
    weekdays: "Mon - Sat: 8:00 AM - 6:00 PM",
    sunday: "Sunday: Closed",
  },
  mobileService: "All of New Jersey. $50 service fee beyond 25 miles.",
  squareWidgetId: "dvhqf1pkf4hbig/MLX0AATCTSD8M",
};

// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface Service {
  title: string;
  price: string;
  priceSuv?: string;
  priceTruck?: string;
  description: string;
  shortDescription: string;
  icon: "droplets" | "sparkles" | "star" | "shield" | "gem" | "truck";
  duration: string;
  includes: string[];
  category: "wash" | "interior" | "full" | "protection" | "correction" | "fleet";
}

export const services: Service[] = [
  {
    title: "Express Wash",
    price: "$75",
    priceSuv: "$85",
    priceTruck: "$100",
    description:
      "Quick exterior hand wash and dry. Includes wheel cleaning, tire dressing, and window cleaning. We come to you.",
    shortDescription:
      "Hand wash, wheel cleaning, tire dressing, and window cleaning. Quick turnaround, stunning results.",
    icon: "droplets",
    duration: "45 min",
    category: "wash",
    includes: [
      "pH-balanced hand wash",
      "Wheel cleaning & tire dressing",
      "Window cleaning (exterior)",
      "Door jamb wipe-down",
      "Quick dry & inspection",
    ],
  },
  {
    title: "Interior Detail",
    price: "$175",
    priceSuv: "$200",
    priceTruck: "$250",
    description:
      "Deep interior cleaning including vacuum, steam clean, leather/fabric conditioning, dashboard and console detailing.",
    shortDescription:
      "Deep vacuum, steam clean, leather conditioning, dashboard detail, and premium air freshener.",
    icon: "sparkles",
    duration: "2 hours",
    category: "interior",
    includes: [
      "Full vacuum (seats, carpet, trunk)",
      "Steam clean all surfaces",
      "Leather/fabric conditioning",
      "Dashboard & console detail",
      "Air vent deep clean",
      "Interior glass cleaning",
      "Premium air freshener",
    ],
  },
  {
    title: "Full Detail",
    price: "$275",
    priceSuv: "$350",
    priceTruck: "$425",
    description:
      "Complete interior and exterior detail. Includes everything in Express Wash and Interior Detail plus clay bar, polish, and wax/sealant.",
    shortDescription:
      "Complete interior and exterior transformation. Clay bar, polish, wax, and sealant included.",
    icon: "star",
    duration: "3-4 hours",
    category: "full",
    includes: [
      "Everything in Express Wash",
      "Everything in Interior Detail",
      "Clay bar decontamination",
      "Single-stage machine polish",
      "Carnauba wax or sealant",
      "Engine bay cleaning",
      "Exhaust tip polish",
    ],
  },
  {
    title: "Ceramic Coating",
    price: "$499",
    priceSuv: "$699",
    priceTruck: "$999",
    description:
      "Professional-grade ceramic coating for long-lasting paint protection. Includes full decontamination, polish, and ceramic application with 2+ year durability.",
    shortDescription:
      "Professional-grade ceramic protection with 2+ year durability. Hydrophobic, UV-resistant finish.",
    icon: "shield",
    duration: "Full day",
    category: "protection",
    includes: [
      "Full paint decontamination",
      "Clay bar treatment",
      "Single-stage machine polish",
      "IPA wipe-down",
      "Ceramic coating application",
      "24-hour cure time",
      "2+ year durability guarantee",
    ],
  },
  {
    title: "Paint Correction",
    price: "$350+",
    description:
      "Multi-stage machine polish to remove swirl marks, scratches, and oxidation. Restores paint to a mirror finish. Recommended before ceramic coating.",
    shortDescription:
      "Multi-stage machine polish to remove swirl marks, scratches, and oxidation. Mirror finish guaranteed.",
    icon: "gem",
    duration: "5-6 hours",
    category: "correction",
    includes: [
      "Paint depth measurement",
      "Multi-stage compound cutting",
      "Finishing polish",
      "LED light inspection",
      "IPA wipe-down",
      "Sealant or wax protection",
    ],
  },
  {
    title: "Fleet Services",
    price: "$50+",
    description:
      "Monthly fleet maintenance wash for businesses. We come to your lot on a scheduled day. Volume pricing for 3+ vehicles.",
    shortDescription:
      "Monthly fleet maintenance for businesses. We come to your lot. Volume pricing for 3+ vehicles.",
    icon: "truck",
    duration: "Per vehicle",
    category: "fleet",
    includes: [
      "Scheduled lot visits",
      "Exterior wash & dry",
      "Interior vacuum & wipe",
      "Window cleaning",
      "Volume pricing (3+ vehicles)",
      "Monthly billing available",
    ],
  },
];

// ─── GALLERY ─────────────────────────────────────────────────────────────────

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "/gallery/IMG_1768.JPG", title: "Premium Exterior Detail", category: "Full Detail" },
  { id: 2, src: "/gallery/IMG_1942.JPG", title: "Interior Deep Clean", category: "Interior Detail" },
  { id: 3, src: "/gallery/IMG_2771.JPG", title: "Paint Correction Results", category: "Paint Correction" },
  { id: 4, src: "/gallery/IMG_2804.JPG", title: "Ceramic Coating Finish", category: "Ceramic Coating" },
  { id: 5, src: "/gallery/IMG_2944.JPG", title: "Showroom Shine", category: "Full Detail" },
  { id: 6, src: "/gallery/IMG_2945.JPG", title: "Flawless Finish", category: "Ceramic Coating" },
  { id: 7, src: "/gallery/IMG_3237.JPG", title: "Mirror-Like Results", category: "Paint Correction" },
];

export const galleryCategories = ["All", "Full Detail", "Interior Detail", "Ceramic Coating", "Paint Correction"];

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  vehicle: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike R.",
    vehicle: "BMW M4",
    text: "My M4 has never looked this good, not even when I drove it off the lot. The ceramic coating is insane. Water literally jumps off the paint.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    vehicle: "Mercedes GLC",
    text: "Jack came to my office parking lot and detailed my car while I worked. Came out to a car that looked brand new. Already booked my next appointment.",
    rating: 5,
  },
  {
    name: "David L.",
    vehicle: "Porsche 911",
    text: "I don't trust anyone with my 911. But after seeing their work on my buddy's car, I gave them a shot. Best decision I've made. These guys are artists.",
    rating: 5,
  },
];

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────

export const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description: "Choose your service and pick a time that works for you.",
  },
  {
    step: "02",
    title: "Visit Our Shop or We Come to You",
    description: "Drop off at our Hamilton shop or we come to your location anywhere in NJ.",
  },
  {
    step: "03",
    title: "The Transformation",
    description: "We work our magic while you go about your day.",
  },
  {
    step: "04",
    title: "Jaw Drop",
    description: "Come back to a vehicle that looks better than showroom new.",
  },
];

// ─── STATS ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: "500+", label: "Cars Detailed" },
  { value: "5.0", label: "Google Rating" },
  { value: "12K", label: "Instagram Followers" },
  { value: "All NJ", label: "Service Area" },
];

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
