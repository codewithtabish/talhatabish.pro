"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { themeToggleContent } from "@/utils/language-data/theme-toggle";

type ThemeToggleIconToggleProps = {
  locale?: string;
};

export default function ThemeToggleIconToggle({ locale = "en" }: ThemeToggleIconToggleProps) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  // Get translations for the selected language, fallback to English
//   @ts-ignore
  const t = themeToggleContent[locale] || themeToggleContent.en;

  // Show sun or moon icon
  const getIcon = () => {
    if (resolvedTheme === "dark") return <Moon className="size-5" />;
    return <Sun className="size-5 text-yellow-500" />;
  };

  // Toggle only between light and dark
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Tooltip text based on next mode, in selected language
  const getNextModeLabel = () => {
    return theme === "light" ? t.dark : t.light;
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
          className="cursor-pointer select-none"
        >
          {getIcon()}
        </div>
      </TooltipTrigger>
      <>
        <span>
          {/* {t.toggle} <br /> */}
          {/* <span>{getNextModeLabel()}</span> */}
        </span>
      </>
    </Tooltip>
  );
}
