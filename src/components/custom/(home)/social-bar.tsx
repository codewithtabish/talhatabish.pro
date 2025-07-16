"use client";

import { usePathname } from "next/navigation";
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/utils/language-data/social-links";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const icons = {
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
  instagram: Instagram,
  github: Github,
};

const iconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  }),
};

export function SocialBar() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const [hide, setHide] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // If user is within 120px of the bottom, hide the bar
      setHide(scrollY + windowHeight >= docHeight - 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <TooltipProvider>
      <div
        className={cn(
          "hidden lg:flex fixed left-1 top-1/2 -translate-y-1/2 z-40 p-2 flex-col items-center transition-opacity duration-300",
          hide ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        style={{ userSelect: "none" }}
      >
        <Dock direction="middle" className="h-full">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link: any, i: number) => {
              const Icon = icons[link.icon as keyof typeof icons];
              return (
                <motion.div
                  key={link.href}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  // @ts-ignore
                  variants={iconVariants}
                  whileHover={{ scale: 1.18, rotate: -6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DockIcon>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.name[currentLocale] || link.name.en}
                          className={cn(
                            "flex items-center justify-center w-9 h-9 rounded-full transition-colors",
                            "hover:bg-primary/10 text-muted-foreground hover:text-primary"
                          )}
                        >
                          <Icon size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="text-xs">
                        {link.name[currentLocale] || link.name.en}
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                </motion.div>
              );
            })}
          </div>
        </Dock>
      </div>
    </TooltipProvider>
  );
}
