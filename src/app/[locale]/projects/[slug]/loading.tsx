"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
      className="
        w-full
        max-w-[100%]
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
        relative
      "
    >
      {/* Banner Image */}
      <Skeleton className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] rounded-xl mb-8" />

      {/* Title */}
      <Skeleton className="h-12 w-2/3 mt-4 mb-2 rounded" />

      {/* Short Description */}
      <Skeleton className="h-6 w-1/2 mb-6 rounded" />

      {/* Main Content */}
      <div className="mb-8 space-y-4">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>

      {/* Tech Stack & Keywords */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-20 rounded" />
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Skeleton className="h-8 w-32 rounded" />
        <Skeleton className="h-8 w-32 rounded" />
      </div>

      {/* Separator */}
      <div className="flex justify-center mb-6">
        <Skeleton className="w-1/2 h-[4px] rounded" />
      </div>

      {/* Share Heading */}
      <Skeleton className="h-6 w-1/4 mx-auto mb-2 rounded" />

      {/* Share Buttons */}
      <div className="flex justify-center gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-10 rounded-full" />
        ))}
      </div>
    </div>
  );
}
