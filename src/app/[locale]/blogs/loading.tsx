"use client";

import BlogListSkeleton from "@/components/custom/(skeletons)/blog-list-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      {/* Top content skeleton */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 text-center mt-12 mb-8">
        <Skeleton className="mx-auto mb-4 h-10 w-1/2 rounded" />
        <Skeleton className="mx-auto mb-2 h-6 w-1/3 rounded" />
        <Skeleton className="mx-auto h-4 w-2/3 rounded" />
      </div>
      <div className="min-h-screen">
        <BlogListSkeleton count={9} />
      </div>
    </div>
  );
}
