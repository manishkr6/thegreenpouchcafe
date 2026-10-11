import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ShieldCheck, Truck, Receipt, Sparkles, ArrowRight } from "lucide-react";
import { CORPORATE_PERKS } from "../data/content";
import { scrollToAnchor } from "../hooks/useLenis";

export function Corporate({ onEnquireCorporate }) {
  const perkIcons = [
    <Sparkles className="w-5 h-5 text-lime-400" />,
    <Receipt className="w-5 h-5 text-gold-400" />,
    <Truck className="w-5 h-5 text-lime-400" />,
    <ShieldCheck className="w-5 h-5 text-gold-400" />,
  ];

  const handleBulkEnquiry = () => {
    if (onEnquireCorporate) {
      onEnquireCorporate("Corporate Gifting");
    }
    scrollToAnchor("contact", -70);
  };

  return (
    <section
      id="corporate"
      className="relative py-24 sm:py-32 bg-forest-900 text-cream-100 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950 border border-lime-500/30 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>B2B & Employee Appreciation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-100 leading-[1.15]">
            Corporate gifting that teams actually love and keep.
          </h2>

          <p className="text-base sm:text-lg text-cream-300/85 font-light mt-4 leading-relaxed">
            Move away from forgettable generic promotional giveaways. We craft high-utility vacuum tumblers, monogram ceramic mugs, and custom coffee hampers etched with your brand logo and each employee’s name.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORPORATE_PERKS.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-forest-950/70 border border-lime-500/20 shadow-soft hover:border-lime-400/40 transition-all duration-300"
            >
              <div className="p-3 rounded-2xl bg-forest-900 w-fit mb-4 border border-white/5">
                {perkIcons[idx]}
              </div>
              <h3 className="font-serif text-lg font-bold text-cream-100 mb-2">
                {perk.title}
              </h3>
              <p className="text-xs text-cream-300/80 font-light leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pitch Card & Bulk Quote CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-950 border border-lime-500/30 shadow-lift flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Minimum order batch starts from just 15 units</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
              Need a custom pitch proposal or sample box?
            </h4>
            <p className="text-sm text-cream-300/80 font-light mt-1">
              Tell us your approximate headcount and date. Our studio will share digital mockups within 24 hours.
            </p>
          </div>

          <button
            onClick={handleBulkEnquiry}
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-lift hover:shadow-glow-lime transition-all active:scale-95"
          >
            <span>Enquire For Corporate Bulk Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
