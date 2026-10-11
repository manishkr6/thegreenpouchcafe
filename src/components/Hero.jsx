import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Gift, ChevronDown, Sparkles, MapPin, Star } from "lucide-react";
import { IMAGES } from "../data/images";
import { BRAND_CONFIG } from "../data/content";
import { scrollToAnchor } from "../hooks/useLenis";

export function Hero({ onSelectCategory }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax offsets
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yFloatLeft = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const yFloatRight = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  // Words for word-by-word reveal
  const titleWords = ["A", "little", "escape", "in", "the", "middle", "of", "the", "city."];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] pt-36 sm:pt-40 lg:pt-44 pb-16 lg:pb-20 flex flex-col justify-between overflow-hidden bg-forest-950 text-cream-100"
    >
      {/* Background Decorative Gradients & Ambient Glow */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-lime-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-16 right-12 w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-[130px] pointer-events-none" />

      {/* Main Content Grid */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-lime-500/30 text-lime-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-lime-400" />
              <span>Thane, Maharashtra</span>
              <span className="w-1 h-1 rounded-full bg-lime-400" />
              <span className="text-cream-300">Cafe & Gifting Studio</span>
            </motion.div>

            {/* Main Headline with Masked Word-by-Word Reveal */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cream-100 leading-[1.08] mb-6">
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.26em]">
                  <motion.span
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.05,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={`inline-block ${
                      word.toLowerCase().includes("escape")
                        ? "text-lime-400 italic font-medium"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-base sm:text-lg text-cream-300/90 font-light max-w-xl leading-relaxed mb-8"
            >
              Good coffee, fresh food, birthdays and gatherings, a place for everyone.
              Pair your morning cup with handcrafted personalized mugs, tumblers, photo frames, and celebration hampers made with love.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory("Personalised Gift");
                  scrollToAnchor("gifting", -70);
                }}
                className="group relative flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lift hover:shadow-glow-lime active:scale-95"
              >
                <Gift className="w-4 h-4 text-forest-950 transition-transform duration-300 group-hover:rotate-12" />
                <span>Explore Gifting</span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToAnchor("cafe", -70)}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-forest-900/90 hover:bg-forest-850 border border-lime-500/30 hover:border-lime-400 text-cream-100 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-soft active:scale-95"
              >
                <Coffee className="w-4 h-4 text-lime-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Visit The Cafe</span>
              </button>
            </motion.div>

            {/* Quick Proof Rating Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-8 flex items-center gap-4 pt-6 border-t border-forest-800/80 w-full"
            >
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Patron"
                  className="w-8 h-8 rounded-full border-2 border-forest-950 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Patron"
                  className="w-8 h-8 rounded-full border-2 border-forest-950 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                  alt="Patron"
                  className="w-8 h-8 rounded-full border-2 border-forest-950 object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-gold-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9 / 5 Rating</span>
                </div>
                <span className="text-cream-400 text-[11px]">
                  Loved by 2,600+ patrons in Thane & Mumbai
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visuals + Parallax Cards + Rotating Stamp (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4 lg:py-6">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-[420px]">
              
              {/* Main Center Image */}
              <motion.div
                style={{ y: yBg }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-lime-500/20 group"
              >
                <img
                  src={IMAGES.brand.heroMain}
                  alt="Cozy ambiance at The Green Pouch Cafe"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
                
                {/* Floating Bottom Card Banner */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-forest-950/90 backdrop-blur-md border border-lime-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-lime-400 uppercase tracking-wider">
                      The Green Pouch Cafe
                    </p>
                    <p className="text-xs sm:text-sm font-serif text-cream-100 font-medium">
                      Specialty Coffee & Gifting Studio
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-lime-500/20 text-lime-300 text-[10px] font-bold">
                    Open Today
                  </span>
                </div>
              </motion.div>

              {/* Floating Parallax Card 1 (Top Left Overlap): Coffee pour */}
              <motion.div
                style={{ y: yFloatLeft }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute top-6 -left-4 sm:-left-8 w-44 rounded-2xl p-2.5 bg-forest-900/95 backdrop-blur-md border border-lime-500/30 shadow-2xl hidden sm:block z-20"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
                  <img
                    src={IMAGES.brand.heroFloating1}
                    alt="Artisanal Latte Art"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-forest-950/80 text-lime-400 text-[9px] font-semibold">
                    Fresh Roast
                  </span>
                </div>
                <p className="text-[11px] font-medium text-cream-100 leading-tight">
                  Pour Over & Flat White
                </p>
                <p className="text-[10px] text-cream-400">100% Arabica Beans</p>
              </motion.div>

              {/* Floating Parallax Card 2 (Bottom Right Overlap): Custom Mug */}
              <motion.div
                style={{ y: yFloatRight }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-8 -right-4 sm:-right-8 w-48 rounded-2xl p-2.5 bg-forest-900/95 backdrop-blur-md border border-lime-500/30 shadow-2xl hidden sm:block z-20"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
                  <img
                    src={IMAGES.brand.heroFloating2}
                    alt="Personalised Ceramic Mug"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-forest-950/80 text-gold-400 text-[9px] font-semibold">
                    Personalised
                  </span>
                </div>
                <p className="text-[11px] font-medium text-cream-100 leading-tight">
                  Gold Monogram Mugs
                </p>
                <p className="text-[10px] text-cream-400">DM to Customise</p>
              </motion.div>

              {/* Rotating Circular Text Stamp Badge (Placed safely on top-right of image) */}
              <div className="absolute top-2 -right-4 sm:-right-6 z-30 pointer-events-none">
                <div className="relative w-28 h-28 sm:w-30 sm:h-30 flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <path
                        id="circleTextPath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[9.5px] uppercase font-bold tracking-[0.24em] fill-lime-400">
                        <textPath href="#circleTextPath" startOffset="0%">
                          HAPPINESS DELIVERED • FRESH COFFEE • CUSTOM GIFTS •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Center Badge Core */}
                  <div className="absolute w-11 h-11 rounded-full bg-forest-900 border border-lime-400/50 flex items-center justify-center shadow-glow-lime">
                    <Sparkles className="w-4 h-4 text-lime-400" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator - Straight Luxury Editorial Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center pt-8 pb-2 text-cream-300 text-xs tracking-wider uppercase select-none"
      >
        <button
          onClick={() => scrollToAnchor("marquee", -70)}
          className="group flex flex-col items-center gap-2 hover:text-lime-400 transition-colors focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <span className="text-[10px] tracking-[0.28em] font-semibold text-cream-300/80 group-hover:text-lime-400 transition-colors">
            Scroll to Explore
          </span>

          {/* Straight vertical line with animated light beam */}
          <div className="relative w-[2px] h-9 bg-forest-800 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [-18, 38] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-4 bg-gradient-to-b from-transparent via-lime-400 to-transparent"
            />
          </div>

          <ChevronDown className="w-3.5 h-3.5 text-lime-400 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </motion.div>
    </section>
  );
}
