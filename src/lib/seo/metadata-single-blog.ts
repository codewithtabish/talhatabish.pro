import { Metadata } from "next";

/**
 * Resolves Next.js Metadata from a blog's SEO object.
 * @param blogSeo The blogSeo object from Strapi
 * @returns Metadata object for Next.js
 */
export function resolveMetadataFromBlogSEO(blogSeo: any): Metadata {
  return {
    title: blogSeo?.metaTitle || blogSeo?.ogTitle || blogSeo?.twitterTitle,
    description: blogSeo?.metaDescription || blogSeo?.ogDescription || blogSeo?.twitterDescription,
    keywords: blogSeo?.metaKeywords?.split(",").map((k: string) => k.trim()),

    openGraph: {
      title: blogSeo?.ogTitle,
      description: blogSeo?.ogDescription,
      url: blogSeo?.ogUrl,
      type: blogSeo?.ogType || "article",
      images: blogSeo?.ogImageUrl ? [{ url: blogSeo.ogImageUrl }] : [],
    },

    twitter: {
      card: blogSeo?.twitterCard || "summary_large_image",
      title: blogSeo?.twitterTitle,
      description: blogSeo?.twitterDescription,
      images: blogSeo?.twitterImageUrl ? [blogSeo.twitterImageUrl] : [],
    },

    alternates: {
      canonical: blogSeo?.canonicalURL,
    },

    robots: blogSeo?.robots || "index, follow",

    // Attach structuredData only if present
    other: blogSeo?.structuredData
      ? {
          structuredData: blogSeo.structuredData,
        }
      : {},
  };
}
