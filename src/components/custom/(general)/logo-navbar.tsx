"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../language-switcher";
import { usePathname } from "next/navigation";

export default function LogoNavbar() {
  const pathname = usePathname();

  // Only show on the exact root "/"
  if (pathname !== "/") return null;

  return (
    <nav
      className="w-full justify-between flex items-center px-6 pt-12 pb-20 md:pb-10 h-16"
      dir="ltr"
    >
      <Link href="/" className="flex items-center gap-3 h-12">
        <div className="relative">
          <Image
            src="/images/brand-logo.png"
            alt="Code with Tabish Logo"
            width={220}
            height={150}
            className="object-cover"
            priority
            sizes="148px"
          />
        </div>
        {/* <span className="text-xl font-bold text-gray-800 dark:text-white">Code with Tabish</span> */}
      </Link>
      <div></div>
      <div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
