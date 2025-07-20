// app/actions/translate.ts
'use server';

export async function translateTextAction(q: string, target: string) {
  const langMap: Record<string, string> = {
    en: 'English',
    ur: 'Urdu',
    ar: 'Arabic',
    zh: 'Chinese',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
  };

  const targetLang = langMap[target] || 'English';
  const prompt = `Translate the following text to ${targetLang}:\n\n${q}`;

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful translation assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 1000,
      temperature: 0.3,
    }),
  });

  if (!openaiRes.ok) {
    const errorText = await openaiRes.text();
    throw new Error(errorText || 'Translation failed');
  }

  const data = await openaiRes.json();
  const translatedText = data.choices?.[0]?.message?.content?.trim() || '';
  return translatedText;
}
