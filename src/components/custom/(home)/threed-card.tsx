"use client";
import React, { useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import BlurVignette from "@/components/ui/blur-vignette";
import Image from "next/image";

// Dynamically import gsap only on client
const useGsap = () => {
  const gsapRef = useRef<any>(null);
  useEffect(() => {
    import("gsap").then((mod) => {
      gsapRef.current = mod.default;
    });
  }, []);
  return gsapRef;
};

type ThreeDCardProps = {
  content: {
    cardName?: string;
    cardTitle?: string;
    cardDesc?: string;
    cardImage?: string;
  };
};

function ThreeDCard({ content }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const gsap = useGsap();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card || !gsap.current) return;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.current.to(card, {
        rotationY: x / 15,
        rotationX: -y / 15,
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.4,
      });
    },
    [gsap]
  );

  const resetRotation = useCallback(() => {
    const card = cardRef.current;
    if (!card || !gsap.current) return;
    gsap.current.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [gsap]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetRotation);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetRotation);
    };
  }, [handleMouseMove, resetRotation]);

  return (
    <div className="flex items-center justify-center dark:border-[1px] dark:rounded-lg">
      <div
        ref={cardRef}
        className="md:w-[240px] w-full h-[300px] rounded-xl shadow-xl overflow-hidden flex flex-col justify-between transition-transform duration-300 ease-out"
        aria-label={content.cardTitle || "Portfolio Card"}
        tabIndex={0}
      >
        <BlurVignette
          radius="24px"
          inset="2px"
          transitionLength="60px"
          blur="15px"
          className="rounded-[2.5rem]"
          switchView={true}
        >
          <Image
          src='/gallery/card.webp'
            // src={content.cardImage || "/logos/dev-1.jpg"}
            width={500}
            height={320}
            alt={content.cardTitle || "Portfolio Card"}
            className="w-full h-2/3 object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 240px"
          />
          <div className="p-3 flex flex-col items-center">
            <h2 className="text-base font-bold">{content.cardName}</h2>
            <h2 className="text-base font-bold">{content.cardTitle}</h2>
            <p className="text-xs mt-1 text-center">{content.cardDesc}</p>
          </div>
        </BlurVignette>
      </div>
    </div>
  );
}

export default React.memo(ThreeDCard);
