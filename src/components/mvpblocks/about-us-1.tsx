"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import { Spotlight } from "./spot-light";
import { BorderBeam } from "./border-beam";
import { CardHoverEffect } from "./pulse-card";
import aboutContent from "@/utils/language-data/about-us-conetent";
import Team1 from "./team-1";

const RTL_LANGS = ["ur", "ar", "fa", "he"];

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

type Props = {
  locale?: keyof typeof aboutContent;
};

const AboutSection: React.FC<Props> = ({ locale = "en" }) => {
  const content = aboutContent[locale] || aboutContent["en"];
  const isRTL = RTL_LANGS.includes(locale);

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section
      className="relative w-full  pt-10 pb-6 sm:pt-16 sm:pb-10"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Spotlight />

      <div className="container relative z-10 mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-transparent">
            {content.title}
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl text-muted-foreground text-justify sm:text-center">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div
          ref={missionRef}
          className="relative mx-auto mb-10 sm:mb-16 max-w-7xl w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-6 sm:gap-10 md:gap-12 grid-cols-1 lg:grid-cols-2 "
          >
            {/* Mission */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-4 sm:p-8 md:p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />
              <div className="mb-3 sm:mb-6 inline-flex aspect-square h-10 w-10 sm:h-16 sm:w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="space-y-2 sm:space-y-4">
                <h2 className="mb-1 sm:mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-lg sm:text-3xl font-bold text-transparent">
                  {locale === "ur"
                    ? "ہمارا مشن"
                    : locale === "ar"
                    ? "مهمتنا"
                    : locale === "fr"
                    ? "Notre mission"
                    : locale === "zh"
                    ? "我们的使命"
                    : locale === "de"
                    ? "Unsere Mission"
                    : locale === "ja"
                    ? "私たちの使命"
                    : locale === "es"
                    ? "Nuestra misión"
                    : "Our Mission"}
                </h2>
                <p className="text-sm sm:text-lg leading-relaxed text-muted-foreground text-justify">
                  {content.mission}
                </p>
              </div>
            </motion.div>
            {/* Vision */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-4 sm:p-8 md:p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-3 sm:mb-6 inline-flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              </div>
              <h2 className="mb-1 sm:mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-lg sm:text-3xl font-bold text-transparent">
                {locale === "ur"
                  ? "ہمارا وژن"
                  : locale === "ar"
                  ? "رؤيتنا"
                  : locale === "fr"
                  ? "Notre vision"
                  : locale === "zh"
                  ? "我们的愿景"
                  : locale === "de"
                  ? "Unsere Vision"
                  : locale === "ja"
                  ? "私たちのビジョン"
                  : locale === "es"
                  ? "Nuestra visión"
                  : "Our Vision"}
              </h2>
              <p className="text-sm sm:text-lg leading-relaxed text-muted-foreground text-justify">
                {content.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div ref={valuesRef} className="mb-6 sm:mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 sm:mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-lg sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent">
              {content.coreValuesTitle}
            </h2>
            <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-xs sm:text-base md:text-lg text-muted-foreground text-justify sm:text-center">
              {content.coreValuesDesc}
            </p>
          </motion.div>
          {/* Responsive grid for core value cards */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {content.values?.map((value, index) => {
              // @ts-ignore
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="w-full"
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                        ? "blue"
                        : index === 2
                        ? "amber"
                        : "rose"
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-8 sm:mt-16">
        <Team1 locale={locale} />
      </div>
    </section>
  );
};

export default AboutSection;
