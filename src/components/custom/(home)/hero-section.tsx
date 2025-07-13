import React from "react";
import heroContent from "@/utils/language-data/hero-content";
import ThreeDCard from "./threed-card";

export default function HeroSection({ lang = "en" }) {
  // @ts-ignore
  const content = heroContent[lang] || heroContent.en;

  return (
    <div className="min-h-[80vh] w-full max-w-screen-xl lg:px-10 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Text Block */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
          {content.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 mt-6 max-w-xl mx-auto lg:mx-0 font-serif italic">
          {content.desc} ...
        </p>
      </div>

      {/* 3D Card */}
      <div className="w-full lg:w-auto flex justify-center">
        <ThreeDCard content={content} />
      </div>
    </div>
  );
}
