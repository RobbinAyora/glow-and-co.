"use client";

import { useState } from "react";
import { Flower2, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-5 md:px-10 lg:px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
            <Flower2 className="h-5 w-5 text-rose-500" />
          </div>
          <div>
            <span className="block text-lg font-semibold tracking-wide text-neutral-900">
              Glow & Co.
            </span>
            <span className="block -mt-0.5 text-[10px] font-medium tracking-[0.25em] text-neutral-400 uppercase">
              Beauty & Salon
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full bg-rose-400 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-rose-200 transition-all duration-300 hover:bg-rose-500 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5">
            Book Appointment →
          </button>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-rose-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-neutral-700" />
          ) : (
            <Menu className="h-5 w-5 text-neutral-700" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 rounded-2xl border border-neutral-100 bg-white/80 p-4 shadow-xl backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-rose-50 hover:text-neutral-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="mt-3 w-full rounded-full bg-rose-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-200 transition-all duration-300 hover:bg-rose-500">
            Book Appointment →
          </button>
        </div>
      )}
    </header>
  );
}
