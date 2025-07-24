import { Suspense } from "react";
import ProjectsGrid from '@/components/custom/(home)/(project)/home-project-grid';
import { ProjectPageTopContent } from '@/components/custom/(projects)/project-top-content';
import React from 'react';
import ProjectListSkeleton from "@/components/custom/(skeletons)/project-list-seketon";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div>
      <ProjectPageTopContent locale={locale} />
      <div className='min-h-screen'>
        <Suspense fallback={<ProjectListSkeleton count={6} />}>
          <ProjectsGrid locale={locale} isHome={false} />
        </Suspense>
      </div>
    </div>
  );
}
