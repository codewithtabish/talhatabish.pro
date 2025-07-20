import ContactUsComp from '@/components/mvpblocks/contact-us-1'
import React from 'react'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  return (
  <main className="w-full min-h-screen flex justify-center bg-background">
      {/* <SocialBar /> */}
      <div
        className="
          w-full
          max-w-screen-sm
          sm:max-w-screen-md
          md:max-w-screen-lg
          lg:max-w-screen-xl
          xl:max-w-screen-2xl
          2xl:max-w-[1600px]
          px-2
          sm:px-4
          md:px-8
          flex flex-col
          space-y-10
          sm:space-y-14
          md:space-y-16
          lg:space-y-24
        "
      >      
      {/* @ts-ignore */}
      <ContactUsComp locale={locale}/>
    </div>
    </main>
  )
}

