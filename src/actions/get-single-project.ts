// app/actions/getProjects.ts
'use server';

export type Project = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  bannerImage: string;
  cardImages: string;
  content?: string; // Rich text content
  liveUrl: string;
  githubUrl: string;
  techStacks: string;
  keywords: string;
  isLive?: boolean;
  isPublic?: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    canonicalURL?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    ogUrl?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    robots?: string;
    structuredData?: string;
  } | null;
};

const STRAPI_URL = process.env.NEXT_PUBLIC_RENDER_URL || process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getProjectBySlug(
  slug: string,
  locale: string = 'en'
): Promise<{ data?: Project; error?: string }> {
  if (!STRAPI_URL) {
    return { error: 'Strapi base URL is not set in environment variables.' };
  }
  if (!slug) {
    return { error: 'No slug provided.' };
  }
  // Populate the SEO component
  const url = `${STRAPI_URL}/projects?filters[slug][$eq]=${encodeURIComponent(
    slug
  )}&locale=${locale}&populate=seo`;
  console.log('My url is ',url)
  try {
    const res = await fetch(url,{
        next: {
        tags: ['singleProject'],
        revalidate:  60 * 60 * 24 * 60; // 60 days in seconds, // 30 days in seconds

      },
    });
    if (!res.ok) {
      const errorText = await res.text();
      return { error: `Strapi error: ${res.status} ${errorText}` };
    }
    const json = await res.json();
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      return { error: 'Project not found.' };
    }
    const item = json.data[0];
    const project: Project = {
      id: item.id,
      title: item.title?.trim() || '',
      content: item.content || '',
      slug: item.slug,
      shortDescription: item.shortDescription?.trim() || '',
      bannerImage: (item.bannerImage || '').trim(),
      cardImages: (item.cardImages || '').trim(),
      liveUrl: (item.liveUrl || '').trim(),
      githubUrl: (item.githubUrl || '').trim(),
      techStacks: (item.techStacks || '').trim(),
      keywords: (item.keywords || '').trim(),
      isLive: !!item.liveUrl,
      isPublic: !!item.githubUrl,
      seo: item.seo?.[0] || null, // <-- SEO component
    };
    return { data: project };
  } catch (err: any) {
    return { error: `Network or unexpected error: ${err?.message || err}` };
  }
}
