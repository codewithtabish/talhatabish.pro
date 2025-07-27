import { Suspense } from "react";
import HomeProjectsGrid from "@/components/custom/(home)/(project)/home-project-grid";
import { ProjectPageTopContent } from "@/components/custom/(projects)/project-top-content";
import ProjectListSkeleton from "@/components/custom/(skeletons)/project-list-seketon";
import { getProjectsMetadata } from "@/lib/seo/project-seo";
import BackButtonComp from "@/components/custom/(general)/back-comp";

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

// Dynamic SEO metadata for Projects page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getProjectsMetadata(safeLocale);
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;

  return (
    <div>
            <BackButtonComp locale={locale}/>
      
      <ProjectPageTopContent locale={safeLocale} />
      <div className='min-h-screen'>
        <Suspense fallback={<ProjectListSkeleton count={6} />}>
          <HomeProjectsGrid locale={safeLocale} isHome={false} />
        </Suspense>
      </div>
    </div>
  );
}
