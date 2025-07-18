import React from 'react';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/actions/get-single-project';
import ProjectRichRenderWrapper from '@/components/custom/(general)/project-rich-render-wrapper';
import Image from 'next/image';
import { resolveMetadataFromSEO } from '@/utils/seo-utils';
import ShareButtons from '@/components/custom/(general)/share-button';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

// ✅ Dynamic metadata export using your SEO utility
export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const { data: project } = await getProjectBySlug(slug, locale);

  if (!project?.seo) return {};
  return resolveMetadataFromSEO(project.seo);
}

export default async function SingleProjectBySlug({ params }: Props) {
  const { slug, locale } = await params;
  const { data: project, error } = await getProjectBySlug(slug, locale);

  if (error) {
    return <div className="text-red-600 bg-red-50 p-4 rounded">Error: {error}</div>;
  }

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": project?.title,
              "url": project.seo?.canonicalURL || `https://yourdomain.com/projects/${project?.slug}`,
              "description": project?.shortDescription,
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "All",
              "image": project?.bannerImage || undefined,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "keywords": project?.keywords || undefined,
              "creator": {
                "@type": "Person",
                "name": "Talha Tabish"
              }
            },
            null,
            2
          )
        }}
      />

      {/* ✅ Responsive Container */}
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
        {/* ✅ Responsive Banner Image */}
        {project.bannerImage && (
          <div className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] relative rounded-xl overflow-hidden shadow mb-8">
            <Image
              src={project.bannerImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100">
          {project.title}
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-6 text-justify">
          {project.shortDescription}
        </p>

        {/* Main Content */}
        <div className="mb-8 text-justify">
          <ProjectRichRenderWrapper blocks={Array.isArray(project?.content) ? project.content : []} />
        </div>

        {/* Tech Stack & Keywords */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStacks &&
            project.techStacks.split(',').map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
              >
                {tech.trim()}
              </span>
            ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:underline font-medium"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Separator: Half-width Double Line */}
      <div className="flex justify-center mb-6">
        <div className="w-1/2 border-t-2 border-b-2 border-gray-300 dark:border-gray-600 h-[4px]" />
      </div>

      {/* Share Heading */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
        Share this project
      </h2>

      {/* Share Buttons */}
      <ShareButtons title={project.title} />
      </div>
    </>
  );
}
