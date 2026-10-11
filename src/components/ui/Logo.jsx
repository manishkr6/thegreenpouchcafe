import React from "react";

export function Logo({ variant = "dark", className = "", showTagline = false }) {
  const isDark = variant === "dark"; // on dark background
  const textColor = isDark ? "text-cream-100" : "text-forest-900";
  const subColor = isDark ? "text-cream-300/80" : "text-forest-600";
  const leafStroke = "#8DC63F";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Mark */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-forest-900 border border-lime-500/30 flex items-center justify-center shadow-soft overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-transparent to-forest-950 opacity-80" />
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7 relative z-10 transition-transform duration-500 group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular pouch container */}
          <circle cx="20" cy="20" r="14" stroke={leafStroke} strokeWidth="1.8" strokeDasharray="2 3" opacity="0.7" />
          
          {/* Organic pouch silhouette */}
          <path
            d="M20 9C15 9 11 13 11 19C11 25.5 17.5 30.5 20 32C22.5 30.5 29 25.5 29 19C29 13 25 9 20 9Z"
            fill="#8DC63F"
            fillOpacity="0.25"
            stroke="#8DC63F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Sprout / coffee cherry center */}
          <circle cx="20" cy="19" r="3.2" fill="#8DC63F" />
          {/* Subtle leaf stem */}
          <path d="M20 13V15.5" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 19H17.5" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22.5 19H24" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-serif text-lg md:text-xl font-bold tracking-tight leading-none ${textColor}`}>
          The Green Pouch
        </span>
        <span className={`text-[10px] md:text-[11px] font-sans uppercase tracking-[0.22em] font-medium mt-1 ${subColor}`}>
          Cafe & Gifting Studio
        </span>
        {showTagline && (
          <span className="text-[11px] italic text-lime-400 mt-0.5">
            Thane, Maharashtra
          </span>
        )}
      </div>
    </div>
  );
}
