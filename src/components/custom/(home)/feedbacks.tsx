"use client";

import React, { useState, useCallback } from "react";
import feedbacksContent, { FeedbacksContentMap } from "@/utils/language-data/feedbacks";
import Image from "next/image";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg";
const RTL_LANGS = ["ur", "ar", "fa", "he"] as const;

interface FeedbacksProps {
  locale: string;
}

const subtitles = [
  "Founder of AppCo",
  "CTO at Webify",
  "Startup CEO",
  "Product Lead",
  "Tech Evangelist",
  "Design Director",
];

const Feedbacks: React.FC<FeedbacksProps> = ({ locale }) => {
  const content = (feedbacksContent as FeedbacksContentMap)[locale] || feedbacksContent["en"];
  const [index, setIndex] = useState(0);
  const isRTL = RTL_LANGS.includes(locale as (typeof RTL_LANGS)[number]);

  if (!content) return null;

  const feedback = content.feedbacks[index];
  const subtitle = subtitles[index % subtitles.length];

  // Keyboard navigation for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft" && index > 0) handlePrev();
      if (e.key === "ArrowRight" && index < content.feedbacks.length - 1) handleNext();
    },
    [index, content.feedbacks.length]
  );

  function handleNext() {
    if (index < content.feedbacks.length - 1) setIndex(index + 1);
  }

  function handlePrev() {
    if (index > 0) setIndex(index - 1);
  }

  return (
    <section
      id="feedback-section"
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
        py-8
        sm:py-12
        md:py-16
        relative
        transition-all
      "
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="feedback-title"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Glassy gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/60 to-transparent dark:from-[#1e293b]/60 dark:via-[#0f172a]/60 dark:to-transparent backdrop-blur-md" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center p-4 sm:p-8 relative">
        {/* Section Header */}
        <div className="mb-10">
          <h2
            id="feedback-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 drop-shadow"
          >
            {content.section.title}
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 font-light">
            {content.section.subtitle}
          </h3>
        </div>

        {/* Feedback Text */}
        <blockquote className="font-light italic text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed transition-colors">
          <span className="text-3xl text-primary font-bold align-top">“</span>
          {feedback.feedback}
          <span className="text-3xl text-primary font-bold align-bottom">”</span>
        </blockquote>

        {/* Avatar + Name */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-16 h-16 mb-2">
            <Image
              src={AVATAR_URL}
              alt={feedback.name}
              fill
              className="rounded-full object-cover shadow-lg border-2 border-white dark:border-zinc-800 bg-gray-100 dark:bg-zinc-800"
              sizes="64px"
              priority
              placeholder="blur"
              blurDataURL="/avatar-blur.png"
              onError={(e) => {
                // fallback to Lucide User icon if image fails
                (e.target as HTMLImageElement).src = "";
              }}
            />
            {/* Fallback icon if image fails */}
            <span className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600 pointer-events-none">
              {/* <User size={32} /> */}
            </span>
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{feedback.name}</span>
          <span className="text-sm text-gray-400 dark:text-gray-400">{subtitle}</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={handlePrev}
            aria-label="Previous feedback"
            className={`p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 dark:hover:bg-primary/20 transition
              ${index === 0 ? "opacity-50 pointer-events-none" : ""}
            `}
            disabled={index === 0}
            tabIndex={0}
          >
            <ArrowLeft className="text-primary" size={28} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next feedback"
            className={`p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow hover:bg-primary/10 dark:hover:bg-primary/20 transition
              ${index === content.feedbacks.length - 1 ? "opacity-50 pointer-events-none" : ""}
            `}
            disabled={index === content.feedbacks.length - 1}
            tabIndex={0}
          >
            <ArrowRight className="text-primary" size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
