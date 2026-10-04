export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "hair-styling",
    number: "01",
    title: "Hair Styling",
    description: "Expert cuts, color & crafted movement.",
    longDescription:
      "From precision cuts to dimensional color, our stylists sculpt a look that feels entirely yours.",
    image: "/images/hair-styling.jfif",
  },
  {
    id: "facial-treatments",
    number: "02",
    title: "Facial Treatments",
    description: "Deep cleansing & luminous glow.",
    longDescription:
      "Targeted facials and advanced skincare rituals designed to renew, hydrate and reveal your natural radiance.",
    image: "/images/facial-treatment (1).jfif",
  },
  {
    id: "nail-care",
    number: "03",
    title: "Nail Care",
    description: "Artful manicures & pedicures.",
    longDescription:
      "Meticulous shaping, premium products and finishing artistry — a small ritual with a polished finish.",
    image: "/images/nail-care.jfif",
  },
  {
    id: "makeup",
    number: "04",
    title: "Makeup",
    description: "From natural light to evening glam.",
    longDescription:
      "Camera-ready, skin-first makeup by artists who listen — for everyday confidence or once-in-a-lifetime moments.",
    image: "/images/makeup (1).jfif",
  },
  {
    id: "bridal-beauty",
    number: "05",
    title: "Bridal Beauty",
    description: "A calm, curated morning-of.",
    longDescription:
      "Hair, makeup and skin prep choreographed around you — so the only thing you do is enjoy every moment.",
    image: "/images/bridal-makeup.jfif",
  },
];
