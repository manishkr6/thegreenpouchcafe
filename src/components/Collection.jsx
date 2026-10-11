import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, ArrowUpRight, Crown, Pause, Play } from "lucide-react";
import { IMAGES } from "../data/images";
import { scrollToAnchor } from "../hooks/useLenis";

export function Collection({ onSelectProduct }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated collection items for seamless infinite auto-scroll loop
  const collectionItems = [...IMAGES.premiumCollection, ...IMAGES.premiumCollection];

  // Smooth continuous auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    const scrollSpeed = 0.75; // Smooth slow speed in pixels per frame

    const autoScroll = () => {
      if (!isPaused && container) {
        // When halfway through (end of first set), seamlessly reset to start
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = container.scrollLeft - halfWidth;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualScroll = (direction) => {
    setIsPaused(true);
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    // Resume auto-scroll after 4 seconds of inactivity
    setTimeout(() => setIsPaused(false), 4000);
  };

  const handleCustomise = (productName) => {
    if (onSelectProduct) {
      onSelectProduct(`Premium Collection: ${productName}`);
    }
    scrollToAnchor("contact", -80);
  };

  return (
    <section
      id="collection"
      className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 bg-forest-950 text-cream-100 overflow-hidden scroll-mt-24"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[420px] h-[420px] bg-gold-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>Studio Exclusive</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-100 leading-[1.15]">
              The Signature Mug Collection
            </h2>
            <p className="text-base sm:text-lg text-cream-300/80 font-light mt-4 leading-relaxed">
              Designed for those who appreciate tactile craftsmanship. Hand-glazed ceramics, laser-engraved commuter tumblers, and bespoke gold monograms.
            </p>
          </div>

          {/* Auto-scroll toggle and Prev / Next Scroll Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-3.5 rounded-full bg-forest-900 border border-lime-500/20 text-cream-100 hover:text-lime-400 hover:border-lime-400 transition-colors shadow-soft active:scale-95 text-xs flex items-center gap-1.5 px-4"
              aria-label={isPaused ? "Play auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-lime-400 fill-current" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-lime-400 fill-current" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">Pause</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleManualScroll("left")}
              className="p-3.5 rounded-full bg-forest-900 border border-lime-500/20 text-cream-100 hover:text-lime-400 hover:border-lime-400 transition-colors shadow-soft active:scale-95"
              aria-label="Scroll collection left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="p-3.5 rounded-full bg-forest-900 border border-lime-500/20 text-cream-100 hover:text-lime-400 hover:border-lime-400 transition-colors shadow-soft active:scale-95"
              aria-label="Scroll collection right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Infinite Auto-Scroll Track */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            // brief timeout before resuming after touch drag
            setTimeout(() => setIsPaused(false), 2000);
          }}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {collectionItems.map((product, idx) => (
            <div
              key={`${product.id}-${idx}`}
              className="shrink-0 w-[290px] sm:w-[350px] rounded-3xl bg-forest-900/90 border border-lime-500/20 overflow-hidden shadow-lift flex flex-col justify-between group hover:border-lime-400/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-forest-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span className="px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-lime-500/30 text-lime-400 text-xs font-semibold">
                    {product.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-medium border border-gold-500/30">
                    {product.badge}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 px-3.5 py-1 rounded-full bg-forest-950/90 backdrop-blur-md border border-white/10 text-cream-100 font-bold text-sm">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-xl font-bold text-cream-100 mb-2 group-hover:text-lime-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-cream-300/80 font-light leading-relaxed mb-6">
                    {product.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest-800 flex items-center justify-between">
                  <span className="text-[11px] font-sans uppercase tracking-wider text-cream-400">
                    Custom Name / Initial
                  </span>
                  <button
                    onClick={() => handleCustomise(product.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-95"
                  >
                    <span>Customise</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Helper status text */}
        <div className="flex items-center justify-between text-xs text-cream-400 mt-2 px-2">
          <span>Auto-scrolling collection • Hover to pause</span>
          <span className="md:hidden">Swipe to explore</span>
        </div>

      </div>
    </section>
  );
}
