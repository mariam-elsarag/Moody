"use client";

import { MicIcon } from "@/app/_assets/icon/Icon";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};
const Hero = ({ data }) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="hero_wrapper mt-[65px]! min-h-[550px] sm:min-h-[655px] flex_center justify-center landing_container relative overflow-hidden text-white">
      {/* background shapes */}
      <div className="absolute top-[-69px] start-[-64px] w-[192px] h-[291px] blur-[32px] bg-[#4F46E5] opacity-40" />
      <div className="absolute bottom-[-59px] end-[-64px] w-[192px] h-[291px] blur-[32px] bg-[#06B6D4] opacity-40" />

      {/* hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[831px] w-full flex flex-col gap-4 sm:gap-6 items-center justify-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex_center flex-col text-[22px] leading-[35px] xs:text-[30px] xs:leading-[35px] sm:text-[40px] sm:leading-[40px] md:text-[45px] md:leading-[50px] lg:text-[55px] lg:leading-[60px] font-bold"
          dangerouslySetInnerHTML={{
            __html: data?.[isRtl ? "title_ar" : "title"],
          }}
        />

        <motion.p
          custom={0.5}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-tertiary sm:max-w-[500px] lg:max-w-[668px] font-normal text-sm md:text-base lg:text-lg"
        >
          {data?.[isRtl ? "description_ar" : "description"]}
        </motion.p>

        {/* Input */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full max-w-[672px]"
        >
          <div className="landing_gradiant h-[60px] sm:h-[72px] w-full max-w-[672px] blur-sm rounded-full absolute top-1/2 -translate-y-1/2" />

          <div className="bg-[#020617] w-full flex items-center justify-between gap-2 border border-[#C7C4D733] relative z-[10] rounded-full p-1.5 sm:p-2">
            <p className="text-tertiary/50 flex-1 text-start px-4 sm:px-6 text-sm sm:text-base ">
              {t("talk_to_moody")}
            </p>

            <span className="flex_center justify-center rounded-full size-11 sm:size-12 bg-primary hover:bg-primary-container">
              <MicIcon width="20" heigth="21" />
            </span>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          custom={1.5}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {" "}
          <p className="text-tertiary text-xs sm:text-sm">
            {t("join_mody_text", { seakers: data?.seekers_count ?? 0 })}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
