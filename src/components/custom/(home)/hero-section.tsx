import React from "react";
import heroContent from "@/utils/language-data/hero-content";
import ThreeDCardWrapper from "./threed-card-wrapper";

const allowedLangs = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LangType = typeof allowedLangs[number];

export default function HeroSection({ lang = "en" }: { lang?: string }) {
  const safeLang = (allowedLangs.includes(lang as LangType) ? lang : "en") as LangType;
  // @ts-ignore
  const content = heroContent[safeLang] || heroContent.en;

  return (
    <section
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-10
        px-2
        sm:px-4
        md:px-8
        py-10
        sm:py-16
        md:py-20
        min-h-[70vh]
      "
      aria-label="Hero Section"
    >
      {/* Text Block */}
      <div className="
        flex-1
        w-full
        text-center
        lg:text-left
        flex
        flex-col
        items-center
        lg:items-start
        justify-center
        max-w-2xl
        px-0
        sm:px-2
        md:px-4
      ">
        <h1 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          text-neutral-900
          dark:text-white
          leading-tight
          w-full
        ">
          {content.title}
        </h1>
        <p className="
          text-base
          sm:text-lg
          md:text-xl
          lg:text-2xl
          text-neutral-600
          dark:text-neutral-300
          mt-6
          max-w-xl
          font-serif
          italic
        ">
          {content.desc} ...
        </p>
      </div>

      {/* 3D Card */}
      <div className="
        flex-1
        w-full
        flex
        lg:justify-end
        justify-center
        items-center
        mt-10
        lg:mt-0
        max-w-xs
        sm:max-w-sm
        md:max-w-md
        lg:max-w-md
        xl:max-w-lg
        min-w-[220px]


      ">
        <ThreeDCardWrapper content={content} />
      </div>
    </section>
  );
}
