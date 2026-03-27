export const MOCK_CATEGORIES = [
  { id: 1, name: "Kettles", slug: "kettles", icon: "☕" },
  { id: 2, name: "Hair Dryers", slug: "hair-dryers", icon: "💨" },
  { id: 3, name: "Mini Bar Fridges", slug: "mini-bar-fridges", icon: "🧊" },
  { id: 4, name: "Safe Boxes", slug: "safe-boxes", icon: "🔒" },
  {
    id: 5,
    name: "Housekeeping Trolleys",
    slug: "housekeeping-trolleys",
    icon: "🧹",
  },
];

export const MOCK_PRODUCTS = [
  {
    id: 1,
    category_id: 1,
    name: "Stainless Steel Corded Kettle 1.2L",
    slug: "ss-corded-kettle-1200",
    short_description:
      "360° swivel base, concealed element, auto shut-off. Engineered for high-frequency hotel use.",
    description:
      "Designed specifically for the hotel and hospitality industry, this corded kettle features a full stainless-steel interior, limescale filter, and a commercial-grade heating element rated for 50,000+ cycles. The 1.2L capacity suits two guests comfortably. Cord storage compartment built into the base. Passed AS/NZS 3820 safety compliance.",
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
    ],
    tags: ["budget", "midrange", "premium"],
    star_min: 3,
    base_price: 89,
    specs: {
      capacity: "1.2L",
      wattage: "2400W",
      cord: "900mm",
      material: "Stainless interior",
      certifications: "AS/NZS 3820",
      colour: "Brushed silver",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 89.0 },
      { min_qty: 11, max_qty: 50, unit_price: 79.0 },
      { min_qty: 51, max_qty: 200, unit_price: 69.0 },
      { min_qty: 201, max_qty: null, unit_price: 59.0 },
    ],
  },
  {
    id: 2,
    category_id: 1,
    name: "Cordless Glass Kettle 1.0L",
    slug: "cordless-glass-kettle-1000",
    short_description:
      "Illuminated blue ring, heat-resistant borosilicate glass, perfect for boutique properties.",
    description:
      "Borosilicate glass body with blue LED illumination when boiling. Cordless 360° base with stainless-steel inner heating plate. Compact 1.0L capacity ideal for single-occupancy rooms. Drip-free pouring spout. Meets hotel procurement grade quality checks.",
    images: [
      "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=600&q=80",
      "https://images.unsplash.com/photo-1593760576027-4c2d8f41a481?w=600&q=80",
    ],
    tags: ["premium", "midrange"],
    star_min: 4,
    base_price: 119,
    specs: {
      capacity: "1.0L",
      wattage: "2200W",
      cord: "Cordless",
      material: "Borosilicate glass",
      certifications: "AS/NZS 3820",
      colour: "Clear / Chrome",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 119.0 },
      { min_qty: 11, max_qty: 50, unit_price: 105.0 },
      { min_qty: 51, max_qty: 200, unit_price: 92.0 },
      { min_qty: 201, max_qty: null, unit_price: 79.0 },
    ],
  },
  {
    id: 3,
    category_id: 2,
    name: "Ionic Wall-Mounted Hair Dryer 1800W",
    slug: "ionic-wall-dryer-1800",
    short_description:
      "Negative ion technology, two heat/speed settings, auto shut-off after 2 min idle.",
    description:
      "Wall-mounted ionic hair dryer with 1800W output and negative ion technology to reduce frizz and static. Features two heat and two speed settings with a cool shot button. Built-in 2-minute auto shut-off for safety compliance. Mounting bracket included. Suitable for plasterboard and tile surfaces.",
    images: [
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&q=80",
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&q=80",
    ],
    tags: ["midrange", "premium"],
    star_min: 4,
    base_price: 149,
    specs: {
      wattage: "1800W",
      settings: "2 heat / 2 speed",
      mount: "Wall bracket included",
      auto_shutoff: "2 min idle",
      cord: "1.8m",
      certifications: "SAA approved",
      colour: "Gloss white",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 149.0 },
      { min_qty: 11, max_qty: 50, unit_price: 129.0 },
      { min_qty: 51, max_qty: 200, unit_price: 115.0 },
      { min_qty: 201, max_qty: null, unit_price: 99.0 },
    ],
  },
  {
    id: 4,
    category_id: 2,
    name: "Pro Ceramic Hair Dryer 2200W",
    slug: "pro-ceramic-dryer-2200",
    short_description:
      "Salon-grade ceramic barrel, far-infrared heat, 6-setting professional control.",
    description:
      "Hotel-grade professional hair dryer with ceramic barrel technology for even heat distribution. Far-infrared technology dries hair from the inside out, minimising surface damage. Six-setting control panel with memory last-used setting. Removable lint filter for easy cleaning. Comes with concentrator nozzle attachment.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    tags: ["premium"],
    star_min: 5,
    base_price: 229,
    specs: {
      wattage: "2200W",
      technology: "Far-infrared ceramic",
      settings: "6-setting",
      accessories: "Concentrator nozzle",
      cord: "2.0m swivel",
      certifications: "SAA / CE",
      colour: "Matte black / gold",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 229.0 },
      { min_qty: 11, max_qty: 50, unit_price: 199.0 },
      { min_qty: 51, max_qty: 200, unit_price: 175.0 },
      { min_qty: 201, max_qty: null, unit_price: 149.0 },
    ],
  },
  {
    id: 5,
    category_id: 3,
    name: "Compact Mini Bar Fridge 30L",
    slug: "mini-bar-fridge-30l",
    short_description:
      "Whisper-quiet compressor, reversible door, glass shelf — standard in 4-star properties.",
    description:
      "30-litre compressor-based mini bar fridge with whisper-quiet operation (<28dB). Reversible door hinge for flexible room fit-out. Tempered glass shelf, door rack with bottle holder and can slots. Temperature range 0–10°C. R600a refrigerant for low environmental impact. Hotel installation kit included.",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    ],
    tags: ["midrange", "premium", "budget"],
    star_min: 3,
    base_price: 389,
    specs: {
      capacity: "30L",
      noise: "<28dB",
      refrigerant: "R600a",
      temp_range: "0–10°C",
      dimensions: "480×450×500mm (HWD)",
      power: "60W",
      colour: "Stainless door / black body",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 389.0 },
      { min_qty: 11, max_qty: 50, unit_price: 349.0 },
      { min_qty: 51, max_qty: 200, unit_price: 309.0 },
      { min_qty: 201, max_qty: null, unit_price: 269.0 },
    ],
  },
  {
    id: 6,
    category_id: 3,
    name: "Premium Mini Bar Fridge 40L",
    slug: "mini-bar-fridge-40l",
    short_description:
      "40L with glass door, LED interior, perfect for 5-star and resort-grade rooms.",
    description:
      "Luxury 40-litre compressor fridge with full-glass viewing door and premium LED interior lighting. Adjustable thermostat with digital display. Automatic defrost cycle. Lockable for minibar management. Two adjustable shelves plus door rack. Designed to integrate flush with custom cabinetry.",
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
    ],
    tags: ["premium"],
    star_min: 5,
    base_price: 549,
    specs: {
      capacity: "40L",
      door: "Full glass",
      noise: "<26dB",
      temp_range: "2–12°C",
      lock: "Electronic lock",
      dimensions: "550×480×520mm (HWD)",
      colour: "Black with stainless trim",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 549.0 },
      { min_qty: 11, max_qty: 50, unit_price: 499.0 },
      { min_qty: 51, max_qty: 200, unit_price: 449.0 },
      { min_qty: 201, max_qty: null, unit_price: 399.0 },
    ],
  },
  {
    id: 7,
    category_id: 4,
    name: "Digital In-Room Safe — Laptop Size",
    slug: "digital-safe-laptop",
    short_description:
      '4-digit PIN + override key, fits 15" laptop, 3mm steel body. SAA certified.',
    description:
      "Hotel-grade in-room digital safe with laptop-size interior. 3mm cold-rolled steel door with anti-pry design. Programmable 3–8 digit PIN with master override key. Interior LED light and USB charging port. Mounts to wardrobe shelf or fixed surface via pre-drilled holes. Battery low indicator.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    tags: ["budget", "midrange", "premium"],
    star_min: 3,
    base_price: 189,
    specs: {
      interior: "350×250×180mm",
      door: "3mm steel",
      lock: "4–8 digit PIN + key",
      power: "4× AA batteries",
      usb: "1× USB-A charging port",
      mount: "2× bolts included",
      certifications: "SAA / CE",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 189.0 },
      { min_qty: 11, max_qty: 50, unit_price: 169.0 },
      { min_qty: 51, max_qty: 200, unit_price: 149.0 },
      { min_qty: 201, max_qty: null, unit_price: 129.0 },
    ],
  },
  {
    id: 8,
    category_id: 4,
    name: "Biometric + PIN Safe — Premium",
    slug: "biometric-safe-premium",
    short_description:
      "Fingerprint + PIN dual authentication, 5mm steel, 5-star standard.",
    description:
      "Premium biometric in-room safe with dual authentication: fingerprint scanner (stores up to 10 prints) and 4-8 digit PIN backup. 5mm hardened steel door with anti-drill plate. Interior LED, USB-C and USB-A charging ports. Tamper alarm with auto-lock after 3 failed attempts. Low battery warning with backup battery port.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    tags: ["premium"],
    star_min: 5,
    base_price: 349,
    specs: {
      interior: "400×280×200mm",
      door: "5mm hardened steel",
      lock: "Biometric + 4–8 digit PIN",
      fingerprints: "10 stored prints",
      usb: "USB-C + USB-A",
      alarm: "Tamper alarm",
      certifications: "SAA / CE / EN 1143",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 10, unit_price: 349.0 },
      { min_qty: 11, max_qty: 50, unit_price: 315.0 },
      { min_qty: 51, max_qty: 200, unit_price: 279.0 },
      { min_qty: 201, max_qty: null, unit_price: 249.0 },
    ],
  },
  {
    id: 9,
    category_id: 5,
    name: "Standard Housekeeping Trolley",
    slug: "housekeeping-trolley-std",
    short_description:
      "600mm wide, 4-shelf, central linen bag, 4 swivel castors with brakes.",
    description:
      "Heavy-duty housekeeping trolley fabricated from powder-coated steel tubing. Four shelves with 30kg combined capacity. Central removable linen bag (100L) with stainless steel frame. Four 125mm swivel castors, two with toe-operated brakes. Side hooks for mop/broom. Rear bumper bar to protect walls.",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    ],
    tags: ["budget", "midrange"],
    star_min: 3,
    base_price: 595,
    specs: {
      width: "600mm",
      shelves: "4 shelves, 30kg combined",
      linen_bag: "100L removable",
      castors: "4× 125mm swivel, 2 with brake",
      frame: "Powder-coated steel",
      colour: "White frame / grey bag",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 5, unit_price: 595.0 },
      { min_qty: 6, max_qty: 20, unit_price: 549.0 },
      { min_qty: 21, max_qty: 50, unit_price: 499.0 },
      { min_qty: 51, max_qty: null, unit_price: 449.0 },
    ],
  },
  {
    id: 10,
    category_id: 5,
    name: "Executive Housekeeping Trolley with Lid",
    slug: "housekeeping-trolley-exec",
    short_description:
      "Lockable lid, aluminium frame, silent rubber castors — resort and 5-star grade.",
    description:
      "Premium executive housekeeping trolley designed for upscale hotel corridors. Anodised aluminium frame is lightweight yet rigid. Lockable hinged lid conceals linen from guest view. Silent rubber-tyred castors for carpeted corridors. Stainless steel top tray, three adjustable shelves, two 60L linen compartments. Comes with electronic lock.",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    ],
    tags: ["premium"],
    star_min: 5,
    base_price: 1250,
    specs: {
      frame: "Anodised aluminium",
      lid: "Lockable hinged lid",
      linen: "2× 60L compartments",
      castors: "Silent rubber-tyred",
      tray: "Stainless steel top",
      lock: "Electronic key lock",
      colour: "Silver / black",
    },
    pricing_tiers: [
      { min_qty: 1, max_qty: 5, unit_price: 1250.0 },
      { min_qty: 6, max_qty: 20, unit_price: 1099.0 },
      { min_qty: 21, max_qty: 50, unit_price: 975.0 },
      { min_qty: 51, max_qty: null, unit_price: 849.0 },
    ],
  },
];

