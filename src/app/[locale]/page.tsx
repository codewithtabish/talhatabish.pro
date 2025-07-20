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
import { CardCarousel } from "@/components/ui/card-carousel";
import BlurVignette from "@/components/ui/blur-vignette";
import Image from "next/image";

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
  ]

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
        {/* <Scene/> */}
        <AboutCombined locale={locale} />
   
        {/* <BlurVignette
        radius="24px"
        inset="10px"
        transitionLength="100px"
        blur="15px"
        className=" rounded-[2.5rem]"
        switchView={true}
        >
          <video
          autoPlay={true}
          muted
          controls={true}
          contextMenu=""
          loop
          content="true"
          className="size-full md:max-w-4xl mx-auto  object-cover transition-all "
        >
          <source
          src="https://player.mux.com/IRyFZ2DG7qxQHdb3eIJW00vVYc7Al8e5L026b8K02zrv7A?metadata-video-title=2+minutes+of+relaxing+music%2C2+minute+meditation+music%2C2+minutes+meditation%2Cmusic+2+minute"
          
              // src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"

            // src="https://cdn.pixabay.com/video/2023/10/19/185726-876210695_large.mp4"
            type="video/mp4"
          />
        </video>
        </BlurVignette> */}
        <KiboHeroVideo/>
      {/* @ts-ignore */}
        <EducationSection locale={locale} />
        {/* @ts-ignore */}
        <SkillsSection locale={locale} />
        <TrustedByCompanies/>
        {/* <IconCloudDemo /> */}
        {/* @ts-ignore */}
        <GallerySection locale={locale} />
        <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
        />
        {/* <GalleryWrapper /> */}

        {/*  */}
        <HomeProjectSection locale={locale}/>
        <HomeBlogSection locale={locale}/>
        {/* <TestimonialsCarousel/> */}
        <Feedbacks locale={locale} />
      </div>
    </main>
  );
}
