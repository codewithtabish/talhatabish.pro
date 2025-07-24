"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section
      className="relative w-full pt-10 pb-6 sm:pt-16 sm:pb-10 overflow-x-hidden"
    >
      {/* Header Section */}
      <div className="container relative z-10 mx-auto px-2 sm:px-4">
        <div className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <Skeleton className="h-10 w-2/3 mx-auto mb-4 rounded" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-2 rounded" />
        </div>

        {/* Mission & Vision Section */}
        <div className="relative mx-auto mb-10 sm:mb-16 max-w-7xl w-full">
          <div className="relative z-10 grid gap-6 sm:gap-10 md:gap-12 grid-cols-1 lg:grid-cols-2">
            {/* Mission */}
            <div className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-4 sm:p-8 md:p-10 backdrop-blur-3xl">
              <Skeleton className="h-16 w-16 mb-6 rounded-2xl" />
              <Skeleton className="h-8 w-1/2 mb-4 rounded" />
              <Skeleton className="h-4 w-full mb-2 rounded" />
              <Skeleton className="h-4 w-2/3 mb-2 rounded" />
            </div>
            {/* Vision */}
            <div className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-4 sm:p-8 md:p-10 backdrop-blur-3xl">
              <Skeleton className="h-16 w-16 mb-6 rounded-2xl" />
              <Skeleton className="h-8 w-1/2 mb-4 rounded" />
              <Skeleton className="h-4 w-full mb-2 rounded" />
              <Skeleton className="h-4 w-2/3 mb-2 rounded" />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-6 sm:mb-12 md:mb-20">
          <div className="mb-6 sm:mb-12 text-center">
            <Skeleton className="h-8 w-1/3 mx-auto mb-2 rounded" />
            <Skeleton className="h-4 w-1/2 mx-auto mb-2 rounded" />
          </div>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-full">
                <Skeleton className="h-24 w-full rounded-2xl mb-2" />
                <Skeleton className="h-6 w-1/2 mb-1 rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-8 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <Skeleton className="h-24 w-24 rounded-full mb-4" />
              <Skeleton className="h-6 w-1/2 mb-2 rounded" />
              <Skeleton className="h-4 w-2/3 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
