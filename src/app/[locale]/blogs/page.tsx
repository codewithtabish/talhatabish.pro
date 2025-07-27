import { Suspense } from "react";
import BlogPageList from "@/components/custom/(blog)/blog-page-list";
import { BlogTopContent } from "@/components/custom/(blog)/blog-top-content";
import BlogListSkeleton from "@/components/custom/(skeletons)/blog-list-skeleton";
import { getBlogsMetadata } from "@/lib/seo/blog-seo";
import BackButtonComp from "@/components/custom/(general)/back-comp";

// --- Allowed locales and type ---
const allowedLocales = [
  "en", "ur", "ar", "fr", "zh", "de", "ja", "es"
] as const;
type LocaleType = typeof allowedLocales[number];

// Dynamic SEO metadata for Blogs page (Next.js 15: params is a Promise)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
  return getBlogsMetadata(safeLocale);
}

export default async function AllBlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;

  return (

    <div>
            <BackButtonComp locale={locale}/>
      
      <BlogTopContent locale={safeLocale} />
      <div className="min-h-screen">
        <Suspense fallback={<BlogListSkeleton count={6} />}>
          {/* @ts-ignore */}
          <BlogPageList locale={safeLocale} />
        </Suspense>
      </div>
      {/* ...rest of your blogs page... */}
    </div>
  );
}
