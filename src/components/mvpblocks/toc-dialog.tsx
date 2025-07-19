'use client';

import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, ArrowUp10 } from 'lucide-react';

type TocDialogProps = {
  title: string;
  detail: string;
  locale?: string;
};

const RTL_LANGS = ['ar', 'ur', 'fa', 'he'];
const CLOSE_TEXT: Record<string, string> = {
  en: 'Close',
  ur: 'بند کریں',
  ar: 'إغلاق',
  fa: 'بستن',
  he: 'סגור',
};

export default function TocDialog({ title, detail, locale = 'en' }: TocDialogProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isRtl = RTL_LANGS.includes(locale);
  const closeText = CLOSE_TEXT[locale] || CLOSE_TEXT['en'];

  return (
    <Dialog>
      <DialogTrigger asChild className="z-[999]">
        {/* <Badge variant="" className="text-sm cursor-pointer px-2 font-light italic text-primary"> */}
          <ArrowUp10 className='h-4 w-4 text-primary'/>
        {/* </Badge> */}
      </DialogTrigger>
      <DialogContent
        className={`flex flex-col z-[9999] gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <DialogHeader className="contents space-y-0">
          <DialogTitle
            className={`border-b px-6 py-4 text-primary text-base font-semibold ${isRtl ? 'text-right' : 'text-left'}`}
          >
            {title}
          </DialogTitle>
          <div
            ref={contentRef}
            className="overflow-y-auto"
            style={{ maxHeight: 400 }}
          >
            <div className={`px-6 py-4 ${isRtl ? 'text-right' : 'text-left'} text-sm text-gray-500`}>
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-xl font-bold mt-4 mb-2 text-foreground" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-base font-semibold mt-4 mb-2 text-foreground" {...props} />,
                  ul: ({ node, ...props }) => (
                    <ul
                      className={`list-disc space-y-1 ${isRtl ? 'pr-6 mr-0 ml-4' : 'pl-6 ml-0 mr-4'}`}
                      style={isRtl ? { direction: 'rtl', textAlign: 'right' } : {}}
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className={`list-decimal space-y-1 ${isRtl ? 'pr-6 mr-0 ml-4' : 'pl-6 ml-0 mr-4'}`}
                      style={isRtl ? { direction: 'rtl', textAlign: 'right' } : {}}
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li
                      className="mb-1"
                      style={isRtl ? { direction: 'rtl', textAlign: 'right' } : {}}
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />,
                  em: ({ node, ...props }) => <em className="italic" {...props} />,
                  a: ({ node, ...props }) => <a className="text-primary underline" {...props} />,
                }}
              >
                {detail}
              </ReactMarkdown>
            </div>
          </div>
        </DialogHeader>
        <div className="border-t px-6 py-4 flex justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {closeText}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
