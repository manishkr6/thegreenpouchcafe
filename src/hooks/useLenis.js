import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    // Make lenis globally available for smooth anchor scroll triggers
    window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}

export function scrollToAnchor(elementId, offset = -70) {
  const el = document.getElementById(elementId);
  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
