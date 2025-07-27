"use client";

import React from "react";
import { AnimatedList } from "@/components/magicui/animated-list";
import skillsContent from "@/utils/language-data/skill-content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Lucide icons
import {
  Laptop,
  Brain,
  Smartphone,
  Settings,
  Bot,
  Wrench,
} from "lucide-react";

const iconList = [
  <Laptop key="laptop" className="w-5 h-5 text-white" aria-label="Laptop" />,
  <Brain key="brain" className="w-5 h-5 text-white" aria-label="Brain" />,
  <Smartphone key="smartphone" className="w-5 h-5 text-white" aria-label="Smartphone" />,
  <Settings key="settings" className="w-5 h-5 text-white" aria-label="Settings" />,
  <Bot key="bot" className="w-5 h-5 text-white" aria-label="Bot" />,
  <Wrench key="wrench" className="w-5 h-5 text-white" aria-label="Wrench" />,
];

const colors = ["#00C9A7", "#FFB800", "#FF3D71", "#1E86FF", "#A259FF", "#00A3FF"] as const;

type Skill = {
  title: string;
  subtitle: string;
  desc: string[];
};

type Section = {
  subheading: string;
  heading: string;
  desc: string[];
};

type SkillsContent = {
  section: Section;
  skills: Record<string, Skill>;
};

interface SkillsSectionProps {
  locale?: keyof typeof skillsContent;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ locale = "en" }) => {
  const content: SkillsContent = skillsContent[locale] || skillsContent.en;
  const { section, skills } = content;
  const skillEntries = Object.entries(skills);

  return (
    <section
      id="skills"
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto
        px-2
        sm:px-4
        md:px-8
        py-8
        sm:py-12
        md:py-16
        transition-all
      "
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-2">{section.subheading}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{section.heading}</h2>

        <div className="mb-10 space-y-2 max-w-2xl mx-auto">
          {section.desc.map((line, index) => (
            <p key={index} className="text-muted-foreground">{line}</p>
          ))}
        </div>

        <AnimatedList className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          w-full
        ">
          {skillEntries.map(([key, skill], index) => (
            <div
              key={key}
              className={cn(
                "w-full rounded-2xl p-5 transition-all duration-200 ease-in-out hover:scale-[103%]",
                "border border-border shadow-md bg-background"
              )}
              tabIndex={0}
              aria-label={skill.title}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex size-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: colors[index % colors.length] }}
                  aria-hidden="true"
                >
                  {iconList[index % iconList.length]}
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.subtitle}</p>
                </div>
              </div>

              <div className="text-muted-foreground text-sm text-left space-y-1 md:min-h-[100px] flex justify-center items-center flex-col">
                {skill.desc.map((d, idx) => (
                  <p key={idx} className="text-sm ">{d}</p>
                ))}
              </div>
            </div>
          ))}
        </AnimatedList>

        {/* Example: Add a Shadcn Button for "See All Skills" or similar */}
        {/* <Button className="mt-8" variant="outline" size="lg">
          See All Skills
        </Button> */}
      </div>
    </section>
  );
};

export default SkillsSection;
