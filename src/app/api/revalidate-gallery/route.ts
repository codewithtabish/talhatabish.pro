import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis'; // Your Redis client
import { getAllGalleryItems } from '@/actions/gellery';
import { RedisKeys } from '@/utils/redis-key';

export async function POST() {
  try {
    // Delete the gallery cache
    await redis.del(RedisKeys.ALL_GALLERY_ITEMS);
    console.log('Deleted from redis')

    // Fetch fresh gallery items
    const items = await getAllGalleryItems();

    // Save to Redis
    await redis.set('gallery:all', JSON.stringify(items));

    return NextResponse.json({
      message: 'Gallery cache updated successfully',
      count: items.length,
    });
  } catch (error) {
    console.error('Error updating gallery cache:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
