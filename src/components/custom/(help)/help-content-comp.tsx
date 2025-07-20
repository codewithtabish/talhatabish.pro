'use client';

import helpContent from '@/utils/language-data/help-content';

type Props = {
  locale?: keyof typeof helpContent;
};

export default function HelpContentComp({ locale = 'en' }: Props) {
  const content = helpContent[locale] || helpContent['en'];

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p className="mb-8 text-gray-700">{content.intro}</p>

      {content.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <p className="text-gray-600">{section.content}</p>
        </div>
      ))}

      <div className="mt-10 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
        <span className="font-medium text-blue-700">{content.chatPrompt}</span>
      </div>
    </section>
  );
}
