"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="relative items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
        }}
      />

      <div className="relative z-[100] mx-auto w-full max-w-7xl px-2 sm:px-6 py-10 text-center">
        {/* Badge Skeleton */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-primary/15 to-primary/5 px-4 py-2 backdrop-blur-sm">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-4 rounded" />
        </div>

        {/* Heading Skeleton */}
        <Skeleton className="h-12 w-2/3 mx-auto mb-4 rounded" />

        {/* Subtitle Skeleton */}
        <Skeleton className="h-6 w-1/2 mx-auto mb-12 rounded" />

        {/* Email Form Skeleton */}
        <div className="mx-auto flex flex-col gap-4 sm:flex-row max-w-xl mb-8">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-40 rounded-xl" />
        </div>

        {/* Avatars and joined count Skeleton */}
        <div className="mt-10 flex items-center justify-center gap-1">
          <div className="flex -space-x-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-full border-2" />
            ))}
          </div>
          <Skeleton className="h-4 w-24 ml-2 rounded" />
        </div>

        {/* Tabs Skeleton */}
        <div className="md:max-w-2xl mx-auto mt-12">
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-32 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Waitlist Projects Skeleton */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="text-left">
              <Skeleton className="mb-4 h-40 w-full rounded-lg" />
              <Skeleton className="mb-2 h-6 w-1/2 rounded" />
              <Skeleton className="mb-2 h-4 w-2/3 rounded" />
              <div className="flex items-center justify-between text-xs mb-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-4 w-16 rounded" />
              </div>
              <Skeleton className="h-8 w-32 mt-2 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
