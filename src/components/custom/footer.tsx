import { siteContent } from "@/utils/site-content";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "mailto:info@example.com",
    label: "Email",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 3 6.01V6h18zM3 20V8.99l8.29 6.71a1 1 0 0 0 1.42 0L21 8.99V20H3z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer({ locale }: { locale: string }) {
    // @ts-ignore
  const data = siteContent[locale]?.footer || siteContent.en.footer;

  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Logo and About */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-10 mr-3"
              loading="lazy"
            />
            <span className="text-2xl font-bold text-white">Sudais Azlan</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-gray-300 hover:text-white transition mb-2 md:mb-0"
              >
                {
                            // @ts-ignore

                siteContent[locale]?.header?.nav?.[quickLinks.findIndex(l => l.href === link.href)] || link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
