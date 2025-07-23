import WaitlistComp from '@/components/mvpblocks/waitlist';
import React from 'react';
import { metadata } from '@/lib/seo/waitlist-seo';
export { metadata };

export default async function WaitListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <section
        aria-labelledby="waitlist-heading"
        className="
          min-h-screen flex items-center justify-center
          py-8 px-2
          sm:py-12 sm:px-4
          md:py-16 md:px-6
          lg:py-20 lg:px-8
          xl:py-24 xl:px-10
          2xl:py-32 2xl:px-12
          bg-background
        "
      >
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <h1
            id="waitlist-heading"
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mb-6
              text-center
            "
          >
            Join the Waitlist
          </h1>
          {/* @ts-ignore */}
          <WaitlistComp locale={locale} />
        </div>
      </section>
    </main>
  );
}
