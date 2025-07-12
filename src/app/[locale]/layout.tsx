import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDirection } from "@/lib/loacalDirection";
import LanguageSwitcher from "@/components/custom/language-switcher";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/(home)/navbar";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip"; // Adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#020817]`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="my-20">
              <LanguageSwitcher />
            </div>
            {/* <Header locale={locale} /> */}
            <main className="pt-16 min-h-screen">{children}</main>
            <Navbar locale={locale} />
            {/* <Footer locale={locale} /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
