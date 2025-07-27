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
        py-8
        sm:py-12
        md:py-16
        lg:py-20
        xl:py-24
        2xl:py-32
        flex flex-col items-center
      "
    >
      {/* Heading Skeleton */}
      <Skeleton className="h-12 w-2/3 max-w-lg mb-8 rounded mx-auto" />

      {/* Badge Skeleton */}
      <div className="flex justify-center mb-8">
        <Skeleton className="h-8 w-40 rounded-full" />
      </div>

      {/* Subtitle Skeleton */}
      <Skeleton className="h-6 w-3/4 max-w-md mx-auto mb-10 rounded" />

      {/* Email Form Skeleton */}
      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10 w-full">
        <Skeleton className="h-12 w-full sm:w-2/3 rounded" />
        <Skeleton className="h-12 w-full sm:w-1/3 rounded" />
      </div>

      {/* Avatars and joined count Skeleton */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-10 rounded-full" />
        ))}
        <Skeleton className="h-6 w-24 rounded ml-2" />
      </div>

      {/* Tabs Skeleton */}
      <div className="flex gap-4 mb-10 max-w-2xl mx-auto">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-24 rounded" />
        ))}
      </div>

      {/* Projects Skeleton */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-6 w-1/2 rounded" />
            <Skeleton className="h-4 w-3/4 rounded" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-16 rounded" />
            </div>
            <Skeleton className="h-8 w-32 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
