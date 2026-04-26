"use client";
import React, { useState } from "react";
import ModeCard from "./ModeCard";
import ContentTag from "./ContentTag";

const HomeWrapper = () => {
  const [select, setSelect] = useState({
    content: [],
    mode: null,
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <ModeCard select={select} onSelect={setSelect} />
        </div>
        {/* content */}
        {/* aside */}
        <aside className="md:col-span-4 flex flex-col gap-6 ">
          <ContentTag select={select} onSelect={setSelect} />
        </aside>
      </div>
    </>
  );
};

export default HomeWrapper;
