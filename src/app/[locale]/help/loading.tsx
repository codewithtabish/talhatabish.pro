"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-2xl
        lg:max-w-3xl
        xl:max-w-4xl
        mx-auto
        py-8
        sm:py-10
        md:py-12
        px-2
        sm:px-4
        md:px-8      
        shadow
        transition-all
        mt-8
        mb-16
      "
    >
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-2/3 mb-4 rounded mx-auto" />

      {/* Intro Skeleton */}
      <Skeleton className="h-5 w-3/4 mb-8 rounded mx-auto" />

      {/* Section Skeletons */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="mb-8">
          <Skeleton className="h-7 w-1/2 mb-2 rounded" />
          <Skeleton className="h-4 w-full mb-2 rounded" />
          <Skeleton className="h-4 w-5/6 mb-2 rounded" />
          <Skeleton className="h-4 w-2/3 mb-2 rounded" />
        </div>
      ))}

      {/* Chat Prompt Skeleton */}
      <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-600 rounded">
        <Skeleton className="h-5 w-1/2 rounded mx-auto" />
      </div>
    </div>
  );
}
