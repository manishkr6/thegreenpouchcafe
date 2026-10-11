import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change reviews every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 bg-forest-950 text-cream-100 overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-lime-500/30 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-lime-400" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-100 leading-[1.15]">
            Loved by our Thane neighbours & gifting patrons.
          </h2>
          <p className="text-base sm:text-lg text-cream-300/80 font-light mt-4 leading-relaxed">
            Real stories from coffee mornings, surprise anniversary tables, and custom company deliveries.
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 2000);
          }}
          className="relative max-w-4xl mx-auto rounded-4xl bg-forest-900/90 border border-lime-500/25 p-7 sm:p-14 shadow-2xl overflow-hidden"
        >
          {/* Active Auto-Slide Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-forest-950 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "100%" : "100%" }}
              transition={{ duration: 4.2, ease: "linear" }}
              className="h-full bg-gradient-to-r from-lime-500 to-gold-400"
            />
          </div>

          {/* Subtle Quote Watermark */}
          <Quote className="absolute top-8 right-8 w-24 h-24 text-lime-500/10 -rotate-12 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="relative z-10 flex flex-col justify-between"
            >
              {/* Star Rating & Category Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                <div className="flex items-center gap-1.5 text-gold-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-cream-200">5.0 Verified Patron</span>
                </div>

                <span className="px-3 py-1 rounded-full bg-lime-500/20 border border-lime-500/30 text-lime-400 text-xs font-semibold">
                  {current.tag}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-cream-100 font-normal leading-relaxed italic mb-8 min-h-[90px] sm:min-h-[110px]">
                "{current.text}"
              </blockquote>

              {/* Author Info & Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-forest-800">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-lime-500/40"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-base text-cream-100">
                      {current.name}
                    </h4>
                    <p className="text-xs text-cream-400">
                      {current.role} • {current.date}
                    </p>
                  </div>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="p-3 rounded-full bg-forest-950/80 text-cream-100 hover:text-lime-400 hover:border-lime-400 border border-white/10 transition-colors active:scale-95"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-3 rounded-full bg-forest-950/80 text-cream-100 hover:text-lime-400 hover:border-lime-400 border border-white/10 transition-colors active:scale-95"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators & Status */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-forest-800/50">
            <span className="text-[11px] text-cream-400 uppercase tracking-wider">
              {isPaused ? "Paused on hover" : "Auto-changing reviews"}
            </span>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-lime-400"
                      : "w-2 bg-forest-700 hover:bg-forest-600"
                  }`}
                  aria-label={`Jump to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
