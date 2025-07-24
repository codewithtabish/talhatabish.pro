// components/ProjectPageCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ProjectPageCardProps = {
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  techStacks?: string;
  isLive?: boolean;
  isPublic?: boolean;
  locale?: string;
};

export function ProjectPageCard({
  title,
  slug,
  shortDescription,
  imageUrl,
  liveUrl,
  githubUrl,
  techStacks,
  isLive,
  isPublic,
  locale = "en",
}: ProjectPageCardProps) {
  return (
    <Link
      href={`/${locale}/projects/${slug}`}
      className="block rounded-lg shadow hover:shadow-lg transition bg-background border group focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="w-full aspect-[598/399] relative">
        <Image
          src={"https://d36tp563nnp0vf.cloudfront.net/gallery-one.webp"}
          alt={title}
          width={598}
          height={399}
          className="object-cover w-full h-full rounded-t-lg group-hover:scale-105 transition"
          priority={false}
        />
        {isLive && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded shadow">
            LIVE
          </span>
        )}
        {!isPublic && (
          <span className="absolute top-3 right-3 bg-gray-600 text-white text-xs px-2 py-1 rounded shadow">
            Private
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{shortDescription}</p>
        {techStacks && (
          <div className="flex flex-wrap gap-1 mb-2">
            {techStacks.split(",").map((tech) => (
              <Badge
              variant='outline'
                key={tech}
                className="dark:text-gray-400 text-gray-500"
                // className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium"
              >
                {tech.trim()}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-3 mt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline text-xs font-medium"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:underline text-xs font-medium"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
