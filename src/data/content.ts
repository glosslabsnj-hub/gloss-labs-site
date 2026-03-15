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
  tagline: "It's Not Clean Till It's Gloss",
  phone: "(609) 944-9705",
  phoneLink: "+16099449705",
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
    weekdays: "Mon - Fri: 8:00 AM - 7:00 PM",
    weekend: "Sat - Sun: 8:30 AM - 7:00 PM",
  },
  mobileService: "All of New Jersey. $50 service fee beyond 25 miles.",
  squareBookingUrl: "https://book.squareup.com/appointments/dvhqf1pkf4hbig/MLX0AATCTSD8M",
  googleReviewsUrl: "https://www.google.com/maps/place/Gloss+Labs+Auto+NJ/@40.1962857,-74.6824042,17z",
};

// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface Service {
  title: string;
  squareName?: string;
  price: string;
  priceSuv?: string;
  priceTruck?: string;
  description: string;
  shortDescription: string;
  icon: "droplets" | "sparkles" | "star" | "shield" | "gem" | "truck";
  duration: string;
  includes: string[];
  category: "wash" | "interior" | "full" | "protection" | "correction";
}

export const services: Service[] = [
  {
    title: "Exterior Wash",
    squareName: "EXTERIOR WASH",
    price: "$150",
    priceSuv: "$180",
    priceTruck: "$210",
    description:
      "Safe, thorough hand wash to refresh your paint and wheels without marring. Foam pre-soak, pH-neutral hand wash with plush microfiber mitts, wheels and tires cleaned, touch-safe blow dry, and exterior glass cleaned streak-free. Safe for ceramic-coated vehicles.",
    shortDescription:
      "Safe hand wash with foam pre-soak, wheel cleaning, blow dry, and streak-free glass. Safe for coated vehicles.",
    icon: "droplets",
    duration: "1.5 hrs",
    category: "wash",
    includes: [
      "Foam pre-soak + pH-neutral hand wash",
      "Wheels, barrels & tires cleaned",
      "Badges, grilles, emblems brushed",
      "Door jambs wiped",
      "Touch-safe blow dry with filtered air",
      "Exterior glass cleaned streak-free",
      "Tire dressing (satin finish)",
    ],
  },
  {
    title: "Interior Detail",
    squareName: "INTERIOR DETAIL",
    price: "$250",
    priceSuv: "$290",
    priceTruck: "$350",
    description:
      "Reset your vehicle's interior to a fresh, clean condition. Full vacuum, compressed air cleaning of cracks and crevices, thorough wipe-down of all plastics, vinyl, and leather, steam cleaning of high-touch areas, and glass cleaned inside and out. Does not include carpet shampooing (available as add-on).",
    shortDescription:
      "Full vacuum, steam clean, surface wipe-down, glass cleaning, and light pet hair removal.",
    icon: "sparkles",
    duration: "4 hrs",
    category: "interior",
    includes: [
      "Full interior vacuum (carpets, mats, seats)",
      "Compressed air + brushing (cracks & crevices)",
      "Wipe-down of plastics, vinyl & leather",
      "Steam clean & disinfect high-touch areas",
      "Glass cleaned inside and out",
      "Light pet hair & debris removal",
    ],
  },
  {
    title: "Interior & Exterior Combo",
    squareName: "INTERIOR & EXTERIOR COMBO",
    price: "$350",
    priceSuv: "$410",
    priceTruck: "$480",
    description:
      "Complete inside-and-out refresh for that new-car feel. Combines our full Interior Detail with our Exterior Wash for total vehicle transformation. Safe for coated vehicles. Does not include shampoo extraction, clay bar, or paint correction.",
    shortDescription:
      "Complete inside-and-out refresh. Full interior detail plus hand wash for that new-car feel.",
    icon: "star",
    duration: "5.5 hrs",
    category: "full",
    includes: [
      "Full interior vacuum, crevice blowout & brush",
      "Wipe & steam of plastics, vinyl, leather",
      "Interior glass cleaned streak-free",
      "Foam pre-soak + pH-neutral hand wash",
      "Wheels, tires & badges deep cleaned",
      "Touch-safe blow dry + tire dressing",
    ],
  },
  {
    title: "Wash, Clay & Seal",
    squareName: "WASH CLAY & SEAL",
    price: "$220",
    priceSuv: "$270",
    priceTruck: "$310",
    description:
      "Premium maintenance detail to restore gloss and add lasting protection. Includes thorough hand wash, iron and bug decontamination, clay bar treatment, and application of a high-quality paint sealant for up to 4-6 months of protection, deep shine, and hydrophobic water beading.",
    shortDescription:
      "Hand wash, iron decon, clay bar, and paint sealant for up to 4-6 months of glossy protection.",
    icon: "droplets",
    duration: "1.5-2 hrs",
    category: "protection",
    includes: [
      "Thorough professional hand wash",
      "Iron & bug decontamination",
      "Clay bar treatment (smooth as glass)",
      "Paint sealant (4-6 month protection)",
      "Deep shine & hydrophobic beading",
    ],
  },
  {
    title: "Paint Correction",
    squareName: "PAINT CORRECTION",
    price: "From $500",
    priceSuv: "From $600",
    priceTruck: "From $700",
    description:
      "Machine polishing to restore clarity and gloss by reducing swirls, haze, and light to moderate defects. Choose 1-Step for light/medium imperfections or 2-Step (Cut + Polish) for deeper correction. Includes prep wash, iron remover, clay decon, masking, and panel wipe. Protection recommended after correction.",
    shortDescription:
      "Machine polishing to remove swirls, haze, and defects. 1-Step or 2-Step correction available.",
    icon: "gem",
    duration: "6-12 hrs",
    category: "correction",
    includes: [
      "Prep wash + iron remover + clay decon",
      "Paint inspection & test spot",
      "Masking of sensitive trim/edges",
      "Machine polish (1-Step or 2-Step)",
      "Panel wipe (IPA/solvent) for true finish",
      "2-Step: Sedan $800 / SUV $900 / Truck $1,000",
    ],
  },
  {
    title: "Ceramic Coating",
    squareName: "CERAMIC COATING",
    price: "From $600",
    priceSuv: "Quote",
    priceTruck: "Quote",
    description:
      "Professional ceramic coating for long-lasting paint protection. Choose from 1, 3, or 5 year durability options. Pricing includes prep wash and decontamination. Add 1-Step or 2-Step paint correction for best results. Price varies based on vehicle size, correction level, and coating duration selected.",
    shortDescription:
      "1, 3, or 5 year ceramic protection. Price varies based on vehicle, correction level, and coating duration.",
    icon: "shield",
    duration: "Full day",
    category: "protection",
    includes: [
      "Prep wash & decontamination",
      "Ceramic coating application",
      "Prep Only: 1yr $600 / 3yr $900 / 5yr $1,200",
      "1-Step + Coat: 1yr $1,000 / 3yr $1,200 / 5yr $1,400",
      "2-Step + Coat: 1yr $1,400 / 3yr $1,600 / 5yr $2,000",
    ],
  },
];

