"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Users,
  Award,
} from "lucide-react";

import AnimatedCounter from "./AnimatedCounter";

const statistics = [
  {
    value: 2500,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: 8,
    suffix: "+",
    label: "Years of Experience",
    icon: Award,
  },
  {
    value: 25,
    suffix: "+",
    label: "Beauty Services",
    icon: Sparkles,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: Heart,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fff7fa] px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-80px] top-24 h-40 w-40 rounded-full bg-[#ffdce5] opacity-40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-[-80px] h-52 w-52 rounded-full bg-[#ffe9ef] opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =========================================================
              LEFT — ABOUT CONTENT
          ========================================================= */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff5c7a]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5c7a]">
                About Glow & Co.
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
              Beauty, Care
              <br />
              <span className="text-[#ff5c7a]">& Confidence.</span>
            </h2>

            {/* Main copy */}
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#666666] sm:text-base">
              <p>
                At Glow & Co., beauty is more than a service — it&apos;s
                an experience designed to make you feel confident, cared
                for, and completely yourself.
              </p>

              <p>
                From beautiful hair and flawless nails to relaxing beauty
                treatments, our team combines professional expertise with
                a warm, personal approach. Every appointment is designed
                around you, your style, and the way you want to feel when
                you leave.
              </p>

              <p>
                We believe great beauty care should feel effortless,
                welcoming, and empowering. That&apos;s why we focus on
                quality, attention to detail, and creating an environment
                where every client can truly relax and glow.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#ff5c7a] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,92,122,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff4d6e] hover:shadow-[0_14px_30px_rgba(255,92,122,0.3)] focus:outline-none focus:ring-2 focus:ring-[#ff5c7a] focus:ring-offset-2"
              >
                Discover Our Story

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* =========================================================
              RIGHT — STATISTICS CARD
          ========================================================= */}
          <div className="relative">
            {/* Small decorative dots */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 z-10 flex gap-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#ff5c7a]" />
              <span className="h-2 w-2 rounded-full bg-[#ffc4d1]" />
              <span className="h-2 w-2 rounded-full bg-[#ffe1e8]" />
            </div>

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#f7dce3] bg-white p-7 shadow-[0_20px_60px_rgba(255,92,122,0.09)] sm:p-9 lg:p-10">
              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#fff0f4]"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[-60px] left-[-60px] h-44 w-44 rounded-full bg-[#fff7fa]"
              />

              {/* Card content */}
              <div className="relative">
                {/* Card eyebrow */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c7a]">
                      Glowing Results
                    </p>

                    <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight tracking-[-0.025em] text-[#111111] sm:text-3xl">
                      Our numbers speak for themselves.
                    </h3>
                  </div>

                  {/* Decorative icon */}
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#ff5c7a] sm:flex">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-[#f3e4e8]" />

                {/* Statistics */}
                <div className="grid grid-cols-2">
                  {statistics.map((stat, index) => {
                    const Icon = stat.icon;

                    const isRightColumn = index % 2 === 1;
                    const isBottomRow = index >= 2;

                    return (
                      <div
                        key={stat.label}
                        className={[
                          "relative p-5 sm:p-6",
                          !isRightColumn
                            ? "border-r border-[#f3e4e8]"
                            : "",
                          !isBottomRow
                            ? "border-b border-[#f3e4e8]"
                            : "",
                        ].join(" ")}
                      >
                        {/* Icon */}
                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f4] text-[#ff5c7a]">
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        {/* Animated number */}
                        <div className="text-3xl font-black tracking-[-0.04em] text-[#111111] sm:text-4xl">
                          <AnimatedCounter
                            value={stat.value}
                            suffix={stat.suffix}
                            duration={1800}
                          />
                        </div>

                        {/* Label */}
                        <p className="mt-1.5 text-xs font-medium leading-5 text-[#888888] sm:text-sm">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom message */}
                <div className="mt-7 flex items-center gap-3 rounded-2xl bg-[#fff7fa] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#ff5c7a] shadow-sm">
                    <Heart className="h-4 w-4 fill-current" />
                  </div>

                  <p className="text-xs font-medium leading-5 text-[#777777] sm:text-sm">
                    Every number represents a client who trusted us
                    with their glow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}