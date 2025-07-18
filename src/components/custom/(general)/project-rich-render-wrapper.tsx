"use client";
import dynamic from "next/dynamic";
import React from "react";

const RichContentRenderer = dynamic(() => import("./project-rich-render"), { ssr: false });

export default function ProjectRichRenderWrapper({ blocks }: { blocks: any[] }) {
  return <RichContentRenderer blocks={blocks} />;
}
