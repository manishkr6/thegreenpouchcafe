import React from "react";
import { Coffee, Gift, Sparkles, Heart, Cake, Briefcase, Star } from "lucide-react";
import { MARQUEE_ITEMS } from "../data/content";

export function Marquee() {
  const icons = [
    <Coffee className="w-4 h-4 text-lime-400" />,
    <Gift className="w-4 h-4 text-gold-400" />,
    <Cake className="w-4 h-4 text-lime-400" />,
    <Sparkles className="w-4 h-4 text-gold-400" />,
    <Briefcase className="w-4 h-4 text-lime-400" />,
    <Heart className="w-4 h-4 text-rose-400" />,
    <Star className="w-4 h-4 text-gold-400" />,
  ];

  return (
    <div
      id="marquee"
      className="relative z-20 py-4 sm:py-5 bg-forest-900 border-y border-lime-500/20 overflow-hidden select-none group"
    >
      {/* Infinite scrolling track */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* Render twice for continuous loop */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-8 px-4 shrink-0">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`${copyIndex}-${idx}`} className="flex items-center gap-6">
                <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-[0.22em] text-cream-100/90 hover:text-lime-400 transition-colors">
                  {item}
                </span>
                <span className="opacity-80">
                  {icons[idx % icons.length]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
