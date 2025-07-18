"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "kotlin",
  "android",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "redis",
  "c++",

  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
 
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
        <div className="w-full px-12 relative flex items-center justify-center overflow-hidden">

      <IconCloud images={images} key={images.join(",")}  />
    </div>
  );
}
