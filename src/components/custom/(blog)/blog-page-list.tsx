import { getAllBlogs } from "@/actions/blogs";
import React from "react";
import { BlogPageCard } from "./blog-page-card";
import { Ghost } from "lucide-react";

// Supported locales and their "not found" messages
const notFoundMessages: Record<string, { title: string; desc: string }> = {
  en: {
    title: "No blogs found",
    desc: "We couldn't find any blog posts in this language yet.",
  },
  ur: {
    title: "کوئی بلاگ نہیں ملا",
    desc: "اس زبان میں ابھی تک کوئی بلاگ پوسٹ دستیاب نہیں ہے۔",
  },
  ar: {
    title: "لم يتم العثور على مدونات",
    desc: "لم نعثر على أي منشورات مدونة بهذه اللغة بعد.",
  },
  zh: {
    title: "未找到博客",
    desc: "该语言下还没有博客文章。",
  },
  fr: {
    title: "Aucun blog trouvé",
    desc: "Aucun article de blog trouvé dans cette langue pour le moment.",
  },
  de: {
    title: "Keine Blogs gefunden",
    desc: "In dieser Sprache wurden noch keine Blogbeiträge gefunden.",
  },
  ja: {
    title: "ブログが見つかりません",
    desc: "この言語ではまだブログ記事が見つかりませんでした。",
  },
};

export default async function BlogPageList({
  locale = "en",
}: {
  locale: string;
}) {
  let blogs: any[] = [];
  let error: string | null = null;

  try {
    blogs = await getAllBlogs(locale);
  } catch (err: any) {
    error = err?.message || "Unknown error";
  }

  // Error state
  if (error) {
    return (
      <section className="w-full py-12" aria-live="polite">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4 bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <Ghost size={48} className="text-red-400" />
          <h2 className="text-xl font-bold text-red-700">Error loading blogs</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  // Not found state (localized)
  if (!blogs || blogs.length === 0) {
    const msg = notFoundMessages[locale] || notFoundMessages["en"];
    return (
      <section className="w-full py-12" aria-live="polite">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4 bg-gray-50 dark:bg-zinc-900/40 border border-gray-200 dark:border-zinc-800 rounded-lg p-8 text-center">
          <Ghost size={48} className="text-gray-400 dark:text-gray-500" />
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">{msg.title}</h2>
          <p className="text-gray-500 dark:text-gray-400">{msg.desc}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full py-12"
      aria-label="Blog Posts"
      itemScope
      itemType="https://schema.org/Blog"
    >
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        w-full
        max-w-7xl
        mx-auto
        px-4
      ">
        {blogs.map((blog: any) => (
          <BlogPageCard
            key={blog.slug}
            title={blog.title}
            description={blog.shortDescription}
            imageUrl={
              blog?.blogCardImage ||
              "https://d1d7s2thm5nyyd.cloudfront.net/blog-card-image.webp"
            }
            author={blog?.authorName || "Unknown"}
            date={
              blog?.datePublished
                ? new Date(blog.datePublished).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : ""
            }
            href={`/${locale}/blogs/${blog.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
