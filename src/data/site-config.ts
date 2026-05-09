// TODO (Dino): Replace placeholder phone numbers, address, hours, social URLs,
// MJC certification number, and any other field marked PLACEHOLDER before launch.

export const siteConfig = {
  name: "Jazzies Halaal Kitchen",
  legalName: "Jazzies Halaal Kitchen",
  tagline: "Cape Town's Home of Soulful Halaal Cooking",
  shortDescription:
    "Halaal Cape Malay kitchen in Cape Town. Family recipes, slow-cooked breyani, akhni, curries, and gatsbies.",
  longDescription:
    "Jazzies Halaal Kitchen is a family-run halaal eatery rooted in Cape Malay tradition. We serve the dishes our grandmothers cooked, made fresh daily with halaal-certified ingredients and the kind of patience that only family kitchens have.",
  url: "https://jazzieshalaalkitchen.co.za", // PLACEHOLDER

  contact: {
    phone: "+27 21 555 0123", // PLACEHOLDER
    phoneDigits: "+27215550123",
    whatsapp: "+27 82 555 0123", // PLACEHOLDER
    whatsappDigits: "27825550123",
    email: "hello@jazzieshalaalkitchen.co.za", // PLACEHOLDER
  },

  address: {
    street: "12 Klipfontein Road", // PLACEHOLDER
    suburb: "Athlone",
    city: "Cape Town",
    province: "Western Cape",
    postalCode: "7764",
    country: "South Africa",
    countryCode: "ZA",
    formatted: "12 Klipfontein Road, Athlone, Cape Town, 7764", // PLACEHOLDER
    googleMapsUrl: "https://maps.google.com/?q=Athlone+Cape+Town", // PLACEHOLDER
    geo: {
      latitude: -33.9633, // PLACEHOLDER (approx Athlone)
      longitude: 18.5167,
    },
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
