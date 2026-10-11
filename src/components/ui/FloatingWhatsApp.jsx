import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { BRAND_CONFIG } from "../../data/content";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini popup card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 w-72 rounded-2xl bg-forest-900 border border-lime-500/30 p-4 text-cream-100 shadow-lift"
          >
            <div className="flex items-center justify-between pb-2 border-b border-forest-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">
                  Online for Orders
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream-300 hover:text-white transition-colors"
                aria-label="Close message"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-cream-200 mt-2 leading-relaxed">
              Hey there! Planning a birthday celebration, or looking to customize a mug or hamper in Thane? Chat with our studio team directly!
            </p>
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-forest-950 font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Start WhatsApp Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Pulsing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-lime-500/40 animate-ping opacity-75" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat with us on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
          {/* Unread badge dot */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-lime-400 border-2 border-forest-900 rounded-full" />
        </button>
      </div>
    </div>
  );
}
