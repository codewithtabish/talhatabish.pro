export const RedisKeys: any = {
  // 🔹 Blog-related keys
  ALL_BLOGS: 'blogs:all',
  BLOG_BY_SLUG: (slug: string, locale: string) => `blogs:slug:${slug}:${locale}`,

  // 🔹 Gallery-related keys
  ALL_GALLERY_ITEMS: 'gallery:all',
  GALLERY_ITEM_BY_SLUG: (slug: string, locale: string) => `gallery:slug:${slug}:${locale}`,

  // 🔹 Project-related keys
  ALL_PROJECTS: 'projects:all',
  PROJECT_BY_SLUG: (slug: string, locale: string) => `projects:slug:${slug}:${locale}`,

  // 🔹 Utility to build locale-aware keys
  withLocale: (key: string, locale: string) => `${key}:${locale}`,
};
