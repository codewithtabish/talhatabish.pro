import WaitlistComp from '@/components/mvpblocks/waitlist'
import React from 'react'

export default async function WaitListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-background
      px-4
      sm:px-6
      md:px-8
      py-8
    "
    >
     
        {/* @ts-ignore */}
        <WaitlistComp locale={locale} />
    </div>
  )
}

