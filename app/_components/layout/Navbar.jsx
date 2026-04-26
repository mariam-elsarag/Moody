import Link from "next/link";
import React from "react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import Image from "next/image";
import { Logo } from "@/app/_assets/images/Image";

const Navbar = () => {
  return (
    <div
      className={`Container flex_center justify-between gap-2 border-b border-[#1E293B99] bg-background/80 h-[60px]`}
    >
      <Link href="/" className="text-primary-2 font-bold text-xl">
        <Image alt="Moody logo" src={Logo} className="w-[110px]" />
      </Link>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
