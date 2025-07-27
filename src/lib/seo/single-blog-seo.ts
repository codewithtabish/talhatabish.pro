import type { Metadata } from "next";

/**
 * Resolves Next.js Metadata from a blog's SEO object.
 * Ensures all image URLs are absolute.
 */
export function resolveMetadataFromBlogSEO(blogSeo: any): Metadata {
  const makeAbsolute = (url: string) =>
    url?.startsWith("http") ? url : `https://www.talhatabish.pro${url}`;

  return {
    title: blogSeo?.metaTitle || blogSeo?.ogTitle || blogSeo?.twitterTitle,
    description: blogSeo?.metaDescription || blogSeo?.ogDescription || blogSeo?.twitterDescription,
    keywords: blogSeo?.metaKeywords?.split(",").map((k: string) => k.trim()),

    openGraph: {
      title: blogSeo?.ogTitle,
      description: blogSeo?.ogDescription,
      url: blogSeo?.ogUrl,
      type: blogSeo?.ogType || "article",
      images: blogSeo?.ogImageUrl
        ? [{ url: makeAbsolute(blogSeo.ogImageUrl) }]
        : [],
    },

    twitter: {
      card: blogSeo?.twitterCard || "summary_large_image",
      title: blogSeo?.twitterTitle,
      description: blogSeo?.twitterDescription,
      images: blogSeo?.twitterImageUrl
        ? [makeAbsolute(blogSeo.twitterImageUrl)]
        : [],
    },

    alternates: {
      canonical: blogSeo?.canonicalURL,
    },

    robots: blogSeo?.robots || "index, follow",

    other: blogSeo?.structuredData
      ? {
          structuredData: blogSeo.structuredData,
        }
      : {},
  };
}
