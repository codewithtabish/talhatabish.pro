"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";

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
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Listen for route change complete to hide loading
  React.useEffect(() => {
    if (!loading) return;
    const handleRouteChange = () => setLoading(false);

    window.addEventListener("next-route-done", handleRouteChange);
    return () => window.removeEventListener("next-route-done", handleRouteChange);
  }, [loading]);

  // Patch for Next.js: listen for route change complete
  React.useEffect(() => {
    // Next.js doesn't emit a custom event, so we use a MutationObserver as a workaround
    if (!loading) return;
    let timeout: NodeJS.Timeout;
    const observer = new MutationObserver(() => {
      // When the DOM changes, assume navigation is done after a short delay
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setLoading(false);
      }, 700); // Adjust as needed for your app's speed
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [loading]);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    setLoading(true);
    setOpen(false);
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
    // The loading overlay will disappear when the new page is rendered
  };

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center  backdrop-blur-sm transition-all">
          <Loader2 className="animate-spin text-primary" size={48} />
        </div>
      )}

      <div
        className="fixed top-4 right-6 z-[999] cursor-pointer"
        style={{ userSelect: "none" }}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "rounded-full border border-muted bg-background shadow-sm hover:bg-muted/50 transition-colors p-2",
                open && "ring-2 ring-primary"
              )}
              aria-label="Change language"
              disabled={loading}
            >
              <Globe size={20} className="text-primary" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-40 p-2 rounded-xl border bg-background shadow-xl animate-fade-in"
            sideOffset={8}
          >
            <div className="flex flex-col gap-1">
              {locales.map((l) => (
                <Button
                  key={l.code}
                  variant={l.code === currentLocale ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "justify-start w-full text-xs px-3 py-2 rounded-lg transition-all",
                    l.code === currentLocale &&
                      "pointer-events-none font-semibold bg-primary/90 text-white"
                  )}
                  onClick={() => handleLocaleChange(l.code)}
                  disabled={l.code === currentLocale || loading}
                  tabIndex={0}
                  aria-current={l.code === currentLocale}
                >
                  <span className="flex items-center gap-2">
                    {l.label}
                    {loading && l.code !== currentLocale && (
                      <Loader2 className="ml-2 animate-spin" size={16} />
                    )}
                  </span>
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
