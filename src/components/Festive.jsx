import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Heart } from "lucide-react";
import { IMAGES } from "../data/images";
import { scrollToAnchor } from "../hooks/useLenis";

export function Festive({ onSelectFestive }) {
  const handlePreOrder = (festiveTitle) => {
    if (onSelectFestive) {
      onSelectFestive(`Festive Hamper: ${festiveTitle}`);
    }
    scrollToAnchor("contact", -70);
  };

  return (
    <section
      id="festive"
      className="relative py-24 sm:py-32 bg-cream-50 text-forest-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Seasonal Celebrations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 leading-[1.15]">
            Handcrafted for India’s favourite festivals.
          </h2>
          <p className="text-base sm:text-lg text-forest-800/80 font-light mt-4 leading-relaxed">
            From Ganesh Chaturthi modak boxes to sparkling Diwali luxe hampers—we curate limited-batch festive gifts with bespoke packaging.
          </p>
        </div>

        {/* Festive Cards Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IMAGES.festive.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-white border border-forest-900/10 overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-forest-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                
                {/* Festival Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-900/90 text-gold-400 text-xs font-bold border border-gold-500/30">
                  {item.festival}
                </div>

                <div className="absolute bottom-3 left-4 text-xs font-semibold text-cream-200 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-lime-400" />
                  <span>{item.season}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest-900 mb-2 group-hover:text-lime-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-800/80 font-light leading-relaxed mb-6">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest-900/10 flex items-center justify-between">
                  <span className="text-[11px] font-sans uppercase tracking-wider text-forest-600 font-semibold">
                    Pre-booking Available
                  </span>

                  <button
                    onClick={() => handlePreOrder(item.festival)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest-900 hover:bg-forest-850 text-cream-100 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                  >
                    <span>Reserve Box</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
