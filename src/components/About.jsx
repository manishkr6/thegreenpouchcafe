import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, Sparkles, Coffee, Gift, Award } from "lucide-react";
import { IMAGES } from "../data/images";
import { STATS, BRAND_CONFIG } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { scrollToAnchor } from "../hooks/useLenis";

function StatCounterItem({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(stat.number, isInView, 1800, stat.isDecimal);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 rounded-3xl bg-cream-50/90 border border-forest-900/10 shadow-soft hover:shadow-lift transition-all duration-300"
    >
      <div className="flex items-baseline gap-1 text-forest-900 mb-2">
        <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          {count}
        </span>
        <span className="font-serif text-2xl sm:text-3xl font-bold text-lime-600">
          {stat.suffix}
        </span>
      </div>
      <h4 className="font-sans font-bold text-sm text-forest-900 uppercase tracking-wider mb-1">
        {stat.label}
      </h4>
      <p className="text-xs text-forest-700/80 leading-relaxed">
        {stat.subtext}
      </p>
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yCol1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-cream-100 text-forest-900 overflow-hidden"
    >
      {/* Subtle background flourishes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Collage (Left) & Brand Story (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Collage with Multi-Speed Parallax (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
              
              {/* Column 1 */}
              <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 sm:gap-6">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lift border-2 border-white">
                  <img
                    src={IMAGES.about.interior}
                    alt="Cozy aesthetic interior of The Green Pouch Cafe"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-forest-900/80 backdrop-blur-md text-[11px] font-semibold text-lime-400">
                    The Cafe Vibe
                  </div>
                </div>

                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-soft border-2 border-white">
                  <img
                    src={IMAGES.about.coffeePour}
                    alt="Fresh artisanal pour over coffee"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Column 2 */}
              <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4 sm:gap-6 pt-8 sm:pt-12">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-soft border-2 border-white">
                  <img
                    src={IMAGES.about.celebration}
                    alt="Birthday celebration with warm smiles at The Green Pouch Cafe"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-forest-900/80 backdrop-blur-md text-[11px] font-semibold text-gold-300">
                    Celebrations
                  </div>
                </div>

                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lift border-2 border-white">
                  <img
                    src={IMAGES.about.crafting}
                    alt="Handcrafting personalized gifts in the studio"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-forest-900/80 backdrop-blur-md text-[11px] font-semibold text-cream-100">
                    Studio Crafting
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Quote Stamp */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 sm:p-5 rounded-3xl bg-forest-900 text-cream-100 border border-lime-500/30 shadow-2xl max-w-[220px] text-center pointer-events-none hidden sm:block z-20"
            >
              <Heart className="w-5 h-5 text-lime-400 mx-auto mb-1.5" />
              <p className="font-serif text-sm italic font-medium leading-snug">
                "Happiness, delivered one coffee & one gift at a time."
              </p>
            </motion.div>
          </div>

          {/* Right: Story Content & Philosophy (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" />
              <span>Our Thane Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 leading-[1.15] mb-6">
              Where coffee meets handcrafted memories.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-forest-800/85 leading-relaxed font-light mb-8">
              <p>
                In the buzzing, fast-paced heart of Thane, <strong>The Green Pouch Cafe</strong> was born out of a desire for warmth. We wanted a little green pocket where time slows down—where the aroma of freshly ground Arabica beans mingles with laughter, cozy corners, and warm food.
              </p>
              <p>
                But we didn’t stop at serving great coffee and sourdough pizzas. We created an integrated <strong>Personalised Gifting Studio</strong> right here. From bespoke monogram mugs and insulated travel tumblers to custom memory frames and curated celebration hampers, every gift is designed and finished with care.
              </p>
              <p className="font-medium text-forest-900">
                Whether you walk in for a solo book-reading session, host your 25th birthday with your best friends, or order 100 customized corporate hampers—you belong here.
              </p>
            </div>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-cream-50 border border-forest-900/10">
                <Coffee className="w-5 h-5 text-lime-600 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Micro-batch roasted coffee</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-cream-50 border border-forest-900/10">
                <Gift className="w-5 h-5 text-gold-600 shrink-0" />
                <span className="text-xs font-semibold text-forest-900">Same-day custom gifts</span>
              </div>
            </div>

            <button
              onClick={() => scrollToAnchor("process", -70)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-cream-100 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lift active:scale-95"
            >
              <span>See How Customisation Works</span>
            </button>
          </div>

        </div>

        {/* Count-Up Stats Row */}
        <div className="mt-20 pt-16 border-t border-forest-900/10">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl font-bold text-forest-900">
              Moments that define our journey
            </h3>
            <p className="text-xs text-forest-700/80 mt-1">
              (Curated milestone metrics from our Thane community & gifting studio)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <StatCounterItem key={stat.id} stat={stat} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
