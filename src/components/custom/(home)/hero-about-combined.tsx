"use client";

import React from "react";
import AboutSection from "./hero-about";
import heroAbout from "@/utils/language-data/hero-about";

const RTL_LANGS = ["ur", "ar", "fa", "he"]; // List of RTL languages

const AboutCombined = ({ locale = "en" }) => {
  const isRTL = RTL_LANGS.includes(locale);

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 lg:px-10">
      <div className={`w-full text-${isRTL ? "right" : "left"}`}>
        <h3 className="text-2xl font-bold mb-6 text-neutral-800">
          {
            // @ts-ignore
            heroAbout[locale]?.title
          }
        </h3>
        <AboutSection locale={locale} />
      </div>
    </section>
  );
};

export default AboutCombined;
