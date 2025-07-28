import { getProjects } from "@/actions/projects";
import { ProjectPageCard } from "./home-project-card";
import React from "react";
import { Ghost } from "lucide-react";

// Supported locales and their "not found" messages
const notFoundMessages: Record<string, { title: string; desc: string }> = {
  en: {
    title: "No projects found",
    desc: "We couldn't find any projects in this language yet.",
  },
  ur: {
    title: "کوئی پراجیکٹ نہیں ملا",
    desc: "اس زبان میں ابھی تک کوئی پراجیکٹ دستیاب نہیں ہے۔",
  },
  ar: {
    title: "لم يتم العثور على مشاريع",
    desc: "لم نعثر على أي مشاريع بهذه اللغة بعد.",
  },
  zh: {
    title: "未找到项目",
    desc: "该语言下还没有项目。",
  },
  fr: {
    title: "Aucun projet trouvé",
    desc: "Aucun projet trouvé dans cette langue pour le moment.",
  },
  de: {
    title: "Keine Projekte gefunden",
    desc: "In dieser Sprache wurden noch keine Projekte gefunden.",
  },
  ja: {
    title: "プロジェクトが見つかりません",
    desc: "この言語ではまだプロジェクトが見つかりませんでした。",
  },
};

type Props = {
  locale?: string;
  isHome?: boolean;
};

export default async function HomeProjectsGrid({

  locale = "en",
  isHome = true,
}: Props) {
  let data: any[] = [];
  let error: string | null = null;

  try {
    const result = await getProjects(locale);
    // console.log(object)
    data = result.data || [];
    error = result.error || null;
  } catch (err: any) {
    error = err?.message || "Unknown error";
  }

  // Error state
  if (error) {
    return (
      <section aria-live="polite" className="w-full py-12">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4 bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <Ghost size={48} className="text-red-400" />
          <h2 className="text-xl font-bold text-red-700">Error loading projects</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  // Not found state (localized)
  if (!data.length) {
    const msg = notFoundMessages[locale] || notFoundMessages["en"];
    return (
      <section aria-live="polite" className="w-full py-12">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4 bg-gray-50 dark:bg-zinc-900/40 border border-gray-200 dark:border-zinc-800 rounded-lg p-8 text-center">
          <Ghost size={48} className="text-gray-400 dark:text-gray-500" />
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">{msg.title}</h2>
          <p className="text-gray-500 dark:text-gray-400">{msg.desc}</p>
        </div>
      </section>
    );
  }

  // Show only first 4 if isHome is true, otherwise show all
  const projectsToShow = isHome ? data.slice(0, 4) : data;

  // console.log('Projects to show:', projectsToShow);

  return (
    <section
      className="w-full py-8"
      aria-label="Projects"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-6
        w-full
        max-w-[100vw]
        mx-auto
        px-0
      ">
        {projectsToShow.map((project) => (
          <ProjectPageCard
            key={project?.id}
            title={project?.title}
            slug={project?.slug}
            shortDescription={project?.shortDescription}
            imageUrl={
              project?.cardImages ||
              "https://d1d7s2thm5nyyd.cloudfront.net/project-card-image.webp"
            }
            liveUrl={project?.liveUrl}
            githubUrl={project?.githubUrl}
            techStacks={project?.techStacks}
            isLive={project?.isLive}
            isPublic={project?.isPublic}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
