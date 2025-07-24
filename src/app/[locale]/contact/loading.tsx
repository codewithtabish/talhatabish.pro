"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      <section
        aria-labelledby="contact-heading"
        className="relative w-full overflow-hidden bg-background py-16 md:py-24"
      >
        {/* Background gradients (optional, for shimmer effect) */}
        <div
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-border/40 backdrop-blur-sm">
            <div className="grid md:grid-cols-2">
              {/* Left: Form Skeleton */}
              <div className="relative p-6 md:p-10">
                {/* Heading */}
                <div className="flex w-full gap-2 mb-4">
                  <Skeleton className="h-10 w-1/2 rounded" />
                  <Skeleton className="h-10 w-1/4 rounded" />
                </div>
                {/* Form fields */}
                <div className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Skeleton className="h-10 w-full rounded" />
                    <Skeleton className="h-10 w-full rounded" />
                  </div>
                  <Skeleton className="h-32 w-full rounded" />
                  {/* Translate button skeleton */}
                  <div className="flex justify-end">
                    <Skeleton className="h-8 w-32 rounded" />
                  </div>
                  {/* Submit button skeleton */}
                  <Skeleton className="h-12 w-full rounded" />
                </div>
              </div>
              {/* Right: Brand message and Earth */}
              <div className="relative my-8 flex items-center justify-center overflow-hidden pr-8">
                <div className="flex flex-col items-center justify-center overflow-hidden w-full">
                  <Skeleton className="h-[350px] md:h-[450px] w-full max-w-[450px] md:max-w-[550px] rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
