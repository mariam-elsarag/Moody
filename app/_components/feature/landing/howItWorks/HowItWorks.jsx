"use client";
import Section_Header from "@/app/_components/layout/Section_Header";
import { howItWorks } from "@/app/_utils/Mock";
import { useLocale } from "next-intl";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
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

const HowItWorks = () => {
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <section className="landing_container section_p flex flex-col main_gap ">
      <Section_Header title="how_it_works_title" />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        className="grid  xs:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12"
      >
        {howItWorks?.map((howItWorksItem, idx) => (
          <motion.div
            variants={itemVariants}
            className="flex items-center flex-col justify-center text-center mx-auto max-w-[362px] gap-3"
            key={howItWorksItem?.id}
          >
            <span className="flex items-center justify-center size-16 rounded-full bg-glass-bg/40 font-bold text-xl text-primary-2  border border-primary/30 backdrop-blur-lg">
              {idx + 1}
            </span>
            <h4 className="text-white text-xl">
              {howItWorksItem?.[isRtl ? "title_ar" : "title"]}
            </h4>
            <p className="text-tertiary text-base">
              {howItWorksItem?.[isRtl ? "description_ar" : "description"]}
            </p>
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
};

export default HowItWorks;
