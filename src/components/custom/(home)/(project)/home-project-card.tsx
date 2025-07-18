"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Globe, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projectDetailsTranslations: Record<string, string> = {
  en: "Project details",
  ur: "پروجیکٹ کی تفصیل",
  ar: "تفاصيل المشروع",
  zh: "项目详情",
  fr: "Détails du projet",
  de: "Projektdetails",
  ja: "プロジェクト詳細",
};

type ProjectCardProps = {
  title: string;
  slug: string;
  shortDescription: string;
  cardImages: string;
  techStacks: string;
  liveUrl: string;
  githubUrl: string;
  isLive?: boolean;
  isPublic?: boolean;
  locale?: string;
};

export default function HomeProjectCard({
  title,
  slug,
  shortDescription,
  cardImages,
  techStacks,
  liveUrl,
  githubUrl,
  isLive = true,
  isPublic = true,
  locale = "en",
}: ProjectCardProps) {
  const images = cardImages.split(",").map((img) => img.trim()).filter(Boolean);
  const techStackArr = techStacks.split(",").map((t) => t.trim()).filter(Boolean);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleSwap = () => {
    if (isTransitioning || images.length < 2) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const projectDetailsLabel = projectDetailsTranslations[locale] || projectDetailsTranslations.en;
  const projectDetailsHref = `/${locale}/projects/${slug}`;

  return (
    <motion.article
      className={cn(
        "w-full space-y-4 rounded-lg p-4 border max-w-2xl overflow-hidden shadow hover:shadow-lg transition-shadow"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <AnimatePresence initial={false}>
          {images.map((src, idx) =>
            activeIndex === idx ? (
              <motion.div
                key={src}
                className="absolute inset-0 h-full w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${idx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-xl border"
                  priority={idx === 0}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={handleSwap}
              className={cn(
                "absolute top-2 right-2 z-10 rounded-full border p-2 bg-gray-50 dark:bg-gray-500 hover:bg-gray-100 transition",
                isTransitioning && "pointer-events-none opacity-70"
              )}
              aria-label="Swap image"
              disabled={isTransitioning}
              type="button"
            >
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className={activeIndex === 1 ? "rotate-180" : ""}
              />
            </button>

            <div className="absolute bottom-2 right-2 z-20 flex gap-1.5 rounded-full bg-black/30 backdrop-blur-sm px-2 py-1.5 shadow-sm border border-white/20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => !isTransitioning && setActiveIndex(idx)}
                  className={cn(
                    "size-2 rounded-full transition-all duration-300 cursor-pointer",
                    activeIndex === idx
                      ? "bg-white scale-110 ring-1 ring-white/50 ring-offset-1 ring-offset-black/30"
                      : "bg-white/60 hover:bg-white/80"
                  )}
                  aria-label={`View image ${idx + 1}`}
                  disabled={isTransitioning}
                  type="button"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="space-y-3 text-justify">
        <div className="space-y-2">
          <h2 className="line-clamp-1 font-medium" itemProp="name">
            {title}
          </h2>
          <p className="line-clamp-3 text-sm text-muted-foreground" itemProp="description">
            {shortDescription}
          </p>
          <Link
            href={projectDetailsHref}
            className="text-sm inline-block font-medium text-primary transition-colors duration-300 after:content-['_↗'] hover:text-primary/80"
            itemProp="url"
          >
            {projectDetailsLabel}
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pb-1">
          {techStackArr.map((tag, idx) => (
            <Badge
              variant={'outline'}
              key={idx}
              className="shrink-0 px-2"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {isLive && liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
              title="View Live"
              itemProp="url"
            >
              <Globe size={18} className="inline" />
              <span className="text-sm font-medium">Live</span>
            </a>
          )}
          {isPublic && githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:underline"
              title="View on GitHub"
              itemProp="codeRepository"
            >
              <Github size={18} className="inline" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
