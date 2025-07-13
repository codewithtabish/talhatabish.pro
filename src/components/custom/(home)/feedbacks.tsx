"use client";

import React, { useState } from "react";
import feedbacksContent, { FeedbacksContentMap } from "@/utils/language-data/feedbacks";

const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg";
const RTL_LANGS = ["ur", "ar", "fa", "he"];

interface FeedbacksProps {
  locale: string;
}

const Feedbacks: React.FC<FeedbacksProps> = ({ locale }) => {
  const content = (feedbacksContent as FeedbacksContentMap)[locale] || feedbacksContent["en"];
  const [index, setIndex] = useState(0);
  const isRTL = RTL_LANGS.includes(locale);

  if (!content) return null;

  const feedback = content.feedbacks[index];
  const subtitles = ["Founder of AppCo", "CTO at Webify", "Startup CEO"];
  const subtitle = subtitles[index % subtitles.length];

  const handleNext = () => {
    if (index < content.feedbacks.length - 1) {
      setIndex(index + 1);
      document.getElementById("feedback-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      document.getElementById("feedback-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="feedback-section" className="w-full px-4 sm:px-6 lg:px-10 py-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {content.section.title}
          </h2>
          <h3 className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            {content.section.subtitle}
          </h3>
        </div>

        {/* Feedback Text */}
        <blockquote className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-gray-500 max-w-3xl mb-8 leading-relaxed">
          &ldquo;{feedback.feedback}&rdquo;
        </blockquote>

        {/* Avatar + Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={AVATAR_URL}
            alt={feedback.name}
            className="w-16 h-16 rounded-full object-cover mb-2 shadow"
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{feedback.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          {index > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="text-gray-800 dark:text-gray-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {index < content.feedbacks.length - 1 && (
            <button
              onClick={handleNext}
              aria-label="Next"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="text-gray-800 dark:text-gray-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
