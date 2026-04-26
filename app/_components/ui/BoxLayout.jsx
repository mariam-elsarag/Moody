import React from "react";

const BoxLayout = ({ children, className }) => {
  return (
    <div
      className={`bg-[#1E293B66] border border-white/8 backdrop-blur-xl rounded-2xl p-6 w-full ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default BoxLayout;
