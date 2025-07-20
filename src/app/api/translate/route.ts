// app/api/translate/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { q, source, target, format } = body;

    // Use a more reliable LibreTranslate instance
    const libreRes = await fetch('https://translate.argosopentech.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({ q, source, target, format }),
    });

    if (!libreRes.ok) {
      const errorText = await libreRes.text();
      console.error('LibreTranslate error:', errorText);
      return NextResponse.json({ error: errorText || 'Translation failed' }, { status: 500 });
    }

    const data = await libreRes.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json({ error: error.message || 'Translation failed' }, { status: 500 });
  }
}
