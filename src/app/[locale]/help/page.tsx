import ChatAssistantComponent from '@/components/custom/(help)/chat-assistant-comp';
import HelpContentComp from '@/components/custom/(help)/help-content-comp';
import React from 'react'
import { metadata } from '@/lib/seo/help-seo';

export { metadata };
export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params 
  return (
<main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6">
      {/* @ts-ignore */}
      <HelpContentComp  locale={locale}/>
      <ChatAssistantComponent/>
    </main>
  )
}

