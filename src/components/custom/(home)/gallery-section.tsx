"use client";

import React from "react";
import galleryContent from "@/utils/language-data/gallery-content";
import { motion } from "framer-motion";
import { CardCarousel } from "@/components/ui/card-carousel";

type Props = {
  locale: keyof typeof galleryContent;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Self-contained images array
const images = [
  { src: "/gallery/card.webp", alt: "Image 1" },
  { src: "/gallery/baba.webp", alt: "Image 2" },
  { src: "/gallery/pic-2.webp", alt: "Image 3" },
  { src: "/gallery/asad.webp", alt: "Image 3" },
  { src: "/gallery/pic-3.webp", alt: "Image 3" },
  { src: "/gallery/g1.webp", alt: "Image 3" },
  // { src: "/team/d1.webp", alt: "Image 4" },
];

const GallerySection: React.FC<Props> = ({ locale }) => {
  const content = galleryContent[locale] || galleryContent.en;

  return (
    <section
      id="gallery"
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto
        px-2
        sm:px-4
        md:px-8
        py-8
        sm:py-12
        md:py-16
        transition-all
      "
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
                // @ts-ignore

          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          {content.section.heading}
        </motion.h2>

        <motion.h3
                // @ts-ignore

          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2"
        >
          {content.section.subheading}
        </motion.h3>

        <motion.p
        // @ts-ignore
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-md sm:text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          {content.section.desc}
        </motion.p>
      </div>

      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </section>
  );
};

export default GallerySection;
