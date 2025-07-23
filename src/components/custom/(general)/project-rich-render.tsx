'use client';
import Image from 'next/image';
import React from 'react';

// Inline markdown parser with RTL/Unicode support
function renderInlineMarkdown(text: string) {
  const regex =
    /(\[([^\]]+)\]\(([^)]+)\))|(`([^`]+)`)|(\*\*([\s\S]+?)\*\*)|(__([\s\S]+?)__)|(\*([\s\S]+?)\*)|(_([\s\S]+?)_)/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      elements.push(
        <a
          key={key++}
          href={match[3]}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      elements.push(
        <code
          key={key++}
          className="bg-gray-100 text-sm px-1 py-0.5 rounded font-mono"
        >
          {match[5]}
        </code>
      );
    } else if (match[6] || match[8]) {
      elements.push(
        <strong key={key++} className="font-semibold">
          {match[7] || match[9]}
        </strong>
      );
    } else if (match[10] || match[12]) {
      elements.push(
        <em key={key++} className="italic">
          {match[11] || match[13]}
        </em>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}

function parseListItems(rawText: string) {
  // Split by newlines, but only keep lines that start with - or *
  return rawText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => /^(\*|\-)\s+/.test(line))
    .map(line => line.replace(/^(\*|\-)\s+/, ''));
}

function parseOrderedListItems(rawText: string) {
  // Split by newlines, but only keep lines that start with 1. 2. etc
  return rawText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => /^\d+\.\s+/.test(line))
    .map(line => line.replace(/^\d+\.\s+/, ''));
}

export default function RichContentRenderer({ blocks }: { blocks: any[] }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {blocks.map((block: any, i: number) => {
        try {
          if (block.type === 'image' && block.image?.url) {
            const url = block.image.url.startsWith('http') ? block.image.url : '';
            return (
              <div key={i} className="my-6">
                <Image
                  src={url}
                  alt={block.image.alternativeText || 'Content image'}
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover max-h-[400px]"
                  unoptimized
                />
              </div>
            );
          }

          const rawText = block.children?.map((c: any) => c.text).join('\n').trim();
          if (!rawText || rawText === '---') return null;

          if (/^#\s/.test(rawText)) {
            return (
              <h1 key={i} className="text-3xl font-bold my-6 text-justify">
                {renderInlineMarkdown(rawText.replace(/^#\s/, ''))}
              </h1>
            );
          }

          if (/^##\s/.test(rawText)) {
            return (
              <h2 key={i} className="text-2xl font-bold my-5 text-justify">
                {renderInlineMarkdown(rawText.replace(/^##\s/, ''))}
              </h2>
            );
          }

          if (/^###\s/.test(rawText)) {
            return (
              <h3 key={i} className="text-xl font-semibold my-4 text-justify">
                {renderInlineMarkdown(rawText.replace(/^###\s/, ''))}
              </h3>
            );
          }

          if (rawText.startsWith('> ')) {
            return (
              <blockquote
                key={i}
                className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:text-gray-300 my-4 text-justify"
              >
                {renderInlineMarkdown(rawText.replace(/^>\s*/, ''))}
              </blockquote>
            );
          }

          if (/^```/.test(rawText) && rawText.trim().endsWith('```')) {
            const match = rawText.match(/^```(\w+)?\s*\n?([\s\S]*?)\n?```$/);
            const lang = match?.[1] || 'text';
            const code = match?.[2]?.trim() || '';
            return (
              <pre
                key={i}
                className={`language-${lang} bg-gray-900 text-white rounded-md text-sm p-4 my-5 overflow-x-auto`}
              >
                <code>{code}</code>
              </pre>
            );
          }

          const oneLineLangMatch = rawText.match(/^(js|ts|python|html|css|json|bash|sh)\n(.+)/i);
          if (oneLineLangMatch) {
            const [, lang, code] = oneLineLangMatch;
            return (
              <pre
                key={i}
                className={`language-${lang} bg-gray-900 text-white rounded-md text-sm p-4 my-5 overflow-x-auto`}
              >
                <code>{code}</code>
              </pre>
            );
          }

          if (/^`[^`]+`$/.test(rawText)) {
            return (
              <p key={i} className="text-gray-700 dark:text-gray-300 my-3 text-justify">
                <code className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono">
                  {rawText.slice(1, -1)}
                </code>
              </p>
            );
          }

          // --- FIXED LIST RENDERING ---
          // Unordered list: lines starting with - or *
          if (
            rawText.split('\n').some((line:any) => /^(\*|\-)\s+/.test(line))
            && !rawText.split('\n').every((line:any) => line.trim() === '')
          ) {
            const items = parseListItems(rawText);
            if (items.length > 0) {
              return (
                <ul key={i} className="list-disc list-inside text-[16px] text-gray-800 dark:text-gray-300 my-4 text-justify">
                  {items.map((item: any, idx: any) => (
                    <li key={idx} className="mb-1">{renderInlineMarkdown(item)}</li>
                  ))}
                </ul>
              );
            }
          }

          // Ordered list: lines starting with 1. 2. etc
          if (
            rawText.split('\n').some((line:any) => /^\d+\.\s+/.test(line))
            && !rawText.split('\n').every((line:any) => line.trim() === '')
          ) {
            const items = parseOrderedListItems(rawText);
            if (items.length > 0) {
              return (
                <ol key={i} className="list-decimal list-inside text-[16px] text-gray-800 dark:text-gray-300 my-4 text-justify">
                  {items.map((item: any, idx: any) => (
                    <li key={idx} className="mb-1">{renderInlineMarkdown(item)}</li>
                  ))}
                </ol>
              );
            }
          }

          // Inline image
          const inlineImage = rawText.match(/!\[([^\]]*)\]\(([^)]+)\)/);
          if (inlineImage) {
            const [, alt, src] = inlineImage;
            return (
              <div key={i} className="my-6">
                <Image
                  src={src}
                  alt={alt || 'Embedded image'}
                  width={800}
                  height={400}
                  className="rounded-md w-full object-cover max-h-[400px]"
                  unoptimized
                />
              </div>
            );
          }

          // Inline video
          const inlineVideo = rawText.match(/\[video\]\(([^)]+)\)/);
          if (inlineVideo) {
            const [, src] = inlineVideo;
            return (
              <div key={i} className="my-6">
                <video
                  controls
                  className="rounded-md w-full max-h-[500px] mx-auto"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          }

          // Default: paragraph
          return (
            <p key={i} className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed my-3 text-justify break-words whitespace-pre-wrap">
              {renderInlineMarkdown(rawText)}
            </p>
          );
        } catch (err) {
          console.error('Error rendering block', err);
          return null;
        }
      })}
    </div>
  );
}
