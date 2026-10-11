import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS, BRAND_CONFIG } from "../data/content";

function AccordionItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl border border-forest-900/10 bg-white overflow-hidden shadow-soft transition-all duration-200"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg sm:text-xl font-bold text-forest-900 leading-snug">
          {item.question}
        </span>
        <div
          className={`shrink-0 p-2 rounded-full transition-colors ${
            isOpen ? "bg-lime-500 text-forest-950" : "bg-cream-100 text-forest-800"
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-forest-800/80 font-light leading-relaxed border-t border-forest-900/5">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-cream-100 text-forest-900 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-lime-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-forest-800/80 font-light mt-4 leading-relaxed">
            Everything you need to know about customisation turnaround, pan-India delivery, cafe reservations, and corporate orders.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              item={faq}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-cream-50 border border-forest-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-forest-900">
              Have a special custom inquiry or urgent same-day request?
            </h4>
            <p className="text-xs text-forest-700/80 mt-0.5">
              Our studio team is available on WhatsApp daily from 11:00 AM to 11:00 PM.
            </p>
          </div>
          <a
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
