import ConfettiClientWrapper from "@/components/custom/(home)/particle-wrapper";
import HeroSection from "@/components/custom/(home)/hero-section";
import AboutCombined from "@/components/custom/(home)/hero-about-combined";
import KiboHeroVideo from "@/components/custom/(home)/kibo-hero-video";
import EducationSection from "@/components/custom/(home)/education-section";
import SkillsSection from "@/components/custom/(home)/skill-section";
import TrustedByCompanies from "@/components/mvpblocks/sparkles-logo";
import GallerySection from "@/components/custom/(home)/gallery-section";
import { CardCarousel } from "@/components/ui/card-carousel";
import HomeProjectSection from "@/components/custom/(home)/(project)/project-section";
import HomeBlogSection from "@/components/custom/(home)/blog/home-blog-section";
import BlogPageList from "@/components/custom/(blog)/blog-page-list";
import Feedbacks from "@/components/custom/(home)/feedbacks";
import { Suspense } from "react";
import BlogListSkeleton from "@/components/custom/(skeletons)/blog-list-skeleton";
import ProjectListSkeleton from "@/components/custom/(skeletons)/project-list-seketon";

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
    { src: "/team/t2.jpeg", alt: "Image 5" },
  ];

  return (
    <main className="w-full min-h-screen flex justify-center bg-background">
      <div
        className="
          w-full
          max-w-screen-sm
          sm:max-w-screen-md
          md:max-w-screen-lg
          lg:max-w-screen-xl
          xl:max-w-screen-2xl
          2xl:max-w-[1600px]
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
        <ConfettiClientWrapper />
        <HeroSection lang={locale} />
        <AboutCombined locale={locale} />
        <KiboHeroVideo />
        {/* @ts-ignore */}
        <EducationSection locale={locale} />
        {/* @ts-ignore */}
        <SkillsSection locale={locale} />
        <TrustedByCompanies />
        {/* @ts-ignore */}
        <GallerySection locale={locale} />
        <CardCarousel
          images={images}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />

        {/* Project List with Suspense and Skeleton */}
        <Suspense fallback={<ProjectListSkeleton count={4} />}>
          <HomeProjectSection locale={locale} isHome={true} />
        </Suspense>

        {/* Blog List with Suspense and Skeleton */}
        <Suspense fallback={<BlogListSkeleton count={6} />}>
          <HomeBlogSection locale={locale} />
        </Suspense>

        {/* BlogPageList (if this is also async, wrap in Suspense) */}
        <Suspense fallback={<BlogListSkeleton count={6} />}>
          <BlogPageList locale={locale} />
        </Suspense>

        <Feedbacks locale={locale} />
      </div>
    </main>
  );
}
