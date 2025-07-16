"use client";

import blogsContent from "@/utils/language-data/blog-content";


type Props = {
  locale?: keyof typeof blogsContent;
};

export default function BlogSectionHeader({ locale = "en" }: Props) {
  const content = blogsContent[locale]?.section || blogsContent.en.section;

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-background">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  bg-clip-text dark:text-gray-400 mb-2">
          {content.title}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-gray-300 mb-4">
          {content.subtitle}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>
    </section>
  );
}
