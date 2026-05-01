import React from "react";
import { GithubIcon, LinkedIcon, XIcon } from "@/app/_assets/icon/Icon";
import Logo from "../ui/Logo";
import { useTranslations } from "next-intl";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    title: "links",
    links: [
      { id: 1, label: "features", url: "#features" },
      { id: 2, label: "methodology", url: "#methodology" },
      { id: 3, label: "faq", url: "#faq" },
    ],
  },
  {
    id: 2,
    title: "legal",
    links: [
      { id: 4, label: "privacy_policy", url: "/privacy-policy" },
      { id: 5, label: "terms_and_condition", url: "/terms-and-conditions" },
      { id: 6, label: "crisis_resources", url: "/crisis-resources" },
    ],
  },
];
const social = [
  { id: 7, icon: <XIcon />, url: "" },
  { id: 8, icon: <GithubIcon width="16" heigth="16" />, url: "" },
  { id: 9, icon: <LinkedIcon width="16" heigth="16" />, url: "" },
];
const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="landing_container pt-10 pb-6 flex flex-col gap-4 bg-background/80 backdrop-blur-md">
      {/* upper */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-4 ">
        <div className="  flex flex-col gap-4">
          <Logo />
          <p className="text-tertiary text-xs sm:text-sm max-w-[340px]">
            {t("moody_mission")}
          </p>
          <ul className="flex xs:hidden items-center gap-3">
            {social?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="bg-white/10 size-7 flex items-center justify-center rounded-sm"
                >
                  {item?.icon}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-2">
          {footerLinks?.map((footerLink) => (
            <div key={footerLink?.id} className="flex flex-col gap-4">
              <h3 className="text-[#E2E8F0] uppercase  text-sm font-bold uppercase">
                {t(footerLink?.title)}
              </h3>
              <nav className="flex flex-col gap-4">
                {footerLink?.links?.map((linkItem) => (
                  <Link
                    className="text-tertiary text-xs uppercase "
                    href={linkItem?.url}
                    key={linkItem?.id}
                  >
                    {t(linkItem?.label)}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full h-px bg-white/10" />
      <section className="flex  items-center xs:justify-between gap-4">
        <p className="text-tertiary text-xs font-semibold ">
          &copy;{`${new Date().getFullYear()} ${t("copy_right")}`}
        </p>
        <ul className="hidden xs:flex items-center gap-4">
          {social?.map((item) => {
            return (
              <li
                key={item?.id}
                className="bg-white/10 size-8 flex items-center justify-center rounded-sm"
              >
                {item?.icon}
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
