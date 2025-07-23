import Faq3 from '@/components/mvpblocks/faq-3';
import React from 'react';
import { metadata } from '@/lib/seo/faq-seo';
export { metadata };
export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <section
        aria-labelledby="faq-heading"
        className="
          max-w-3xl
          mx-auto
          py-8 px-2
          sm:py-10 sm:px-4
          md:py-12 md:px-6
          lg:py-16 lg:px-8
          xl:py-20 xl:px-10
          2xl:py-24 2xl:px-12
        "
      >
        
          {/* Frequently Asked Questions */}
        <Faq3 lang={locale} />
      </section>
    </main>
  );
}
