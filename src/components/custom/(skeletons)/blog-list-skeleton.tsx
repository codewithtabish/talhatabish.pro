// components/skeletons/BlogListSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogListSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-72 w-full rounded-lg" />
      ))}
    </div>
  );
}
