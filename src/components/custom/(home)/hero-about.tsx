import React from "react";
import heroAbout from "@/utils/language-data/hero-about";
import ReactMarkdown from "react-markdown";

const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es", "fa", "he"
] as const;
type LocaleType = typeof allowedLocales[number];

type AboutSectionProps = {
  locale?: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({ locale = "en" }) => {
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  // @ts-ignore
  const aboutData = heroAbout[safeLocale] || heroAbout.en;

  return (
    <div className="leading-relaxed md:leading-loose text-base text-gray-700 text-justify">
      <ReactMarkdown
        // Security: only allow basic markdown, no HTML
        disallowedElements={["script", "iframe", "style"]}
        skipHtml
      >
        {aboutData?.content || ""}
      </ReactMarkdown>
    </div>
  );
};

export default AboutSection;
