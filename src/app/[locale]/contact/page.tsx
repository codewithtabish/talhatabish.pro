import BackButtonComp from '@/components/custom/(general)/back-comp';
import ContactUsComp from '@/components/mvpblocks/contact-us-1';
import { getContactMetadata } from '@/lib/seo/contact-seo';

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

// Dynamic SEO metadata for Contact page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getContactMetadata(safeLocale);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;

  return (
    <main className="w-full min-h-screen flex justify-center bg-background overflow-x-hidden">
            <BackButtonComp locale={locale}/>
      
      <div
        className="
          w-full
          max-w-[100vw]
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-[1600px]
          mx-auto
          px-2
          sm:px-4
          md:px-8
          flex flex-col
          space-y-10
          sm:space-y-14
          md:space-y-16
          lg:space-y-24
        "
      >
        {/* @ts-ignore */}
        <ContactUsComp locale={safeLocale} />
      </div>
    </main>
  );
}
