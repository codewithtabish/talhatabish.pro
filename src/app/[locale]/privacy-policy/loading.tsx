"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-2xl
        lg:max-w-4xl
        xl:max-w-5xl
        2xl:max-w-6xl
        mx-auto
        px-2
        sm:px-4
        md:px-8
        py-8
        sm:py-12
        md:py-16
        mt-8
        mb-16
      
        transition-all
      "
    >
      {/* Title Skeleton */}
      <Skeleton className="h-12 w-2/3 mb-2 rounded mx-auto" />

      {/* Last Updated Skeleton */}
      <Skeleton className="h-4 w-1/4 mb-8 rounded mx-auto" />

      {/* Welcome/Intro Paragraph */}
      <Skeleton className="h-5 w-3/4 mb-3 rounded mx-auto" />
      <Skeleton className="h-4 w-full mb-2 rounded" />
      <Skeleton className="h-4 w-11/12 mb-2 rounded" />
      <Skeleton className="h-4 w-10/12 mb-6 rounded" />

      {/* Section 1 Heading */}
      <Skeleton className="h-8 w-2/3 mb-3 rounded" />

      {/* Subsection a */}
      <Skeleton className="h-5 w-1/2 mb-2 rounded" />
      <Skeleton className="h-4 w-full mb-2 rounded" />
      <Skeleton className="h-4 w-10/12 mb-4 rounded" />

      {/* Subsection b */}
      <Skeleton className="h-5 w-1/2 mb-2 rounded" />
      <Skeleton className="h-4 w-full mb-2 rounded" />
      <Skeleton className="h-4 w-10/12 mb-6 rounded" />

      {/* Section 2 Heading */}
      <Skeleton className="h-8 w-2/3 mb-3 rounded" />

      {/* More Paragraphs */}
      <Skeleton className="h-4 w-full mb-2 rounded" />
      <Skeleton className="h-4 w-11/12 mb-2 rounded" />
      <Skeleton className="h-4 w-10/12 mb-2 rounded" />
      <Skeleton className="h-4 w-2/3 mb-2 rounded" />

      {/* List Items */}
      <div className="pl-6 space-y-2">
        <Skeleton className="h-4 w-2/3 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
        <Skeleton className="h-4 w-1/3 rounded" />
      </div>

      {/* More Paragraphs */}
      <Skeleton className="h-4 w-5/6 mt-4 rounded" />
      <Skeleton className="h-4 w-2/3 rounded" />
      <Skeleton className="h-4 w-1/2 rounded" />
    </section>
  );
}
