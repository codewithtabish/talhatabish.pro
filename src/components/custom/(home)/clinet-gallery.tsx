"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

interface CarouselProps {
  images: { src: string; alt: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

const ClientGallery: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  if (!images || images.length === 0) {
    return (
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">No images to display</h2>
          <p className="text-gray-500">Please check back later.</p>
        </div>
      </section>
    );
  }

  // Swiper custom styles (only for shadow removal)
  const css = `
    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none !important;
    }
  `;

  return (
    <section className="w-full py-4" aria-label="Gallery Carousel">
      <style>{css}</style>
      <div className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-4xl
        mx-auto
        px-0
        sm:px-2
        md:px-4
      ">
        <Swiper
          spaceBetween={24}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={showPagination}
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : undefined
          }
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          aria-roledescription="carousel"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.src + index} className="!w-64 sm:!w-72 md:!w-80 lg:!w-96">
              <div className="relative aspect-square w-full h-full rounded-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-zinc-800">
                <Image
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 500px"
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientGallery;
