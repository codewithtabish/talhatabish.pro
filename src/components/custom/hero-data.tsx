"use client";
import { siteContent } from "@/utils/site-content";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

type HeroInfoProps = {
  locale: string;
};

const socialLinks = [
  {
    href: "https://github.com/sudaisazlan",
    icon: <Github size={22} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/sudaisazlan",
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:sudaisazlan@gmail.com",
    icon: <Mail size={22} />,
    label: "Email",
  },
];

export default function HeroDataSection({ locale }: HeroInfoProps) {
  // @ts-ignore
  const hero = siteContent[locale]?.hero || siteContent.en.hero;

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl px-6 py-12 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Animated profile image */}
          <motion.img
            src={hero.image}
            alt={hero.name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-100 shadow-lg mb-6 md:mb-0"
          />

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold mb-2 text-blue-700"
            >
              {hero.name}
            </motion.h1>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg md:text-xl text-slate-700 mb-4 font-medium"
            >
              {hero.shortDesc}
            </motion.p>

            {/* Long Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base md:text-lg text-slate-600 mb-8"
            >
              {hero.description}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center md:justify-start gap-6 mb-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.15, backgroundColor: "#2563eb", color: "#fff" }}
                  className="text-blue-700 bg-blue-50 rounded-full p-3 shadow transition-colors"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow transition"
            >
              Contact Me <ArrowRight size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
