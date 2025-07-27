'use client';
import * as React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HelpCircle, MessageSquare, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import { navbarContent } from "@/utils/language-data/navbar";

// Localized labels for extra links
const extraLinks = {
  en: [
    { label: "Help", href: "/en/help", icon: HelpCircle },
    { label: "FAQ", href: "/en/faq", icon: Info },
    { label: "Contact", href: "/en/contact", icon: MessageSquare },
  ],
  ur: [
    { label: "مدد", href: "/ur/help", icon: HelpCircle },
    { label: "عمومی سوالات", href: "/ur/faq", icon: Info },
    { label: "رابطہ", href: "/ur/contact", icon: MessageSquare },
  ],
  ar: [
    { label: "مساعدة", href: "/ar/help", icon: HelpCircle },
    { label: "الأسئلة الشائعة", href: "/ar/faq", icon: Info },
    { label: "اتصل", href: "/ar/contact", icon: MessageSquare },
  ],
  fr: [
    { label: "Aide", href: "/fr/help", icon: HelpCircle },
    { label: "FAQ", href: "/fr/faq", icon: Info },
    { label: "Contact", href: "/fr/contact", icon: MessageSquare },
  ],
  zh: [
    { label: "帮助", href: "/zh/help", icon: HelpCircle },
    { label: "常见问题", href: "/zh/faq", icon: Info },
    { label: "联系", href: "/zh/contact", icon: MessageSquare },
  ],
  de: [
    { label: "Hilfe", href: "/de/help", icon: HelpCircle },
    { label: "FAQ", href: "/de/faq", icon: Info },
    { label: "Kontakt", href: "/de/contact", icon: MessageSquare },
  ],
  ja: [
    { label: "ヘルプ", href: "/ja/help", icon: HelpCircle },
    { label: "よくある質問", href: "/ja/faq", icon: Info },
    { label: "連絡先", href: "/ja/contact", icon: MessageSquare },
  ],
  es: [
    { label: "Ayuda", href: "/es/help", icon: HelpCircle },
    { label: "FAQ", href: "/es/faq", icon: Info },
    { label: "Contacto", href: "/es/contact", icon: MessageSquare },
  ],
};

type MobileNavbarProps = {
  locale: string;
  children?: React.ReactNode; // For language switcher or other right-side content
};

export default function MobileNavbar({ locale, children }: MobileNavbarProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  // @ts-ignore
  const navItems = navbarContent[locale] || navbarContent["en"];
  // @ts-ignore
  const extras = extraLinks[locale] || extraLinks["en"];

  return (
    <nav
      className="md:hidden fixed top-0 left-0 w-full z-40 bg-white/90  border-b border-gray-200 dark:border-zinc-800 backdrop-blur"
      dir="ltr" // Force LTR for navbar, even if page is RTL
    >
      <div className="flex flex-row items-center justify-between px-4 py-2 w-full">
        {/* Menu icon always at left */}
        <div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <div className="flex flex-col h-full">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-zinc-800">
                  <span className="text-lg font-bold text-primary">Menu</span>
                </div>
                <ul className="flex-1 flex flex-col gap-1 px-2 py-4">
                  {navItems.map((item: any) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`
                            flex items-center gap-3 px-4 py-2 rounded-md
                            text-base font-medium
                            ${isActive
                              ? "bg-primary/10 text-primary"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"}
                            transition-colors
                          `}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <Icon size={20} className="shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                  {/* Separator */}
                  <li className="my-2 border-t border-gray-200 dark:border-zinc-800" />
                  {/* Extra links: Help, FAQ, Contact */}
                  {extras.map((item: any) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`
                            flex items-center gap-3 px-4 py-2 rounded-md
                            text-base font-medium
                            ${isActive
                              ? "bg-primary/10 text-primary"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"}
                            transition-colors
                          `}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <Icon size={20} className="shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Right side: language switcher or other content */}
        <div className="ml-auto flex items-center">
          {children}
        </div>
      </div>
    </nav>
  );
}
