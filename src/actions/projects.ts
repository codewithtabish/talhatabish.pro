'use server';

import { redis } from '@/lib/redis';
import { RedisKeys } from '@/utils/redis-key';

export type Project = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  bannerImage: string;
  cardImages: string;
  liveUrl: string;
  githubUrl: string;
  techStacks: string;
  keywords: string;
  isLive?: boolean;
  isPublic?: boolean;
};

const STRAPI_URL = process.env.NEXT_PUBLIC_RENDER_URL || process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getProjects(
  locale: string = 'en'
): Promise<{ data: Project[]; error?: string }> {
  if (!STRAPI_URL) {
    return { data: [], error: 'Strapi base URL is not set in environment variables.' };
  }

  const cacheKey = RedisKeys.withLocale(RedisKeys.ALL_PROJECTS, locale);

  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      console.log(`[Redis] Projects returned from cache for locale: ${locale}`);
      return { data: cached as Project[] };
    }
  } catch (cacheErr) {
    console.error('[Redis] Cache read error', cacheErr);
  }

  const url = `${STRAPI_URL}/projects?locale=${locale}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      const errorText = await res.text();
      return { data: [], error: `Strapi error: ${res.status} ${errorText}` };
    }

    const json = await res.json();
    if (!json.data) {
      return { data: [], error: 'No data returned from Strapi.' };
    }

    const data: Project[] = json.data.map((item: any) => ({
      id: item.id,
      title: item.title?.trim() || '',
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
    }));

    try {
      await redis.set(cacheKey, data);
      console.log(`[Redis] Projects cached for locale: ${locale}`);
    } catch (setErr) {
      console.error('[Redis] Cache set error', setErr);
    }

    return { data };
  } catch (err: any) {
    return { data: [], error: `Network or unexpected error: ${err.message}` };
  }
}
``
