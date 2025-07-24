// components/BlogTopContent.tsx

import { blogTopContent } from "@/utils/language-data/blog-top-content";

type BlogTopContentProps = {
  locale: string;
};

export function BlogTopContent({ locale }: BlogTopContentProps) {
    // @ts-ignore
  const content = blogTopContent[locale] || blogTopContent["en"];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <span className="block text-sm font-medium text-muted-foreground mb-2">
        {content.section}
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        {content.heading}
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8">
        {content.subheading}
      </p>
      {/* <button
        className="inline-flex items-center px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition"
        type="button"
      >
        {content.viewAll}
      </button> */}
    </div>
  );
}
