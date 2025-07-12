"use client";
import { siteContent } from "@/utils/site-content";

type AboutSectionProps = {
  locale: string;
};

export default function AboutSection({ locale }: AboutSectionProps) {
  // Fallback to English if locale not found
//   @ts-ignores
  const about = siteContent[locale]?.about || siteContent.en.about;

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[40vh]">
      <div className="w-full  px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
          {about.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-700">
          {about.content}
        </p>
      </div>
    </section>
  );
}
