// Menu data for Jazzies Halaal Kitchen.
// TODO (Dino): Replace stock placeholder image URLs in `image` with real
// photography of each dish. All prices are placeholders pending sign-off.

export type MenuCategory =
  | "breyani-akhni"
  | "curries-stews"
  | "grills-roasts"
  | "burgers-gatsbies"
  | "sides-starters"
  | "drinks-desserts";

export type DietaryTag = "halaal" | "vegetarian" | "spicy" | "contains-nuts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  image: string;
  imageAlt: string;
  dietary?: DietaryTag[];
  isFeatured?: boolean;
}

export const categories: { id: MenuCategory; label: string; blurb: string }[] = [
  {
    id: "breyani-akhni",
    label: "Breyani and Akhni",
    blurb: "Slow-cooked rice dishes layered with spice, meat, and patience.",
  },
  {
    id: "curries-stews",
    label: "Curries and Stews",
    blurb: "Cape Malay classics simmered down to deep, rounded heat.",
  },
  {
    id: "grills-roasts",
    label: "Grills and Roasts",
    blurb: "Open-flame chicken meals with chips, salad, and house sambal.",
  },
  {
    id: "burgers-gatsbies",
    label: "Burgers and Gatsbies",
    blurb: "Cape Town gatsbies on a fresh roll, plus our house burgers.",
  },
  {
    id: "sides-starters",
    label: "Sides and Starters",
    blurb: "Samoosas, dhaltjies, rotis, and the sambals that tie it all together.",
  },
  {
    id: "drinks-desserts",
    label: "Drinks and Desserts",
    blurb: "Falooda, koeksisters, malva pudding, and traditional sweet endings.",
  },
];

// Stock image URLs come from Unsplash for placeholder use only.
// Replace with photographed dishes before launch.
const stock = {
  breyani:
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=70",
  akhni:
    "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=70",
  curry:
    "https://images.unsplash.com/photo-1567529692333-de9fd6772897?auto=format&fit=crop&w=1200&q=70",
  bobotie:
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=70",
  grill:
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=70",
  gatsby:
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1200&q=70",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=70",
  samoosa:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=70",
  roti:
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=70",
  falooda:
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=70",
  malva:
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=70",
  koeksister:
    "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=70",
};

