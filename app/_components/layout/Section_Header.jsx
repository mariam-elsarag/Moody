import { useTranslations } from "next-intl";
import React from "react";

const Section_Header = ({
  title,
  description,
  translate = true,
  className,
}) => {
  const t = useTranslations();
  return (
    <header
      className={`flex flex-col text-center items-center justify-center gap-2 sm:gap-4 ${className ?? ""} `}
    >
      {title && (
        <h2 className="text-white font-bold text-xl sm:text-[28px] md:text-[32px]">
          {translate ? t(title) : title}
        </h2>
      )}
      {description && (
        <h3 className="text-tertiary font-normal text-sm sm:text-base">
          {translate ? t(description) : description}
        </h3>
      )}
    </header>
  );
};

export default Section_Header;
