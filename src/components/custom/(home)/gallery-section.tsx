'use client';

import React from 'react';
import galleryContent from '@/utils/language-data/gallery-content';
import { motion } from 'framer-motion';
import ClientGallery from './gallery-client';

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
      ease: 'easeOut',
    },
  },
};

const GallerySection: React.FC<Props> = ({ locale }) => {
  const content = galleryContent[locale] || galleryContent.en;

  return (
    <section id="gallery" className=" lg:px-10">
      <div className="max-w-6xl mx-auto text-center">
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
    </section>
  );
};

export default GallerySection;
