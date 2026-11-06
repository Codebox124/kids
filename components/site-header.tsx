'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Kidz-Vidz home">
            <img
              src="/logo.jpg"
              alt="Kidz-Vidz Logo"
              className="w-16 h-16 object-contain"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-2 md:gap-4">
          <Link
            href="/"
            className="font-fredoka font-bold text-gray-700 hover:text-pink-600 px-2 py-1"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="font-fredoka font-bold text-gray-700 hover:text-pink-600 px-2 py-1"
          >
            Shop
          </Link>
          <Button
            className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-fredoka font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              window.open("https://www.youtube.com/@KidzVidzABC", "_blank")
            }
          >
            Subscribe on YouTube
          </Button>
        </nav>
      </div>
    </header>
  );
}
