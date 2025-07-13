"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import educationContent from "@/utils/language-data/education-content";

const RTL_LANGS = ["ur", "ar", "fa", "he"];

type Props = {
  locale?: keyof typeof educationContent;
};

const EducationSection: React.FC<Props> = ({ locale = "en" }) => {
  const content = educationContent[locale] || educationContent["en"];
  const { section, steps } = content;
  const isRTL = RTL_LANGS.includes(locale);

  return (
    <section className="w-full" dir={isRTL ? "rtl" : "ltr"}>
      <div className="min-h-[80vh] w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-10">
        {/* Info Section */}
    <div
  className={`flex-1 flex flex-col justify-center w-full order-1 ${
    isRTL ? "items-end text-right" : "items-start text-left"
  }`}
>
 <span
  className={`text-sm text-muted-foreground mb-2 ${
    isRTL ? "text-right self-end w-full" : "text-left self-start w-full"
  }`}
>
  {section.subheading}
</span>

<h2
  className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
    isRTL ? "text-right self-end w-full" : "text-left self-start w-full"
  }`}
>
  {section.heading}
</h2>


  <div className="mb-6 space-y-1">
    {section.desc.map((line, i) => (
      <p key={i} className="text-muted-foreground text-sm md:text-base">
        {line}
      </p>
    ))}
  </div>

  <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? "justify-end" : ""}`}>
    <button className="border border-primary px-5 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition">
      {section.downloadCV}
    </button>
    <button className="hidden lg:flex items-center gap-2 px-5 py-2 font-medium text-primary hover:underline">
      <ExternalLink size={18} />
      {section.viewProjects}
    </button>
  </div>
</div>


        {/* Timeline Section */}
        <div className={`flex-1 relative w-full order-2`}>
          <div
            className={`absolute ${isRTL ? "left-0 lg:left-6" : "right-0 lg:right-6"} top-0 h-full w-10 flex flex-col items-center z-0 pointer-events-none`}
          >
            {steps.map((_, idx) => (
              <React.Fragment key={idx}>
                <div
                  className="w-1"
                  style={{
                    height: "1.5rem",
                    borderLeft: "2px dashed var(--primary, #3b82f6)",
                    margin: "0.25rem 0",
                  }}
                />
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow z-20" />
              </React.Fragment>
            ))}
          </div>

          <ol className="relative z-10 flex flex-col gap-12">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`relative w-full flex flex-col sm:flex-row${isRTL ? "-reverse" : ""} text-${isRTL ? "right" : "left"}`}
              >
                <div className="hidden sm:block w-10 flex-shrink-0" />
                <div className="group w-full max-w-full rounded-2xl border border-primary/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <Image
                    src={step.logo}
                    alt={step.institution}
                    width={64}
                    height={64}
                    className="object-contain shadow-md rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold flex items-center gap-1 hover:underline text-primary"
                      >
                        {step.institution}
                        <ExternalLink size={16} className={isRTL ? "mr-1" : ""} />
                      </a>
                      <span className="text-xs text-muted-foreground">{step.year}</span>
                    </div>
                    <div className="text-base font-medium mt-1 dark:text-gray-300">
                      {step.title}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 dark:text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
