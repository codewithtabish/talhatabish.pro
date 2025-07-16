




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

// Base API URL
const API_BASE = 'https://sudais-axlan-strapi-backend.onrender.com/api';

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
    // Check Redis cache first

    // Fetch from Strapi
    const res = await fetch(`http://localhost:1337/api/gelleries?populate=*`,{
      next:{revalidate:3600,tags:['gallery']},
      
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    const json: StrapiResponse<GalleryItem> = await res.json();

    // Cache it

    return json.data;
  } catch (error) {
    handleError(error, 'getAllGalleryItems');
  }
}
