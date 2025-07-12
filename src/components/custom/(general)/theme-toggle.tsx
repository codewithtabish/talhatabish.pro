"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Clock } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { themeToggleContent } from "@/utils/language-data/theme-toggle";

type ThemeToggleIconToggleProps = {
  locale?: string;
};

export default function ThemeToggleIconToggle({ locale = "en" }: ThemeToggleIconToggleProps) {
  const { resolvedTheme, theme, setTheme } = useTheme();
//   @ts-ignore
  const t = themeToggleContent[locale] || themeToggleContent.en;

  // For "system" mode, show clock icon
  const getIcon = () => {
    if (theme === "system") return <Clock className="size-5 " />;
    if (resolvedTheme === "dark") return <Moon className="size-5 " />;
    return <Sun className="size-5 text-yellow-500" />;
  };

  // For toggle: light -> dark -> system -> light ...
  const handleToggle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  // Tooltip text based on next mode
  const getNextModeLabel = () => {
    if (theme === "light") return t.dark;
    if (theme === "dark") return t.system;
    return t.light;
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          tabIndex={0}
          role="checkbox"
          aria-checked={theme === "dark"}
          aria-label={t.toggle}
          title={t.toggle}
          onClick={handleToggle}
          onKeyDown={e => (e.key === " " || e.key === "Enter") && handleToggle()}
        //   className={`
        //     // size-12 flex items-center justify-center rounded-full
        //     // transition-colors duration-200
        //     cursor-pointer select-none
        //     // hover:bg-accent/60
        //     // focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none
        //     // border border-border
        //     // bg-background
        //     // shadow
        //   `}
        >
          {getIcon()}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <span>
          {t.toggle} <br />
          <span className="">{getNextModeLabel()}</span>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
