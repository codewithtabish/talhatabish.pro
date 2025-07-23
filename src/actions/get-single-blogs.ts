'use server';

export interface BlogSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  canonicalURL: string;
  ogDescription: string;
  ogImageUrl: string;
  ogType: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImageUrl: string;
  robots: string;
  structuredData: any;
}

export interface BlogContentChild {
  text: string;
  type: string;
}

export interface BlogContentBlock {
  type: string;
  children: BlogContentChild[];
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: BlogContentBlock[];
  authorName: string;
  authorAvatarUrl: string | null;
  isPublished: boolean;
  isHome: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cardImage: string;
  blogBannerImage: string;
  blogSeo: BlogSeo;
}

export interface BlogsResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Use env variable
const BASE_API_URL = process.env.NEXT_PUBLIC_RENDER_URL;

/**
 * Fetch a single blog by slug in the specified locale only.
 * @param slug The blog slug (string)
 * @param locale The locale/language code (e.g. 'ur', 'en')
 * @returns Blog object or null if not found
 */
export async function getBlogBySlug(slug: string, locale: string): Promise<Blog | null> {
  if (!slug) throw new Error('Slug is required');
  if (!locale) throw new Error('Locale is required');

  // Only fetch the blog in the specified locale
  const url = `${BASE_API_URL}/blogs?populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${locale}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status} ${res.statusText}`);
    }

    let json: BlogsResponse;
    try {
      json = await res.json();
    } catch (err) {
      throw new Error('Invalid JSON response from server');
    }

    if (!json.data || !Array.isArray(json.data)) {
      throw new Error('Malformed response: missing "data" array');
    }

    // Only return the first blog in the specified locale, or null if not found
    return json.data.length > 0 ? json.data[0] : null;
  } catch (error: any) {
    throw new Error(
      error?.message
        ? `Error fetching blog by slug: ${error.message}`
        : 'Unknown error fetching blog by slug'
    );
  }
}
