import bouquetRoses from "@/assets/bouquet-roses.jpg";
import bouquetMixed from "@/assets/bouquet-mixed.jpg";
import bouquetLilies from "@/assets/bouquet-lilies.jpg";
import bouquetPeonies from "@/assets/bouquet-peonies.jpg";
import bouquetTulips from "@/assets/bouquet-tulips.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "roses" | "bouquets" | "wedding" | "gifts";
  occasion: string[];
  colors: string[];
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Red Romance",
    price: 25000,
    originalPrice: 30000,
    image: bouquetRoses,
    category: "roses",
    occasion: ["valentine", "anniversary", "love"],
    colors: ["red"],
    description: "A stunning arrangement of 24 premium red roses wrapped in luxury kraft paper. Perfect for expressing deep love and passion.",
    featured: true,
  },
  {
    id: "2",
    name: "Sunshine Garden Mix",
    price: 18000,
    image: bouquetMixed,
    category: "bouquets",
    occasion: ["birthday", "congratulations", "get-well"],
    colors: ["yellow", "purple", "white"],
    description: "A cheerful mix of sunflowers, daisies, and lavender that brings warmth and joy to any space.",
    featured: true,
  },
  {
    id: "3",
    name: "Pure Elegance Lilies",
    price: 22000,
    image: bouquetLilies,
    category: "wedding",
    occasion: ["wedding", "sympathy", "anniversary"],
    colors: ["white", "pink"],
    description: "Pristine white lilies and orchids tied with a delicate pink ribbon. Timeless sophistication for life's meaningful moments.",
    featured: true,
  },
  {
    id: "4",
    name: "Blush Peony Dream",
    price: 28000,
    image: bouquetPeonies,
    category: "bouquets",
    occasion: ["birthday", "love", "anniversary"],
    colors: ["pink"],
    description: "Luxurious pink peonies in full bloom — soft, romantic, and utterly beautiful. A truly special gift.",
    featured: true,
  },
  {
    id: "5",
    name: "Spring Tulip Delight",
    price: 15000,
    image: bouquetTulips,
    category: "bouquets",
    occasion: ["birthday", "congratulations", "thank-you"],
    colors: ["yellow", "pink", "white"],
    description: "Fresh pastel tulips wrapped in crisp white paper. Simple, elegant, and perfect for brightening someone's day.",
  },
  {
    id: "6",
    name: "Royal Rose Box",
    price: 35000,
    image: bouquetRoses,
    category: "gifts",
    occasion: ["valentine", "love", "anniversary"],
    colors: ["red"],
    description: "Premium long-stem roses presented in a luxury gift box with a satin ribbon. The ultimate romantic gesture.",
  },
];

export const categories = [
  { id: "roses", name: "Roses", icon: "🌹" },
  { id: "bouquets", name: "Bouquets", icon: "💐" },
  { id: "wedding", name: "Wedding", icon: "💒" },
  { id: "gifts", name: "Gift Bundles", icon: "🎁" },
];

export const occasions = [
  "valentine", "birthday", "anniversary", "wedding",
  "congratulations", "love", "sympathy", "get-well", "thank-you",
];

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`;
}
