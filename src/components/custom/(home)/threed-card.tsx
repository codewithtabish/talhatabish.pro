'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import BlurVignette from '@/components/ui/blur-vignette';

export default function ThreeDCard({content}:{content:any}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card!.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.to(card, {
        rotationY: x / 15,
        rotationX: -y / 15,
        transformPerspective: 1000,
        transformOrigin: 'center',
        duration: 0.4,
      });
    };

    const resetRotation = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    card?.addEventListener('mousemove', handleMouseMove);
    card?.addEventListener('mouseleave', resetRotation);

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove);
      card?.removeEventListener('mouseleave', resetRotation);
    };
  }, []);

  return (
    <div className="flex items-center justify-center  dark:border-[1px] dark:rounded-lg">
      <div
        ref={cardRef}
        className="md:w-[240px] w-full h-[300px]  rounded-xl shadow-xl overflow-hidden flex flex-col justify-between transition-transform duration-300 ease-out"
      >
      <BlurVignette
      radius="24px"
        inset="2px"
        transitionLength="60px"
        blur="15px"
        className=" rounded-[2.5rem]"
        switchView={true}
      >


        <img
        src='/logos/dev-1.jpg'
        
        // src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
        alt="Portfolio"
          className="w-full h-2/3 object-cover"
        />
        <div className="p-3  flex flex-col items-center">
          <h2 className="text-base font-bold">{content.cardName}</h2>
          <h2 className="text-base font-bold">{content.cardTitle}</h2>
          <p className="text-xs mt-1 text-center">{content.cardDesc}</p>
        </div>
        </BlurVignette>
      </div>
    </div>
  );
}

// https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80