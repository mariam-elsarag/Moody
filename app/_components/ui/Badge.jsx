import React from "react";

const Badge = ({
  text,
  variant = "glass",
  isSelect = false,
  onSelect,
  size = "base",
  round = "full",
}) => {
  const base = ``;
  const styles = {
    glass: `${isSelect ? " text-primary-3 bg-primary/10 border border-primary/30" : "bg-[#1E293B] border border-white/5 text-[#CBD5E1]"}`,
  };
  const sizes = {
    base: " py-2 px-4 text-sm font-medium",
  };
  const radious = {
    full: "rounded-full",
  };
  return (
    <button
      className={` ${styles[variant]} ${radious[round ?? "full"]} ${sizes[size ?? "base"]} ${onSelect ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => {
        if (onSelect) {
          onSelect();
        }
      }}
    >
      {text && <span>{text}</span>}
    </button>
  );
};

export default Badge;
