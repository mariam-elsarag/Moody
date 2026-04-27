"use client";
import { LogoAr, LogoEn } from "@/app/_assets/images/Image";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <Link
      href="/"
      className="text-primary-2 font-bold text-xl"
      onClick={(e) => {
        if (window.location.pathname === `/${locale}/landing`) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <Image
        alt="Moody logo"
        src={isRtl ? LogoAr : LogoEn}
        className="w-[110px]"
      />
    </Link>
  );
};

export default Logo;
