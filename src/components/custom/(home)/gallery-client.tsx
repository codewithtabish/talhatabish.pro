"use client";

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Lens } from '@/components/magicui/lens';
import Image from 'next/image';
import { useState } from 'react';
import { BlurFade } from '@/components/magicui/blur-fade';

interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
}

interface Props {
  items: GalleryItem[];
}

export default function ClientGallery({ items = [] }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No gallery items found.
      </div>
    );
  }

  return (
    <section id="photos" className="w-full">
      <div
        className="
          columns-1
          sm:columns-2
          md:columns-3
          lg:columns-4
          xl:columns-5
          gap-4
          w-full
          max-w-[100vw]
          mx-auto
          px-2
          sm:px-4
          md:px-6
          lg:px-8
        "
      >
        {items.map((item, idx) => (
          <BlurFade
            key={item.id}
            delay={0.15 + idx * 0.1}
            inView
            className="break-inside-avoid mb-4"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(item.imageUrl)}
                  tabIndex={0}
                  aria-label={`Open image ${idx + 1}`}
                  role="button"
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedImage(item.imageUrl);
                    }
                  }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.alt || `Gallery image ${idx + 1}`}
                    width={500}
                    height={400}
                    className="w-full rounded-lg object-cover transition-transform hover:scale-105 aspect-[5/4]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>
              </DialogTrigger>

              <DialogContent className="bg-transparent border-none shadow-none p-0 flex justify-center items-center max-w-[90vw] max-h-[90vh] w-auto h-auto">
                {selectedImage && (
                  <Lens>
                    <Image
                      src={selectedImage}
                      alt="Full View"
                      width={1000}
                      height={800}
                      className="rounded-xl max-h-[80vh] w-auto h-auto object-contain"
                      sizes="(max-width: 1024px) 90vw, 800px"
                    />
                  </Lens>
                )}
              </DialogContent>
            </Dialog>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
