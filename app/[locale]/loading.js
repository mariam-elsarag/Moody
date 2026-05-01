import Spinner from "@/app/_components/feadback/Spinner";
import React from "react";

const Loading = ({ className }) => {
  return (
    <div
      className={` fixed inset-0 bg-background/10 backdrop-blur-sm z-50 flex items-center justify-center h-dvh ${className ?? ""}`}
    >
      <Spinner />
    </div>
  );
};

export default Loading;
