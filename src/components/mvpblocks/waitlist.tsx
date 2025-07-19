'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Spotlight } from './spot-light';
import { Particles } from '../ui/particles';
import waitlistContent from '@/utils/language-data/waitlist-content';
import TocDialog from './toc-dialog'; // <-- Import your modal
import { WaitListPageTabs } from '../ui/expanded-tabs';
import { Home,Bell,Settings,HelpCircle, Shield, User, } from "lucide-react"

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ]


const users = [
  { imgUrl: 'https://avatars.githubusercontent.com/u/111780029' },
  { imgUrl: 'https://avatars.githubusercontent.com/u/123104247' },
  { imgUrl: 'https://avatars.githubusercontent.com/u/115650165' },
  { imgUrl: 'https://avatars.githubusercontent.com/u/71373838' },
];

const WAITLIST_TEXT = {
  en: { button: "Join Waitlist", placeholder: "Enter your email" },
  ur: { button: "ویٹ لسٹ میں شامل ہوں", placeholder: "اپنا ای میل درج کریں" },
  ar: { button: "انضم إلى قائمة الانتظار", placeholder: "أدخل بريدك الإلكتروني" },
  zh: { button: "加入候补名单", placeholder: "输入您的邮箱" },
  fr: { button: "Rejoindre la liste d'attente", placeholder: "Entrez votre email" },
  de: { button: "Zur Warteliste", placeholder: "E-Mail eingeben" },
  ja: { button: "ウェイトリストに参加", placeholder: "メールアドレスを入力" },
};

const RTL_LANGS = ['ar', 'ur', 'fa', 'he'];

type Props = {
  locale?: keyof typeof waitlistContent;
};

const WaitlistComp: React.FC<Props> = ({ locale = 'en' }) => {
  const content = waitlistContent[locale] || waitlistContent['en'];
  const { button, placeholder } = WAITLIST_TEXT[locale] || WAITLIST_TEXT['en'];
  const isRtl = RTL_LANGS.includes(locale);

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#ffffff' : '#e60a64');
  }, [resolvedTheme]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className='w-full '>

    <main className="relative  items-center justify-center  overflow-hidden  ">
            <Spotlight />


      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
        color={color}
      />

      <div className="relative z-[100] mx-auto w-full max-w-7xl px-2 sm:px-6 py-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-primary/15 to-primary/5 px-4 py-2 backdrop-blur-sm"
        >
          <img
            src="https://i.postimg.cc/vHnf0qZF/logo.webp"
            alt="logo"
            className="spin h-6 w-6"
          />
          <span className="text-sm font-medium">Mvpblocks</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            'mb-4 cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl',
            brico.className,
            isRtl ? 'text-right' : 'text-center'
          )}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {content.heading}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn(
            "mb-12 mt-2 text-muted-foreground sm:text-lg",
            isRtl ? "text-right" : "text-center"
          )}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {content.subheading}
        </motion.p>

        {/* Email Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className={cn(
            "mx-auto flex flex-col gap-4 sm:flex-row max-w-xl",
            isRtl ? "flex-row-reverse" : ""
          )}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className={`relative flex-1 ${isRtl ? 'text-right' : ''}`}>
            <motion.input
              key="email-input"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              type="email"
              name="email"
              id="email"
              placeholder={placeholder}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
              className={cn(
                "w-full rounded-xl border border-primary/20 bg-white/5 px-6 py-4 text-foreground backdrop-blur-md transition-all placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30",
                isRtl ? "text-right" : ""
              )}
              style={isRtl ? { direction: 'rtl' } : {}}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-1 text-sm text-destructive sm:absolute"
              >
                {error}
              </motion.p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-gradient-to-b from-rose-500 to-rose-700 px-8 py-4 font-semibold text-primary-foreground text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
              isRtl ? "text-right" : ""
            )}
            style={isRtl ? { direction: 'rtl' } : {}}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting
                ? (locale === 'ur'
                  ? 'شامل ہو رہے ہیں...'
                  : locale === 'ar'
                  ? '...يتم الانضمام'
                  : button)
                : button}
              <Sparkles className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-rose-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </button>
        </motion.form>

        {/* Avatars and joined count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-1"
        >
          <div className="flex -space-x-3">
            {users.map((user, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="size-10 rounded-full border-2 border-background bg-gradient-to-r from-primary to-rose-500 p-[2px]"
              >
                <div className="overflow-hidden rounded-full">
                  <img
                    src={user.imgUrl}
                    alt="Avatar"
                    className="rounded-full transition-all duration-300 hover:rotate-6 hover:scale-110"
                    width={40}
                    height={40}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="ml-2 text-muted-foreground"
          >
            <span className="font-semibold text-primary">100+</span> {locale === 'ur' ? 'پہلے ہی شامل ہو چکے ہیں ✨' : locale === 'ar' ? 'انضموا بالفعل ✨' : 'already joined ✨'}
          </motion.span>
        </motion.div>

        {/* waitlist all projects tabs*/}
        <div className='md:max-w-2xl mx-auto mt-12'>
        <WaitListPageTabs locale={locale} onChange={()=>{}}/>

        </div>

        {/* Waitlist Projects */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {content.projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="text-left"
              style={{ background: 'none', border: 'none', boxShadow: 'none', padding: 0 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{project.desc}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  {project.status}
                </span>
                <span className="text-muted-foreground">
                  {project.expectedLaunchDate}
                </span>
              </div>
              {/* Modal button placed here, outside the flex row */}
              <div className="mt-2">
                <TocDialog title={project.title} detail={project.detail} locale={locale} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    </div>
  );
};

export default WaitlistComp;
