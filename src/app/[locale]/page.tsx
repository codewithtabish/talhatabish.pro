import { Suspense } from "react";
import BlogListSkeleton from "@/components/custom/(skeletons)/blog-list-skeleton";
import ProjectListSkeleton from "@/components/custom/(skeletons)/project-list-seketon";
import HeroSection from "@/components/custom/(home)/hero-section";
import AboutCombined from "@/components/custom/(home)/hero-about-combined";
import EducationSection from "@/components/custom/(home)/education-section";
import SkillsSection from "@/components/custom/(home)/skill-section";
import TrustedByCompanies from "@/components/mvpblocks/sparkles-logo";
import GallerySection from "@/components/custom/(home)/gallery-section";
import HomeProjectSection from "@/components/custom/(home)/(project)/project-section";
import HomeBlogSection from "@/components/custom/(home)/blog/home-blog-section";
import Feedbacks from "@/components/custom/(home)/feedbacks";
import HomeClientWidgets from "@/components/custom/(home)/home-client-weidget";
import MobileNavbar from "@/components/custom/(general)/mobile-navbar";



// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const images = [
    { src: "/team/talha.jpg", alt: "Image 1" },
    { src: "/team/ayesha.jpg", alt: "Image 2" },
    { src: "/team/sudais.jpg", alt: "Image 3" },
    { src: "/team/t2.jpeg", alt: "Image 4" },
  ];

  // --- Safe locale ---
  const safeLocale = (allowedLocales.includes(locale as LocaleType)
    ? locale
    : "en") as LocaleType;

  return (
    <main className="w-full min-h-screen flex justify-center bg-background">
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
          flex flex-col
          space-y-10
          sm:space-y-14
          md:space-y-16
          lg:space-y-24
          items-center
        "
      >
              <MobileNavbar locale={locale} />

        {/* 1. Confetti */}
        <HomeClientWidgets section="confetti" />

        {/* 2. Hero */}
        <HeroSection lang={safeLocale} />

        {/* 3. About */}
        <AboutCombined locale={safeLocale} />

        {/* 4. Video */}
        <HomeClientWidgets section="video" />

        {/* 5. Education */}
        <EducationSection locale={safeLocale} />

        {/* 6. Skills */}
        {/* @ts-ignore */}
        <SkillsSection locale={safeLocale} />

        {/* 7. Trusted By */}
        <TrustedByCompanies locale={locale} />

        {/* 8. Gallery */}
        <GallerySection locale={safeLocale} />

        {/* 9. Carousel */}
        {/* <CardCarousel
          images={images}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        /> */}

        {/* 10. Project List */}
        <Suspense fallback={<ProjectListSkeleton count={4} />}>
          <HomeProjectSection locale={safeLocale} isHome={true} />
        </Suspense>

        {/* 11. Blog List */}
        <Suspense fallback={<BlogListSkeleton count={6} />}>
          <HomeBlogSection locale={safeLocale} />
        </Suspense>
{/* 
        {/* 12. BlogPageList */}
       

        {/* 13. Feedbacks */}
        <Feedbacks locale={safeLocale} />
      </div>
    </main>
  );
}
