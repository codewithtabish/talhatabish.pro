"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import educationContent from "@/utils/language-data/education-content";

// --- Types ---
const RTL_LANGS = ["ur", "ar", "fa", "he"] as const;
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es", "fa", "he"
] as const;
type LocaleType = typeof allowedLocales[number];

type Step = {
  logo: string;
  institution: string;
  url: string;
  year: string;
  title: string;
  description: string;
};

type Section = {
  subheading: string;
  heading: string;
  desc: string[];
  downloadCV: string;
  viewProjects: string;
};

type EducationContent = {
  section: Section;
  steps: Step[];
};

type Props = {
  locale?: string;
};

const fallbackLogo = "/logos/edu-fallback.svg"; // SVG fallback

const EducationSection: React.FC<Props> = ({ locale = "en" }) => {
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  // @ts-ignore
  const content: EducationContent = educationContent[safeLocale] || educationContent["en"];
  const { section, steps } = content;
  const isRTL = RTL_LANGS.includes(safeLocale as (typeof RTL_LANGS)[number]);

  // Track which images failed to load
  const [imgError, setImgError] = useState<{ [key: number]: boolean }>({});

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
      aria-labelledby="education-title"
    >
      <div className="
        flex
        flex-col
        lg:flex-row
        items-stretch
        justify-between
        gap-10
        w-full
      ">
        {/* Info Section */}
        <div
          className={`
            flex-1
            flex
            flex-col
            justify-center
            w-full
            ${isRTL ? "items-end text-right" : "items-start text-left"}
            mb-10
            lg:mb-0
            max-w-2xl
            mx-auto
            lg:mx-0
          `}
        >
          <span
            className={`
              text-sm
              text-muted-foreground
              mb-2
              ${isRTL ? "text-right self-end w-full" : "text-left self-start w-full"}
            `}
          >
            {section.subheading}
          </span>

          <h2
            id="education-title"
            className={`
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              mb-4
              leading-tight
              ${isRTL ? "text-right self-end w-full" : "text-left self-start w-full"}
            `}
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
            <Button
              variant="outline"
              className="px-5 py-2 font-medium cursor-pointer"
              aria-label={section.downloadCV}
            >
              {section.downloadCV}
            </Button>
            <Button
              asChild
              variant="ghost"
              className="hidden lg:flex cursor-pointer items-center gap-2 px-5 py-2 font-medium text-primary hover:underline"
              aria-label={section.viewProjects}
            >
              <a href="#projects">
                <ExternalLink size={18} />
                {section.viewProjects}
              </a>
            </Button>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="flex-1 w-full relative">
          {/* Timeline line and dots */}
          <div
            className={`
              absolute
              ${isRTL ? "left-0 lg:left-6" : "right-0 lg:right-6"}
              top-0
              h-full
              w-10
              flex flex-col items-center
              z-0
              pointer-events-none
            `}
            aria-hidden="true"
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

          <ol className="relative z-10 flex flex-col gap-8 sm:gap-10">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`
                  relative
                  w-full
                  flex
                  flex-col
                  sm:flex-row${isRTL ? "-reverse" : ""}
                  text-${isRTL ? "right" : "left"}
                `}
              >
                <div className="hidden sm:block w-10 flex-shrink-0" />
                <div className="
                  group
                  w-full
                  max-w-full
                  rounded-2xl
                  border
                  border-primary/10
                  p-4
                  sm:p-6
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  gap-4
                  sm:gap-6
                  bg-background
                  shadow-sm
                  transition-all
                ">
                  <div className="flex-shrink-0">
                    <Image
                      src={imgError[idx] ? fallbackLogo : step.logo}
                      alt={step.institution || "Education logo"}
                      width={64}
                      height={64}
                      className="object-contain shadow-md rounded-full bg-white"
                      onError={() => setImgError((prev) => ({ ...prev, [idx]: true }))}
                      loading="lazy"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold flex items-center gap-1 hover:underline text-primary"
                        aria-label={step.institution}
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
