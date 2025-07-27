import BackButtonComp from "@/components/custom/(general)/back-comp";
import AboutSection from "@/components/mvpblocks/about-us-1";
import { getAboutMetadata } from "@/lib/seo/about-seo";

// Dynamic SEO metadata for About page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getAboutMetadata(locale);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

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
          2xl:max-w-screen-2xl
          mx-auto
          px-2
          sm:px-4
          md:px-8
          py-6
          sm:py-8
          md:py-12
          lg:py-16
          xl:py-20
          flex flex-col
        "
      >
        {/* @ts-ignore */}
        <AboutSection locale={locale} />
      </div>
    </main>
  );
}
