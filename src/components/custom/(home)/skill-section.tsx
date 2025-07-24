"use client";

import React from "react";
import { AnimatedList } from "@/components/magicui/animated-list";
import skillsContent from "@/utils/language-data/skill-content";
import { cn } from "@/lib/utils";

// Lucide icons
import {
  Laptop,
  Brain,
  Smartphone,
  Settings,
  Bot,
  Wrench,
} from "lucide-react";
import { IconCloudDemo } from "./skill-icon-list";

interface SkillsSectionProps {
  locale?: keyof typeof skillsContent;
}

const iconList = [
  <Laptop className="w-5 h-5 text-white" />,
  <Brain className="w-5 h-5 text-white" />,
  <Smartphone className="w-5 h-5 text-white" />,
  <Settings className="w-5 h-5 text-white" />,
  <Bot className="w-5 h-5 text-white" />,
  <Wrench className="w-5 h-5 text-white" />,
];

const colors = ["#00C9A7", "#FFB800", "#FF3D71", "#1E86FF", "#A259FF", "#00A3FF"];

const SkillsSection: React.FC<SkillsSectionProps> = ({ locale = "en" }) => {
  const content = skillsContent[locale] || skillsContent.en;
  const { section, skills } = content;
  const skillEntries = Object.entries(skills);

  return (
    <section id="skills" className="">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-2">{section.subheading}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.heading}</h2>

        <div className="mb-10 space-y-2 max-w-2xl mx-auto">
          {section.desc.map((line, index) => (
            <p key={index} className="text-muted-foreground">{line}</p>
          ))}
        </div>

        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillEntries.map(([key, skill], index) => (
            <div
              key={key}
              className={cn(
                "w-full rounded-2xl  md:p-5 p-5 transition-all duration-200 ease-in-out hover:scale-[103%]",
                " border border-border shadow-md",
                ""
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex size-10 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {iconList[index % iconList.length]}
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.subtitle}</p>
                </div>
              </div>

              <div className="text-muted-foreground text-sm text-left space-y-1">
                {skill.desc.map((d, idx) => (
                  <p key={idx}>{d}</p>
                ))}
              </div>
            </div>
          ))}
        </AnimatedList>
      {/* <IconCloudDemo/> */}
      </div>
    </section>
  );
};

export default SkillsSection;
