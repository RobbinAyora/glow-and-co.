"use client";

import { Home, Search, Heart, User } from "lucide-react";

const services = [
  {
    title: "Hair",
    color: "bg-rose-300",
    iconColor: "text-rose-500",
    gradient: "from-rose-100 to-rose-200",
  },
  {
    title: "Nails",
    color: "bg-violet-300",
    iconColor: "text-violet-500",
    gradient: "from-violet-100 to-violet-200",
  },
  {
    title: "Facial",
    color: "bg-amber-200",
    iconColor: "text-amber-600",
    gradient: "from-amber-100 to-amber-200",
  },
  {
    title: "Makeup",
    color: "bg-pink-300",
    iconColor: "text-pink-500",
    gradient: "from-pink-100 to-pink-200",
  },
];

const bottomNav = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: Heart, label: "Favorites" },
  { icon: User, label: "Profile" },
];

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[520px] w-[280px] rounded-[2.5rem] bg-neutral-900 p-3 shadow-2xl shadow-neutral-900/40">
      <div className="absolute left-1/2 top-0 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />

      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-neutral-950">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 pt-10 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-400/20">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
              </div>
              <span className="text-sm font-semibold text-white">Glow & Co.</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-rose-400" />
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-20">
            <div className="mb-5 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 p-5 text-white shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider opacity-80">
                Welcome back
              </p>
              <p className="mt-1 text-lg font-semibold leading-tight">
                More than beauty, it&apos;s a lifestyle.
              </p>
              <button className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-105">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Our Services
            </p>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg`}
                >
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${service.color} bg-opacity-60`}
                  >
                    <span className={`text-lg font-bold ${service.iconColor}`}>
                      {service.title[0]}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-neutral-800">
                    {service.title}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    Premium care
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-neutral-900/90 px-6 py-3 backdrop-blur-md">
            <div className="flex items-center justify-around">
              {bottomNav.map((item) => (
                <button
                  key={item.label}
                  className="flex flex-col items-center gap-1 text-neutral-500 transition-colors duration-200 hover:text-rose-400"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
