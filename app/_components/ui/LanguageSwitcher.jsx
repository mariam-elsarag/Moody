"use client";
import { LanguageIcon } from "@/app/_assets/icon/Icon";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LanguageSwitcher = ({ className, hasText = false }) => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log(locale, "kl");
  const switchLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      className={`${className ?? "flex items-center gap-2"}`}
      onClick={() => router.push(`/${switchLocale}${pathname.slice(3)}`)}
      aria-label="Language switcher"
    >
      <LanguageIcon />
      {hasText && <span className="text-tertiary">{t("lang")}</span>}
    </button>
  );
};

export default LanguageSwitcher;
