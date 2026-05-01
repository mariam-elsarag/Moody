"use client";

import {
  ChatIconImg,
  EditIconImg,
  FeatureIconImg,
  FeatureWaveImg,
  StatIconImg,
} from "@/app/_assets/images/Image";
import Section_Header from "../../../layout/Section_Header";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
const featureList = [
  {
    id: 1,
    columns: [
      {
        id: 1,
        title: "ai_assistant",
        description: "ai_assistant_descripton",
        icon: ChatIconImg,
        image: FeatureWaveImg,
        isScaled: true,
        contentClassName: "max-w-[411px]",
      },
      {
        id: 2,
        title: "smart_journal",
        description: "smart_journal_description",
        icon: EditIconImg,
      },
      {
        id: 3,
        title: "deep_insights",
        description: "deep_insights_description",
        icon: StatIconImg,
        containerClassName: "order-3 flex! lg:hidden!",
      },
    ],
  },
  {
    id: 2,
    columns: [
      {
        id: 4,
        title: "deep_insights",
        description: "deep_insights_description",
        icon: StatIconImg,
        containerClassName: "order-3 hidden lg:flex!",
      },
      {
        id: 4,
        title: "smart_suggestions",
        description: "smart_suggestions_description",
        icon: FeatureIconImg,
        isScaled: true,
        containerClassName: "bg-primary-5! order-4",
        contentClassName: "max-w-[512px]",
        hasHilight: true,
      },
    ],
  },
];

const Features = () => {
  const t = useTranslations();
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 1024);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <section
      id="features"
      className="section_p landing_container flex flex-col gap-[64px]"
    >
      <Section_Header title="feature_title" description="feature_descripton" />

      <section className="w-full flex flex-col gap-6">
        {featureList.map((rows) => (
          <motion.section
            key={rows.id}
            variants={isMd ? containerVariants : undefined}
            initial={isMd ? "hidden" : false}
            whileInView={isMd ? "show" : undefined}
            viewport={{ once: false, margin: "-300px" }}
            className="grid grid-cols-1 xs:grid-cols-12 gap-4 md:gap-6"
          >
            {" "}
            {rows.columns.map((column) => {
              const cardRef = useRef(null);

              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);

              const x = useSpring(mouseX, { stiffness: 120, damping: 20 });
              const y = useSpring(mouseY, { stiffness: 120, damping: 20 });

              const handleMouseMove = (e) => {
                if (!cardRef.current) return;

                const rect = cardRef.current.getBoundingClientRect();

                const xPos = e.clientX - rect.left;
                const yPos = e.clientY - rect.top;

                mouseX.set(xPos - 126);
                mouseY.set(yPos - 126);
              };
              return (
                <motion.div
                  key={column.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }} // 👈 important
                  ref={column.hasHilight ? cardRef : null}
                  onMouseMove={
                    column.hasHilight && isMd ? handleMouseMove : undefined
                  }
                  className={`relative flex flex-col md:flex-row items-start justify-between gap-2 overflow-hidden glass p-5 md:p-10 rounded-2xl md:rounded-[34px] ${
                    column?.containerClassName ?? ""
                  } ${
                    column.isScaled
                      ? "xs:col-span-12 lg:col-span-8"
                      : "xs:col-span-6 lg:col-span-4"
                  }`}
                >
                  {column.hasHilight && (
                    <motion.div
                      style={{ x, y }}
                      className="pointer-events-none absolute top-0 left-0"
                    >
                      <div className="size-[252px] bg-white/10 blur-[64px] rounded-full" />
                    </motion.div>
                  )}

                  <div
                    className={`relative z-10 flex flex-col gap-4 ${
                      column.contentClassName ?? ""
                    }`}
                  >
                    <Image
                      src={column.icon}
                      alt="icon"
                      width={30}
                      height={30}
                    />

                    <h4 className="text-white font-semibold text-2xl">
                      {t(column.title)}
                    </h4>

                    <p
                      className={`text-tertiary text-base ${
                        column.hasHilight ? "text-white/80" : ""
                      }`}
                    >
                      {t(column.description)}
                    </p>
                  </div>

                  {/* Image */}
                  {column.image && (
                    <Image
                      src={column.image}
                      alt="image"
                      className="hidden lg:flex w-[256px] h-[192px] rounded-2xl relative z-10"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.section>
        ))}
      </section>
    </section>
  );
};

export default Features;