// ─── ADD-ON SERVICES ────────────────────────────────────────────────────────

export interface AddOn {
  title: string;
  price: string;
  description: string;
}

export const addOns: AddOn[] = [
  { title: "Upholstery Shampoo", price: "From $70", description: "Deep carpet and seat shampoo extraction. Sedan $70, SUV $90." },
  { title: "Pet Hair Removal", price: "From $75", description: "Specialized extraction of embedded pet hair. Moderate $75, Heavy $125. Must book with interior service." },
  { title: "Odor Removal", price: "$80", description: "Deep cleaning + ozone treatment to neutralize odors at the source. Smoke, pets, spills." },
  { title: "Headlight Restoration", price: "$120", description: "Restore foggy, yellowed headlights to crystal-clear clarity. Per pair." },
  { title: "Engine Bay Detail", price: "$85", description: "Degrease, steam clean, and dress your engine bay for a like-new look." },
  { title: "Trim Restoration", price: "Quote", description: "Restore faded plastics to OEM black with ceramic trim coating for long-lasting UV protection." },
  { title: "Windshield Ceramic Coating", price: "$39", description: "Hydrophobic ceramic coating on windshield for improved visibility in rain." },
  { title: "Wheel Ceramic Coating", price: "$79", description: "Ceramic coating on all 4 wheels for easier cleaning and brake dust protection." },
];

