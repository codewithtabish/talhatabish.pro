import Faq3 from '@/components/mvpblocks/faq-3'
import React from 'react'

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  return (
    <div>
        <Faq3 lang={locale} />
      
    </div>
  )
}

// export default FaqPage
