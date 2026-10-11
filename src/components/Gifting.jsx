import React from "react";
import { motion } from "framer-motion";
import { Gift, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { IMAGES } from "../data/images";
import { GIFTING_CATEGORIES, BRAND_CONFIG } from "../data/content";
import { scrollToAnchor } from "../hooks/useLenis";

export function Gifting({ onSelectCategory }) {
  const imageMap = {
    mugs: IMAGES.gifting.mugs.url,
    tumblers: IMAGES.gifting.tumblers.url,
    frames: IMAGES.gifting.frames.url,
    travelMugs: IMAGES.gifting.travelMugs.url,
    hampers: IMAGES.gifting.hampers.url,
    corporate: IMAGES.gifting.corporate.url,
    plants: IMAGES.gifting.plants.url,
  };

  const handleEnquire = (categoryTitle) => {
    if (onSelectCategory) {
      onSelectCategory(categoryTitle);
    }
    scrollToAnchor("contact", -70);
  };

  return (
    <section
      id="gifting"
      className="relative py-24 sm:py-32 bg-cream-100 text-forest-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Gift className="w-3.5 h-3.5 text-lime-600" />
              <span>Personalised Gifting Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 leading-[1.15]">
              Handcrafted gifts that tell your personal story.
            </h2>
            <p className="text-base sm:text-lg text-forest-800/80 font-light mt-4 leading-relaxed">
              Every mug, tumbler, and wooden frame is customized right here in our Thane studio. Send us your photo, anniversary date, or company branding—we will bring it to life with artisan precision.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DM on WhatsApp to Customise</span>
            </a>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {GIFTING_CATEGORIES.map((cat, idx) => {
            const imgUrl = imageMap[cat.id];

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group relative rounded-3xl overflow-hidden border border-forest-900/10 shadow-soft hover:shadow-lift transition-all duration-500 min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8 ${cat.span}`}
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0">
                  <img
                    src={imgUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle multi-layer gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent transition-opacity group-hover:from-forest-950 group-hover:via-forest-950/80" />
                </div>

                {/* Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-forest-900/80 backdrop-blur-md border border-lime-500/30 text-lime-400 text-xs font-semibold">
                    {cat.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-forest-900/90 backdrop-blur-md text-cream-100 text-xs font-bold">
                    From {cat.startingAt}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mb-2 group-hover:text-lime-400 transition-colors">
                    {cat.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed mb-6 max-w-lg transition-all duration-300">
                    {cat.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-cream-100/15">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-lime-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Personalise in 24-48 hrs
                    </span>

                    <button
                      onClick={() => handleEnquire(cat.title)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 text-xs font-bold tracking-wider uppercase shadow-md transition-all group-hover:translate-x-1 active:scale-95"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
