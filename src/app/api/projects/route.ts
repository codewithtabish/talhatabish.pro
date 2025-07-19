// app/api/revalidate/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('🔁 Webhook received from Strapi: Revalidating tags...');

  // Step 1: Invalidate both tags
//   revalidateTag('projects');
//   revalidateTag('singleProject');

  // Step 2: Warm the 'projects' list cache
//   const { data, error } = await getProjects('en');

//   if (error) {
//     console.error('❌ Error warming project list cache:', error);
//     return NextResponse.json({ revalidated: true, cacheWarmed: false, error });
//   }

//   console.log(`✅ Project list warmed with ${data.length} items for locale: en`);

  // Step 3: Warm individual projects (to refill 'singleProject' tag)
//   await Promise.all(
//     data.map((project) => getProjectBySlug(project.slug, 'en'))
//   );

  console.log(`✅ Individual project cache warmed`);

  return NextResponse.json({
    revalidated: true,
    cacheWarmed: true,
    // count: data.length,
  });
}
