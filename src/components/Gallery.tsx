"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Hair", "Nails", "Makeup", "Skin"];

const galleryItems = [
  {
    id: 1,
    category: "Hair",
    title: "Hair Transformation",
    image: "/images/gallery/hair_1.jfif",
  },
  {
    id: 2,
    category: "Makeup",
    title: "Soft Glam",
    image: "/images/gallery/makeup_1.jfif",
  },
  {
    id: 3,
    category: "Nails",
    title: "Signature Nails",
    image: "/images/gallery/nail-care.jfif",
  },
  {
    id: 4,
    category: "Skin",
    title: "Glow Facial",
    image: "/images/gallery/skin_1.jfif",
  },
  {
    id: 5,
    category: "Hair",
    title: "Balayage & Color",
    image: "/images/gallery/hair_2.jfif",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#fff8fb] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ffdce7] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#ffe9f0] opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ff5d7d]">
            Our Work
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-[#171717] md:text-5xl">
            Beauty in every detail.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Explore a collection of our favorite looks, transformations,
            and beauty moments created by the Glow & Co. team.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#ff5d7d] text-white shadow-[0_8px_20px_rgba(255,93,125,0.25)]"
                    : "border border-[#eadde2] bg-white text-gray-600 hover:border-[#ffb2c2] hover:text-[#ff5d7d]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Large featured image */}
          {filteredItems.length > 0 && (
            <div className="group relative overflow-hidden rounded-[28px] bg-white shadow-sm lg:col-span-6">
              <div className="relative h-[520px] w-full">
                <Image
                  src={filteredItems[0].image}
                  alt={filteredItems[0].title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="mb-3 inline-block rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#ff5d7d] backdrop-blur">
                    {filteredItems[0].category}
                  </span>

                  <h3 className="text-2xl font-semibold text-white">
                    {filteredItems[0].title}
                  </h3>

                  <p className="mt-1 text-sm text-white/80">
                    Discover the Glow & Co. difference.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Smaller images */}
          <div className="grid grid-cols-2 gap-5 lg:col-span-6">
            {filteredItems.slice(1, 5).map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[24px] bg-white shadow-sm"
              >
                <div className="relative h-[248px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/30" />

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm backdrop-blur">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff5d7d] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(255,93,125,0.25)] transition hover:-translate-y-0.5 hover:bg-[#ff4d70]"
          >
            Book Your Glow
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}