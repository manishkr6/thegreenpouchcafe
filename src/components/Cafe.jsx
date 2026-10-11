import React, { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Pizza, Sparkles, Cake, Users, ArrowUpRight, Clock, Star } from "lucide-react";
import { IMAGES } from "../data/images";
import { CAFE_HIGHLIGHTS } from "../data/content";
import { scrollToAnchor } from "../hooks/useLenis";

function TiltCard({ item, image, alt, onEnquire }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative flex flex-col rounded-3xl bg-forest-900/90 border border-lime-500/20 overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300"
    >
      {/* Image container with zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
        
        {/* Floating Tag */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-lime-500/30 text-lime-400 text-xs font-semibold">
          {item.tag}
        </div>

        {/* Price Indicator */}
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-forest-900/90 backdrop-blur-md text-cream-100 text-xs font-bold border border-white/10">
          {item.priceRange}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-100 mb-2 group-hover:text-lime-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-cream-300/80 font-light leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-forest-800 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-lime-400 font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Signature Recipe
          </span>
          <button
            onClick={() => onEnquire(item.title)}
            className="inline-flex items-center gap-1 text-xs font-bold text-cream-100 group-hover:text-lime-400 transition-colors"
          >
            <span>Order / Reserve</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Cafe({ onSelectCategory }) {
  const imagesMap = {
    coffee: IMAGES.cafe.specialtyCoffee,
    pizza: IMAGES.cafe.gourmetPizza,
    bites: IMAGES.cafe.freshBites,
    dalgona: IMAGES.cafe.dalgonaShakes,
  };

  const handleBooking = () => {
    if (onSelectCategory) {
      onSelectCategory("Birthday & Gathering");
    }
    scrollToAnchor("contact", -70);
  };

  return (
    <section
      id="cafe"
      className="relative py-24 sm:py-32 bg-forest-950 text-cream-100 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-lime-500/30 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Coffee className="w-3.5 h-3.5" />
              <span>Cozy Thane Haven</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-100 leading-[1.15]">
              The Cafe: Good coffee, fresh food & quiet escapes.
            </h2>
            <p className="text-base sm:text-lg text-cream-300/85 font-light mt-4 leading-relaxed">
              Every cup is brewed with ethically sourced Indian beans, and our dough is slow-proofed for that golden, airy crust. Walk in for a peaceful work morning, an evening catch-up, or a date night.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-cream-300">
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-forest-900/80 border border-forest-800">
              <Clock className="w-4 h-4 text-lime-400" />
              <span>Tue-Sun: 11 AM - 11 PM</span>
            </div>
          </div>
        </div>

        {/* 4 Hover-Lift Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CAFE_HIGHLIGHTS.map((item) => (
            <TiltCard
              key={item.id}
              item={item}
              image={imagesMap[item.id]?.url}
              alt={imagesMap[item.id]?.alt}
              onEnquire={(title) => {
                if (onSelectCategory) onSelectCategory(`Cafe Order: ${title}`);
                scrollToAnchor("contact", -70);
              }}
            />
          ))}
        </div>

        {/* Birthdays & Gatherings Sub-Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 rounded-4xl bg-gradient-to-br from-forest-900 via-forest-850 to-forest-950 border border-lime-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative ambient flare */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950/80 border border-gold-500/40 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Cake className="w-3.5 h-3.5" />
                <span>Host Your Celebrations</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream-100 leading-tight mb-4">
                Birthdays, Anniversaries & Intimate Gatherings
              </h3>

              <p className="text-sm sm:text-base text-cream-300 font-light leading-relaxed mb-6 max-w-xl">
                Looking for a warm, photogenic venue in Thane without the sterile banquet feel? Reserve our dedicated celebration corner. We provide warm fairy light styling, personalized welcome cards, customized cafe platters, and in-house bespoke takeaway gifts for every guest!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                <div className="p-3.5 rounded-2xl bg-forest-950/60 border border-white/5">
                  <Users className="w-5 h-5 text-lime-400 mb-1" />
                  <p className="text-xs font-bold text-cream-100">10 to 40 Guests</p>
                  <p className="text-[11px] text-cream-400">Cozy private section</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-forest-950/60 border border-white/5">
                  <Pizza className="w-5 h-5 text-gold-400 mb-1" />
                  <p className="text-xs font-bold text-cream-100">Curated Menus</p>
                  <p className="text-[11px] text-cream-400">Pizzas, bites & drinks</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-forest-950/60 border border-white/5">
                  <Sparkles className="w-5 h-5 text-lime-400 mb-1" />
                  <p className="text-xs font-bold text-cream-100">Custom Favors</p>
                  <p className="text-[11px] text-cream-400">Personalized mugs/hampers</p>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-lift hover:shadow-glow-lime transition-all active:scale-95"
              >
                <span>Book Your Gathering / Birthday Table</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Celebration Photo Preview */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lift border border-white/10 group">
              <img
                src={IMAGES.cafe.celebrations.url}
                alt={IMAGES.cafe.celebrations.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-forest-900/90 backdrop-blur-md border border-lime-500/20 text-xs">
                <p className="font-serif font-bold text-cream-100">Memories Crafted with Heart</p>
                <p className="text-cream-400 text-[11px]">Advance reservation recommended for weekends</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
