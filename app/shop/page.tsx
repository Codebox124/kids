import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Hash,
  Palette,
  BookOpen,
  Shirt,
  ShieldCheck,
  Download,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shop | Kidz-Vidz",
  description:
    "Printable activity packs, activity books and merch that match the Kidz-Vidz videos.",
};

/**
 * Storefront links.
 * Fill these in as each free storefront account goes live.
 * While a link is empty, its button shows "Coming soon" and stays disabled,
 * so the page never points parents at a store that does not exist yet.
 */
const STOREFRONT = {
  payhip: "https://payhip.com/kidzvidzabc", // Digital printables storefront (Payhip, free plan)
  etsy: "", // Digital printables mirror (Etsy)
  books: "", // Activity book storefront (Lulu Direct / Amazon KDP)
  merch: "", // Print-on-demand merch storefront (Printify)
};

type Product = {
  title: string;
  description: string;
  priceNote: string;
  icon: typeof Pencil;
  color: string;
  textColor: string;
  image: string;
  storeUrl: string;
  storeLabel: string;
};

const products: Product[] = [
  {
    title: "ABC Letters Activity Pack",
    description:
      "Printable tracing, matching and coloring pages that follow the Letters Song (ABCs). Print at home, use again and again.",
    priceNote: "Digital download",
    icon: Pencil,
    color: "from-pink-400 to-yellow-300",
    textColor: "text-pink-600",
    image: "/hero-songs.jpg",
    storeUrl: STOREFRONT.payhip,
    storeLabel: "Get the pack",
  },
  {
    title: "Counting 1–10 Activity Pack",
    description:
      "Number tracing, counting games and cut-and-paste activities that match the Counting Song (Numbers 1–10).",
    priceNote: "Digital download",
    icon: Hash,
    color: "from-blue-400 to-green-300",
    textColor: "text-blue-600",
    image: "/hero-lessons.jpg",
    storeUrl: STOREFRONT.payhip,
    storeLabel: "Get the pack",
  },
  {
    title: "Colors & Shapes Activity Pack",
    description:
      "Color hunts, shape matching and sorting games that go with the Colors Song and the Shapes Song.",
    priceNote: "Digital download",
    icon: Palette,
    color: "from-purple-400 to-pink-300",
    textColor: "text-purple-600",
    image: "/hero-stories.jpg",
    storeUrl: STOREFRONT.payhip,
    storeLabel: "Get the pack",
  },
];

function StoreButton({ product }: { product: Product }) {
  if (!product.storeUrl) {
    return (
      <Button
        className="w-full font-fredoka font-bold rounded-full bg-gray-300 text-gray-600 cursor-not-allowed"
        disabled
      >
        Coming soon
      </Button>
    );
  }
  return (
    <a href={product.storeUrl} target="_blank" rel="noreferrer">
      <Button
        className={`w-full font-fredoka font-bold rounded-full bg-gradient-to-r ${product.color} text-white hover:shadow-lg transition-all hover:scale-105`}
      >
        {product.storeLabel} →
      </Button>
    </a>
  );
}

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-fredoka font-bold mb-4 text-gray-800">
            Kidz-Vidz Shop 🛍️
          </h2>
          <p className="text-md md:text-xl text-gray-600 font-comfortaa max-w-2xl mx-auto">
            Activity packs, books and merch that match the songs and lessons on
            our YouTube channel — made for parents and teachers of kids aged
            2–6.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.title}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${product.color} shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-fredoka font-bold ${product.textColor}`}
                    >
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-comfortaa mb-2 text-sm">
                    {product.description}
                  </p>
                  <p className="text-gray-500 font-comfortaa mb-4 text-xs">
                    {product.priceNote}
                  </p>
                  <StoreButton product={product} />
                </div>
              </Card>
            );
          })}

          {/* Toys card — intentionally not for sale yet */}
          <Card className="overflow-hidden border-2 border-dashed border-green-300 bg-green-50">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-green-400 to-teal-300 shadow-md">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-fredoka font-bold text-green-700">
                  Toys & Learning Materials
                </h3>
              </div>
              <p className="text-gray-700 font-comfortaa mb-4 text-sm">
                Physical toys are coming later — and only from US suppliers who
                can show us the official US safety testing paperwork
                (Children&apos;s Product Certificate from a CPSC-accepted lab)
                for every single product. No paperwork, no listing. That rule
                keeps your kids safe and keeps us legal.
              </p>
              <Button
                className="w-full font-fredoka font-bold rounded-full bg-gray-300 text-gray-600 cursor-not-allowed"
                disabled
              >
                Coming in Phase 2
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-white text-center mb-12">
            How the Shop Works ✨
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
              <Download className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <p className="text-2xl text-black mb-3">Instant downloads</p>
              <p className="text-gray-700 font-comfortaa text-sm">
                Activity packs are PDF files. Buy once, download instantly,
                print as many copies as your classroom or family needs.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
              <Truck className="w-8 h-8 mx-auto mb-3 text-purple-500" />
              <p className="text-2xl text-black mb-3">Printed & shipped for you</p>
              <p className="text-gray-700 font-comfortaa text-sm">
                Books and merch are printed to order by our US partners and
                shipped straight to your door — we never hold boxes of stock.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
              <ShieldCheck className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <p className="text-2xl text-black mb-3">Safety first, always</p>
              <p className="text-gray-700 font-comfortaa text-sm">
                Every physical product for children must have verified US
                safety testing before it appears here. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent note */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-fredoka font-bold text-gray-800 mb-4">
            A note for parents & teachers 💛
          </h3>
          <p className="text-gray-700 font-comfortaa text-md mb-4 max-w-2xl mx-auto">
            Each pack matches a video, so kids can watch, sing, and then
            practice the same letters, numbers, colors and shapes on paper —
            screen time that turns into hands-on learning.
          </p>
          <p className="text-gray-700 font-comfortaa text-md max-w-2xl mx-auto">
            Questions about an order? Reply to your order confirmation email,
            or reach us through our YouTube channel,{" "}
            <a
              href="https://www.youtube.com/@KidzVidzABC"
              target="_blank"
              rel="noreferrer"
              className="underline font-bold"
            >
              @KidzVidzABC
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
