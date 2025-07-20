import ChatAssistantComponent from '@/components/custom/(help)/chat-assistant-comp';
import HelpContentComp from '@/components/custom/(help)/help-content-comp';
import React from 'react'

export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params 
  return (
    <div>
      {/* @ts-ignore */}
      <HelpContentComp  locale={locale}/>
      <ChatAssistantComponent/>
    </div>
  )
}

