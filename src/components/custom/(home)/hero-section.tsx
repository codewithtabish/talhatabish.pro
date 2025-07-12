import React from "react";
import heroContent from "@/utils/language-data/hero-content";
import ThreeDCard from "./threed-card";

const IMAGE_URL = "https://randomuser.me/api/portraits/men/32.jpg"; // Optional image

export default function HeroSection({ lang = "en" }) {
  // @ts-ignore
  const content = heroContent[lang] || heroContent.en;

  return (
    <div className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-[5vw] py-12">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
          {content.title}
        </h1>
        <p className="text-base md:text-xl text-neutral-600 mt-6 max-w-xl mx-auto lg:mx-0 font-serif italic">
          {content.desc} ...
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <ThreeDCard content={content} />
      </div>
    </div>
  );
}
