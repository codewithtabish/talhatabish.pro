'use client';

import { Facebook, Twitter, Linkedin, Copy, Share2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const fullUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${pathname}`
    : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-4 mt-6 flex-wrap items-center">
      <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline flex items-center gap-1"
      >
        <Facebook size={18} /> Facebook
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline flex items-center gap-1"
      >
        <Twitter size={18} /> Twitter
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline flex items-center gap-1"
      >
        <Linkedin size={18} /> LinkedIn
      </a>

      <button
        onClick={handleCopy}
        className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-1"
      >
        {copied ? (
          <>
            <Share2 size={18} /> Copied!
          </>
        ) : (
          <>
            <Copy size={18} /> Copy Link
          </>
        )}
      </button>
    </div>
  );
}
