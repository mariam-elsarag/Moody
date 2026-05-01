"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowIcon } from "@/app/_assets/icon/Icon";

const Accordion = ({ items, titleKey = "title", contentKey = "content" }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const locale = useLocale();
  const isRtl = locale === "ar";

  const getValue = (item, key) => {
    if (isRtl && item[`${key}_ar`]) return item[`${key}_ar`];
    return item[key];
  };

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4" dir={isRtl ? "rtl" : "ltr"}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-white/10 bg-[#1E293B66] backdrop-blur-lg rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 sm:p-6 text-start"
            >
              <span className="text-white font-bold text-sm md:text-base">
                {getValue(item, titleKey)}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-white text-xl"
              >
                <ArrowIcon />
              </motion.span>
            </button>

            {/* Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className=" px-4 sm:px-6 pb-4 sm:pb-6 pt-2 sm:pt-4 border-t border-white/5 text-sm sm:text-base text-tertiary">
                    {getValue(item, contentKey)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
