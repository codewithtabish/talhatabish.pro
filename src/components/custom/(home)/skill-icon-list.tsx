"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "java",
  "java",
  "java",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "nginx",
  "nginx",
  "nginx",
  "nginx",
  "nginx",
  "nginx",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "docker",
  "docker",
  "docker",
  "docker",
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
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] relative flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
