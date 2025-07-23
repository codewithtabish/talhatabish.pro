import { getBlogBySlug } from '@/actions/get-single-blogs';
import ProjectRichRenderWrapper from '@/components/custom/(general)/project-rich-render-wrapper';
import ShareButtons from '@/components/custom/(general)/share-button';
import { resolveMetadataFromBlogSEO } from '@/lib/seo/metadata-single-blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

// --- SEO Metadata for Next.js 15 ---
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const single_blog = await getBlogBySlug(slug, locale);

  if (!single_blog?.blogSeo) return {};
  return resolveMetadataFromBlogSEO(single_blog.blogSeo);
}

export default async function SingleBlogSlug({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const single_blog = await getBlogBySlug(slug, locale);

  if (!single_blog) {
    notFound();
  }

  return (
    <>
      {/* --- JSON-LD Structured Data for SEO --- */}
      {single_blog.blogSeo?.structuredData && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(single_blog.blogSeo.structuredData, null, 2),
          }}
        />
      )}

      <div
        className="
          w-full
          max-w-[100%]
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
          2xl:max-w-screen-2xl
          mx-auto
          px-2
          sm:px-4
          md:px-6
          lg:px-8
          xl:px-10
          2xl:px-12
          relative
        "
      >
        {/* Responsive Banner Image */}
        {single_blog?.blogBannerImage && (
          <div className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] relative rounded-xl overflow-hidden shadow mb-8">
            <Image
              src={single_blog.blogBannerImage}
              alt={single_blog.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100">
          {single_blog?.title}
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-6 text-justify">
          {single_blog?.shortDescription}
        </p>

        {/* Main Content */}
        <div className="mb-8 text-justify">
          <ProjectRichRenderWrapper blocks={Array.isArray(single_blog?.content) ? single_blog.content : []} />
        </div>

        {/* Separator: Half-width Double Line */}
        <div className="flex justify-center mb-6">
          <div className="w-1/2 border-t-2 border-b-2 border-gray-300 dark:border-gray-600 h-[4px]" />
        </div>

        {/* Share Heading */}
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
          Share this blog
        </h2>

        {/* Share Buttons */}
        <ShareButtons title={single_blog?.title || " "} />
      </div>
    </>
  );
}
