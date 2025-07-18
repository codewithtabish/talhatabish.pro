import { SocialBar } from "@/components/custom/(home)/social-bar";
import ConfettiClientWrapper from "@/components/custom/(home)/particle-wrapper";
import HeroSection from "@/components/custom/(home)/hero-section";
import AboutCombined from "@/components/custom/(home)/hero-about-combined";
import HeroVideo from "@/components/custom/(home)/hero-video";
import EducationSection from "@/components/custom/(home)/education-section";
import SkillsSection from "@/components/custom/(home)/skill-section";
import { IconCloudDemo } from "@/components/custom/(home)/skill-icon-list";
import Feedbacks from "@/components/custom/(home)/feedbacks";
import GallerySection from "@/components/custom/(home)/gallery-section";
import GalleryWrapper from "@/components/custom/(home)/gallery-wrapper";
import { VideoPlayer } from "@/components/ui/kibo-ui/video-player";
import KiboHeroVideo from "@/components/custom/(home)/kibo-hero-video";
import HomeBlogSection from "@/components/custom/(home)/blog/home-blog-section";
import HomeProjectSection from "@/components/custom/(home)/(project)/project-section";
import TrustedByCompanies from "@/components/mvpblocks/sparkles-logo";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="w-full min-h-screen flex justify-center bg-background">
      {/* <SocialBar /> */}
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
        <KiboHeroVideo/>
      {/* @ts-ignore */}
        <EducationSection locale={locale} />
        {/* @ts-ignore */}
        <SkillsSection locale={locale} />
        <TrustedByCompanies/>
        {/* <IconCloudDemo /> */}
        {/* @ts-ignore */}
        <GallerySection locale={locale} />
        <GalleryWrapper />

        {/*  */}
        <HomeProjectSection locale={locale}/>
        <HomeBlogSection locale={locale}/>
        <Feedbacks locale={locale} />
      </div>
    </main>
  );
}
