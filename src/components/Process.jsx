import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, ShoppingBag, MessageSquare, Sparkles, PackageCheck, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data/content";
import { scrollToAnchor } from "../hooks/useLenis";

export function Process({ onStartCustomising }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const stepIcons = [
    <ShoppingBag className="w-5 h-5 text-lime-600" />,
    <MessageSquare className="w-5 h-5 text-gold-600" />,
    <Sparkles className="w-5 h-5 text-lime-600" />,
    <PackageCheck className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-cream-50 text-forest-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>Effortless & Personal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 leading-[1.15]">
            How customisation works in 4 simple steps.
          </h2>
          <p className="text-base sm:text-lg text-forest-800/80 font-light mt-4 leading-relaxed">
            From your camera roll to a treasured physical keepsake. No complicated software, just genuine human care.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Self-Drawing Timeline Line (Desktop Center / Mobile Left) */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-[3px] bg-forest-900/10 -translate-x-1/2">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-lime-500 via-lime-600 to-gold-500 origin-top shadow-glow-lime"
            />
          </div>

          {/* Steps List */}
          <div className="space-y-12 sm:space-y-16">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.step}
                  className={`relative flex items-center flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Marker Badge */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-12 h-12 rounded-full bg-forest-900 text-cream-100 border-4 border-cream-100 flex items-center justify-center font-bold text-sm shadow-lift"
                    >
                      <span className="text-lime-400 font-mono">{step.step}</span>
                    </motion.div>
                  </div>

                  {/* Content Card (Half Width) */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className="p-6 sm:p-8 rounded-3xl bg-white border border-forest-900/10 shadow-soft hover:shadow-lift transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-2xl bg-cream-100 border border-forest-900/10">
                          {stepIcons[idx]}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-lime-600 block">
                            {step.subtitle}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-forest-800/80 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer on opposite side for desktop symmetry */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Strip below timeline */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              if (onStartCustomising) onStartCustomising("Personalised Gift");
              scrollToAnchor("contact", -70);
            }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-forest-900 hover:bg-forest-850 text-cream-100 font-bold text-xs uppercase tracking-wider shadow-lift hover:shadow-glow-lime transition-all active:scale-95"
          >
            <span>Start Your Custom Order Today</span>
            <ArrowRight className="w-4 h-4 text-lime-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
