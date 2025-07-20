import AIInputBox from '@/components/custom/(help)/ai-input-box'
import ChatAssistantComponent from '@/components/custom/(help)/chat-assistant-comp';
import ChatAssistantUI from '@/components/custom/(help)/chat-assistant-ui'
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
      {/* <AIInputBox/> */}
      {/* @ts-ignore */}
      <HelpContentComp  locale={locale}/>
      <ChatAssistantComponent/>
      {/* <ChatAssistantUI/> */}
          {/* ...your help page content */}
      {/* <VapiWidget /> */}
      {/* <AssistantButton /> */}
    </div>
  )
}

