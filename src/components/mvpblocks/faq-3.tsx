'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import faqContent from '@/utils/language-data/faq';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className={cn(
        'group rounded-lg border border-border/60',
        'transition-all duration-200 ease-in-out',
        isOpen ? 'bg-card/30 shadow-sm' : 'hover:bg-card/50',
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3
          className={cn(
            'text-left text-base font-medium transition-colors duration-200',
            'text-foreground/80',
            isOpen && 'text-foreground',
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'shrink-0 rounded-full p-0.5',
            'transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-t border-border/40 px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface Faq3Props {
  lang?: string; // e.g. "en", "ur", "ar", etc.
}

const badgeText: Record<string, string> = {
  en: "FAQs",
  ur: "سوالات",
  ar: "الأسئلة",
  fr: "FAQ",
  zh: "常见问题",
  de: "FAQs",
  ja: "よくある質問",
  es: "Preguntas",
  ru: "Вопросы",
  tr: "SSS",
};

export default function Faq3({ lang = "en" }: Faq3Props) {
  // fallback to English if not found
  // @ts-ignore
  const content = faqContent[lang] || faqContent["en"];
  const { headerTitle, headerDesc, faqs } = content;

  return (
    <section className="relative w-full overflow-hidden bg-background py-8 sm:py-12 md:py-16">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary px-3 py-1 text-xs font-medium uppercase tracking-wider"
          >
            {badgeText[lang] || badgeText["en"]}
          </Badge>

          <h1 className="mb-3 bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold text-transparent">
            {headerTitle}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {headerDesc}
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq: any, index: any) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn('mx-auto mt-12 max-w-md rounded-lg p-6 text-center')}
        >
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
            <Mail className="h-4 w-4" />
          </div>
          <p className="mb-1 text-sm font-medium text-foreground">
            {lang === "en"
              ? "Still have questions?"
              : lang === "ur"
              ? "ابھی بھی سوالات ہیں؟"
              : lang === "ar"
              ? "هل لديك المزيد من الأسئلة؟"
              : lang === "fr"
              ? "Vous avez encore des questions ?"
              : lang === "zh"
              ? "还有疑问？"
              : lang === "de"
              ? "Noch Fragen?"
              : lang === "ja"
              ? "他にご質問がありますか？"
              : lang === "es"
              ? "¿Aún tienes preguntas?"
              : lang === "ru"
              ? "Остались вопросы?"
              : lang === "tr"
              ? "Hala sorunuz mu var?"
              : "Still have questions?"}
          </p>
          <p className="mb-4 text-xs text-muted-foreground">
            {lang === "en"
              ? "We're here to help you"
              : lang === "ur"
              ? "ہم آپ کی مدد کے لیے یہاں ہیں"
              : lang === "ar"
              ? "نحن هنا لمساعدتك"
              : lang === "fr"
              ? "Nous sommes là pour vous aider"
              : lang === "zh"
              ? "我们随时为您解答"
              : lang === "de"
              ? "Wir helfen Ihnen gerne weiter"
              : lang === "ja"
              ? "いつでもサポートします"
              : lang === "es"
              ? "Estamos aquí para ayudarte"
              : lang === "ru"
              ? "Мы готовы помочь вам"
              : lang === "tr"
              ? "Size yardımcı olmak için buradayız"
              : "We're here to help you"}
          </p>
          <button
            type="button"
            className={cn(
              'rounded-md px-4 py-2 text-sm',
              'bg-primary text-primary-foreground',
              'hover:bg-primary/90',
              'transition-colors duration-200',
              'font-medium',
            )}
          >
            {lang === "en"
              ? "Contact Support"
              : lang === "ur"
              ? "سپورٹ سے رابطہ کریں"
              : lang === "ar"
              ? "تواصل مع الدعم"
              : lang === "fr"
              ? "Contacter le support"
              : lang === "zh"
              ? "联系客服"
              : lang === "de"
              ? "Support kontaktieren"
              : lang === "ja"
              ? "サポートに連絡"
              : lang === "es"
              ? "Contactar soporte"
              : lang === "ru"
              ? "Связаться с поддержкой"
              : lang === "tr"
              ? "Destek ile iletişime geçin"
              : "Contact Support"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
