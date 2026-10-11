import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-950 text-cream-100"
        >
          {/* Subtle radial glow */}
          <div className="absolute w-72 h-72 rounded-full bg-lime-500/15 blur-3xl pointer-events-none" />

          {/* Animated Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-3xl bg-forest-900 border border-lime-500/40 flex items-center justify-center shadow-glow-lime">
              <motion.svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="14" stroke="#8DC63F" strokeWidth="1.8" strokeDasharray="2 3" opacity="0.7" />
                <path
                  d="M20 9C15 9 11 13 11 19C11 25.5 17.5 30.5 20 32C22.5 30.5 29 25.5 29 19C29 13 25 9 20 9Z"
                  fill="#8DC63F"
                  fillOpacity="0.3"
                  stroke="#8DC63F"
                  strokeWidth="1.8"
                />
                <circle cx="20" cy="19" r="3" fill="#8DC63F" />
              </motion.svg>
            </div>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-cream-100">
              The Green Pouch
            </h2>
            <p className="text-xs font-sans tracking-[0.28em] uppercase text-lime-400 mt-1">
              Cafe & Gifting Studio • Thane
            </p>
          </motion.div>

          {/* Elegant Loading Line */}
          <div className="w-36 h-[2px] bg-forest-800 rounded-full mt-6 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-lime-400 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
