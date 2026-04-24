"use client";
import { MicIcon, PauseIcon, XIcon } from "@/app/_assets/icon/Icon";
import React, { useState } from "react";
import Button from "../../ui/Button";

const Record = () => {
  const [isRecord, setIsRecord] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <section
      className={` flex_center gap-8 absolute bottom-12 left-1/2 -translate-x-1/2`}
    >
      <Button
        icon={<XIcon />}
        size="free"
        className="size-[56px]"
        variant="glass"
      />
      <button className="bg-primary-container transition hover:bg-primary size-20 shadow_primary  rounded-full flex items-center justify-center">
        <MicIcon />
      </button>
      <Button
        icon={<PauseIcon />}
        size="free"
        className="size-[56px]"
        variant="glass"
      />
    </section>
  );
};

export default Record;
