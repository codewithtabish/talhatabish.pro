"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
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
        md:px-6
        lg:px-8
        xl:px-10
        2xl:px-12
        pt-8
        pb-16
        relative
      "
    >
      {/* Banner Image Skeleton */}
      <div className="w-full max-w-3xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-10">
        <Skeleton className="w-full h-full rounded-2xl" />
      </div>

      {/* Title Skeleton */}
      <Skeleton className="h-12 w-2/3 mx-auto mt-2 mb-4 rounded" />

      {/* Short Description Skeleton */}
      <Skeleton className="h-6 w-1/2 mx-auto mb-8 rounded" />

      {/* Main Content Skeleton */}
      <div className="mb-10 space-y-4 max-w-4xl mx-auto">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>

      {/* Tech Stack & Keywords Skeleton */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-20 rounded" />
        ))}
      </div>

      {/* Links Skeleton */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <Skeleton className="h-8 w-32 rounded" />
        <Skeleton className="h-8 w-32 rounded" />
      </div>

      {/* Separator Skeleton */}
      <div className="flex justify-center mb-8">
        <Skeleton className="w-1/2 h-[4px] rounded" />
      </div>

      {/* Share Heading Skeleton */}
      <Skeleton className="h-6 w-1/4 mx-auto mb-4 rounded" />

      {/* Share Buttons Skeleton */}
      <div className="flex justify-center gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-10 rounded-full" />
        ))}
      </div>
    </div>
  );
}
