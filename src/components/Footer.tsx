export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff5d7d] text-white">
                <span className="text-lg">✿</span>
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Glow & Co.
                </h3>

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Beauty & Salon
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
              Beauty looks better on you. Discover professional beauty
              services designed to bring out your confidence, style and
              natural glow.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-gray-400 transition hover:border-[#ff5d7d] hover:bg-[#ff5d7d] hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-gray-400 transition hover:border-[#ff5d7d] hover:bg-[#ff5d7d] hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-gray-400 transition hover:border-[#ff5d7d] hover:bg-[#ff5d7d] hover:text-white"
              >
                TT
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-[#ff5d7d]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold">
              Our Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Hair Styling
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Makeup
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Nails
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Facials & Skin Care
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#ff5d7d]"
                >
                  Bridal Beauty
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold">
              Visit Us
            </h4>

            <div className="space-y-4 text-sm text-gray-400">

              <p>
                Nairobi, Kenya
              </p>

              <a
                href="tel:+254700000000"
                className="block transition hover:text-[#ff5d7d]"
              >
                +254 700 000 000
              </a>

              <a
                href="mailto:hello@glowandco.com"
                className="block transition hover:text-[#ff5d7d]"
              >
                hello@glowandco.com
              </a>

              <p className="pt-2 leading-6">
                Monday – Saturday
                <br />
                9:00 AM – 7:00 PM
              </p>

            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-[#ff5d7d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff4d70]"
            >
              Book Appointment →
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">

          <p>
            © {new Date().getFullYear()} Glow & Co. Beauty & Salon.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}