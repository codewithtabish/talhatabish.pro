"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const locales = [
  { code: "en", label: "English" },
  { code: "ur", label: "Urdu" },
  { code: "ar", label: "Arabic" },
  { code: "zh", label: "中文" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "ja", label: "日本語" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div
      className="fixed top-4 right-6 z-[999] cursor-pointer"
      style={{ userSelect: "none" }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full cursor-pointer border border-muted bg-background shadow-sm hover:bg-muted/50 transition-colors p-2"
            aria-label="Change language"
          >
            <Globe size={18} className="cursor-pointer" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-36 p-1 rounded-lg border bg-background shadow-lg"
          sideOffset={8}
        >
          <div className="flex flex-col gap-1">
            {locales.map((l) => (
              <Button
                key={l.code}
                variant={l.code === currentLocale ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "justify-start w-full text-xs px-2 py-1 rounded-md",
                  l.code === currentLocale &&
                    "pointer-events-none font-semibold"
                )}
                onClick={() => handleLocaleChange(l.code)}
                disabled={l.code === currentLocale}
              >
                {l.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
