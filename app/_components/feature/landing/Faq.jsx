"use client";
import React from "react";
import Accordion from "../../ui/Accordion";
import Section_Header from "../../layout/Section_Header";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is Moody AI?",
    question_ar: "What is Moody AI?",
    answer: "Moody AI helps you understand your emotions using AI.",
    answer_ar: "Moody AI helps you understand your emotions using AI.",
  },
  {
    question: "Is it free?",
    question_ar: "Is it free?",
    answer: "Yes, there is a free version available.",
    answer_ar: "Yes, there is a free version available.",
  },
  {
    question: "Is my data safe?",
    question_ar: "Is my data safe?",
    answer: "We prioritize your privacy and data security.",
    answer_ar: "We prioritize your privacy and data security.",
  },
];

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
const Faq = () => {
  return (
    <section
      id="faq"
      className="landing_container section_p flex flex-col gap-[64px]"
    >
      <Section_Header title="faq_title" description="faq_description" />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        className="max-w-[800px] mx-auto w-full"
      >
        <motion.div variants={itemVariants}>
          <Accordion items={faqData} titleKey="question" contentKey="answer" />
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Faq;
