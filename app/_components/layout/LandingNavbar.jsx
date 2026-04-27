"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import Button from "../ui/Button";
import { BurgerIcon } from "@/app/_assets/icon/Icon";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import Logo from "../ui/Logo";

const navList = [
  { id: 1, label: "features", url: "#features" },
  { id: 2, label: "methodology", url: "#methodology" },
  { id: 3, label: "support", url: "#support" },
];
const LandingNavbar = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [activeSection, setActiveSection] = useState("");
  const [openNavbar, setOpenNavbar] = useState(false);
  const ref = useOutsideClick(() => setOpenNavbar(false));

  useEffect(() => {
    const sections = navList
      .map((item) => document.querySelector(item.url))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
            found = true;
          }
        });

        if (!found) {
          setActiveSection("");
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>
      {/* navbar for large screen */}
      <header className="landing_container  justify-between  fixed left-1/2 -translate-x-1/2 top-0 h-[65px] backdrop-blur-md flex_center text-white border-b border-[#1E293B80] bg-[#0F172A99]">
        <Logo />
        <nav className="hidden sm:flex items-center gap-6">
          {navList?.map((navlink) => {
            return (
              <Link
                key={navlink?.id}
                className={`font-medium text-base ${activeSection === navlink.url ? "text-primary-2" : "text-[#94A3B8]"}`}
                href={`/${locale}/landing${navlink?.url}`}
                onClick={(e) => {
                  const hash = navlink.url;
                  const el = document.querySelector(hash);

                  if (window.location.hash === hash && el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t(navlink?.label)}
              </Link>
            );
          })}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm" text={t("getStarted")} />
        </div>
        <button className="flex sm:hidden" onClick={() => setOpenNavbar(true)}>
          <BurgerIcon />
        </button>
      </header>
      {/* navbar for sm screen */}
      <aside
        className={`block sm:hidden fixed bg-white/3 backdrop-blur-sm p-3 transition ${openNavbar ? "z-50  opacity-100" : "z-[-1] opacity-0"} inset-0`}
      >
        <div
          ref={ref}
          className={`h-full bg-background transition py-6 px-4 flex flex-col justify-between gap-8 rounded-xl w-[280px] border border-white/5 ${openNavbar ? "translate-x-0" : isRtl ? "translate-x-full" : `-translate-x-full`} `}
        >
          <header>
            <Logo />
          </header>
          <nav className="flex-1 flex flex-col gap-4">
            {navList?.map((navlink) => {
              return (
                <Link
                  key={navlink?.id}
                  className={`font-medium text-sm ${activeSection === navlink.url ? "text-primary-2" : "text-[#94A3B8]"}`}
                  href={`/${locale}/landing${navlink?.url}`}
                  onClick={(e) => {
                    const hash = navlink.url;
                    const el = document.querySelector(hash);

                    if (window.location.hash === hash && el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t(navlink?.label)}
                </Link>
              );
            })}
          </nav>
          <footer className="flex flex-col gap-4">
            <LanguageSwitcher hasText />
            <Button className="w-full" size="md" text={t("getStarted")} />
          </footer>
        </div>
      </aside>
    </>
  );
};

export default LandingNavbar;
