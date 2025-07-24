// components/skeletons/ProjectListSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectListSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-72 w-full rounded-lg" />
      ))}
    </div>
  );
}
