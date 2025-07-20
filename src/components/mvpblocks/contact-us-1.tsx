'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Loader2, Languages } from 'lucide-react';
import { SparklesCore } from '../ui/sparkles';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Earth from '../ui/globe';
import contactContent from '@/utils/language-data/contact-content';
import { translateTextAction } from '@/actions/trsanslate';
import AlertComp from '../alert-comp';

const RTL_LANGS = ['ar', 'ur', 'fa', 'he'];

const LOCALE_TO_LANG: Record<string, string> = {
  en: 'en',
  ur: 'ur',
  ar: 'ar',
  zh: 'zh',
  fr: 'fr',
  de: 'de',
  ja: 'ja',
};

type Props = {
  locale?: keyof typeof contactContent;
};

export default function ContactUsComp({ locale = 'en' }: Props) {
  const content = contactContent[locale] || contactContent['en'];
  const isRtl = RTL_LANGS.includes(locale);
  const isEnglish = locale === 'en';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Track if fields have been translated
  const [isTranslated, setIsTranslated] = useState(isEnglish);
  const [isTranslating, setIsTranslating] = useState(false);

  // Error state for AlertComp
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  // Handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!isEnglish) setIsTranslated(false);
    setError(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isEnglish) setIsTranslated(false);
    setError(null);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (!isEnglish) setIsTranslated(false);
    setError(null);
  };

  // Translate all fields
  const handleTranslate = async () => {
    setIsTranslating(true);
    setError(null);
    try {
      const targetLang = LOCALE_TO_LANG[locale];
      const [tName, tMessage] = await Promise.all([
        name ? translateTextAction(name, targetLang) : '',
        message ? translateTextAction(message, targetLang) : '',
      ]);
      setName(tName);
      setMessage(tMessage);
      setIsTranslated(true);
    } catch (err: any) {
      setError(
        content.errorNetwork

        // typeof err === "string"
        //   ? err
        //   : err?.message
        //   ? err.message
        //   : "Network or server error. Please try again."
      );
    }
    setIsTranslating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Perform form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName('');
      setEmail('');
      setMessage('');
      setIsTranslated(isEnglish);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      setError(
                content.errorNetwork


       
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const allFieldsFilled = name.trim() && email.trim() && message.trim();

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      <div
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-border/40  backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2"
              >
                <h2 className="mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  {content.heading}
                </h2>
                {content.headingAccent && (
                  <span className="relative z-10 w-full text-4xl font-bold italic tracking-tight text-primary md:text-5xl">
                    {content.headingAccent}
                  </span>
                )}
                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={500}
                  className="absolute inset-0 top-0 h-24 w-full"
                  particleColor="#e60a64"
                />
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                dir={isRtl ? 'rtl' : 'ltr'}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Input
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder={content.namePlaceholder}
                      required
                      dir={isRtl ? "rtl" : "ltr"}
                      className={isRtl ? "text-right placeholder:text-right" : ""}
                      style={isRtl ? { direction: 'rtl' } : {}}
                      autoComplete="off"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder={content.emailPlaceholder}
                      required
                      dir={isRtl ? "rtl" : "ltr"}
                      className={isRtl ? "text-right placeholder:text-right" : ""}
                      style={isRtl ? { direction: 'rtl' } : {}}
                      autoComplete="off"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Textarea
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder={content.messagePlaceholder}
                    required
                    dir={isRtl ? "rtl" : "ltr"}
                    className={`h-40 resize-none ${isRtl ? "text-right placeholder:text-right" : ""}`}
                    style={isRtl ? { direction: 'rtl' } : {}}
                    autoComplete="off"
                  />
                </motion.div>

                {/* Translate Button (only if not English) */}
                {!isEnglish && allFieldsFilled && !isTranslated && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={handleTranslate}
                      disabled={isTranslating}
                    >
                      {isTranslating ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Translating...
                        </>
                      ) : (
                        <>
                          <Languages className="h-4 w-4" />
                          Translate to {content.headingAccent || content.heading}
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {/* Error Alert */}
                {error && (
                  <div className="mt-2">
                    <AlertComp text={content.errorNetwork} />
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !allFieldsFilled ||
                      (!isEnglish && !isTranslated)
                    }
                    className="w-full bg-gradient-to-b from-rose-500 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {content.sending}
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        {content.sent}
                      </span>
                    ) : (
                      <span>{content.sendButton}</span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden pr-8"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#e60a64] to-[#e60a64]/5 p-6 text-3xl tracking-tight text-white md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  {content.brandMessage}
                  <div className="absolute -bottom-20 -right-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-bottom-28 md:-right-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      baseColor={[1, 0, 0.3]}
                      markerColor={[0, 0, 0]}
                      glowColor={[1, 0.3, 0.4]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
