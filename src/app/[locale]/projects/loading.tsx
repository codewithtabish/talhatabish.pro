"use client";

import ProjectListSkeleton from "@/components/custom/(skeletons)/project-list-seketon";


export default function Loading() {
  return (
    <div>
      {/* Top content skeleton */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 text-center mt-12 mb-8">
        <div className="mx-auto mb-4 h-10 w-1/2 rounded bg-muted/60 animate-pulse" />
        <div className="mx-auto mb-2 h-6 w-1/3 rounded bg-muted/50 animate-pulse" />
        <div className="mx-auto h-4 w-2/3 rounded bg-muted/40 animate-pulse" />
      </div>
      <div className="min-h-screen">
        <ProjectListSkeleton count={6} />
      </div>
    </div>
  );
}
