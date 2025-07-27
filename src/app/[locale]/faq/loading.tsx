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
        2xl:max-w-6xl
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
      {/* Badge Skeleton */}
      <div className="flex justify-center mb-4">
        <Skeleton className="h-7 w-20 rounded-full" />
      </div>

      {/* Title Skeleton */}
      <Skeleton className="h-12 w-2/3 mx-auto mb-3 rounded" />

      {/* Subtitle Skeleton */}
      <Skeleton className="h-6 w-3/4 mx-auto mb-10 rounded" />

      {/* FAQ Items Skeleton */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-border/60 bg-card/30 shadow-sm"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Skeleton className="h-5 w-2/3 rounded" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support Skeleton */}
      <div className="mx-auto mt-12 max-w-md rounded-lg p-6 text-center">
        <div className="mb-4 flex items-center justify-center">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <Skeleton className="h-5 w-1/2 mx-auto mb-2 rounded" />
        <Skeleton className="h-4 w-2/3 mx-auto mb-4 rounded" />
        <div className="flex justify-center">
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
      </div>
    </div>
  );
}
