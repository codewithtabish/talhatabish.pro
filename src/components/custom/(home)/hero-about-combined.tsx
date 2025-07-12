"use client";

import React from "react";
import AboutSection from "./hero-about";
import heroAbout from "@/utils/language-data/hero-about"; // Adjust the path as needed

const AboutCombined = ({ locale = "en" }) => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-[5vw] py-12 md:py-20 max-w-6xl mx-auto gap-8 md:gap-16">
      {/* Text Section */}
      <div className="w-full text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
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
