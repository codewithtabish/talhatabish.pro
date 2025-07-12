"use client";

import React from "react";
import AboutSection from "./hero-about";
import heroAbout from "@/utils/language-data/hero-about"; // Adjust the path as needed

const AboutCombined = ({ locale = "en" }) => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto gap-8 md:gap-16">
      {/* Text Section */}
      <div className="w-full">
    
        <h3 className="text-xl md:text-2xl font-bold mb-4">{
            // @ts-ignore
        heroAbout[locale].title}</h3>
        <AboutSection locale={locale} />
      </div>
  
    </section>
  );
};

export default AboutCombined;
