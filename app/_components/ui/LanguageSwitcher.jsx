"use client";
import { LanguageIcon } from "@/app/_assets/icon/Icon";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LanguageSwitcher = ({ className }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      className={`${className ?? ""}`}
      onClick={() => router.push(`/${switchLocale}${pathname.slice(3)}`)}
    >
      <LanguageIcon />
    </button>
  );
};

export default LanguageSwitcher;
