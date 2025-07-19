import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getAllGalleryItems } from '@/actions/gellery';

export async function POST(req: NextRequest) {
  console.log('🔁 Webhook received from Strapi: Revalidating gallery...');

  // Step 1: Invalidate the 'gallery' tag
  revalidateTag('gallery');

  // Step 2: Warm the cache
  try {
    const items = await getAllGalleryItems();
    console.log(`✅ Gallery cache warmed with ${items.length} items`);
    return NextResponse.json({
      revalidated: true,
      cacheWarmed: true,
      count: items.length,
    });
  } catch (error: unknown) {
    let message = 'Unknown error';

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else if (typeof error === 'object' && error !== null) {
      message = JSON.stringify(error);
    }

    console.error('❌ Error warming gallery cache:', message);
    return NextResponse.json({
      revalidated: true,
      cacheWarmed: false,
      error: message,
    });
  }
}
