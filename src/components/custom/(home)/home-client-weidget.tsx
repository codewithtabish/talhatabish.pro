"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ConfettiClientWrapper = dynamic(
  () => import("@/components/custom/(home)/particle-wrapper"),
  { ssr: false }
);
const KiboHeroVideo = dynamic(
  () => import("@/components/custom/(home)/kibo-hero-video"),
  { ssr: false }
);

type Props = {
  section: "confetti" | "video";
};

export default function HomeClientWidgets({ section }: Props) {
  if (section === "confetti") {
    return (
      <div className="w-full max-w-[100vw] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-8 py-2">
        <Suspense
          fallback={
            <Skeleton className="w-full h-16 sm:h-24 md:h-32 rounded-xl mb-4" />
          }
        >
          <ConfettiClientWrapper />
        </Suspense>
      </div>
    );
  }
  if (section === "video") {
    return (
      <div className="w-full max-w-[100vw] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-8 py-2">
        <Suspense
          fallback={
            <Skeleton className="w-full h-48 sm:h-64 md:h-80 lg:h-96 2xl:h-[480px] rounded-xl mb-4" />
          }
        >
          <KiboHeroVideo />
        </Suspense>
      </div>
    );
  }
  return null;
}
