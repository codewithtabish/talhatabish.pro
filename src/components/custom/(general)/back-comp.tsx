"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Badge } from "../../../../badge";

// Supported locales and their short labels
const backLabels: Record<string, string> = {
  en: "Back",
  ur: "واپس",
  ar: "رجوع",
  zh: "返回",
  fr: "Retour",
  de: "Zurück",
  ja: "戻る",
  es: "Atrás",
};

type BackButtonProps = {
  locale?: string;
  label?: string;
  href?: string; // If provided, navigates to this URL instead of history.back()
  className?: string;
};

export default function BackButtonComp({
  locale = "en",
  label,
  href,
  className = "",
}: BackButtonProps) {
  const router = useRouter();
  const text = label || backLabels[locale] || backLabels["en"];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };

  // Fixed at the top-left, with high z-index and shadow for visibility
  const fixedClass = `
    fixed top-4 left-4 z-50
    shadow-md
    bg-white/90 dark:bg-zinc-900/90
    backdrop-blur
    border border-gray-200 dark:border-zinc-800
    ${className}
  `;

  const sharedClass = `
    inline-flex items-center gap-1 px-3 py-1.5 rounded-md
    text-sm font-medium
    text-gray-700 dark:text-gray-200
    hover:bg-gray-100 dark:hover:bg-zinc-800
    cursor-pointer
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-primary-500
    ${fixedClass}
  `;

  // If href is provided, use Next.js Link, else use button for history.back()
  return href ? (
    <Link href={href} className={sharedClass} aria-label={text}>
      <ArrowLeft size={18} className="shrink-0" />
      <span>{text}</span>
    </Link>
  ) : (
    <Badge   onClick={handleClick} className={sharedClass} aria-label={text}>
      <ArrowLeft size={18} className="shrink-0" />
      <span>{text}</span>
    </Badge>
  );
}