// ─── MEMBERSHIP PLANS ────────────────────────────────────────────────────────

export interface MembershipPlan {
  name: string;
  frequency: string;
  description: string;
  priceCar: string;
  priceSuv: string;
  priceTruck: string;
  includes: string[];
  highlight?: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Monthly",
    frequency: "1 detail / month",
    description:
      "Keep your vehicle looking showroom-fresh year-round with a monthly maintenance detail. Ideal for daily drivers and anyone who wants to stay ahead of dirt, pollen, and road grime.",
    priceCar: "$149",
    priceSuv: "$179",
    priceTruck: "$199",
    includes: [
      "Exterior hand wash + dry",
      "Full interior vacuum & wipe-down",
      "Dashboard, console & door panels cleaned",
      "Interior and exterior glass streak-free",
      "Tire dressing (satin finish)",
      "15% off all add-on services",
      "Priority scheduling",
    ],
  },
  {
    name: "Bi-Monthly",
    frequency: "2 details / month",
    description:
      "For owners who demand perfection. Two full maintenance details per month keeps your vehicle in pristine condition at all times. Best value per visit.",
    priceCar: "$249",
    priceSuv: "$299",
    priceTruck: "$349",
    includes: [
      "Everything in Monthly, twice per month",
      "Includes door jamb cleaning each visit",
      "Includes wheel barrel cleaning each visit",
      "20% off all add-on services",
      "10% off ceramic coatings & paint correction",
      "Priority scheduling (same-day when available)",
      "Free air freshener each visit",
    ],
    highlight: true,
  },
];

export const membershipTerms = {
  commitment: "12-month recurring plan",
  minimum: "3-month minimum enrollment",
  billing: "Billed monthly. Cancel after minimum with 30 days notice.",
  taxNote: "Prices exclude NJ sales tax.",
  enrollCta: "Call or email to enroll. We'll set up your schedule and preferred service day.",
};

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
    name: "AJ Ilyasoff",
    vehicle: "Tesla Model X",
    text: "Brought in our Tesla Model X for interior detail & odor removal, Jack did an awesome job. He went above & beyond, threw in extras like an exterior wash & deep cleaning touches we didn't even ask for. Interior looked & smelled brand new. Highly recommend!",
    rating: 5,
  },
  {
    name: "Justin Dempsey",
    vehicle: "Paint Correction + Ceramic",
    text: "The paint correction and ceramic coating they applied made the exterior look like a mirror. They even got rid of some stubborn stains I thought were permanent! The attention to detail was incredible. Five stars all the way!",
    rating: 5,
  },
  {
    name: "Heather Kay",
    vehicle: "Honda Pilot",
    text: "My headlights were foggy and yellow and now look crystal clear! It looks like a brand new car! Jack was very professional and you can see his attention to detail and dedication shine through his work. Everything exceeded my expectations.",
    rating: 5,
  },
  {
    name: "NotThe Dot",
    vehicle: "Subaru Forester",
    text: "My 11-year-old Subaru Forester was looking beat up inside and out. The clay bar polish was miraculous! Scratches and dullness that I've seen for years are gone. Stains on my seat that I thought were there forever are now gone. Jack has better communication than most supervisors I've had!",
    rating: 5,
  },
  {
    name: "Andrew Marra",
    vehicle: "Jeep Grand Cherokee",
    text: "When I picked up my SUV, it looked and felt brand new. The exterior was perfect and the interior was spotless down to every detail. As someone who goes to the beach often, Jack went above and beyond getting every trace of sand. Highly recommend!",
    rating: 5,
  },
  {
    name: "George Martine",
    vehicle: "Minivan",
    text: "Our large dog had an accident in the car, the smell was HORRENDOUS! Not only did he get the smell out and ALL the dog hair, he got the interior looking brand NEW! Will be bringing him my Jeep and Harley for detailing.",
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
  { value: "35+", label: "5-Star Reviews" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction" },
  { value: "All NJ", label: "Service Area" },
];

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
