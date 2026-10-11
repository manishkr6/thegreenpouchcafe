import { useState, useEffect } from "react";

export function useCountUp(targetNumber, isVisible, duration = 1800, isDecimal = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * targetNumber;

      if (isDecimal) {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetNumber, isVisible, duration, isDecimal]);

  return count;
}
