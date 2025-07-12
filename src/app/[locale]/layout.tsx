import "../globals.css";
import { getDirection } from "@/lib/loacalDirection";
import LanguageSwitcher from "@/components/custom/language-switcher";
import Navbar from "@/components/custom/(home)/navbar";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import LogoNavbar from "@/components/custom/(general)/logo-navbar";

// ✅ Make the function async and await `params`
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 👈 Promise version
}) {
  const { locale } = await params; // ✅ Awaiting params
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="antialiased dark:bg-[#020817] dark:text-gray-300 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <LogoNavbar />
            <main className="flex w-full max-w-screen-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex-col min-h-[100dvh] px-4 sm:px-6 md:px-8">
              {children}
            </main>
            <Navbar locale={locale} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
