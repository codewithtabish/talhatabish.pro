import React from "react";
import heroContent from "@/utils/language-data/hero-content";
import ThreeDCard from "./threed-card";

const IMAGE_URL = "https://randomuser.me/api/portraits/men/32.jpg"; // Change to your image

export default function HeroSection({ lang = "en" }) {
  // @ts-ignore
  const content = heroContent[lang] || heroContent.en;

  return (
    <div className="min-h-[80vh] flex items-center justify-between gap-12 px-[5vw]">
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-neutral-900">{content.title}</h1>
  <p className="text-xl text-neutral-600 mt-6 line-clamp-3 max-w-xl font-serif italic">
          {content.desc} ...
        </p>
      </div>
      <ThreeDCard content={content}/>
    
    </div>
  );
}
