// app/actions/getProjects.ts
'use server';

import { cache } from "react";

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
  const url = `${STRAPI_URL}/projects?locale=${locale}`;
  try {
    const res = await fetch(url,{
       next: { tags: ['projects'] },
    cache: 'force-cache', // required to allow tag-based caching
    });
    if (!res.ok) {
      // Strapi or HTTP error
      const errorText = await res.text();
      return { data: [], error: `Strapi error: ${res.status} ${errorText}` };
    }
    const json = await res.json();
    if (!json.data) {
      return { data: [], error: 'No data returned from Strapi.' };
    }
    // Map and clean up data as needed
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
      isLive: item.liveUrl ? true : false,
      isPublic: item.githubUrl ? true : false,
    }));
    return { data };
  } catch (err: any) {
    // Network or unexpected error
    return { data: [], error: `Network or unexpected error: ${err.message}` };
  }
}
