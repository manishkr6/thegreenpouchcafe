import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const cursorX = useSpring(rawX, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(rawY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on desktop fine pointer
    const isFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [rawX, rawY]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-lime-400/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? 44 : 22,
          height: isHovered ? 44 : 22,
          backgroundColor: isHovered ? "rgba(141, 198, 63, 0.12)" : "transparent",
        }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-lime-400 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-glow-lime"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  );
}
