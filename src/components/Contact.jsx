import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "./ui/InstagramIcon";
import confetti from "canvas-confetti";
import { BRAND_CONFIG } from "../data/content";
import { validateEmail, validateIndianPhone, validateRequired } from "../lib/validators";
import { submitWeb3Form } from "../lib/web3forms";

const ENQUIRY_OPTIONS = [
  "Personalised Gift",
  "Birthday & Gathering",
  "Cafe Visit / Reservation",
  "Corporate Gifting",
  "Other / Collaboration",
];

export function Contact({ preselectedCategory }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Personalised Gift",
    preferredDate: "",
    message: "",
    botcheck: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  // Sync preselected category from props (e.g. clicking "Enquire" on mugs, frames, etc.)
  useEffect(() => {
    if (preselectedCategory) {
      // Map category name to valid option
      const lower = preselectedCategory.toLowerCase();
      let matchedOption = "Personalised Gift";

      if (lower.includes("birthday") || lower.includes("gathering") || lower.includes("celebration")) {
        matchedOption = "Birthday & Gathering";
      } else if (lower.includes("cafe") || lower.includes("order") || lower.includes("table")) {
        matchedOption = "Cafe Visit / Reservation";
      } else if (lower.includes("corporate") || lower.includes("bulk")) {
        matchedOption = "Corporate Gifting";
      }

      setFormData((prev) => ({
        ...prev,
        enquiryType: matchedOption,
        message: prev.message || `Hi! I would like to enquire about: ${preselectedCategory}`,
      }));
    }
  }, [preselectedCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const nameErr = validateRequired(formData.name, "Full Name");
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateIndianPhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const msgErr = validateRequired(formData.message, "Message");
    if (msgErr) newErrors.message = msgErr;
    else if (formData.message.trim().length < 8) {
      newErrors.message = "Please provide a little more detail (at least 8 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitWeb3Form(formData);
      setStatus("success");

      // Celebrate with confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#8DC63F", "#D4AF37", "#0F1A12", "#ffffff"],
        });
      } catch (err) {
        // ignore if canvas blocked
      }

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "Personalised Gift",
        preferredDate: "",
        message: "",
        botcheck: "",
      });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit enquiry. Please try again or WhatsApp us.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-forest-950 text-cream-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-lime-500/30 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>Connect & Customise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-100 leading-[1.15]">
            Let’s craft something memorable.
          </h2>
          <p className="text-base sm:text-lg text-cream-300/80 font-light mt-4 leading-relaxed">
            Planning a birthday, craving specialty coffee, or customizing a personalized gift? Send us a message or visit us in Thane.
          </p>
        </div>

        {/* Split Layout: Contact Info & Map (Left) vs Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="p-8 rounded-3xl bg-forest-900/90 border border-lime-500/20 shadow-lift flex flex-col gap-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-forest-950 border border-lime-500/30 text-lime-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-cream-100">
                    Visit Our Cafe & Studio
                  </h4>
                  <p className="text-xs text-cream-300/85 font-light mt-1 leading-relaxed">
                    {BRAND_CONFIG.address.line1}<br />
                    {BRAND_CONFIG.address.line2}<br />
                    {BRAND_CONFIG.address.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-forest-950 border border-lime-500/30 text-lime-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-cream-100">
                    Call / WhatsApp Directly
                  </h4>
                  <p className="text-xs text-cream-300/85 font-light mt-1">
                    {BRAND_CONFIG.phoneDisplay}
                  </p>
                  <a
                    href={BRAND_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-lime-400 font-semibold mt-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Reply</span>
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-forest-950 border border-lime-500/30 text-lime-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-cream-100">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-cream-300/85 font-light mt-1 leading-relaxed">
                    {BRAND_CONFIG.timings.weekdays}<br />
                    <span className="text-gold-400 font-medium">{BRAND_CONFIG.timings.closed}</span>
                  </p>
                </div>
              </div>

              {/* Socials & Email */}
              <div className="pt-6 border-t border-forest-800 flex items-center justify-between">
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cream-200 hover:text-lime-400 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-lime-400" />
                  <span>{BRAND_CONFIG.instagramHandle}</span>
                </a>

                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cream-200 hover:text-lime-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-lime-400" />
                  <span>{BRAND_CONFIG.email}</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map Card */}
            <div className="rounded-3xl overflow-hidden border border-lime-500/20 shadow-lift h-60 bg-forest-950 relative">
              <iframe
                title="The Green Pouch Cafe Location in Thane"
                src={BRAND_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-forest-900/90 text-[11px] font-semibold text-lime-400 backdrop-blur-md border border-lime-500/30 pointer-events-none">
                Thane West, Maharashtra
              </div>
            </div>

          </div>

          {/* Right Column: Web3Forms Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-forest-900/90 border border-lime-500/25 shadow-2xl relative">
              
              <div className="mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
                  Send Your Custom Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-cream-300 font-light mt-1">
                  We reply within a few hours with digital mockups or reservation confirmation.
                </p>
              </div>

              {/* Success Notification State */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-forest-950 border border-lime-400/40 text-center my-6 shadow-glow-lime"
                  >
                    <div className="w-16 h-16 rounded-full bg-lime-500/20 border border-lime-400 flex items-center justify-center mx-auto mb-4 text-lime-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-cream-100 mb-2">
                      Thank You! Message Received.
                    </h4>
                    <p className="text-sm text-cream-300 font-light max-w-md mx-auto leading-relaxed mb-6">
                      Our studio team will review your enquiry and contact you on WhatsApp / Email shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-lime-500 hover:bg-lime-400 text-forest-950 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Notification State */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-cream-100 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2 text-rose-300">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-xs font-bold text-rose-300 hover:text-white underline shrink-0"
                    >
                      Retry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Form */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Honeypot field for bot protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={Boolean(formData.botcheck)}
                    onChange={(e) => setFormData((prev) => ({ ...prev, botcheck: e.target.checked }))}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-2">
                        Full Name <span className="text-lime-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-4 py-3 rounded-2xl bg-forest-950 border ${
                          errors.name ? "border-rose-500" : "border-forest-700 focus:border-lime-400"
                        } text-cream-100 text-sm placeholder:text-forest-600 focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-2">
                        Phone (WhatsApp) <span className="text-lime-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98200 12345"
                        className={`w-full px-4 py-3 rounded-2xl bg-forest-950 border ${
                          errors.phone ? "border-rose-500" : "border-forest-700 focus:border-lime-400"
                        } text-cream-100 text-sm placeholder:text-forest-600 focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1.5">{errors.phone}</p>
                      )}
                    </div>

                  </div>

                  {/* Email & Enquiry Type Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-2">
                        Email Address <span className="text-lime-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. priya@gmail.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-forest-950 border ${
                          errors.email ? "border-rose-500" : "border-forest-700 focus:border-lime-400"
                        } text-cream-100 text-sm placeholder:text-forest-600 focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1.5">{errors.email}</p>
                      )}
                    </div>

                    {/* Enquiry Type Select */}
                    <div>
                      <label htmlFor="enquiryType" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-2">
                        Enquiry Type <span className="text-lime-400">*</span>
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-forest-950 border border-forest-700 focus:border-lime-400 text-cream-100 text-sm focus:outline-none transition-colors"
                      >
                        {ENQUIRY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-forest-950 text-cream-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Optional Preferred Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-2">
                      Preferred Date / Celebration Date (Optional)
                    </label>
                    <div className="relative">
                      <input
                        id="preferredDate"
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-forest-950 border border-forest-700 focus:border-lime-400 text-cream-100 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-2">
                      Your Message / Custom Details <span className="text-lime-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you'd like to customise (name on mug, photo, bulk count, or birthday group size)..."
                      className={`w-full px-4 py-3 rounded-2xl bg-forest-950 border ${
                        errors.message ? "border-rose-500" : "border-forest-700 focus:border-lime-400"
                      } text-cream-100 text-sm placeholder:text-forest-600 focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-lime-500 hover:bg-lime-400 disabled:bg-lime-700 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-lift hover:shadow-glow-lime transition-all duration-300 disabled:opacity-70 active:scale-98"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-forest-950" />
                          <span>Sending Your Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4 text-forest-950" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-cream-400 pt-1">
                    Powered by secure Web3Forms • We respect your privacy & reply promptly.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
