import { Suspense } from "react";
import BlogPageList from "@/components/custom/(blog)/blog-page-list";
import { BlogTopContent } from "@/components/custom/(blog)/blog-top-content";
import React from "react";
import BlogListSkeleton from "@/components/custom/(skeletons)/blog-list-skeleton";

export default async function AllBlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <BlogTopContent locale={locale} />
      <div className="min-h-screen">
        <Suspense fallback={<BlogListSkeleton count={6} />}>
          {/* @ts-ignore */}
          <BlogPageList locale={locale} />
        </Suspense>
      </div>
      {/* ...rest of your blogs page... */}
    </div>
  );
}
