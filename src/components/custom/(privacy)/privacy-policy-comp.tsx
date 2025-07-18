import React from "react";
import ReactMarkdown from "react-markdown";
import privacyPolicyContent, { PrivacyPolicyContent } from "@/utils/language-data/privacy-policy";

interface PrivacyPolicyProps {
  lang?: string; // e.g. "en", "ur", "ar", etc.
}

const PrivacyPolicyComp: React.FC<PrivacyPolicyProps> = ({ lang = "en" }) => {
    // @ts-ignore
  const policy: PrivacyPolicyContent = privacyPolicyContent[lang] || privacyPolicyContent["en"];

  // Detect RTL languages for direction
  const isRTL = lang === "ar" || lang === "ur";

  return (
    <section
      className={`md:max-w-4xl 2xl:max-w-6xl mx-auto   px-6 py-10 mt-8 mb-16 ${
        isRTL ? "rtl text-right" : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1 className="text-3xl font-bold mb-2">{policy.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{policy.lastUpdated}</p>
      <ReactMarkdown
        components={{
          h2: ({node, ...props}) => (
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800" {...props} />
          ),
          h3: ({node, ...props}) => (
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800" {...props} />
          ),
          p: ({node, ...props}) => (
            <p className="text-base leading-relaxed mb-5 text-gray-700" {...props} />
          ),
          ul: ({node, ...props}) => (
            <ul className="list-disc pl-6 mb-5" {...props} />
          ),
          ol: ({node, ...props}) => (
            <ol className="list-decimal pl-6 mb-5" {...props} />
          ),
          li: ({node, ...props}) => (
            <li className="mb-2 text-gray-700" {...props} />
          ),
          strong: ({node, ...props}) => (
            <strong className="font-semibold text-gray-900" {...props} />
          ),
          a: ({node, ...props}) => (
            <a className="text-blue-600 underline" {...props} />
          ),
        }}
      >
        {policy.content}
      </ReactMarkdown>
    </section>
  );
};

export default PrivacyPolicyComp;
