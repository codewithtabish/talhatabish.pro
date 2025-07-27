"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ThreeDCard = dynamic(() => import("./threed-card"), {
  ssr: false,
  loading: () => (
    <Skeleton className="md:w-[240px] w-full h-[300px] rounded-xl shadow-xl mb-4" />
  ),
});

export default function ThreeDCardWrapper({ content }: { content: any }) {
  return (
    <Suspense
      fallback={
        <Skeleton className=" w-full h-[300px] rounded-xl shadow-xl mb-4" />
      }
    >
      <ThreeDCard content={content} />
    </Suspense>
  );
}
