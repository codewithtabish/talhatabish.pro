"use client";

import React from "react";
import AboutSection from "./hero-about";
import heroAbout from "@/utils/language-data/hero-about";

const RTL_LANGS = ["ur", "ar", "fa", "he"] as const;
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es", "fa", "he"
] as const;
type LocaleType = typeof allowedLocales[number];

type AboutCombinedProps = {
  locale?: string;
};

const AboutCombined: React.FC<AboutCombinedProps> = ({ locale = "en" }) => {
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  const isRTL = RTL_LANGS.includes(safeLocale as (typeof RTL_LANGS)[number]);
  // @ts-ignore
  const aboutData = heroAbout[safeLocale] || heroAbout.en;

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
        px-2
        sm:px-4
        md:px-8
        lg:px-10
        py-8
        sm:py-12
        md:py-16
        transition-all
      "
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="about-title"
    >
      <div className={`w-full ${isRTL ? "text-right" : "text-left"}`}>
        <h3
          id="about-title"
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-neutral-800
            dark:text-neutral-100
            mb-4
            transition-all
          "
        >
          {aboutData?.title || "About"}
        </h3>
        <AboutSection locale={safeLocale} />
      </div>
    </section>
  );
};

export default AboutCombined;