export const BUNDLES = {
  budget: {
    label: "Essential Room Kit",
    subtitle: "Budget / 3-star ready",
    color: "#6B7280",
    product_ids: [1, 3, 5, 7, 9],
  },
  midrange: {
    label: "Standard Room Kit",
    subtitle: "Mid-range / 4-star ready",
    color: "#0EA5E9",
    product_ids: [1, 3, 5, 7, 9],
  },
  premium: {
    label: "Premium Room Kit",
    subtitle: "Luxury / 5-star ready",
    color: "#D4AF37",
    product_ids: [2, 4, 6, 8, 10],
  },
};

export const QUIZ_STEPS = [
  {
    key: "property",
    question: "What type of property are you equipping?",
    options: [
      { value: "hotel", label: "Hotel" },
      { value: "serviced", label: "Serviced Apartment" },
      { value: "airbnb", label: "Airbnb / Short-stay" },
      { value: "resort", label: "Resort" },
    ],
  },
  {
    key: "rooms",
    question: "How many rooms do you need to equip?",
    options: [
      { value: "1-10", label: "1 – 10 rooms" },
      { value: "11-50", label: "11 – 50 rooms" },
      { value: "51-200", label: "51 – 200 rooms" },
      { value: "200+", label: "200+ rooms" },
    ],
  },
  {
    key: "stars",
    question: "What star rating or quality level are you targeting?",
    options: [
      { value: "budget", label: "Budget / 3-star" },
      { value: "midrange", label: "Mid-range / 4-star" },
      { value: "premium", label: "Premium / 5-star" },
    ],
  },
];
