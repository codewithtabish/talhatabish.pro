"use client";

import { usePathname } from "next/navigation";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { navbarContent } from "@/utils/language-data/navbar";
import Link from "next/link";
// import ThemeToggle from "../(general)/theme-toggle";
import { BorderBeam } from "@/components/magicui/border-beam";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

type NavbarProps = {
  locale: string;
};

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();

  // Show only on home: "/" or "/en", "/ur", etc.
  // Remove trailing slash if present
  const cleanPath = pathname.replace(/\/$/, "");
  const isHome =
    cleanPath === "" ||
    cleanPath === "/" ||
    cleanPath === `/${locale}`;

  if (!isHome) return null;

  const navItems = (navbarContent as any)[locale] || navbarContent.en;

  return (
    <div className="hidden lg:block fixed inset-x-0 bottom-6 z-30 pointer-events-none">
      {/* Background blur layer */}
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background/80 backdrop-blur-lg dark:bg-background/80" />

      {/* Centered container with animated border */}
      <div className="relative mx-auto w-[320px] rounded-full">
        <BorderBeam
          className="absolute inset-0 z-40 rounded-full"
          borderWidth={2}
          duration={6}
          colorFrom="#ffaa40"
          colorTo="#9c40ff"
          size={150}
        />

        {/* Dock navbar */}
        <Dock className="relative z-50 pointer-events-auto flex items-center h-14 bg-background rounded-full px-2 shadow-md dark:border dark:border-white/10">
          {navItems.map((item: any) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "w-10 h-10"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full mx-2" />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                    <ThemeToggleButton  variant="circle-blur" start="top-right" 
                                // url="https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                
                                />
                {/* <ThemeToggle /> */}
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
