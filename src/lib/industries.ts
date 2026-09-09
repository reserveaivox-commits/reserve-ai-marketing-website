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
    image: "/images/industry-restaurants.jpg",
    thumbnail: "/images/industry-thumb-restaurants.jpg",
  },
  {
    slug: "salons",
    icon: "💇",
    color: "from-pink-50 to-purple-50",
    translationKey: "salons",
    image: "/images/industry-salons.jpg",
    thumbnail: "/images/industry-thumb-salons.jpg",
  },
  {
    slug: "barbershops",
    icon: "✂️",
    color: "from-blue-50 to-indigo-50",
    translationKey: "barbershops",
    image: "/images/industry-barbershops.jpg",
    thumbnail: "/images/industry-thumb-barbershops.jpg",
  },
  {
    slug: "tattoo-studios",
    icon: "🎨",
    color: "from-gray-50 to-slate-100",
    translationKey: "tattoo",
    image: "/images/industry-tattoo.jpg",
    thumbnail: "/images/industry-thumb-tattoo.jpg",
  },
  {
    slug: "nagelstudios",
    icon: "💅",
    color: "from-rose-50 to-pink-50",
    translationKey: "nails",
    image: "/images/industry-nails.jpg",
    thumbnail: "/images/industry-thumb-nails.jpg",
  },
  {
    slug: "spas",
    icon: "🧖",
    color: "from-cyan-50 to-teal-50",
    translationKey: "spas",
    image: "/images/industry-spas.jpg",
    thumbnail: "/images/industry-thumb-spas.jpg",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
