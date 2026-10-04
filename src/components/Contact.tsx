"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your form submission logic here
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fff8fb] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ffdce7] opacity-40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#ffe9f0] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5d7d]">
            Get In Touch
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-[#171717] md:text-5xl">
            Let&apos;s make you glow.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Have a question, want to book an appointment, or simply want to
            know more about our services? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(80,40,60,0.08)] lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT - CONTACT FORM */}
          {/* ========================= */}

          <div className="p-7 md:p-10 lg:p-12">

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#171717]">
                Send us a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-[#eadde2] bg-[#fffafb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#ff8da5] focus:ring-4 focus:ring-[#ff5d7d]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    className="w-full rounded-2xl border border-[#eadde2] bg-[#fffafb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#ff8da5] focus:ring-4 focus:ring-[#ff5d7d]/10"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl border border-[#eadde2] bg-[#fffafb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#ff8da5] focus:ring-4 focus:ring-[#ff5d7d]/10"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  What service are you interested in?
                </label>

                <select
                  id="service"
                  name="service"
                  className="w-full appearance-none rounded-2xl border border-[#eadde2] bg-[#fffafb] px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-[#ff8da5] focus:ring-4 focus:ring-[#ff5d7d]/10"
                >
                  <option value="">Select a service</option>
                  <option value="hair">Hair</option>
                  <option value="makeup">Makeup</option>
                  <option value="nails">Nails</option>
                  <option value="facials">Facials & Skin Care</option>
                  <option value="bridal">Bridal Beauty</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none rounded-2xl border border-[#eadde2] bg-[#fffafb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#ff8da5] focus:ring-4 focus:ring-[#ff5d7d]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff5d7d] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(255,93,125,0.25)] transition hover:-translate-y-0.5 hover:bg-[#ff4d70] active:translate-y-0"
              >
                Send Message
                <span className="text-lg">→</span>
              </button>

            </form>
          </div>

          {/* ========================= */}
          {/* RIGHT - MAP */}
          {/* ========================= */}

          <div className="relative min-h-[550px] bg-[#f7e9ee]">

            {/* Google Map */}
            <iframe
              title="Glow & Co. Location"
              src="https://www.google.com/maps?q=Nairobi%2C%20Kenya&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Location card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur-md">

              <div className="flex items-start gap-4">

                {/* Location Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffe1e8] text-[#ff5d7d]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-[#171717]">
                    Glow & Co. Beauty & Salon
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Nairobi, Kenya
                  </p>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-[#ff5d7d] hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* CONTACT INFORMATION */}
        {/* ========================= */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {/* Phone */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffe1e8] text-[#ff5d7d]">
              ☎
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Call Us
            </p>

            <a
              href="tel:+254700000000"
              className="mt-1 block font-semibold text-[#171717] hover:text-[#ff5d7d]"
            >
              +254 700 000 000
            </a>
          </div>

          {/* Email */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffe1e8] text-[#ff5d7d]">
              ✉
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Email Us
            </p>

            <a
              href="mailto:hello@glowandco.com"
              className="mt-1 block font-semibold text-[#171717] hover:text-[#ff5d7d]"
            >
              hello@glowandco.com
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffe1e8] text-[#ff5d7d]">
              ◷
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Opening Hours
            </p>

            <p className="mt-1 font-semibold text-[#171717]">
              Mon – Sat · 9:00 AM – 7:00 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}