import { Metadata } from "next";

export function resolveMetadataFromSEO(seo: any): Metadata {
  return {
    title: seo?.metaTitle || seo?.ogTitle || seo?.twitterTitle,
    description: seo?.metaDescription || seo?.ogDescription || seo?.twitterDescription,
    keywords: seo?.metaKeywords?.split(",").map((k: string) => k.trim()),

    openGraph: {
      title: seo?.ogTitle,
      description: seo?.ogDescription,
      url: seo?.ogUrl,
      type: "article", // ✅ Use "article" instead of "website" if for a single project/page
      images: seo?.ogImage ? [{ url: seo.ogImage }] : [],
    },

    twitter: {
      card: seo?.twitterCard || "summary_large_image",
      title: seo?.twitterTitle,
      description: seo?.twitterDescription,
      images: seo?.twitterImage ? [seo.twitterImage] : [],
    },

    alternates: {
      canonical: seo?.canonicalURL,
    },

    robots: seo?.robots || "index, follow",

    // ✅ Safely attach structuredData only if present
    other: seo?.structuredData
      ? {
          structuredData: seo.structuredData,
        }
      : {},
  };
}
