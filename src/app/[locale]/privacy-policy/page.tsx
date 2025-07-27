import BackButtonComp from "@/components/custom/(general)/back-comp";
import PrivacyPolicyComp from "@/components/custom/(privacy)/privacy-policy-comp";
import { getPrivacyMetadata } from "@/lib/seo/privacy-seo";

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

// Dynamic SEO metadata for Privacy Policy page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getPrivacyMetadata(safeLocale);
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;

  return (
    <main className="w-full min-h-screen bg-background flex justify-center items-start overflow-x-hidden">
            <BackButtonComp locale={locale}/>
      
      <PrivacyPolicyComp lang={safeLocale} />
    </main>
  );
}
