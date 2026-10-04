"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    // Respect users who prefer reduced motion.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCount(value);
      hasAnimated.current = true;

      return;
    }

    const startAnimation = () => {
      // Prevent the animation from running more than once.
      if (hasAnimated.current) {
        return;
      }

      hasAnimated.current = true;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out effect.
        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(
          value * easedProgress,
        );

        setCount(currentValue);

        if (progress < 1) {
          animationFrame.current =
            requestAnimationFrame(animate);
        } else {
          // Always finish exactly on the target number.
          setCount(value);
        }
      };

      animationFrame.current =
        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          startAnimation();

          // We only need to detect the first appearance.
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [value, duration]);

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${value}${suffix}`}
    >
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}