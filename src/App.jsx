import React, { useState } from "react";
import { useLenis } from "./hooks/useLenis";
import { Preloader } from "./components/ui/Preloader";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CustomCursor } from "./components/ui/CustomCursor";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Cafe } from "./components/Cafe";
import { Gifting } from "./components/Gifting";
import { Process } from "./components/Process";
import { Collection } from "./components/Collection";
import { Corporate } from "./components/Corporate";
import { Gallery } from "./components/Gallery";
import { Festive } from "./components/Festive";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // State to pass pre-selected category down to contact form
  const [preselectedCategory, setPreselectedCategory] = useState("Personalised Gift");

  const handleSelectCategory = (categoryName) => {
    setPreselectedCategory(categoryName);
  };

  return (
    <div className="relative min-h-screen bg-cream-100 text-forest-900 selection:bg-lime-500 selection:text-forest-950 font-sans">
      {/* 1. Page Load Intro Preloader */}
      <Preloader />

      {/* 2. Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* 3. Custom Cursor Follower (Desktop only) */}
      <CustomCursor />

      {/* 4. Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* 5. Sticky Glass Navbar */}
      <Navbar onOpenEnquiry={handleSelectCategory} />

      {/* Main Content Sections (In Ordered Rhythm) */}
      <main>
        {/* Section 1: Hero */}
        <Hero onSelectCategory={handleSelectCategory} />

        {/* Section 2: Infinite Marquee Strip */}
        <Marquee />

        {/* Section 3: About Story & Count-Up Stats */}
        <About />

        {/* Section 4: The Cafe & Celebration Booking */}
        <Cafe onSelectCategory={handleSelectCategory} />

        {/* Section 5: Gifting Studio Bento Grid */}
        <Gifting onSelectCategory={handleSelectCategory} />

        {/* Section 6: How Customisation Works Timeline */}
        <Process onStartCustomising={handleSelectCategory} />

        {/* Section 7: Premium Signature Mug Collection */}
        <Collection onSelectProduct={handleSelectCategory} />

        {/* Section 8: Corporate & B2B Gifting */}
        <Corporate onEnquireCorporate={handleSelectCategory} />

        {/* Section 9: Gallery & Lightbox Modal */}
        <Gallery />

        {/* Section 10: Festive Specials */}
        <Festive onSelectFestive={handleSelectCategory} />

        {/* Section 11: Community Testimonials Carousel */}
        <Testimonials />

        {/* Section 12: Frequently Asked Questions Accordion */}
        <FAQ />

        {/* Section 13: Contact & Web3Forms Form */}
        <Contact preselectedCategory={preselectedCategory} />
      </main>

      {/* Section 14: Footer */}
      <Footer />
    </div>
  );
}
