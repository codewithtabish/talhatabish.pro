"use client";

import blogsContent from "@/utils/language-data/blog-content";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  locale?: keyof typeof blogsContent;
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogSectionHeader({ locale = "en" }: any) {
  // @ts-ignore
  const content = blogsContent[locale]?.section || blogsContent.en.section;

  return (
    <div className="w-full max-w-3xl mx-auto text-center mb-10">
      <motion.h1
      // @ts-ignore
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text dark:text-gray-100 mb-2"
      >
        {content.title}
      </motion.h1>
      <motion.h2
            // @ts-ignore

        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-gray-300 mb-4"
      >
        {content.subtitle}
      </motion.h2>
      <motion.p
            // @ts-ignore

        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        {content.description}
      </motion.p>
    </div>
  );
}
