// components/BlogPageCard.tsx
import Image from "next/image";
import Link from "next/link";

type BlogPageCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  href: string;
};

export function BlogPageCard({
  title,
  description,
  imageUrl,
  author,
  date,
  href,
}: BlogPageCardProps) {
  return (
    <article
      className="block rounded-lg shadow hover:shadow-lg transition bg-background border group focus:outline-none focus:ring-2 focus:ring-primary"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link
        href={href}
        tabIndex={0}
        aria-label={`Read blog post: ${title}`}
        className="block"
      >
        <div className="w-full aspect-[598/399] relative">
          <Image
            src={imageUrl}
            alt={title}
            width={598}
            height={399}
            className="object-cover w-full h-full rounded-t-lg group-hover:scale-105 transition"
            sizes="(max-width: 768px) 100vw, 598px"
            loading="lazy"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1" itemProp="headline">
            {title}
          </h3>
          <p
            className="text-muted-foreground text-sm mb-3 line-clamp-2"
            itemProp="description"
          >
            {description}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span itemProp="author">{author}</span>
            <span>•</span>
            <span itemProp="datePublished">{date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
