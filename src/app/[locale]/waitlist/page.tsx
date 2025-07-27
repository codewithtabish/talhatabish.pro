import BackButtonComp from '@/components/custom/(general)/back-comp';
import WaitlistComp from '@/components/mvpblocks/waitlist';
import { getWaitlistMetadata } from '@/lib/seo/waitlist-seo';

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

const WAITLIST_HEADING = {
  en: "Join the Waitlist",
  ur: "ویٹ لسٹ میں شامل ہوں",
  ar: "انضم إلى قائمة الانتظار",
  zh: "加入候补名单",
  fr: "Rejoindre la liste d'attente",
  de: "Zur Warteliste",
  ja: "ウェイトリストに参加",
  es: "Únete a la lista de espera",
};

// Dynamic SEO metadata for Waitlist page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getWaitlistMetadata(safeLocale);
}

export default async function WaitListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  const heading = WAITLIST_HEADING[safeLocale] || WAITLIST_HEADING.en;
  const isRtl = ["ar", "ur", "fa", "he"].includes(safeLocale);

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center overflow-x-hidden">
            <BackButtonComp locale={locale}/>
      
      <section
        aria-labelledby="waitlist-heading"
        className="
          w-full
          max-w-[100vw]
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-2xl
          mx-auto
          py-8 px-2
          sm:py-12 sm:px-4
          md:py-16 md:px-6
          lg:py-20 lg:px-8
          xl:py-24 xl:px-10
          2xl:py-32 2xl:px-12
        "
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <h1
            id="waitlist-heading"
            className={`
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mb-6
              text-center
              ${isRtl ? "text-right" : ""}
            `}
          >
            {heading}
          </h1>
          {/* @ts-ignore */}
          <WaitlistComp locale={safeLocale} />
        </div>
      </section>
    </main>
  );
}
