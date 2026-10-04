"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import ImageSlider from "./ImageSlider";

const smallImage =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80";

export default function HeroGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="flex flex-col gap-6 h-full">
        {/* Large Left Hero Card */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-50 via-rose-50 to-pink-50 p-8 md:p-12">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              Beauty
              <br />
              Looks Better
              <br />
              On You
            </h1>

            <p className="mt-8 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
              Professional beauty and salon services designed to bring out your
              confidence, style and natural glow.
            </p>

            <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-rose-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition-all duration-300 hover:bg-rose-500 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5">
              Book Your Glow
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
            {["BEAUTY", "CARE", "CONFIDENCE", "ALWAYS"].map((text) => (
              <span
                key={text}
                className="text-xs font-bold tracking-[0.3em] text-neutral-400"
              >
                {text}
              </span>
            ))}
          </div>

          <div className="absolute -right-4 top-10 animate-pulse">
            <Sparkles className="h-5 w-5 text-rose-300" />
          </div>
          <div
            className="absolute -left-2 bottom-20 animate-pulse"
            style={{ animationDelay: "1000ms" }}
          >
            <Sparkles className="h-4 w-4 text-amber-200" />
          </div>
          <div
            className="absolute right-20 bottom-10 animate-pulse"
            style={{ animationDelay: "500ms" }}
          >
            <Sparkles className="h-3 w-3 text-rose-200" />
          </div>
        </div>

        {/* Smaller Image Card Below Hero */}
        <div className="relative h-48 lg:h-56 overflow-hidden rounded-[2rem]">
          <img
            src={smallImage}
            alt="Salon interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* Right Column */}
      <div className="h-full">
        {/* Large Dark Right Slider Card */}
        <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-[2rem] bg-neutral-900">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
