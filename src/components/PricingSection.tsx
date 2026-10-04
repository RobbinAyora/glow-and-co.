"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Essential",
    description: "Simple beauty essentials for your everyday look.",
    price: "1,500",
    popular: false,
    features: [
      "Hair Styling",
      "Basic Manicure",
      "Blow Dry",
      "Beauty Consultation",
    ],
  },
  {
    name: "Signature",
    description: "Our most-loved combination for a complete beauty refresh.",
    price: "3,500",
    popular: true,
    features: [
      "Premium Hair Styling",
      "Gel Manicure",
      "Blow Dry & Treatment",
      "Eyebrow Shaping",
      "Beauty Consultation",
    ],
  },
  {
    name: "Luxury",
    description: "A complete head-to-toe beauty experience.",
    price: "6,500",
    popular: false,
    features: [
      "Premium Hair Styling",
      "Gel Manicure & Pedicure",
      "Deep Hair Treatment",
      "Makeup Application",
      "Eyebrow & Lash Styling",
      "Personal Beauty Consultation",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#fff8f8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#d97979] shadow-sm">
            <Sparkles size={15} />
            Our Pricing
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl">
            Beauty that fits
            <span className="text-[#d97979]"> your budget.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Choose the beauty experience that feels right for you.
            Simple pricing, beautiful results, and no hidden surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[28px] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                plan.popular
                  ? "border-[#d97979] bg-[#d97979] text-white shadow-lg shadow-[#d97979]/20"
                  : "border-[#eadede] bg-white text-[#171717] shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-[#171717] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-md">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    plan.popular ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-3 min-h-[48px] text-sm leading-6 ${
                    plan.popular ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7 border-b border-current/10 pb-7">
                <div className="flex items-end gap-2">
                  <span
                    className={`text-sm font-medium ${
                      plan.popular ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    KSh
                  </span>

                  <span className="text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>

                  <span
                    className={`mb-1 text-sm ${
                      plan.popular ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    / session
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 py-7">
                <p
                  className={`mb-5 text-sm font-semibold ${
                    plan.popular ? "text-white" : "text-[#171717]"
                  }`}
                >
                  What's included
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular
                            ? "bg-white/20 text-white"
                            : "bg-[#fff0f0] text-[#d97979]"
                        }`}
                      >
                        <Check size={13} strokeWidth={2.5} />
                      </span>

                      <span
                        className={
                          plan.popular ? "text-white/90" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-[#d97979] hover:bg-[#fff4f4]"
                    : "bg-[#171717] text-white hover:bg-[#d97979]"
                }`}
              >
                Book This Package

                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Looking for something different?{" "}
            <a
              href="#contact"
              className="font-semibold text-[#d97979] underline-offset-4 hover:underline"
            >
              Contact us for a custom beauty package.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}