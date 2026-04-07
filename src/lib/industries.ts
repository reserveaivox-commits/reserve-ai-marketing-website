export interface Industry {
  slug: string;
  icon: string;
  color: string;
  translationKey: string;
  image: string;
  thumbnail: string;
}

export const industries: Industry[] = [
  {
    slug: "restaurants",
    icon: "🍽️",
    color: "from-orange-50 to-red-50",
    translationKey: "restaurants",
    image: "/images/industry-restaurants.png",
    thumbnail: "/images/industry-thumb-restaurants.png",
  },
  {
    slug: "salons",
    icon: "💇",
    color: "from-pink-50 to-purple-50",
    translationKey: "salons",
    image: "/images/industry-salons.png",
    thumbnail: "/images/industry-thumb-salons.png",
  },
  {
    slug: "barbershops",
    icon: "✂️",
    color: "from-blue-50 to-indigo-50",
    translationKey: "barbershops",
    image: "/images/industry-barbershops.png",
    thumbnail: "/images/industry-thumb-barbershops.png",
  },
  {
    slug: "tattoo-studios",
    icon: "🎨",
    color: "from-gray-50 to-slate-100",
    translationKey: "tattoo",
    image: "/images/industry-tattoo.png",
    thumbnail: "/images/industry-thumb-tattoo.png",
  },
  {
    slug: "nagelstudios",
    icon: "💅",
    color: "from-rose-50 to-pink-50",
    translationKey: "nails",
    image: "/images/industry-nails.png",
    thumbnail: "/images/industry-thumb-nails.png",
  },
  {
    slug: "wellness-zentren",
    icon: "🧘",
    color: "from-green-50 to-emerald-50",
    translationKey: "wellness",
    image: "/images/industry-wellness.png",
    thumbnail: "/images/industry-thumb-wellness.png",
  },
  {
    slug: "spas",
    icon: "🧖",
    color: "from-cyan-50 to-teal-50",
    translationKey: "spas",
    image: "/images/industry-spas.png",
    thumbnail: "/images/industry-thumb-spas.png",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
