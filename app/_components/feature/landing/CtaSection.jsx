import { useTranslations } from "next-intl";
import React from "react";
import Button from "../../ui/Button";

const CtaSection = () => {
  const t = useTranslations();
  return (
    <section className="landing_container section_p">
      <div className="cta_section_contaienr relative overflow-hidden bg-[#4F46E5] drop-shadow-primary  py-10 sm:py-20 px-4 sm:px-10 md:px-[65px] lg:p-[96px] rounded-[32px] sm:rounded-[48px] mx-auto w-full max-w-[1024px]">
        <div className="flex items-center justify-center text-center flex-col gap-4 sm:gap-8">
          <h2 className="text-white font-bold text-base xs:text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px]">
            {t("cta_section_title")}
          </h2>
          <p className="text-white/80 max-w-[566px] text-sm sm:text-base text-center">
            {t("cta_section_description")}
          </p>
          <Button
            className="sm:min-w-[280px]"
            text={t("get_started_free")}
            variant="white"
            size="xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
