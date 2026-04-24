import React from "react";

const colors = [
  {
    color: "#6063EE",
    height: "64px",
  },
  {
    color: "#4648D4",
    height: "96px",
  },
  {
    color: "#818CF8",
    height: "128px",
  },
  {
    color: "#22D3EE",
    height: "192px",
  },
  {
    color: "#A78BFA",
    height: "144px",
  },
  {
    color: "#6063EE",
    height: "224px",
  },
  {
    color: "#A5B4FC",
    height: "160px",
  },
  {
    color: "#4648D4",
    height: "96px",
  },
  {
    color: "#6063EE",
    height: "48px",
  },
];

const Wave = () => {
  return (
    <div className="wave_container  rounded-full h-[256px] flex items-center gap-2 justify-center">
      {Array.from({ length: 9 }).map((_, idx) => {
        return (
          <div
            key={idx}
            className="w-1.5 animate_wave rounded-full"
            style={{
              background: colors[idx]?.color,
              "--max-height": colors[idx]?.height,
              animationDelay: `${idx * 0.1}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Wave;
