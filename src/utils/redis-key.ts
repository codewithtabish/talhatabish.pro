// lib/redisKeys.ts

export const RedisKeys:any = {
  // 🔹 Blog-related keys
  ALL_BLOGS: 'blogs:all',
  BLOG_BY_SLUG: (slug: string) => `blogs:slug:${slug}`,

  // 🔹 Gallery-related keys
  ALL_GALLERY_ITEMS: 'gallery:all',
  GALLERY_ITEM_BY_SLUG: (slug: string) => `gallery:slug:${slug}`,

  // 🔹 Project-related keys
  ALL_PROJECTS: 'projects:all',
  PROJECT_BY_SLUG: (slug: string) => `projects:slug:${slug}`,
}