export const menu: MenuItem[] = [
  // Breyani and Akhni
  {
    id: "chicken-breyani",
    name: "Chicken Breyani",
    description:
      "Long-grain basmati layered with marinated chicken, lentils, fried onions, and saffron. Served with dhal and sambals.",
    category: "breyani-akhni",
    price: 145,
    image: "/images/chicken-breyani.jpg",
    imageAlt: "Chicken breyani served on a copper plate",
    dietary: ["halaal", "spicy"],
    isFeatured: true,
  },
  {
    id: "lamb-breyani",
    name: "Lamb Breyani",
    description:
      "Slow-cooked Karoo lamb with whole spice and basmati. Cooked low so the bottom layer crisps the way it should.",
    category: "breyani-akhni",
    price: 175,
    image: "/images/lamb-breyani.jpg",
    imageAlt: "Lamb breyani with caramelised onions",
    dietary: ["halaal", "spicy"],
    isFeatured: true,
  },
  {
    id: "chicken-akhni",
    name: "Chicken Akhni",
    description:
      "One-pot rice dish, lighter than breyani, fragrant with green chilli, coriander, and toasted whole spice.",
    category: "breyani-akhni",
    price: 130,
    image: "/images/chicken-akhni.jpg",
    imageAlt: "Chicken akhni in a serving dish",
    dietary: ["halaal"],
    isFeatured: true,
  },
  {
    id: "lamb-akhni",
    name: "Lamb Akhni",
    description:
      "Tender lamb pieces cooked through the rice. Served with raita and a fresh dhania sambal.",
    category: "breyani-akhni",
    price: 165,
    image: stock.akhni,
    imageAlt: "Lamb akhni topped with fresh coriander",
    dietary: ["halaal"],
  },
  {
    id: "vegetable-akhni",
    name: "Vegetable Akhni",
    description:
      "Seasonal vegetables, potato, and chickpeas cooked through fragrant basmati. Generous with the spice, gentle on the heat.",
    category: "breyani-akhni",
    price: 110,
    image: stock.akhni,
    imageAlt: "Vegetable akhni with peas and potato",
    dietary: ["halaal", "vegetarian"],
  },

  // Curries and Stews
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description:
      "Tomato and cream curry with grilled chicken pieces, finished with butter and kasuri methi. Mild and rich.",
    category: "curries-stews",
    price: 140,
    image: stock.curry,
    imageAlt: "Butter chicken with rice and roti",
    dietary: ["halaal"],
  },
  {
    id: "lamb-curry",
    name: "Lamb Curry",
    description:
      "Cape Malay lamb curry with a thick, spiced gravy. Slow-cooked until the meat falls off the bone.",
    category: "curries-stews",
    price: 160,
    image: stock.curry,
    imageAlt: "Lamb curry with bone-in pieces",
    dietary: ["halaal", "spicy"],
  },
  {
    id: "denningvleis",
    name: "Denningvleis",
    description:
      "Traditional Cape Malay lamb stew with tamarind and bay. Slightly sweet, slightly tart, deeply spiced.",
    category: "curries-stews",
    price: 165,
    image: stock.curry,
    imageAlt: "Denningvleis lamb stew",
    dietary: ["halaal"],
  },
  {
    id: "bobotie",
    name: "Bobotie",
    description:
      "Spiced minced beef baked under a savoury egg custard, with bay leaves on top. Served with yellow rice and chutney.",
    category: "curries-stews",
    price: 135,
    image: "/images/bobotie.jpg",
    imageAlt: "Bobotie with yellow rice and bay leaf",
    dietary: ["halaal"],
    isFeatured: true,
  },
  {
    id: "sugar-beans-curry",
    name: "Sugar Beans Curry",
    description:
      "Plant-based and full-flavoured. Sugar beans simmered in a Cape Malay curry sauce with potato and tomato.",
    category: "curries-stews",
    price: 95,
    image: stock.curry,
    imageAlt: "Sugar beans curry in a clay pot",
    dietary: ["halaal", "vegetarian"],
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    description:
      "Bone-in chicken in a Cape Malay tomato and onion gravy. Comes with rice or roti.",
    category: "curries-stews",
    price: 130,
    image: stock.curry,
    imageAlt: "Cape Malay chicken curry",
    dietary: ["halaal"],
  },

  // Grills and Roasts
  {
    id: "quarter-chicken-grill",
    name: "Quarter Chicken Grilled Meal",
    description:
      "Marinated quarter chicken grilled over open flame. Served with chips, garden salad, and house sambal.",
    category: "grills-roasts",
    price: 95,
    image: stock.grill,
    imageAlt: "Quarter chicken with chips and salad",
    dietary: ["halaal"],
  },
  {
    id: "half-chicken-grill",
    name: "Half Chicken Grilled Meal",
    description:
      "Half chicken, marinated overnight in our spice blend. With chips, salad, and dhania chutney.",
    category: "grills-roasts",
    price: 145,
    image: "/images/chicken-half-grilled-meal.jpg",
    imageAlt: "Half grilled chicken meal",
    dietary: ["halaal"],
    isFeatured: true,
  },
  {
    id: "full-chicken-grill",
    name: "Full Chicken Grilled Meal",
    description:
      "Whole grilled chicken to share. Comes with two large chips and a Greek salad.",
    category: "grills-roasts",
    price: 215,
    image: stock.grill,
    imageAlt: "Full grilled chicken to share",
    dietary: ["halaal"],
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops Grill",
    description:
      "Three thick-cut lamb chops, marinated in our masala and grilled to order.",
    category: "grills-roasts",
    price: 220,
    image: stock.grill,
    imageAlt: "Grilled lamb chops with chips",
    dietary: ["halaal"],
  },

  // Burgers and Gatsbies
  {
    id: "masala-steak-gatsby",
    name: "Masala Steak Gatsby",
    description:
      "Footlong roll piled with masala steak, slap chips, lettuce, tomato, and mother-in-law sauce. Cuts into four.",
    category: "burgers-gatsbies",
    price: 195,
    image: "/images/masala-steak-gatsby.jpg",
    imageAlt: "Masala steak gatsby cut into quarters",
    dietary: ["halaal", "spicy"],
    isFeatured: true,
  },
  {
    id: "chicken-tikka-gatsby",
    name: "Chicken Tikka Gatsby",
    description:
      "Tandoori-style chicken tikka, slap chips, salad, and yoghurt sauce on a footlong Portuguese roll.",
    category: "burgers-gatsbies",
    price: 185,
    image: stock.gatsby,
    imageAlt: "Chicken tikka gatsby on Portuguese roll",
    dietary: ["halaal"],
  },
  {
    id: "polony-egg-chip-gatsby",
    name: "Polony, Egg and Chip Gatsby",
    description:
      "The classic Athlone gatsby. Polony, fried egg, and slap chips on a fresh roll.",
    category: "burgers-gatsbies",
    price: 145,
    image: stock.gatsby,
    imageAlt: "Polony egg chip gatsby",
    dietary: ["halaal"],
  },
  {
    id: "beef-burger",
    name: "Beef Burger",
    description:
      "200g hand-pressed beef patty, cheese, lettuce, tomato, onion, and burger sauce. With chips.",
    category: "burgers-gatsbies",
    price: 110,
    image: stock.burger,
    imageAlt: "Beef burger with chips",
    dietary: ["halaal"],
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description:
      "Spice-marinated chicken fillet, lettuce, tomato, and peri-peri mayo. With chips.",
    category: "burgers-gatsbies",
    price: 105,
    image: stock.burger,
    imageAlt: "Chicken burger with peri-peri mayo",
    dietary: ["halaal", "spicy"],
  },

  // Sides and Starters
  {
    id: "samoosas",
    name: "Mince Samoosas (4)",
    description:
      "Crisp triangles filled with spiced mince. Hand-folded fresh. Served with mint chutney.",
    category: "sides-starters",
    price: 45,
    image: stock.samoosa,
    imageAlt: "Mince samoosas with chutney",
    dietary: ["halaal", "spicy"],
  },
  {
    id: "veg-samoosas",
    name: "Vegetable Samoosas (4)",
    description:
      "Spiced potato and pea filling. Crisp pastry. Mint chutney on the side.",
    category: "sides-starters",
    price: 40,
    image: stock.samoosa,
    imageAlt: "Vegetable samoosas",
    dietary: ["halaal", "vegetarian"],
  },
  {
    id: "dhaltjies",
    name: "Dhaltjies (Chilli Bites, 6)",
    description:
      "Cape Malay chilli bites of chickpea flour, spinach, and green chilli. Crunchy outside, soft inside.",
    category: "sides-starters",
    price: 35,
    image: stock.samoosa,
    imageAlt: "Dhaltjies chilli bites",
    dietary: ["halaal", "vegetarian", "spicy"],
  },
  {
    id: "roti",
    name: "Plain Roti",
    description:
      "Fresh roti, stretched and pan-fried to order. Soft, layered, and brushed with butter.",
    category: "sides-starters",
    price: 18,
    image: stock.roti,
    imageAlt: "Stack of fresh rotis",
    dietary: ["halaal", "vegetarian"],
  },
  {
    id: "sambals",
    name: "Sambals Trio",
    description:
      "Carrot and chilli sambal, dhania chutney, and tomato and onion sambal. The sides that round out a curry.",
    category: "sides-starters",
    price: 38,
    image: stock.roti,
    imageAlt: "Three small bowls of sambal",
    dietary: ["halaal", "vegetarian"],
  },
  {
    id: "yellow-rice",
    name: "Yellow Rice and Raisins",
    description:
      "Turmeric basmati cooked with cinnamon and raisins. The traditional partner to bobotie.",
    category: "sides-starters",
    price: 32,
    image: stock.roti,
    imageAlt: "Yellow rice with raisins",
    dietary: ["halaal", "vegetarian"],
  },

  // Drinks and Desserts
  {
    id: "falooda",
    name: "Rose Falooda",
    description:
      "Rose syrup, milk, vermicelli, basil seeds, and ice cream. The classic Cape Town pink drink.",
    category: "drinks-desserts",
    price: 55,
    image: stock.falooda,
    imageAlt: "Rose falooda in a tall glass",
    dietary: ["halaal", "vegetarian", "contains-nuts"],
  },
  {
    id: "boeber",
    name: "Boeber",
    description:
      "Warm sweet milk with vermicelli, sago, cardamom, and almonds. Traditionally served on the 15th of Ramadan.",
    category: "drinks-desserts",
    price: 45,
    image: stock.falooda,
    imageAlt: "Boeber with cardamom and almonds",
    dietary: ["halaal", "vegetarian", "contains-nuts"],
  },
  {
    id: "koeksisters",
    name: "Cape Malay Koeksisters (3)",
    description:
      "Spiced doughnuts soaked in syrup and rolled in coconut. Soft, sticky, and warm-spiced.",
    category: "drinks-desserts",
    price: 35,
    image: stock.koeksister,
    imageAlt: "Cape Malay koeksisters dusted with coconut",
    dietary: ["halaal", "vegetarian"],
  },
  {
    id: "malva-pudding",
    name: "Malva Pudding",
    description:
      "Apricot-jam sponge in caramel sauce, served warm with custard or vanilla ice cream.",
    category: "drinks-desserts",
    price: 55,
    image: stock.malva,
    imageAlt: "Warm malva pudding with custard",
    dietary: ["halaal", "vegetarian"],
  },
  {
    id: "mint-tea",
    name: "Moroccan Mint Tea",
    description: "Loose-leaf green tea steeped with fresh mint and a touch of sugar.",
    category: "drinks-desserts",
    price: 25,
    image: stock.falooda,
    imageAlt: "Mint tea in a small glass",
    dietary: ["halaal", "vegetarian"],
  },
];

export function getFeatured(limit = 6): MenuItem[] {
  return menu.filter((item) => item.isFeatured).slice(0, limit);
}

export function getByCategory(category: MenuCategory): MenuItem[] {
  return menu.filter((item) => item.category === category);
}
