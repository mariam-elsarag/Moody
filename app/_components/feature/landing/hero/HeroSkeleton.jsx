"use client";
import React from "react";

const HeroSkeleton = () => {
  return (
    <section className="hero_wrapper mt-[65px]! min-h-[655px] flex_center justify-center landing_container relative overflow-hidden text-white">
      {/* glow shapes (same as original) */}
      <div className="absolute top-[-69px] start-[-64px] w-[192px] h-[291px] blur-[32px] bg-[#4F46E5] opacity-40" />
      <div className="absolute bottom-[-59px] end-[-64px] w-[192px] h-[291px] blur-[32px] bg-[#06B6D4] opacity-40" />

      {/* content */}
      <div className="max-w-[831px] w-full flex flex-col gap-6 items-center justify-center text-center">
        {/* title skeleton */}
        <div className="flex flex-col gap-3 items-center w-full animate-pulse">
          <div className="h-8 w-[70%] rounded-xl bg-white/10 backdrop-blur-md" />
          <div className="h-8 w-[50%] rounded-xl bg-white/10 backdrop-blur-md" />
        </div>

        {/* description */}
        <div className="flex flex-col gap-2 items-center w-full animate-pulse">
          <div className="h-4 w-[60%] rounded-lg bg-white/10 backdrop-blur-md" />
          <div className="h-4 w-[40%] rounded-lg bg-white/10 backdrop-blur-md" />
        </div>

        {/* input skeleton */}
        <div className="relative w-full max-w-[672px] mt-4">
          {/* gradient glow */}
          <div className="landing_gradiant h-[60px] sm:h-[72px] w-full blur-sm rounded-full absolute top-1/2 -translate-y-1/2" />

          {/* glass input */}
          <div className="w-full flex items-center justify-between gap-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full p-2 relative z-[10] animate-pulse">
            <div className="h-4 w-[60%] rounded-md bg-white/10" />

            <div className="rounded-full size-12 bg-white/10 backdrop-blur-md" />
          </div>
        </div>

        {/* footer text */}
        <div className="flex flex-col gap-3 items-center mt-2 animate-pulse">
          <div className="h-3 w-[180px] rounded bg-white/10 backdrop-blur-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
