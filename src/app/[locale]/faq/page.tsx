import BackButtonComp from '@/components/custom/(general)/back-comp';
import Faq3 from '@/components/mvpblocks/faq-3';
import { getFaqMetadata } from '@/lib/seo/faq-seo';

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

// Dynamic SEO metadata for FAQ page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getFaqMetadata(safeLocale);
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;

  return (
    <main className="w-full min-h-screen bg-background flex justify-center overflow-x-hidden">
            <BackButtonComp locale={locale}/>
      
      <section
        aria-labelledby="faq-heading"
        className="
          w-full
          max-w-[100vw]
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-6xl
          mx-auto
          py-8 px-2
          sm:py-10 sm:px-4
          md:py-12 md:px-6
          lg:py-16 lg:px-8
          xl:py-20 xl:px-10
          2xl:py-24 2xl:px-12
        "
      >
        <Faq3 lang={safeLocale} />
      </section>
    </main>
  );
}
