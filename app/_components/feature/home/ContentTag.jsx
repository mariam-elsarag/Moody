"use client";
import React, { useState } from "react";
import BoxLayout from "../../ui/BoxLayout";
import Badge from "../../ui/Badge";
import { contextTag } from "@/app/_utils/Mock";

const ContentTag = ({ select, onSelect }) => {
  return (
    <BoxLayout>
      <div className="flex flex-wrap items-center gap-3">
        {contextTag?.map((item) => (
          <Badge
            isSelect={select?.content?.includes(item?.id)}
            onSelect={() => {
              onSelect((pre) => {
                if (pre?.content?.includes(item?.id)) {
                  return pre.filter((tags) => tags !== item?.id);
                } else {
                  return [...pre, item?.id];
                }
              });
            }}
            key={item?.id}
            text={item?.name}
            round="full"
          />
        ))}
      </div>
    </BoxLayout>
  );
};

export default ContentTag;
