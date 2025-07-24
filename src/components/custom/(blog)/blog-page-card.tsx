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
    <Link
      href={href}
      className="block rounded-lg shadow hover:shadow-lg transition bg-background border"
    >
      <div className="w-full aspect-[598/399] relative">
        <Image
          src={"https://d1d7s2thm5nyyd.cloudfront.net/blog-card-image.webp"}
          alt={title}
          width={598}
          height={399}
          className="object-cover w-full h-full rounded-t-lg"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {/* <span>{author}</span> */}
          {/* <span>•</span> */}
          {/* <span>{date}</span> */}
        </div>
      </div>
    </Link>
  );
}
