/**
 * Central Image Assets Configuration
 * All URLs are high-resolution, optimized Unsplash images.
 * Business owners can easily replace any URL here with their own custom photography.
 */

export const IMAGES = {
  brand: {
    heroMain: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80", // Cozy warm cafe table with coffee and plant
    heroFloating1: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80", // Artisan latte art
    heroFloating2: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80", // Beautiful ceramic mug
    heroFloating3: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80", // Wrapped gift hamper with ribbon
    badgeBg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
  },

  about: {
    interior: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80", // Warm aesthetic cafe interior
    crafting: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80", // Personalized crafting / pottery / wrapping
    celebration: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80", // Friends celebrating birthday with warm lights
    coffeePour: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", // Fresh barista pour
  },

  cafe: {
    specialtyCoffee: {
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      alt: "Specialty Pour Over and Artisanal Latte at The Green Pouch Cafe",
    },
    gourmetPizza: {
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      alt: "Freshly baked artisan sourdough pizza with basil and cheese",
    },
    freshBites: {
      url: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      alt: "Gourmet grilled sandwiches and handcrafted cafe snacks",
    },
    dalgonaShakes: {
      url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      alt: "Whipped Dalgona cold coffee and thick gourmet shakes",
    },
    celebrations: {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
      alt: "Cozy celebration setup with warm lights and festive decor",
    },
  },

  gifting: {
    mugs: {
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      alt: "Customized ceramic mugs with bespoke lettering and illustrations",
    },
    tumblers: {
      url: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
      alt: "Matte stainless steel insulated personalized tumblers",
    },
    frames: {
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      alt: "Aesthetic wooden photo frames with customized polaroids and memories",
    },
    travelMugs: {
      url: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=800&q=80",
      alt: "Sleek leak-proof travel thermal mugs for coffee on the go",
    },
    hampers: {
      url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      alt: "Curated celebration gift hampers with ribbon and personalized goodies",
    },
    corporate: {
      url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
      alt: "High-end corporate branded gifting boxes and client appreciation gifts",
    },
    plants: {
      url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
      alt: "Potted succulents and botanical desk decor gifts in ceramic planters",
    },
  },

  premiumCollection: [
    {
      id: "pm-1",
      name: "Emerald Forest Monogram Mug",
      subtitle: "Hand-glazed ceramic with 18k gold initial detailing",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
      badge: "Signature Studio Piece",
    },
    {
      id: "pm-2",
      name: "Nordic Dune Dual-Tone Mug",
      subtitle: "Matte textured stoneware with custom name etching",
      price: "₹749",
      image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
      tag: "Limited Batch",
      badge: "Artisanal Finish",
    },
    {
      id: "pm-3",
      name: "The Thane Commuter Travel Tumbler",
      subtitle: "Double-walled vacuum insulated, laser engraved name",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=800&q=80",
      tag: "Most Popular",
      badge: "24h Temperature Lock",
    },
    {
      id: "pm-4",
      name: "Warm Terracotta Photo Mug",
      subtitle: "Includes high-res gloss polaroid photo & warm message print",
      price: "₹599",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      tag: "Loved for Birthdays",
      badge: "Custom Photo Print",
    },
    {
      id: "pm-5",
      name: "Botanical Sage Gift Hamper Mug",
      subtitle: "Comes with specialty coffee drip bags and keepsake box",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      tag: "Ready to Gift",
      badge: "Complete Gift Set",
    },
  ],

  gallery: [
    {
      id: "g1",
      title: "Morning Pour at Thane West",
      category: "Cafe Vibe",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      caption: "Freshly brewed specialty roast to start another inspiring day in Thane.",
    },
    {
      id: "g2",
      title: "Anniversary Custom Hamper",
      category: "Gifting Studio",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      caption: "Handcrafted anniversary hamper with personalized tumblers & couple memory frame.",
    },
    {
      id: "g3",
      title: "Signature Sourdough Slice",
      category: "Cafe Food",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      caption: "Crispy crust, rich mozzarella, and garden-fresh basil leaves.",
    },
    {
      id: "g4",
      title: "Laser-Engraved Matte Black Tumblers",
      category: "Personalised",
      image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=800&q=80",
      caption: "Custom office batch delivered for a leading tech team in Mumbai.",
    },
    {
      id: "g5",
      title: "Birthday Gathering Table Setup",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      caption: "Intimate private table reserved with fairy lights, cake, and customized welcome cards.",
    },
    {
      id: "g6",
      title: "Whipped Dalgona Cloud",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      caption: "Silky, caramelized coffee froth over chilled almond milk.",
    },
    {
      id: "g7",
      title: "Minimalist Polaroid Desk Frames",
      category: "Personalised",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      caption: "Preserving heartfelt moments in solid teakwood minimalist frames.",
    },
    {
      id: "g8",
      title: "Indoor Succulents & Green Corners",
      category: "Decor & Plants",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
      caption: "Bring green life into every living room or workstation.",
    },
    {
      id: "g9",
      title: "Artisanal Coffee & Book Nook",
      category: "Cafe Vibe",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
      caption: "The peaceful corner everyone loves spending a rainy afternoon in.",
    },
  ],

  festive: [
    {
      id: "f1",
      festival: "Ganesh Chaturthi",
      title: "Bappa Special Hampers",
      subtitle: "Bespoke brass accents, modak treats & customized blessing mugs",
      season: "August - September",
      color: "from-amber-600 to-amber-900",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "f2",
      festival: "Diwali Lights",
      title: "The Shubh Deepawali Luxe Box",
      subtitle: "Handcrafted earthen diyas, gourmet cookies & custom gold-rim mugs",
      season: "October - November",
      color: "from-yellow-600 to-amber-800",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "f3",
      festival: "Raksha Bandhan",
      title: "Sibling Bonding Duos",
      subtitle: "Pair of personalised brother & sister tumblers with handmade rakhi",
      season: "August",
      color: "from-rose-600 to-rose-950",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "f4",
      festival: "Holi Joy",
      title: "Rang Barse Celebration Kit",
      subtitle: "Eco-friendly herbal gulal, sweet bites & colourful printed mugs",
      season: "March",
      color: "from-pink-600 to-purple-900",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "f5",
      festival: "New Year & Corporate Cheers",
      title: "Executive Desk Refresh Hamper",
      subtitle: "Planner, personalized thermal flask & artisan roast beans",
      season: "December - January",
      color: "from-emerald-700 to-forest-950",
      image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
