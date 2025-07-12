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
    <section className="w-full py-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 px-6 md:px-12 lg:px-[5vw]">
        {isRTL ? (
          <>
            {/* Timeline (RTL: Left Side) */}
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="absolute left-0 lg:left-6 top-0 h-full w-10 flex flex-col items-center z-0 pointer-events-none">
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
                  <li key={idx} className="relative flex flex-row-reverse text-right">
                    <div className="w-10 flex-shrink-0" />
                    <div className="group rounded-2xl border border-primary/10 p-6 flex flex-col md:flex-row items-center gap-6 w-full">
                      <Image
                        src={step.logo}
                        alt={step.institution}
                        width={64}
                        height={64}
                        className="object-contain shadow-md rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-row-reverse">
                          <a
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-primary hover:underline flex items-center gap-1"
                          >
                            {step.institution}
                            <ExternalLink size={16} className="mr-1" />
                          </a>
                          <span className="text-xs text-muted-foreground">{step.year}</span>
                        </div>
                        <div className="text-base font-medium mt-1 dark:text-gray-300">
                          {step.title}
                        </div>
                        <p className="text-muted-foreground mt-1 dark:text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Info (RTL: Right Side) */}
            <div className="flex-1 flex flex-col justify-center order-1 lg:order-2 items-end text-right">
              <span className="text-sm text-muted-foreground mb-2">{section.subheading}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {section.heading}
              </h2>
              <div className="mb-6 space-y-1">
                {section.desc.map((line, i) => (
                  <p key={i} className="text-muted-foreground">{line}</p>
                ))}
              </div>
              <div className="flex gap-3 justify-end flex-row-reverse">
                <button className="border border-primary px-5 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition">
                  {section.downloadCV}
                </button>
                <button className="flex items-center gap-2 px-5 py-2 font-medium text-primary hover:underline">
                  <ExternalLink size={18} />
                  {section.viewProjects}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Info (LTR: Left Side) */}
            <div className="flex-1 flex flex-col justify-center order-1 items-start text-left">
              <span className="text-sm text-muted-foreground mb-2">{section.subheading}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {section.heading}
              </h2>
              <div className="mb-6 space-y-1">
                {section.desc.map((line, i) => (
                  <p key={i} className="text-muted-foreground">{line}</p>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="border border-primary px-5 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition">
                  {section.downloadCV}
                </button>
                <button className="flex items-center gap-2 px-5 py-2 font-medium hover:underline">
                  <ExternalLink size={18} />
                  {section.viewProjects}
                </button>
              </div>
            </div>

            {/* Timeline (LTR: Right Side) */}
            <div className="flex-1 relative order-2">
              <div className="absolute right-0 lg:right-6 top-0 h-full w-10 flex flex-col items-center z-0 pointer-events-none">
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
                  <li key={idx} className="relative flex flex-row text-left">
                    <div className="w-10 flex-shrink-0" />
                    <div className="group rounded-2xl border border-primary/10 p-6 flex flex-col md:flex-row items-center gap-6 w-full">
                      <Image
                        src={step.logo}
                        alt={step.institution}
                        width={64}
                        height={64}
                        className="object-contain shadow-md rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <a
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold flex items-center gap-1 hover:underline"
                          >
                            {step.institution}
                            <ExternalLink size={16} />
                          </a>
                          <span className="text-xs text-muted-foreground">{step.year}</span>
                        </div>
                        <div className="text-base font-medium mt-1">{step.title}</div>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
