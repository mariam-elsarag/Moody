"use client";
import React from "react";
import BoxLayout from "../../ui/BoxLayout";
import {
  DownEmoji,
  HappyEmoji,
  InspiredEmoji,
  NaturalEmoji,
  PeacfulEmoji,
} from "@/app/_assets/images/Image";
import Image from "next/image";
import { useTranslations } from "next-intl";

const modes = [
  {
    image: DownEmoji,
    text: "down",
    value: "down",
  },
  {
    image: NaturalEmoji,
    text: "neutral",
    value: "neutral",
  },
  {
    image: PeacfulEmoji,
    text: "peaceful",
    value: "peaceful",
  },
  {
    image: HappyEmoji,
    text: "happy",
    value: "happy",
  },
  {
    image: InspiredEmoji,
    text: "inspired",
    value: "inspired",
  },
];
const ModeCard = ({ select, onSelect }) => {
  const t = useTranslations();
  console.log(select, "se");
  return (
    <BoxLayout className="max-w-[674px]">
      <ul className="flex items-center justify-between gap-3">
        {modes?.map((mode, idx) => (
          <li
            key={idx}
            onClick={() => {
              onSelect((pre) => {
                if (pre?.mode === mode?.value) {
                  return { ...pre, mode: null };
                } else {
                  return { ...pre, mode: mode?.value };
                }
              });
            }}
            className={` transition flex flex-col gap-3 cursor-pointer text-center items-center text-xs font-normal ${select?.mode === mode?.value ? "text-primary-2" : "text-tertiary hover:text-primary-2"} `}
          >
            <figure
              className={` transition ${
                select?.mode === mode?.value
                  ? "white_dropshadow scale-[1.5] sm:scale-100 "
                  : "scale-[.9] sm:scale-100"
              }`}
            >
              <Image
                src={mode?.image}
                className={`size-[28px] transition ${select?.mode === mode?.value ? "" : "brightness-50 hover:brightness-100"}`}
                alt={t(mode?.text)}
              />
            </figure>
            <span className="hidden sm:flex tracking-[1px]">
              {t(mode?.text)}
            </span>
          </li>
        ))}
      </ul>
    </BoxLayout>
  );
};

export default ModeCard;
