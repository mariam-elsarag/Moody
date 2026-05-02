"use client";
import {
  KeyIconImg,
  ProtectIconImg,
  TrustAbstractImg,
  TrustIconImg,
} from "@/app/_assets/images/Image";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const trust = [
  {
    id: 1,
    image: ProtectIconImg,
    width: 16,
    height: 20,
    title: "hipaa_title",
    description: "hipaa_description",
  },
  {
    id: 2,
    image: KeyIconImg,
    width: 23,
    height: 12,
    title: "encryption_title",
    description: "encryption_description",
  },
];
const Trust = () => {
  const t = useTranslations();
  return (
    <section className="relative section_p landing_container flex flex-col gap-6">
      <Image
        src={TrustAbstractImg}
        alt="abstract image"
        className="opacity-10 size-[352px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        className="flex flex-col gap-6 items-center justify-center text-center"
      >
        <Image src={TrustIconImg} alt="icon" width={32} height={40} />
        <motion.h1
          custom={0.5}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          className="text-white font-bold text-2xl xs:text-[32px] tracking-[-.64px]"
        >
          {t("trust_section_title")}
        </motion.h1>
        <motion.p
          custom={1.5}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          className="max-w-[702px] text-tertiary text-sm xs:text-base"
        >
          {t("trust_section_description")}
        </motion.p>
        <motion.section
          custom={2}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          className="max-w-[720px] grid sm:grid-cols-2 gap-4 sm:gap-8"
        >
          {trust?.map((item) => (
            <div
              className="bg-glass-bg/40 border border-white/10 backdrop-blur-lg p-6 rounded-2xl flex items-start gap-4"
              key={item?.id}
            >
              <Image
                src={item?.image}
                alt={`${item?.title}-image`}
                width={item?.width}
                height={item?.height}
              />
              <div className="flex flex-col gap-1 text-start">
                <h2 className="text-white font-bold text-sm xs:text-base">
                  {t(item?.title)}
                </h2>
                <p className="text-tertiary text-xs xs:text-sm">
                  {t(item?.description)}
                </p>
              </div>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </section>
  );
};

export default Trust;
