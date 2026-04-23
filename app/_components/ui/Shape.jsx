import React from "react";

const Shape = ({ size, className }) => {
  return (
    <div
      className={` bg-primary/10 blur-[120px] rounded-full fixed ${className ?? ""}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Shape;
