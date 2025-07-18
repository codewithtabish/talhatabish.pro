'use server';

import { redis } from '@/lib/redis';
import { RedisKeys } from '@/utils/redis-key';

// Types
export interface GalleryItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageUrl: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

function handleError(error: unknown, context: string): never {
  if (error instanceof Error) {
    console.error(`[${context}]`, error.message);
    throw new Error(`${context} – ${error.message}`);
  } else {
    console.error(`[${context}]`, error);
    throw new Error(`${context} – Unknown error occurred.`);
  }
}

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  try {
    // 1. Try getting from Redis cache
    const cached = await redis.get(RedisKeys.ALL_GALLERY_ITEMS);
    if (cached) {
      console.log('[Redis] Gallery items returned from cache');
      return cached as GalleryItem[];
    }

    // 2. Fetch from Strapi
    const baseUrl = process.env.NEXT_PUBLIC_RENDER_URL!;
    const normalizedBaseUrl = baseUrl.replace(/\/$/, '');

    const res = await fetch(`${normalizedBaseUrl}/gelleries?populate=*`, {
      next: { revalidate: 3600, tags: ['gallery'] },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<GalleryItem> = await res.json();
    const galleryItems = json.data;

    // 3. Cache result in Redis (no expiration)
    await redis.set(RedisKeys.ALL_GALLERY_ITEMS, galleryItems);
    console.log('[Redis] Gallery items cached');

    return galleryItems;
  } catch (error) {
    handleError(error, 'getAllGalleryItems');
  }
}
