import { getAllBlogs } from "@/actions/blogs";
import React from "react";
import { BlogTopContent } from "./blog-top-content";
import { BlogPageCard } from "./blog-page-card";

export default async function BlogPageList({
    locale='en'
}: {
    locale: string;
}) {
  const blogs = await getAllBlogs(locale); // Should return an array of blogs

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8">
        {blogs.map((blog: any) => (
          <BlogPageCard
            key={blog.slug}
            title={blog.title}
            description={blog.shortDescription}
            imageUrl={blog?.blogCardImage} // 598x399 recommended
            author={blog?.authorName}
            date={new Date(blog?.datePublished).toLocaleDateString(locale, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            href={`/${locale}/blogs/${blog.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
