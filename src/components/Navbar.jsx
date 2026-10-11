import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Coffee, Gift } from "lucide-react";
import { Logo } from "./ui/Logo";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { scrollToAnchor } from "../hooks/useLenis";
import { BRAND_CONFIG } from "../data/content";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "cafe", label: "Cafe" },
  { id: "gifting", label: "Gifting" },
  { id: "collection", label: "Collection" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id),
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    scrollToAnchor(id, -80);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-forest-950/90 backdrop-blur-md py-3 border-b border-lime-500/20 shadow-soft"
            : "bg-forest-950/70 backdrop-blur-sm py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick("hero")}
              className="text-left shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-lg group"
              aria-label="The Green Pouch Cafe Home"
            >
              <Logo variant="dark" />
            </button>

            {/* Desktop Navigation Links - Prominent & Balanced */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3 px-5 lg:px-6 py-2.5 rounded-full bg-forest-900/90 border border-lime-500/30 backdrop-blur-md shadow-lg shrink">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 lg:px-5 py-2 text-[15px] lg:text-base font-semibold tracking-normal transition-colors duration-200 rounded-full whitespace-nowrap ${
                      isActive
                        ? "text-lime-400 font-bold"
                        : "text-cream-100/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-forest-800 border border-lime-500/40 rounded-full -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right CTAs (Desktop) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry("General Enquiry");
                  scrollToAnchor("contact", -80);
                }}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 text-xs font-bold tracking-wider uppercase shadow-lift transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                <span>Order / Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry("General Enquiry");
                  scrollToAnchor("contact", -80);
                }}
                className="inline-flex sm:hidden items-center gap-1 px-3 py-1.5 rounded-full bg-lime-500 text-forest-950 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-forest-900 border border-lime-500/30 text-cream-100 hover:text-lime-400 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden bg-forest-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Top Bar with Logo & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-forest-800">
              <Logo variant="dark" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-2xl bg-forest-900 border border-forest-800 text-cream-100 hover:text-lime-400"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-2 py-6 my-auto">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-left text-base font-medium transition-all ${
                      isActive
                        ? "bg-lime-500/15 text-lime-400 border-l-4 border-lime-500"
                        : "text-cream-200 hover:bg-forest-900 hover:text-cream-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />}
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom drawer actions */}
            <div className="pt-6 border-t border-forest-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry("Personalised Gift");
                  scrollToAnchor("contact", -80);
                }}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-lime-500 text-forest-950 font-bold text-sm tracking-wide shadow-lift"
              >
                <Gift className="w-4 h-4" />
                Customise a Gift Now
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry("Birthday & Gathering");
                  scrollToAnchor("contact", -80);
                }}
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-forest-900 border border-lime-500/30 text-cream-100 hover:text-lime-400 text-xs font-semibold"
              >
                <Coffee className="w-4 h-4 text-lime-400" />
                Book Cafe Table / Gathering
              </button>

              <p className="text-center text-[11px] text-cream-400 mt-2">
                Thane, Maharashtra • @thegreenpouchcafe
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
