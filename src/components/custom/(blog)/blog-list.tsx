// app/components/BlogsList.tsx

import { Blog, getAllBlogs } from "@/actions/blogs";
import CardFlip from "@/components/mvpblocks/card-flip";

export default async function BlogsList({locale='en'}:{locale:any}) {
  let blogs:any = [];
  let error: string | null = null;


  try {
    blogs = await getAllBlogs(locale);
  } catch (err) {
    error = (err as Error).message || 'Unknown error loading blogs.';
  }

  if (error) {
    return (
      <div className="w-full text-center text-red-600 py-10">
        Failed to load blogs: {error}
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="w-full text-center text-gray-500 py-10">
        No blogs found.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {blogs.map((blog:Blog) => (
          <>
          {
         console.log('object in single',blog.title)

          }
        <CardFlip
          key={blog.id}
          title={blog.title}
          locale={locale}

          subtitle={blog.shortDescription?.slice(0, 80) || ''}
          slug={blog?.slug}
          features={[
            `Published: ${new Date(blog.publishedAt).toLocaleDateString()}`,
            `Slug: ${blog.slug}`,
            blog.isPublished ? 'Published' : 'Draft',

          ]}
          cardImage={blog.cardImage}
        //   author={blog.authorName}
        />
        </>
      ))}
    </div>
  );
}
