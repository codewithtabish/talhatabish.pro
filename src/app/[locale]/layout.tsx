import "../globals.css";
import { getDirection } from "@/lib/loacalDirection";
import LanguageSwitcher from "@/components/custom/language-switcher";
import Navbar from "@/components/custom/(home)/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import LogoNavbar from "@/components/custom/(general)/logo-navbar";
import { SocialBar } from "@/components/custom/(home)/social-bar";
import Footer from "@/components/mvpblocks/footer-4col";
import { ThemeProvider } from "@/components/ui/theme-provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data here */}
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
      <body className="antialiased dark:bg-[#020817] dark:text-gray-300 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            <LanguageSwitcher/>
            {/* <LogoNavbar /> */}
            <SocialBar />
            <main className="flex w-full max-w-screen-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex-col min-h-[100dvh] px-4 sm:px-6 md:px-8">
              {children}
            </main>
            <Navbar locale={locale} />
            {/* @ts-ignore */}
            <Footer locale={locale} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}




// https://og-playground.vercel.app/
// https://metatags.io/




// Write a fully professional, long-form blog post in pure Markdown format. Use the following structure and formatting rules:

// - Use `#` for the main blog title (only once, at the top).
// - Write a short introduction paragraph after the title.
// - Use `##` for each main section heading.
// - For each section, write detailed, professional content in plain text.
// - Where relevant, include one or more images inside the blog content using Markdown image syntax: ![Alt text](https://your-image-url.com/image.jpg)
// - Use `-` for bullet points where appropriate.
// - Use numbered lists (`1.`, `2.`, etc.) where steps or order matter.
// - Use `**` for bold text and `*` for italic text where emphasis is needed.
// - Use code blocks (triple backticks) for code examples if relevant.
// - Use blockquotes (`>`) for quotes or highlighting important notes.
// - End with a "Further Reading" section (with Markdown links) and a short conclusion.
// - Do NOT use HTML, tables, or any other formatting—only Markdown as described above.

// The blog post title is: [YOUR_TITLE_HERE]
