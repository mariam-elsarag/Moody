import { useTranslations } from "next-intl";
import React from "react";

const Greating = ({ name }) => {
  const t = useTranslations();
  return (
    <header className="flex flex-col gap-3">
      <h1 className="text-white text-[28px] font-extrabold truncate md:text-[32px] md:font-bold">
        {t("greating", { name })}
      </h1>
      <p className="text-tertiary text-base font-medium md:text-lg md:font-normal">
        {t("how_are_you_fealing")}
      </p>
    </header>
  );
};

export default Greating;
