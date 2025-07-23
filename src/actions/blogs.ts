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

export async function getAllBlogs(locale: string): Promise<Blog[]> {
  try {
    const url = `${BASE_API_URL}/blogs?populate=*&locale=${locale}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
    }

    let json: BlogsResponse;
    try {
      json = await res.json();
      console.log('THE RESPONSE IN SERVER ACTION IS', json);
    } catch (err) {
      throw new Error('Invalid JSON response from server');
    }

    if (!json.data || !Array.isArray(json.data)) {
      throw new Error('Malformed response: missing "data" array');
    }

    return json.data;
  } catch (error: any) {
    throw new Error(
      error?.message
        ? `Error fetching blogs: ${error.message}`
        : 'Unknown error fetching blogs'
    );
  }
}
