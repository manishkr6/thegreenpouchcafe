/**
 * Central Content Configuration for The Green Pouch Cafe
 * All text strings, stats, contact numbers, hours, and lists are maintained here.
 */

export const BRAND_CONFIG = {
  name: "The Green Pouch Cafe",
  shortName: "The Green Pouch",
  tagline: "A little escape in the middle of the city.",
  secondaryTagline: "Happiness, Delivered.",
  bio: "Good coffee, fresh food, birthdays and gatherings, a place for everyone.",
  instagramHandle: "@thegreenpouchcafe",
  instagramUrl: "https://www.instagram.com/thegreenpouchcafe",
  phoneDisplay: "+91 98200 12345",
  phoneRaw: "+919820012345",
  whatsappNumber: "919820012345",
  whatsappUrl: "https://wa.me/919820012345?text=Hi%20The%20Green%20Pouch%20Cafe!%20I%20would%20like%20to%20enquire%20about%20",
  email: "hello@thegreenpouchcafe.com",
  address: {
    line1: "Shop 4 & 5, Near Viviana Mall / Panch Pakhadi",
    line2: "Ghodbunder Road, Thane West",
    cityStateZip: "Thane, Maharashtra 400602",
    country: "India",
  },
  timings: {
    weekdays: "Tuesday – Sunday: 11:00 AM – 11:00 PM",
    weekends: "Saturday – Sunday: 10:30 AM – 11:30 PM",
    closed: "Mondays (Studio Crafting & Roasting Day)",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.39414275037!2d72.90989047728442!3d19.218330752495333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8c8d8c36cb1%3A0x6e2df1c4639942a0!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const MARQUEE_ITEMS = [
  "Good Coffee",
  "Fresh Food",
  "Personalised Gifts",
  "Birthdays & Celebrations",
  "Gatherings",
  "Corporate Gifting",
  "Custom Mugs & Tumblers",
  "Thane West",
  "Happiness Delivered",
];

// Placeholder stats - configured for counter animation
export const STATS = [
  {
    id: "community",
    number: 2600,
    suffix: "+",
    label: "Community Members",
    subtext: "Coffee lovers & gifting patrons in Thane & Mumbai",
  },
  {
    id: "gifts",
    number: 500,
    suffix: "+",
    label: "Custom Gifts Crafted",
    subtext: "Personalised mugs, tumblers & bespoke hampers",
  },
  {
    id: "celebrations",
    number: 120,
    suffix: "+",
    label: "Heartfelt Celebrations",
    subtext: "Birthdays, anniversaries & private gatherings hosted",
  },
  {
    id: "rating",
    number: 4.9,
    isDecimal: true,
    suffix: "★",
    label: "Google & IG Rating",
    subtext: "Consistent love for warm hospitality & craftsmanship",
  },
];

export const CAFE_HIGHLIGHTS = [
  {
    id: "coffee",
    title: "Specialty Pour Over & Espresso",
    description: "Ethically sourced Indian arabica beans, roasted in micro-batches. Silky cortados, aeropress brews, and velvety lattes.",
    tag: "Artisan Brews",
    priceRange: "₹140 - ₹240",
  },
  {
    id: "pizza",
    title: "Artisanal Thin-Crust Pizzas",
    description: "Slow-fermented dough hand-tossed to crispy perfection, topped with san marzano style sauce, fresh bocconcini, and garden herbs.",
    tag: "Crowd Favourite",
    priceRange: "₹280 - ₹420",
  },
  {
    id: "bites",
    title: "Gourmet Paninis & Fresh Bites",
    description: "Sourdough toasties, pesto sun-dried tomato melts, stuffed garlic loafs, and seasoned waffle fries for comfort snacking.",
    tag: "Fresh Everyday",
    priceRange: "₹180 - ₹320",
  },
  {
    id: "dalgona",
    title: "Whipped Dalgona & Cloud Shakes",
    description: "Our viral thick whipped caramel dalgona cold brew, hazelnut frappes, and rich Belgian chocolate milkshakes.",
    tag: "Signature Drink",
    priceRange: "₹190 - ₹290",
  },
];

export const GIFTING_CATEGORIES = [
  {
    id: "mugs",
    title: "Personalised Ceramic Mugs",
    description: "Premium glossy & matte ceramic mugs with your custom illustrations, polaroid memories, or heartfelt name lettering.",
    startingAt: "₹399",
    tag: "Bestseller",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "tumblers",
    title: "Laser-Engraved Tumblers",
    description: "Food-grade stainless steel thermal tumblers keeping drinks hot or cold for 12+ hours with personalized names.",
    startingAt: "₹799",
    tag: "Everyday Carry",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "frames",
    title: "Artisan Photo Frames",
    description: "Solid natural wood desk & wall frames printed with high-definition memories, quotes, and custom Spotify code plaques.",
    startingAt: "₹499",
    tag: "Keepsake",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "travelMugs",
    title: "Insulated Travel Flasks",
    description: "Ergonomic leak-proof commuter mugs tailored for office goers and road trips, customized with initials or monograms.",
    startingAt: "₹899",
    tag: "On-the-go",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "hampers",
    title: "Curated Celebration Hampers",
    description: "Luxe gift boxes filled with custom mugs, roasted coffee bags, scented candles, and artisan chocolates tied in satin ribbons.",
    startingAt: "₹1,299",
    tag: "All-in-One",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "corporate",
    title: "Corporate & Team Bundles",
    description: "Cohesive company branded merchandise, welcome kits, and milestone appreciation boxes with volume discounts & GST invoices.",
    startingAt: "Custom Quote",
    tag: "Bulk Discounts",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "plants",
    title: "Indoor Plants & Ceramic Decor",
    description: "Hardy jade, peace lily, and succulent greens potted in handcrafted personalized ceramic planters for cheerful home corners.",
    startingAt: "₹349",
    tag: "Green Life",
    span: "col-span-1 md:col-span-3 lg:col-span-3",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose Your Canvas",
    subtitle: "Select the base",
    description: "Browse our collection of ceramic mugs, vacuum tumblers, teakwood frames, or custom hampers to find the perfect foundation.",
  },
  {
    step: "02",
    title: "Share Your Story",
    subtitle: "Photos, quotes, or initials",
    description: "Send us your favourite photograph, anniversary date, inside joke, or recipient's name directly via our easy form, WhatsApp, or Instagram DM.",
  },
  {
    step: "03",
    title: "We Handcraft & Refine",
    subtitle: "Studio craftsmanship",
    description: "Our in-house design team digitally aligns the design, shares a digital mock-up for your approval, and prints or laser-engraves with precision.",
  },
  {
    step: "04",
    title: "Delivered With Love",
    subtitle: "Unboxing joy",
    description: "Each item is beautifully nestled in eco-friendly protective packaging, topped with a personalized handwritten card, ready to brighten someone's day.",
  },
];

export const CORPORATE_PERKS = [
  {
    title: "Sharp Laser Engraving & High-Res Printing",
    description: "Flawless rendering of company logos, brand pantone accents, and individualized employee names.",
  },
  {
    title: "Scalable Bulk Pricing & GST Invoicing",
    description: "Clear tiered discounts for orders from 25 to 2,000+ units with seamless B2B tax invoicing.",
  },
  {
    title: "Pan-India Secure Dispatch",
    description: "Direct door-to-door courier deliveries to remote team members across India or single pallet delivery to your office.",
  },
  {
    title: "Curated Welcome & Festive Kits",
    description: "Pair tumblers with specialty drip coffee bags, branded tech pouches, diaries, and festive treats.",
  },
];

export const FAQS = [
  {
    question: "How long does a personalized gift take to be prepared?",
    answer: "Most individual personalized mugs, tumblers, and frames are handcrafted and ready within 24 to 48 hours! If you need an urgent same-day gift for a birthday celebration in Thane, message us on WhatsApp and we will do our best to prioritize it.",
  },
  {
    question: "Do you ship gifts outside of Thane?",
    answer: "Yes, absolutely! While our cozy cafe is physically located in Thane West, our Gifting Studio ships across Mumbai, Navi Mumbai, and all over India with safe, cushioned courier partners.",
  },
  {
    question: "Can I host a birthday party or private gathering at the cafe?",
    answer: "Yes! The Green Pouch Cafe is beloved for intimate gatherings (10 to 40 guests). We provide fairy light ambiance, customizable cafe food platters, and can even prepare customized takeaway gifts for all your guests.",
  },
  {
    question: "How do I share high-resolution photos for custom printing?",
    answer: "You can either attach your notes in our contact form below, or click the direct WhatsApp button to send your photos without compression. Our studio designer will reply with a digital proof preview before printing.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash at the cafe counter.",
  },
  {
    question: "What are your minimum order requirements for corporate gifting?",
    answer: "Corporate batches start from as few as 15 units with custom company logo engraving. Tiered bulk pricing unlocks starting at 25, 50, 100, and 500+ units.",
  },
];
