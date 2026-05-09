// TODO (Dino): Replace remaining placeholder fields (address, MJC cert number,
// social URLs, hours) before launch. Phone, WhatsApp, email, and owner are live.

export const siteConfig = {
  name: "Jazzies Halaal Kitchen",
  legalName: "Jazzies Halaal Kitchen",
  tagline: "Cape Town's Home of Soulful Halaal Cooking",
  shortDescription:
    "Halaal Cape Malay kitchen in Cape Town. Family recipes, slow-cooked breyani, akhni, curries, and gatsbies.",
  longDescription:
    "Jazzies Halaal Kitchen is a family-run halaal eatery rooted in Cape Malay tradition. We serve the dishes our grandmothers cooked, made fresh daily with halaal-certified ingredients and the kind of patience that only family kitchens have.",
  url: "https://jazzieshalaalkitchen.co.za", // PLACEHOLDER

  owner: {
    name: "Jasmine",
    role: "Owner and head of kitchen",
  },

  contact: {
    phone: "+27 78 544 4220",
    phoneDigits: "+27785444220",
    whatsapp: "+27 78 544 4220",
    whatsappDigits: "27785444220",
    email: "jazzkitchencpt@gmail.com",
  },

  // Public-facing location is intentionally vague: "Cape Town, South Africa".
  // The kitchen is in Surrey Estate but we do not surface the specific area,
  // street address, map embeds, or driving directions anywhere on the site.
  address: {
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa",
    countryCode: "ZA",
    display: "Cape Town, South Africa",
    // Kept for the owner's records only. Never render this anywhere.
    privateSuburb: "Surrey Estate",
  },

  hours: [
    { day: "Monday", display: "Closed", openTime: null, closeTime: null },
    { day: "Tuesday", display: "11:00 to 21:00", openTime: "11:00", closeTime: "21:00" },
    { day: "Wednesday", display: "11:00 to 21:00", openTime: "11:00", closeTime: "21:00" },
    { day: "Thursday", display: "11:00 to 21:00", openTime: "11:00", closeTime: "21:00" },
    { day: "Friday", display: "11:00 to 21:00", openTime: "11:00", closeTime: "21:00" },
    { day: "Saturday", display: "10:00 to 22:00", openTime: "10:00", closeTime: "22:00" },
    { day: "Sunday", display: "10:00 to 22:00", openTime: "10:00", closeTime: "22:00" },
  ],

  hoursSummary: "Tuesday to Friday: 11am to 9pm. Saturday and Sunday: 10am to 10pm. Closed Mondays.",

  certification: {
    body: "Muslim Judicial Council (MJC)",
    bodyShort: "MJC",
    number: "MJC-CERT-XXXXXX", // PLACEHOLDER
    description:
      "Certified halaal by the Muslim Judicial Council. All meat, poultry, and ingredients used in our kitchen meet MJC standards.",
  },

  social: {
    instagram: "https://instagram.com/jazzieshalaalkitchen", // PLACEHOLDER
    facebook: "https://facebook.com/jazzieshalaalkitchen", // PLACEHOLDER
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
  ],

  ctaMessages: {
    generalOrder: "Hi Jazzies, I would like to place an order.",
    cateringEnquiry: "Hi Jazzies, I would like to enquire about catering.",
    menuQuestion: "Hi Jazzies, I have a question about your menu.",
  },

  priceRange: "RR", // ZAR moderate
  servesCuisine: ["Cape Malay", "Halaal", "South African"],
} as const;

export type SiteConfig = typeof siteConfig;
