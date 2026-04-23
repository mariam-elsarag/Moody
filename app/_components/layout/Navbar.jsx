import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className={`container flex_center border-b border-[#1E293B99] bg-background/80 h-[60px]`}
    >
      <Link href="/" className="text-white font-bold text-xl">
        Moody
      </Link>
    </div>
  );
};

export default Navbar;
