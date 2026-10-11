import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { InstagramIcon } from "./ui/InstagramIcon";
import { IMAGES } from "../data/images";
import { BRAND_CONFIG } from "../data/content";

// Zigzag styling for small devices: some tall, some square, some wide banners
const ZIGZAG_CLASSES = [
  "col-span-1 aspect-[3/4] sm:aspect-[4/3]",                          // 0: Tall portrait
  "col-span-1 aspect-square sm:aspect-[4/3] mt-3 sm:mt-0",           // 1: Square staggered
  "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[4/3]",         // 2: Wide feature banner
  "col-span-1 aspect-square sm:aspect-[4/3]",                          // 3: Square
  "col-span-1 aspect-[3/4] sm:aspect-[4/3] -mt-3 sm:mt-0",          // 4: Tall portrait
  "col-span-1 aspect-[4/5] sm:aspect-[4/3]",                          // 5: Portrait
  "col-span-1 aspect-square sm:aspect-[4/3] mt-2 sm:mt-0",           // 6: Square
  "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[4/3]",         // 7: Wide feature banner
  "col-span-2 sm:col-span-1 aspect-[16/10] sm:aspect-[4/3]",         // 8: Balanced finisher
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev + 1) % IMAGES.gallery.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev - 1 + IMAGES.gallery.length) % IMAGES.gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const activeItem = selectedImageIndex !== null ? IMAGES.gallery[selectedImageIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 bg-cream-100 text-forest-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <InstagramIcon className="w-3.5 h-3.5 text-lime-600" />
              <span>Life at The Green Pouch</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 leading-[1.15]">
              Moments, mugs & memories.
            </h2>
            <p className="text-base sm:text-lg text-forest-800/80 font-light mt-4 leading-relaxed">
              A peek into daily pours, smiling celebrations, and custom orders shipping out of Thane. Tap any photo to enlarge.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-850 text-cream-100 text-xs font-bold uppercase tracking-wider shadow-lift hover:shadow-glow-lime transition-all active:scale-95 self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4 text-lime-400" />
            <span>Follow @thegreenpouchcafe</span>
          </a>
        </div>

        {/* Dynamic Zigzag Grid: 2 columns with varied small/big tiles on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {IMAGES.gallery.map((item, index) => {
            const layoutClass = ZIGZAG_CLASSES[index % ZIGZAG_CLASSES.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                onClick={() => setSelectedImageIndex(index)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-forest-950 border border-forest-900/10 shadow-soft hover:shadow-lift transition-all ${layoutClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 active:scale-98"
                  loading="lazy"
                />

                {/* Mobile subtle indicators (Tap affordance) */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent sm:hidden pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-forest-950/80 text-lime-400 text-[9px] font-semibold sm:hidden border border-lime-500/20 backdrop-blur-sm pointer-events-none">
                  {item.category}
                </span>
                <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-forest-950/80 text-lime-400 sm:hidden border border-white/10 shadow-sm pointer-events-none">
                  <Maximize2 className="w-3 h-3" />
                </div>
                <div className="absolute bottom-2 left-2.5 right-10 text-[11px] font-serif font-bold text-cream-100 truncate sm:hidden pointer-events-none">
                  {item.title}
                </div>

                {/* Desktop Hover Overlay */}
                <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-forest-900/90 text-lime-400 text-[11px] font-semibold border border-lime-500/20">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-full bg-forest-900/80 text-cream-100">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-cream-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream-300/85 font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for Enlarge Image Click */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl bg-forest-900 border border-lime-500/30 shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2.5 rounded-full bg-forest-950/90 text-cream-100 hover:text-lime-400 transition-colors border border-white/10 shadow-lg active:scale-90"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image View */}
              <div className="relative md:w-3/5 aspect-square sm:aspect-[4/3] md:aspect-auto bg-black shrink-0">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />

                {/* Left/Right Nav Arrows on Image */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev - 1 + IMAGES.gallery.length) % IMAGES.gallery.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-forest-950/80 text-cream-100 hover:text-lime-400 border border-white/10 active:scale-90"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev + 1) % IMAGES.gallery.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-forest-950/80 text-cream-100 hover:text-lime-400 border border-white/10 active:scale-90"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Image Info & Meta */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-forest-900 text-cream-100">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-semibold">
                      {activeItem.category}
                    </span>
                    <span className="text-xs text-cream-400 font-mono">
                      {selectedImageIndex + 1} / {IMAGES.gallery.length}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-100 mb-2 sm:mb-3">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed mb-6">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-forest-800 flex items-center justify-between">
                  <span className="text-xs text-cream-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                    Thane, Maharashtra
                  </span>

                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-lime-400 hover:underline"
                  >
                    <span>View on Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
