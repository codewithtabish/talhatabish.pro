import "../globals.css";
import { getDirection } from "@/lib/loacalDirection";
import LanguageSwitcher from "@/components/custom/language-switcher";
import Navbar from "@/components/custom/(home)/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SocialBar } from "@/components/custom/(home)/social-bar";
import Footer from "@/components/mvpblocks/footer-4col";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getSiteMetadata } from "@/lib/seo/seo-data";

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

// Dynamic, locale-aware SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getSiteMetadata(safeLocale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  const dir = getDirection(safeLocale);

  return (
    <html lang={safeLocale} dir={dir} suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CodeWithTabish",
              "url": "https://www.talhatabish.pro",
              "logo": "https://www.talhatabish.pro/og-cover.png",
              "sameAs": [
                "https://github.com/codewithtabish",
                "https://twitter.com/codewithtabish"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased dark:bg-[#020817] dark:text-gray-300 text-gray-900 min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            <LanguageSwitcher />
            {/* <LogoNavbar /> */}
            <SocialBar />
            <main
              className="
                flex flex-col
                min-h-screen
                w-full
                container
                mx-auto
                px-2
                sm:px-4
                md:px-6
                lg:px-8
                xl:px-10
                2xl:px-12
                py-4
                items-center
                justify-start
                transition-all
              "
            >
              {children}
            </main>
            <Navbar locale={safeLocale} />
            {/* @ts-ignore */}
            <Footer locale={safeLocale} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
