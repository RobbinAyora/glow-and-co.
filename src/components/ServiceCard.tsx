"use client";

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  textColor: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  gradient,
  textColor,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${gradient} p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
    >
      <div className="relative z-10">
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 ${textColor} shadow-sm`}
        >
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />
    </div>
  );
}
