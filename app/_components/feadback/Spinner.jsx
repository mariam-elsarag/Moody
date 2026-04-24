import React from "react";

const Spinner = ({ size = "lg", className }) => {
  const sizes = {
    lg: "w-12 h-12  border-2",
    sm: "w-4 h-4 border-1",
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`rounded-full animate-spin border-t-transparent ${
          className ?? "border-primary-3"
        } ${sizes[size]}  `}
      ></div>
    </div>
  );
};

export default Spinner;
