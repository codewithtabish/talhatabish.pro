import { getBlogBySlug } from '@/actions/get-single-blogs';
import ProjectRichRenderWrapper from '@/components/custom/(general)/project-rich-render-wrapper';
import ShareButtons from '@/components/custom/(general)/share-button';
import Image from 'next/image';
import React from 'react';
import { Ghost } from "lucide-react";
import { resolveMetadataFromBlogSEO } from '@/lib/seo/single-blog-seo';
import BackButtonComp from '@/components/custom/(general)/back-comp';

// --- Localized "not found" messages ---
const notFoundMessages: Record<string, { title: string; desc: string }> = {
  en: {
    title: "Blog not found",
    desc: "Sorry, this blog post is not available in this language yet.",
  },
  ur: {
    title: "بلاگ نہیں ملا",
    desc: "معذرت، اس زبان میں یہ بلاگ دستیاب نہیں ہے۔",
  },
  ar: {
    title: "لم يتم العثور على المدونة",
    desc: "عذراً، هذه التدوينة غير متوفرة بهذه اللغة بعد.",
  },
  zh: {
    title: "未找到博客",
    desc: "抱歉，该语言下还没有这篇博客。",
  },
  fr: {
    title: "Blog introuvable",
    desc: "Désolé, cet article n'est pas encore disponible dans cette langue.",
  },
  de: {
    title: "Blog nicht gefunden",
    desc: "Entschuldigung, dieser Blogbeitrag ist in dieser Sprache noch nicht verfügbar.",
  },
  ja: {
    title: "ブログが見つかりません",
    desc: "申し訳ありませんが、この言語ではまだこのブログ記事は利用できません。",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const single_blog = await getBlogBySlug(slug, locale);
  console.log("Single seo is ",single_blog?.blogSeo)

  if (!single_blog?.blogSeo) return {};
  return resolveMetadataFromBlogSEO(single_blog?.blogSeo);
}

export default async function SingleBlogSlug({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const single_blog = await getBlogBySlug(slug, locale);
    console.log("Single seo is after ",single_blog?.blogSeo)


  
  

  if (!single_blog) {
    const msg = notFoundMessages[locale] || notFoundMessages["en"];
    return (
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-24">
        <Ghost size={64} className="text-gray-400 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-2 text-center">
          {msg.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 text-center max-w-xl">
          {msg.desc}
        </p>
      </section>
    );
  }

  return (
    <>
      {/* --- JSON-LD Structured Data for SEO (for Google Rich Results) --- */}
      {single_blog.blogSeo?.structuredData && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(single_blog?.blogSeo?.structuredData, null, 2),
          }}
        />
      )}

      {/* --- Google AdSense Example (uncomment and configure as needed) --- */}
      {/* <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot="YYYYYYY"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins> */}

      <article
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
          py-8
          md:px-6
          lg:px-8
          xl:px-10
          2xl:px-12
          relative
        "
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
                    <BackButtonComp locale={locale}/>
        
        {/* Responsive Banner Image */}
        {single_blog?.blogBannerImage && (
          <div className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] relative rounded-xl overflow-hidden shadow mb-8">
            <Image
              src={single_blog.blogBannerImage}
              alt={single_blog.title}
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 768px) 100vw,
                (max-width: 1024px) 100vw,
                (max-width: 1280px) 100vw,
                (max-width: 1536px) 100vw,
                1536px
              "
              className="object-cover object-center"
              quality={80}
              placeholder="blur"
              blurDataURL="/banner-blur.png"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100" itemProp="headline">
          {single_blog?.title}
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-6 text-justify" itemProp="description">
          {single_blog?.shortDescription}
        </p>

        {/* Main Content */}
        <div className="mb-8 text-justify" itemProp="articleBody">
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
      </article>
    </>
  );
}
