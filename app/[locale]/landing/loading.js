import Spinner from "@/app/_components/feadback/Spinner";
import React from "react";

const Loading = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <Spinner />
      LOADER
    </div>
  );
};

export default Loading;
