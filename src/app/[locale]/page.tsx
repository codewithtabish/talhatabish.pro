import dynamic from "next/dynamic";
import { SocialBar } from "@/components/custom/(home)/social-bar";
import Header from "@/components/custom/header";
import HeroDataSection from "@/components/custom/hero-data";
import HeroInfo from "@/components/custom/hero-info";
import ConfettiClientWrapper from "@/components/custom/(home)/particle-wrapper";




export default function LocalePage({ params }: { params: { locale: string } }) {
  return (
    <main className="container md:max-w-4xl mx-auto ">
      <SocialBar />
            <ConfettiClientWrapper />

            {/* <ConfettiClientWrapper /> */}

      {/* <Confetti manualstart /> or remove manualstart to auto-fire on mount */}
      {/* <ConfettiButton>Celebrate!</ConfettiButton> */}
      {/* <HeroDataSection locale={params.locale}/> */}
      {/* <ConfettiOverlay/> */}
      {/* <HeroInfo locale={params.locale} /> */}
    </main>
  );
}
