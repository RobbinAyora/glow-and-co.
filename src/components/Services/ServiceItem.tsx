"use client";

import { forwardRef } from "react";
import type { Service } from "./servicesData";

type Props = {
  service: Service;
  isActive: boolean;
  onSelect: (index: number) => void;
  index: number;
  activeIndex: number;
};

const ServiceItem = forwardRef<HTMLButtonElement, Props>(
  function ServiceItem({ service, isActive, onSelect, index, activeIndex }, ref) {
    const offset = index - activeIndex;
    const translateY = isActive
      ? 0
      : Math.sign(offset) * Math.min(Math.abs(offset) * 4, 16);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onSelect(index)}
        aria-pressed={isActive}
        className={`group relative w-full cursor-pointer text-left transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isActive
            ? "opacity-100"
            : "opacity-50 hover:opacity-80 focus-visible:opacity-90"
        }`}
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <div
          className={`flex items-baseline gap-6 border-b py-6 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive ? "border-rose-300" : "border-neutral-200"
          }`}
        >
          <span
            className={`font-mono text-sm tracking-widest transition-all duration-1000 ${
              isActive ? "text-rose-500" : "text-neutral-400"
            }`}
          >
            {service.number}
          </span>

          <div className="flex-1">
            <h3
              className={`font-semibold text-neutral-900 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "text-3xl md:text-4xl lg:text-5xl tracking-tight"
                  : "text-xl md:text-2xl lg:text-3xl font-medium"
              }`}
            >
              {service.title}
            </h3>

            <div
              className={`grid transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-md text-base leading-relaxed text-neutral-600">
                  {service.longDescription}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-12 bg-rose-400" />
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-rose-500">
                    {service.description}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <span
            aria-hidden
            className={`hidden self-start pt-2 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-1000 md:block ${
              isActive ? "text-rose-500 opacity-100" : "text-neutral-300 opacity-0"
            }`}
          >
            ●
          </span>
        </div>
      </button>
    );
  }
);

export default ServiceItem;
