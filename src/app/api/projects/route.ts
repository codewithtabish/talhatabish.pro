import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getProjects } from '@/actions/projects';

export async function POST(req: NextRequest) {
  console.log('🔁 Webhook received from Strapi: Revalidating `projects` tag');

  // Step 1: Invalidate the taga
  revalidateTag('projects');

  // Step 2: Warm the cache with English locale
  const { data, error } = await getProjects('en');

  if (error) {
    console.error('❌ Error warming project cache:', error);
    return NextResponse.json({ revalidated: true, cacheWarmed: false, error });
  }

  console.log(`✅ Project cache warmed with ${data.length} items for locale: en`);

  return NextResponse.json({ revalidated: true, cacheWarmed: true, count: data.length });
}
