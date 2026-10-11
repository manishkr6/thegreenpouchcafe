import React from "react";
import { ArrowUp, MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import { InstagramIcon } from "./ui/InstagramIcon";
import { Logo } from "./ui/Logo";
import { BRAND_CONFIG } from "../data/content";
import { scrollToAnchor } from "../hooks/useLenis";

export function Footer() {
  const scrollToTop = () => {
    scrollToAnchor("hero", 0);
  };

  return (
    <footer className="relative bg-forest-950 text-cream-100 border-t border-lime-500/15 overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-forest-800">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo variant="dark" showTagline={true} className="mb-4" />
            
            <p className="text-sm text-cream-300/80 font-light max-w-sm leading-relaxed mb-6">
              A little escape in the middle of the city. Specialty coffee, artisanal thin-crust pizzas, intimate celebrations, and bespoke personalized gifting in Thane, Maharashtra.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-forest-900 border border-lime-500/20 text-cream-200 hover:text-lime-400 hover:border-lime-400 transition-colors"
                aria-label="Instagram @thegreenpouchcafe"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-forest-900 border border-lime-500/20 text-cream-200 hover:text-lime-400 hover:border-lime-400 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="p-3 rounded-full bg-forest-900 border border-lime-500/20 text-cream-200 hover:text-lime-400 hover:border-lime-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-cream-100 uppercase tracking-wider mb-2">
              Explore
            </h4>
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "Our Story & Philosophy" },
              { id: "cafe", label: "The Cafe Menu" },
              { id: "gifting", label: "Personalised Gifting" },
              { id: "collection", label: "Premium Mug Collection" },
              { id: "corporate", label: "Corporate & Bulk Gifting" },
              { id: "festive", label: "Festive Specials" },
              { id: "contact", label: "Visit & Enquire" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToAnchor(link.id, -70)}
                className="text-left text-xs text-cream-300/80 hover:text-lime-400 transition-colors py-0.5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Visit & Timings (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-cream-100 uppercase tracking-wider mb-2">
              Cafe & Studio Hours
            </h4>
            <p className="text-xs text-cream-300 leading-relaxed">
              <span className="font-semibold text-cream-100">Tuesday – Sunday:</span><br />
              11:00 AM – 11:00 PM
            </p>
            <p className="text-xs text-gold-400 font-medium">
              Mondays: Closed for roasting & studio crafting
            </p>

            <div className="mt-4 pt-4 border-t border-forest-800">
              <p className="text-xs text-cream-400 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Thane West, Maharashtra 400602, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Large Decorative Wordmark */}
        <div className="py-12 border-b border-forest-800 select-none overflow-hidden text-center">
          <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-forest-850 tracking-tighter uppercase block hover:text-forest-800 transition-colors duration-500">
            The Green Pouch
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-lime-400 fill-current" />
            <span>for The Green Pouch Cafe • Thane, Maharashtra</span>
          </p>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} The Green Pouch Cafe. All rights reserved.</span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-forest-900 border border-lime-500/20 text-cream-200 hover:text-lime-400 hover:border-lime-400 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
