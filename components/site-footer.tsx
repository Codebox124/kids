import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="font-fredoka font-bold mb-2">
          © 2026 Kidz-Vidz. All rights reserved.
        </p>
        <p className="text-gray-400 font-comfortaa text-sm mb-3">
          Productive content for children: music, stories and lessons! 🎉
        </p>
        <p className="font-comfortaa text-sm">
          <Link href="/" className="text-gray-300 hover:text-white underline">
            Home
          </Link>
          {" · "}
          <Link href="/shop" className="text-gray-300 hover:text-white underline">
            Shop
          </Link>
          {" · "}
          <a
            href="https://www.youtube.com/@KidzVidzABC"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white underline"
          >
            YouTube
          </a>
        </p>
      </div>
    </footer>
  );
}
