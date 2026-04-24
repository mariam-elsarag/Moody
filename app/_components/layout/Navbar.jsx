import Link from "next/link";
import React from "react";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Navbar = () => {
  return (
    <div
      className={`Container flex_center justify-between gap-2 border-b border-[#1E293B99] bg-background/80 h-[60px]`}
    >
      <Link href="/" className="text-primary-2 font-bold text-xl">
        Moody
      </Link>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
