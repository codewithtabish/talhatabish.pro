"use client";

import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";

// --- Localized text for badge/title/subtitle ---
const trustedText: Record<string, { badge: string; title: string; subtitle: string }> = {
  en: {
    badge: "Trusted by Industry Leaders",
    title: "Our Partners & Clients",
    subtitle: "We’re proud to be trusted by the world’s most innovative companies.",
  },
  ur: {
    badge: "صنعتی رہنماؤں کا اعتماد",
    title: "ہمارے پارٹنرز اور کلائنٹس",
    subtitle: "ہم دنیا کی سب سے جدید کمپنیوں کے اعتماد پر فخر محسوس کرتے ہیں۔",
  },
  ar: {
    badge: "موثوق به من قادة الصناعة",
    title: "شركاؤنا وعملاؤنا",
    subtitle: "نفخر بثقة أكثر الشركات ابتكارًا في العالم.",
  },
  fr: {
    badge: "Approuvé par les leaders de l'industrie",
    title: "Nos partenaires & clients",
    subtitle: "Nous sommes fiers d'être approuvés par les entreprises les plus innovantes du monde.",
  },
  zh: {
    badge: "行业领导者信赖",
    title: "我们的合作伙伴与客户",
    subtitle: "我们很自豪能获得全球最具创新力公司的信任。",
  },
  de: {
    badge: "Vertrauen von Branchenführern",
    title: "Unsere Partner & Kunden",
    subtitle: "Wir sind stolz, das Vertrauen der innovativsten Unternehmen der Welt zu genießen.",
  },
  ja: {
    badge: "業界リーダーからの信頼",
    title: "パートナーとクライアント",
    subtitle: "世界で最も革新的な企業から信頼されています。",
  },
  es: {
    badge: "Confiado por líderes de la industria",
    title: "Nuestros socios y clientes",
    subtitle: "Nos enorgullece contar con la confianza de las empresas más innovadoras del mundo.",
  },
};

const svgLogos = [
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Google">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#4285F4" fontFamily="Arial">G</text>
      </svg>
    ),
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Microsoft">
        <rect width="64" height="64" rx="32" fill="#fff" />
        <g>
          <rect x="8" y="8" width="22" height="22" fill="#F25022" />
          <rect x="34" y="8" width="22" height="22" fill="#7FBA00" />
          <rect x="8" y="34" width="22" height="22" fill="#00A4EF" />
          <rect x="34" y="34" width="22" height="22" fill="#FFB900" />
        </g>
      </svg>
    ),
  },
  {
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Amazon">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FF9900" fontFamily="Arial">a</text>
        <path d="M16 48 Q32 56 48 48" stroke="#232F3E" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Meta">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <path d="M20 44 Q32 20 44 44" stroke="#1877F3" strokeWidth="4" fill="none" />
        <ellipse cx="32" cy="44" rx="12" ry="6" fill="#1877F3" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Adidas",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Adidas">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <rect x="18" y="38" width="6" height="12" fill="#111" />
        <rect x="28" y="32" width="6" height="18" fill="#111" />
        <rect x="38" y="26" width="6" height="24" fill="#111" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Spotify">
        <circle cx="32" cy="32" r="32" fill="#1DB954" />
        <path d="M20 40 Q32 44 44 40" stroke="#fff" strokeWidth="3" fill="none" />
        <path d="M22 34 Q32 38 42 34" stroke="#fff" strokeWidth="2" fill="none" />
        <path d="M24 28 Q32 32 40 28" stroke="#fff" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Netflix",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Netflix">
        <rect width="64" height="64" rx="32" fill="#E50914" />
        <rect x="26" y="16" width="12" height="32" fill="#fff" />
        <polygon points="26,16 38,48 32,48 32,16" fill="#B0060F" />
      </svg>
    ),
  },
  {
    name: "Apple",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Apple">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <path d="M40 24c-1.5-2-4-2-4-2s-2.5 0-4 2c-1.5 2-2 5-2 7 0 4 2 7 6 7s6-3 6-7c0-2-0.5-5-2-7z" fill="#111" />
        <ellipse cx="36" cy="20" rx="2" ry="1" fill="#111" />
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="Slack">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <rect x="28" y="14" width="8" height="24" rx="4" fill="#36C5F0" />
        <rect x="14" y="28" width="24" height="8" rx="4" fill="#2EB67D" />
        <rect x="22" y="22" width="8" height="20" rx="4" fill="#ECB22E" />
        <rect x="22" y="22" width="20" height="8" rx="4" fill="#E01E5A" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    svg: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" aria-label="YouTube">
        <circle cx="32" cy="32" r="32" fill="#fff" />
        <rect x="16" y="22" width="32" height="20" rx="8" fill="#FF0000" />
        <polygon points="30,28 44,32 30,36" fill="#fff" />
      </svg>
    ),
  },
];

type Props = {
  locale?: string;
};

const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;

const TrustedByCompanies: React.FC<Props> = ({ locale = "en" }) => {
  const safeLocale = allowedLocales.includes(locale as any) ? locale : "en";
  const text = trustedText[safeLocale] || trustedText.en;
  // For infinite effect, repeat the logos array
  const logos = [...svgLogos, ...svgLogos];

  return (
    <section
      className="
        relative
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto
        px-2
        sm:px-4
        md:px-8
        py-8
        sm:py-12
        md:py-16
        overflow-hidden
        transition-all
      "
      aria-labelledby="trusted-by-title"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-3 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-200 text-xs font-semibold tracking-widest uppercase">
          {text.badge}
        </span>
        {/* Title */}
        <h2
          id="trusted-by-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
        >
          {text.title}
        </h2>
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          {text.subtitle}
        </p>
      </div>

      <div className="flex w-full items-center justify-center">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {logos.map((logo, index) => (
              <MarqueeItem
                className="
                  border-2
                  p-4
                  mb-3
                  dark:border-none
                  flex
                  justify-center
                  items-center
                  rounded-full
                  h-16
                  w-16
                  mx-4
                  bg-white
                  dark:bg-zinc-900
                  shadow
                  transition-all
                  duration-300
                  hover:scale-105
                "
                key={index}
                tabIndex={-1}
                aria-label={logo.name}
              >
                {logo.svg}
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
