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

// 👇 Notice params is a Promise now
export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // ✅ Await the params here
  const { locale } = await params;

  return (
    <main>
      <SocialBar />
      <ConfettiClientWrapper />
      <HeroSection lang={locale} />
      <AboutCombined locale={locale} />
      <HeroVideo locale={locale} />
      {/* @ts-ignores */}
      
      <EducationSection locale={locale} />
      {/* @ts-ignore */}
      <SkillsSection locale={locale}/>
      <IconCloudDemo/>
      {/* @ts-ignore */}
      <GallerySection locale={locale}/>
      <GalleryWrapper/>
      <Feedbacks locale={locale}/>
    </main>
  );
}
