'use server';

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
    // Use env variable for the base URL
    const baseUrl = process.env.NEXT_PUBLIC_RENDER_URL ! 
    // Remove trailing slash if present
    const normalizedBaseUrl = baseUrl.replace(/\/$/, '');

    // Fetch from Strapi
    const res = await fetch(`${normalizedBaseUrl}/gelleries?populate=*`, {
      cache: 'force-cache',
      // next: { revalidate: 1113600, tags: ['gallery'] },
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<GalleryItem> = await res.json();
    console.log('The data of gallery is ',json)

    // Cache it

    return json.data;
  } catch (error) {
    handleError(error, 'getAllGalleryItems');
  }
}
