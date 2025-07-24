"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section
      className="
        md:max-w-4xl
        2xl:max-w-6xl
        mx-auto
        px-4
        sm:px-6
        md:px-8
        py-10
        mt-8
        mb-16
      "
    >
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-2/3 mb-2 rounded mx-auto" />

      {/* Last Updated Skeleton */}
      <Skeleton className="h-4 w-1/4 mb-8 rounded mx-auto" />

      {/* Main Content Skeleton */}
      <div className="space-y-6">
        {/* Section Headings */}
        <Skeleton className="h-8 w-1/2 mb-2 rounded" />
        <Skeleton className="h-6 w-1/3 mb-2 rounded" />

        {/* Paragraphs */}
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />

        {/* List Items */}
        <div className="pl-6 space-y-2">
          <Skeleton className="h-4 w-2/3 rounded" />
          <Skeleton className="h-4 w-1/2 rounded" />
          <Skeleton className="h-4 w-1/3 rounded" />
        </div>

        {/* More Paragraphs */}
        <Skeleton className="h-4 w-5/6 rounded" />
        <Skeleton className="h-4 w-2/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
    </section>
  );
}
