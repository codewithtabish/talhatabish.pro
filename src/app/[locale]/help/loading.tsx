"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-2/3 mb-4 rounded mx-auto" />

      {/* Intro Skeleton */}
      <Skeleton className="h-4 w-1/2 mb-8 rounded mx-auto" />

      {/* Sections Skeleton */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="mb-6">
          <Skeleton className="h-6 w-1/3 mb-2 rounded" />
          <Skeleton className="h-4 w-2/3 rounded" />
        </div>
      ))}

      {/* Chat Prompt Skeleton */}
      <div className="mt-10 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
    </section>
  );
}
