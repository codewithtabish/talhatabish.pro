"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/utils/site-content";

const navLinks = [
  { href: "/home", key: 0 },
  { href: "/about", key: 1 },
  { href: "/contact", key: 2 },
];

export default function Header({ locale }: { locale: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
//   @ts-ignore
  const data = siteContent[locale]?.header || siteContent.en.header;

  // For highlighting active link
  const isActive = (href: string) => pathname.startsWith(`/${locale}${href}`);

  return (
    <header className="fixed top-0 left-0 w-full  shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href={`/${locale}/home`} className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-8 mr-2"
                loading="lazy"
              />
              <span className="text-xl font-bold text-gray-900">{data.title}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {data.nav.map((item: string, idx: number) => (
              <Link
                key={idx}
                href={`/${locale}${navLinks[idx]?.href || ""}`}
                className={`text-gray-700 hover:text-blue-600 font-medium transition ${
                  isActive(navLinks[idx]?.href || "") ? "text-blue-600 font-bold" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-4 space-y-2">
            {data.nav.map((item: string, idx: number) => (
              <li key={idx}>
                <Link
                  href={`/${locale}${navLinks[idx]?.href || ""}`}
                  className={`block text-gray-700 hover:text-blue-600 font-medium transition ${
                    isActive(navLinks[idx]?.href || "") ? "text-blue-600 font-bold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
