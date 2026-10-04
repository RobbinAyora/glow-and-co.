"use client";

import ServiceCard from "./ServiceCard";
import { Scissors, Palette, Droplets, Wand2 } from "lucide-react";

const services = [
  {
    title: "Hair Styling",
    description: "Expert cuts, colors, and treatments tailored to your unique style.",
    icon: Scissors,
    gradient: "from-rose-100 to-rose-50",
    textColor: "text-rose-600",
  },
  {
    title: "Nail Artistry",
    description: "Luxurious manicures and pedicures with premium products.",
    icon: Palette,
    gradient: "from-violet-100 to-violet-50",
    textColor: "text-violet-600",
  },
  {
    title: "Skin & Facial",
    description: "Rejuvenating facials and skincare for a radiant glow.",
    icon: Droplets,
    gradient: "from-amber-100 to-amber-50",
    textColor: "text-amber-600",
  },
  {
    title: "Makeup",
    description: "Professional makeup for every occasion, from natural to glam.",
    icon: Wand2,
    gradient: "from-pink-100 to-pink-50",
    textColor: "text-pink-600",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          gradient={service.gradient}
          textColor={service.textColor}
        />
      ))}
    </div>
  );
}
