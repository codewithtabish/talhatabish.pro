"use client";
import feedbacksContent, { FeedbacksContentMap } from "@/utils/language-data/feedbacks";
import React, { useState } from "react";

// Placeholder avatar
const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg";

interface FeedbacksProps {
  locale: string;
}

const Feedbacks: React.FC<FeedbacksProps> = ({ locale }) => {
  const content = (feedbacksContent as FeedbacksContentMap)[locale] || feedbacksContent["en"];
  const [index, setIndex] = useState(0);

  if (!content) return null;

  const feedback = content.feedbacks[index];

  // For demo, let's add a subtitle for each feedback (you can add this to your data)
  const subtitles = [
    "Founder of AppCo",
    "CTO at Webify",
    "Startup CEO"
  ];
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
    <section id="feedback-section" className="py-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{content.section.title}</h2>
          <h3 className="text-xl  mb-2">{content.section.subtitle}</h3>
          {/* <p className="text-gray-600">{content.section.desc}</p> */}
        </div>

        {/* Feedback */}
        <blockquote className="text-center text-2xl dark:text-gray-400 font-medium md:max-w-3xl mx-auto mb-10 leading-relaxed">
          &ldquo;{feedback.feedback}&rdquo;
        </blockquote>

        {/* Avatar, Name, Subtitle */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={AVATAR_URL}
            alt={feedback.name}
            className="w-16 h-16 rounded-full object-cover mb-2"
          />
          <span className="font-bold text-lg text-gray-800">{feedback.name}</span>
          <span className="text-gray-500">{subtitle}</span>
        </div>

        {/* Navigation Icons */}
        <div className="flex gap-4">
          {index > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              {/* Left Chevron SVG */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {index < content.feedbacks.length - 1 && (
            <button
              onClick={handleNext}
              aria-label="Next"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              {/* Right Chevron SVG */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
