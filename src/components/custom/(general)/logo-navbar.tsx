import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../language-switcher";

export default function LogoNavbar() {
  return (
    <nav
      className="w-full justify-between flex items-center px-6 h-16 "
      dir="ltr" // This line forces left-to-right direction for the navbar only
    >
        <div></div>
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
      <div className="">
      <LanguageSwitcher/>

      </div>

      {/* Add more nav items here if needed */}
    </nav>
  );
}
