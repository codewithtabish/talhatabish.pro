"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import footerContent from "@/utils/language-data/footer-content";
import ThemeToggleButton from "../ui/theme-toggle-button";
import FooterQr from "../custom/footer-qr";
// import ThemeToggleIconToggle from "../custom/(general)/theme-toggle";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/codewithtabish" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/codewithtabish" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/codewithtabish" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/codewithtabish" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/codewithtabish" },
  { icon: Mail, label: "Email", href: "mailto:hello@codewithtabish.com" },
];

type Props = {
  locale?: keyof typeof footerContent;
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

const WAITLIST_LABELS: Record<string, string> = {
  en: "Waitlist",
  ur: "ویٹ لسٹ",
  ar: "قائمة الانتظار",
  fr: "Liste d'attente",
  zh: "候补名单",
  de: "Warteliste",
  ja: "ウェイトリスト",
  es: "Lista de espera",
};

export default function Footer({ locale = "en" }: Props) {
  const content = footerContent[locale] || footerContent.en;

  // Group links
  const companyLinks = content.links.filter(link =>
    ["/about", "/projects", "/blogs", "/privacy-policy", "/"].includes(link.href)
  );
  const supportLinks = content.links.filter(link =>
    ["/contact", "/help", "/faq"].includes(link.href)
  );
  const waitlistLink = content.links.find(link => link.href === "/waitlist");

  // Helper to prepend locale to internal links
  const withLocale = (href: string) => {
    if (isExternal(href)) return href;
    // Home route special case
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <footer className="mt-16 w-full rounded-t-xl bg-secondary dark:bg-secondary/20">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
          {/* Brand and description */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-2 text-primary">
              <img
                src="/images/brand-logo.png"
                alt="logo"
                className="h-10 w-10 rounded-full"
              />
              <span className="text-2xl font-semibold">{content.brand}</span>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-foreground/50">
              {content.description}
            </p>
            <ul className="mt-8 flex justify-center gap-6 md:gap-8">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-primary transition hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6">{locale === "ur" ? "کمپنی" : locale === "ar" ? "الشركة" : locale === "fr" ? "Entreprise" : locale === "zh" ? "公司" : locale === "de" ? "Unternehmen" : locale === "ja" ? "会社" : locale === "es" ? "Empresa" : "Company"}</p>
            <ul className="space-y-4 text-sm">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={withLocale(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6">{locale === "ur" ? "سپورٹ" : locale === "ar" ? "الدعم" : locale === "fr" ? "Support" : locale === "zh" ? "支持" : locale === "de" ? "Support" : locale === "ja" ? "サポート" : locale === "es" ? "Soporte" : "Support"}</p>
            <ul className="space-y-4 text-sm">
              {supportLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={withLocale(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Waitlist Link */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-6">
              {WAITLIST_LABELS[locale] || WAITLIST_LABELS["en"]}
            </p>
            <ul className="space-y-4 text-sm">
              {waitlistLink && (
                <li>
                  <Link
                    href={withLocale(waitlistLink.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition font-medium"
                  >
                    {waitlistLink.label}
                  </Link>
                </li>
              )}
            </ul>
            <FooterQr locale={locale}/>
          </div>
        </div>
        <div className="flex justify-end">
                <ThemeToggleButton  variant="circle-blur" start="top-right" 
                url="https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s"

                />

          {/* <ThemeToggleButton /> */}

          {/* <ThemeToggleIconToggle /> */}
        </div>

        <div className="mt-10 border-t pt-6">
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-sm text-secondary-foreground/70">
              {content.copyright}
            </p>
            <p className="text-sm text-secondary-foreground/50">
              Made with ❤️ by {content.brand}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
