// components/ProjectPageTopContent.tsx

import projectsPagesContent from "@/utils/language-data/project-pages-top-content";

type ProjectPageTopContentProps = {
  locale: string;
};

export function ProjectPageTopContent({ locale }: ProjectPageTopContentProps) {
    // @ts-ignore
  const content = projectsPagesContent[locale]?.section || projectsContent["en"].section;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <span className="block text-sm font-medium text-muted-foreground mb-2">
        {content.subtitle}
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        {content.title}
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8">
        {content.description}
      </p>
    </div>
  );
}
