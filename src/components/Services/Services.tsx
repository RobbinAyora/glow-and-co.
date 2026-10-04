"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "./servicesData";
import ServiceImage from "./ServiceImage";
import ServiceItem from "./ServiceItem";

const DISPLAY_DURATION = 4500;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      goNext();
    }, DISPLAY_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, isPaused, goNext]);

  const handleSelect = useCallback(
    (index: number) => {
      goTo(index);
    },
    [goTo]
  );

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-3 sm:mb-14 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-rose-400" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-rose-500">
              Our Services
            </span>
          </div>
          <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Beauty designed
            <br className="hidden sm:block" /> around you.
          </h2>
          <p className="mt-2 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
            Five signature rituals, each delivered with intention. Watch them
            unfold automatically, or choose a service to see it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <ServiceImage service={activeService} key={activeService.id} />
              <div className="mt-4 hidden items-center justify-between rounded-full border border-neutral-200 bg-white/70 px-5 py-2.5 backdrop-blur-md lg:flex">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">
                  Now viewing
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  {activeService.title}
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ol className="flex flex-col">
              {services.map((service, index) => (
                <li key={service.id}>
                  <ServiceItem
                    service={service}
                    isActive={index === activeIndex}
                    onSelect={() => handleSelect(index)}
                    index={index}
                    activeIndex={activeIndex}
                  />
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-center justify-between rounded-2xl border border-neutral-200 bg-white/60 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-500">
                  {activeService.number}
                </span>
                <span className="text-sm text-neutral-600">
                  of {services.length.toString().padStart(2, "0")} services
                </span>
              </div>
              <ChevronDown className="h-5 w-5 animate-bounce text-rose-400" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeScaleIn {
          0% {
            opacity: 0;
            transform: scale(1.06);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [id="services"] *, [id="services"] *::before, [id="services"] *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
